import 'package:dynamic_path_url_strategy/dynamic_path_url_strategy.dart';
import 'package:flutter/material.dart';
import 'package:go_router/go_router.dart';
import 'package:helping_hands_supported_living/mobile%20screen/home.dart';
import 'package:helping_hands_supported_living/mobile%20screen/pages/mobile_aboutpage.dart';
import 'package:helping_hands_supported_living/mobile%20screen/pages/mobile_donate.dart';
import 'package:helping_hands_supported_living/responsive/responsive_layout.dart';
import 'package:helping_hands_supported_living/tablet%20screen/home.dart';
import 'package:helping_hands_supported_living/tablet%20screen/pages/tablet_aboutpage.dart';
import 'package:helping_hands_supported_living/tablet%20screen/pages/tablet_donate.dart';
import 'package:helping_hands_supported_living/web%20screen/home.dart';
import 'package:helping_hands_supported_living/web%20screen/pages/web_about.dart';
import 'package:helping_hands_supported_living/web%20screen/pages/web_donate.dart';

void main() {
  setPathUrlStrategy();
  runApp(const MainApp());
}

final GoRouter _router = GoRouter(
  initialLocation: '/', //Default FirstPage
  routes: <RouteBase>[
    GoRoute(
      path: '/',
      builder: (BuildContext context, GoRouterState state) {
        return const ResponsiveLayoutScreen(
          webScreenLayout: WebScreenHomepage(),
          mobileScreenLayout: MobileScreenHomepage(),
          tabletScreenLayout: TabletScreenHomepage(),
        );
      },
    ),
    GoRoute(
      path: '/AboutUs',
      builder: (context, state) => const ResponsiveLayoutScreen(
        webScreenLayout: WebAboutPage(),
        mobileScreenLayout: MobileAboutpage(),
        tabletScreenLayout: TabletAboutpage(),
      ),
    ),
    GoRoute(
      path: '/Donate',
      builder: (context, state) => const ResponsiveLayoutScreen(
        webScreenLayout: DonateWebPage(),
        mobileScreenLayout: DonateMobilePage(),
        tabletScreenLayout: DonateTabletPage(),
      ),
    )
  ],
  errorBuilder: (context, state) => const Scaffold(
    body: Center(
      child: Text(
        '404, Page Not Found',
        style: TextStyle(fontSize: 20, fontWeight: FontWeight.bold),
      ),
    ),
  ),
);

class MainApp extends StatelessWidget {
  const MainApp({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp.router(
      title: 'Helping Hands Supported Living',
      debugShowCheckedModeBanner: false,
      routerConfig: _router,
    );
  }
}
