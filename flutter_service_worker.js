'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "a39048dbc6f4f7911f575ea363ced944",
".git/config": "fd6680ee214d9fe4e3b6015fea5bcedb",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "d41d8cd98f00b204e9800998ecf8427e",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "2400e8f63a4ebad6f021f2bfe0952c55",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "43d2f4180770075ce51afec0744eaeaa",
".git/logs/refs/heads/main": "d650e926a673264174a445097c08f18e",
".git/logs/refs/remotes/origin/main": "9b9548d9941d5a0f70782eb3e3ce9a9a",
".git/objects/00/7f36917140c920766d06743f0143fcd7b88e2a": "f4ee0df92fb03e2b6adb493c7986c082",
".git/objects/04/1e20d8cdb8f394592a2d01d2da4b5b9c54d85d": "13c81625fae280d78e6f487aea32e6b8",
".git/objects/05/6cda79e1c9195cafe8a2700c98a7c154c170a9": "8747ae6f35ee3e0cfc90d3a5b89cf2bb",
".git/objects/07/a90e3eb88a2141180bb4c4ff6965539ec1348b": "e6952b7266999fc5ad070874fc990db2",
".git/objects/08/32d0db2def1613c1c45aa4fe9156a1c6b7d589": "e05df183e5eeaddf39672a2516f9c41d",
".git/objects/09/035ab88beeb2c2bb62793f7ae151068b125e99": "bd86e74b77237f69be76ff875159ce7f",
".git/objects/0d/0b7a794c3498b44ad9836534fec6c19f42af75": "4b76398ae315ea8cd0b05f585b92dcd3",
".git/objects/0d/892b1aa4eab11b8085f18a56c9421fb1355db9": "9c419ab76f095b5b719c035a2b0589aa",
".git/objects/0f/1b382a896bff4bad29a89f3b0e4ece71b5b715": "13828ac9f737c5480c64ccf3a80b9dcf",
".git/objects/12/ed4c2216beb9c428c0a43ad89ebbf9412e9664": "1b335d3f2c97afb613c2dd4835b79ceb",
".git/objects/13/ba94b0664b65e9b0d436445c1f67d691b211fc": "e35c51e72fabd292b9e3397b8b79a02e",
".git/objects/15/c624ea5a007401e249aa72c540eeb32b757aa5": "f5b2a4b6ac2ecb7a4eca3f97ef888039",
".git/objects/16/1608d8d29be864618adeebcd38544eda9d5a26": "a643f73fd251aae1b93e7517c87327e1",
".git/objects/18/374fc60d86ac04fd878a1ada6ef67ebd50a64f": "bbac0ed16901815ceeb72e449fd84a1c",
".git/objects/19/451b5d65b55522e962e612fa4ab610d19754c3": "8bb717d025ca6245c9cd2cec9a287393",
".git/objects/1b/be6cc81be82e6dc0439b702d74182bad329865": "c7c04a3a97c7af05e5ad40181dc22b5d",
".git/objects/1c/45e717db399c41a601e1ffcf364d9208d694f0": "756e97f180997152ea93ddd3d5cba9ae",
".git/objects/1d/e42b10e0c39c818c989de897f09b0568e92160": "1055ef145e7672cee674b984555f5277",
".git/objects/20/96ecae4a047db278652bdb1af7f69b1647c94f": "7fdee5b5ac151fb65c272e8e962ef674",
".git/objects/23/3f6cfe1ae8ebde81a38821f61d4b52c2f10bb4": "0c463864dd2213d0e7079c15c7f26516",
".git/objects/24/a09abbfbd0e1164aa094fcd76993dcc812f3f1": "1dec34d69097471dd657f23a864debde",
".git/objects/25/423b4723e8ab341c9c7e58b35063c3199ec6ff": "a8213e7aec8aee204014e34352e6062c",
".git/objects/25/5a31182027f7ada10d75a2ba02f7010cc6d4b8": "e50185a7ce3c52b491ff8f3da37eec35",
".git/objects/2c/f9e27185e15695a105357a0465987baedd18f4": "5919863614c58d488ba67427c0aba76a",
".git/objects/2d/fb1adb0364beb0f59f96153c0f93492a646f56": "2b52a71618911a7a5a5cfbe17ecd35aa",
".git/objects/30/1c38b5511342a6983cfaed359a205eb2f62538": "1ee65ebc3ca1b5bcfe60cdc409f47a5c",
".git/objects/30/f090b17a8cf7a7494229f49adf72f77759b707": "614df161d80c5811bac9fcce77a889eb",
".git/objects/32/aa3cae58a7432051fc105cc91fca4d95d1d011": "4f8558ca16d04c4f28116d3292ae263d",
".git/objects/38/7a2346b0120e8336f26a839b4822e51b61e08f": "a1178d7f344c6d674a38f8057259f855",
".git/objects/38/ba3fb9f8e335659c66d90b9f3656f41e5b9de7": "bbd932a6ce4f92fded30b372bd05e75a",
".git/objects/39/555b3dd91c4c98ca64eece114996ed1be7a3e5": "3c1a83fa5e44f49f5d572f8fcf2820a1",
".git/objects/3a/7525f2996a1138fe67d2a0904bf5d214bfd22c": "ab6f2f6356cba61e57d5c10c2e18739d",
".git/objects/3a/bf18c41c58c933308c244a875bf383856e103e": "30790d31a35e3622fd7b3849c9bf1894",
".git/objects/3b/f762ab16a0f29c5530285b369ed3c65f788bfc": "cded4ded5e3b533a1a178488400bf148",
".git/objects/3e/1d1b02392f0626254b0aed5adb3eaf3a4c928b": "37f95985f6e8fef398c13470063ee430",
".git/objects/3f/0fecd50277531828360abf61b6e98525a42e8c": "75ed564858c107a1b9cca4f2100e6679",
".git/objects/3f/681138351925239decc2e7a330f114e2a3b9a9": "1d226701e9e6806b1e7103d2453e6904",
".git/objects/40/0d5b186c9951e294699e64671b9dde52c6f6a0": "f6bd3c7f9b239e8898bace6f9a7446b9",
".git/objects/44/a8b8e41b111fcf913a963e318b98e7f6976886": "5014fdb68f6b941b7c134a717a3a2bc6",
".git/objects/45/6a1d9f2aa14ca5529af871adae3d5eefc227d1": "b6a7f5cbf495dd2b432f4a63bdf991f4",
".git/objects/4b/fe94c13b57f0b9fa5cc5b529fb913626c5e4b0": "248dcb0aba8603b5a99ea90609f4ba3b",
".git/objects/4d/c1ba10212c815213caed17606ad0a9fe19526a": "4a0111a1ae888fbaac58e5a31c9863a5",
".git/objects/58/4c3f4785daabdd67fdf4be5a3c0a943e1b8ef1": "a22313c6502606e9d50474057c6d4cc6",
".git/objects/58/fcf2b8c7865cca266af6e45bf4866096d4bd3f": "9b8ad3054194b47170bf1227e13b2b57",
".git/objects/5d/5e6f90d3607785d11bd3d765eebffb66382e86": "7e53b4d5b135f37b762a4043932606cd",
".git/objects/5d/935649930a1291479c86af8fa98f640ae284b8": "6ead8301541d020e2982d53517c4e345",
".git/objects/65/41237602b9edea2c64ef90b6781140dcdb0f68": "09d01ab74029a341554bed7eb29002b6",
".git/objects/66/876380382f6f1c496369f87164f3c8966b8c5c": "bf6349280884a40c0e8f6968131d93ec",
".git/objects/67/59bad56f2d87cfcb1db7f7ae6d4753309d15b2": "a79e474ea63e5da961067e7da725caa9",
".git/objects/67/5cecdd9ddc37cf571cc6be969ade12a69bf686": "8af63fe0c58ee06ea578df54f7662556",
".git/objects/6a/60ed2469bd90f9a48ba7c97a3f94d4337e5279": "8ebceb227039a48a5daa09b254cf5e49",
".git/objects/6b/e909fbf40b23748412f0ea89bf0fae827ed976": "5f118419157d9534688915220cc803f7",
".git/objects/6d/98e282fd54dc4aa95d35749a9b6df3273b9173": "c6de4c9819118047f5d244ad95ed619a",
".git/objects/6e/899d777a03105d508b2b04f9e71d614f6bc29e": "c79c4df14a2f5b522deac29150f36791",
".git/objects/6f/0147c23a3d97137f54ee509153e47d26319e34": "48051399cc55ba4a5f815dfc5ab84b0d",
".git/objects/71/5b5a6949a2b4962611355bf675c4cffdc4e45a": "b5aadf5249d53f86253369813573fb08",
".git/objects/74/0a441edfa93a49ccfa2d47d4f2d92034337e1e": "346be2223b5b705aac6e9ad98722dc73",
".git/objects/7e/26d03480f0058474062d9d14967f18114f341f": "40112fd0658c84133797c09aa0e5d1ff",
".git/objects/7f/7ffbab88c6d0e08635dd9daa2313818eafde08": "7b168fd5572d90f27a4a587b5c1e0629",
".git/objects/7f/91ad70ec732998627b2a16b180ebfead19443f": "2c8ca168d64a327ea389c2d730254cd1",
".git/objects/81/810dc0ee5e53f83cf908ec22acfe9d8926a9c1": "fda49d38b91aff3ff881ac90668d762e",
".git/objects/83/11d5c640ac0ecc2c5df68a7cdc7b2aa18e747c": "094a5d81f8da5bae48d36bf4a1bb1066",
".git/objects/84/0516208d35dcb4298847ab835e2ef84ada92fa": "36a4a870d8d9c1c623d8e1be329049da",
".git/objects/86/6ce48461fde92feba76146a7747613ee8b79c1": "dfe3db82c1046ef5cadfc59f2900911b",
".git/objects/88/660ddaeaa997e74f40e3d61ac7a25f4e1b200b": "0600d825a647e1c68d3d77a1db518f35",
".git/objects/88/7b3be9ef6b63797acee5848261b74b8a6aef6d": "95b777b50113ad53c58377559b749658",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/89/6dcde5279cf770dae8700c24aa4884633f0b97": "50428d16c1a8088c4ab1fece787276cc",
".git/objects/8c/c5f8e4906d0e343a631d3ee4c02918f14e775d": "929a93266ad5b7b1bf94b11a51f256f1",
".git/objects/8d/d2692829e7e23f26f900b79d7deff465c2860e": "1266dc61bf91306c60d46469ab503abf",
".git/objects/90/bcfcf0a77ab618a826db0fd8b0942963b653af": "fc109675cdf1233dd6599a4c3c0a7a69",
".git/objects/97/a9b18a12e02c91787d97b91a42b68d6c9d6f4b": "ca9f2bbc14f2d1bff200b0300561ed03",
".git/objects/98/57c9b3b0448c92818efc5fda0f206b21914168": "ecbde07c564dabbec0f249821051b8af",
".git/objects/a0/1c6eb73426f3945e3e3c2626aad220ef79db22": "a98cabb12d58bf877de0cef83cacff90",
".git/objects/a1/6ba86d7cc39023cef1c1482f264791bdc7f75f": "f7c2dd7a72b6de525d917087cc5ba6dc",
".git/objects/a3/27ad30e18bdb4b61acc60181111c797a9be777": "39296c7619c933cdf58ec9e4c5b4591e",
".git/objects/a3/6e2b47064a291a26a5adc8f9db0c796c55d1db": "1870b64ff496a447b83448850bd9a5df",
".git/objects/b1/5ad935a6a00c2433c7fadad53602c1d0324365": "8f96f41fe1f2721c9e97d75caa004410",
".git/objects/b5/4bc18f03c6fac17e40af4c2327fb720a255290": "073c7a069bb570650a612f0625f47113",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/c0/6e118b7709478232c1ed131af91223c8d86024": "6c529b4c384daef9a8312d7f744ed035",
".git/objects/c2/182ae61d9831fccf025ece8591d04c58c2035a": "9b1ceefb4ea68419c79f50cd2b890816",
".git/objects/c3/a899547df7be9a853d3cb202ce875472bb34b3": "5e7554183610445ec68bec24f6794b20",
".git/objects/c4/c1e6bb1d06cc5cd88a1a2036d525b965a98208": "7d86b9d540eaac7ec41adebf7cc30d6a",
".git/objects/c8/07709cdd9f80f99d7c4d3dcad0309e0bfb8bbf": "54d5c07464c6257256d85309b00bbdc0",
".git/objects/c9/e99136a65e019cb798045d79a3ce298ff16b61": "6846ca79c11802b77e5a79ab33c3f665",
".git/objects/cb/82681a157094f8b86097d85890d181ac05109b": "1bcb53b9714323f0e439e4438aa2ded2",
".git/objects/cd/287084eebecc17d4f8f0b52a82eeded738ea6b": "ac41d8c5c1c1feecef9cb1a5ef87af25",
".git/objects/ce/a736148db423f6144245651c8038f96a0ac3f1": "01f5d6b1ed9e97ab4d14445178ea69ea",
".git/objects/d0/23371979cf1e985205df19078051c10de0a82d": "700b71074bad7afee32068791dec7442",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d5/bb50b3c3bc534b51ba035a5e8495ba7af5025b": "81d30e6f235d2cd1960b1a0d917b3043",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d8/5e52212ce02cdccc5536df5232dd5aea5c8c19": "d3ccf01834592d59e314f991fd146d5a",
".git/objects/da/de4272118a8fef5783367c3010afd91499aa4a": "58aa66d612bd8115845d8c6a4789be5e",
".git/objects/da/fd65422747502c19b5c74b4230282644d2169c": "d8a62caf99a372ff6c7692e143787ce3",
".git/objects/de/22d06c6534d0d9a9b083f5d5822a0358000aec": "96476f36cafb96214035575d55390f95",
".git/objects/e0/4704b900fea0bb4854e313fbdccb77b4229277": "e8a9ca2592134d2d7178d112e886c417",
".git/objects/e4/08a2ad189e348e44a91de8cc197da5ebacf24a": "aa94ab3424ce6f0614d1cafd8899552a",
".git/objects/e4/73d970b4e085982e2132342349e1ab65f96532": "207253faa0be6ac46e20e7768418b6be",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f4/3471c376cf6fcd19c8e871aed30116f1b169bf": "db5ae7a66f69cd4fabefc50cea898917",
".git/objects/fb/836251f1d55f49cbd64a25df121ecf21fe53fd": "dc504b635140570b443280472684710c",
".git/refs/heads/main": "5d06f7247f44640883e2606b18c19ab5",
".git/refs/remotes/origin/main": "5d06f7247f44640883e2606b18c19ab5",
"assets/AssetManifest.bin": "ef686ad44a40291a53720355a4407937",
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
"flutter_bootstrap.js": "8fd147742bbc796608ce0d8fca2bfa70",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "4a6629a075d4428c6f970b9bb72e101f",
"/": "4a6629a075d4428c6f970b9bb72e101f",
"main.dart.js": "f114429c1a3355b2617c25d8e894f8d9",
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
