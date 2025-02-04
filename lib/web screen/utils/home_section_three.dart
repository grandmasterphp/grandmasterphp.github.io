import 'package:flexible_grid_view/flexible_grid_view.dart';
import 'package:flutter/material.dart';

class HomeSectionThree extends StatelessWidget {
  const HomeSectionThree({super.key});

  @override
  Widget build(BuildContext context) {
    return Container(
      color: const Color(0xffFAF9F6),
      child: FlexibleGridView(
        crossAxisSpacing: 50,
        axisCount: GridLayoutEnum.threeElementsInRow,
        shrinkWrap: true,
        padding: const EdgeInsets.symmetric(horizontal: 100, vertical: 30),
        children: [
          Column(
            children: [
              CircleAvatar(
                radius: 55,
                child: Image.asset('lib/assets/images/team-spirit (3).png'),
              ),
              const SizedBox(
                height: 15,
              ),
              const Text(
                  textAlign: TextAlign.center,
                  'we specialize in supporting individuals who have experienced homelessness, including ex-offenders and refugees, on their journey to reintegration. Through tailored services and compassionate care, we help them access housing, employment, and community support to rebuild their lives and contribute to society.',
                  style: TextStyle(
                    fontSize: 20,
                  ))
            ],
          ),
          Column(
            children: [
              CircleAvatar(
                radius: 50,
                child: Image.asset('lib/assets/images/business.png'),
              ),
              const SizedBox(
                height: 15,
              ),
              const Text(
                  textAlign: TextAlign.center,
                  'we prioritize mental health and wellbeing by offering a range of support services. We provide access to counseling and therapy, facilitate support groups for shared experiences, and run workshops focused on stress management and coping skills to help individuals manage life’s challenges and build resilience.',
                  style: TextStyle(
                    fontSize: 20,
                  ))
            ],
          ),
          Column(
            children: [
              CircleAvatar(
                radius: 50,
                child: Image.asset('lib/assets/images/discussion.png'),
              ),
              const SizedBox(
                height: 15,
              ),
              const Text(
                  textAlign: TextAlign.center,
                  'Helping Hands Supported Living offers ongoing support and aftercare to ensure clients continue to thrive as they become more independent. We provide graduated support, a safety net of services for those needing occasional assistance, and maintain an open-door policy for past clients seeking advice or help whenever needed.',
                  style: TextStyle(
                    fontSize: 20,
                  ))
            ],
          ),
        ],
      ),
    );
  }
}
