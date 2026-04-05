import os
import json
import requests
from dotenv import load_dotenv
from fastapi import FastAPI
from fastapi.staticfiles import StaticFiles
from fastapi.responses import FileResponse
from pydantic import BaseModel, Field
from langchain_groq import ChatGroq
from langchain_community.tools.tavily_search import TavilySearchResults
from langchain_core.prompts import PromptTemplate

# Load environment variables
load_dotenv()

# Keys
av_api_key = os.getenv("ALPHA_VANTAGE_API_KEY")
groq_api_key = os.getenv("GROQ_API_KEY")
tavily_api_key = os.getenv("TAVILY_API_KEY")

# ── FastAPI App ──
app = FastAPI(title="AI Market Insights")
app.mount("/static", StaticFiles(directory="static"), name="static")


# ══════════════════════════════════
#  Pydantic Models (Structured I/O)
# ══════════════════════════════════

class AnalyzeRequest(BaseModel):
    category: str
    symbol: str
    temperature: float = 0.7


class AnalysisReport(BaseModel):
    """Structured analysis report returned to the frontend."""
    price_overview: str = Field(description="2-3 sentence overview of the current price context and recent movement")
    market_context: str = Field(description="2-3 sentence overview of broader market conditions and how they affect this asset")
    key_news: list[str] = Field(description="List of 3-5 key news headlines/summaries from the last 24 hours")
    sentiment: str = Field(description="One word: Bullish, Bearish, or Neutral")
    sentiment_explanation: str = Field(description="2-3 sentence explanation of why the sentiment is what it is")
    technical_outlook: str = Field(description="2-3 sentence technical analysis perspective on price levels, trends, and momentum")
    risk_factors: list[str] = Field(description="List of 2-4 current risk factors")
    opportunities: list[str] = Field(description="List of 2-3 bullish catalysts or opportunities")
    investor_insight: str = Field(description="Actionable 2-3 sentence conclusion for an investor")


class NewsSource(BaseModel):
    """A news article reference from Tavily search."""
    title: str
    url: str
    snippet: str


class AnalyzeResponse(BaseModel):
    symbol: str
    category: str
    price: float | None
    price_formatted: str
    report: AnalysisReport
    news_sources: list[NewsSource] = Field(default_factory=list)


# ══════════════════════════════════
#  Price Fetcher (Alpha Vantage)
# ══════════════════════════════════

def get_price(category: str, symbol: str) -> float | None:
    """Fetch live price from Alpha Vantage."""
    try:
        if category == "Stocks":
            url = (
                f"https://www.alphavantage.co/query"
                f"?function=GLOBAL_QUOTE&symbol={symbol}&apikey={av_api_key}"
            )
            data = requests.get(url, timeout=15).json()
            if "Global Quote" in data and "05. price" in data["Global Quote"]:
                return float(data["Global Quote"]["05. price"])
        else:
            # Works for Crypto, Forex, and Commodities (XAU, XAG, etc.)
            from_sym = symbol.split("/")[0] if "/" in symbol else symbol
            to_sym = symbol.split("/")[1] if "/" in symbol else "USD"
            url = (
                f"https://www.alphavantage.co/query"
                f"?function=CURRENCY_EXCHANGE_RATE"
                f"&from_currency={from_sym}&to_currency={to_sym}&apikey={av_api_key}"
            )
            data = requests.get(url, timeout=15).json()
            if "Realtime Currency Exchange Rate" in data:
                return float(data["Realtime Currency Exchange Rate"].get("5. Exchange Rate", 0))
    except Exception:
        pass
    return None


# ══════════════════════════════════
#  Routes
# ══════════════════════════════════

@app.get("/")
async def serve_frontend():
    return FileResponse("static/index.html")


