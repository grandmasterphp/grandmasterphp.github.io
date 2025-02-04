import 'package:flexible_grid_view/flexible_grid_view.dart';
import 'package:flutter/material.dart';

class WebaboutSectiontwo extends StatelessWidget {
  const WebaboutSectiontwo({super.key});

  @override
  Widget build(BuildContext context) {
    return Column(
      children: [
        Container(
          margin: const EdgeInsets.only(left: 50),
          padding: const EdgeInsets.only(bottom: 10),
          decoration: const BoxDecoration(
            border:
                Border(bottom: BorderSide(width: 8, color: Colors.greenAccent)),
            color: Color(0xffFAF9F6),
          ),
          child: const Text(
            'OUR VISION ',
            style: TextStyle(
              fontWeight: FontWeight.bold,
              fontSize: 30,
            ),
          ),
        ),
        Container(
          color: Colors.white,
          child: FlexibleGridView(
              crossAxisSpacing: 50,
              axisCount: GridLayoutEnum.twoElementsInRow,
              shrinkWrap: true,
              padding:
                  const EdgeInsets.symmetric(horizontal: 100, vertical: 30),
              children: [
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
                const Text(
                    'We envision a society where every individual, regardless of their past circumstances or challenges, can secure safe housing and lead a fulfilling life as an active member of their community. Helping Hands Supported Living CIC strives to be a leader in innovative supported living services, setting the standard for compassionate care, individual empowerment, and successful societal reintegration for homeless individuals and others in need of support.',
                    style: TextStyle(
                      fontSize: 20,
                    )),
              ]),
        ),
      ],
    );
  }
}
