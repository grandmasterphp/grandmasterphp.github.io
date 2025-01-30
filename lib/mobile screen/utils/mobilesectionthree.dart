import 'package:flutter/material.dart';

class Mobilesectionthree extends StatelessWidget {
  const Mobilesectionthree({super.key});

  @override
  Widget build(BuildContext context) {
    return Container(
      color: Colors.white,
      child: Column(
        children: [
          Padding(
            padding: const EdgeInsets.all(20.0),
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                CircleAvatar(
                  radius: 55,
                  child: Image.asset('lib/assets/images/team-spirit (3).png'),
                ),
                const SizedBox(
                  height: 15,
                ),
                const Text(
                    textAlign: TextAlign.justify,
                    'We specialize in supporting individuals who have experienced homelessness, including ex-offenders and refugees, on their journey to reintegration. Through tailored services and compassionate care, we help them access housing, employment, and community support to rebuild their lives and contribute to society.',
                    style: TextStyle(
                      fontSize: 20,
                    ))
              ],
            ),
          ),
          Container(
            color: const Color.fromARGB(255, 224, 236, 230),
            padding: const EdgeInsets.all(20.0),
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.end,
              children: [
                CircleAvatar(
                  radius: 50,
                  child: Image.asset('lib/assets/images/business.png'),
                ),
                const SizedBox(
                  height: 15,
                ),
                const Text(
                    textAlign: TextAlign.justify,
                    'We prioritize mental health and wellbeing by offering a range of support services. We provide access to counseling and therapy, facilitate support groups for shared experiences, and run workshops focused on stress management and coping skills to help individuals manage life’s challenges and build resilience.',
                    style: TextStyle(
                      fontSize: 20,
                    ))
              ],
            ),
          ),
          Padding(
            padding: const EdgeInsets.all(20.0),
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                CircleAvatar(
                  radius: 50,
                  child: Image.asset('lib/assets/images/discussion.png'),
                ),
                const SizedBox(
                  height: 15,
                ),
                const Text(
                    textAlign: TextAlign.justify,
                    'Helping Hands Supported Living offers ongoing support and aftercare to ensure clients continue to thrive as they become more independent. We provide graduated support, a safety net of services for those needing occasional assistance, and maintain an open-door policy for past clients seeking advice or help whenever needed.',
                    style: TextStyle(
                      fontSize: 20,
                    ))
              ],
            ),
          ),
        ],
      ),
    );
  }
}
