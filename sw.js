//Asignar nombre y version de la cache
const CACHE_NAME = 'v1_cache_EEDC_PWA';

//Configuracion de los ficheros
var urlsToCache = [
    './',
    './css/styles.css',


    './img/windows11/LargeTile.scale-100.png',
    './img/windows11/LargeTile.scale-125.png',
    './img/windows11/LargeTile.scale-150.png',
    './img/windows11/LargeTile.scale-200.png',
    './img/windows11/LargeTile.scale-400.png',
    './img/windows11/Square44x44Logo.scale-100.png',
    './img/windows11/Square44x44Logo.scale-125.png',
    './img/windows11/Square44x44Logo.scale-150.png',
    './img/windows11/Square44x44Logo.scale-200.png',
    './img/windows11/Square44x44Logo.scale-400.png',
    './img/windows11/StoreLogo.scale-100.png',
    './img/windows11/StoreLogo.scale-125.png',
    './img/windows11/StoreLogo.scale-150.png',
    './img/windows11/StoreLogo.scale-200.png',
    './img/windows11/StoreLogo.scale-400.png',
    './img/windows11/SplashScreen.scale-100.png',
    './img/windows11/SplashScreen.scale-125.png',
    './img/windows11/SplashScreen.scale-150.png',
    './img/windows11/SplashScreen.scale-200.png',
    './img/windows11/SplashScreen.scale-400.png',

    './img/android/android-launchericon-512-512.png',
    './img/android/android-launchericon-192-192.png',
    './img/android/android-launchericon-144-144.png',
    './img/android/android-launchericon-96-96.png',
    './img/android/android-launchericon-72-72.png',
    './img/android/android-launchericon-48-48.png',

];

// Event: install
self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then((cache) => {
                return cache.addAll(urlsToCache);
            })
            .then(() => {
                self.skipWaiting();
            })
            .catch((err) => {
                console.log('Error registering cache', err);
            })
    );
});

// Event: activate
self.addEventListener('activate', (event) => {
    const cacheWhitelist = [CACHE_NAME];

    event.waitUntil(
        caches.keys()
            .then((cacheNames) => {
                return Promise.all(
                    cacheNames.map((cacheName) => {
                        if (cacheWhitelist.indexOf(cacheName) === -1) {
                            return caches.delete(cacheName);
                        }
                    })
                );
            })
            .then(() => {
                self.clients.claim();
            })
    );
});

// Event: fetch
self.addEventListener('fetch', (event) => {
    event.respondWith(
        caches.match(event.request)
            .then((response) => {
                if (response) {
                    // Serve cached response
                    return response;
                }

                // Fetch and cache new request
                return fetch(event.request)
                    .then((response) => {
                        if (response && response.status === 200) {
                            caches.open(CACHE_NAME)
                                .then((cache) => {
                                    cache.put(event.request, response.clone());
                                });
                        }

                        return response;
                    })
                    .catch((err) => {
                        console.log('Error fetching request', err);
                    });
            })
    );
});
