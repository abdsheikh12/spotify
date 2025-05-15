const cacheName = "spotify-clone-v1";
const assets = [
  "/",
  "/index.html",
  "/spotify.css",
  "/spotify.js",
  "/sp.png",
  "/pause.svg",
  "/play.svg",
  "/skip next.svg",
  "/skip pre.svg",
  "/gif.gif",
  "/songs/1.mp3",
  "/covers/1.jpg",
  // باقی songs اور covers یہاں add کریں
];

self.addEventListener("install", (e) => {
  e.waitUntil(
    caches.open(cacheName).then((cache) => {
      return cache.addAll(assets);
    })
  );
});

self.addEventListener("fetch", (e) => {
  e.respondWith(
    caches.match(e.request).then((res) => {
      return res || fetch(e.request);
    })
  );
});
