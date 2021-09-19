'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "39dc88dc2a66272140cd63c266499e0f",
"index.html": "2b7e0133c9924af437724ab1f251ced1",
"/": "2b7e0133c9924af437724ab1f251ced1",
"css/styles.css": "9e14e6d8d9a3e176d6691861cf8460ed",
"main.dart.js": "e888220c10cc14e70bd98db674c02244",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/favicon-16x16.png": "a682a043fed8b0659ed840d6c91410bf",
"icons/android-chrome-192x192.png": "97909d69b504f3ce01222d36016be62a",
"icons/apple-touch-icon.png": "fd686666cddd46e4ee50b0c837bd9210",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/android-chrome-512x512.png": "9dc75efa78c7dc5015f01e035c7c47fe",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/favicon-32x32.png": "d0a6645a0b3f243f84a9c68a16f4dd8c",
"manifest.json": "512be87b45d37606996963156b36f331",
"loadMainDart.js": "c657e312d76f2b74a38e3b8dd2928552",
".git/config": "92349298693df164b48480b45e3b3a38",
".git/objects/0d/d6d2952ef6d8d8961c0a9537ab4eb79ac514b1": "b02f890d2d7a2ab0af06a75e287b65fb",
".git/objects/59/9151b0e91ce966ec2080c9e6c5407c64574cca": "f5e26584994165473a1624f27f092352",
".git/objects/3e/2346adce02e0c3875c1a81aae3f7a858ae78ad": "880fd6dbe4900c7ba58952a33584c684",
".git/objects/3e/24a08ecac618f6e99f0c5bc7b15656556c4723": "dc92a07bf8b763ead2519b185b5c2b4f",
".git/objects/50/391629cb238633a2a560e62cc040a4bb029233": "93378f2b9a58e368b883bf6178de6b9f",
".git/objects/6f/0c07ec253c724752c9c1de0510beb890275b2b": "db7027f27fcc604df31b17d37bc163bc",
".git/objects/9e/873ea4362606506cadabb3b48187e601f5ec73": "bb8e48e6e9a5ed23563e698b1524ad48",
".git/objects/6a/7d5fe59cced20d34ae4cfcf12225ac61942aeb": "3347a041675bd47d8ba7a3b8db336708",
".git/objects/32/46ad559eeae0370195978eaed83f1053ee13fd": "a043dbc0a0bda96ce2127799ccc27506",
".git/objects/35/70dc8f5dc0b51c3a54163df2c5ee7aa6050377": "410f48e064ff8618b200a76bd9f5ac43",
".git/objects/35/c2bb575f13f9123d2c1527dca3922976e0beab": "edba29b54498ed63689851b3e1966729",
".git/objects/56/59b2d0c76177d9ff86d03a9118f6479cdf3530": "645134f97793ab76275d7319b1ae0095",
".git/objects/56/6ae487796ffbc06eb60881767f531df2776cfe": "4919f779e1891b0326c74fdad06d98ef",
".git/objects/93/ea7a596ee3cfdc59b32387b5ac84939d5bbf29": "0c78c397470de80a3d0d010de18d7d92",
".git/objects/34/8ebe8fa76f4f3f53e7be9731b66e823ad432ab": "4c531ff72e29c2b5d4ecdc445088f2e9",
".git/objects/b5/be70b2211c5d58233fe2247ba238c49cd9c09f": "4bce66e5c87f2d8c61c509eaeb9be602",
".git/objects/ad/2cd594975fb3f2c38e2b4c47c535f5a18f3740": "3d368208c7c6ccc54a611ae19df3d376",
".git/objects/da/b7f2144d9a6c34dd9fc3eab3fdb6ffc59a1954": "6dc130b2f410aa40a5071769e97959af",
".git/objects/b4/8c4e59b216c00b6a4497e3e6bb2f04e44f9227": "9adb071bdf0e125847f3b2f38c5d6890",
".git/objects/a2/82a95098ab2a9ff31064bdafd2c666d833b2fa": "b4ea2d3245d35e1eea7bb05e6ee8751c",
".git/objects/a5/add59d190e2726ae32f77d2ac86ac80c169d91": "f0e223737277b096af1b7b81a3514b0b",
".git/objects/bd/9074496127512f7a9b8493d767693c3675e2d9": "8cd27bfdbc37c63e06b0f0e63f635d14",
".git/objects/d1/6257495bab668e1eeef05e0518f9671f82e4fc": "a2323fabed96f32f15785a656160c4e0",
".git/objects/d1/6461c9207c10045be971c4878a4070da490ea3": "a5d9848d1a296b29b831d1ba0081d095",
".git/objects/d6/c1073115d66a73b027c429943788d05cb8ce44": "5fa4ff73890b19c2255e9fea15e8cdcc",
".git/objects/d6/6ea6d752c1eb5e971330f2ac63edf4774e20f3": "3a33ab4056caf1109b53056247ec9b95",
".git/objects/bc/7dbe18bb6f70d58522173db94ff63a7312320c": "e665470b8a5e461311d79e7adc57039e",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/e5/8d6abe0ea78444ace05f80b98eeb57009a2028": "a1921dcf90d74e0d2ae484d2f13e33bd",
".git/objects/e2/2782e94efe12e1e1cfd8e79a54a020f59d4512": "3882f444319e195753360e8017b87170",
".git/objects/e2/c66a49402e187660e8c4df14c10f6c2e5180f1": "0d450a81214f0a8668c3022a8e6e44a0",
".git/objects/e2/bda2c2b4f8d10e83defd40abddf9eadd53858d": "713f09621ac9339c722db2c3b64962cc",
".git/objects/e2/a62cb9027dba3b313e94d6187dac2783cbd31a": "1e6b046134e63a9a26683144dbeedb44",
".git/objects/f4/675f771f408f887161b22b090ac781ea2fb707": "c71d46915e08475373c97bd8cf6baef9",
".git/objects/eb/a3907b795649bc007d56724f2e80dca9a3f9f0": "1f796cb6a286f94762aa3ad6ea0bdd0b",
".git/objects/eb/cc037f74d1a519d49dd90b51f0ca6604ed6386": "868207a16d6557c3c9dcd15d3c742887",
".git/objects/c7/f958b6cb7163b2ee7136dc768181c9b984475e": "a60c7d8287945b41e9bce238616407e2",
".git/objects/ee/e58149d68952dcc78cabc0e422f1eea6698fbe": "2475c0566602ba35c0f6cfda2f522182",
".git/objects/fd/9fbeb2e393c499a011f033349377178815f86a": "6bc4257f888ce4005ae51a7968d1d50a",
".git/objects/f5/0344d9605df8d6c71feecb70c81937a57fa2f5": "0e44f0edd8914e6d33747551f649246b",
".git/objects/e3/8f90784a765df8c03929267d7dc6a7d9f2082b": "a2efea5f6fdf10748e99e99d70d92fd8",
".git/objects/cf/00569c4ed86e189ac6b8adf79f3020db9001ab": "eccd21650950117700a3b2927617314d",
".git/objects/e4/01f3319bce0df76eb7ce385532f0e67f8fd854": "305ee376979271320396a32995002ce0",
".git/objects/e4/129669421922dce235ad99f831831fd8ecfd38": "b6d2a46baef770b8721e37d0d3ac2db8",
".git/objects/e4/8e554be26486568c7389932f9f34b5cd967871": "f1f3e25f17c3ae0c4c5f45cb816f3aec",
".git/objects/ed/9256497241e7ac12d32fb772c44d8a2ec278b9": "33e12b56f926431edb4aa4f5d2949ba9",
".git/objects/c1/5eccfc1b9ee157d422817264e30e52de08f85f": "42a985be21ea02c96eec68a5247a3379",
".git/objects/c6/da01ab02de3ca9e50aafc5d4c6c865815f9257": "1dc2ddba5c9ef27b1cadcb14c3b0e09e",
".git/objects/c6/73751b7ed673873406ff269e95de204ab33223": "6c06b2e6c5c9c363ea47fc38980511ba",
".git/objects/ec/8b7d7571929aaffae2bc40e15be5c501a77e2e": "9e332d67ad9b71bb49965f08f346b287",
".git/objects/ec/fc9978aa320f6d3d50942001924d05ac81ecd6": "0fc3a02e7a45e5e949197bf39b4fec96",
".git/objects/20/5bb5db271c6d8de8399864c7bb9b917f638893": "c993b22f115d7f3ae6d5b7b212806539",
".git/objects/27/944004e972274cebe8c76c8b1c235328135839": "9f70d02ba89ac9ce6f588be271467976",
".git/objects/4b/ecc975574fb70341ab2e9e82fe64a36eff665f": "4b4ab882a2138f361a9d5e1887196342",
".git/objects/4b/01751ea396d70832f158ebfe0e3ef08324d791": "82f23578b03bcf0c49d57f160cee00a6",
".git/objects/11/993ae9761e104fc3bac62bc642a31eb0b6778e": "840caa45f0de7292d3897ea13219da42",
".git/objects/7d/39ada9815d284addc9490c809208505eb0b7d4": "fce9b06b1ce08df7e638dc69a30bd3c8",
".git/objects/7d/4e0e3dba52205d96d7b01c6d2675022ea7bef9": "ca1d77753f457633d8e1112302054087",
".git/objects/29/78427a2c04a9261d4e1425ff41ea02afdb083c": "6f7176577baa8539f6bcfc1177c18df9",
".git/objects/29/2d83945e2de646b6b58be266354e772e2599b5": "0a513715ea04a78eacd478ee393b48c7",
".git/objects/7c/e57ca22ee709d06813dde3dcef884f29ab545e": "528b2dd654f866b06601d2557c0ac8cc",
".git/objects/7c/e0d8949290ae271001af49de36c1498399eb41": "54a50f888955a4c5c4f7bce90e8106c9",
".git/objects/16/c0742c0c6870c568ad6e41f355a6a3792ffd94": "ad6da775be795c84a56efdf3ee55b569",
".git/objects/89/8ff6a5c89cca9adb55bad63ec1cec399027d8e": "41bb876a667b63994371c78437d6c705",
".git/objects/89/aae6b6afc9a15381aec165494e81e99f93499f": "9c7151550eef40498f44a528a908f173",
".git/objects/45/b2f7814534f10cb9cdca26b62b068fd628921c": "7fde9a73a26a4c9559d63220e70619f2",
".git/objects/87/714b07cb7c3e7d4532078da449b8c2a70f07bc": "17d6b12e3c1de6925ff522ecd37e3b32",
".git/objects/87/83faf4dfef52f3275eb9d4216d8927626d2d22": "f98d3646f93fe4bc08b931ee3b7837cb",
".git/objects/80/6f5dc47da14c85ce28efbf28a31b7ca775b0e5": "d4a6f9df382c905edabd77ece3eadd74",
".git/objects/74/b8bf0ee77b2aef92bd7bb2d25733adcec98646": "96927fb713fa19f95716791a7e5bacf0",
".git/objects/1a/ac62ac9ad0c9b140ad49801b2834cadad97ed0": "c1286fcab90a57b50eb427ce84a7e36b",
".git/objects/28/109685849a61672028ccbaf968b81ece873fe1": "e4f8d5a8ebf189858170962026cc1a2f",
".git/objects/28/49db71d8c341abcce2494ae50e9b7f7f3e65eb": "a595c6e242562ab1d92e7a9b1e6fbbe5",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/7e/157c92b80b78a655bec1c89ab787dae55d227c": "b5fd88618452d8228a9153407d8c0f65",
".git/objects/19/59860fbabd62b91f07df469585f7efcb40afdb": "0fbaec3f7a01255089913bbb0bef0d11",
".git/objects/19/57a8489778a33a797bd67543634b2cead04f72": "674e7b7b3633184b00d897613534a2da",
".git/objects/4c/5bd74abd8c8ace723d01edf804dacb15494fef": "dac3106ba514edbd3b859f6a10367b1a",
".git/objects/4c/6cbbf296cfabae3455160f2a486f82537a67af": "c4a3c469b2a74f0ac9130347861feb67",
".git/objects/26/49cb9052a2f39770652b9a3a0a8cc59ddf51da": "4eb40fe71b7e555c7444d3411f2e0552",
".git/objects/81/8c1fdc728366c580b68749767cab4de5acf35b": "4eb17147cdcc0fad5641ac02c593b775",
".git/objects/86/67f09698af61bec91c4f57a462f2edd5ef9c47": "6b642f7a2790b1bb523a41796fa16269",
".git/objects/44/1d3baab4f3bfc1ce251942e420988fac12a8f4": "ac3a2ba50af07d40313ad29d8023a3b1",
".git/objects/2a/404c6b1f48d0f2dacde1895d4cb58042b0e304": "f9a374425d88bf7f643000dd292086fc",
".git/objects/88/8d60a4a89ef5d15b836fa695db85bc852dc062": "09767351f582411bc901c2439e367aa5",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/9f/899a94aeb4ff450a49c6440bd6c87a16f799e3": "e26a922258eb95db4e47671151b7f5fb",
".git/objects/6b/8b6548e130775b4b921ec72f847c9486bca912": "0256257a574532a2d952e3186198006c",
".git/objects/07/5865f04ccaf26d5041b4f3708f8b97a6df7859": "a8410897b00b3f118097acf4f1afe288",
".git/objects/6e/26de76d46d7e4c28d19acb691cc8a4b41b4287": "9ce195e87d87f63da6937cdbbc944c14",
".git/objects/09/a4d0253fe44d1d59a6b1a17127a689ba1c211d": "231f94a067524a5768b637dcca3fe7f9",
".git/objects/09/ec332ee057b64035c55c8377721198ed2f6e72": "34722e0fa49ff4ba6eedf984e312a449",
".git/objects/09/76ebbaaa82ebd1837e118d8fc5185b9992ee2f": "5d2b6f4d7d81267c740777ce8de839f5",
".git/objects/5d/860f448044e0c937d691cbad17286bfac3ac4e": "c40c3c027988fd07f86e69ee0e52fa16",
".git/objects/31/b515a7b675e87414ee09e1fe64da63eb4ac4a8": "e2e1165f297ed2b55f6682b7b5418efe",
".git/objects/31/0beb8adc239aca6445935d194b5bbb58243c73": "e07af73954ed7fe3e6a48d2a3a9b3758",
".git/objects/96/f72765d0fab9c446831ead1c15f6f2af1e863f": "c730fd8f6eca990afc4a93d3c69f51f0",
".git/objects/3a/1184be35b1e163f0160a649f28c6c5c64ff62e": "f0d844072b9149aa62f20215dfbc1ee4",
".git/objects/53/fdebf2dbcb86234271074f347b8572d0108599": "8f8bc6e7d3ee2fb818d1d7468b681562",
".git/objects/5e/028caa86efaeb6ca1fbb4121a1f4d9443af775": "fe52ffa993c20e6f84c5d2618c1b5798",
".git/objects/6d/1ee2846d109f2944da24735f13b88372559835": "a8a81988be58bfe124a2465b52667deb",
".git/objects/6c/9942bc656781896928310618b71480a490b6e6": "16be6d396e1087f82f419aa726210c83",
".git/objects/39/a9222271f056348d152256b85c88f451f08efc": "cb2f23977023b561c884776da605147b",
".git/objects/52/7cd799d06d0bd046a1dd49baf990add88b87dc": "265cdd3d76c0b1d78a7acb0acbda3179",
".git/objects/55/24ded3ea4ead23050cb6e9918c890e618de72a": "8b94d1fd21fb603e7126d136d49a0f40",
".git/objects/0a/505b53e85734da61bbc696f30e4ce5bb44006f": "3909be3e748734ad557ac6c61eb3649e",
".git/objects/64/72adfb1a0ab93244376dec50b08dc0798fa295": "5112bd31b0d3383a3238124b09f850a1",
".git/objects/90/1b4983b22f01176612fc2ec0a64a688b6fee36": "94a2f5b30f55596ddf8f0cbd813079b9",
".git/objects/90/a931f330aca4390c4e196d9713dacd276c3745": "2b0c150c142a9dd8605697d6ec24cd19",
".git/objects/ba/9b1bbc2bf8bba095eeb7138eed2823bff0f1eb": "f45c61b1b70d6deab6fe75473a3b4af5",
".git/objects/a7/54e3352d2dc142af3193ee5dc5c2cf84631a57": "00a5e380af8fc0763e6853face3860ab",
".git/objects/b1/cc9e1688e079c2560d3a0ffdc9a8ab65f1c6dc": "9a97a1e5450bb7ab4e5ff432b204e435",
".git/objects/b1/d8697b822a6b77f75bc239976506c6532aefb5": "b67fbee3a1ef697e66311c1ac1c986ea",
".git/objects/b1/2251004efd86675ffe3627361f6a76ad858b11": "96cdfdd9cc895fca797484a01c524aae",
".git/objects/b1/99cf7bb7bf5d1e8a393fec61786375e4b254e9": "e6fdad3b4b65d5503b5d93d28e9c75f1",
".git/objects/b6/bced287d64a0ddaa888624a4c212f3606c61da": "5a35ed021faee1031facf4ade910cfb1",
".git/objects/a9/fd8e62f04c58d0e7258df545ce3378e285b014": "4a835cd3dcd951eb660e6fc262b8e6a4",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/db/f59ba20a522652c89dccd72efd3f999123bbaf": "4930e9eb5cc86732f5980f508f3cbd88",
".git/objects/a8/beffd3ad4fe54d6cabccf83a05477d6a986cd0": "6677888e4a051c7838b5b240c09f0981",
".git/objects/de/a233fe9e7213b1ef1168bac7569a2f8d5773c0": "36a1ebcbfec20b5498d8553409c2cda3",
".git/objects/a6/647fe2bf0365d9857e96b31642873a9f90aca9": "6eea8a3cf2a12b59cb23acb01c6d48b6",
".git/objects/a6/6abb43f568af37f949282e95fd029c66643e3d": "55b8a4509d64dda494dde625e2583602",
".git/objects/a6/7e75e02046107417230771eadfd917d76c1a3a": "4e605c55e8189af1f61ebfd433abd48b",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/ef/4a8d141073ca217045705c4c24f1a1e6a531f6": "9fcbaef81a3d82a7b6999a2de08322a8",
".git/objects/e6/e4b4375a1ff5af167e9e87f8398c12013bb009": "df91610679c3efb5272990dc5f8d9c0a",
".git/objects/f9/d92ee496dd3794a020c53f0fb2094cac5b78b9": "719e8abb3e89edfbffe0e24a206a8495",
".git/objects/c5/3d4e0b0339ccfd9ed3e424501c6c10827890f8": "1e3236f877f3b1eaa96bba9c42f8eae7",
".git/objects/c5/20bd626f14c24fbc491156876c690ad29b03c1": "edcea3105a79bca9efbe513b9ef80d6e",
".git/objects/f1/946520a52dc8a480c0e1ea05a423041988c473": "7ddc7fa961908087948d0abc2f478563",
".git/objects/f1/bbb80a219cd0b7872e4f38e409fdd72d67be77": "c3b4ba4f30f07ae1f188e27fcefde50f",
".git/objects/f1/b88e857f1573fd8ee835d9760cd8f7b3126fcc": "e3db80b24cd44b236d9798ec7ea50c73",
".git/objects/cb/69f785d39696623d70ec0d8cfd95db79a55ba7": "f218716f3aa0f4a18b99cb29c87085d4",
".git/objects/cb/55fce70ec02c4c88245cfb1ece9fb0627940d7": "f42db1c6c17873c4a9d36298c2eefcab",
".git/objects/f8/129beac7f88b764da408befa7521be1782b7b2": "94859025200e358b06997c801e60aa08",
".git/objects/e0/3901507c6f28a01eef170746573999b0d12b72": "3b30fd29f797e31ab76d58062a7df9d5",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/2d/e3e045678e93ec1e2e72549c004ac08f488806": "e390dc5e91b54badcd5171b6200f3e59",
".git/objects/2d/cb736293181784cb494b743b29161ab47a77a6": "96df9318ca6b00997bbdef91922d486f",
".git/objects/2d/0dc70e539db9e8a1a9edb557fffad0bca260dc": "6535069b036ff5697808305e04bd36b8",
".git/objects/83/2390b945b38a021c711fc2c4eaf7b91bd4dabe": "86318f5c4d897724a11ee18ffc1f018f",
".git/objects/70/d9769c827d6de12c0ea63d5491da5ca83752c2": "fa6b0eb4603cb4d66396322f6c17b766",
".git/objects/1e/1a840d27a0422222d76cd1aa307692ce31998d": "a1db2a779bbc0d94432565b88077b2d4",
".git/objects/1e/713e1f0d986f210b91054e01b107cf466a38ee": "124b175484dddf3959e7e08659720e1e",
".git/objects/84/44b470fa25da9d07a5a943faa7a7f60a7bf561": "130affd9a9b72d2acb6bae9d73424a03",
".git/objects/84/c61397947d6a5abe940bcca00aa0dffb3f5854": "b353786112d000c52934fb3d5502605a",
".git/objects/4a/24767491540066a981cf71dba5246fc4f5f23c": "afe96c70e0bb7c1b7200daa853fc5504",
".git/objects/4f/13865b9ddf6066f535457e7ef6053d78c49baf": "0cafea62868989f84ae1532a86ea3470",
".git/objects/85/2d775eb60574b5a1f0e053124161c854b2d732": "2c60331dee51abe413f0968e338bb92e",
".git/objects/85/fb9e11303052448482988f1a2a71a439e7cb9c": "08a6a5ebf5477ff612010a3a2e9dbd97",
".git/objects/71/2151b3d680af2bfb3527461d27a3f6ec72c190": "fc56f14c91057d551ca0337d7ba7f53f",
".git/objects/1c/b508247890e31cc748ccf3b4f0d5fd3a7ad845": "66446efc0ded86a1fff1d322db098d52",
".git/objects/49/c2cfb6f9fc047def30304c37ea1eac36f40a05": "e59ea25c399c8aa1f0d0cd8fa35e738a",
".git/objects/78/6f4f1451e52cc0ac5d417483b09c596330f8ef": "da394d2c2e27427f64f7d06700441172",
".git/objects/8e/7f1f2afcf644b91c8242f23d4852668e9f27be": "cf47594d84b8272913db36a768492a02",
".git/objects/22/ecb06e8cfe0896639f0fd3d85788fc28bd0263": "5eb2fbfca7d913a94f8e5679f2d56925",
".git/objects/25/c10148581703535ea99011f66aa07570de94c3": "99171f64d32d4a86b9760a3c46789686",
".git/HEAD": "431f7728f8e1f9bcfc0c2c80081d3e53",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "f223391bf53d0fe18e7818642754369c",
".git/logs/refs/heads/beta": "971586d6297966e055211dc1ae8c70cb",
".git/logs/refs/heads/master": "34d912681b50160263b6c78921c12553",
".git/logs/refs/remotes/origin/beta": "1d35aed9714331fbe184e047a17966dc",
".git/logs/refs/remotes/origin/master": "24923e903dd7282c292abe781dd1167d",
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
".git/refs/heads/beta": "f2e981b3150839c313de1ce88c52860e",
".git/refs/heads/master": "77c448d58a2a07a21fdb357dcb935b1e",
".git/refs/remotes/origin/beta": "f2e981b3150839c313de1ce88c52860e",
".git/refs/remotes/origin/master": "77c448d58a2a07a21fdb357dcb935b1e",
".git/index": "9d8069faf0a1c9ab4d408d0484f8e8ed",
".git/COMMIT_EDITMSG": "30906c042e46bfa61ab1e704caefeec4",
"assets/AssetManifest.json": "220c6949761cd6d237a637171dc9d965",
"assets/NOTICES": "abfcfe8cdff1198b339f8bbd2abb89f2",
"assets/FontManifest.json": "2332d5be7d00486f839418ed1441a45b",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/assets/images/susu-murni-indie.png": "77caf9a9bba74a667fee56343bdf365c",
"assets/assets/images/mie-saus-ahoy.png": "d19ff4929c192a930eedfea77d7b2dba",
"assets/assets/images/nasi-telur-babak-belur.png": "ea09f4e7bfd3090f8783896ac2dd0be0",
"assets/assets/images/daruma-mentai.png": "fbf6d593b17f61bbcf0d191dc016bdd5",
"assets/assets/images/PoplarAppIcon.png": "cfcf6d3bc0a17e1424acfbf2136bd5dc",
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
