//Asignar nombre y version de la cache
const CACHE_NAME = 'v1_cache_EEDC_PWA';

//Configuracion de los ficheros
var urlsToCache = [
    './',
    './css/styles.css',

    './img/windows11/SmallTile.scale-100.png',
    './img/windows11/SmallTile.scale-125.png',
    './img/windows11/SmallTile.scale-150.png',
    './img/windows11/SmallTile.scale-200.png',
    './img/windows11/SmallTile.scale-400.png',
    './img/windows11/Square150x150Logo.scale-100.png',
    './img/windows11/Square150x150Logo.scale-125.png',
    './img/windows11/Square150x150Logo.scale-150.png',
    './img/windows11/Square150x150Logo.scale-200.png',
    './img/windows11/Square150x150Logo.scale-400.png',
    './img/windows11/Wide310x150Logo.scale-100.png',
    './img/windows11/Wide310x150Logo.scale-125.png',
    './img/windows11/Wide310x150Logo.scale-150.png',
    './img/windows11/Wide310x150Logo.scale-200.png',
    './img/windows11/Wide310x150Logo.scale-400.png',
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
    './img/windows11/Square44x44Logo.targetsize-16.png',
    './img/windows11/Square44x44Logo.targetsize-20.png',
    './img/windows11/Square44x44Logo.targetsize-24.png',
    './img/windows11/Square44x44Logo.targetsize-30.png',
    './img/windows11/Square44x44Logo.targetsize-32.png',
    './img/windows11/Square44x44Logo.targetsize-36.png',
    './img/windows11/Square44x44Logo.targetsize-40.png',
    './img/windows11/Square44x44Logo.targetsize-44.png',
    './img/windows11/Square44x44Logo.targetsize-48.png',
    './img/windows11/Square44x44Logo.targetsize-60.png',
    './img/windows11/Square44x44Logo.targetsize-64.png',
    './img/windows11/Square44x44Logo.targetsize-72.png',
    './img/windows11/Square44x44Logo.targetsize-80.png',
    './img/windows11/Square44x44Logo.targetsize-96.png',
    './img/windows11/Square44x44Logo.targetsize-256.png',
    './img/windows11/Square44x44Logo.altform-unplated_targetsize-16.png',
    './img/windows11/Square44x44Logo.altform-unplated_targetsize-20.png',
    './img/windows11/Square44x44Logo.altform-unplated_targetsize-24.png',
    './img/windows11/Square44x44Logo.altform-unplated_targetsize-30.png',
    './img/windows11/Square44x44Logo.altform-unplated_targetsize-32.png',
    './img/windows11/Square44x44Logo.altform-unplated_targetsize-36.png',
    './img/windows11/Square44x44Logo.altform-unplated_targetsize-40.png',
    './img/windows11/Square44x44Logo.altform-unplated_targetsize-44.png',
    './img/windows11/Square44x44Logo.altform-unplated_targetsize-48.png',
    './img/windows11/Square44x44Logo.altform-unplated_targetsize-60.png',
    './img/windows11/Square44x44Logo.altform-unplated_targetsize-64.png',
    './img/windows11/Square44x44Logo.altform-unplated_targetsize-72.png',
    './img/windows11/Square44x44Logo.altform-unplated_targetsize-80.png',
    './img/windows11/Square44x44Logo.altform-unplated_targetsize-96.png',
    './img/windows11/Square44x44Logo.altform-unplated_targetsize-256.png',
    './img/windows11/Square44x44Logo.altform-lightunplated_targetsize-16.png',
    './img/windows11/Square44x44Logo.altform-lightunplated_targetsize-20.png',
    './img/windows11/Square44x44Logo.altform-lightunplated_targetsize-24.png',
    './img/windows11/Square44x44Logo.altform-lightunplated_targetsize-30.png',
    './img/windows11/Square44x44Logo.altform-lightunplated_targetsize-32.png',
    './img/windows11/Square44x44Logo.altform-lightunplated_targetsize-36.png',
    './img/windows11/Square44x44Logo.altform-lightunplated_targetsize-40.png',
    './img/windows11/Square44x44Logo.altform-lightunplated_targetsize-44.png',
    './img/windows11/Square44x44Logo.altform-lightunplated_targetsize-48.png',
    './img/windows11/Square44x44Logo.altform-lightunplated_targetsize-60.png',
    './img/windows11/Square44x44Logo.altform-lightunplated_targetsize-64.png',
    './img/windows11/Square44x44Logo.altform-lightunplated_targetsize-72.png',
    './img/windows11/Square44x44Logo.altform-lightunplated_targetsize-80.png',
    './img/windows11/Square44x44Logo.altform-lightunplated_targetsize-96.png',
    './img/windows11/Square44x44Logo.altform-lightunplated_targetsize-256.png',
    './img/android/android-launchericon-512-512.png',
    './img/android/android-launchericon-192-192.png',
    './img/android/android-launchericon-144-144.png',
    './img/android/android-launchericon-96-96.png',
    './img/android/android-launchericon-72-72.png',
    './img/android/android-launchericon-48-48.png',
    './img/ios/16.png',
    './img/ios/20.png',
    './img/ios/29.png',
    './img/ios/32.png',
    './img/ios/40.png',
    './img/ios/50.png',
    './img/ios/57.png',
    './img/ios/58.png',
    './img/ios/60.png',
    './img/ios/64.png',
    './img/ios/72.png',
    './img/ios/76.png',
    './img/ios/80.png',
    './img/ios/87.png',
    './img/ios/100.png',
    './img/ios/114.png',
    './img/ios/120.png',
    './img/ios/128.png',
    './img/ios/144.png',
    './img/ios/152.png',
    './img/ios/167.png',
    './img/ios/180.png',
    './img/ios/192.png',
    './img/ios/256.png',
    './img/ios/512.png',
    './img/ios/1024.png'
];

self.addEventListener("install", (e) => {
    e.waitUntil(
        caches
            .open(cache_NAME)
            .then((cache) => {
                return cache.addAll(urlsToCache).then(() => {
                    self.skipWaiting();
                });
            })
            .catch((err) => console.log("No se ha registrado el cache"), err)
    );
});

//Event activate
self.addEventListener("activate", (e) => {
    const cacheWhiteList = [cache_NAME];
    e.waitUntil(
        caches.keys()
            .then((cacheNames) => {
                return Promise.all(
                    cacheNames.map((cacheNames) => {
                        if (cacheWhiteList.indexOf(cacheName) == -1) {
                            return cache.delete(cacheNames);
                        }
                    })
                );
            })
            .then(() => {
                self.clients.claim();
            })
    );
});


//Event fetch
self.addEventListener("fetch", (e) => {
    e.respondWith(
        caches.match(e.request)
            .then(res => {
                if (res) {
                    return res;
                }
                return fetch(e.request);
            })
    );
});