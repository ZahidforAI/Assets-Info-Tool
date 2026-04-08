// ════════════════════════════════════════════════════════════
//  AI Market Insights — Professional Frontend (Enhanced)
// ════════════════════════════════════════════════════════════

/* ─── Asset Registry ─── */
const ASSETS = {
  Crypto: [
    { symbol: "BTC",   name: "Bitcoin",            logo: "https://assets.coingecko.com/coins/images/1/small/bitcoin.png" },
    { symbol: "ETH",   name: "Ethereum",           logo: "https://assets.coingecko.com/coins/images/279/small/ethereum.png" },
    { symbol: "BNB",   name: "BNB",                logo: "https://assets.coingecko.com/coins/images/825/small/bnb-icon2_2x.png" },
    { symbol: "SOL",   name: "Solana",             logo: "https://assets.coingecko.com/coins/images/4128/small/solana.png" },
    { symbol: "XRP",   name: "XRP",                logo: "https://assets.coingecko.com/coins/images/44/small/xrp-symbol-white-128.png" },
    { symbol: "DOGE",  name: "Dogecoin",           logo: "https://assets.coingecko.com/coins/images/5/small/dogecoin.png" },
    { symbol: "ADA",   name: "Cardano",            logo: "https://assets.coingecko.com/coins/images/975/small/cardano.png" },
    { symbol: "AVAX",  name: "Avalanche",          logo: "https://assets.coingecko.com/coins/images/12559/small/Avalanche_Circle_RedWhite_Trans.png" },
    { symbol: "DOT",   name: "Polkadot",           logo: "https://assets.coingecko.com/coins/images/12171/small/polkadot.png" },
    { symbol: "TRX",   name: "TRON",               logo: "https://assets.coingecko.com/coins/images/1094/small/tron-logo.png" },
    { symbol: "LINK",  name: "Chainlink",          logo: "https://assets.coingecko.com/coins/images/877/small/chainlink-new-logo.png" },
    { symbol: "MATIC", name: "Polygon",            logo: "https://assets.coingecko.com/coins/images/4713/small/polygon.png" },
    { symbol: "SHIB",  name: "Shiba Inu",          logo: "https://assets.coingecko.com/coins/images/11939/small/shiba.png" },
    { symbol: "LTC",   name: "Litecoin",           logo: "https://assets.coingecko.com/coins/images/2/small/litecoin.png" },
    { symbol: "UNI",   name: "Uniswap",            logo: "https://assets.coingecko.com/coins/images/12504/small/uni.jpg" },
    { symbol: "ATOM",  name: "Cosmos",             logo: "https://assets.coingecko.com/coins/images/1481/small/cosmos_hub.png" },
    { symbol: "BCH",   name: "Bitcoin Cash",       logo: "https://assets.coingecko.com/coins/images/780/small/bitcoin-cash-circle.png" },
    { symbol: "XLM",   name: "Stellar",            logo: "https://assets.coingecko.com/coins/images/100/small/Stellar_symbol_black_RGB.png" },
    { symbol: "NEAR",  name: "NEAR Protocol",      logo: "https://assets.coingecko.com/coins/images/10365/small/near.jpg" },
    { symbol: "ALGO",  name: "Algorand",           logo: "https://assets.coingecko.com/coins/images/4380/small/download.png" },
    { symbol: "FIL",   name: "Filecoin",           logo: "https://assets.coingecko.com/coins/images/12817/small/filecoin.png" },
    { symbol: "ETC",   name: "Ethereum Classic",   logo: "https://assets.coingecko.com/coins/images/453/small/ethereum-classic-logo.png" },
    { symbol: "HBAR",  name: "Hedera",             logo: "https://assets.coingecko.com/coins/images/3688/small/hbar.png" },
    { symbol: "ICP",   name: "Internet Computer",  logo: "https://assets.coingecko.com/coins/images/14495/small/Internet_Computer_logo.png" },
    { symbol: "VET",   name: "VeChain",            logo: "https://assets.coingecko.com/coins/images/3077/small/VeChain-Logo-768x725.png" },
    { symbol: "AAVE",  name: "Aave",               logo: "https://assets.coingecko.com/coins/images/12645/small/aave-token.png" },
    { symbol: "FTM",   name: "Fantom",             logo: "https://assets.coingecko.com/coins/images/4001/small/Fantom_round.png" },
    { symbol: "XTZ",   name: "Tezos",              logo: "https://assets.coingecko.com/coins/images/2713/small/tezos-logo.png" },
    { symbol: "THETA", name: "Theta Network",      logo: "https://assets.coingecko.com/coins/images/2538/small/theta-token-logo.png" },
    { symbol: "MKR",   name: "Maker",              logo: "https://assets.coingecko.com/coins/images/1364/small/Mark_Maker.png" },
    { symbol: "GRT",   name: "The Graph",          logo: "https://assets.coingecko.com/coins/images/13397/small/Graph_Token.png" },
    { symbol: "MANA",  name: "Decentraland",       logo: "https://assets.coingecko.com/coins/images/2566/small/decentraland-mana.png" },
    { symbol: "SAND",  name: "The Sandbox",        logo: "https://assets.coingecko.com/coins/images/12129/small/sandbox_logo.jpg" },
    { symbol: "AXS",   name: "Axie Infinity",      logo: "https://assets.coingecko.com/coins/images/13029/small/axie_infinity_logo.png" },
    { symbol: "ZEC",   name: "Zcash",              logo: "https://assets.coingecko.com/coins/images/382/small/zcash.png" },
    { symbol: "DASH",  name: "Dash",               logo: "https://assets.coingecko.com/coins/images/19/small/dash-logo.png" },
    { symbol: "ENJ",   name: "Enjin Coin",         logo: "https://assets.coingecko.com/coins/images/1102/small/enjin-coin-logo.png" },
    { symbol: "BAT",   name: "Basic Attention Token", logo: "https://assets.coingecko.com/coins/images/677/small/basic-attention-token.png" },
    { symbol: "COMP",  name: "Compound",           logo: "https://assets.coingecko.com/coins/images/12124/small/Comp.png" },
    { symbol: "CRV",   name: "Curve DAO",          logo: "https://assets.coingecko.com/coins/images/12124/small/Comp.png" },
  ],
  Stocks: [
    { symbol: "AAPL",  name: "Apple",            logo: "https://assets.parqet.com/logos/symbol/AAPL" },
    { symbol: "MSFT",  name: "Microsoft",        logo: "https://assets.parqet.com/logos/symbol/MSFT" },
    { symbol: "GOOGL", name: "Alphabet",         logo: "https://assets.parqet.com/logos/symbol/GOOGL" },
    { symbol: "AMZN",  name: "Amazon",           logo: "https://assets.parqet.com/logos/symbol/AMZN" },
    { symbol: "NVDA",  name: "NVIDIA",           logo: "https://assets.parqet.com/logos/symbol/NVDA" },
    { symbol: "META",  name: "Meta Platforms",   logo: "https://assets.parqet.com/logos/symbol/META" },
    { symbol: "TSLA",  name: "Tesla",            logo: "https://assets.parqet.com/logos/symbol/TSLA" },
    { symbol: "AMD",   name: "AMD",              logo: "https://assets.parqet.com/logos/symbol/AMD" },
    { symbol: "NFLX",  name: "Netflix",          logo: "https://assets.parqet.com/logos/symbol/NFLX" },
    { symbol: "DIS",   name: "Walt Disney",      logo: "https://assets.parqet.com/logos/symbol/DIS" },
    { symbol: "JPM",   name: "JPMorgan Chase",   logo: "https://assets.parqet.com/logos/symbol/JPM" },
    { symbol: "V",     name: "Visa",             logo: "https://assets.parqet.com/logos/symbol/V" },
    { symbol: "MA",    name: "Mastercard",       logo: "https://assets.parqet.com/logos/symbol/MA" },
    { symbol: "BA",    name: "Boeing",           logo: "https://assets.parqet.com/logos/symbol/BA" },
    { symbol: "GS",    name: "Goldman Sachs",    logo: "https://assets.parqet.com/logos/symbol/GS" },
    { symbol: "WMT",   name: "Walmart",          logo: "https://assets.parqet.com/logos/symbol/WMT" },
    { symbol: "KO",    name: "Coca-Cola",        logo: "https://assets.parqet.com/logos/symbol/KO" },
    { symbol: "PEP",   name: "PepsiCo",          logo: "https://assets.parqet.com/logos/symbol/PEP" },
    { symbol: "NKE",   name: "Nike",             logo: "https://assets.parqet.com/logos/symbol/NKE" },
    { symbol: "INTC",  name: "Intel",            logo: "https://assets.parqet.com/logos/symbol/INTC" },
    { symbol: "PYPL",  name: "PayPal",           logo: "https://assets.parqet.com/logos/symbol/PYPL" },
    { symbol: "UBER",  name: "Uber",             logo: "https://assets.parqet.com/logos/symbol/UBER" },
    { symbol: "CRM",   name: "Salesforce",       logo: "https://assets.parqet.com/logos/symbol/CRM" },
    { symbol: "ORCL",  name: "Oracle",           logo: "https://assets.parqet.com/logos/symbol/ORCL" },
    { symbol: "IBM",   name: "IBM",              logo: "https://assets.parqet.com/logos/symbol/IBM" },
    { symbol: "COIN",  name: "Coinbase",         logo: "https://assets.parqet.com/logos/symbol/COIN" },
    { symbol: "PLTR",  name: "Palantir",         logo: "https://assets.parqet.com/logos/symbol/PLTR" },
    { symbol: "SNAP",  name: "Snap Inc",         logo: "https://assets.parqet.com/logos/symbol/SNAP" },
    { symbol: "SQ",    name: "Block (Square)",   logo: "https://assets.parqet.com/logos/symbol/SQ" },
    { symbol: "SHOP",  name: "Shopify",          logo: "https://assets.parqet.com/logos/symbol/SHOP" },
    { symbol: "SPOT",  name: "Spotify",          logo: "https://assets.parqet.com/logos/symbol/SPOT" },
    { symbol: "ABNB",  name: "Airbnb",           logo: "https://assets.parqet.com/logos/symbol/ABNB" },
    { symbol: "ROKU",  name: "Roku",             logo: "https://assets.parqet.com/logos/symbol/ROKU" },
    { symbol: "ZM",    name: "Zoom",             logo: "https://assets.parqet.com/logos/symbol/ZM" },
    { symbol: "TSM",   name: "TSMC",             logo: "https://assets.parqet.com/logos/symbol/TSM" },
  ],
  Forex: [
    { symbol: "EUR/USD", name: "Euro / US Dollar",              logo: "https://flagcdn.com/w40/eu.png" },
    { symbol: "GBP/USD", name: "British Pound / US Dollar",     logo: "https://flagcdn.com/w40/gb.png" },
    { symbol: "USD/JPY", name: "US Dollar / Japanese Yen",      logo: "https://flagcdn.com/w40/jp.png" },
    { symbol: "AUD/USD", name: "Australian Dollar / USD",       logo: "https://flagcdn.com/w40/au.png" },
    { symbol: "USD/CAD", name: "US Dollar / Canadian Dollar",   logo: "https://flagcdn.com/w40/ca.png" },
    { symbol: "USD/CHF", name: "US Dollar / Swiss Franc",       logo: "https://flagcdn.com/w40/ch.png" },
    { symbol: "NZD/USD", name: "New Zealand Dollar / USD",      logo: "https://flagcdn.com/w40/nz.png" },
    { symbol: "EUR/GBP", name: "Euro / British Pound",          logo: "https://flagcdn.com/w40/eu.png" },
    { symbol: "EUR/JPY", name: "Euro / Japanese Yen",           logo: "https://flagcdn.com/w40/eu.png" },
    { symbol: "GBP/JPY", name: "British Pound / Yen",           logo: "https://flagcdn.com/w40/gb.png" },
    { symbol: "AUD/JPY", name: "Australian Dollar / Yen",       logo: "https://flagcdn.com/w40/au.png" },
    { symbol: "USD/SGD", name: "US Dollar / Singapore Dollar",  logo: "https://flagcdn.com/w40/sg.png" },
    { symbol: "USD/HKD", name: "US Dollar / Hong Kong Dollar",  logo: "https://flagcdn.com/w40/hk.png" },
    { symbol: "EUR/CHF", name: "Euro / Swiss Franc",            logo: "https://flagcdn.com/w40/eu.png" },
    { symbol: "GBP/CHF", name: "British Pound / Swiss Franc",   logo: "https://flagcdn.com/w40/gb.png" },
    { symbol: "USD/SEK", name: "US Dollar / Swedish Krona",     logo: "https://flagcdn.com/w40/se.png" },
    { symbol: "USD/NOK", name: "US Dollar / Norwegian Krone",   logo: "https://flagcdn.com/w40/no.png" },
    { symbol: "USD/TRY", name: "US Dollar / Turkish Lira",      logo: "https://flagcdn.com/w40/tr.png" },
    { symbol: "EUR/AUD", name: "Euro / Australian Dollar",      logo: "https://flagcdn.com/w40/eu.png" },
    { symbol: "USD/MXN", name: "US Dollar / Mexican Peso",      logo: "https://flagcdn.com/w40/mx.png" },
    { symbol: "USD/ZAR", name: "US Dollar / South African Rand",logo: "https://flagcdn.com/w40/za.png" },
    { symbol: "USD/INR", name: "US Dollar / Indian Rupee",      logo: "https://flagcdn.com/w40/in.png" },
    { symbol: "USD/CNY", name: "US Dollar / Chinese Yuan",      logo: "https://flagcdn.com/w40/cn.png" },
  ],
  Commodities: [
    { symbol: "XAU",  name: "Gold",            logo: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 64 64'%3E%3Ccircle cx='32' cy='32' r='30' fill='%23C9A96E'/%3E%3Ctext x='32' y='40' text-anchor='middle' font-size='22' font-weight='bold' fill='%23fff' font-family='Arial'%3EAu%3C/text%3E%3C/svg%3E" },
    { symbol: "XAG",  name: "Silver",          logo: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 64 64'%3E%3Ccircle cx='32' cy='32' r='30' fill='%23A8A9AD'/%3E%3Ctext x='32' y='40' text-anchor='middle' font-size='22' font-weight='bold' fill='%23fff' font-family='Arial'%3EAg%3C/text%3E%3C/svg%3E" },
    { symbol: "XPT",  name: "Platinum",        logo: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 64 64'%3E%3Ccircle cx='32' cy='32' r='30' fill='%23E5E4E2'/%3E%3Ctext x='32' y='40' text-anchor='middle' font-size='22' font-weight='bold' fill='%23444' font-family='Arial'%3EPt%3C/text%3E%3C/svg%3E" },
    { symbol: "XPD",  name: "Palladium",       logo: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 64 64'%3E%3Ccircle cx='32' cy='32' r='30' fill='%236B8BA4'/%3E%3Ctext x='32' y='40' text-anchor='middle' font-size='22' font-weight='bold' fill='%23fff' font-family='Arial'%3EPd%3C/text%3E%3C/svg%3E" },
    { symbol: "XCU",  name: "Copper",          logo: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 64 64'%3E%3Ccircle cx='32' cy='32' r='30' fill='%23B87333'/%3E%3Ctext x='32' y='40' text-anchor='middle' font-size='22' font-weight='bold' fill='%23fff' font-family='Arial'%3ECu%3C/text%3E%3C/svg%3E" },
  ],
};

const CAT_META = {
  Crypto: {
    icon: "🪙",
    title: "Cryptocurrencies",
    desc: "Bitcoin, Ethereum, Solana and 35+ digital assets with real-time prices.",
    color: "#f0b90b",
  },
  Stocks: {
    icon: "📈",
    title: "Stocks",
    desc: "Top US equities — tech giants, financials, consumer brands and more.",
    color: "#0ecb81",
  },
  Forex: {
    icon: "💱",
    title: "Forex",
    desc: "Major and cross currency pairs — EUR, GBP, JPY, CHF and more.",
    color: "#2962ff",
  },
  Commodities: {
    icon: "🏆",
    title: "Commodities",
    desc: "Precious metals — Gold, Silver, Platinum, Palladium and Copper.",
    color: "#C9A96E",
  },
};

/* ─── State ─── */
let state = { category: null, temperature: 0.7 };

/* ─── User Preferences (persisted to localStorage) ─── */
const PREFS_KEY = "ai_market_user_prefs";
const DEFAULT_PREFS = { displayName: "", temperature: 0.7, defaultCategory: "" };

function loadPrefs() {
  try {
    const raw = localStorage.getItem(PREFS_KEY);
    return raw ? { ...DEFAULT_PREFS, ...JSON.parse(raw) } : { ...DEFAULT_PREFS };
  } catch {
    return { ...DEFAULT_PREFS };
  }
}

function savePrefs(prefs) {
  localStorage.setItem(PREFS_KEY, JSON.stringify(prefs));
}

/* ─── DOM ─── */
const $ = (s) => document.querySelector(s);
const $$ = (s) => document.querySelectorAll(s);

const views = {
  categories: $("#view-categories"),
  assets: $("#view-assets"),
  report: $("#view-report"),
};

/* ─── Init ─── */
document.addEventListener("DOMContentLoaded", () => {
  renderCategories();
  bindNavigation();
  bindTemperature();
  bindSettings();
  applyPrefs();
});

/* ─── Navigation helpers ─── */
function showView(name) {
  Object.values(views).forEach((v) => v.classList.add("hidden"));
  views[name].classList.remove("hidden");
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function bindNavigation() {
  // Brand / home links
  $("#nav-home").addEventListener("click", () => showView("categories"));
  $("#bc-home").addEventListener("click", () => showView("categories"));
  $("#rbc-home").addEventListener("click", () => showView("categories"));
  $("#rbc-category").addEventListener("click", () => {
    if (state.category) selectCategory(state.category);
  });
}

function bindTemperature() {
  const slider = $("#temp-slider");
  const val = $("#temp-val");
  slider.addEventListener("input", () => {
    state.temperature = parseFloat(slider.value);
    val.textContent = state.temperature.toFixed(1);
  });
}

/* ─── Apply saved preferences on load ─── */
function applyPrefs() {
  const prefs = loadPrefs();

  // Apply default temperature
  state.temperature = prefs.temperature;
  const slider = $("#temp-slider");
  const val = $("#temp-val");
  slider.value = prefs.temperature;
  val.textContent = prefs.temperature.toFixed(1);

  // Update nav display name & avatar
  updateNavProfile(prefs.displayName);

  // Navigate to default category if set
  if (prefs.defaultCategory && ASSETS[prefs.defaultCategory]) {
    selectCategory(prefs.defaultCategory);
  }
}

function updateNavProfile(displayName) {
  const nameEl = $("#settings-display-name");
  const avatarEl = $("#settings-avatar");
  const label = displayName && displayName.trim() ? displayName.trim() : "Profile";
  nameEl.textContent = label.length > 12 ? label.slice(0, 12) + "…" : label;
  if (avatarEl) {
    avatarEl.textContent = label !== "Profile" ? label.charAt(0).toUpperCase() : "U";
  }
}

/* ─── Settings Modal ─── */
function bindSettings() {
  const btn = $("#settings-btn");
  const overlay = $("#settings-overlay");
  const closeBtn = $("#settings-close");
  const saveBtn = $("#settings-save");
  const resetBtn = $("#settings-reset");
  const prefTempSlider = $("#pref-temperature");
  const prefTempVal = $("#pref-temperature-val");

  // Open modal
  btn.addEventListener("click", () => {
    populateSettingsForm();
    overlay.classList.remove("hidden");
    overlay.classList.add("visible");
    $("#pref-name").focus();
  });

  // Close on overlay backdrop click
  overlay.addEventListener("click", (e) => {
    if (e.target === overlay) closeSettings();
  });

  // Close button
  closeBtn.addEventListener("click", closeSettings);

  // Escape key closes modal
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && !overlay.classList.contains("hidden")) closeSettings();
  });

  // Live preview temperature value
  prefTempSlider.addEventListener("input", () => {
    prefTempVal.textContent = parseFloat(prefTempSlider.value).toFixed(1);
  });

  // Save
  saveBtn.addEventListener("click", () => {
    const prefs = {
      displayName: $("#pref-name").value.trim(),
      temperature: parseFloat(prefTempSlider.value),
      defaultCategory: $("#pref-category").value,
    };
    savePrefs(prefs);
    applySettingsToState(prefs);
    closeSettings();
    showToast("✅ Settings saved");
  });

  // Reset
  resetBtn.addEventListener("click", () => {
    savePrefs({ ...DEFAULT_PREFS });
    populateSettingsForm({ ...DEFAULT_PREFS });
    applySettingsToState({ ...DEFAULT_PREFS });
    closeSettings();
    showToast("Settings reset to defaults");
  });
}

function populateSettingsForm(prefs) {
  const p = prefs || loadPrefs();
  $("#pref-name").value = p.displayName || "";
  const tempSlider = $("#pref-temperature");
  const tempVal = $("#pref-temperature-val");
  tempSlider.value = p.temperature;
  tempVal.textContent = parseFloat(p.temperature).toFixed(1);
  $("#pref-category").value = p.defaultCategory || "";
}

function applySettingsToState(prefs) {
  // Update active temperature slider and state
  state.temperature = prefs.temperature;
  const slider = $("#temp-slider");
  const val = $("#temp-val");
  slider.value = prefs.temperature;
  val.textContent = prefs.temperature.toFixed(1);
  // Update nav display name
  updateNavProfile(prefs.displayName);
}

function closeSettings() {
  const overlay = $("#settings-overlay");
  overlay.classList.remove("visible");
  overlay.classList.add("hidden");
}

/* ════════════════════════════════════
   STEP 1 — Render Category Cards
   ════════════════════════════════════ */
function renderCategories() {
  const grid = $("#cat-grid");
  grid.innerHTML = "";

  Object.entries(ASSETS).forEach(([cat, items]) => {
    const m = CAT_META[cat];
    const previewLogos = items.slice(0, 5);
    const moreCount = items.length - previewLogos.length;

    const card = document.createElement("div");
    card.className = "cat-card";
    card.setAttribute("data-cat", cat);
    card.innerHTML = `
      <div class="cat-card__bar"></div>
      <div class="cat-card__header">
        <div class="cat-card__icon-wrap">${m.icon}</div>
        <span class="cat-card__count">${items.length} assets</span>
      </div>
      <div class="cat-card__title">${m.title}</div>
      <div class="cat-card__desc">${m.desc}</div>
      <div style="display:flex; align-items:center; justify-content:space-between;">
        <div class="cat-card__logos">
          ${previewLogos.map((a) => `
            <div class="cat-card__logo-item">
              <img src="${a.logo}" alt="${a.symbol}" loading="lazy" onerror="this.parentElement.innerHTML='<span style=\\'font-size:0.65rem;color:#848e9c\\'>${a.symbol}</span>'">
            </div>
          `).join("")}
          ${moreCount > 0 ? `<div class="cat-card__logo-more">+${moreCount}</div>` : ""}
        </div>
        <span class="cat-card__arrow">→</span>
      </div>
    `;
    card.addEventListener("click", () => selectCategory(cat));
    grid.appendChild(card);
  });
}

/* ════════════════════════════════════
   STEP 2 — Render Asset Table
   ════════════════════════════════════ */
function selectCategory(cat) {
  state.category = cat;
  const m = CAT_META[cat];
  const items = ASSETS[cat];

  // Update breadcrumb + titles
  $("#bc-category").textContent = m.title;
  $("#assets-title").textContent = m.title;
  $("#assets-subtitle").textContent = `Select an asset to generate a full AI research report`;

  // Stats bar
  const statsBar = $("#stats-bar");
  statsBar.innerHTML = `
    <div class="stat-chip">📊 Total Assets: <span class="stat-chip__value">${items.length}</span></div>
    <div class="stat-chip">🤖 AI Model: <span class="stat-chip__value">Llama 3.1</span></div>
    <div class="stat-chip">🌡 Temperature: <span class="stat-chip__value">${state.temperature.toFixed(1)}</span></div>
  `;

  // Render table rows
  const tbody = $("#asset-tbody");
  tbody.innerHTML = "";

  items.forEach((asset, i) => {
    const tr = document.createElement("tr");
    tr.style.animationDelay = `${i * 0.03}s`;
    tr.innerHTML = `
      <td>${i + 1}</td>
      <td>
        <div class="asset-name-cell">
          <div class="asset-logo">
            <img src="${asset.logo}" alt="${asset.symbol}" loading="lazy"
                 onerror="this.style.display='none'; this.parentElement.classList.add('asset-logo--text'); this.parentElement.textContent='${asset.symbol.slice(0,2)}'">
          </div>
          <div>
            <div class="asset-info__name">${asset.name}</div>
            <div class="asset-info__symbol">${asset.symbol}</div>
          </div>
        </div>
      </td>
      <td style="color:var(--text-tertiary); font-size:0.8rem;">${cat}</td>
      <td style="text-align:right;">
        <button class="btn-analyze">Analyze →</button>
      </td>
    `;
    tr.addEventListener("click", () => analyzeAsset(cat, asset));
    tbody.appendChild(tr);
  });

  showView("assets");
}

/* ════════════════════════════════════
   Loading Overlay (with step tracker)
   ════════════════════════════════════ */
function showLoading(symbol) {
  removeLoading();
  const ov = document.createElement("div");
  ov.className = "loading-overlay";
  ov.id = "loading-overlay";
  ov.innerHTML = `
    <div class="loading-ring"></div>
    <div class="loading-label">Analyzing ${symbol}</div>
    <div class="loading-sub">This may take a moment…</div>
    <div class="loading-steps">
      <div class="loading-step loading-step--active" id="ls-price">
        <span class="loading-step__indicator">●</span>
        Fetching live price
      </div>
      <div class="loading-step" id="ls-news">
        <span class="loading-step__indicator">●</span>
        Searching 24h news
      </div>
      <div class="loading-step" id="ls-ai">
        <span class="loading-step__indicator">●</span>
        Generating AI report
      </div>
    </div>
  `;
  document.body.appendChild(ov);

  // Simulate step progression visuals (actual steps happen server-side)
  setTimeout(() => setLoadingStep("ls-price", "done"), 800);
  setTimeout(() => { setLoadingStep("ls-news", "active"); }, 900);
  setTimeout(() => setLoadingStep("ls-news", "done"), 3500);
  setTimeout(() => { setLoadingStep("ls-ai", "active"); }, 3600);
}

function setLoadingStep(id, status) {
  const el = document.getElementById(id);
  if (!el) return;
  el.classList.remove("loading-step--active", "loading-step--done");
  if (status === "active") el.classList.add("loading-step--active");
  if (status === "done") {
    el.classList.add("loading-step--done");
    const ind = el.querySelector(".loading-step__indicator");
    if (ind) ind.textContent = "✓";
  }
}

function removeLoading() {
  const el = document.getElementById("loading-overlay");
  if (el) el.remove();
}

function showToast(msg) {
  const t = document.createElement("div");
  t.className = "toast";
  t.textContent = msg;
  document.body.appendChild(t);
  setTimeout(() => t.remove(), 5500);
}

/* ════════════════════════════════════
   Analyze Asset — API Call
   ════════════════════════════════════ */
async function analyzeAsset(category, asset) {
  showLoading(asset.symbol);

  try {
    const res = await fetch("/api/analyze", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        category,
        symbol: asset.symbol,
        temperature: state.temperature,
      }),
    });

    if (!res.ok) {
      const err = await res.json().catch(() => ({}));
      throw new Error(err.detail || `Server error ${res.status}`);
    }

    const data = await res.json();
    renderReport(asset, category, data);
  } catch (err) {
    showToast(`Analysis failed: ${err.message}`);
  } finally {
    removeLoading();
  }
}

