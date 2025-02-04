import 'package:flutter/material.dart';

class Mobilegetintouch extends StatefulWidget {
  const Mobilegetintouch({super.key});

  @override
  State<Mobilegetintouch> createState() => _MobilegetintouchState();
}

class _MobilegetintouchState extends State<Mobilegetintouch> {
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
    return Container(
      color: const Color(0xffc7af6b),
      padding: const EdgeInsets.symmetric(vertical: 20),
      child: Container(
        padding: const EdgeInsets.symmetric(horizontal: 10, vertical: 10),
        child: Column(children: [
          const Text(
            'Keep in touch',
            style: TextStyle(fontSize: 35, fontWeight: FontWeight.bold),
          ),
          const SizedBox(
            height: 10,
          ),
          const Text(
              'Stay up to date with our latest news, campaigns and ways to get involved.',
              style: TextStyle(
                fontSize: 20,
              )),
          const SizedBox(
            height: 15,
          ),
          Container(
            width: MediaQuery.of(context).size.width * 0.9,
            child: Form(
              key: _formKey,
              child: Column(
                children: [
                  // First Name Field
                  TextFormField(
                    controller: _firstNameController,
                    decoration: const InputDecoration(
                      fillColor: Colors.white,
                      filled: true,
                      labelText: 'First Name',
                      border: OutlineInputBorder(borderSide: BorderSide.none),
                    ),
                    validator: (value) {
                      value = _sanitizeInput(value);
                      if (value == null || value.isEmpty) {
                        return 'Please enter your first name';
                      }
                      return null;
                    },
                  ),
                  const SizedBox(height: 16),

                  // Last Name Field
                  TextFormField(
                    controller: _lastNameController,
                    decoration: const InputDecoration(
                      fillColor: Colors.white,
                      filled: true,
                      labelText: 'Last Name',
                      border: OutlineInputBorder(borderSide: BorderSide.none),
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
                      border: OutlineInputBorder(borderSide: BorderSide.none),
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
                    child: ElevatedButton(
                      style: ButtonStyle(
                          backgroundColor: const WidgetStatePropertyAll(
                              Color.fromARGB(255, 69, 65, 54)),
                          foregroundColor:
                              const WidgetStatePropertyAll(Colors.white),
                          fixedSize: WidgetStatePropertyAll(
                              Size(MediaQuery.of(context).size.width, 50))),
                      onPressed: _submitForm,
                      child: const Text('Subscribe'),
                    ),
                  ),
                ],
              ),
            ),
          ),
        ]),
      ),
    );
  }
}
