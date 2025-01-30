import 'package:flutter/material.dart';

class DonateTabletPage extends StatefulWidget {
  const DonateTabletPage({super.key});

  @override
  State<DonateTabletPage> createState() => _DonateWebPageState();
}

class _DonateWebPageState extends State<DonateTabletPage> {
  bool isButtonDisabled = true;
  // Initially disable the button
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text('Charity Donation'),
        backgroundColor: Colors.blueAccent,
      ),
      body: Center(
        child: Padding(
          padding: const EdgeInsets.all(20.0),
          child: Column(
            mainAxisAlignment: MainAxisAlignment.center,
            crossAxisAlignment: CrossAxisAlignment.center,
            children: [
              // Heading Text
              const Text(
                'Support a Cause, Make a Difference!',
                style: TextStyle(
                  fontSize: 24,
                  fontWeight: FontWeight.bold,
                  color: Colors.black87,
                ),
              ),
              const SizedBox(height: 20),

              // Donation Amount Text
              Text(
                'Your generous donation can change lives.',
                style: TextStyle(
                  fontSize: 18,
                  fontStyle: FontStyle.italic,
                  color: Colors.grey[700],
                ),
                textAlign: TextAlign.center,
              ),
              const SizedBox(height: 30),

              // Donation Amount Field
              TextField(
                decoration: const InputDecoration(
                  labelText: 'Enter Donation Amount',
                  hintText: '\$50',
                  border: OutlineInputBorder(),
                ),
                keyboardType: TextInputType.number,
                onChanged: (value) {
                  // Enable the button when the amount is entered
                  setState(() {
                    isButtonDisabled = value.isEmpty;
                  });
                },
              ),
              const SizedBox(height: 20),

              // Disabled Donation Button
              ElevatedButton(
                onPressed: isButtonDisabled
                    ? null
                    : () {
                        // Perform the donation action (placeholder)
                        showDialog(
                          context: context,
                          builder: (BuildContext context) {
                            return AlertDialog(
                              title: const Text('Donation Successful!'),
                              content: const Text(
                                  'Thank you for your donation to the cause!'),
                              actions: [
                                TextButton(
                                  onPressed: () {
                                    Navigator.of(context).pop();
                                  },
                                  child: const Text('Close'),
                                ),
                              ],
                            );
                          },
                        );
                      },
                style: ElevatedButton.styleFrom(
                  padding:
                      const EdgeInsets.symmetric(horizontal: 30, vertical: 15),
                  textStyle: const TextStyle(
                      fontSize: 18, fontWeight: FontWeight.bold),
                  shape: RoundedRectangleBorder(
                    borderRadius: BorderRadius.circular(12),
                  ),
                ),
                child: const Text(
                  'Donate Now',
                  style: TextStyle(color: Colors.white),
                ),
              ),

              const SizedBox(height: 30),

              // Footer Information
              Text(
                'Powered by Flutter Charity',
                style: TextStyle(
                  fontSize: 14,
                  fontWeight: FontWeight.w300,
                  color: Colors.grey[600],
                ),
              ),
            ],
          ),
        ),
      ),
    );
  }
}
