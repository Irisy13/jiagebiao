const ADMIN_CODE = "lingshi2026";
const STORAGE_KEY = "youdao-price-catalog-v4";

const yuan = new Intl.NumberFormat("zh-CN", { maximumFractionDigits: 0 });
const money = (value) => `¥${yuan.format(Number(value) || 0)}`;
const yuanText = (value) => `${yuan.format(Number(value) || 0)}元`;
const getEl = (id) => document.getElementById(id);
const escapeHtml = (value = "") => String(value)
  .replace(/&/g, "&amp;")
  .replace(/</g, "&lt;")
  .replace(/>/g, "&gt;")
  .replace(/"/g, "&quot;")
  .replace(/'/g, "&#39;");

const countNames = {
  1: "一科",
  2: "两科",
  3: "三科",
  4: "四科",
  5: "五科",
  6: "六科"
};

const gradeOrder = ["高一", "高二", "高三"];

const moduleTemplates = [
  {
    key: "knowledge",
    match: ["知识视频", "精准学"],
    module: "知识视频",
    badge: "精准学",
    label: "知识视频",
    subtitle: "查缺补漏",
    image: "./module-knowledge.png"
  },
  {
    key: "live",
    match: ["学法直播", "讲到会"],
    module: "学法直播",
    badge: "讲到会",
    label: "学法直播",
    subtitle: "大招提分",
    image: "./module-live.png"
  },
  {
    key: "service",
    match: ["辅导服务", "伴学服务", "规划服务", "陪伴学"],
    module: "辅导服务",
    badge: "陪伴学",
    label: "辅导服务",
    subtitle: "伴学提升",
    image: "./module-service.png"
  }
];

const defaultCatalog = [
  {
    id: "g1-bridge-lead",
    grade: "高一",
    family: "初高衔接卡",
    level: "小卡型",
    name: "初高升学领航卡",
    subtitle: "初高衔接",
    tag: "语数英物化生",
    theme: "peach",
    nonWenZong: { officialUnitPrice: 2800, tiers: { 1: 2398, 2: 2098, 3: 1698 } },
    wenZong: { mode: "same", officialUnitPrice: 2800, dealUnitPrice: 1698 },
    content: {
      nonWenZong: [
        { module: "学法直播", badge: "讲到会", label: "学法直播", subtitle: "初高衔接", hours: "15节", gift: "初三冲刺5节+新高一暑假10节" },
        { module: "伴学服务", badge: "陪伴学", label: "辅导服务", subtitle: "伴学提升", hours: "辅导老师服务", gift: "" }
      ],
      wenZong: [
        { module: "学法直播", badge: "讲到会", label: "学法直播", subtitle: "初高衔接", hours: "15节", gift: "初三冲刺5节+新高一暑假10节" },
        { module: "伴学服务", badge: "陪伴学", label: "辅导服务", subtitle: "伴学提升", hours: "辅导老师服务", gift: "" }
      ]
    },
    servicePeriod: "2026.4.27-2026.8.31",
    notes: [
      "本页面价格适用于高一初高升学领航卡（初高衔接）课程。",
      "销售端仅可选择产品与展示范围，不能修改系统维护价格。",
      "3科及以上统一按¥1,698/科计算。"
    ]
  },
  {
    id: "g1-summer-fall-win",
    grade: "高一",
    family: "高一暑秋卡",
    level: "贵版型",
    name: "新高一全体系决胜卡",
    subtitle: "暑秋",
    tag: "非文综",
    theme: "peach",
    nonWenZong: { officialUnitPrice: 6400, tiers: { 1: 3880, 2: 3580, 3: 3280 } },
    wenZong: { mode: "deal", officialUnitPrice: 4000, dealUnitPrice: 1900 },
    content: {
      nonWenZong: [
        { module: "知识视频", badge: "精准学", label: "知识视频", subtitle: "查缺补漏", hours: "40节", gift: "秋40节" },
        { module: "学法直播", badge: "讲到会", label: "学法直播", subtitle: "大招提分", hours: "26节", gift: "暑10节+秋16节" },
        { module: "伴学服务", badge: "陪伴学", label: "辅导服务", subtitle: "伴学提升", hours: "6个月辅导老师服务", gift: "" }
      ],
      wenZong: [
        { module: "知识视频", badge: "精准学", label: "知识视频", subtitle: "查缺补漏", hours: "20节", gift: "秋20节" },
        { module: "学法直播", badge: "讲到会", label: "学法直播", subtitle: "大招提分", hours: "26节", gift: "暑10节+秋16节" },
        { module: "伴学服务", badge: "陪伴学", label: "辅导服务", subtitle: "伴学提升", hours: "6个月辅导老师服务", gift: "" }
      ]
    },
    servicePeriod: "2026.7.1-2026.12.31",
    notes: [
      "本页面价格适用于新高一全体系决胜卡（暑秋）非文综课程。",
      "5.1-中考冲刺卡（赠）服务期开始，大概4月中旬开启首联。",
      "文综一口价按¥1,900/科计算。"
    ]
  },
  {
    id: "g1-summer-research",
    grade: "高一",
    family: "高一暑研卡",
    level: "便宜班型",
    name: "新高一暑研卡",
    subtitle: "暑期",
    tag: "语数英物化生",
    theme: "peach",
    isOnline: true,
    nonWenZong: { officialUnitPrice: 1800, tiers: { 1: 1399, 2: 1199, 3: 999 } },
    wenZong: { mode: "same", officialUnitPrice: 1800, dealUnitPrice: 999 },
    content: {
      nonWenZong: [
        { module: "学法直播", badge: "讲到会", label: "学法直播", subtitle: "暑期提升", hours: "10节", gift: "暑10节" },
        { module: "伴学服务", badge: "陪伴学", label: "辅导服务", subtitle: "伴学提升", hours: "辅导老师服务", gift: "" }
      ],
      wenZong: [
        { module: "学法直播", badge: "讲到会", label: "学法直播", subtitle: "暑期提升", hours: "10节", gift: "暑10节" },
        { module: "伴学服务", badge: "陪伴学", label: "辅导服务", subtitle: "伴学提升", hours: "辅导老师服务", gift: "" }
      ]
    },
    servicePeriod: "2026.07.01至2026.08.31",
    notes: [
      "本页面价格适用于新高一暑研卡（暑期）课程。",
      "6.9开售，销售端仅可选择产品与展示范围。",
      "3科及以上统一按¥999/科计算。"
    ]
  },
  {
    id: "g2-half-win",
    grade: "高二",
    family: "高二暑秋半年卡",
    level: "便宜班型",
    name: "新高二全体系决胜卡",
    subtitle: "暑秋半年卡",
    tag: "非文综",
    theme: "blue",
    nonWenZong: { officialUnitPrice: 5600, tiers: { 1: 4180, 2: 3980, 3: 3680 } },
    wenZong: { mode: "deal", officialUnitPrice: 5000, dealUnitPrice: 2300 },
    content: {
      nonWenZong: [
        { module: "知识视频", badge: "精准学", label: "知识视频", subtitle: "查缺补漏", hours: "40节", gift: "秋40节" },
        { module: "学法直播", badge: "讲到会", label: "学法直播", subtitle: "大招提分", hours: "26节", gift: "暑10节+秋16节" },
        { module: "伴学服务", badge: "陪伴学", label: "辅导服务", subtitle: "伴学提升", hours: "6个月辅导老师服务", gift: "" }
      ],
      wenZong: [
        { module: "知识视频", badge: "精准学", label: "知识视频", subtitle: "查缺补漏", hours: "20节", gift: "秋20节" },
        { module: "学法直播", badge: "讲到会", label: "学法直播", subtitle: "大招提分", hours: "26节", gift: "暑10节+秋16节" },
        { module: "伴学服务", badge: "陪伴学", label: "辅导服务", subtitle: "伴学提升", hours: "6个月辅导老师服务", gift: "" }
      ]
    },
    servicePeriod: "2026.7.1-2026.12.31",
    notes: [
      "本页面价格适用于新高二全体系决胜卡（暑秋半年卡）非文综课程。",
      "赠送课程联系学业规划师安排学习。",
      "文综一口价按¥2,300/科计算。"
    ]
  },
  {
    id: "g2-through-full",
    grade: "高二",
    family: "高二全程班",
    level: "贵版型",
    name: "直通高二全程班",
    subtitle: "春mini+暑秋半年卡",
    tag: "非文综",
    theme: "blue",
    nonWenZong: { officialUnitPrice: 7400, tiers: { 1: 5580, 2: 5280, 3: 4880 } },
    wenZong: { mode: "deal", officialUnitPrice: 6800, dealUnitPrice: 3050 },
    content: {
      nonWenZong: [
        { module: "知识视频", badge: "精准学", label: "知识视频", subtitle: "查缺补漏", hours: "65节", gift: "春mini25节+秋40节" },
        { module: "学法直播", badge: "讲到会", label: "学法直播", subtitle: "大招提分", hours: "33节", gift: "春mini7节+暑秋26节" },
        { module: "伴学服务", badge: "陪伴学", label: "辅导服务", subtitle: "伴学提升", hours: "8个月辅导老师服务", gift: "" }
      ],
      wenZong: [
        { module: "知识视频", badge: "精准学", label: "知识视频", subtitle: "查缺补漏", hours: "35节", gift: "春mini15节+秋20节" },
        { module: "学法直播", badge: "讲到会", label: "学法直播", subtitle: "大招提分", hours: "33节", gift: "春mini7节+暑秋26节" },
        { module: "伴学服务", badge: "陪伴学", label: "辅导服务", subtitle: "伴学提升", hours: "8个月辅导老师服务", gift: "" }
      ]
    },
    servicePeriod: "2026.5.1-2026.12.31",
    notes: [
      "本页面价格适用于直通高二全程班（春mini+暑秋半年卡）非文综课程。",
      "赠送课程联系学业规划师安排学习。",
      "文综一口价按¥3,050/科计算。"
    ]
  },
  {
    id: "g3-round-early",
    grade: "高三",
    family: "一轮卡",
    level: "便宜班型",
    name: "一轮卡-早鸟价",
    subtitle: "26H2一轮卡",
    tag: "非文综",
    theme: "purple",
    nonWenZong: { officialUnitPrice: 5600, tiers: { 1: 5180, 2: 4980, 3: 4680 } },
    wenZong: { mode: "deal", officialUnitPrice: 5000, dealUnitPrice: 2700 },
    content: {
      nonWenZong: [
        { module: "知识视频", badge: "精准学", label: "知识视频", subtitle: "查缺补漏", hours: "60节", gift: "新高三一轮卡60节" },
        { module: "学法直播", badge: "讲到会", label: "学法直播", subtitle: "大招提分", hours: "26节", gift: "新高三一轮卡26节" },
        { module: "伴学服务", badge: "陪伴学", label: "辅导服务", subtitle: "伴学提升", hours: "6个月辅导老师服务", gift: "" }
      ],
      wenZong: [
        { module: "知识视频", badge: "精准学", label: "知识视频", subtitle: "查缺补漏", hours: "30节", gift: "新高三一轮卡30节" },
        { module: "学法直播", badge: "讲到会", label: "学法直播", subtitle: "大招提分", hours: "26节", gift: "新高三一轮卡26节" },
        { module: "伴学服务", badge: "陪伴学", label: "辅导服务", subtitle: "伴学提升", hours: "6个月辅导老师服务", gift: "" }
      ]
    },
    servicePeriod: "2026-07-01至2026-12-31",
    notes: [
      "本页面价格适用于高三一轮卡-早鸟价（26H2一轮卡）非文综课程。",
      "3科及以上统一按¥4,680/科计算。",
      "文综一口价按¥2,700/科计算。"
    ]
  },
  {
    id: "g3-through-round",
    grade: "高三",
    family: "一轮全程班",
    level: "贵版型",
    name: "直通一轮全程班",
    subtitle: "春mini+一轮",
    tag: "非文综",
    theme: "purple",
    nonWenZong: { officialUnitPrice: 7400, tiers: { 1: 6580, 2: 6280, 3: 5880 } },
    wenZong: { mode: "deal", officialUnitPrice: 6800, dealUnitPrice: 3450 },
    content: {
      nonWenZong: [
        { module: "知识视频", badge: "精准学", label: "知识视频", subtitle: "查缺补漏", hours: "85节", gift: "春mini25节+一轮60节" },
        { module: "学法直播", badge: "讲到会", label: "学法直播", subtitle: "大招提分", hours: "33节", gift: "春7节+一轮26节" },
        { module: "伴学服务", badge: "陪伴学", label: "辅导服务", subtitle: "伴学提升", hours: "8个月辅导老师服务", gift: "" }
      ],
      wenZong: [
        { module: "知识视频", badge: "精准学", label: "知识视频", subtitle: "查缺补漏", hours: "45节", gift: "春15节+一轮30节" },
        { module: "学法直播", badge: "讲到会", label: "学法直播", subtitle: "大招提分", hours: "33节", gift: "春7节+一轮26节" },
        { module: "伴学服务", badge: "陪伴学", label: "辅导服务", subtitle: "伴学提升", hours: "8个月辅导老师服务", gift: "" }
      ]
    },
    servicePeriod: "2026.5.1-2026.12.31",
    notes: [
      "本页面价格适用于高三直通一轮全程班（春mini+一轮）非文综课程。",
      "3科及以上统一按¥5,880/科计算。",
      "文综一口价按¥3,450/科计算。"
    ]
  }
];

let catalog = normalizeCatalog(loadCatalog());
let state = {
  selectedGrade: catalog.some((product) => product.grade === "高一") ? "高一" : catalog[0]?.grade || "",
  selectedProductId: catalog[0]?.id || "",
  adminEditingProductId: catalog[0]?.id || "",
  exportObjectUrl: "",
  comboNonWenZongCount: 1,
  comboWenZongCount: 0,
  quoteMode: "nonWenZong",
  startAt: 1,
  adminUnlocked: false
};

function clone(value) {
  return JSON.parse(JSON.stringify(value));
}

function loadCatalog() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (!saved) return clone(defaultCatalog);
    const parsed = JSON.parse(saved);
    const products = Array.isArray(parsed) ? parsed : parsed.products;
    return validateCatalog(products) ? products : clone(defaultCatalog);
  } catch {
    return clone(defaultCatalog);
  }
}

