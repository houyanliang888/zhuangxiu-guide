// 线上实测：PWA 真实安装能力检查（HTTPS 环境才有效）
const { chromium } = require("playwright");

const URL = "https://houyanliang888.github.io/zhuangxiu-guide/";

(async () => {
  const browser = await chromium.launch({ channel: "msedge" });
  const page = await browser.newPage({
    viewport: { width: 390, height: 844 },
    deviceScaleFactor: 2,
    userAgent:
      "Mozilla/5.0 (Linux; Android 13; Pixel 7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Mobile Safari/537.36",
  });

  const errs = [];
  page.on("pageerror", (e) => errs.push("[pageerror] " + e.message));
  page.on("console", (m) => { if (m.type() === "error") errs.push("[console] " + m.text()); });

  await page.goto(URL, { waitUntil: "networkidle" });
  await page.waitForTimeout(1500);

  // ---- manifest 是否被解析 ----
  const manifest = await page.evaluate(async () => {
    const link = document.querySelector('link[rel="manifest"]');
    if (!link) return { ok: false, reason: "无 manifest link" };
    const res = await fetch(link.href);
    const j = await res.json();
    return {
      ok: true,
      status: res.status,
      name: j.name,
      short_name: j.short_name,
      display: j.display,
      theme_color: j.theme_color,
      iconCount: (j.icons || []).length,
      icons: (j.icons || []).map((i) => `${i.sizes} ${i.purpose || "any"}`),
    };
  });
  console.log("MANIFEST:", JSON.stringify(manifest, null, 2));

  // ---- 图标能否真的取到 ----
  const iconChecks = await page.evaluate(async () => {
    const list = [
      "icons/icon-192.png",
      "icons/icon-512.png",
      "icons/icon-maskable-192.png",
      "icons/icon-maskable-512.png",
      "apple-touch-icon.png",
      "favicon.png",
    ];
    const out = {};
    for (const p of list) {
      try {
        const r = await fetch(p);
        out[p] = r.status + " / " + (r.headers.get("content-type") || "?");
      } catch (e) {
        out[p] = "ERR " + e.message;
      }
    }
    return out;
  });
  console.log("ICONS:", JSON.stringify(iconChecks, null, 2));

  // ---- Service Worker 注册状态 ----
  const sw = await page.evaluate(async () => {
    if (!("serviceWorker" in navigator)) return { supported: false };
    const reg = await navigator.serviceWorker.getRegistration();
    const keys = await caches.keys();
    let cachedCount = 0;
    for (const k of keys) {
      const c = await caches.open(k);
      cachedCount += (await c.keys()).length;
    }
    return {
      supported: true,
      scope: reg ? reg.scope : null,
      active: reg && reg.active ? reg.active.state : null,
      caches: keys,
      cachedCount,
    };
  });
  console.log("SERVICE WORKER:", JSON.stringify(sw, null, 2));

  // ---- 是否收到 beforeinstallprompt（可安装信号）----
  const installable = await page.evaluate(() => ({
    displayModeStandalone: window.matchMedia("(display-mode: standalone)").matches,
    isSecureContext: window.isSecureContext,
  }));
  console.log("SECURE:", JSON.stringify(installable, null, 2));

  // 等安装条（goto 后再挂监听来不及，这里直接看 DOM 状态）
  await page.waitForTimeout(1200);
  const barShown = await page.evaluate(() => {
    const b = document.getElementById("installBar");
    return { on: b ? b.classList.contains("on") : null, text: b ? b.innerText.replace(/\s+/g, " ").trim() : null };
  });
  console.log("INSTALL BAR:", JSON.stringify(barShown, null, 2));

  // ---- 内容渲染 ----
  const content = await page.evaluate(() => ({
    stages: document.querySelectorAll("[data-go]").length,
    title: document.title,
  }));
  console.log("CONTENT:", JSON.stringify(content, null, 2));

  await page.screenshot({ path: require("path").join(__dirname, "..", "shots", "pwa-online.png") });

  console.log("\n=== 错误 ===");
  console.log(errs.length ? errs.join("\n") : "无 ✅");

  await browser.close();
})();
