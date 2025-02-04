import "package:flutter/material.dart";
import "package:helping_hands_supported_living/web%20screen/utils/footer.dart";

class TabletAboutpage extends StatelessWidget {
  const TabletAboutpage({super.key});

  @override
  Widget build(BuildContext context) {
    return const Scaffold(
      body: Column(
        children: [
          Text(
            'Tablet About',
            style: TextStyle(fontSize: 80),
          ),
          SizedBox(
            height: 40,
          ),
          WebScreenFooter()
        ],
      ),
    );
  }
}
