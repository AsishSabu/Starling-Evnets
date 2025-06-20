"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MapPin, Phone, Mail, Clock} from "lucide-react";

export function ContactSection() {
  return (
    <section
      id="contact"
      className="py-10 bg-gradient-to-b from-muted/20 to-background"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">
            Get In Touch
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Lets Plan Your Perfect Event
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to create something amazing? Get in touch with our expert
            event planners and lets bring your vision to life.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold mb-6">
                Contact Information
              </h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Our Location</h4>
                    <p className="text-muted-foreground">
                      Starling Events
                      <br />
                      Cumbummettu
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <Phone className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Phone Number</h4>
                    <p className="text-muted-foreground">
                      +919400632524
                      <br />
                      +919061326616
                      <br />
                      +919947467440
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Email Address</h4>
                    <p className="text-muted-foreground">
                      starlingeventscmt@gmail.com
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <Clock className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Business Hours</h4>
                    <p className="text-muted-foreground">
                      Monday - Friday: 9:00 AM - 6:00 PM
                      <br />
                      Saturday: 10:00 AM - 4:00 PM
                      <br />
                      Sunday: Closed
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Information Card */}
          <Card className="shadow-xl">
            <CardHeader>
              <CardTitle className="text-2xl">Get In Touch</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="text-center py-8">
                  <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Phone className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">
                    Ready to Plan Your Event?
                  </h3>
                  <p className="text-muted-foreground mb-6">
                    Contact us today to discuss your vision and get a free
                    consultation.
                  </p>

                  <div className="space-y-4">
                    <a href="tel:+919400632524">
                      <Button className="w-full bg-gray-600" size="lg">
                        <Phone className="h-4 w-4 mr-2" />
                        Call Now: +919400632524
                      </Button>
                    </a>

                    <a href="mailto:starlingeventscmt@gmail.com?subject=Event%20Planning%20Inquiry">
                      <Button variant="outline" className="w-full" size="lg">
                        <Mail className="h-4 w-4 mr-2" />
                        Email: starlingeventscmt@gmail.com
                      </Button>
                    </a>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Google Map Section */}
        <div className="mt-20">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold mb-4">Find Our Location</h3>
            <p className="text-muted-foreground">
              Visit our office to discuss your event planning needs in person
            </p>
          </div>

          <Card className="overflow-hidden shadow-xl p-0">
            <div className="relative h-96 md:h-[500px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3931.338245394719!2d77.2159058!3d9.746567!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b07016a6c2aa4b9%3A0xf221f750e92bf651!2sStarling%20Events!5e0!3m2!1sen!2sin!4v1718013520101!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0"
              />
              <a
                href="https://www.google.com/maps/dir/?api=1&destination=9.746567,77.2159058"
                target="_blank"
                rel="noopener noreferrer"
                className="absolute top-1 right-2"
              >
                <Button size="sm" className="w-full mt-3 bg-gray-600">
                  Get Directions
                </Button>
              </a>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}
