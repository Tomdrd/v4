const CACHE_NAME = 'academia-v1';
const urlsToCache = [
  '/',
  '/index.html',
  '/resultado.html',
  '/treino.html',
  '/calorias.html',
  '/agua.html',
  '/imc.html',
  '/lembrete.html',
  '/style.css',
  '/blog.html',
  '/script.js',
  '/manifest.json',
  '/icons/icon-72.png',
  '/icons/icon-96.png',
  '/icons/icon-128.png',
  '/icons/icon-192.png',
  '/icons/icon-512.png'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => response || fetch(event.request))
  );
});
