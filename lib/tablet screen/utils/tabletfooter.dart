import 'package:easy_url_launcher/easy_url_launcher.dart';
import 'package:flexible_grid_view/flexible_grid_view.dart';
import 'package:flutter/material.dart';
import 'package:flutter_awesome_buttons/flutter_awesome_buttons.dart';

class Tabletfooter extends StatelessWidget {
  const Tabletfooter({super.key});

  @override
  Widget build(BuildContext context) {
    return Container(
        color: const Color(0xff6f513c),
        child: FlexibleGridView(
          crossAxisSpacing: 50,
          axisCount: GridLayoutEnum.twoElementsInRow,
          shrinkWrap: true,
          padding: const EdgeInsets.symmetric(horizontal: 100, vertical: 30),
          children: [
            Container(
              padding: const EdgeInsets.only(left: 10),
              child: Column(
                crossAxisAlignment: CrossAxisAlignment.center,
                children: [
                  const Row(
                    children: [
                      Icon(
                        Icons.location_on,
                        color: Color.fromARGB(255, 211, 197, 178),
                      ),
                      SizedBox(
                        width: 15,
                      ),
                      Text(
                        '34 Vicarage Road \nWatford, United Kingdom \nWD18 0EN',
                        style: TextStyle(color: Color(0xffc09a6d)),
                      )
                    ],
                  ),
                  const SizedBox(
                    height: 5,
                  ),
                  const Row(
                    children: [
                      Icon(
                        Icons.phone_rounded,
                        color: Color.fromARGB(255, 211, 197, 178),
                      ),
                      const SizedBox(
                        width: 15,
                      ),
                      Text(
                        '+44 - (739) 856 5665',
                        style: TextStyle(color: Color(0xffc09a6d)),
                      ),
                    ],
                  ),
                  const SizedBox(
                    height: 5,
                  ),
                  const Row(
                    children: [
                      Icon(
                        Icons.mail,
                        color: Color.fromARGB(255, 211, 197, 178),
                      ),
                      const SizedBox(
                        width: 15,
                      ),
                      Text(
                        'info@helpinghandssupportedliving.co.uk',
                        style: TextStyle(color: Color(0xffc09a6d)),
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
                          onPressed: () async => await EasyLauncher.url(
                              url: 'https://www.x.com/')),
                    ],
                  ),
                ],
              ),
            ),

            /////////

            Column(
              children: [
                const Text(
                  'About Helping Hands Supported living',
                  style: TextStyle(
                      color: Color(0xffc09a6d),
                      fontWeight: FontWeight.bold,
                      fontSize: 15),
                  textAlign: TextAlign.left,
                ),
                const SizedBox(
                  height: 20,
                ),
                Container(
                  child: const Text(
                    'At Helping Hands Supported Living, we specialize in assisting homeless individuals, including ex-offenders, settled asylum seekers, and refugees, to reintegrate into the community.',
                    style: TextStyle(color: Color(0xffc09a6d)),
                    textAlign: TextAlign.left,
                  ),
                ),
              ],
            )
          ],
        ));
  }
}