function normalizedGrade(grade) {
  const map = {
    "新高一": "高一",
    "现高一": "高二",
    "现高二": "高三"
  };
  return map[grade] || grade;
}

function themeForGrade(grade) {
  if (grade === "高一") return "peach";
  if (grade === "高二") return "blue";
  if (grade === "高三") return "purple";
  return "peach";
}

function defaultDisplay(product) {
  return {
    subjectScope: product.tag || "非文综",
    courseBandTitle: "每科课程包含",
    noteLabel: "说明",
    giftText: "报名赠送多个礼品",
    notes: [
      `本页面价格适用于${product.grade}${product.name}（${product.subtitle}）非文综课程。`,
      "销售端仅可选择产品与展示范围，不能修改系统维护价格。",
      `3科及以上统一按${money(product.nonWenZong?.tiers?.[3])}/科计算。`
    ]
  };
}

function normalizeModules(product, type = "nonWenZong") {
  const modules = product.content?.[type] || [];
  return moduleTemplates.map((template) => {
    const existing = modules.find((item) => {
      const text = [item.module, item.badge, item.label].join(" ");
      return template.match.some((keyword) => text.includes(keyword));
    });
    return {
      key: template.key,
      module: template.module,
      badge: existing?.badge || template.badge,
      label: template.key === "service" ? template.label : existing?.label || template.label,
      subtitle: existing?.subtitle || template.subtitle,
      image: template.image,
      hours: existing?.hours || "",
      gift: existing?.gift || ""
    };
  });
}

