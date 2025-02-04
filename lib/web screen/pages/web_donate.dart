import 'package:flutter/material.dart';
import 'package:go_router/go_router.dart';
import 'package:helping_hands_supported_living/web%20screen/utils/footer.dart';

class DonateWebPage extends StatefulWidget {
  const DonateWebPage({super.key});

  @override
  State<DonateWebPage> createState() => _DonateWebPageState();
}

class _DonateWebPageState extends State<DonateWebPage> {
  bool isButtonDisabled = true;
  // Initially disable the button
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
        leadingWidth: 250,
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
        elevation: 1,
        shadowColor: Colors.grey[400],
      ),
      body: SingleChildScrollView(
        child: Column(
          children: [
            Container(
              height: 400,
              width: MediaQuery.of(context).size.width,
              child: Image.asset(
                'lib/assets/images/donationss.jpg',
                fit: BoxFit.fitWidth,
              ),
            ),
            Container(
              width: MediaQuery.of(context).size.width,
              color: const Color.fromARGB(255, 225, 244, 244),
              child: const Padding(
                padding: EdgeInsets.only(
                  left: 30.0,
                  top: 30,
                  bottom: 30,
                ),
                child: Column(
                  crossAxisAlignment: CrossAxisAlignment.start,
                  children: [
                    Text(
                      'Give to Helping Hands Supported Living',
                      style:
                          TextStyle(fontSize: 30, fontWeight: FontWeight.bold),
                      textAlign: TextAlign.center,
                    ),
                    Text(
                      'When you donate to us, you help adults and children in United Kingdom to recover from trauma.',
                      style:
                          TextStyle(fontSize: 20, fontWeight: FontWeight.bold),
                      textAlign: TextAlign.left,
                    )
                  ],
                ),
              ),
            ),
            // Footer Information

            const SizedBox(
              height: 20,
            ),
            const WebScreenFooter(),

            const SizedBox(
              height: 20,
            ),
          ],
        ),
      ),
    );
  }
}
