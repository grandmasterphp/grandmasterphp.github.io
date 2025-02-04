import 'package:flutter/material.dart';
import 'package:go_router/go_router.dart';
import 'package:google_fonts/google_fonts.dart';

class Mobilesectionfour extends StatelessWidget {
  const Mobilesectionfour({super.key});

  @override
  Widget build(BuildContext context) {
    return Container(
      color: const Color(0xfffceed1),
      child: Column(
        children: [
          const SizedBox(
            height: 30,
          ),
          Padding(
            padding: const EdgeInsets.all(10.0),
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                Center(
                  child: Text(
                    'Help us be there when it matters most',
                    style: GoogleFonts.raleway(
                        fontSize: 25, fontWeight: FontWeight.bold),
                    textAlign: TextAlign.center,
                  ),
                ),
                const SizedBox(
                  height: 5,
                ),
                Container(
                  padding: const EdgeInsets.all(5),
                  width: MediaQuery.of(context).size.width,
                  height: 300,
                  child: ClipRRect(
                    borderRadius: BorderRadius.circular(15),
                    child: Image.asset(
                      'lib/assets/images/homeless.jpg',
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
                          left: BorderSide(
                    width: 10,
                    color: Colors.red,
                  ))),
                  child: const Text(
                    'Too many people face the insecurities of sofa surfing, sleeping in their cars, or even being forced onto the streets \nIt doesn\'t have to be that way. \nNow is the time to demand change for everyone struggling with homelessness and housing problems.',
                    style: TextStyle(fontSize: 20),
                    textAlign: TextAlign.left,
                  ),
                ),
                const SizedBox(
                  height: 18,
                ),
                TextButton(
                  onPressed: () {
                    context.go('/donate');
                  },
                  style: const ButtonStyle(
                      fixedSize: WidgetStatePropertyAll(Size(100, 40)),
                      backgroundColor: WidgetStatePropertyAll(
                          Color.fromARGB(255, 37, 200, 19))),
                  child: const Text(
                    'Donate',
                    style: TextStyle(
                        color: Colors.white,
                        fontSize: 15,
                        fontWeight: FontWeight.bold),
                  ),
                )
              ],
            ),
          ),
          const SizedBox(
            height: 10,
          ),
        ],
      ),
    );
  }
}