function activeContentType() {
  return state.quoteMode === "wenZong" ? "wenZong" : "nonWenZong";
}

function wenZongMode(product) {
  return product.wenZong?.mode || "none";
}

function hasWenZong(product) {
  return wenZongMode(product) !== "none";
}

function isWenZongDeal(product) {
  return wenZongMode(product) === "deal";
}

function hasSeparateWenZongPricing(product) {
  return isWenZongDeal(product);
}

function normalizeCatalog(products) {
  return clone(products)
    .map((product) => {
      product.grade = normalizedGrade(product.grade);
      product.theme = themeForGrade(product.grade);
      product.isOnline = product.isOnline !== false;
      const display = defaultDisplay(product);
      const savedDisplay = product.display || {};
      const migratedExtraNotes = Array.isArray(product.extraNotes)
        ? product.extraNotes
        : String(product.extraNotes || "").split("\n").map((note) => note.trim()).filter(Boolean);
      product.display = {
        subjectScope: savedDisplay.subjectScope || display.subjectScope,
        courseBandTitle: savedDisplay.courseBandTitle || display.courseBandTitle,
        noteLabel: savedDisplay.noteLabel || display.noteLabel,
        giftText: savedDisplay.giftText || display.giftText
      };
      product.notes = Array.isArray(product.notes) && product.notes.length
        ? product.notes
        : display.notes.concat(migratedExtraNotes);
      const incomingWenZong = product.wenZong || {};
      const guessedWenZongMode = incomingWenZong.mode ||
        (Number(incomingWenZong.officialUnitPrice || 0) || Number(incomingWenZong.dealUnitPrice || 0) ? "deal" : "none");
      product.wenZong = {
        mode: ["none", "same", "deal"].includes(guessedWenZongMode) ? guessedWenZongMode : "none",
        officialUnitPrice: Number(incomingWenZong.officialUnitPrice ?? product.nonWenZong?.officialUnitPrice ?? 0),
        dealUnitPrice: Number(incomingWenZong.dealUnitPrice ?? product.nonWenZong?.tiers?.[3] ?? 0)
      };
      product.content = product.content || {};
      product.content.nonWenZong = normalizeModules(product, "nonWenZong");
      product.content.wenZong = normalizeModules(product, "wenZong");
      return product;
    })
    .sort((a, b) => {
      const gradeDelta = gradeOrder.indexOf(a.grade) - gradeOrder.indexOf(b.grade);
      if (gradeDelta !== 0) return gradeDelta;
      return String(a.family).localeCompare(String(b.family), "zh-CN");
    });
}

function persistCatalog() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify({ products: catalog }));
}

function validateCatalog(products) {
  return Array.isArray(products) && products.every((product) =>
    product.id &&
    product.grade &&
    product.name &&
    product.nonWenZong &&
    product.nonWenZong.officialUnitPrice !== undefined &&
    product.nonWenZong.tiers
  );
}

function grades() {
  return [...new Set(catalog.map((product) => product.grade))]
    .sort((a, b) => {
      const aIndex = gradeOrder.indexOf(a);
      const bIndex = gradeOrder.indexOf(b);
      return (aIndex === -1 ? 99 : aIndex) - (bIndex === -1 ? 99 : bIndex);
    });
}

function productsForGrade() {
  return catalog.filter((product) => product.grade === state.selectedGrade && product.isOnline !== false);
}

function firstOnlineProduct() {
  return catalog.find((product) => product.isOnline !== false) || catalog[0];
}

function currentProduct() {
  return catalog.find((product) => product.id === state.selectedProductId && product.isOnline !== false) || productsForGrade()[0] || firstOnlineProduct();
}

function adminEditingProduct() {
  return catalog.find((product) => product.id === state.adminEditingProductId) || currentProduct();
}

function ensureQuoteModeAvailable(product) {
  if (!hasSeparateWenZongPricing(product)) {
    state.quoteMode = "nonWenZong";
    state.comboWenZongCount = 0;
    return;
  }
  if (state.quoteMode === "combo" && !state.comboWenZongCount) {
    state.comboWenZongCount = 1;
  }
}

function unitPriceForCount(product, count) {
  if (!count) return 0;
  if (count === 1) return Number(product.nonWenZong.tiers[1] || 0);
  if (count === 2) return Number(product.nonWenZong.tiers[2] || 0);
  return Number(product.nonWenZong.tiers[3] || 0);
}

