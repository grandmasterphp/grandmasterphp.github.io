import 'package:easy_url_launcher/easy_url_launcher.dart';
import 'package:flutter/material.dart';
import 'package:flutter_awesome_buttons/flutter_awesome_buttons.dart';
import 'package:google_fonts/google_fonts.dart';

class Mobilewebfooter extends StatelessWidget {
  const Mobilewebfooter({super.key});

  @override
  Widget build(BuildContext context) {
    return Container(
      padding: const EdgeInsets.symmetric(horizontal: 10, vertical: 20),
      decoration: const BoxDecoration(
        color: Color(0xff6f513c),
      ),
      child: Column(
        children: [
          Text(
            'About Helping Hands Supported living',
            style: GoogleFonts.raleway(
                color: const Color(0xffc09a6d),
                fontWeight: FontWeight.bold,
                fontSize: 18),
            textAlign: TextAlign.left,
          ),
          const SizedBox(
            height: 20,
          ),
          Container(
            child: Text(
              'At Helping Hands Supported Living, we specialize in assisting homeless individuals, including ex-offenders, settled asylum seekers, and refugees, to reintegrate into the community.',
              style: GoogleFonts.raleway(
                  color: const Color(0xffc09a6d), fontSize: 16),
              textAlign: TextAlign.left,
            ),
          ),
          const SizedBox(
            height: 15,
          ),
          const Divider(
            color: Color.fromARGB(255, 154, 111, 92),
            endIndent: 20,
            indent: 20,
          ),
          const SizedBox(
            height: 15,
          ),
          Container(
            padding: const EdgeInsets.only(left: 10),
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.center,
              children: [
                Row(
                  children: [
                    const Icon(
                      Icons.location_on,
                      color: Color.fromARGB(255, 211, 197, 178),
                    ),
                    const SizedBox(
                      width: 15,
                    ),
                    Text(
                      '34 Vicarage Road \nWatford, United Kingdom \nWD18 0EN',
                      style: GoogleFonts.raleway(
                          color: const Color(0xffc09a6d), fontSize: 16),
                    )
                  ],
                ),
                const SizedBox(
                  height: 5,
                ),
                Row(
                  children: [
                    const Icon(
                      Icons.phone_rounded,
                      color: Color.fromARGB(255, 211, 197, 178),
                    ),
                    const SizedBox(
                      width: 15,
                    ),
                    Text(
                      '+44 - (739) 856 5665',
                      style: GoogleFonts.raleway(
                          color: const Color(0xffc09a6d), fontSize: 16),
                    ),
                  ],
                ),
                const SizedBox(
                  height: 5,
                ),
                Row(
                  children: [
                    const Icon(
                      Icons.mail,
                      color: Color.fromARGB(255, 211, 197, 178),
                    ),
                    const SizedBox(
                      width: 15,
                    ),
                    Text(
                      'info@helpinghandssupportedliving.co.uk',
                      style: GoogleFonts.raleway(
                          color: const Color(0xffc09a6d), fontSize: 16),
                    ),
                  ],
                ),
                const SizedBox(
                  height: 10,
                ),
                //SOCIAL BUTTON!!!
                Row(
                  mainAxisAlignment: MainAxisAlignment.spaceEvenly,
                  children: [
                    FacebookButton(
                        iconSize: 10,
                        onPressed: () async => await EasyLauncher.url(
                            url:
                                'https://www.instagram.com/helpinghandssupportedliving?igsh=MWR3cGdjNmxobHdwbw%3D%3D&utm_source=qr')),
                    InstagramButton(
                        iconSize: 10,
                        onPressed: () async => await EasyLauncher.url(
                            url:
                                'https://www.instagram.com/helpinghandssupportedliving?igsh=MWR3cGdjNmxobHdwbw%3D%3D&utm_source=qr')),
                    TwitterButton(
                        iconSize: 10,
                        isMinSize: true,
                        onPressed: () async =>
                            await EasyLauncher.url(url: 'https://www.x.com/')),
                  ],
                ),
              ],
            ),
          )
        ],
      ),
    );
  }
}
