'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "34a5b5646677494e064eb169b7c98935",
"assets/AssetManifest.bin.json": "78edada2c9c7dc22a7b4edef03c1115c",
"assets/AssetManifest.json": "5a820c4821c625f9edcdd477154e2c08",
"assets/assets/fonts/satoshi/Satoshi-VariableItalic.ttf": "db98db5c0d84369d2586aaf5eedc3376",
"assets/assets/png/add_course.png": "39ec4785140f42a3df3ba92a3b6a2552",
"assets/assets/png/leadership.png": "3e7289eafd1b0749ea034172d084ad1d",
"assets/assets/png/live.png": "b81d27490bf38e37c3c6d1462b3b705a",
"assets/assets/png/quiz.png": "716cd09706161b214a2806d7b7bd1d40",
"assets/assets/svg/add_course.svg": "4f5cef3b54cc5f633bc0b00cf3468573",
"assets/assets/svg/add_image.svg": "61271b742987dbf7f037f52f06afe57c",
"assets/assets/svg/arc.svg": "91f1c4c2d15483fed0186d5436b2ca0a",
"assets/assets/svg/arc1.svg": "dbfbdbd96224a1578f51ec97b309c7e3",
"assets/assets/svg/arc12.svg": "dbfbdbd96224a1578f51ec97b309c7e3",
"assets/assets/svg/arc2.svg": "d01ca9ce8a15d5a0a9320b6a0e7816d7",
"assets/assets/svg/drawer_icons/course_and_module.svg": "c87eccb113092c3da9f2ea81226b3188",
"assets/assets/svg/drawer_icons/dashboard.svg": "57e9f01446112541a0b21c5c85e9180e",
"assets/assets/svg/drawer_icons/live.svg": "ca14b72fbf3d8612977a1c23281578fb",
"assets/assets/svg/drawer_icons/logout.svg": "81f42bef3de1be4781feb41caa9fc716",
"assets/assets/svg/drawer_icons/notification.svg": "3326fd44a2c0594f486817a03601ab84",
"assets/assets/svg/drawer_icons/quiz_creation.svg": "bca290116d97fcb9d945f92da0070f5b",
"assets/assets/svg/drawer_icons/user_controller.svg": "3ee5472154ea5c3d7cd3d4e41db09af7",
"assets/assets/svg/drawer_icons/wedsite_content.svg": "f854113839406807d8051a0fd11167b9",
"assets/assets/svg/enlarge.svg": "f6c63f0db48a0f8ead4d50d78788e845",
"assets/assets/svg/filter.svg": "88184b538171277604458d63e4eadb12",
"assets/assets/svg/lock.svg": "65b78d0243490f2f8b1d5e5b242122a6",
"assets/assets/svg/logo.svg": "fa90c7cf5c5d3b0bd7da1e4a8d592a6c",
"assets/assets/svg/logo2.svg": "3e29cb96202683281dac89bde31650b0",
"assets/assets/svg/menu.svg": "029992924760fc85a8db3009117f5239",
"assets/assets/svg/more_down.svg": "38c9f8c1b25c2dafc66efd9288a3a041",
"assets/assets/svg/right_icon.svg": "ada006c6baf1b43a1af1edded247c16f",
"assets/assets/svg/search.svg": "b1b1d1b3e187c967170d4a984682b9a5",
"assets/assets/svg/user.svg": "91c69009fd28e257b7494b78368fb436",
"assets/assets/svg/user_image.svg": "0f1299dcf24dbfc912e0e77f522ce318",
"assets/FontManifest.json": "513e67293ac3624096c65be520e9dcaf",
"assets/fonts/MaterialIcons-Regular.otf": "8ea08ea2444cc58ec5807fd7669e488f",
"assets/NOTICES": "e5f492f7ed6e7a66b5ebf1a574fa5086",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "66177750aff65a66cb07bb44b8c6422b",
"canvaskit/canvaskit.js.symbols": "48c83a2ce573d9692e8d970e288d75f7",
"canvaskit/canvaskit.wasm": "1f237a213d7370cf95f443d896176460",
"canvaskit/chromium/canvaskit.js": "671c6b4f8fcc199dcc551c7bb125f239",
"canvaskit/chromium/canvaskit.js.symbols": "a012ed99ccba193cf96bb2643003f6fc",
"canvaskit/chromium/canvaskit.wasm": "b1ac05b29c127d86df4bcfbf50dd902a",
"canvaskit/skwasm.js": "694fda5704053957c2594de355805228",
"canvaskit/skwasm.js.symbols": "262f4827a1317abb59d71d6c587a93e2",
"canvaskit/skwasm.wasm": "9f0c0c02b82a910d12ce0543ec130e60",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "f393d3c16b631f36852323de8e583132",
"flutter_bootstrap.js": "549b5303407b967e8a6f8ebced2524ed",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "43ffe11b58ea6385c1a7822b85cae8b1",
"/": "43ffe11b58ea6385c1a7822b85cae8b1",
"main.dart.js": "bdef543069612e4f36b35c844d657925",
"manifest.json": "7d826414ce61860797b69127df577ae7",
"version.json": "8bc0b0ae2175e79d24d27d6982b39b95"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
