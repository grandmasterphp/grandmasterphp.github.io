import 'package:flexible_grid_view/flexible_grid_view.dart';
import 'package:flutter/material.dart';

class HomeSectionOne extends StatelessWidget {
  const HomeSectionOne({
    super.key,
  });

  @override
  Widget build(BuildContext context) {
    return Container(
      // color: const Color(0xffd9d9d9),
      color: const Color(0xffe8f9fd),
      padding: const EdgeInsets.symmetric(vertical: 20),
      child: FlexibleGridView(
          crossAxisSpacing: 50,
          axisCount: GridLayoutEnum.twoElementsInRow,
          shrinkWrap: true,
          padding: const EdgeInsets.symmetric(horizontal: 100, vertical: 30),
          children: [
            const Column(
              children: [
                Text(
                  'Rough sleeping is increasingly becoming a problem.',
                  style: TextStyle(fontSize: 35, fontWeight: FontWeight.bold),
                ),
                SizedBox(
                  height: 10,
                ),
                Text(
                    'Homelessness is a deeply intricate issue influenced by the economy, political factors, and shifts in government policy. We are collaborating with partners in the sector and the Government to develop long-term solutions that can lead to significant reforms in a system that is currently inadequate.',
                    style: TextStyle(
                      fontSize: 20,
                    )),
              ],
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
            )
          ]),
    );
  }
}
