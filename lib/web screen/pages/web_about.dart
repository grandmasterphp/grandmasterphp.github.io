import "package:flutter/material.dart";
import "package:go_router/go_router.dart";
import "package:helping_hands_supported_living/web%20screen/utils/footer.dart";
import "package:helping_hands_supported_living/web%20screen/utils/webabout_sectionthree.dart";
import "package:helping_hands_supported_living/web%20screen/utils/webabout_sectiontwo.dart";
import "package:helping_hands_supported_living/web%20screen/utils/webabout_sectionone.dart";

class WebAboutPage extends StatelessWidget {
  const WebAboutPage({super.key});

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
      backgroundColor: Colors.white,
      body: SingleChildScrollView(
        scrollDirection: Axis.vertical,
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            const SizedBox(
              height: 78,
            ),

            //OUR MISSION
            const WebAboutSectionOne(),
            const SizedBox(
              height: 40,
            ),

            //OUR VISION

            const WebaboutSectiontwo(),
            const SizedBox(
              height: 40,
            ),
            Container(
              margin: const EdgeInsets.only(left: 50),
              padding: const EdgeInsets.only(bottom: 10),
              decoration: const BoxDecoration(
                border: Border(
                    bottom: BorderSide(width: 8, color: Colors.greenAccent)),
                color: Color(0xffFAF9F6),
              ),
              child: const Text(
                'OUR CORE VALUES ',
                style: TextStyle(
                  fontWeight: FontWeight.bold,
                  fontSize: 30,
                ),
              ),
            ),

            //CORE VALUE!!!!!
            const WebaboutSectionthree(),
            const SizedBox(
              height: 40,
            ),
            const WebScreenFooter()
          ],
        ),
      ),
    );
  }
}
