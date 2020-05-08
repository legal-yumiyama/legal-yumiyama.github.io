const STATIC_DATA = [
  'index.html',
  '/css/app.css',
  '/css/chat.css'
];

self.addEventListener('install', function(e) {
 e.waitUntil(
   caches.open('cache_v1').then(function(cache) {
     return cache.addAll(STATIC_DATA);
   })
 );
});

self.addEventListener('fetch', function(event) {
 console.log(event.request.url);

 event.respondWith(
   caches.match(event.request).then(function(response) {
     return response || fetch(event.request);
   })
 );
});
