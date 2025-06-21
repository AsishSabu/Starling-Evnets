"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  MessageCircle,
  Copy,
  Check,
} from "lucide-react";
import { useState } from "react";

export function ContactSection() {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const handleCopyEmail = async () => {
    await navigator.clipboard.writeText("starlingeventscmt@gmail.com");
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleCopyPhone = async () => {
    await navigator.clipboard.writeText("+919400632524");
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2000);
  };

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
          <h2 className="text-5xl md:text-6xl font-light mb-8 leading-tight text-gray-800">
            Contact Our{" "}
            <span className="bg-gradient-to-r from-rose-500 via-purple-500 to-amber-500 bg-clip-text text-transparent font-medium">
              Expert Team
            </span>
          </h2>
          <p className="text-xl text-gray-600 font-light max-w-4xl mx-auto leading-relaxed">
            Connect with Starling Events&apos; professional event planning
            specialists. We&apos;re committed to delivering exceptional service
            and creating unforgettable experiences for your special occasions.
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
          <Card className="shadow-2xl border-0 bg-gradient-to-br from-white via-rose-50/30 to-purple-50/30 backdrop-blur-xl">
            <CardContent className="px-8">
              <div className="space-y-6">
                <div className="text-center py-6">
                  <div className="bg-gradient-to-r from-rose-400 via-purple-400 to-amber-400 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                    <Phone className="h-10 w-10 text-white" />
                  </div>
                  <h3 className="text-2xl font-semibold mb-3 text-gray-800">
                    Ready to Get Started?
                  </h3>
                  <p className="text-gray-600 mb-8 leading-relaxed">
                    Contact our professional team today for a complimentary
                    consultation and detailed project proposal.
                  </p>

                  <div className="space-y-4">
                    {/* Beautiful Contact Methods */}
                    <div className="grid grid-cols-1 gap-4">
                      <a href="tel:+919400632524">
                        <Button
                          className="w-full bg-gradient-to-r from-rose-500 to-purple-500 hover:from-rose-600 hover:to-purple-600 text-white shadow-lg"
                          size="lg"
                        >
                          <Phone className="h-5 w-5 mr-3" />
                          Call: +91 94006 32524
                        </Button>
                      </a>

                      <Button
                        className="w-full bg-green-500 hover:bg-green-600 text-white shadow-lg"
                        size="lg"
                        onClick={() =>
                          window.open(
                            "https://wa.me/919400632524?text=Hello! I would like to schedule a consultation for professional event planning services with Starling Events.",
                            "_blank"
                          )
                        }
                      >
                        <MessageCircle className="h-5 w-5 mr-3" />
                        WhatsApp Business
                      </Button>

                      <a href="mailto:starlingeventscmt@gmail.com?subject=Professional%20Event%20Planning%20Consultation%20Request">
                        <Button
                          variant="outline"
                          className="w-full border-2 border-rose-200 text-rose-600 hover:bg-rose-50 shadow-lg"
                          size="lg"
                        >
                          <Mail className="h-5 w-5 mr-3" />
                          Email Consultation Request
                        </Button>
                      </a>
                    </div>

                    {/* Beautiful Copy Actions */}
                    <div className="flex gap-2 pt-4">
                      <Button
                        variant="outline"
                        size="sm"
                        className="flex-1 text-xs border-rose-200 text-rose-600 hover:bg-rose-50"
                        onClick={handleCopyPhone}
                      >
                        {copiedPhone ? (
                          <>
                            <Check className="h-3 w-3 mr-1" />
                            Phone Copied
                          </>
                        ) : (
                          <>
                            <Copy className="h-3 w-3 mr-1" />
                            Copy Phone
                          </>
                        )}
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        className="flex-1 text-xs border-purple-200 text-purple-600 hover:bg-purple-50"
                        onClick={handleCopyEmail}
                      >
                        {copiedEmail ? (
                          <>
                            <Check className="h-3 w-3 mr-1" />
                            Email Copied
                          </>
                        ) : (
                          <>
                            <Copy className="h-3 w-3 mr-1" />
                            Copy Email
                          </>
                        )}
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Google Map Section */}

        <div className="mt-20">
          <div className="text-center mb-12">
            <h3 className="text-4xl font-light mb-6 text-gray-800">
              Visit Our{" "}
              <span className="bg-gradient-to-r from-rose-500 via-purple-500 to-amber-500 bg-clip-text text-transparent font-medium">
                Office
              </span>
            </h3>
            <p className="text-xl text-gray-600 font-light max-w-3xl mx-auto">
              Schedule an in-person consultation at our Cumbummettu office to
              discuss your event planning requirements with our team.
            </p>
          </div>

          <Card className="overflow-hidden shadow-2xl border-0 bg-gradient-to-br from-white to-rose-50/30 p-0">
            <div className="relative h-96 md:h-[500px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3931.338245394719!2d77.2159058!3d9.746567!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b07016a6c2aa4b9%3A0xf221f750e92bf651!2sStarling%20Events!5e0!3m2!1sen!2sin!4v1718013520101!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0 rounded-lg"
              />
              <a
                href="https://www.google.com/maps/dir/?api=1&destination=9.746567,77.2159058"
                target="_blank"
                rel="noopener noreferrer"
                className="absolute top-4 right-4"
              >
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-rose-500 to-purple-500 hover:from-rose-600 hover:to-purple-600 text-white shadow-lg backdrop-blur-sm"
                >
                  <MapPin className="h-5 w-5 mr-2" />
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
