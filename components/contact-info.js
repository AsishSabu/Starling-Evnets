import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { MapPin, Phone, Mail, Clock, Award, Users, Calendar, Sparkles } from "lucide-react"

export function ContactInfo() {
  return (
    <section className="py-12 md:py-20 bg-gradient-to-br from-rose-50/50 to-purple-50/30">
      <div className="container mx-auto px-4">
        <div className="space-y-8">
          {/* Contact Information */}
          <Card className="bg-white/80 backdrop-blur-xl border-0 shadow-xl">
            <CardContent className="p-8">
              <div className="flex items-center mb-6">
                <Sparkles className="w-6 h-6 text-rose-500 mr-2 animate-pulse" />
                <h3 className="text-2xl font-light">Contact Information</h3>
              </div>

              <div className="space-y-6">
                <div className="flex items-start space-x-4 group">
                  <div className="bg-rose-100 p-3 rounded-full group-hover:bg-rose-200 transition-colors duration-300">
                    <MapPin className="h-6 w-6 text-rose-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1 text-gray-800">Our Location</h4>
                    <p className="text-gray-600">
                      123 Event Street, Downtown
                      <br />
                      New York, NY 10001
                    </p>
                    <Button variant="link" className="p-0 h-auto text-rose-600 hover:text-rose-700">
                      Get Directions →
                    </Button>
                  </div>
                </div>

                <div className="flex items-start space-x-4 group">
                  <div className="bg-purple-100 p-3 rounded-full group-hover:bg-purple-200 transition-colors duration-300">
                    <Phone className="h-6 w-6 text-purple-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1 text-gray-800">Phone Numbers</h4>
                    <p className="text-gray-600">
                      Main: +1 (555) 123-4567
                      <br />
                      Emergency: +1 (555) 987-6543
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 group">
                  <div className="bg-amber-100 p-3 rounded-full group-hover:bg-amber-200 transition-colors duration-300">
                    <Mail className="h-6 w-6 text-amber-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1 text-gray-800">Email Addresses</h4>
                    <p className="text-gray-600">
                      General: info@starlingevents.com
                      <br />
                      Bookings: bookings@starlingevents.com
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 group">
                  <div className="bg-green-100 p-3 rounded-full group-hover:bg-green-200 transition-colors duration-300">
                    <Clock className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1 text-gray-800">Business Hours</h4>
                    <div className="text-gray-600 space-y-1">
                      <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                      <p>Saturday: 10:00 AM - 4:00 PM</p>
                      <p>Sunday: By Appointment Only</p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Why Choose Us */}
          <Card className="bg-gradient-to-br from-rose-500/5 to-purple-500/5 border border-rose-100 shadow-xl">
            <CardContent className="p-8">
              <h3 className="text-2xl font-light mb-6 text-center">Why Choose Starling Events?</h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex items-center space-x-3">
                  <div className="bg-rose-100 p-2 rounded-full">
                    <Award className="h-5 w-5 text-rose-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">5+ Years Experience</h4>
                    <p className="text-sm text-gray-600">Proven track record of success</p>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <div className="bg-purple-100 p-2 rounded-full">
                    <Users className="h-5 w-5 text-purple-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">500+ Happy Clients</h4>
                    <p className="text-sm text-gray-600">Satisfied customers worldwide</p>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <div className="bg-amber-100 p-2 rounded-full">
                    <Calendar className="h-5 w-5 text-amber-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">24/7 Support</h4>
                    <p className="text-sm text-gray-600">Always here when you need us</p>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <div className="bg-green-100 p-2 rounded-full">
                    <Sparkles className="h-5 w-5 text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Custom Solutions</h4>
                    <p className="text-sm text-gray-600">Tailored to your unique vision</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Quick Response Guarantee */}
          <Card className="bg-gradient-to-r from-rose-500 to-purple-500 text-white shadow-xl">
            <CardContent className="p-8 text-center">
              <h3 className="text-2xl font-light mb-4">Quick Response Guarantee</h3>
              <p className="mb-6 opacity-90">
                We respond to all inquiries within 2 hours during business hours. For urgent matters, call us directly
                for immediate assistance.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="secondary" className="bg-white text-rose-600 hover:bg-gray-100">
                  <Phone className="h-4 w-4 mr-2" />
                  Call Now
                </Button>
                <Button variant="outline" className="border-white text-white hover:bg-white/10">
                  <Mail className="h-4 w-4 mr-2" />
                  Email Us
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
