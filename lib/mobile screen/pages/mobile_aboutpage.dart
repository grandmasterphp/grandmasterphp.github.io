import "package:flutter/material.dart";
import "package:go_router/go_router.dart";
import "package:google_fonts/google_fonts.dart";
import "package:helping_hands_supported_living/mobile%20screen/utils/mobilewebfooter.dart";

class MobileAboutpage extends StatelessWidget {
  const MobileAboutpage({super.key});

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
        child: Column(
          children: [
            //OUR MISSION
            //

            Container(
              margin: const EdgeInsets.only(left: 50, top: 30),
              padding: const EdgeInsets.only(bottom: 2),
              decoration: const BoxDecoration(
                border:
                    Border(bottom: BorderSide(width: 8, color: Colors.yellow)),
                color: Color(0xffFAF9F6),
              ),
              child: Text(
                'OUR MISSION ',
                style: GoogleFonts.raleway(
                    fontSize: 20, fontWeight: FontWeight.bold),
                textAlign: TextAlign.justify,
              ),
            ),

            Container(
              color: Colors.amber[50],
              padding: const EdgeInsets.symmetric(vertical: 20, horizontal: 20),
              child: Column(children: [
                const Text(
                    'At Helping Hands Supported Living CIC, our mission is to empower individuals facing homelessness and those with diverse needs to achieve stable, independent living and successfully integrate into society. We are committed to providing personalized support services and accommodation that enhance the quality of life for our clients, promoting their autonomy, and fostering their reintegration into the community.',
                    style: TextStyle(
                      fontSize: 18,
                    )),
                const SizedBox(
                  height: 10,
                ),
                Container(
                  width: MediaQuery.of(context).size.width,
                  padding: const EdgeInsets.symmetric(horizontal: 20),
                  // height: 300,
                  child: ClipRRect(
                    borderRadius: BorderRadius.circular(15),
                    child: Image.asset(
                      'lib/assets/images/mission.jpg',
                      fit: BoxFit.cover,
                    ),
                  ),
                )
              ]),
            ),
            const SizedBox(
              height: 40,
            ),

            //OUR VISION

            Container(
              margin: const EdgeInsets.only(left: 50),
              padding: const EdgeInsets.only(bottom: 10),
              decoration: const BoxDecoration(
                border: Border(
                    bottom: BorderSide(width: 8, color: Colors.greenAccent)),
                color: Color(0xffFAF9F6),
              ),
              child: Text(
                'OUR VISION ',
                style: GoogleFonts.raleway(
                    fontSize: 20, fontWeight: FontWeight.bold),
                textAlign: TextAlign.justify,
              ),
            ),

            Container(
              padding: const EdgeInsets.symmetric(horizontal: 20),
              color: Colors.white,
              child: Column(children: [
                Container(
                  width: MediaQuery.of(context).size.width,
                  // height: 300,
                  child: ClipRRect(
                    borderRadius: BorderRadius.circular(15),
                    child: Image.asset(
                      'lib/assets/images/idea-concept-with-light-bulb.jpg',
                      fit: BoxFit.cover,
                    ),
                  ),
                ),
                const SizedBox(
                  height: 10,
                ),
                const Text(
                    'We envision a society where every individual, regardless of their past circumstances or challenges, can secure safe housing and lead a fulfilling life as an active member of their community. Helping Hands Supported Living CIC strives to be a leader in innovative supported living services, setting the standard for compassionate care, individual empowerment, and successful societal reintegration for homeless individuals and others in need of support.',
                    style: TextStyle(
                      fontSize: 18,
                    )),
              ]),
            ),
            const SizedBox(
              height: 40,
            ),
            Container(
              margin: const EdgeInsets.only(left: 50),
              padding: const EdgeInsets.only(bottom: 2),
              decoration: const BoxDecoration(
                border: Border(
                    bottom: BorderSide(width: 8, color: Colors.greenAccent)),
                color: Color(0xffFAF9F6),
              ),
              child: Text(
                'OUR CORE VALUES ',
                style: GoogleFonts.raleway(
                    fontSize: 20, fontWeight: FontWeight.bold),
                textAlign: TextAlign.justify,
              ),
            ),

            //CORE VALUE!!!!!
            Container(
              padding: const EdgeInsets.symmetric(horizontal: 20),
              color: Colors.cyan[50],
              child: Column(children: [
                Padding(
                  padding: const EdgeInsets.symmetric(vertical: 20.0),
                  child: Column(
                    crossAxisAlignment: CrossAxisAlignment.start,
                    children: [
                      RichText(
                        textAlign: TextAlign.center,
                        text: const TextSpan(children: [
                          WidgetSpan(
                              child: Icon(
                            Icons.check_circle,
                            color: Colors.green,
                            size: 20,
                          )),
                          TextSpan(
                              text: ' Respect',
                              style: TextStyle(
                                fontSize: 18,
                                fontWeight: FontWeight.w600,
                              ))
                        ]),
                      ),
                      const Padding(
                        padding: EdgeInsets.only(left: 25.0, top: 5),
                        child: Text(
                            'We honor the inherent dignity and individual experiences of each person we serve.'),
                      ),
                      const SizedBox(
                        height: 15,
                      ),
                      RichText(
                        text: const TextSpan(children: [
                          WidgetSpan(
                              child: Icon(
                            Icons.check_circle,
                            color: Colors.green,
                            size: 20,
                          )),
                          TextSpan(
                              text: ' Empowerment',
                              style: TextStyle(
                                  fontSize: 18, fontWeight: FontWeight.w600))
                        ]),
                      ),
                      const Padding(
                        padding: EdgeInsets.only(left: 25.0, top: 5),
                        child: Text(
                            'We believe in nurturing independence and self-sufficiency in our clients'),
                      ),
                      const SizedBox(
                        height: 15,
                      ),
                      RichText(
                        text: const TextSpan(children: [
                          WidgetSpan(
                              child: Icon(
                            Icons.check_circle,
                            color: Colors.green,
                            size: 20,
                          )),
                          TextSpan(
                              text: ' Person-Centered Care',
                              style: TextStyle(
                                  fontSize: 18, fontWeight: FontWeight.w600))
                        ]),
                      ),
                      const Padding(
                        padding: EdgeInsets.only(left: 25.0, top: 5),
                        child: Text(
                          'We tailor our support to meet the unique needs and aspirations of each individual',
                          textAlign: TextAlign.left,
                        ),
                      ),
                      const SizedBox(
                        height: 15,
                      ),
                      RichText(
                        text: const TextSpan(children: [
                          WidgetSpan(
                              child: Icon(
                            Icons.check_circle,
                            color: Colors.green,
                            size: 20,
                          )),
                          TextSpan(
                              text: ' Inclusion',
                              style: TextStyle(
                                  fontSize: 18, fontWeight: FontWeight.w600))
                        ]),
                      ),
                      const Padding(
                        padding: EdgeInsets.only(left: 25.0, top: 5),
                        child: Text(
                            'We actively promote community integration and participation for all our clients'),
                      ),
                      const SizedBox(
                        height: 15,
                      ),
                      RichText(
                        text: const TextSpan(children: [
                          WidgetSpan(
                              child: Icon(
                            Icons.check_circle,
                            color: Colors.green,
                            size: 20,
                          )),
                          TextSpan(
                              text: ' Excellence',
                              style: TextStyle(
                                  fontSize: 18, fontWeight: FontWeight.w600))
                        ]),
                      ),
                      const Padding(
                        padding: EdgeInsets.only(left: 25.0, top: 5),
                        child: Text(
                            'We are committed to maintaining the highest standards of care and continuously improving our services.'),
                      ),
                      const SizedBox(
                        height: 15,
                      ),
                      RichText(
                        text: const TextSpan(children: [
                          WidgetSpan(
                              child: Icon(
                            Icons.check_circle,
                            color: Colors.green,
                            size: 20,
                          )),
                          TextSpan(
                              text: ' Collaboration',
                              style: TextStyle(
                                  fontSize: 18, fontWeight: FontWeight.w600))
                        ]),
                      ),
                      const Padding(
                        padding: EdgeInsets.only(left: 25.0, top: 5),
                        child: Text(
                            'We work closely with clients, families, community partners, and local authorities to ensure comprehensive support.'),
                      ),
                      const SizedBox(
                        height: 15,
                      ),
                      RichText(
                        text: const TextSpan(children: [
                          WidgetSpan(
                              child: Icon(
                            Icons.check_circle,
                            color: Colors.green,
                            size: 20,
                          )),
                          TextSpan(
                              text: ' Integrity',
                              style: TextStyle(
                                  fontSize: 18, fontWeight: FontWeight.w600))
                        ]),
                      ),
                      const Padding(
                        padding: EdgeInsets.only(left: 25.0, top: 5),
                        child: Text(
                            'We operate with transparency, honesty, and ethical practices in all aspects of our work.'),
                      ),
                      const SizedBox(
                        height: 15,
                      ),
                    ],
                  ),
                ),
                Container(
                  width: MediaQuery.of(context).size.width,
                  // height: 300,
                  child: ClipRRect(
                    borderRadius: BorderRadius.circular(15),
                    child: Image.asset(
                      'lib/assets/images/business-strategy-concept-with-wooden-blocks-with-icons.jpg',
                      fit: BoxFit.cover,
                    ),
                  ),
                ),
              ]),
            ),
            const SizedBox(
              height: 30,
            ),
            const Mobilewebfooter()
          ],
        ),
      ),
    );
  }
}
