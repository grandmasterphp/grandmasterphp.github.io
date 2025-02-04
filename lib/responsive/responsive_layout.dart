import "package:flutter/material.dart";

class ResponsiveLayoutScreen extends StatelessWidget {
  final Widget mobileScreenLayout;
  final Widget webScreenLayout;
  final Widget tabletScreenLayout;
  const ResponsiveLayoutScreen(
      {super.key,
      required this.webScreenLayout,
      required this.mobileScreenLayout,
      required this.tabletScreenLayout});

  @override
  Widget build(BuildContext context) {
    return LayoutBuilder(builder: (context, constraints) {
      if (constraints.maxWidth > 1024) {
        return webScreenLayout;
      } else if (constraints.maxWidth < 1024 && constraints.maxWidth > 700) {
        return tabletScreenLayout;
      } else {
        return mobileScreenLayout;
      }
    });
  }
}
