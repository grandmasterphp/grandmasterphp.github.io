import 'package:flutter/material.dart';
import 'package:go_router/go_router.dart';
import 'package:helping_hands_supported_living/mobile%20screen/utils/mobilecarousel.dart';
import 'package:helping_hands_supported_living/mobile%20screen/utils/mobilegetintouch.dart';
import 'package:helping_hands_supported_living/mobile%20screen/utils/mobilesectionfour.dart';
import 'package:helping_hands_supported_living/mobile%20screen/utils/mobilesectionone.dart';
import 'package:helping_hands_supported_living/mobile%20screen/utils/mobilesectionthree.dart';
import 'package:helping_hands_supported_living/mobile%20screen/utils/mobilewebfooter.dart';
import 'package:helping_hands_supported_living/mobile%20screen/utils/mobilewhatwedo.dart';

class MobileScreenHomepage extends StatefulWidget {
  const MobileScreenHomepage({super.key});

  @override
  State<MobileScreenHomepage> createState() => _MobileScreenHomepageState();
}

class _MobileScreenHomepageState extends State<MobileScreenHomepage> {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: Colors.white,
      drawer: Drawer(
        backgroundColor: Colors.white,
        shape: const ContinuousRectangleBorder(),
        width: MediaQuery.of(context).size.width * 0.6,
        child: ListView(
          children: [
            DrawerHeader(
                child: Container(
              child: Image.asset(
                'lib/assets/images/Logoo.png',
              ),
            )),
            ListTile(
                shape: const Border(
                    bottom:
                        BorderSide(color: Color.fromARGB(255, 202, 164, 137))),
                title: const Text('Home',
                    style: TextStyle(
                        color: Color(0xff6f513c), fontWeight: FontWeight.bold)),
                onTap: () async => context.go('/')),
            ListTile(
                shape: const Border(
                    bottom:
                        BorderSide(color: Color.fromARGB(255, 202, 164, 137))),
                title: const Text(
                  'Donate',
                  style: TextStyle(
                      color: Color(0xff6f513c), fontWeight: FontWeight.bold),
                ),
                onTap: () async => context.go('/Donate')),
            ListTile(
                shape: const Border(
                    bottom:
                        BorderSide(color: Color.fromARGB(255, 202, 164, 137))),
                title: const Text('About Us',
                    style: TextStyle(
                        color: Color(0xff6f513c), fontWeight: FontWeight.bold)),
                onTap: () async => context.go('/AboutUs')),
          ],
        ),
      ),
      appBar: AppBar(
        toolbarHeight: 70,
        backgroundColor: Colors.white,
        leading: InkWell(
          onTap: () => context.go('/'),
          hoverColor: Colors.white,
          child: Image.asset(
            'lib/assets/images/Logoo.png',
          ),
        ),
        actions: [
          Builder(builder: (context) {
            return IconButton(
                onPressed: () {
                  Scaffold.of(context).openDrawer();
                },
                icon: const Icon(
                  Icons.menu_rounded,
                  color: Color(0xffc09a6d),
                  size: 50,
                ));
          }),
        ],
        leadingWidth: 150,
        surfaceTintColor: Colors.white,
        elevation: 1,
        shadowColor: Colors.grey[400],
      ),
      body: SingleChildScrollView(
        child: Container(
          child: Column(
            children: [
              MobileCarouselPage(),
              Container(
                height: 10,
                width: MediaQuery.of(context).size.width,
                color: Colors.orange,
              ),
              const Mobilesectionone(),
              const Mobilesectionthree(),
              const Mobilesectionfour(),
              const Mobilegetintouch(),
              const MobileWhatWedoSection(),
              const SizedBox(
                height: 20,
              ),
              const Mobilewebfooter(),
            ],
          ),
        ),
      ),
    );
  }
}
