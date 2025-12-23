'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "0f47e94afdd83d839a0763993d9ed2cc",
"version.json": "3eb827decb74aaf4050059df03f2f2c4",
"index.html": "cddbea8009dff932d0ea0863deecb267",
"/": "cddbea8009dff932d0ea0863deecb267",
"main.dart.js": "b24fe3a9d886da63a4a6c31c3f3d6d45",
"flutter.js": "76f08d47ff9f5715220992f993002504",
"favicon.png": "6a5fc255306a43731223b32862130e70",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "0fcd544062d783cdce0aded6d1ebba69",
"assets/AssetManifest.json": "8e31bb44300b5181b4c49771ccabdba7",
"assets/NOTICES": "19ddd184be9752554ad67f59e5fe3a94",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/AssetManifest.bin.json": "6ca02059168b7ed41d3a0d38d1d885ad",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "50de2ff2a12bdd99b539664fdd3aa7fb",
"assets/fonts/MaterialIcons-Regular.otf": "6dc3bd8336304bd4b89dea579530b922",
"assets/assets/i10n/langs.yaml": "afe5f54bd40b551e0a28c1b47107f23a",
"assets/assets/images/home_con2.png": "29812bd174aeb37bf4c6c5b23e0ea557",
"assets/assets/images/whyAllScribe_right.png": "78d07a52bc4ee4e88084d797f663d01d",
"assets/assets/images/home_con3.png": "8f7163e7c09e6bdd9000f02dad1d4d0f",
"assets/assets/images/home_con1.png": "d56843ae0f278da525f4a8c6d61447ba",
"assets/assets/images/language_logo.png": "a098c9916acfc280495d6aca05788f59",
"assets/assets/images/whyAllScribe_left.png": "8736a04541324db395ef253044cae375",
"assets/assets/images/home_con4.png": "0c86faf3ff360cf5154a4344a88908c1",
"assets/assets/images/apple_logo.png": "1623e1d5ffa58ee8037ec492f5318794",
"assets/assets/images/home_con5.png": "0807a0946a5f81b3c70ab8e51befe6d0",
"assets/assets/images/whyAllScribe_right_hover.png": "2e7390e088fd3582e5563e1291385c51",
"assets/assets/images/whyAllScribe_icon4.png": "ba11e3063e7eb1ea47da13c651c3d77d",
"assets/assets/images/heroSection_img.png": "27842741c11007cc89f730f893e781d4",
"assets/assets/images/foot_logo.png": "ab764aa16c9fa6c5068c1b79cb8c0958",
"assets/assets/images/FeaturesGrid_icon4.png": "571bd5644853cb89f774a52747494292",
"assets/assets/images/faq_up.png": "9f50c2b615e3509e7f67f68d771298d3",
"assets/assets/images/whyAllScribe_left_hover.png": "e323c3122dc02f6a5dcda6a9389a0f47",
"assets/assets/images/FeaturesGrid_icon1.png": "42ced35e293172adcab558f375ed4d1c",
"assets/assets/images/whyAllScribe_icon3.png": "db252a178a7ccd52035ead13f678acbf",
"assets/assets/images/whyAllScribe_icon2.png": "4993f9f8c54ac344c689aa88265ee4c9",
"assets/assets/images/FeaturesGrid_icon2.png": "ec08ef93d31d07a678b6f410d3b20742",
"assets/assets/images/FeaturesGrid_icon3.png": "20ff3120aa07dc4a234f4b7786486e94",
"assets/assets/images/whyAllScribe_icon1.png": "3e160b61e3e15cee67f10daf9f0fe640",
"assets/assets/images/pricing_icon5.png": "ec8429ccf125a9144168c7223a7cd828",
"assets/assets/images/home_more.png": "59a13bccabd08389a2d56c40f5004a3e",
"assets/assets/images/pricing_icon4.png": "7b4cba14b5fe43e72e16626fba11ed6f",
"assets/assets/images/pricing_tab.png": "53f32fc8b433c2d46f550ee32b0b759b",
"assets/assets/images/TestimonialsSection_star.png": "078395234c4658ae56cb8f9cc54c2119",
"assets/assets/images/home_to_where.png": "bb31fcf61f11553014a09ed99c9f6277",
"assets/assets/images/home_check.png": "588d36467df81c32003254b1b14e4a22",
"assets/assets/images/pricing_icon3.png": "57b46008549edb371e83a96320155df0",
"assets/assets/images/faq_down.png": "f84a4a58ea850b6d29727fdccc95f415",
"assets/assets/images/pricing_icon2.png": "bb0eb9dd8f3cdfbb48b16c979ab21258",
"assets/assets/images/pricing_icon1.png": "637ef4f2c5d8848a7caecfa17cb57d1c",
"assets/assets/images/ScenariosSection_icon1.png": "6bdefbc3ab2305b979528effec1213ba",
"assets/assets/images/home_top1.png": "d37213f00869062297cbaef5a13aaaac",
"assets/assets/images/ScenariosSection_icon2.png": "06d4b4b9f06b4d19a7a123b6c5d27337",
"assets/assets/images/home_top2.png": "ac20f05873339f20b8a0fcd33c8e8acb",
"assets/assets/images/web_logo.png": "c38010b839c3d7d0bf76540c415e86e0",
"assets/assets/images/ScenariosSection_icon3.png": "b78de13d0063857d75f7e3b9efc75e91",
"assets/assets/images/ScenariosSection_icon4.png": "f0bab388f33b2a0f255fe020f37f2f97",
"canvaskit/skwasm_st.js": "d1326ceef381ad382ab492ba5d96f04d",
"canvaskit/skwasm.js": "f2ad9363618c5f62e813740099a80e63",
"canvaskit/skwasm.js.symbols": "80806576fa1056b43dd6d0b445b4b6f7",
"canvaskit/canvaskit.js.symbols": "68eb703b9a609baef8ee0e413b442f33",
"canvaskit/skwasm.wasm": "f0dfd99007f989368db17c9abeed5a49",
"canvaskit/chromium/canvaskit.js.symbols": "5a23598a2a8efd18ec3b60de5d28af8f",
"canvaskit/chromium/canvaskit.js": "ba4a8ae1a65ff3ad81c6818fd47e348b",
"canvaskit/chromium/canvaskit.wasm": "64a386c87532ae52ae041d18a32a3635",
"canvaskit/skwasm_st.js.symbols": "c7e7aac7cd8b612defd62b43e3050bdd",
"canvaskit/canvaskit.js": "6cfe36b4647fbfa15683e09e7dd366bc",
"canvaskit/canvaskit.wasm": "efeeba7dcc952dae57870d4df3111fad",
"canvaskit/skwasm_st.wasm": "56c3973560dfcbf28ce47cebe40f3206"};
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
