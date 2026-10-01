// 侯博睿高中学习手册 · 离线缓存 Service Worker（PWA 用，Electron 打包时不需要但不冲突）
const CACHE = "hbr-study-v3";
const ASSETS = [
  "./index.html",
  "./manifest.json",
  "./icon-192.png",
  "./icon-512.png",
  "./apple-touch-icon.png",
  "./data/math.js",
  "./data/physics.js",
  "./data/chemistry.js",
  "./data/biology.js",
  "./data/chinese.js",
  "./data/english.js",
  "./data/zhenti.js",
  "./data/papers.js",
  "./data/gushici.js",
  "./data/words.js"
];

self.addEventListener("install", (e) => {
  e.waitUntil(caches.open(CACHE).then((c) => c.addAll(ASSETS)).then(() => self.skipWaiting()));
});

self.addEventListener("activate", (e) => {
  e.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(keys.filter((k) => k !== CACHE).map((k) => caches.delete(k)))
    ).then(() => self.clients.claim())
  );
});

self.addEventListener("fetch", (e) => {
  e.respondWith(
    caches.match(e.request, { ignoreSearch: true }).then((hit) => hit || fetch(e.request))
  );
});
