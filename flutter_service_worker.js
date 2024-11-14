'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "ef686ad44a40291a53720355a4407937",
"assets/AssetManifest.bin.json": "2ac3b0c29e03928fbe930f2f29b1863f",
"assets/AssetManifest.json": "16ef94ac731dc249fbc657993c895e98",
"assets/FontManifest.json": "7b2a36307916a9721811788013e65289",
"assets/fonts/MaterialIcons-Regular.otf": "f0225a5a5b3ce9cd5108e771ab81e735",
"assets/lib/assets/images/business-strategy-concept-with-wooden-blocks-with-icons.jpg": "2cd577cdadc350e8edc3ac31a0853020",
"assets/lib/assets/images/business.png": "c7baedfd0996cecdcec4cc604a1af6d4",
"assets/lib/assets/images/confused.png": "dbe09da2b61a12a87462c315744a0da9",
"assets/lib/assets/images/couple.png": "a93d060f4d11d50e07a21362f7eb90fe",
"assets/lib/assets/images/discussion.png": "31270f1de13fe70c95c10b2dc6e0fa20",
"assets/lib/assets/images/family.png": "085f5ea5c87b098a871fc2fdac5fb470",
"assets/lib/assets/images/freed%2520prisoner.jpg": "e7350b368e6c00e6b28ca90be363100a",
"assets/lib/assets/images/goal.jpg": "6de40b3fb82c2d598ed8464c75f64948",
"assets/lib/assets/images/homeless.jpg": "1621c710a3ee3aa0a11ce4b7d2b4c1fc",
"assets/lib/assets/images/humanoriented.jpg": "a90af013acac7786618958661f4697b1",
"assets/lib/assets/images/idea-concept-with-light-bulb.jpg": "52ba6f43435c3bcf7c96257b47b323c9",
"assets/lib/assets/images/Logoo.png": "da15bb1dd5e0d830532830e28801024c",
"assets/lib/assets/images/man.png": "be4264523bf6c46914d25ff525c88fbd",
"assets/lib/assets/images/mental-health.png": "9f66509a101491a104bd295d3f6cf28c",
"assets/lib/assets/images/mission.jpg": "0c33451c2004e116e4884d1a663c4b0e",
"assets/lib/assets/images/mission2.jpg": "d53f68d0af08df9d9b44d1586fdbc644",
"assets/lib/assets/images/mission3.jpg": "4ea9aefd9b106859e4350d91e29502fc",
"assets/lib/assets/images/monitoring.png": "1327934060a791e204ef410632163803",
"assets/lib/assets/images/office.png": "a881f9e55790e4768f7bb47b15c55e8b",
"assets/lib/assets/images/pexels-julia-m-cameron-6994963.jpg": "bf8856b3c6768dc865ac46779d597063",
"assets/lib/assets/images/pexels-liza-summer-6348119.jpg": "3043e1fc388e29007e7ae963e6f5b7cd",
"assets/lib/assets/images/pexels-rdne-6646917.jpg": "a791a2d2a8f480bde7f5d6202d913554",
"assets/lib/assets/images/pexels-shvetsa-5029859.jpg": "d51ea7f0a53a1275ba8e38a9dcf51ba1",
"assets/lib/assets/images/pexels-shvetsa-5029919.jpg": "ad4caa2f347d46af52878bb6521210db",
"assets/lib/assets/images/pexels-suraphat-933620.jpg": "95f7cacc9fc14515ed6e3b5b82642a80",
"assets/lib/assets/images/pexels-suraphat-933624.jpg": "8a134fa1b21d92684637b4afc142b2e4",
"assets/lib/assets/images/policy.png": "94d0577aae00a132f1288ec63b96728d",
"assets/lib/assets/images/project-management.png": "6b0f337f49484945d53cba9ae10354f0",
"assets/lib/assets/images/roughsleeperlarge.jpg": "869ae10a579adae5fa692d453444919b",
"assets/lib/assets/images/roughsleepermedium.jpg": "55602bcc6e864902ba1bfbccf76677b9",
"assets/lib/assets/images/team-spirit%2520(1).png": "6ab582d2f0d5b0a2c0fe123cc0ce5ed9",
"assets/lib/assets/images/team-spirit%2520(2).png": "f55d5d94a132fe7e8e5ca5eac9afb8c1",
"assets/lib/assets/images/team-spirit%2520(3).png": "984a4ba824ccd33cd520bc232fa7dddc",
"assets/lib/assets/images/team-spirit.png": "71b4b020aa36d90b774c02c28fcfc807",
"assets/lib/assets/images/vision.jpg": "778b94b3f39daf521d9dcfbeca289036",
"assets/lib/assets/images/whatweare/addiction_.jpg": "e56926f4c822969382e6114370ea715e",
"assets/lib/assets/images/whatweare/carousel1.jpg": "a76d9167b79b40dabb60ea35b8802403",
"assets/lib/assets/images/whatweare/carousel2.jpg": "9ce5ba6ac8f027dd6686aa333de900d1",
"assets/lib/assets/images/whatweare/carousel3.jpg": "09e22c4d6b71266b55ae9cdf2a718204",
"assets/lib/assets/images/whatweare/carousel4.jpg": "d434f3a6d2baf1a7d49a39c8f20295f2",
"assets/lib/assets/images/whatweare/communityintegration_.jpg": "b1ee0e260927d7d87a4ebaf7f670c727",
"assets/lib/assets/images/whatweare/cultural_.jpg": "35049463a21f369b3ec3f43f84f4c79d",
"assets/lib/assets/images/whatweare/donatee.jpg": "e5d4adff42e169c0444b30c39805586d",
"assets/lib/assets/images/whatweare/donations.jpg": "347933e1a520a67bdc369c589bcd1feb",
"assets/lib/assets/images/whatweare/employmentsupports.jpg": "326c266a0191067349232e8872d9c126",
"assets/lib/assets/images/whatweare/housings.jpg": "d71e6efdbfea6bc6e83a7ee2b90f1931",
"assets/lib/assets/images/whatweare/legalsupportt.jpg": "ebd2613a6eb73691910e295b1923d85b",
"assets/lib/assets/images/whatweare/lifeskills.jpg": "922a5acf941f8e643af508d70e0cc0e4",
"assets/lib/assets/images/whatweare/mentalhealth_.jpg": "ac67f92b2e3716265d9abc0d1f420e81",
"assets/lib/assets/images/whatweare/ongoingsupport_.jpg": "7787e4d4e9039168446cf60b28226153",
"assets/lib/assets/images/whatweare/pexels-karolina-grabowska-8554160.jpg": "c769c78ab4ffdceab08d0b9c4086d94e",
"assets/lib/assets/images/whatweare/pexels-yankrukov-7640745.jpg": "e765e583cb7fadfe66cd7b088f246de8",
"assets/lib/assets/images/whatweare/reunitedfamily_.jpg": "e26520846e53b463a49c86d27bca37ff",
"assets/lib/assets/images/whatweare/s.jpg": "0d57b1cf3418173a15564dbc79d090d5",
"assets/lib/assets/images/whatweare/streetdonation.jpg": "15b33fd874660464fbd785d35f48b2a5",
"assets/lib/assets/images/whatweare/supportplans.jpg": "2d2f2b6d2e32953a790db9c544d833bf",
"assets/lib/assets/images/whatweare/trainings.jpg": "a1a457232b75167890db7f561ab8e6d2",
"assets/lib/assets/images/woman.png": "983e000abd9d2cd2d6489b6235241920",
"assets/NOTICES": "976913f3c3acc82736dcab2a025bb392",
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
"favicon.png": "ee03869f0c24d91eeec7b942d8ab2765",
"flutter.js": "f393d3c16b631f36852323de8e583132",
"flutter_bootstrap.js": "e66ba772f24d30683d9e55db58f8eae0",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "4a6629a075d4428c6f970b9bb72e101f",
"/": "4a6629a075d4428c6f970b9bb72e101f",
"main.dart.js": "b783b40ae41fe702d28a314807a24d8c",
"manifest.json": "001f4e899d8f9bf212b9dce9ad267e97",
"version.json": "02366b12f3bba5ea54182fbef162b89f"};
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
