import 'package:flutter/material.dart';
import 'package:flutter_carousel_widget/flutter_carousel_widget.dart';

class MobileCarouselPage extends StatelessWidget {
  MobileCarouselPage({super.key});

  // List of image assets to preload
  final List<String> _imagePaths = [
    'lib/assets/images/whatweare/carousel1.jpg',
    'lib/assets/images/whatweare/carousel3.jpg',
    'lib/assets/images/whatweare/carousel4.jpg',
  ];

  @override
  Widget build(BuildContext context) {
    return Container(
        height: 300,
        // color: const Color.fromARGB(255, 238, 225, 186),
        child: FlutterCarousel(
            items: [
              Image(
                width: MediaQuery.of(context).size.width * 1,
                height: 300,
                fit: BoxFit.cover,
                image: AssetImage(
                  _imagePaths[0],
                ),
              ),
              Image(
                width: MediaQuery.of(context).size.width * 1,
                height: MediaQuery.of(context).size.height,
                fit: BoxFit.cover,
                image: AssetImage(
                  _imagePaths[1],
                ),
              ),
              Image(
                width: MediaQuery.of(context).size.width * 1,
                height: MediaQuery.of(context).size.height,
                fit: BoxFit.cover,
                image: AssetImage(
                  _imagePaths[2],
                ),
              ),
            ],
            options: FlutterCarouselOptions(
              aspectRatio: 16 / 9,
              viewportFraction: 1,
              height: MediaQuery.of(context).size.height * 1,
              showIndicator: false,
              autoPlay: true,
              controller: FlutterCarouselController(),
            )));
  }
}
