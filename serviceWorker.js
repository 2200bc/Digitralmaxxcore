
self.addEventListener('install', e => {
  e.waitUntil(
    caches.open('maxx-core-cache').then(cache => {
      return cache.addAll([
        './',
        './index.html',
        './style.css',
        './scripts/app.js',
        './manifest.json'
      ]);
    })
  );
});
self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(response => response || fetch(e.request))
  );
});
