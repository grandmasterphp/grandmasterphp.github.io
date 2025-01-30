import 'package:easy_url_launcher/easy_url_launcher.dart';
import 'package:flutter/material.dart';

class WebScreenFooter extends StatelessWidget {
  const WebScreenFooter({super.key});

  @override
  Widget build(BuildContext context) {
    return Container(
      margin: const EdgeInsets.symmetric(horizontal: 30),
      decoration: BoxDecoration(
        borderRadius: BorderRadius.circular(20),
        color: const Color(0xff6f4f38),
      ),
      child: Padding(
        padding: const EdgeInsets.all(30.0),
        child: Column(
          children: [
            Row(
              mainAxisAlignment: MainAxisAlignment.spaceBetween,
              children: [
                Container(
                  decoration: BoxDecoration(
                    borderRadius: BorderRadius.circular(10),
                    color: Colors.white,
                  ),
                  child: const Image(
                    image: AssetImage("lib/assets/images/Logoo.png"),
                    width: 130,
                  ),
                ),
                const Column(
                  children: [
                    Text('Charity web Trademark',
                        style: TextStyle(color: Colors.white))
                  ],
                ),
                const Column(
                  children: [
                    Text('Charity web Trademark',
                        style: TextStyle(color: Colors.white))
                  ],
                ),
                const Column(
                  children: [
                    Text('Charity web Trademark',
                        style: TextStyle(color: Colors.white))
                  ],
                )
              ],
            ),

            const SizedBox(
              height: 15,
            ),
            const Divider(
              color: Colors.white,
            ),
            const SizedBox(
              height: 15,
            ),
            //Second part of the footer
            Row(
              mainAxisAlignment: MainAxisAlignment.spaceBetween,
              children: [
                const Column(
                  crossAxisAlignment: CrossAxisAlignment.start,
                  children: [
                    Text(
                      'Helping Hands 2024',
                      style: TextStyle(color: Colors.white),
                    ),
                    Text(
                      'All Rights Reserved.',
                      style: TextStyle(color: Colors.white),
                    )
                  ],
                ),
                Row(
                  children: [
                    OutlinedButton.icon(
                      onPressed: () async {
                        await EasyLauncher.url(
                            url:
                                'https://www.facebook.com/people/Helping-Hands-Supported-Living/61567279597054/');
                      },
                      label: const Text(
                        "Facebook",
                        style: TextStyle(color: Colors.white),
                      ),
                      icon: const Icon(
                        Icons.facebook,
                        color: Colors.white,
                      ),
                    ),
                    const SizedBox(
                      width: 20,
                    ),
                    OutlinedButton.icon(
                      onPressed: () async {
                        await EasyLauncher.url(
                            url:
                                'https://www.instagram.com/helpinghandssupportedliving?igsh=MWR3cGdjNmxobHdwbw%3D%3D&utm_source=qr');
                      },
                      label: const Text(
                        "Instagram",
                        style: TextStyle(color: Colors.white),
                      ),
                      icon: const Icon(
                        Icons.facebook,
                        color: Colors.white,
                      ),
                    ),
                    const SizedBox(
                      width: 20,
                    ),
                    OutlinedButton.icon(
                      onPressed: () {},
                      label: const Text(
                        "Twitter",
                        style: TextStyle(color: Colors.white),
                      ),
                      icon: const Icon(
                        Icons.one_x_mobiledata,
                        color: Colors.white,
                      ),
                    ),
                    const SizedBox(
                      width: 20,
                    ),
                    OutlinedButton.icon(
                      onPressed: () async {
                        await EasyLauncher.call(number: '+447398565665');
                      },
                      label: const Text(
                        "+44 (739) - 856 5665",
                        style: TextStyle(color: Colors.white),
                      ),
                      icon: const Icon(
                        Icons.phone,
                        size: 15,
                        color: Colors.white,
                      ),
                    )
                  ],
                )
              ],
            )
          ],
        ),
      ),
    );
  }
}
