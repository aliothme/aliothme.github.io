// Service Worker buat caching basic
self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open('pwa-cache').then((cache) => {
            return cache.addAll([
                '/',
                '/staging.html',
                '/manifest.json',
                '/icon.png'
            ]);
        })
    );
});

self.addEventListener('fetch', (event) => {
    event.respondWith(
        caches.match(event.request).then((response) => {
            return response || fetch(event.request);
        })
    );
});
