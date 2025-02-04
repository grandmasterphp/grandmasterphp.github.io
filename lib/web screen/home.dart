import "package:flutter/material.dart";
import "package:go_router/go_router.dart";
import "package:helping_hands_supported_living/web%20screen/utils/carousel.dart";
import "package:helping_hands_supported_living/web%20screen/utils/footer.dart";
import "package:helping_hands_supported_living/web%20screen/utils/getintouch.dart";
import "package:helping_hands_supported_living/web%20screen/utils/home_section_four.dart";
import "package:helping_hands_supported_living/web%20screen/utils/home_section_one.dart";
import "package:helping_hands_supported_living/web%20screen/utils/home_section_three.dart";
import "package:helping_hands_supported_living/web%20screen/utils/home_section_two.dart";
import "package:helping_hands_supported_living/web%20screen/utils/whatwedosection.dart";

class WebScreenHomepage extends StatefulWidget {
  const WebScreenHomepage({super.key});

  @override
  State<WebScreenHomepage> createState() => _WebScreenHomepageState();
}

class _WebScreenHomepageState extends State<WebScreenHomepage> {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        toolbarHeight: 80,
        backgroundColor: Colors.white,
        leading: InkWell(
          onTap: () => context.go('/'),
          hoverColor: Colors.white,
          child: Image.asset(
            'lib/assets/images/Logoo.png',
          ),
        ),
        leadingWidth: 200,
        surfaceTintColor: Colors.white,
        actions: [
          TextButton(
              onPressed: () async {
                context.go('/');
              },
              child: const Text('Home',
                  style: TextStyle(
                    color: Color(0xffc09a6d),
                    fontWeight: FontWeight.bold,
                    fontSize: 16,
                  ))),
          TextButton(
              onPressed: () {
                context.go('/Donate');
              },
              child: const Text('Donate',
                  style: TextStyle(
                    color: Color(0xffc09a6d),
                    fontWeight: FontWeight.bold,
                    fontSize: 16,
                  ))),
          TextButton(
              onPressed: () async {
                context.go('/AboutUs');
              },
              child: const Text('About',
                  style: TextStyle(
                    color: Color(0xffc09a6d),
                    fontWeight: FontWeight.bold,
                    fontSize: 16,
                  ))),
          const SizedBox(
            width: 50,
          )
        ],
        elevation: 3,
        shadowColor: Colors.grey[400],
      ),
      body: SingleChildScrollView(
        child: Column(
          children: [
            //CAROUSEL SECTION!!!
            CarouselPage(),
            Container(
              height: 15,
              width: MediaQuery.of(context).size.width,
              color: Colors.orange,
            ),
            //First SECTION!!!!!

            const HomeSectionOne(),

            // SECOND SECTION!!!
            const HomeSectionTwo(),

            //THIRD SECTION!!!
            const HomeSectionThree(),

            //FOURTH SECTION!!!

            const HomeSectionFour(),

            //GET IN TOUCH

            const GetintouchPage(),

            //What We are

            Container(
              color: const Color(0xffFAF9F6),
              padding:
                  const EdgeInsets.symmetric(horizontal: 100, vertical: 30),
              child: Row(
                children: [
                  Container(
                    padding: const EdgeInsets.only(bottom: 10),
                    decoration: const BoxDecoration(
                      border: Border(
                          bottom: BorderSide(width: 8, color: Colors.yellow)),
                      color: Color(0xffFAF9F6),
                    ),
                    child: const Text(
                      'Our Services',
                      style:
                          TextStyle(fontWeight: FontWeight.bold, fontSize: 30),
                    ),
                  )
                ],
              ),
            ),

            // WHAT WE ARE SECTION>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>.
            const WhatWedoSection(),

            const WebScreenFooter(),
            const SizedBox(
              height: 10,
            )
          ],
        ),
      ),
    );
  }
}