@app.post("/api/analyze", response_model=AnalyzeResponse)
async def analyze(req: AnalyzeRequest):
    category = req.category
    symbol = req.symbol
    temperature = max(0.0, min(1.0, req.temperature))

    # ── 1. Price ──
    price = get_price(category, symbol)
    price_str = f"${price:,.6f}" if price is not None else "Unavailable"

    # ── 2. Tavily News Search ──
    search_text = ""
    news_sources: list[NewsSource] = []
    try:
        search = TavilySearchResults(max_results=6)
        asset_type = (
            "stock" if category == "Stocks"
            else "cryptocurrency" if category == "Crypto"
            else "commodity" if category == "Commodities"
            else "forex currency pair"
        )
        query = f"Latest breaking news and price analysis for {symbol} {asset_type} in the last 24 hours"
        results = search.invoke({"query": query})
        if results:
            for r in results:
                title = r.get("title", r.get("url", "News"))
                url = r.get("url", "")
                content = r.get("content", "")
                news_sources.append(NewsSource(
                    title=title[:200],
                    url=url,
                    snippet=content[:300] if content else "",
                ))
            # Build rich search context for LLM with source references
            search_text = "\n".join([
                f"- [{r.get('title', 'Source')}]({r.get('url', '')}): {r.get('content', '')}"
                for r in results
            ])
        if not search_text:
            search_text = "No recent significant news found."
    except Exception as e:
        search_text = f"News search unavailable: {e}"

    # ── 3. Groq LLM — Structured JSON Output ──
    report = _generate_structured_report(symbol, category, price_str, search_text, temperature)

    return AnalyzeResponse(
        symbol=symbol,
        category=category,
        price=price,
        price_formatted=price_str,
        report=report,
        news_sources=news_sources,
    )


def _generate_structured_report(
    symbol: str, category: str, price_str: str, search_text: str, temperature: float
) -> AnalysisReport:
    """Generate a structured AnalysisReport using Groq LLM with explicit JSON instructions."""

    try:
        llm = ChatGroq(
            groq_api_key=groq_api_key,
            model_name="llama-3.1-8b-instant",
            temperature=temperature,
        )

        prompt_text = """You are an expert financial researcher and market analyst. Analyze the following asset and return ONLY a valid JSON object (no markdown, no extra text, no code fences).

Asset: {symbol} ({category})
Current Price: {price}

Latest 24-hour news and sources:
{search_results}

Return EXACTLY this JSON structure:
{{
  "price_overview": "2-3 sentences about current price context, recent movement, and key price levels with specific numbers",
  "market_context": "2-3 sentences about the broader market environment and macro factors affecting this asset right now",
  "key_news": ["detailed headline 1 with context and impact", "detailed headline 2 with context", "detailed headline 3 with context", "headline 4 if available", "headline 5 if available"],
  "sentiment": "Bullish or Bearish or Neutral",
  "sentiment_explanation": "2-3 sentences explaining the sentiment using specific data points, metrics, and reasoning",
  "technical_outlook": "2-3 sentences about key technical levels, support/resistance zones, trend direction, and momentum indicators",
  "risk_factors": ["specific risk factor 1 with data", "specific risk factor 2 with data", "risk factor 3"],
  "opportunities": ["specific bullish catalyst 1", "opportunity 2", "opportunity 3"],
  "investor_insight": "3-4 sentence actionable, detailed conclusion for an investor, referencing specific levels and timeframes"
}}

IMPORTANT: Return ONLY the JSON object. No markdown. No explanation. No code fences. Just the raw JSON. Make each section detailed and data-driven, referencing the news sources provided."""

        prompt = PromptTemplate.from_template(prompt_text)
        chain = prompt | llm

        response = chain.invoke({
            "symbol": symbol,
            "category": category,
            "price": price_str,
            "search_results": search_text,
        })

        # Parse the JSON from LLM response
        raw = response.content.strip()
        # Remove any accidental code fences
        if raw.startswith("```"):
            raw = raw.split("\n", 1)[1] if "\n" in raw else raw[3:]
        if raw.endswith("```"):
            raw = raw[:-3]
        raw = raw.strip()

        parsed = json.loads(raw)
        return AnalysisReport(**parsed)

    except (json.JSONDecodeError, Exception) as e:
        # Fallback report if parsing fails
        return AnalysisReport(
            price_overview=f"The current price of {symbol} is {price_str}. Detailed analysis could not be generated at this time.",
            market_context="Broader market conditions are currently being assessed. Please retry for a comprehensive market context analysis.",
            key_news=["Unable to parse structured news. Please try again."],
            sentiment="Neutral",
            sentiment_explanation=f"Automated analysis encountered an issue: {str(e)[:100]}",
            technical_outlook="Technical analysis is temporarily unavailable. Retry for complete technical levels and trend analysis.",
            risk_factors=["Analysis system returned unstructured data", "Please retry for accurate results"],
            opportunities=["Retry analysis for identified opportunities"],
            investor_insight="We recommend retrying the analysis. If the issue persists, the AI model may be experiencing high load.",
        )
