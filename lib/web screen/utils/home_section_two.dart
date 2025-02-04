import 'package:flutter/material.dart';

class HomeSectionTwo extends StatelessWidget {
  const HomeSectionTwo({super.key});

  @override
  Widget build(BuildContext context) {
    return Container(
      padding: const EdgeInsets.symmetric(horizontal: 100, vertical: 30),
      child: Row(
        children: [
          Container(
            padding: const EdgeInsets.only(bottom: 10),
            decoration: const BoxDecoration(
              border:
                  Border(bottom: BorderSide(width: 8, color: Colors.yellow)),
              color: Color(0xffFAF9F6),
            ),
            child: const Text(
              'WHAT WE DO ',
              style: TextStyle(fontWeight: FontWeight.bold, fontSize: 30),
            ),
          )
        ],
      ),
    );
  }
}
