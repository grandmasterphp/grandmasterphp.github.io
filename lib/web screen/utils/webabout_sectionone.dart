import 'package:flexible_grid_view/flexible_grid_view.dart';
import 'package:flutter/material.dart';

class WebAboutSectionOne extends StatelessWidget {
  const WebAboutSectionOne({super.key});

  @override
  Widget build(BuildContext context) {
    return Column(
      children: [
        Container(
          margin: const EdgeInsets.only(left: 50, top: 30),
          padding: const EdgeInsets.only(bottom: 10),
          decoration: const BoxDecoration(
            border: Border(bottom: BorderSide(width: 8, color: Colors.yellow)),
            color: Color(0xffFAF9F6),
          ),
          child: const Text(
            'OUR MISSION ',
            style: TextStyle(fontWeight: FontWeight.bold, fontSize: 30),
          ),
        ),
        Container(
          color: Colors.amber[50],
          padding: const EdgeInsets.symmetric(vertical: 20),
          child: FlexibleGridView(
              crossAxisSpacing: 50,
              axisCount: GridLayoutEnum.twoElementsInRow,
              shrinkWrap: true,
              padding:
                  const EdgeInsets.symmetric(horizontal: 100, vertical: 30),
              children: [
                const Text(
                    'At Helping Hands Supported Living CIC, our mission is to empower individuals facing homelessness and those with diverse needs to achieve stable, independent living and successfully integrate into society. We are committed to providing personalized support services and accommodation that enhance the quality of life for our clients, promoting their autonomy, and fostering their reintegration into the community.',
                    style: TextStyle(
                      fontSize: 20,
                    )),
                Container(
                  width: MediaQuery.of(context).size.width,
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
      ],
    );
  }
}