function wenZongOfficialUnitPrice(product) {
  if (!hasWenZong(product)) return 0;
  if (wenZongMode(product) === "same") return Number(product.nonWenZong.officialUnitPrice || 0);
  return Number(product.wenZong?.officialUnitPrice || 0);
}

function wenZongUnitPrice(product, count = 1) {
  if (!hasWenZong(product)) return 0;
  if (wenZongMode(product) === "same") return unitPriceForCount(product, count);
  return Number(product.wenZong?.dealUnitPrice || 0);
}

function buildComboQuote(product) {
  const nonCount = Number(state.comboNonWenZongCount || 0);
  const wenCount = Number(state.comboWenZongCount || 0);
  if (!nonCount && !wenCount) return null;

  const nonUnit = unitPriceForCount(product, nonCount);
  const wenUnit = wenZongUnitPrice(product, wenCount);
  const nonOfficial = Number(product.nonWenZong.officialUnitPrice || 0) * nonCount;
  const wenOfficial = wenZongOfficialUnitPrice(product) * wenCount;
  const nonPayPrice = nonUnit * nonCount;
  const wenPayPrice = wenUnit * wenCount;
  const nonCoupon = Math.max(nonOfficial - nonPayPrice, 0);
  const wenCoupon = Math.max(wenOfficial - wenPayPrice, 0);
  const official = nonOfficial + wenOfficial;
  const payPrice = nonPayPrice + wenPayPrice;

  return {
    nonCount,
    wenCount,
    nonUnit,
    wenUnit,
    nonOfficial,
    wenOfficial,
    nonPayPrice,
    wenPayPrice,
    nonCoupon,
    wenCoupon,
    official,
    coupon: nonCoupon + wenCoupon,
    payPrice
  };
}

function buildRows(product) {
  return Array.from({ length: 7 - state.startAt }, (_, index) => state.startAt + index).map((count) => {
    const unitPrice = unitPriceForCount(product, count);
    const officialPrice = Number(product.nonWenZong.officialUnitPrice || 0) * count;
    const payPrice = unitPrice * count;
    return {
      subject: count === 3 ? "满三科最优惠" : countNames[count],
      subjectCount: count,
      officialPrice,
      coupon: Math.max(officialPrice - payPrice, 0),
      discountedUnitPrice: unitPrice,
      payPrice,
      recommended: count === 3
    };
  });
}

function buildWenZongRow(product) {
  const officialPrice = wenZongOfficialUnitPrice(product);
  const dealPrice = wenZongUnitPrice(product, 1);
  return {
    courseName: `${product.name} 文综`,
    officialPrice,
    coupon: Math.max(officialPrice - dealPrice, 0),
    dealPrice
  };
}

function renderGradeCards() {
  getEl("gradeCards").innerHTML = grades().map((grade) => {
    const products = catalog.filter((product) => product.grade === grade && product.isOnline !== false);
    const allProducts = catalog.filter((product) => product.grade === grade);
    const active = grade === state.selectedGrade ? "active" : "";
    const theme = themeForGrade(grade);
    return `
      <button class="grade-card grade-${theme} ${active}" type="button" data-grade="${grade}">
        <span>${grade}</span>
        <strong>${products.length} 个上线产品</strong>
        <em>${products.map((product) => product.family).join(" / ") || `${allProducts.length} 个产品待上线`}</em>
      </button>
    `;
  }).join("");
}

function renderProductSelect() {
  const products = productsForGrade();
  if (!products.some((product) => product.id === state.selectedProductId)) {
    state.selectedProductId = products[0]?.id || firstOnlineProduct()?.id || "";
  }

  getEl("productSelect").innerHTML = products.length
    ? products.map((product) => `<option value="${product.id}">${product.name}</option>`).join("")
    : `<option value="">该年级暂无上线产品</option>`;
  getEl("productSelect").value = state.selectedProductId;
  getEl("productSelect").disabled = !products.length;
}

function renderAdminProductSelect() {
  const select = getEl("adminProductSelect");
  if (!select) return;
  select.innerHTML = catalog.map((product) => `
    <option value="${product.id}">${product.isOnline === false ? "下线" : "上线"}｜${product.grade}｜${product.name}</option>
  `).join("");
  if (!catalog.some((product) => product.id === state.adminEditingProductId)) {
    state.adminEditingProductId = catalog[0]?.id || "";
  }
  select.value = state.adminEditingProductId;
}

function productPricingHint(product) {
  if (wenZongMode(product) === "none") {
    return "本产品无独立文综报价，销售端仅展示普通阶梯价。";
  }
  if (wenZongMode(product) === "same") {
    return "本产品文综与非文综同价，统一按普通阶梯价展示。";
  }
  return "本产品含文综一口价，可单独展示文综报价或生成组合价。";
}

function updateAdminWenZongVisibility() {
  const mode = getEl("editWenZongMode")?.value || "none";
  const showDealFields = mode === "deal";
  const wenZongCourse = document.querySelector(".admin-course-wenzong");
  if (wenZongCourse) wenZongCourse.hidden = !showDealFields;
  getEl("editWenZongOfficial").disabled = !showDealFields;
  getEl("editWenZongDeal").disabled = !showDealFields;
}

function tableRow(row) {
  const classes = ["table-row"];
  if (row.recommended) classes.push("highlight");
  return `
    <div class="${classes.join(" ")}">
      <div class="subject-cell">${row.subject}</div>
      <div class="price-cell official-cell">${money(row.officialPrice)}</div>
      <div class="price-cell coupon-cell">${money(row.coupon)}</div>
      <div class="price-cell unit-price-cell">${money(row.discountedUnitPrice)}<span class="unit">/科</span></div>
      <div class="pay-cell">${money(row.payPrice)}</div>
    </div>
  `;
}

function cardLabelForProduct(product) {
  const source = [product.name, product.family, product.subtitle].filter(Boolean).join(" ");
  const preferred = source.match(/(领航卡|决胜卡|衔接卡|半年卡|一轮卡|暑秋卡|直通卡|全程班)/);
  if (preferred) return preferred[0];
  const matches = source.match(/[\u4e00-\u9fa5A-Za-z0-9]{1,8}[卡班]/g);
  if (!matches?.length) return "直通卡";
  const label = matches[0];
  if (label.length <= 4) return label;
  const shortMatch = label.match(/[\u4e00-\u9fa5A-Za-z0-9]{2,4}[卡班]$/);
  return shortMatch ? shortMatch[0] : label;
}

function renderTable(rows) {
  const table = getEl("priceTable");
  table.className = "price-table";
  table.innerHTML = `
    <div class="table-row header">
      <div>科目</div>
      <div>官网价格</div>
      <div>优惠券</div>
      <div>优惠后每科价格</div>
      <div>支付价格</div>
    </div>
    ${rows.map(tableRow).join("")}
  `;
}

