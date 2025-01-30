import 'package:flexible_grid_view/flexible_grid_view.dart';
import 'package:flutter/material.dart';
import 'package:go_router/go_router.dart';
import 'package:helping_hands_supported_living/tablet%20screen/utils/tabletfooter.dart';
import 'package:helping_hands_supported_living/tablet%20screen/utils/tabletwhatwedo.dart';
import 'package:helping_hands_supported_living/web%20screen/utils/carousel.dart';
import 'package:helping_hands_supported_living/web%20screen/utils/home_section_four.dart';

class TabletScreenHomepage extends StatefulWidget {
  const TabletScreenHomepage({super.key});

  @override
  State<TabletScreenHomepage> createState() => _TabletScreenHomepageState();
}

class _TabletScreenHomepageState extends State<TabletScreenHomepage> {
// Create a GlobalKey for the form and a TextEditingController for each input
  final _formKey = GlobalKey<FormState>();
  final TextEditingController _firstNameController = TextEditingController();
  final TextEditingController _lastNameController = TextEditingController();
  final TextEditingController _emailController = TextEditingController();

  // Function to handle form submission
  void _submitForm() {
    if (_formKey.currentState?.validate() ?? false) {
      // If the form is valid, show a success message
      ScaffoldMessenger.of(context).showSnackBar(
        const SnackBar(content: Text('Form Submitted Successfully!')),
      );
    }
  }

