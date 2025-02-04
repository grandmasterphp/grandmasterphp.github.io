import 'package:flutter/material.dart';
import 'package:flutter_carousel_widget/flutter_carousel_widget.dart';

class CarouselPage extends StatelessWidget {
  CarouselPage({super.key});

  // List of image assets to preload
  final List<String> _imagePaths = [
    'lib/assets/images/roughsleeperlarge.jpg',
    'lib/assets/images/whatweare/carousel1.jpg',
    'lib/assets/images/whatweare/carousel2.jpg',
    'lib/assets/images/whatweare/carousel3.jpg',
    'lib/assets/images/whatweare/carousel4.jpg',
  ];

  @override
  Widget build(BuildContext context) {
    return Container(
        // color: const Color.fromARGB(255, 238, 225, 186),
        child: FlutterCarousel(
            items: [
          Image(
            width: MediaQuery.of(context).size.width * 1,
            height: MediaQuery.of(context).size.height * 0.92,
            fit: BoxFit.fitWidth,
            image: AssetImage(
              _imagePaths[1],
            ),
          ),
          Image(
            width: MediaQuery.of(context).size.width * 1,
            height: MediaQuery.of(context).size.height * 0.92,
            fit: BoxFit.fitWidth,
            image: AssetImage(
              _imagePaths[2],
            ),
          ),
          Image(
            width: MediaQuery.of(context).size.width * 1,
            height: MediaQuery.of(context).size.height * 0.92,
            fit: BoxFit.fitWidth,
            image: AssetImage(
              _imagePaths[4],
            ),
          ),
        ],
            options: FlutterCarouselOptions(
              aspectRatio: 16 / 9,
              viewportFraction: 1,
              height: MediaQuery.of(context).size.height * 0.91,
              showIndicator: false,
              autoPlay: true,
              controller: FlutterCarouselController(),
            )));
  }
}
