import "package:flutter/material.dart";

class ResponsiveAboutLayoutScreen extends StatelessWidget {
  final Widget mobileAboutLayout;
  final Widget webAboutLayout;
  final Widget tabletAboutLayout;
  const ResponsiveAboutLayoutScreen(
      {super.key,
      required this.webAboutLayout,
      required this.mobileAboutLayout,
      required this.tabletAboutLayout});

  @override
  Widget build(BuildContext context) {
    return LayoutBuilder(builder: (context, constraints) {
      if (constraints.maxWidth > 1024) {
        return webAboutLayout;
      } else if (constraints.maxWidth < 1024 && constraints.maxWidth > 700) {
        return tabletAboutLayout;
      } else {
        return mobileAboutLayout;
      }
    });
  }
}