function renderWenZongTable(product) {
  const row = buildWenZongRow(product);
  const table = getEl("priceTable");
  table.className = "price-table wenzong-table";
  table.innerHTML = `
    <div class="wenzong-row wenzong-header">
      <div>课程名称</div>
      <div>官网价格</div>
      <div>优惠券</div>
      <div>折算价格</div>
    </div>
    <div class="wenzong-row wenzong-body">
      <div class="wenzong-course">${escapeHtml(row.courseName)}</div>
      <div class="price-cell official-cell">${yuanText(row.officialPrice)}</div>
      <div class="price-cell coupon-cell">${yuanText(row.coupon)}</div>
      <div class="wenzong-deal">${yuan.format(row.dealPrice)}<span class="unit">元/科</span></div>
    </div>
  `;
}

function comboDetailRows(quote) {
  const rows = [];
  if (quote.nonCount) {
    rows.push({
      type: "非文综",
      count: quote.nonCount,
      official: quote.nonOfficial,
      coupon: quote.nonCoupon,
      unit: quote.nonUnit,
      pay: quote.nonPayPrice
    });
  }
  if (quote.wenCount) {
    rows.push({
      type: "文综",
      count: quote.wenCount,
      official: quote.wenOfficial,
      coupon: quote.wenCoupon,
      unit: quote.wenUnit,
      pay: quote.wenPayPrice
    });
  }
  return rows;
}

function renderComboTable(product) {
  const quote = buildComboQuote(product);
  const table = getEl("priceTable");
  table.className = "price-table combo-table";
  if (!quote) {
    table.innerHTML = `
      <div class="combo-empty">请选择非文综或文综科目数</div>
    `;
    return;
  }

  table.innerHTML = `
    <div class="combo-summary">
      <div>
        <span>官网原价</span>
        <strong>${money(quote.official)}</strong>
        <em>文综${quote.wenCount}科 + 非文综${quote.nonCount}科</em>
      </div>
      <div>
        <span>共优惠</span>
        <strong>${money(quote.coupon)}</strong>
        <em>文综优惠 + 非文综优惠</em>
      </div>
      <div class="combo-total">
        <span>折算价格</span>
        <strong>${money(quote.payPrice)}</strong>
        <em>组合实际支付总价</em>
      </div>
    </div>
    <div class="combo-detail-head">
      <div>课程类型</div>
      <div>科目数</div>
      <div>官网原价</div>
      <div>优惠</div>
      <div>折算/科</div>
      <div>小计</div>
    </div>
    ${comboDetailRows(quote).map((row) => `
      <div class="combo-detail-row">
        <div>${row.type}</div>
        <div>${row.count}科</div>
        <div class="official-cell">${money(row.official)}</div>
        <div>${money(row.coupon)}</div>
        <div>${money(row.unit)}<span class="unit">/科</span></div>
        <div class="pay-cell">${money(row.pay)}</div>
      </div>
    `).join("")}
  `;
}

function renderCourseModules(product, type = activeContentType()) {
  const modules = normalizeModules(product, type).filter((item) =>
    Boolean(item.hours || item.gift || (item.key === "service" && product.servicePeriod))
  );
  const grid = getEl("courseModules");
  grid.style.setProperty("--module-count", modules.length);
  grid.dataset.count = String(modules.length);
  grid.innerHTML = modules.map((item) => `
    <article class="module module-${item.key}">
      <div class="module-visual" aria-hidden="true">
        <img src="${item.image}" alt="" loading="eager" />
      </div>
      <div class="module-label">
        <span class="module-chip">${escapeHtml(item.label || item.module)}</span>
        <span class="module-copy">${escapeHtml(item.subtitle || "")}</span>
      </div>
      <div class="module-hours">
        ${escapeHtml(item.hours || "按产品配置")}
        ${formatGift(item.gift) ? `<br /><span class="gift-text">${formatGift(item.gift)}</span>` : ""}
        ${item.key === "service" && product.servicePeriod ? `<br /><span class="service-period">服务期：${escapeHtml(product.servicePeriod)}</span>` : ""}
      </div>
    </article>
  `).join("");
}

function moduleHasContent(item, includeServicePeriod = false, product = null) {
  return Boolean(item.hours || item.gift || (includeServicePeriod && item.key === "service" && product?.servicePeriod));
}

function cleanGiftText(gift) {
  return String(gift || "").trim().replace(/^(加赠·|加赠|赠·|赠)/, "");
}

function comboModuleLine(label, item, include) {
  if (!include || !moduleHasContent(item)) return "";
  const hours = item.hours || "按产品配置";
  return `<span><b>${label}</b>${escapeHtml(hours)}</span>`;
}

function comboGiftLine(label, item, include) {
  const gift = cleanGiftText(item?.gift);
  if (!include || !gift) return "";
  return `<span><b>${label}</b>赠·${escapeHtml(gift)}</span>`;
}

function renderComboCourseModules(product) {
  const quote = buildComboQuote(product);
  const showWen = Boolean(quote?.wenCount);
  const showNon = Boolean(quote?.nonCount);
  const nonModules = normalizeModules(product, "nonWenZong");
  const wenModules = normalizeModules(product, "wenZong");
  const modules = moduleTemplates.map((template, index) => ({
    template,
    non: nonModules[index],
    wen: wenModules[index]
  })).filter(({ non, wen }) =>
    (showNon && moduleHasContent(non, true, product)) ||
    (showWen && moduleHasContent(wen, true, product))
  );

  const grid = getEl("courseModules");
  grid.style.setProperty("--module-count", modules.length);
  grid.dataset.count = String(modules.length);
  grid.innerHTML = modules.map(({ template, non, wen }) => {
    const title = escapeHtml(template.label);
    const hoursLines = [
      comboModuleLine("文综", wen, showWen),
      comboModuleLine("非文综", non, showNon)
    ].filter(Boolean).join("");
    const giftLines = [
      comboGiftLine("文综", wen, showWen),
      comboGiftLine("非文综", non, showNon)
    ].filter(Boolean).join("");
    return `
      <article class="module module-${template.key} combo-module">
        <div class="module-visual" aria-hidden="true">
          <img src="${template.image}" alt="" loading="eager" />
        </div>
        <div class="module-label">
          <span class="module-chip">${title}</span>
          <span class="module-copy">${escapeHtml(template.subtitle)}</span>
        </div>
        <div class="module-hours combo-module-hours">
          <strong>${title}：</strong>
          <div class="combo-module-lines">${hoursLines || "<span>按产品配置</span>"}</div>
          ${giftLines ? `<div class="combo-module-gifts">${giftLines}</div>` : ""}
          ${template.key === "service" && product.servicePeriod ? `<span class="service-period">服务期：${escapeHtml(product.servicePeriod)}</span>` : ""}
        </div>
      </article>
    `;
  }).join("");
}

function formatGift(gift) {
  const clean = String(gift || "").trim().replace(/^(加赠·|加赠|赠·|赠)/, "");
  return clean ? `赠·${escapeHtml(clean)}` : "";
}

