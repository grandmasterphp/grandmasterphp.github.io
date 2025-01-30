import 'package:flutter/material.dart';
import 'package:google_fonts/google_fonts.dart';

class Mobilesectionone extends StatelessWidget {
  const Mobilesectionone({super.key});

  @override
  Widget build(BuildContext context) {
    return Container(
      color: const Color(0xffe8f9fd),
      child: Padding(
        padding: const EdgeInsets.all(10.0),
        child: Column(
          children: [
            const SizedBox(
              height: 30,
            ),
            Text(
              'Rough sleeping is becoming a problem.',
              style: GoogleFonts.raleway(
                  fontSize: 20, fontWeight: FontWeight.w600),
              textAlign: TextAlign.left,
            ),
            Container(
              width: MediaQuery.of(context).size.width,
              // height: 300,
              child: ClipRRect(
                borderRadius: BorderRadius.circular(15),
                child: Image.asset(
                  'lib/assets/images/roughsleeperlarge.jpg',
                  fit: BoxFit.cover,
                ),
              ),
            ),
            const SizedBox(
              height: 15,
            ),
            Container(
              padding: const EdgeInsets.only(left: 12),
              decoration: const BoxDecoration(
                  border: Border(
                      left: BorderSide(width: 10, color: Colors.amberAccent))),
              child: const Text(
                  'Homelessness is a deeply intricate issue influenced by the economy, political factors, and shifts in government policy. We are collaborating with partners in the sector and the Government to develop long-term solutions that can lead to significant reforms in a system that is currently inadequate.',
                  style: TextStyle(
                    fontSize: 20,
                  )),
            ),
            const SizedBox(
              height: 20,
            ),
          ],
        ),
      ),
    );
  }
}
