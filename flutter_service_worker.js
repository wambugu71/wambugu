'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "4017454c0ca9bf3e25c5d673a294d17b",
".git/config": "645466c26db4eac1c14ef9d6762a09d0",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "442dc733076621f9eba50ee190628207",
".git/HEAD": "aa68ab5480086dc25bd069aa11c3222e",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "a6ff9c2702d10068eb80233f4d4a75f0",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "8e76c5255e9c3b3214cf7727280407fa",
".git/logs/refs/heads/latest": "df73a9c95df1503c421770dbf3389bf6",
".git/logs/refs/heads/master": "7ec20ff50dc824cdeb3ced183f633214",
".git/logs/refs/remotes/origin/latest": "b7289f6d907b463d1dd04d500bafeb6f",
".git/logs/refs/remotes/origin/main": "84fa00b91d3ce7d17e6b4309ad71c1fa",
".git/logs/refs/remotes/origin/master": "55ee15ade276d04a2348dea0d2e0df15",
".git/objects/00/5aefdd9c9d07f02b87ed64faac980bc1c4e057": "7678b983e18cfa030f7635cb58a30a41",
".git/objects/03/0cc15406a683a1cc7a2710be5cceb66ee307d7": "335153e2cac22e1196bb666bca31cc78",
".git/objects/06/52b871b8848e25aa3b11f9894f0697244a5e24": "30a3986aa756413e2d60de9c03b0b7de",
".git/objects/0c/50a365aadb75960a90fac5c04844bd49f7ae7c": "fab0febac3164f72639675f08aedfa4c",
".git/objects/10/473941ac540f412ec7b34f7133d9c92a9fbde9": "00171614ef60fd5ddf339db171cc1153",
".git/objects/14/174eb56c370e458bf7d8fddba9549e7e6cbbbe": "aa614b15be7f62986d6018f087f21ccc",
".git/objects/15/b83d0ea172d6162d04b00fddf3711880f60c6d": "10bff8b2b47bece183c484e7df956ad8",
".git/objects/1a/d7683b343914430a62157ebf451b9b2aa95cac": "94fdc36a022769ae6a8c6c98e87b3452",
".git/objects/1c/b8a0b6e9368554a56b1a429f37ef82a73b1703": "9972b78b6e33ba4e632f6641730d8b33",
".git/objects/23/637bc3573701e2ad80a6f8be31b82926b4715f": "5f84f5c437bb2791fdc8411523eae8ff",
".git/objects/27/5aacd281b5e258ad4d78055814a31db1731b89": "a1601201f2a74eb48eac9c875f9c437f",
".git/objects/2a/e2275e48740cecfad758882874f99b17d3f6c4": "ff74337975622bb86b45a4dcb54ef149",
".git/objects/46/f6a169823e3ed70258c7e5ac2301dc611c38c2": "d024353c0d15f27cc95e2184ed9cb919",
".git/objects/49/b87f0d6ea21646e2a5a011dedd27b97dd4a218": "6d5c8baf36eee2d34c62a3aedaf2b9d6",
".git/objects/4b/ef00c858313734835aa6427384484b60ee7c7d": "b1ad45a9ff47a2125224d4e33ad2f26e",
".git/objects/4c/51fb2d35630595c50f37c2bf5e1ceaf14c1a1e": "a20985c22880b353a0e347c2c6382997",
".git/objects/53/18a6956a86af56edbf5d2c8fdd654bcc943e88": "a686c83ba0910f09872b90fd86a98a8f",
".git/objects/53/3d2508cc1abb665366c7c8368963561d8c24e0": "4592c949830452e9c2bb87f305940304",
".git/objects/55/43c61de63d3547350bb4eba7b5986e324a71a8": "bcecd292e16c5009ca69ec35687e15f8",
".git/objects/5d/66f56dccd2ed01c5540652530a65166e81fe08": "a57178a6962101e5f6ef65c927f6dc6b",
".git/objects/60/f06ef0f0e20feed29194d09f41dfcc81b89834": "0914dd5af0f2f5bf3330a0da43b54e3b",
".git/objects/68/39c015934b613e622d24e69a9c5747493ffb2e": "0287318eacb682a590798ef311e6c036",
".git/objects/6a/e310b9c22ffe6fdd52ba336b457ce1746e151b": "797ea5d46275d156542d67bd252b7a31",
".git/objects/6b/9862a1351012dc0f337c9ee5067ed3dbfbb439": "85896cd5fba127825eb58df13dfac82b",
".git/objects/6f/8e2358538426880ed2f858ccd33b5e548b2e8a": "4ab32af89e1b7b5ea4a4aa1c3285e2fa",
".git/objects/70/a234a3df0f8c93b4c4742536b997bf04980585": "d95736cd43d2676a49e58b0ee61c1fb9",
".git/objects/73/c63bcf89a317ff882ba74ecb132b01c374a66f": "6ae390f0843274091d1e2838d9399c51",
".git/objects/78/d123a778c7b5a8821403f2b32b37ca9f1e4651": "f83e315d9f549150250f51ac6c39a6ce",
".git/objects/79/b34200112554cfa1b2bb0f4f3654245d453243": "4504b96a9b933d3644813e35a29c6436",
".git/objects/81/161204c23142eaf54e332971cf4cd8f0c80819": "1b09db6d06e348f940231e3783a946b1",
".git/objects/81/b781a8258c658066790e45682af9018f2c68f2": "9ab91974c1a9849187a92dadcf39acc6",
".git/objects/8e/3c7d6bbbef6e7cefcdd4df877e7ed0ee4af46e": "025a3d8b84f839de674cd3567fdb7b1b",
".git/objects/93/9696c3c14a1227c25420d75223841d2d4515f0": "21716da08aefa9a8cf46297f4e489fea",
".git/objects/95/e609782e61c47c206b8eb41e52d62a17b26639": "f4a8e06b19a9fc9e00e6e76613aaf9a5",
".git/objects/96/0be7406640813f9a3b77ad17670051e029d007": "82e4709cbf737fd9494f4b4636c8d972",
".git/objects/9b/d3accc7e6a1485f4b1ddfbeeaae04e67e121d8": "784f8e1966649133f308f05f2d98214f",
".git/objects/a6/3e3729e313addc15a03262d3b8f06d7fb2c64a": "002ca0f393368aa02154ff4e239683fc",
".git/objects/b9/6a5236065a6c0fb7193cb2bb2f538b2d7b4788": "4227e5e94459652d40710ef438055fe5",
".git/objects/bf/c809603ea944a01289ff6d261f74f2ddcb1ac1": "9950578e2b732c3e7535e02dde782e56",
".git/objects/c8/08fb85f7e1f0bf2055866aed144791a1409207": "92cdd8b3553e66b1f3185e40eb77684e",
".git/objects/c8/31e792b124781b8b7d67fb0d25e966192b4e15": "dfc76209d40cf75dc911ece573e19ff8",
".git/objects/d0/af0d89774c7a528cff6b520e1153dcade1fa1d": "cee4643a4480667b5a06faf7d1902e78",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/dc/11fdb45a686de35a7f8c24f3ac5f134761b8a9": "761c08dfe3c67fe7f31a98f6e2be3c9c",
".git/objects/e0/7ac7b837115a3d31ed52874a73bd277791e6bf": "74ebcb23eb10724ed101c9ff99cfa39f",
".git/objects/e3/31dec9f4751bce102ad369fa96919c2f0eab37": "2eae1fbddbb718043f20efa8f14fe205",
".git/objects/e8/0fbc7d3822ebb3c299b2beb8e3f858290e6dd1": "0160503f97b918be98f19c12f2f3ff2d",
".git/objects/e9/94225c71c957162e2dcc06abe8295e482f93a2": "2eed33506ed70a5848a0b06f5b754f2c",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f3/e17625e1f5b2e6d817508b016129080fc0bb40": "e4211440de4b15dacea436f72c22b7dc",
".git/objects/f4/2ad998dc1113ae1f4be258ca3dd925f5d2c51e": "5c89843a609e1c23d857ca174e71cb5d",
".git/objects/f4/62668260b93cbc20cebd136e9fbf8aa1918b89": "e7b483e86d4522cf55439fa261bd7ab8",
".git/objects/f5/098f7136197886cc56dbcaf272d6a73ad8905d": "081141b2551bcb729d29be540d85df0a",
".git/objects/f5/72b90ef57ee79b82dd846c6871359a7cb10404": "e68f5265f0bb82d792ff536dcb99d803",
".git/objects/f9/887f8262e5413706368949718bda8fe9cc27bc": "41b46f57e222f6f6e712d76b1f218932",
".git/objects/pack/pack-63dc78b89f66441d5bfc215402fe6d31562d03c8.idx": "78d74c3278e0b7eb74a4da8742bb4a84",
".git/objects/pack/pack-63dc78b89f66441d5bfc215402fe6d31562d03c8.pack": "c1058a0d15acab0995c4e87b923296c0",
".git/objects/pack/pack-63dc78b89f66441d5bfc215402fe6d31562d03c8.rev": "a5cdd11f9bf1b4c9b3589b1bab53148d",
".git/refs/heads/latest": "75c5b46b75ac3d05b584ad232d5b2eae",
".git/refs/heads/master": "393c7f1248b8f3766a085ff7f828d01b",
".git/refs/remotes/origin/latest": "393c7f1248b8f3766a085ff7f828d01b",
".git/refs/remotes/origin/main": "ddfc848192678276bd777987829590da",
".git/refs/remotes/origin/master": "63cb7d22312cdd6464e7e14652960a71",
"assets/AssetManifest.bin": "382e4bd6a3b2f3a8b710324d6a7cd7ff",
"assets/AssetManifest.bin.json": "d922003aec7bfb5e08639a6be415f611",
"assets/AssetManifest.json": "432d11a3ae97a050a1df75830b1c884f",
"assets/assets/business-intelligence-tools-.jpg": "99790f28463774bb76deb2248f52efa2",
"assets/assets/coffee-tree.png": "63390296cabecb4329bbe418a173bb39",
"assets/assets/favicon.png": "41cecc11fcc6ac0da77b73eb417de4ed",
"assets/assets/trees_det.jpg": "b65740485e7280de0b91118e90d055ae",
"assets/FontManifest.json": "5a32d4310a6f5d9a6b651e75ba0d7372",
"assets/fonts/MaterialIcons-Regular.otf": "6f475e0531a007ee2ef41ea9fbadb825",
"assets/NOTICES": "cca76fc2ee314a39b7379e5317affcf6",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "6b6325a73266363017ff94944ce826c8",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "f5572697f77258b81c174299efb1f3c9",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "0f677ec7adf3f61192af81fe85fbf9c0",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "728b2d477d9b8c14593d4f9b82b484f3",
"canvaskit/canvaskit.js.symbols": "bdcd3835edf8586b6d6edfce8749fb77",
"canvaskit/canvaskit.wasm": "7a3f4ae7d65fc1de6a6e7ddd3224bc93",
"canvaskit/chromium/canvaskit.js": "8191e843020c832c9cf8852a4b909d4c",
"canvaskit/chromium/canvaskit.js.symbols": "b61b5f4673c9698029fa0a746a9ad581",
"canvaskit/chromium/canvaskit.wasm": "f504de372e31c8031018a9ec0a9ef5f0",
"canvaskit/skwasm.js": "ea559890a088fe28b4ddf70e17e60052",
"canvaskit/skwasm.js.symbols": "e72c79950c8a8483d826a7f0560573a1",
"canvaskit/skwasm.wasm": "39dd80367a4e71582d234948adc521c0",
"favicon.png": "41cecc11fcc6ac0da77b73eb417de4ed",
"flutter.js": "83d881c1dbb6d6bcd6b42e274605b69c",
"flutter_bootstrap.js": "bc7f17480e72ab7422002b2a7a5555f5",
"icons/android-chrome-192x192.png": "fe25a3c77cb3938beccd156aa0c57333",
"icons/android-chrome-512x512.png": "1502267bc8007addad6bb9ac20c3b36a",
"icons/apple-touch-icon.png": "2ae6837418e60249a23d0e6b20e5d80b",
"index.html": "0d9857f7724f29780f8a49aefec16968",
"/": "0d9857f7724f29780f8a49aefec16968",
"main.dart.js": "e3dd1650046ea59c2958dbc4ec4caeb0",
"manifest.json": "628e2d5b0cc7aab45446ecde58038638",
"version.json": "ed09dc49f5b0351ac80e718bc79bcc85"};
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