function renderComboQuote(product) {
  const box = getEl("comboQuote");
  box.hidden = true;
  box.innerHTML = "";
}

function buildNotes(product) {
  return product.notes?.length ? product.notes : defaultDisplay(product).notes;
}

function renderNotes(notes) {
  getEl("notesList").innerHTML = notes.map((note) => `<li>${escapeHtml(note)}</li>`).join("");
}

function renderNoteLabel(label = "说明") {
  const noteLabel = getEl("noteLabel");
  noteLabel.innerHTML = "";
  [...String(label || "说明")].forEach((char) => {
    const span = document.createElement("span");
    span.textContent = char;
    noteLabel.appendChild(span);
  });
}

function setExportStatus(html = "") {
  const status = getEl("exportStatus");
  if (status) status.innerHTML = html;
}

async function waitForPosterAssets(node) {
  if (document.fonts?.ready) await document.fonts.ready;
  const images = [...node.querySelectorAll("img")];
  await Promise.all(images.map((image) => {
    if (image.complete && image.naturalWidth) return Promise.resolve();
    return new Promise((resolve) => {
      image.addEventListener("load", resolve, { once: true });
      image.addEventListener("error", resolve, { once: true });
    });
  }));
}

function buildOutput(product, rows) {
  return {
    component: "EducationPriceTable",
    access: {
      adminEditorLocked: !state.adminUnlocked,
      salesEditableFields: ["product", "quoteMode", "displayRange", "comboNonWenZongCount", "comboWenZongCount"]
    },
    title: `${product.name}（${product.subtitle}）`,
    meta: {
      grade: product.grade,
      family: product.family,
      level: product.level,
      servicePeriod: product.servicePeriod
    },
    salesSelection: {
      productId: product.id,
      quoteMode: state.quoteMode,
      displayRange: `${state.startAt}科-6科`
    },
    priceRules: {
      nonWenZong: "1科用单科价，2科用两科价，3-6科统一使用三科及以上价/科",
      wenZong: "文综为一口价产品，单独按文综一口价/科展示",
      coupon: "优惠券 = 官网总价 - 支付价格"
    },
    table: rows.map((row) => ({
      科目: row.subject,
      科目数: row.subjectCount,
      官网价: row.officialPrice,
      优惠券: row.coupon,
      优惠后每科: row.discountedUnitPrice,
      支付价格: row.payPrice
    })),
    courseContent: (product.content?.[activeContentType()] || []).map((item) => ({
      模块: item.module,
      内容: item.subtitle,
      课时: item.hours,
      赠送: item.gift
    })),
    notes: buildNotes(product),
    comboQuote: buildComboQuote(product),
    style: {
      theme: product.theme,
      layout: "premium-quote-workbench"
    }
  };
}

function hydrateEditor(product) {
  if (!state.adminUnlocked || !product) return;
  const modules = normalizeModules(product, "nonWenZong");
  const wenZongModules = normalizeModules(product, "wenZong");
  getEl("editName").value = product.name || "";
  getEl("editSubtitle").value = product.subtitle || "";
  getEl("editGrade").value = product.grade || "";
  getEl("editFamily").value = product.family || "";
  getEl("editLevel").value = product.level || "";
  getEl("editService").value = product.servicePeriod || "";
  getEl("editOnline").checked = product.isOnline !== false;
  getEl("editTag").value = product.tag || "";
  getEl("editOfficial").value = product.nonWenZong?.officialUnitPrice || 0;
  getEl("editTier1").value = product.nonWenZong?.tiers?.[1] || 0;
  getEl("editTier2").value = product.nonWenZong?.tiers?.[2] || 0;
  getEl("editTier3").value = product.nonWenZong?.tiers?.[3] || 0;
  getEl("editWenZongMode").value = wenZongMode(product);
  getEl("editWenZongOfficial").value = product.wenZong?.officialUnitPrice || 0;
  getEl("editWenZongDeal").value = product.wenZong?.dealUnitPrice || 0;
  getEl("knowledgeHours").value = modules[0]?.hours || "";
  getEl("knowledgeGift").value = modules[0]?.gift || "";
  getEl("liveHours").value = modules[1]?.hours || "";
  getEl("liveGift").value = modules[1]?.gift || "";
  getEl("serviceHours").value = modules[2]?.hours || "";
  getEl("serviceGift").value = modules[2]?.gift || "";
  getEl("wenzongKnowledgeHours").value = wenZongModules[0]?.hours || "";
  getEl("wenzongKnowledgeGift").value = wenZongModules[0]?.gift || "";
  getEl("wenzongLiveHours").value = wenZongModules[1]?.hours || "";
  getEl("wenzongLiveGift").value = wenZongModules[1]?.gift || "";
  getEl("wenzongServiceHours").value = wenZongModules[2]?.hours || "";
  getEl("wenzongServiceGift").value = wenZongModules[2]?.gift || "";
  getEl("editSubjectScope").value = product.display?.subjectScope || defaultDisplay(product).subjectScope;
  getEl("editCourseBand").value = product.display?.courseBandTitle || defaultDisplay(product).courseBandTitle;
  getEl("editNoteLabel").value = product.display?.noteLabel || defaultDisplay(product).noteLabel;
  getEl("editGiftText").value = product.display?.giftText || defaultDisplay(product).giftText;
  getEl("editNotes").value = buildNotes(product).join("\n");
  updateAdminWenZongVisibility();
}

function modulesFromEditor(type = "nonWenZong") {
  return moduleTemplates.map((template) => {
    const basePrefix = template.key === "knowledge" ? "knowledge" : template.key;
    const idPrefix = type === "wenZong"
      ? `wenzong${basePrefix[0].toUpperCase()}${basePrefix.slice(1)}`
      : basePrefix;
    return {
      key: template.key,
      module: template.module,
      badge: template.badge,
      label: template.label,
      subtitle: template.subtitle,
      image: template.image,
      hours: getEl(`${idPrefix}Hours`).value.trim(),
      gift: getEl(`${idPrefix}Gift`).value.trim()
    };
  });
}

