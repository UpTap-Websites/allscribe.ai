'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "3fea9d71316f1315b46bd4607e711d1c",
"version.json": "3eb827decb74aaf4050059df03f2f2c4",
"index.html": "f8b660f0e5ae97bceeca15560619e762",
"/": "f8b660f0e5ae97bceeca15560619e762",
"audio_extractor.js": "1e75a97e45d407098c5709ce2fb7c458",
"main.dart.js": "9f14520c949186a28f7b653d6e5fa067",
"flutter.js": "76f08d47ff9f5715220992f993002504",
"favicon.png": "6a5fc255306a43731223b32862130e70",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "0fcd544062d783cdce0aded6d1ebba69",
"assets/AssetManifest.json": "427955abb8bccfe81f760b4ec46465c5",
"assets/NOTICES": "9a1204a8463b0d1c0ee45a1e5a795610",
"assets/FontManifest.json": "866b9b20ab0e8c30ffe220d2a2d66abe",
"assets/AssetManifest.bin.json": "b81a0c4d0f8d8688c10d03dbb19d1563",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "28e7101174074cb1139c2f5611505901",
"assets/packages/syncfusion_flutter_pdfviewer/assets/icons/light/squiggly.png": "9894ce549037670d25d2c786036b810b",
"assets/packages/syncfusion_flutter_pdfviewer/assets/icons/light/strikethrough.png": "26f6729eee851adb4b598e3470e73983",
"assets/packages/syncfusion_flutter_pdfviewer/assets/icons/light/highlight.png": "2fbda47037f7c99871891ca5e57e030b",
"assets/packages/syncfusion_flutter_pdfviewer/assets/icons/light/underline.png": "a98ff6a28215341f764f96d627a5d0f5",
"assets/packages/syncfusion_flutter_pdfviewer/assets/icons/dark/squiggly.png": "68960bf4e16479abb83841e54e1ae6f4",
"assets/packages/syncfusion_flutter_pdfviewer/assets/icons/dark/strikethrough.png": "72e2d23b4cdd8a9e5e9cadadf0f05a3f",
"assets/packages/syncfusion_flutter_pdfviewer/assets/icons/dark/highlight.png": "2aecc31aaa39ad43c978f209962a985c",
"assets/packages/syncfusion_flutter_pdfviewer/assets/icons/dark/underline.png": "59886133294dd6587b0beeac054b2ca3",
"assets/packages/syncfusion_flutter_pdfviewer/assets/fonts/RobotoMono-Regular.ttf": "5b04fdfec4c8c36e8ca574e40b7148bb",
"assets/packages/record_web/assets/js/record.fixwebmduration.js": "1f0108ea80c8951ba702ced40cf8cdce",
"assets/packages/record_web/assets/js/record.worklet.js": "6d247986689d283b7e45ccdf7214c2ff",
"assets/packages/wakelock_plus/assets/no_sleep.js": "7748a45cd593f33280669b29c2c8919a",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "c86ef9bd769203bc21b56d6ad94f08b1",
"assets/fonts/MaterialIcons-Regular.otf": "611431eadffc3f149a582dc32ba186df",
"assets/assets/svg/home.svg": "c3cafd707407d23455a951b2620ff601",
"assets/assets/svg/info_edit.svg": "3da4ca0ecc8f308f3de7a74118495693",
"assets/assets/conversation.docx": "d21de1422071b1079651e8c544720774",
"assets/assets/i10n/langs.yaml": "2a0f037a0ad19d037bd5919d3209b46e",
"assets/assets/images/home_con2.png": "29812bd174aeb37bf4c6c5b23e0ea557",
"assets/assets/images/y2_2.png": "9d32ce9d91f40252069126d6c4cf85e9",
"assets/assets/images/y10_2.png": "ae8ecf7581866b36f6cc552fee3e3397",
"assets/assets/images/whyAllScribe_right.png": "78d07a52bc4ee4e88084d797f663d01d",
"assets/assets/images/y6_6.png": "c5349612c54021a9375a3b6cc9d027a5",
"assets/assets/images/y4_4.png": "6a2fc2c144e07634521d92ec0edeaad3",
"assets/assets/images/y4_5.png": "a7b2359666c225a89cd14a46d26feb45",
"assets/assets/images/y6_7.png": "f22bf8c85cf2f40a4eaa6e6de0efcebd",
"assets/assets/images/y10_3.png": "bf923a1ee760e2f32e043bc21bd10190",
"assets/assets/images/y2_3.png": "c0ea11bfe5b9587bbb89daa23860fa35",
"assets/assets/images/home_con3.png": "8f7163e7c09e6bdd9000f02dad1d4d0f",
"assets/assets/images/home_con1.png": "a6ffe717b9e786fa0e5dcfa596d1b042",
"assets/assets/images/all_lang.png": "80cabb865d962cb4fc3d465fd93235e9",
"assets/assets/images/y2_1.png": "bd2129c7cbe29eff8c6058623f6a015c",
"assets/assets/images/language_logo.png": "a098c9916acfc280495d6aca05788f59",
"assets/assets/images/y10_1.png": "0275f1f18ca5bf8c747186605aa5db92",
"assets/assets/images/all_up.png": "c9bbf764a8e5b0390ccc45a9773544ac",
"assets/assets/images/move_to_new.png": "d57ea9c12961a814ccc7283c059965a8",
"assets/assets/images/y6_5.png": "e6f1fd88de6b1fd078f11b978ce80b2a",
"assets/assets/images/y4_7.png": "fcfe1d2c0ee955b41f59c945d3f17998",
"assets/assets/images/y4_6.png": "e2b4f919fbf38da58e2bfac6c0108ada",
"assets/assets/images/y6_4.png": "0765e3ff48d4f678fcfc15e5551a0df6",
"assets/assets/images/whyAllScribe_left.png": "8736a04541324db395ef253044cae375",
"assets/assets/images/home_con4.png": "0c86faf3ff360cf5154a4344a88908c1",
"assets/assets/images/y2_4.png": "e53226880a25320dcae8a70146b47ced",
"assets/assets/images/y16_2.png": "114319de6217dc9ebd4942ad473f874c",
"assets/assets/images/login_logo.png": "bc48638de79282c9b2e85cd89ee98359",
"assets/assets/images/y4_2.png": "48d167f71582754fc2668e69afee0f52",
"assets/assets/images/y14_1.png": "580f174b2478f99ca7a7cfd5b695f1db",
"assets/assets/images/y4_3.png": "1f9307fb5312fbbef2d0edcd82aff59d",
"assets/assets/images/y16_3.png": "67a0336950695d98a0ca513a3e26560f",
"assets/assets/images/del_con.png": "24dda98943ed6e88e5abbebfb8343ce9",
"assets/assets/images/y6_1.png": "1195bd50d21b3f004d31a188e8243a4f",
"assets/assets/images/apple_logo.png": "1623e1d5ffa58ee8037ec492f5318794",
"assets/assets/images/y2_5.png": "5c6d9364a918baaedb62603d06d28027",
"assets/assets/images/home_con5.png": "0807a0946a5f81b3c70ab8e51befe6d0",
"assets/assets/images/y2_7.png": "9dc6bd6433abe53d8627216958bc1dde",
"assets/assets/images/y6_3.png": "65aa0649ba606d5a3dbf4867fea69657",
"assets/assets/images/all_time.png": "54fee56ce42e92e1a13845cdccb85b06",
"assets/assets/images/y16_1.png": "cb76b755824fb03023e2b9f7dd5eb652",
"assets/assets/images/y4_1.png": "cbf76cbae29aad7d2b1953cc5444bdac",
"assets/assets/images/y14_3.png": "8a1b31e24b891ddd05155fbc8b840339",
"assets/assets/images/y14_2.png": "606a7a75e6a94160f72b7774c89c7fbc",
"assets/assets/images/y6_2.png": "3bac161f4e3787ed9783b094cac128dc",
"assets/assets/images/y2_6.png": "3516f1168e77675301463ddb2778ca5e",
"assets/assets/images/whyAllScribe_right_hover.png": "2e7390e088fd3582e5563e1291385c51",
"assets/assets/images/y5_7.png": "d0a8b721ae764bafc858eb38c54e8139",
"assets/assets/images/loginSlider3.png": "22a7270b75476f3353472fe9ae3350e2",
"assets/assets/images/y11_1.png": "631623cf9efd70797585715e418416fe",
"assets/assets/images/y3_1.png": "11486219fba088ab61d2dd5f7fd1460e",
"assets/assets/images/whyAllScribe_icon4.png": "ba11e3063e7eb1ea47da13c651c3d77d",
"assets/assets/images/loginSlider2.png": "9337b5991aff32804a4df02e7c8df93a",
"assets/assets/images/y5_6.png": "35df74648155995729ae4e21390ff684",
"assets/assets/images/y5_4.png": "c9253cb3bd4d16f8612b2c08dbd02191",
"assets/assets/images/heroSection_img.png": "27842741c11007cc89f730f893e781d4",
"assets/assets/images/foot_logo.png": "ab764aa16c9fa6c5068c1b79cb8c0958",
"assets/assets/images/y17_4.png": "7fa098641adac748ba554d658dfa2c7b",
"assets/assets/images/FeaturesGrid_icon4.png": "571bd5644853cb89f774a52747494292",
"assets/assets/images/y11_2.png": "b031f635e73e4c47316fa4f01bc454de",
"assets/assets/images/faq_up.png": "9f50c2b615e3509e7f67f68d771298d3",
"assets/assets/images/y3_2.png": "7dce6716ecf86d3c3e78749fc5b51dd2",
"assets/assets/images/y3_3.png": "036d3f4516507b1a4acdd83396b389fa",
"assets/assets/images/y13_1.png": "580f174b2478f99ca7a7cfd5b695f1db",
"assets/assets/images/whyAllScribe_left_hover.png": "e323c3122dc02f6a5dcda6a9389a0f47",
"assets/assets/images/y11_3.png": "0275f1f18ca5bf8c747186605aa5db92",
"assets/assets/images/loginSlider1.png": "9bbc9dd938ecbf7c1fa543e72f53f1ba",
"assets/assets/images/y5_5.png": "e20cb9c534c2599d55336abfdbeefd9e",
"assets/assets/images/y5_1.png": "e6f1fd88de6b1fd078f11b978ce80b2a",
"assets/assets/images/y17_1.png": "d4db51058f00a8fa59dd43104dce1c7b",
"assets/assets/images/FeaturesGrid_icon1.png": "42ced35e293172adcab558f375ed4d1c",
"assets/assets/images/whyAllScribe_icon3.png": "db252a178a7ccd52035ead13f678acbf",
"assets/assets/images/whyAllScribe_icon2.png": "4993f9f8c54ac344c689aa88265ee4c9",
"assets/assets/images/y7_2.png": "812367992edbfa0d9dd3ea72648111c3",
"assets/assets/images/y5_2.png": "a9c7584dd8519ffae098f15c5e1d454b",
"assets/assets/images/y17_2.png": "5c38a6186755569c784a67993720990a",
"assets/assets/images/FeaturesGrid_icon2.png": "ec08ef93d31d07a678b6f410d3b20742",
"assets/assets/images/all_user.png": "3242b25f7f05338147abd93cc6f88396",
"assets/assets/images/y3_4.png": "380931b2255b67f34a908443c5c87950",
"assets/assets/images/y3_5.png": "0de6d1290fbfe61a6e493ec1d8766350",
"assets/assets/images/FeaturesGrid_icon3.png": "20ff3120aa07dc4a234f4b7786486e94",
"assets/assets/images/whyAllScribe_icon1.png": "3e160b61e3e15cee67f10daf9f0fe640",
"assets/assets/images/y17_3.png": "20ff3120aa07dc4a234f4b7786486e94",
"assets/assets/images/y7_1.png": "aacf5b0e6638c7dee330c2ac7e30cf44",
"assets/assets/images/y5_3.png": "67b45f5ed333fac2ff4006ea75078cff",
"assets/assets/images/y9_3.png": "812367992edbfa0d9dd3ea72648111c3",
"assets/assets/images/pricing_icon5.png": "ec8429ccf125a9144168c7223a7cd828",
"assets/assets/images/y19_1.png": "15e0a8b55fd89f20132d8bf851499c96",
"assets/assets/images/home_more.png": "59a13bccabd08389a2d56c40f5004a3e",
"assets/assets/images/y24_1.png": "f7213120413bbf281fa8f855537cbd3e",
"assets/assets/images/y26_3.png": "6de047f26ec5de8c038d496f22fa6cea",
"assets/assets/images/y26_2.png": "f43c9368a0496a492b2aefbb3619f7c7",
"assets/assets/images/all_date.png": "2939fa96d71860cfed1c100f3aa48cbf",
"assets/assets/images/pricing_icon4.png": "7b4cba14b5fe43e72e16626fba11ed6f",
"assets/assets/images/y9_2.png": "e6f1fd88de6b1fd078f11b978ce80b2a",
"assets/assets/images/pricing_tab.png": "53f32fc8b433c2d46f550ee32b0b759b",
"assets/assets/images/TestimonialsSection_star.png": "078395234c4658ae56cb8f9cc54c2119",
"assets/assets/images/y19_2.png": "7d6dc05f1e073c563f18d6443f3c8546",
"assets/assets/images/home_bg_circle.png": "e712980ce84fe2cf6ed08aa8bcaa364a",
"assets/assets/images/y24_2.png": "6cfb0ea005eba00b0b5e2619b7520406",
"assets/assets/images/y26_1.png": "9702f411cdf3d092c8b34cacced50213",
"assets/assets/images/home_to_where.png": "bb31fcf61f11553014a09ed99c9f6277",
"assets/assets/images/y9_1.png": "f0d3f166b0313af2148fa11f7e7b6f49",
"assets/assets/images/home_check.png": "588d36467df81c32003254b1b14e4a22",
"assets/assets/images/home_upload_icon.png": "c0f2d9c4088e8bec82c39a18778e6e74",
"assets/assets/images/pricing_icon3.png": "57b46008549edb371e83a96320155df0",
"assets/assets/images/faq_down.png": "f84a4a58ea850b6d29727fdccc95f415",
"assets/assets/images/y26_5.png": "b78de13d0063857d75f7e3b9efc75e91",
"assets/assets/images/y26_4.png": "9557def000e8f85dd671519a904eb4e6",
"assets/assets/images/pricing_icon2.png": "bb0eb9dd8f3cdfbb48b16c979ab21258",
"assets/assets/images/y26_6.png": "ce9239f566fff17aad9f44afb67f12cb",
"assets/assets/images/pricing_icon1.png": "637ef4f2c5d8848a7caecfa17cb57d1c",
"assets/assets/images/y20_1.png": "ec08ef93d31d07a678b6f410d3b20742",
"assets/assets/images/y25_2.png": "04731ca1ae0fda0f2ed5c64281ca34b3",
"assets/assets/images/ScenariosSection_icon1.png": "6bdefbc3ab2305b979528effec1213ba",
"assets/assets/images/home_top1.png": "d37213f00869062297cbaef5a13aaaac",
"assets/assets/images/y18_2.png": "3e36228e7a62d91c893c43d704596741",
"assets/assets/images/move_to.png": "31bf2ff290e57db6e574c75d9bb4b837",
"assets/assets/images/y18_3.png": "cb76b755824fb03023e2b9f7dd5eb652",
"assets/assets/images/y25_3.png": "03a8e7899dd7fcc70a951a5cefbf55ec",
"assets/assets/images/y2_8.png": "13908bb2f9d38c4049e296c9fb6f2fa3",
"assets/assets/images/y25_1.png": "d35d83cf4a9ac7a051b3100f3b6d9d96",
"assets/assets/images/ScenariosSection_icon2.png": "06d4b4b9f06b4d19a7a123b6c5d27337",
"assets/assets/images/y18_1.png": "f26d555aeed8ebf1691fce0a68efe26c",
"assets/assets/images/home_top2.png": "ac20f05873339f20b8a0fcd33c8e8acb",
"assets/assets/images/web_logo.png": "c38010b839c3d7d0bf76540c415e86e0",
"assets/assets/images/all_summary.png": "1d080b3779cf421fc5650746559220c7",
"assets/assets/images/ScenariosSection_icon3.png": "b78de13d0063857d75f7e3b9efc75e91",
"assets/assets/images/main/add_file.png": "9ce683d1612b1740eb14816ac4ac35a9",
"assets/assets/images/main/folder_active.png": "8ef00e03cb78ecc84d04597a803d82ac",
"assets/assets/images/main/home_active.png": "a6bb123ec6e2ad0a9d99fa9a436fc59a",
"assets/assets/images/main/import.png": "8dcbcebdbb5eceebdf83e8c86cd6e180",
"assets/assets/images/main/all.png": "f56c735e38b891f5c31680e6744f1677",
"assets/assets/images/main/file.png": "d428b56961a376083eab479f15bbcd41",
"assets/assets/images/main/user_setting.png": "4ad1ae861e8c857510e9b1926dbedbd9",
"assets/assets/images/main/to_left.png": "98e0f07267ed56f71762786d071eac73",
"assets/assets/images/main/home.png": "0bdab8654f2abab5987e480bd01a27a7",
"assets/assets/images/main/user.png": "028065875335453a63759f1dca4f822b",
"assets/assets/images/main/scen.png": "920ee231296f2bb7f15288fc8d25d564",
"assets/assets/images/main/to_right.png": "76b8b2f1dd340b6f60602db711803cb9",
"assets/assets/images/main/folder.png": "fcc9deadfeccdf1f5968e462b49a84f9",
"assets/assets/images/main/apple.png": "6b7e82b87bbd83316adfc696acb421a9",
"assets/assets/images/main/all_active.png": "2a45ddbb20424d3f121b13d411b7b9de",
"assets/assets/images/main/delete.png": "50895361d246dcedc2c560b4938ba486",
"assets/assets/images/main/to_right_hover.png": "057b2e5331c9ffa4ef2a20c412f3799d",
"assets/assets/images/main/youtube.png": "1e327c19817758be7533526b1457e5d3",
"assets/assets/images/main/to_left_hover.png": "ab094d419633fa99c24f511897725bdf",
"assets/assets/images/main/edit.png": "4cb1fcaeeff8814f6040b0247906b5de",
"assets/assets/images/main/delete_active.png": "cf4f0cb1619ed2c14cb053cddd3e3402",
"assets/assets/images/main/mic.png": "0d6bdde460941c844090683e1c821024",
"assets/assets/images/y2_9.png": "aa071f4355c9a2bee231b1b53fec2226",
"assets/assets/images/y23_2.png": "d97c03045b954e501dc78b9a9f4a9972",
"assets/assets/images/y23_3.png": "06edaea1bc6981a6882b81fbbb272f5a",
"assets/assets/images/ScenariosSection_icon4.png": "f0bab388f33b2a0f255fe020f37f2f97",
"assets/assets/images/y23_1.png": "617561f1d796398607d352758f6648a8",
"assets/assets/images/y4_8.png": "1a92b1912571ba9c89b6e84c4a6e9a70",
"assets/assets/images/y4_9.png": "4a75a9194b680f066a77970a4099cef6",
"assets/assets/html/Cookie_Notice.html": "d2d4500d4fd07c78bf3e84cc578340c5",
"assets/assets/html/Privacy_Policy.html": "6865155decff9e1eddf8cc21aa206358",
"assets/assets/html/Terms_of_Use.html": "1ed4308ee55989af24f223cbacd6f6c0",
"assets/assets/fonts/NotoSansSC-Medium.ttf": "f75f943b53c03fee72afaa786a3d924c",
"assets/assets/fonts/SourceHanSerifCN-Medium.otf": "be7f5e9eee0786e10e0048e1d6dd2f42",
"assets/assets/fonts/OPPOSans-M.ttf": "49a7e129c45a061fec81091cb65947ed",
"assets/assets/fonts/Source-KeynoteartHans-Regular.otf": "3c772be65feb196235bf1938dc713a83",
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
