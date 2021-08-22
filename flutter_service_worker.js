'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "39dc88dc2a66272140cd63c266499e0f",
"index.html": "1c120fbce19432dd31d2803f43c93c95",
"/": "1c120fbce19432dd31d2803f43c93c95",
"main.dart.js": "ed9b99d1661a4b9e3c09c6b2392ebef5",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "f059b3b6cc1f309177217d601e9ca01b",
".git/config": "92349298693df164b48480b45e3b3a38",
".git/objects/0d/d6d2952ef6d8d8961c0a9537ab4eb79ac514b1": "b02f890d2d7a2ab0af06a75e287b65fb",
".git/objects/6f/0c07ec253c724752c9c1de0510beb890275b2b": "db7027f27fcc604df31b17d37bc163bc",
".git/objects/32/46ad559eeae0370195978eaed83f1053ee13fd": "a043dbc0a0bda96ce2127799ccc27506",
".git/objects/35/70dc8f5dc0b51c3a54163df2c5ee7aa6050377": "410f48e064ff8618b200a76bd9f5ac43",
".git/objects/ad/2cd594975fb3f2c38e2b4c47c535f5a18f3740": "3d368208c7c6ccc54a611ae19df3d376",
".git/objects/da/b7f2144d9a6c34dd9fc3eab3fdb6ffc59a1954": "6dc130b2f410aa40a5071769e97959af",
".git/objects/a5/add59d190e2726ae32f77d2ac86ac80c169d91": "f0e223737277b096af1b7b81a3514b0b",
".git/objects/d1/6257495bab668e1eeef05e0518f9671f82e4fc": "a2323fabed96f32f15785a656160c4e0",
".git/objects/d1/6461c9207c10045be971c4878a4070da490ea3": "a5d9848d1a296b29b831d1ba0081d095",
".git/objects/d6/c1073115d66a73b027c429943788d05cb8ce44": "5fa4ff73890b19c2255e9fea15e8cdcc",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/ee/e58149d68952dcc78cabc0e422f1eea6698fbe": "2475c0566602ba35c0f6cfda2f522182",
".git/objects/f5/0344d9605df8d6c71feecb70c81937a57fa2f5": "0e44f0edd8914e6d33747551f649246b",
".git/objects/e4/01f3319bce0df76eb7ce385532f0e67f8fd854": "305ee376979271320396a32995002ce0",
".git/objects/e4/129669421922dce235ad99f831831fd8ecfd38": "b6d2a46baef770b8721e37d0d3ac2db8",
".git/objects/c6/da01ab02de3ca9e50aafc5d4c6c865815f9257": "1dc2ddba5c9ef27b1cadcb14c3b0e09e",
".git/objects/ec/8b7d7571929aaffae2bc40e15be5c501a77e2e": "9e332d67ad9b71bb49965f08f346b287",
".git/objects/20/5bb5db271c6d8de8399864c7bb9b917f638893": "c993b22f115d7f3ae6d5b7b212806539",
".git/objects/7d/39ada9815d284addc9490c809208505eb0b7d4": "fce9b06b1ce08df7e638dc69a30bd3c8",
".git/objects/29/2d83945e2de646b6b58be266354e772e2599b5": "0a513715ea04a78eacd478ee393b48c7",
".git/objects/7c/e0d8949290ae271001af49de36c1498399eb41": "54a50f888955a4c5c4f7bce90e8106c9",
".git/objects/16/c0742c0c6870c568ad6e41f355a6a3792ffd94": "ad6da775be795c84a56efdf3ee55b569",
".git/objects/89/aae6b6afc9a15381aec165494e81e99f93499f": "9c7151550eef40498f44a528a908f173",
".git/objects/80/6f5dc47da14c85ce28efbf28a31b7ca775b0e5": "d4a6f9df382c905edabd77ece3eadd74",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/19/57a8489778a33a797bd67543634b2cead04f72": "674e7b7b3633184b00d897613534a2da",
".git/objects/44/1d3baab4f3bfc1ce251942e420988fac12a8f4": "ac3a2ba50af07d40313ad29d8023a3b1",
".git/objects/88/8d60a4a89ef5d15b836fa695db85bc852dc062": "09767351f582411bc901c2439e367aa5",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/6e/26de76d46d7e4c28d19acb691cc8a4b41b4287": "9ce195e87d87f63da6937cdbbc944c14",
".git/objects/09/ec332ee057b64035c55c8377721198ed2f6e72": "34722e0fa49ff4ba6eedf984e312a449",
".git/objects/5e/028caa86efaeb6ca1fbb4121a1f4d9443af775": "fe52ffa993c20e6f84c5d2618c1b5798",
".git/objects/6d/1ee2846d109f2944da24735f13b88372559835": "a8a81988be58bfe124a2465b52667deb",
".git/objects/90/1b4983b22f01176612fc2ec0a64a688b6fee36": "94a2f5b30f55596ddf8f0cbd813079b9",
".git/objects/a9/fd8e62f04c58d0e7258df545ce3378e285b014": "4a835cd3dcd951eb660e6fc262b8e6a4",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/a8/beffd3ad4fe54d6cabccf83a05477d6a986cd0": "6677888e4a051c7838b5b240c09f0981",
".git/objects/de/a233fe9e7213b1ef1168bac7569a2f8d5773c0": "36a1ebcbfec20b5498d8553409c2cda3",
".git/objects/a6/647fe2bf0365d9857e96b31642873a9f90aca9": "6eea8a3cf2a12b59cb23acb01c6d48b6",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/c5/20bd626f14c24fbc491156876c690ad29b03c1": "edcea3105a79bca9efbe513b9ef80d6e",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/2d/0dc70e539db9e8a1a9edb557fffad0bca260dc": "6535069b036ff5697808305e04bd36b8",
".git/objects/84/44b470fa25da9d07a5a943faa7a7f60a7bf561": "130affd9a9b72d2acb6bae9d73424a03",
".git/objects/85/fb9e11303052448482988f1a2a71a439e7cb9c": "08a6a5ebf5477ff612010a3a2e9dbd97",
".git/objects/1c/b508247890e31cc748ccf3b4f0d5fd3a7ad845": "66446efc0ded86a1fff1d322db098d52",
".git/objects/49/c2cfb6f9fc047def30304c37ea1eac36f40a05": "e59ea25c399c8aa1f0d0cd8fa35e738a",
".git/objects/25/c10148581703535ea99011f66aa07570de94c3": "99171f64d32d4a86b9760a3c46789686",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "8bf334832d893ef3c1bcfe9037bff761",
".git/logs/refs/heads/master": "8bf334832d893ef3c1bcfe9037bff761",
".git/logs/refs/remotes/origin/master": "5de16fdea454d36556a9c914cda8c07b",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/master": "befb7fbb6740ae3c723961b64bff4d6e",
".git/refs/remotes/origin/master": "befb7fbb6740ae3c723961b64bff4d6e",
".git/index": "6180cccdcea8ac56695592e28bb50670",
".git/COMMIT_EDITMSG": "d791837d5f9009329d0ad62d5f34276a",
"assets/AssetManifest.json": "4ceb7dafab4e356ced17f7cb3f7616f9",
"assets/NOTICES": "5a1c6ee61a4ae0d37b75d42674cd7cc6",
"assets/FontManifest.json": "2332d5be7d00486f839418ed1441a45b",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/assets/images/susu-murni-indie.png": "77caf9a9bba74a667fee56343bdf365c",
"assets/assets/images/mie-saus-ahoy.png": "d19ff4929c192a930eedfea77d7b2dba",
"assets/assets/images/nasi-telur-babak-belur.png": "ea09f4e7bfd3090f8783896ac2dd0be0",
"assets/assets/images/daruma-mentai.png": "fbf6d593b17f61bbcf0d191dc016bdd5",
"assets/assets/images/ayam-bang-dava.png": "3a3cacff52ffc7d6712c81ed7694d934",
"assets/assets/images/ayam.png": "9528a0dbc63340698c3293eeba393801",
"assets/assets/icons/cart-icon.svg": "adea98d3b68424c057f6b30f9328741e",
"assets/assets/fonts/Poppins/Poppins-Medium.ttf": "ba95810b56f476990ca71d15139d5111",
"assets/assets/fonts/Poppins/Poppins-Regular.ttf": "41e8dead03fb979ecc23b8dfb0fef627",
"assets/assets/fonts/Poppins/Poppins-Bold.ttf": "c23534acbeddbaadfd0ab2d2bbfdfc84"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
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
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
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