function saveEditor() {
  const product = adminEditingProduct();
  if (!product || !state.adminUnlocked) return;
  product.name = getEl("editName").value.trim();
  product.subtitle = getEl("editSubtitle").value.trim();
  product.grade = normalizedGrade(getEl("editGrade").value.trim());
  product.theme = themeForGrade(product.grade);
  product.isOnline = getEl("editOnline").checked;
  product.tag = getEl("editTag").value.trim();
  product.family = getEl("editFamily").value.trim();
  product.level = getEl("editLevel").value.trim();
  product.servicePeriod = getEl("editService").value.trim();
  product.nonWenZong.officialUnitPrice = Number(getEl("editOfficial").value || 0);
  product.nonWenZong.tiers[1] = Number(getEl("editTier1").value || 0);
  product.nonWenZong.tiers[2] = Number(getEl("editTier2").value || 0);
  product.nonWenZong.tiers[3] = Number(getEl("editTier3").value || 0);
  product.wenZong = {
    mode: getEl("editWenZongMode").value,
    officialUnitPrice: Number(getEl("editWenZongOfficial").value || 0),
    dealUnitPrice: Number(getEl("editWenZongDeal").value || 0)
  };
  product.content = product.content || {};
  product.content.nonWenZong = modulesFromEditor("nonWenZong");
  product.content.wenZong = modulesFromEditor("wenZong");
  product.display = {
    subjectScope: getEl("editSubjectScope").value.trim() || product.tag || "非文综",
    courseBandTitle: getEl("editCourseBand").value.trim() || "每科课程包含",
    noteLabel: getEl("editNoteLabel").value.trim() || "说明",
    giftText: getEl("editGiftText").value.trim() || "报名赠送多个礼品"
  };
  product.notes = getEl("editNotes").value.split("\n").map((note) => note.trim()).filter(Boolean);
  catalog = normalizeCatalog(catalog);
  if (!currentProduct() || currentProduct().isOnline === false) {
    const fallback = firstOnlineProduct();
    state.selectedGrade = fallback?.grade || state.selectedGrade;
    state.selectedProductId = fallback?.id || "";
  }
  persistCatalog();
  render();
}

function render() {
  renderGradeCards();
  renderProductSelect();
  renderAdminProductSelect();
  const product = currentProduct();
  if (!product) return;
  ensureQuoteModeAvailable(product);
  const rows = buildRows(product);
  const output = buildOutput(product, rows);
  const isWenZongMode = state.quoteMode === "wenZong";
  const tagText = isWenZongMode
    ? "文综"
    : product.tag || "非文综";
  const titleSuffix = isWenZongMode
    ? "文综科目价格体系"
    : "价格体系";
  const subjectScope = product.display?.subjectScope || product.tag || "非文综";

  getEl("pricePoster").className = `price-poster theme-${product.theme || "warm"}`;
  getEl("posterTitle").innerHTML = `${product.name}<br />${titleSuffix}`;
  getEl("posterSubtitle").textContent = `${product.grade}｜${product.subtitle}｜${subjectScope}`;
  getEl("posterTag").textContent = tagText;
  getEl("productHint").textContent = productPricingHint(product);
  getEl("heroCardLabel").textContent = cardLabelForProduct(product);
  getEl("courseBand").textContent = state.quoteMode === "combo"
    ? "组合课程包含"
    : product.display?.courseBandTitle || "每科课程包含";
  renderNoteLabel(product.display?.noteLabel || "说明");
  getEl("giftText").textContent = product.display?.giftText || "报名赠送多个礼品";
  getEl("comboNonWenZongCount").value = String(state.comboNonWenZongCount);
  getEl("comboWenZongCount").value = String(state.comboWenZongCount);
  const hasSeparateWenZong = hasSeparateWenZongPricing(product);
  document.querySelector(".mode-control").hidden = !hasSeparateWenZong;
  document.querySelector(".range-control").hidden = state.quoteMode !== "nonWenZong";
  document.querySelector(".combo-control").hidden = !hasSeparateWenZong || state.quoteMode !== "combo";
  getEl("comboWenZongCount").disabled = !hasSeparateWenZong;
  getEl("comboNonWenZongCount").disabled = !hasSeparateWenZong;
  document.querySelectorAll(".mode-button").forEach((button) => {
    const isWenButton = button.dataset.quoteMode === "wenZong";
    const isComboButton = button.dataset.quoteMode === "combo";
    button.hidden = (isWenButton || isComboButton) && !hasSeparateWenZong;
    button.disabled = (isWenButton || isComboButton) && !hasSeparateWenZong;
    if (isWenButton) {
      button.textContent = "文综一口价";
    }
    button.classList.toggle("active", button.dataset.quoteMode === state.quoteMode);
  });
  document.querySelectorAll(".range-button").forEach((button) => {
    button.classList.toggle("active", Number(button.dataset.startAt) === state.startAt);
  });

  if (isWenZongMode) {
    renderWenZongTable(product);
  } else if (state.quoteMode === "combo") {
    renderComboTable(product);
  } else {
    renderTable(rows);
  }
  renderComboQuote(product);
  if (state.quoteMode === "combo") {
    renderComboCourseModules(product);
  } else {
    renderCourseModules(product);
  }
  renderNotes(output.notes);
  hydrateEditor(adminEditingProduct());
}