  // Sanitize input by trimming extra spaces
  String? _sanitizeInput(String? input) {
    return input?.trim();
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
        appBar: AppBar(
          toolbarHeight: 70,
          backgroundColor: Colors.white,
          leading: InkWell(
            onTap: () => context.go('/'),
            hoverColor: Colors.white,
            child: Image.asset(
              'lib/assets/images/Logoo.png',
            ),
          ),
          leadingWidth: 200,
          surfaceTintColor: Colors.white,
          actions: [
            TextButton(
                onPressed: () async {
                  context.go('/');
                },
                child: const Text('Home',
                    style: TextStyle(
                        color: Color(0xffc09a6d),
                        fontWeight: FontWeight.bold))),
            TextButton(
                onPressed: () {
                  context.go('/Donate');
                },
                child: const Text('Donate',
                    style: TextStyle(
                        color: Color(0xffc09a6d),
                        fontWeight: FontWeight.bold))),
            TextButton(
                onPressed: () async {
                  context.go('/AboutUs');
                },
                child: const Text('About',
                    style: TextStyle(
                        color: Color(0xffc09a6d),
                        fontWeight: FontWeight.bold))),
            const SizedBox(
              width: 50,
            )
          ],
          elevation: 3,
          shadowColor: Colors.grey[400],
        ),
        body: SingleChildScrollView(
          child: Column(
            children: [
              CarouselPage(),
              Container(
                height: 10,
                width: MediaQuery.of(context).size.width,
                color: Colors.orange,
              ),
              Container(
                // color: const Color(0xffd9d9d9),
                color: const Color(0xffe8f9fd),
                padding: const EdgeInsets.symmetric(vertical: 20),
                child: FlexibleGridView(
                    crossAxisSpacing: 50,
                    axisCount: GridLayoutEnum.twoElementsInRow,
                    shrinkWrap: true,
                    padding: const EdgeInsets.symmetric(
                        horizontal: 100, vertical: 30),
                    children: [
                      const Column(
                        children: [
                          Text(
                            'Rough sleeping is increasingly becoming a problem.',
                            style: TextStyle(
                                fontSize: 35, fontWeight: FontWeight.bold),
                          ),
                          SizedBox(
                            height: 10,
                          ),
                          Text(
                              'Homelessness is a deeply intricate issue influenced by the economy, political factors, and shifts in government policy. We are collaborating with partners in the sector and the Government to develop long-term solutions that can lead to significant reforms in a system that is currently inadequate.',
                              style: TextStyle(
                                fontSize: 15,
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
              ),

              ///////////
              ///
              ///
              ///

              Container(
                color: const Color(0xffFAF9F6),
                child: FlexibleGridView(
                  crossAxisSpacing: 50,
                  axisCount: GridLayoutEnum.threeElementsInRow,
                  shrinkWrap: true,
                  padding:
                      const EdgeInsets.symmetric(horizontal: 100, vertical: 30),
                  children: [
                    Column(
                      children: [
                        CircleAvatar(
                          radius: 55,
                          child: Image.asset(
                              'lib/assets/images/team-spirit (3).png'),
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
                          child:
                              Image.asset('lib/assets/images/discussion.png'),
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
              ),

              const HomeSectionFour(),

              ////////////
              ///
              ///
              ///
              ///
              ///
              ///
              ///
              ///
              ///
              ///
              ///

              Container(
                color: const Color(0xffc7af6b),
                padding: const EdgeInsets.symmetric(vertical: 20),
                child: FlexibleGridView(
                    crossAxisSpacing: 50,
                    axisCount: GridLayoutEnum.twoElementsInRow,
                    shrinkWrap: true,
                    padding: const EdgeInsets.symmetric(
                        horizontal: 100, vertical: 30),
                    children: [
                      const Column(
                        crossAxisAlignment: CrossAxisAlignment.start,
                        children: [
                          Text(
                            'Keep in touch',
                            style: TextStyle(
                                fontSize: 35, fontWeight: FontWeight.bold),
                          ),
                          SizedBox(
                            height: 10,
                          ),
                          Text(
                              'Stay up to date with our latest news, campaigns and ways to get involved.',
                              style: TextStyle(
                                fontSize: 20,
                              )),
                        ],
                      ),
                      Container(
                        width: MediaQuery.of(context).size.width,
                        // height: 300,
                        child: Form(
                          key: _formKey,
                          child: Column(
                            crossAxisAlignment: CrossAxisAlignment.start,
                            children: [
                              // First Name Field
                              TextFormField(
                                controller: _firstNameController,
                                decoration: const InputDecoration(
                                  fillColor: Colors.white,
                                  filled: true,
                                  labelText: 'First Name',
                                  border: OutlineInputBorder(
                                      borderSide: BorderSide.none),
                                ),
                                validator: (value) {
                                  value = _sanitizeInput(value);
                                  if (value == null || value.isEmpty) {
                                    return 'Please enter your first name';
                                  }
                                  return null;
                                },
                              ),
                              const SizedBox(width: 10),

                              // Last Name Field
                              TextFormField(
                                controller: _lastNameController,
                                decoration: const InputDecoration(
                                  fillColor: Colors.white,
                                  filled: true,
                                  labelText: 'Last Name',
                                  border: OutlineInputBorder(
                                      borderSide: BorderSide.none),
                                ),
                                validator: (value) {
                                  value = _sanitizeInput(value);
                                  if (value == null || value.isEmpty) {
                                    return 'Please enter your last name';
                                  }
                                  return null;
                                },
                              ),
                              const SizedBox(height: 16),

                              // Email Field
                              TextFormField(
                                controller: _emailController,
                                decoration: const InputDecoration(
                                  fillColor: Colors.white,
                                  filled: true,
                                  labelText: 'Email',
                                  border: OutlineInputBorder(
                                      borderSide: BorderSide.none),
                                ),
                                keyboardType: TextInputType.emailAddress,
                                validator: (value) {
                                  value = _sanitizeInput(value);
                                  if (value == null || value.isEmpty) {
                                    return 'Please enter your email';
                                  }
                                  // Simple email validation using regex
                                  final emailRegex = RegExp(
                                      r'^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$');
                                  if (!emailRegex.hasMatch(value)) {
                                    return 'Please enter a valid email';
                                  }
                                  return null;
                                },
                              ),
                              const SizedBox(height: 20),

                              // Subscribe Button
                              Center(
                                child: Expanded(
                                  child: ElevatedButton(
                                    style: ButtonStyle(
                                        backgroundColor:
                                            const WidgetStatePropertyAll(
                                                Color.fromARGB(
                                                    255, 69, 65, 54)),
                                        foregroundColor:
                                            const WidgetStatePropertyAll(
                                                Colors.white),
                                        fixedSize: WidgetStatePropertyAll(Size(
                                            MediaQuery.of(context).size.width,
                                            50))),
                                    onPressed: _submitForm,
                                    child: const Text('Subscribe'),
                                  ),
                                ),
                              ),
                            ],
                          ),
                        ),
                      )
                    ]),
              ),

              ///////////////////
              ///
              ///
              ///
              ///
              ///
              ///
              ///
              ///
              ///
              ///
              /////////////////////

              const Tabletwhatwedo(),

              const SizedBox(
                height: 30,
              ),
              const Tabletfooter()
            ],
          ),
        ));
  }
}
