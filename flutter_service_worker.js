'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "e6dc07484e450530ca3bfa0164a7a735",
".git/config": "4fd133ef978f2b7e2c3debc0875ac7d2",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "7bd1d44e126f4762740092c2cab5230d",
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
".git/index": "8e6182ca4cdf509136db0be35d19ef35",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "5263f1b8db43c9237c3dabf0c25743a7",
".git/logs/refs/heads/main": "347e89f3421f3988366bfb737b8f492b",
".git/logs/refs/remotes/origin/main": "5b4000ba58ebe964d2d5f0c566fa5361",
".git/objects/00/3fd615729002c0dc8c2cd389a9a774c9d82c62": "7c06005f94b6e6169172784ee2138295",
".git/objects/00/7f36917140c920766d06743f0143fcd7b88e2a": "f4ee0df92fb03e2b6adb493c7986c082",
".git/objects/02/874992e91ebd6ef6acd9e64d266c1ca4c2a21b": "0e1dac0f528758f4cb137fdbc35833ed",
".git/objects/03/e284f7f3acdcaa4ba436ee3b36946f13e3f15b": "1b983676a9cd4b2a94d0aa095d64f2a5",
".git/objects/04/1e20d8cdb8f394592a2d01d2da4b5b9c54d85d": "13c81625fae280d78e6f487aea32e6b8",
".git/objects/04/7604960beac3069b269d95bd62ba4b686985f0": "97969078e12d8c92968c8ac4e47e31b9",
".git/objects/04/89d43adfc055eca3765b48393d65aa92c0ae50": "fcc6cf05151ac46cabc144e8dc618339",
".git/objects/04/a88f588eaeb113cbdeaddc0b2b919dcda524da": "bef97f7d98361cacfa61ec19efb91992",
".git/objects/05/6cda79e1c9195cafe8a2700c98a7c154c170a9": "8747ae6f35ee3e0cfc90d3a5b89cf2bb",
".git/objects/05/a9058f513cce5faf1704e06e3c150688b0a01f": "e8d02f60cf87abd4c1de4b153dd696dc",
".git/objects/06/71388ae15ce44c42c99c5e7385151f8767b352": "bccca04ab43c6b8ca7219236c9310abf",
".git/objects/06/e136a7557e8433d40f7ce389e090c3e5288409": "be4fff758a051f55f525d0bc203aace0",
".git/objects/07/a90e3eb88a2141180bb4c4ff6965539ec1348b": "e6952b7266999fc5ad070874fc990db2",
".git/objects/08/32d0db2def1613c1c45aa4fe9156a1c6b7d589": "e05df183e5eeaddf39672a2516f9c41d",
".git/objects/08/d85d95612b4da27c502b56144b0c0a2b061b14": "a27438baad23a55a603d2316e5dd72a5",
".git/objects/08/d91153900d652f00ffc7a3c16723d79c139e5c": "22c933a46b90c93d7cbfbe2a616697d0",
".git/objects/09/035ab88beeb2c2bb62793f7ae151068b125e99": "bd86e74b77237f69be76ff875159ce7f",
".git/objects/09/f7ef29e02895cc64b368df93730248d06ad032": "47ead659edfc80311f14de727ba92035",
".git/objects/0a/ff2348e356bbf009f0b5c5114380bc9d7be1c6": "0d07e8b8fbd0c9982d0ec5ad4adf41ef",
".git/objects/0b/5671728903419e4a9251cf226047d146b276b4": "a44e2c5648d3cbb0fe0b5b3c92d20b4c",
".git/objects/0d/0b7a794c3498b44ad9836534fec6c19f42af75": "4b76398ae315ea8cd0b05f585b92dcd3",
".git/objects/0d/892b1aa4eab11b8085f18a56c9421fb1355db9": "9c419ab76f095b5b719c035a2b0589aa",
".git/objects/0d/c239f6f8ee7369792eb0f351c4331b5e198f10": "ae081196caf8591a56a067900171cdcb",
".git/objects/0f/1b382a896bff4bad29a89f3b0e4ece71b5b715": "13828ac9f737c5480c64ccf3a80b9dcf",
".git/objects/10/935523e7eebdb34be85c699a47968d108a6059": "f67a47a6391e740e679d476367fd9a1a",
".git/objects/10/cadfdfd22c987b8a010864b2e6aff848c168d3": "69f4e6273cf30ed5c4b02df61e8f6c16",
".git/objects/12/ed4c2216beb9c428c0a43ad89ebbf9412e9664": "1b335d3f2c97afb613c2dd4835b79ceb",
".git/objects/13/ba94b0664b65e9b0d436445c1f67d691b211fc": "e35c51e72fabd292b9e3397b8b79a02e",
".git/objects/15/c624ea5a007401e249aa72c540eeb32b757aa5": "f5b2a4b6ac2ecb7a4eca3f97ef888039",
".git/objects/15/e6b67fce4293502aeb40af10d035d2a410c871": "79517993036921ce97130c959c71852f",
".git/objects/16/1608d8d29be864618adeebcd38544eda9d5a26": "a643f73fd251aae1b93e7517c87327e1",
".git/objects/16/f124cd89a66946cfa5c8854a072349678122a2": "9b4f9f8af6435538c4e279477d3097f4",
".git/objects/18/374fc60d86ac04fd878a1ada6ef67ebd50a64f": "bbac0ed16901815ceeb72e449fd84a1c",
".git/objects/19/451b5d65b55522e962e612fa4ab610d19754c3": "8bb717d025ca6245c9cd2cec9a287393",
".git/objects/1b/be6cc81be82e6dc0439b702d74182bad329865": "c7c04a3a97c7af05e5ad40181dc22b5d",
".git/objects/1c/45e717db399c41a601e1ffcf364d9208d694f0": "756e97f180997152ea93ddd3d5cba9ae",
".git/objects/1d/5807ff1ab797405670fce2dac10143cff4371d": "42108c924c78139fa8a24b1f54ef5ecc",
".git/objects/1d/e42b10e0c39c818c989de897f09b0568e92160": "1055ef145e7672cee674b984555f5277",
".git/objects/1e/02f59bb3b789a4646e77c78af44b75311a0f4e": "262a4f86ed6676b88efc37f0fa88b354",
".git/objects/20/344b3c8f29385ec13e31c87a6885e8d99c1611": "f9d623962c7b9fd78451c71a427d2d86",
".git/objects/20/96ecae4a047db278652bdb1af7f69b1647c94f": "7fdee5b5ac151fb65c272e8e962ef674",
".git/objects/22/d0c3df548a9f58f3ce7e42c922e36e70f59a8d": "0570e0d48638e055943872ebb3eb5421",
".git/objects/23/3f6cfe1ae8ebde81a38821f61d4b52c2f10bb4": "0c463864dd2213d0e7079c15c7f26516",
".git/objects/23/c68972a539b5ce436487ba08b6f051ce8008db": "e1abe4fe0558e75a455b5cb7a3f465ae",
".git/objects/24/a09abbfbd0e1164aa094fcd76993dcc812f3f1": "1dec34d69097471dd657f23a864debde",
".git/objects/25/423b4723e8ab341c9c7e58b35063c3199ec6ff": "a8213e7aec8aee204014e34352e6062c",
".git/objects/25/5a31182027f7ada10d75a2ba02f7010cc6d4b8": "e50185a7ce3c52b491ff8f3da37eec35",
".git/objects/27/3814607db03f94e8957d6661bc476aebb9db85": "b26b2d5b245f596fb1e9daaf17c3082d",
".git/objects/27/a297abdda86a3cbc2d04f0036af1e62ae008c7": "51d74211c02d96c368704b99da4022d5",
".git/objects/2c/f9e27185e15695a105357a0465987baedd18f4": "5919863614c58d488ba67427c0aba76a",
".git/objects/2d/fb1adb0364beb0f59f96153c0f93492a646f56": "2b52a71618911a7a5a5cfbe17ecd35aa",
".git/objects/30/1c38b5511342a6983cfaed359a205eb2f62538": "1ee65ebc3ca1b5bcfe60cdc409f47a5c",
".git/objects/30/f090b17a8cf7a7494229f49adf72f77759b707": "614df161d80c5811bac9fcce77a889eb",
".git/objects/32/aa3cae58a7432051fc105cc91fca4d95d1d011": "4f8558ca16d04c4f28116d3292ae263d",
".git/objects/38/7a2346b0120e8336f26a839b4822e51b61e08f": "a1178d7f344c6d674a38f8057259f855",
".git/objects/38/ba3fb9f8e335659c66d90b9f3656f41e5b9de7": "bbd932a6ce4f92fded30b372bd05e75a",
".git/objects/39/452a5718b36b53e269243604a235e06ea913c0": "ab8ef3710c71f4d8a4af5bdd31aa1c74",
".git/objects/39/555b3dd91c4c98ca64eece114996ed1be7a3e5": "3c1a83fa5e44f49f5d572f8fcf2820a1",
".git/objects/3a/7525f2996a1138fe67d2a0904bf5d214bfd22c": "ab6f2f6356cba61e57d5c10c2e18739d",
".git/objects/3a/a45cfbb41dd3dc4988b0552b839a962ff23df6": "2f1351a47ef8d08cba35fd9fe563725c",
".git/objects/3a/bf18c41c58c933308c244a875bf383856e103e": "30790d31a35e3622fd7b3849c9bf1894",
".git/objects/3b/6a3258d1c22f00e434e0f41cfdbd623761c093": "9f40c2fda5ed72431e9a2010c47ce934",
".git/objects/3b/f762ab16a0f29c5530285b369ed3c65f788bfc": "cded4ded5e3b533a1a178488400bf148",
".git/objects/3d/d39ef093202ea8aa032b9d7652df01c26a2468": "2c330faf9880b51e66e7103814bd201d",
".git/objects/3e/1d1b02392f0626254b0aed5adb3eaf3a4c928b": "37f95985f6e8fef398c13470063ee430",
".git/objects/3f/0fecd50277531828360abf61b6e98525a42e8c": "75ed564858c107a1b9cca4f2100e6679",
".git/objects/3f/681138351925239decc2e7a330f114e2a3b9a9": "1d226701e9e6806b1e7103d2453e6904",
".git/objects/40/0d5b186c9951e294699e64671b9dde52c6f6a0": "f6bd3c7f9b239e8898bace6f9a7446b9",
".git/objects/44/362155d9b0c2404fb4c088b5c4400a2fc03efe": "05b755cdfa3b263b1d3d77bd246c013c",
".git/objects/44/a8b8e41b111fcf913a963e318b98e7f6976886": "5014fdb68f6b941b7c134a717a3a2bc6",
".git/objects/45/6a1d9f2aa14ca5529af871adae3d5eefc227d1": "b6a7f5cbf495dd2b432f4a63bdf991f4",
".git/objects/45/75bd6e97d653e3c01498db97790fc8c2c25071": "bf2cb8eba08a9c201c99844de110b1e3",
".git/objects/49/e093f44fdbcad094fcff2e42aab4fe7bf28d79": "b47eead6c4bffd6b2a926d5ac97d67da",
".git/objects/4b/fe94c13b57f0b9fa5cc5b529fb913626c5e4b0": "248dcb0aba8603b5a99ea90609f4ba3b",
".git/objects/4c/d1cf35dab20ad05f14bcae4cdc960dbc5c616d": "2cf77bc29a6f54cf7e6664ea024b3633",
".git/objects/4c/f228a48a96ddeaf88fa1ab392968f59cb1c4df": "d79c33bc5e78df12ed7dcd300c9fa9ae",
".git/objects/4d/c1ba10212c815213caed17606ad0a9fe19526a": "4a0111a1ae888fbaac58e5a31c9863a5",
".git/objects/4e/eabcb9624217910849904d659f036a481b0d1b": "4303f1fbf77753ca6ef313c9476c68ac",
".git/objects/50/4cc2270d269049df82f19ccb33887dd96f9912": "e696680eb6580a48d7d44a2b3fbdabe5",
".git/objects/51/9629d95ff7da9524b3ca3e4247580d9ae6954d": "3b19ff51423147612033e1aaca35d51f",
".git/objects/55/ac345863b7351a531cf6c49af5f598580ce6a3": "e8c72780b6349d85a44ae36aeefe6736",
".git/objects/56/9fe6f99da8b1376d009056b703cb07c340ecea": "50eb256210c18910a82923df4ae6399c",
".git/objects/58/4c3f4785daabdd67fdf4be5a3c0a943e1b8ef1": "a22313c6502606e9d50474057c6d4cc6",
".git/objects/58/fcf2b8c7865cca266af6e45bf4866096d4bd3f": "9b8ad3054194b47170bf1227e13b2b57",
".git/objects/5d/5e6f90d3607785d11bd3d765eebffb66382e86": "7e53b4d5b135f37b762a4043932606cd",
".git/objects/5d/901c65bc3150a864d1127dcfebc9ba855df219": "f627914f8db8a851d8c7f2a702f26d21",
".git/objects/5d/935649930a1291479c86af8fa98f640ae284b8": "6ead8301541d020e2982d53517c4e345",
".git/objects/5e/6fb715a5515f7d29279acdf8829da98d5ef872": "b64eb255a4820a295479e296524ee6ba",
".git/objects/62/03231556ef4de018cd0ebd7421eeb0b4ab8d0e": "5b3904bc8600db40900170c2ab6a7bc6",
".git/objects/62/42f52e0d70df5a684ab793e624e65067f8bc52": "85e68972c07421850261af9d3370e254",
".git/objects/63/6931bcaa0ab4c3ff63c22d54be8c048340177b": "8cc9c6021cbd64a862e0e47758619fb7",
".git/objects/64/47efbe090c5adf6b36aef5e93fc08cc9d25bb7": "fb2c3b8727b73faca9a6ac69d9576c00",
".git/objects/64/e46b237b8b3153f3a3cf92223b211d21218d65": "b28c55ce406a189068a1af56d5159ba2",
".git/objects/65/41237602b9edea2c64ef90b6781140dcdb0f68": "09d01ab74029a341554bed7eb29002b6",
".git/objects/65/c3b84f8eea9381f10a02b13249db525f8ddc72": "2302604749187f4512ffa21d91331564",
".git/objects/66/876380382f6f1c496369f87164f3c8966b8c5c": "bf6349280884a40c0e8f6968131d93ec",
".git/objects/67/59bad56f2d87cfcb1db7f7ae6d4753309d15b2": "a79e474ea63e5da961067e7da725caa9",
".git/objects/67/5cecdd9ddc37cf571cc6be969ade12a69bf686": "8af63fe0c58ee06ea578df54f7662556",
".git/objects/67/edc8c7d8292b2b2a6e4e616d7b1af0455a37ba": "e60fa935d09a0eecad03644c6afba9cd",
".git/objects/67/f709798d158a2321083af0dd6819769c940081": "8a60bab222301d6ae2028d642f9abd58",
".git/objects/68/3016be9386b8145ad4562084fe021eeff6eeda": "b13c72dd07c782144079204cb4087077",
".git/objects/6a/60ed2469bd90f9a48ba7c97a3f94d4337e5279": "8ebceb227039a48a5daa09b254cf5e49",
".git/objects/6b/0dc30b9359b29baf081191bfba5c419bba0ea7": "63151f7138abccaaa8269c8d3160fbf5",
".git/objects/6b/6b9a09f77dca1ca3beb900cee1bed4d81aaef1": "3b4b6542ae01079e8911be8061c0d86a",
".git/objects/6b/e909fbf40b23748412f0ea89bf0fae827ed976": "5f118419157d9534688915220cc803f7",
".git/objects/6d/5f0fdc7ccbdf7d01fc607eb818f81a0165627e": "2b2403c52cb620129b4bbc62f12abd57",
".git/objects/6d/98e282fd54dc4aa95d35749a9b6df3273b9173": "c6de4c9819118047f5d244ad95ed619a",
".git/objects/6d/a5d788e0f0cacaf6ac66f20e344d4331ba577b": "f420cb0eb6101511cd5f433af8c3426f",
".git/objects/6e/899d777a03105d508b2b04f9e71d614f6bc29e": "c79c4df14a2f5b522deac29150f36791",
".git/objects/6f/0147c23a3d97137f54ee509153e47d26319e34": "48051399cc55ba4a5f815dfc5ab84b0d",
".git/objects/70/b00770e3c7f156fb9e5eb45706a537f0aea3f5": "1d2a3517d85af9093f34e7b21e5cfbff",
".git/objects/71/5b5a6949a2b4962611355bf675c4cffdc4e45a": "b5aadf5249d53f86253369813573fb08",
".git/objects/72/f04a990381984fb4ee34e2c0766efc27600fea": "7939176907650abd0ec0a3472148ab16",
".git/objects/73/7f149c855c9ccd61a5e24ce64783eaf921c709": "1d813736c393435d016c1bfc46a6a3a6",
".git/objects/74/0a441edfa93a49ccfa2d47d4f2d92034337e1e": "346be2223b5b705aac6e9ad98722dc73",
".git/objects/75/2178a36919523e576759322ff5094079461995": "4b7fda59aa3488414fc5a175b98078cf",
".git/objects/77/d2b73e6b91d26413e56eac2e6d533d497d7e09": "2d20e65d6ddf4c6ef58d952662bc22b5",
".git/objects/78/01238996f0fe625d6b9751646bc2ecf19dccc9": "2480253b0892adee4a73e300edeaaf81",
".git/objects/7a/58a85997e98ffbe3334f33a10653b47307603d": "57bb26d0dffeef99c82ebdb8aa347bd9",
".git/objects/7b/05d300b9704a44a6d29a64401088fa58faa9e8": "1fe6711ed67dcff7c2eb095279940265",
".git/objects/7b/3065ff22b2ecc25f5945957f42f67e31c9b405": "850da97aaf15a98a937694b25f1eab54",
".git/objects/7d/5a7f52836e845eeb624006635ce2776a7de176": "01dab6cfb0efcb71f9a474ee108c5f31",
".git/objects/7d/83a73624b4afb020b592ca6c1f1b037d160962": "454f39eeb74d6c6d49ab1be7e103e968",
".git/objects/7e/26d03480f0058474062d9d14967f18114f341f": "40112fd0658c84133797c09aa0e5d1ff",
".git/objects/7f/7ffbab88c6d0e08635dd9daa2313818eafde08": "7b168fd5572d90f27a4a587b5c1e0629",
".git/objects/7f/91ad70ec732998627b2a16b180ebfead19443f": "2c8ca168d64a327ea389c2d730254cd1",
".git/objects/7f/aaf751bd7d21767605a248b20afc77dcb32eaf": "17fed05431b85b1fc4a43377c550c772",
".git/objects/7f/ffe763cc4cf2c5a33c215e199e8255e5bd0a85": "102ddc73045c0b1c3cc7c14e4bf1ca4b",
".git/objects/81/810dc0ee5e53f83cf908ec22acfe9d8926a9c1": "fda49d38b91aff3ff881ac90668d762e",
".git/objects/83/0ccbdd891d7edf727ca699509d6717c4fa493e": "bbc35169e933bcf3136c2a8f2bedbc1a",
".git/objects/83/11d5c640ac0ecc2c5df68a7cdc7b2aa18e747c": "094a5d81f8da5bae48d36bf4a1bb1066",
".git/objects/84/0516208d35dcb4298847ab835e2ef84ada92fa": "36a4a870d8d9c1c623d8e1be329049da",
".git/objects/84/485d40eed56d10bdc00eeab93c1d14bf0cb8cd": "ac688fd410a5780e8f750fd300ba5363",
".git/objects/84/f478550231a0604b8934110730fa6c8c7a74a3": "21dc28c063eac49fc62c4dc24d3c2b03",
".git/objects/86/4fb0bc13f6b40adced0aa1d1016492f7a566f3": "ca16cc3f899662bf0223f966bd6c834b",
".git/objects/86/6ce48461fde92feba76146a7747613ee8b79c1": "dfe3db82c1046ef5cadfc59f2900911b",
".git/objects/88/660ddaeaa997e74f40e3d61ac7a25f4e1b200b": "0600d825a647e1c68d3d77a1db518f35",
".git/objects/88/7b3be9ef6b63797acee5848261b74b8a6aef6d": "95b777b50113ad53c58377559b749658",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/89/6dcde5279cf770dae8700c24aa4884633f0b97": "50428d16c1a8088c4ab1fece787276cc",
".git/objects/8b/731f2854232dd706cc2b0e8d488dafccca9e6a": "03cae7f78e7bed9047ccc7b2dc9a3df0",
".git/objects/8c/59773bee8314a8ffb4431593d0fb49f52e34c6": "2eb993d30677573ffd0e58484cc6a514",
".git/objects/8c/c5f8e4906d0e343a631d3ee4c02918f14e775d": "929a93266ad5b7b1bf94b11a51f256f1",
".git/objects/8d/d2692829e7e23f26f900b79d7deff465c2860e": "1266dc61bf91306c60d46469ab503abf",
".git/objects/8f/c58d1ca05590927fde6eefa7a2780ae4d78f62": "d94ed7450048b2d988e1b5159cb7900d",
".git/objects/90/bcfcf0a77ab618a826db0fd8b0942963b653af": "fc109675cdf1233dd6599a4c3c0a7a69",
".git/objects/90/bec61986720e0e312559b257a07bff48e1f007": "400fc0522f29f29241dcc21ae3f2646d",
".git/objects/91/a2af9088a9b79ec4ce61eec60966e4a7a52fa6": "8d053fba2bd39a4b10ea6db39aa6063d",
".git/objects/91/e74ba28a87488e5680af5f34ca5f6ed491bab4": "87a0d9b5f907034e2e617e812111c092",
".git/objects/94/6246df813ba13e987eb238883f9001c263fd77": "60727f37d79c584b01c243801dee9cdc",
".git/objects/94/a05ed589fa506810367171d59b1e6d85817e5a": "1d2fa8b471b9eb7232d8a2a9b1ece339",
".git/objects/97/87e9b009b852a19d4f7e13326f45c782a6b2e7": "b16300ca064e6296bfedeac2547277b0",
".git/objects/97/8a4d89de1d1e20408919ec3f54f9bba275d66f": "dbaa9c6711faa6123b43ef2573bc1457",
".git/objects/97/a9b18a12e02c91787d97b91a42b68d6c9d6f4b": "ca9f2bbc14f2d1bff200b0300561ed03",
".git/objects/98/57c9b3b0448c92818efc5fda0f206b21914168": "ecbde07c564dabbec0f249821051b8af",
".git/objects/99/351496656aa3129670fb495153af443f9b8657": "04d3d442addcdc6733f5558fb2569715",
".git/objects/9b/b70ef38c5a33195ebd4ff595f0e93fd61cbd24": "0a1bb52b0b81d3270bd0b51855811158",
".git/objects/9e/466219cff13105416fddec836bcb9ad7ec05d8": "12c31b194b9a87dd2858f44300a117cb",
".git/objects/9f/21a4205498152c6ce5c44f784acf693a15552e": "9c9b37e618d0546bcaf683958faef81a",
".git/objects/9f/3a08ad85719e490b5adb1dbe821ae7c8675547": "9008cae8cdc12df0e8389e09a3ec2e25",
".git/objects/a0/1c6eb73426f3945e3e3c2626aad220ef79db22": "a98cabb12d58bf877de0cef83cacff90",
".git/objects/a1/6ba86d7cc39023cef1c1482f264791bdc7f75f": "f7c2dd7a72b6de525d917087cc5ba6dc",
".git/objects/a2/4eaa107fa11cdd17b12e4f435701378d1ff200": "1bf0a383a30a21b6ef7d66f156335b67",
".git/objects/a3/0f117dddefc1110ee6d298f80321b2fc39806d": "41df7ef378a6836aa2cf23477d9fbbee",
".git/objects/a3/27ad30e18bdb4b61acc60181111c797a9be777": "39296c7619c933cdf58ec9e4c5b4591e",
".git/objects/a3/6e2b47064a291a26a5adc8f9db0c796c55d1db": "1870b64ff496a447b83448850bd9a5df",
".git/objects/a5/2dfdf6b786e8db2295f935258993dc2a789a6c": "6672d8eb0a0322a8fe34afd7750780d0",
".git/objects/a5/8674bb08fd685cdff207309d303e7cd5cb30ea": "f1d451964f576f1006e8f281c494f87f",
".git/objects/a6/491004d91287e3bf75fa9b4c0ed46f19672909": "8f8a837feb5cdbd0587d2b7f3feb738b",
".git/objects/aa/f36b562fadbcc934bffd402ab748d7ad504013": "ce8ce22d7fd19dfd2ec38f574cb43024",
".git/objects/ab/e31d0dc71554cd12e418b742df9ec1a7227de9": "fb5a3b44c88690eb4ae59cca1176a030",
".git/objects/ae/0f3945ba2fd14d4a693e03ed42f6a042855074": "492733da7ed80908de10ca4396371f8b",
".git/objects/af/31ef4d98c006d9ada76f407195ad20570cc8e1": "a9d4d1360c77d67b4bb052383a3bdfd9",
".git/objects/b0/1c8229c68dc0505e2af2a55c8400fb29f1ac19": "859f6e9275720e15bb8c3229c8c98f1a",
".git/objects/b1/5ad935a6a00c2433c7fadad53602c1d0324365": "8f96f41fe1f2721c9e97d75caa004410",
".git/objects/b1/afd5429fbe3cc7a88b89f454006eb7b018849a": "e4c2e016668208ba57348269fcb46d7b",
".git/objects/b4/f9839eaeaaf769d64e33eb470ba9fe8a9e8102": "0ea502cde3253d962f2fc13814a4dea8",
".git/objects/b5/4bc18f03c6fac17e40af4c2327fb720a255290": "073c7a069bb570650a612f0625f47113",
".git/objects/b5/73b6f9da4d34cea16bbb284f31a026bf24c454": "43b67ada59395420e89e3a2a7914bf90",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/c0/2372e2524f601ad84d6a9eca96616962d744e0": "5d72712f0435236eb25277048e5e5709",
".git/objects/c0/2f23500615f0167736ee83fc17ee9b32881097": "0debe87533adce842849959e7be7c660",
".git/objects/c0/6e118b7709478232c1ed131af91223c8d86024": "6c529b4c384daef9a8312d7f744ed035",
".git/objects/c1/7cafaa943007d6c04a60ea3e85527c67042cfb": "5e995a181770c36747eceb54544fd83b",
".git/objects/c2/182ae61d9831fccf025ece8591d04c58c2035a": "9b1ceefb4ea68419c79f50cd2b890816",
".git/objects/c2/1a819b0edb2c1b9f49ac5d5db509a9bbb7077a": "bf4eabee678df134f5f604e720ba0243",
".git/objects/c2/3821b541e710d15da2d2d04a48c044f4a5b6af": "21cd1b8c4d0cd6543acb8b6ac02dfdba",
".git/objects/c2/f8ebd18ec255ab4f29dae4dc3644901143063a": "4b0d20c112e0ae063610f81fec9d6a8e",
".git/objects/c3/a899547df7be9a853d3cb202ce875472bb34b3": "5e7554183610445ec68bec24f6794b20",
".git/objects/c3/e81f822689e3b8c05262eec63e4769e0dea74c": "8c6432dca0ea3fdc0d215dcc05d00a66",
".git/objects/c4/c1e6bb1d06cc5cd88a1a2036d525b965a98208": "7d86b9d540eaac7ec41adebf7cc30d6a",
".git/objects/c5/f40c397f92555310de9a7ec42b704c5a462bed": "aac9e8e35bd48f5083389d866111d9a2",
".git/objects/c6/06caa16378473a4bb9e8807b6f43e69acf30ad": "ed187e1b169337b5fbbce611844136c6",
".git/objects/c7/ce085e2ab3ebfaa62e3cca11f12d8f4b3119bc": "1c9530dd6ebe4f656f926f0260607f76",
".git/objects/c8/07709cdd9f80f99d7c4d3dcad0309e0bfb8bbf": "54d5c07464c6257256d85309b00bbdc0",
".git/objects/c9/e99136a65e019cb798045d79a3ce298ff16b61": "6846ca79c11802b77e5a79ab33c3f665",
".git/objects/cb/6d8be065564d031a4ba6905e8be6473bd22f1a": "51cf3571994ae735f0790db1f563bfb1",
".git/objects/cb/82681a157094f8b86097d85890d181ac05109b": "1bcb53b9714323f0e439e4438aa2ded2",
".git/objects/cd/287084eebecc17d4f8f0b52a82eeded738ea6b": "ac41d8c5c1c1feecef9cb1a5ef87af25",
".git/objects/ce/a736148db423f6144245651c8038f96a0ac3f1": "01f5d6b1ed9e97ab4d14445178ea69ea",
".git/objects/d0/23371979cf1e985205df19078051c10de0a82d": "700b71074bad7afee32068791dec7442",
".git/objects/d0/669babf4672698555d4555de341a3a1a678b6d": "f2421c1cb580aa02dfe7173ef4a1bb57",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d4/4f74bf56906e06e4bb48b6cd9d405f57e0b409": "a6dd6109d638c637c7f7d37a37a8ad4c",
".git/objects/d4/56c00771a38e6aa27781b61843d9d417e44cdb": "0e183997d671b9c89a3c725385f2b552",
".git/objects/d4/ec46cc8b8d2832f830166d953114f3a9d132dc": "809213e6d0eb7c926356fed493d2bc0f",
".git/objects/d5/bb50b3c3bc534b51ba035a5e8495ba7af5025b": "81d30e6f235d2cd1960b1a0d917b3043",
".git/objects/d6/4a30690f48e2bdd5d8c7b8593f3bb8982c2423": "e46686dcecfd26b7cc0b133b366e682b",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d8/5e52212ce02cdccc5536df5232dd5aea5c8c19": "d3ccf01834592d59e314f991fd146d5a",
".git/objects/da/de4272118a8fef5783367c3010afd91499aa4a": "58aa66d612bd8115845d8c6a4789be5e",
".git/objects/da/fd65422747502c19b5c74b4230282644d2169c": "d8a62caf99a372ff6c7692e143787ce3",
".git/objects/db/8fed6c0b8ac99c93225e0f05fe82af30e4353d": "15b317a101dff530b9d08c79a18d7dba",
".git/objects/dc/67dd363b44f82d30dc9bd7cf661744278f4dd3": "fedc759dd4ef5de29d7b523f1c03f1a6",
".git/objects/de/22d06c6534d0d9a9b083f5d5822a0358000aec": "96476f36cafb96214035575d55390f95",
".git/objects/df/8893026939b670f9946d5e9a7cf617c140263a": "44015ce54fe3da0439a5398a7a49a470",
".git/objects/e0/4704b900fea0bb4854e313fbdccb77b4229277": "e8a9ca2592134d2d7178d112e886c417",
".git/objects/e4/08a2ad189e348e44a91de8cc197da5ebacf24a": "aa94ab3424ce6f0614d1cafd8899552a",
".git/objects/e4/73d970b4e085982e2132342349e1ab65f96532": "207253faa0be6ac46e20e7768418b6be",
".git/objects/e7/1d046f91fa431ccfaeb13e6bb24a78b3f5fc06": "caf7278aead617f49a0e919b7410912c",
".git/objects/e8/5ef7172861e973257fadefa4b80396371d2c6f": "97350fc09db9f5c906ad4e74aa197798",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ec/09fceb88eed5702c0b090c2e8f99f7688438b8": "62cce955c998eac3d23c17c694dd7a8f",
".git/objects/ec/361605e9e785c47c62dd46a67f9c352731226b": "d1eafaea77b21719d7c450bcf18236d6",
".git/objects/ec/3e4b1af78af5f24ea850fc537ec5216787bdc7": "6351352d0b967713a39e8e15b1e0d237",
".git/objects/f0/9169f073451bd1c0157f07901bdcd1c4863d42": "dc94b7d56d56839380ea8d0d018f5c9d",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f2/e943fa33453b9547288922db869508d93c643b": "d9b5675e0ee44c9b8d3486984378e61e",
".git/objects/f4/3471c376cf6fcd19c8e871aed30116f1b169bf": "db5ae7a66f69cd4fabefc50cea898917",
".git/objects/f4/aebbca35b3c18ef11210c434ea42cb173e25e2": "6f9da4071c535d351667c141a24a9b07",
".git/objects/f5/4bb558756e78fd29b065bcd9636ac8380cf039": "f5f1ce31f9d416a5ebbbb343dbfa10ed",
".git/objects/f6/088e1dbf48c201e57ff18ef6cfade2828e3274": "994782bea5cda2de0290c8f947149da2",
".git/objects/fb/836251f1d55f49cbd64a25df121ecf21fe53fd": "dc504b635140570b443280472684710c",
".git/objects/ff/9bbba50c8e6396ef66eeaac059cb9b0ec80048": "c90dc7cee991196e81c11e374bc1e585",
".git/ORIG_HEAD": "a7892c9c4b75b13c105791acd57cc633",
".git/refs/heads/main": "9a528c252ebcb687a3d0317d24524577",
".git/refs/remotes/origin/main": "9a528c252ebcb687a3d0317d24524577",
"assets/AssetManifest.bin": "9d1b9227e4132ba520fb8b6338945251",
"assets/AssetManifest.bin.json": "f4e649c03d804a61098cc4d71a5c4e59",
"assets/AssetManifest.json": "d01e948eb89242c5d6b3fe90bb8bd3ba",
"assets/FontManifest.json": "3ddd9b2ab1c2ae162d46e3cc7b78ba88",
"assets/fonts/MaterialIcons-Regular.otf": "8f18afb4a769d544a5f9c3ff2e517b39",
"assets/lib/assets/images/business-strategy-concept-with-wooden-blocks-with-icons.jpg": "2cd577cdadc350e8edc3ac31a0853020",
"assets/lib/assets/images/business.png": "c7baedfd0996cecdcec4cc604a1af6d4",
"assets/lib/assets/images/confused.png": "dbe09da2b61a12a87462c315744a0da9",
"assets/lib/assets/images/couple.png": "a93d060f4d11d50e07a21362f7eb90fe",
"assets/lib/assets/images/discussion.png": "31270f1de13fe70c95c10b2dc6e0fa20",
"assets/lib/assets/images/donationss.jpg": "988b488ea7fa3ab948a2d9bfa44894a0",
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
"assets/NOTICES": "e30d969d5a0ebeac0b66a69effd0f0dd",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "c6ac80bdc5b2896345377c9439f91d54",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "2f141ffd94f3ef0ed716615fd537e708",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "0ebc4e7ca5e040da671730a59b181135",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "26eef3024dbc64886b7f48e1b6fb05cf",
"canvaskit/canvaskit.js.symbols": "efc2cd87d1ff6c586b7d4c7083063a40",
"canvaskit/canvaskit.wasm": "e7602c687313cfac5f495c5eac2fb324",
"canvaskit/chromium/canvaskit.js": "b7ba6d908089f706772b2007c37e6da4",
"canvaskit/chromium/canvaskit.js.symbols": "e115ddcfad5f5b98a90e389433606502",
"canvaskit/chromium/canvaskit.wasm": "ea5ab288728f7200f398f60089048b48",
"canvaskit/skwasm.js": "ac0f73826b925320a1e9b0d3fd7da61c",
"canvaskit/skwasm.js.symbols": "96263e00e3c9bd9cd878ead867c04f3c",
"canvaskit/skwasm.wasm": "828c26a0b1cc8eb1adacbdd0c5e8bcfa",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c",
"favicon.png": "ee03869f0c24d91eeec7b942d8ab2765",
"flutter.js": "4b2350e14c6650ba82871f60906437ea",
"flutter_bootstrap.js": "ec26582d4b98a22ba0437dae5176b329",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "58d6d01bbc9c60149499293bdb01228b",
"/": "58d6d01bbc9c60149499293bdb01228b",
"main.dart.js": "d3c1eb7714bda4f12718dcc876d40523",
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