/* ════════════════════════════════════
   Price Count-Up Animation
   ════════════════════════════════════ */
function animatePrice(element, targetPrice) {
  if (targetPrice === null || targetPrice === undefined || isNaN(targetPrice)) {
    element.textContent = "Price Unavailable";
    return;
  }
  const p = parseFloat(targetPrice);
  const decimals = p < 1 ? 8 : 2;
  const startPrice = p * 0.95;
  const duration = 800;
  const startTime = performance.now();

  function update(currentTime) {
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1);
    // ease out cubic
    const eased = 1 - Math.pow(1 - progress, 3);
    const currentVal = startPrice + (p - startPrice) * eased;
    element.textContent = "$" + currentVal.toLocaleString("en-US", {
      minimumFractionDigits: 2,
      maximumFractionDigits: decimals,
    });
    if (progress < 1) {
      requestAnimationFrame(update);
    }
  }
  requestAnimationFrame(update);
}

/* ════════════════════════════════════
   Render Structured Report
   ════════════════════════════════════ */
function renderReport(asset, category, data) {
  // Breadcrumb
  const m = CAT_META[category];
  $("#rbc-category").textContent = m.title;
  $("#rbc-asset").textContent = asset.symbol;

  // Asset header
  const header = $("#report-asset-header");
  header.innerHTML = `
    <div class="asset-header__logo">
      <img src="${asset.logo}" alt="${asset.symbol}"
           onerror="this.style.display='none'; this.parentElement.textContent='${asset.symbol.slice(0,2)}'">
    </div>
    <div>
      <span class="asset-header__name">${asset.name}</span>
      <span class="asset-header__symbol">${asset.symbol}</span>
    </div>
    <span class="asset-header__category">${category}</span>
  `;

  // Price with count-up animation
  const priceEl = $("#rpt-price");
  if (data.price !== null && data.price !== undefined) {
    animatePrice(priceEl, data.price);
  } else {
    priceEl.textContent = "Price Unavailable";
  }
  $("#rpt-pair").textContent = category === "Forex" ? asset.symbol :
    category === "Commodities" ? `${asset.symbol} / USD` : `${asset.symbol} / USD`;

  // Build report cards from structured response
  const grid = $("#report-grid");
  grid.innerHTML = "";

  const report = data.report;

  // 1. Price Overview
  grid.appendChild(makeReportCard("💰", "Price Overview", `<div class="report-text"><p>${escapeHtml(report.price_overview)}</p></div>`));

  // 2. Market Context (NEW)
  if (report.market_context) {
    grid.appendChild(makeReportCard("🌍", "Market Context", `<div class="report-text"><p>${escapeHtml(report.market_context)}</p></div>`));
  }

  // 3. Key News
  let newsHtml = '<ul class="news-list">';
  report.key_news.forEach((item) => {
    newsHtml += `<li class="news-item"><span class="news-item__bullet"></span><span class="news-item__text">${escapeHtml(item)}</span></li>`;
  });
  newsHtml += "</ul>";
  grid.appendChild(makeReportCard("📰", "Key News — Last 24 Hours", newsHtml));

  // 4. Market Sentiment
  const sentCls =
    report.sentiment.toLowerCase().includes("bullish") ? "bullish" :
    report.sentiment.toLowerCase().includes("bearish") ? "bearish" : "neutral";
  const sentHtml = `
    <div class="sentiment-badge sentiment-badge--${sentCls}">${sentCls === "bullish" ? "🟢" : sentCls === "bearish" ? "🔴" : "⚪"} ${escapeHtml(report.sentiment)}</div>
    <div class="report-text"><p>${escapeHtml(report.sentiment_explanation)}</p></div>
  `;
  grid.appendChild(makeReportCard("📊", "Market Sentiment", sentHtml));

  // 5. Technical Outlook (NEW)
  if (report.technical_outlook) {
    grid.appendChild(makeReportCard("📐", "Technical Outlook", `<div class="report-text"><p>${escapeHtml(report.technical_outlook)}</p></div>`));
  }

  // 6. Risk Factors
  let riskHtml = '<ul class="risk-list">';
  report.risk_factors.forEach((r) => {
    riskHtml += `<li class="risk-item">${escapeHtml(r)}</li>`;
  });
  riskHtml += "</ul>";
  grid.appendChild(makeReportCard("⚠️", "Risk Factors", riskHtml));

  // 7. Opportunities (NEW)
  if (report.opportunities && report.opportunities.length > 0) {
    let oppHtml = '<ul class="opportunity-list">';
    report.opportunities.forEach((o) => {
      oppHtml += `<li class="opportunity-item">${escapeHtml(o)}</li>`;
    });
    oppHtml += "</ul>";
    grid.appendChild(makeReportCard("🚀", "Opportunities & Catalysts", oppHtml));
  }

  // 8. Investor Insight
  grid.appendChild(makeReportCard("🎯", "Investor Insight", `<div class="insight-callout">${escapeHtml(report.investor_insight)}</div>`));

  // 9. News Sources with Links (NEW — from Tavily directly)
  if (data.news_sources && data.news_sources.length > 0) {
    let sourcesHtml = '<div class="sources-list">';
    data.news_sources.forEach((src, i) => {
      const domain = extractDomain(src.url);
      sourcesHtml += `
        <a href="${escapeHtml(src.url)}" target="_blank" rel="noopener noreferrer" class="source-card">
          <div class="source-card__header">
            <span class="source-card__number">${i + 1}</span>
            <span class="source-card__domain">${escapeHtml(domain)}</span>
            <span class="source-card__link-icon">↗</span>
          </div>
          <div class="source-card__title">${escapeHtml(src.title)}</div>
          <div class="source-card__snippet">${escapeHtml(src.snippet)}</div>
        </a>
      `;
    });
    sourcesHtml += '</div>';
    grid.appendChild(makeReportCard("🔗", "News Sources & References", sourcesHtml));
  }

  showView("report");
}

/* ─── Helpers ─── */
function makeReportCard(icon, title, bodyHtml) {
  const card = document.createElement("div");
  card.className = "report-card";
  card.innerHTML = `
    <div class="report-card__header">
      <span class="report-card__icon">${icon}</span>
      <span class="report-card__title">${title}</span>
    </div>
    <div class="report-card__body">${bodyHtml}</div>
  `;
  return card;
}

function escapeHtml(str) {
  if (!str) return "";
  const div = document.createElement("div");
  div.textContent = str;
  return div.innerHTML;
}

function extractDomain(url) {
  try {
    return new URL(url).hostname.replace("www.", "");
  } catch {
    return url;
  }
}
