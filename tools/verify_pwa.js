// 用系统 Edge + Playwright 无头渲染 index.html，抓控制台报错 + 各视图截图
const { chromium } = require("playwright");
const path = require("path");
const fs = require("fs");

(async () => {
  const base = path.dirname(__dirname);
  const fileUrl = "file:///" + path.join(base, "index.html").replace(/\\/g, "/");

  const browser = await chromium.launch({
    channel: "msedge",
    args: ["--allow-file-access-from-files"],
  });
  const page = await browser.newPage({
    viewport: { width: 390, height: 844 },
    deviceScaleFactor: 2,
  });

  const errors = [];
  page.on("console", (m) => {
    if (m.type() === "error") errors.push("[console] " + m.text());
  });
  page.on("pageerror", (e) => errors.push("[pageerror] " + e.message));

  await page.goto(fileUrl, { waitUntil: "load" });
  await page.waitForTimeout(600);

  // ---- 首页断言 ----
  const home = await page.evaluate(() => {
    const app = document.getElementById("app");
    return {
      len: app.innerHTML.length,
      stages: document.querySelectorAll("[data-go]").length,
      hasPlaceholder: /\$\{/.test(app.innerHTML),
      title: document.title,
      manifest: !!document.querySelector('link[rel="manifest"]'),
      appleIcon: !!document.querySelector('link[rel="apple-touch-icon"]'),
      installBar: !!document.getElementById("installBar"),
      iosTip: !!document.getElementById("iosTip"),
      swSupported: "serviceWorker" in navigator,
    };
  });
  console.log("HOME:", JSON.stringify(home, null, 2));
  await page.screenshot({ path: path.join(base, "shots", "pwa-home.png") });

  // ---- 详情页 ----
  await page.click("[data-go]");
  await page.waitForTimeout(400);
  const detail = await page.evaluate(() => {
    const app = document.getElementById("app");
    return {
      len: app.innerHTML.length,
      blocks: document.querySelectorAll(".block").length,
      hasLocal: /长治本地实情|长治/.test(app.innerText),
      hasPlaceholder: /\$\{/.test(app.innerHTML),
    };
  });
  console.log("DETAIL:", JSON.stringify(detail, null, 2));
  await page.screenshot({ path: path.join(base, "shots", "pwa-detail.png") });

  // ---- 进度 / 关于 ----
  await page.click('[data-tab="progress"]');
  await page.waitForTimeout(350);
  await page.screenshot({ path: path.join(base, "shots", "pwa-progress.png") });

  await page.click('[data-tab="about"]');
  await page.waitForTimeout(350);
  await page.screenshot({ path: path.join(base, "shots", "pwa-about.png") });

  console.log("\n=== JS 错误 ===");
  console.log(errors.length ? errors.join("\n") : "无 ✅");

  await browser.close();
})();
