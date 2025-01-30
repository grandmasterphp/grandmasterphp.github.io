import 'package:flexible_grid_view/flexible_grid_view.dart';
import 'package:flutter/material.dart';
import 'package:go_router/go_router.dart';

class HomeSectionFour extends StatelessWidget {
  const HomeSectionFour({super.key});

  @override
  Widget build(BuildContext context) {
    return Container(
      color: const Color(0xfffceed1),
      child: FlexibleGridView(
        shrinkWrap: true,
        padding: const EdgeInsets.symmetric(horizontal: 100, vertical: 40.0),
        axisCount: GridLayoutEnum.twoElementsInRow,
        crossAxisSpacing: 30,
        children: [
          Container(
            width: MediaQuery.of(context).size.width * 0.3,
            // height: 300,
            child: ClipRRect(
              borderRadius: BorderRadius.circular(15),
              child: Image.asset(
                'lib/assets/images/homeless.jpg',
                fit: BoxFit.cover,
              ),
            ),
          ),
          Column(
            crossAxisAlignment: CrossAxisAlignment.start,
            children: [
              const Text(
                'Help us be there when it matters most',
                style: TextStyle(fontWeight: FontWeight.bold, fontSize: 30),
              ),
              const SizedBox(
                height: 5,
              ),
              const Text(
                'Too many people face the insecurities of sofa surfing, sleeping in their cars, or even being forced onto the streets \n \nIt doesn\'t have to be that way. \n \nNow is the time to demand change for everyone struggling with homelessness and housing problems.',
                style: TextStyle(fontSize: 19),
              ),
              const SizedBox(
                height: 10,
              ),
              TextButton(
                onPressed: () {
                  context.go('/donate');
                },
                style: const ButtonStyle(
                    fixedSize: WidgetStatePropertyAll(Size(160, 50)),
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
          )
        ],
      ),
    );
  }
}
