import 'package:flexible_grid_view/flexible_grid_view.dart';
import 'package:flutter/material.dart';

class WebaboutSectionthree extends StatelessWidget {
  const WebaboutSectionthree({super.key});

  @override
  Widget build(BuildContext context) {
    return Container(
      color: Colors.cyan[50],
      child: FlexibleGridView(
          crossAxisSpacing: 50,
          axisCount: GridLayoutEnum.twoElementsInRow,
          shrinkWrap: true,
          padding: const EdgeInsets.symmetric(horizontal: 100, vertical: 30),
          children: [
            Padding(
              padding: const EdgeInsets.symmetric(vertical: 20.0),
              child: Column(
                crossAxisAlignment: CrossAxisAlignment.start,
                children: [
                  RichText(
                    textAlign: TextAlign.center,
                    text: const TextSpan(children: [
                      WidgetSpan(
                          child: Icon(
                        Icons.check_circle,
                        color: Colors.green,
                        size: 20,
                      )),
                      TextSpan(
                          text: ' Respect',
                          style: TextStyle(
                            fontSize: 18,
                            fontWeight: FontWeight.w600,
                          ))
                    ]),
                  ),
                  const Padding(
                    padding: EdgeInsets.only(left: 25.0, top: 5),
                    child: Text(
                        'We honor the inherent dignity and individual experiences of each person we serve.'),
                  ),
                  const SizedBox(
                    height: 15,
                  ),
                  RichText(
                    text: const TextSpan(children: [
                      WidgetSpan(
                          child: Icon(
                        Icons.check_circle,
                        color: Colors.green,
                        size: 20,
                      )),
                      TextSpan(
                          text: ' Empowerment',
                          style: TextStyle(
                              fontSize: 18, fontWeight: FontWeight.w600))
                    ]),
                  ),
                  const Padding(
                    padding: EdgeInsets.only(left: 25.0, top: 5),
                    child: Text(
                        'We believe in nurturing independence and self-sufficiency in our clients'),
                  ),
                  const SizedBox(
                    height: 15,
                  ),
                  RichText(
                    text: const TextSpan(children: [
                      WidgetSpan(
                          child: Icon(
                        Icons.check_circle,
                        color: Colors.green,
                        size: 20,
                      )),
                      TextSpan(
                          text: ' Person-Centered Care',
                          style: TextStyle(
                              fontSize: 18, fontWeight: FontWeight.w600))
                    ]),
                  ),
                  const Padding(
                    padding: EdgeInsets.only(left: 25.0, top: 5),
                    child: Text(
                      'We tailor our support to meet the unique needs and aspirations of each individual',
                      textAlign: TextAlign.left,
                    ),
                  ),
                  const SizedBox(
                    height: 15,
                  ),
                  RichText(
                    text: const TextSpan(children: [
                      WidgetSpan(
                          child: Icon(
                        Icons.check_circle,
                        color: Colors.green,
                        size: 20,
                      )),
                      TextSpan(
                          text: ' Inclusion',
                          style: TextStyle(
                              fontSize: 18, fontWeight: FontWeight.w600))
                    ]),
                  ),
                  const Padding(
                    padding: EdgeInsets.only(left: 25.0, top: 5),
                    child: Text(
                        'We actively promote community integration and participation for all our clients'),
                  ),
                  const SizedBox(
                    height: 15,
                  ),
                  RichText(
                    text: const TextSpan(children: [
                      WidgetSpan(
                          child: Icon(
                        Icons.check_circle,
                        color: Colors.green,
                        size: 20,
                      )),
                      TextSpan(
                          text: ' Excellence',
                          style: TextStyle(
                              fontSize: 18, fontWeight: FontWeight.w600))
                    ]),
                  ),
                  const Padding(
                    padding: EdgeInsets.only(left: 25.0, top: 5),
                    child: Text(
                        'We are committed to maintaining the highest standards of care and continuously improving our services.'),
                  ),
                  const SizedBox(
                    height: 15,
                  ),
                  RichText(
                    text: const TextSpan(children: [
                      WidgetSpan(
                          child: Icon(
                        Icons.check_circle,
                        color: Colors.green,
                        size: 20,
                      )),
                      TextSpan(
                          text: ' Collaboration',
                          style: TextStyle(
                              fontSize: 18, fontWeight: FontWeight.w600))
                    ]),
                  ),
                  const Padding(
                    padding: EdgeInsets.only(left: 25.0, top: 5),
                    child: Text(
                        'We work closely with clients, families, community partners, and local authorities to ensure comprehensive support.'),
                  ),
                  const SizedBox(
                    height: 15,
                  ),
                  RichText(
                    text: const TextSpan(children: [
                      WidgetSpan(
                          child: Icon(
                        Icons.check_circle,
                        color: Colors.green,
                        size: 20,
                      )),
                      TextSpan(
                          text: ' Integrity',
                          style: TextStyle(
                              fontSize: 18, fontWeight: FontWeight.w600))
                    ]),
                  ),
                  const Padding(
                    padding: EdgeInsets.only(left: 25.0, top: 5),
                    child: Text(
                        'We operate with transparency, honesty, and ethical practices in all aspects of our work.'),
                  ),
                  const SizedBox(
                    height: 15,
                  ),
                ],
              ),
            ),
            Container(
              width: MediaQuery.of(context).size.width,
              // height: 300,
              child: ClipRRect(
                borderRadius: BorderRadius.circular(15),
                child: Image.asset(
                  'lib/assets/images/business-strategy-concept-with-wooden-blocks-with-icons.jpg',
                  fit: BoxFit.cover,
                ),
              ),
            ),
          ]),
    );
  }
}
