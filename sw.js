// Aplikacja kierowcy – praca offline: pliki aplikacji z pamięci, gdy nie ma zasięgu (dane kursów trzyma sama aplikacja)
var WER = 'kursy-v2';
var PLIKI = ['./', './index.html', './config.js', './manifest.webmanifest', './icon-192.png', './icon-512.png'];
self.addEventListener('install', function (e) { e.waitUntil(caches.open(WER).then(function (c) { return c.addAll(PLIKI); })); self.skipWaiting(); });
self.addEventListener('activate', function (e) {
  e.waitUntil(caches.keys().then(function (k) { return Promise.all(k.filter(function (x) { return x !== WER; }).map(function (x) { return caches.delete(x); })); }));
  self.clients.claim();
});
self.addEventListener('fetch', function (e) {
  var u = new URL(e.request.url);
  if (e.request.method !== 'GET' || u.origin !== self.location.origin) return;   // zapytania do skryptu – zawsze z sieci
  e.respondWith(fetch(e.request).then(function (r) {
    var kopia = r.clone(); caches.open(WER).then(function (c) { c.put(e.request, kopia); }); return r;
  }).catch(function () { return caches.match(e.request).then(function (r) { return r || caches.match('./index.html'); }); }));
});