async function exportPosterImage() {
  if (!window.html2canvas) {
    alert("导出组件未加载，请刷新页面后重试。");
    return;
  }

  const button = getEl("exportPoster");
  const originalText = button.textContent;
  button.textContent = "正在导出...";
  button.disabled = true;
  setExportStatus("");

  try {
    const product = currentProduct();
    const node = getEl("pricePoster");
    await waitForPosterAssets(node);
    const canvas = await window.html2canvas(node, {
      backgroundColor: "#fff4ec",
      scale: 2,
      useCORS: true,
      imageTimeout: 0,
      logging: false,
      onclone: (clonedDocument) => {
        clonedDocument.getElementById("pricePoster")?.classList.add("is-exporting");
      }
    });
    const modeName = state.quoteMode === "wenZong" ? "文综一口价" : state.quoteMode === "combo" ? "文综组合价" : `${state.startAt}科-6科`;
    const safeName = `${product.grade}-${product.name}-${modeName}`.replace(/[\\/:*?"<>|]/g, "-");

    const blob = await new Promise((resolve, reject) => {
      canvas.toBlob((result) => result ? resolve(result) : reject(new Error("empty image")), "image/png", 1);
    });

    if (window.showSaveFilePicker) {
      const handle = await window.showSaveFilePicker({
        suggestedName: `${safeName}.png`,
        types: [{ description: "PNG 图片", accept: { "image/png": [".png"] } }]
      });
      const writable = await handle.createWritable();
      await writable.write(blob);
      await writable.close();
      setExportStatus("<span>图片已保存到本地。</span>");
    } else {
      if (state.exportObjectUrl) URL.revokeObjectURL(state.exportObjectUrl);
      const url = URL.createObjectURL(blob);
      state.exportObjectUrl = url;
      const link = document.createElement("a");
      link.download = `${safeName}.png`;
      link.href = url;
      link.style.display = "none";
      document.body.appendChild(link);
      link.click();
      link.remove();
      setExportStatus(`<a href="${url}" download="${safeName}.png">如果未自动下载，点击这里保存 PNG</a>`);
    }
  } catch (error) {
    if (error?.name !== "AbortError") {
      alert("导出失败：请确认浏览器允许下载文件，或刷新页面后重试。");
    }
  } finally {
    button.textContent = originalText;
    button.disabled = false;
  }
}

function deleteCurrentProduct() {
  const product = adminEditingProduct();
  if (!product || !state.adminUnlocked) return;
  if (catalog.length <= 1) {
    alert("至少需要保留一个产品，不能删除最后一个。");
    return;
  }
  const confirmed = window.confirm(`确认删除「${product.name}」吗？删除后销售端和后台都会移除该产品。`);
  if (!confirmed) return;
  catalog = catalog.filter((item) => item.id !== product.id);
  const fallback = firstOnlineProduct() || catalog[0];
  state.selectedGrade = fallback?.grade || "";
  state.selectedProductId = fallback?.id || "";
  state.adminEditingProductId = catalog[0]?.id || "";
  persistCatalog();
  render();
}

function createBlankProduct() {
  const grade = state.selectedGrade || "高一";
  const id = `product-${Date.now()}`;
  return {
    id,
    grade,
    family: "新产品卡型",
    level: "待配置班型",
    name: "新建产品",
    subtitle: "待配置",
    tag: "非文综",
    theme: themeForGrade(grade),
    isOnline: false,
    nonWenZong: {
      officialUnitPrice: 0,
      tiers: { 1: 0, 2: 0, 3: 0 }
    },
    wenZong: {
      mode: "none",
      officialUnitPrice: 0,
      dealUnitPrice: 0
    },
    content: {
      nonWenZong: moduleTemplates.map((template) => ({
        key: template.key,
        module: template.module,
        badge: template.badge,
        label: template.label,
        subtitle: template.subtitle,
        image: template.image,
        hours: "",
        gift: ""
      })),
      wenZong: moduleTemplates.map((template) => ({
        key: template.key,
        module: template.module,
        badge: template.badge,
        label: template.label,
        subtitle: template.subtitle,
        image: template.image,
        hours: "",
        gift: ""
      }))
    },
    servicePeriod: "",
    display: {
      subjectScope: "非文综",
      courseBandTitle: "每科课程包含",
      noteLabel: "说明",
      giftText: "报名赠送多个礼品"
    },
    notes: [
      "本页面价格适用于新建产品，请在后台完善说明。",
      "销售端仅可选择产品与展示范围，不能修改系统维护价格。"
    ]
  };
}

function addProduct() {
  if (!state.adminUnlocked) return;
  const product = createBlankProduct();
  catalog = normalizeCatalog([...catalog, product]);
  state.adminEditingProductId = product.id;
  state.selectedGrade = product.grade;
  state.selectedProductId = firstOnlineProduct()?.id || product.id;
  persistCatalog();
  render();
}

function unlockAdmin() {
  const input = getEl("adminCode");
  if (input.value !== ADMIN_CODE) {
    input.value = "";
    input.placeholder = "密钥不正确，请重新输入";
    return;
  }
  state.adminUnlocked = true;
  getEl("adminCard").hidden = false;
  getEl("lockView").hidden = true;
  getEl("adminEditor").hidden = false;
  getEl("adminCard").classList.add("unlocked");
  render();
}

function importCatalog(file) {
  if (!file) return;
  const reader = new FileReader();
  reader.onload = () => {
    try {
      const parsed = JSON.parse(reader.result);
      const products = Array.isArray(parsed) ? parsed : parsed.products;
      if (!validateCatalog(products)) throw new Error("invalid catalog");
      catalog = normalizeCatalog(products);
      state.selectedGrade = catalog.some((product) => product.grade === "高一") ? "高一" : catalog[0].grade;
      state.selectedProductId = firstOnlineProduct()?.id || catalog[0].id;
      state.adminEditingProductId = catalog[0].id;
      persistCatalog();
      render();
    } catch {
      alert("上传失败：JSON 结构不符合产品目录格式。");
    }
  };
  reader.readAsText(file);
}

function bindEvents() {
  getEl("backendToggle").addEventListener("click", () => {
    getEl("adminCard").hidden = !getEl("adminCard").hidden;
  });

  getEl("backendClose").addEventListener("click", () => {
    getEl("adminCard").hidden = true;
  });

  getEl("gradeCards").addEventListener("click", (event) => {
    const button = event.target.closest("[data-grade]");
    if (!button) return;
    state.selectedGrade = button.dataset.grade;
    state.selectedProductId = productsForGrade()[0]?.id || "";
    render();
  });

  getEl("productSelect").addEventListener("change", (event) => {
    state.selectedProductId = event.target.value;
    render();
  });

  document.querySelectorAll(".mode-button").forEach((button) => {
    button.addEventListener("click", () => {
      state.quoteMode = button.dataset.quoteMode;
      if (state.quoteMode === "combo" && !state.comboWenZongCount) {
        state.comboWenZongCount = 3;
      }
      render();
    });
  });

  getEl("comboNonWenZongCount").addEventListener("change", (event) => {
    state.comboNonWenZongCount = Number(event.target.value);
    if (state.comboWenZongCount) state.quoteMode = "combo";
    render();
  });

  getEl("comboWenZongCount").addEventListener("change", (event) => {
    state.comboWenZongCount = Number(event.target.value);
    if (state.comboWenZongCount) state.quoteMode = "combo";
    render();
  });

  getEl("adminProductSelect").addEventListener("change", (event) => {
    const product = catalog.find((item) => item.id === event.target.value);
    if (!product) return;
    state.adminEditingProductId = product.id;
    hydrateEditor(product);
    renderAdminProductSelect();
  });

  document.querySelectorAll(".range-button").forEach((button) => {
    button.addEventListener("click", () => {
      state.startAt = Number(button.dataset.startAt);
      document.querySelectorAll(".range-button").forEach((item) => item.classList.remove("active"));
      button.classList.add("active");
      render();
    });
  });

  getEl("unlockAdmin").addEventListener("click", unlockAdmin);
  getEl("adminCode").addEventListener("keydown", (event) => {
    if (event.key === "Enter") unlockAdmin();
  });
  getEl("saveCatalog").addEventListener("click", saveEditor);
  getEl("addProduct").addEventListener("click", addProduct);
  getEl("deleteProduct").addEventListener("click", deleteCurrentProduct);
  getEl("resetCatalog").addEventListener("click", () => {
    catalog = normalizeCatalog(defaultCatalog);
    state.selectedGrade = catalog.some((product) => product.grade === "高一") ? "高一" : catalog[0].grade;
    state.selectedProductId = firstOnlineProduct()?.id || catalog[0].id;
    state.adminEditingProductId = catalog[0].id;
    persistCatalog();
    render();
  });
  getEl("catalogUpload").addEventListener("change", (event) => importCatalog(event.target.files[0]));
  getEl("exportPoster").addEventListener("click", exportPosterImage);
  getEl("editWenZongMode").addEventListener("change", updateAdminWenZongVisibility);

}

bindEvents();
render();
