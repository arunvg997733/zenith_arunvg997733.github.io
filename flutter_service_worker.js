'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "238aaa75473543b73c0c4eeab6dca937",
"assets/AssetManifest.bin.json": "2ca2b2d5a2b3f8202053921b3f0f789e",
"assets/AssetManifest.json": "8a3fefc88682d35563e4545f2f7aaebc",
"assets/assets/fonts/satoshi/Satoshi-VariableItalic.ttf": "db98db5c0d84369d2586aaf5eedc3376",
"assets/assets/png/add_course.png": "39ec4785140f42a3df3ba92a3b6a2552",
"assets/assets/png/live.png": "b81d27490bf38e37c3c6d1462b3b705a",
"assets/assets/png/quiz.png": "716cd09706161b214a2806d7b7bd1d40",
"assets/assets/svg/add_course.svg": "49e41e9a47a0e49b96a0d44bb2c3face",
"assets/assets/svg/add_image.svg": "9257f4d5be4e0df17c87c5eccc9b4953",
"assets/assets/svg/arc.svg": "54d6cd0ddfbc04b6d0c901fd0797a040",
"assets/assets/svg/arc1.svg": "4f9b42327d960985d00af0c2db43a41c",
"assets/assets/svg/arc12.svg": "4f9b42327d960985d00af0c2db43a41c",
"assets/assets/svg/arc2.svg": "013bff7a13af0bf3ec45d0f10a0d761b",
"assets/assets/svg/drawer_icons/course_and_module.svg": "4b151267a5ce2a5c9dcb77b4ce4d6b6f",
"assets/assets/svg/drawer_icons/dashboard.svg": "ab017301e563e6ab9ff17c279104faba",
"assets/assets/svg/drawer_icons/live.svg": "5301987aa1984f72847f8580c345baef",
"assets/assets/svg/drawer_icons/logout.svg": "bef701d43c6e234595d954c50b12bcde",
"assets/assets/svg/drawer_icons/notification.svg": "65735b5ecc94681b10775675cf57f93c",
"assets/assets/svg/drawer_icons/quiz_creation.svg": "2b12e61c519b38355294f61b9cc2165b",
"assets/assets/svg/drawer_icons/user_controller.svg": "99745007a41c8bbcb7ec3f4ae4d357ce",
"assets/assets/svg/drawer_icons/wedsite_content.svg": "b46250985bd952a5954d61f1ec248368",
"assets/assets/svg/enlarge.svg": "c023991f4f547920fc181d51813b1ca3",
"assets/assets/svg/lock.svg": "719efd97bacfe65e30625bff7a1ed14f",
"assets/assets/svg/logo.svg": "7e2e08105f0ef1a9e335b4cb225de78c",
"assets/assets/svg/logo2.svg": "ce5130bffe2e841595dc55d34365da15",
"assets/assets/svg/menu.svg": "a153b342db62301b198c6a2970ee6fc6",
"assets/assets/svg/more_down.svg": "59d275e0640dec5d31d1bcc44a93e2e3",
"assets/assets/svg/right_icon.svg": "996c8477d629b466966494ed4f6eed2f",
"assets/assets/svg/search.svg": "d985208174a995d690ea592ae3ae76e4",
"assets/assets/svg/user.svg": "1c37bfdc4acb25f7dcd0dd5f59d02f42",
"assets/assets/svg/user_image.svg": "72db64eb56e59ea297c43614ba1a72e4",
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
"flutter_bootstrap.js": "03a8ceb5cf903a42f136c5a18be7a2a8",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "43ffe11b58ea6385c1a7822b85cae8b1",
"/": "43ffe11b58ea6385c1a7822b85cae8b1",
"main.dart.js": "cafb91effe313a65117c5179bfcbc62d",
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
