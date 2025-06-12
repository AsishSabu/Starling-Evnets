import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { MapPin, Phone, Clock, Navigation, Car, Train } from "lucide-react"

export function ContactMap() {
  return (
    <section className="py-12 md:py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <Badge variant="outline" className="mb-4 px-6 py-2 text-sm font-light border-rose-200 text-rose-600">
            <MapPin className="w-4 h-4 mr-2" />
            Find Us
          </Badge>
          <h2 className="text-4xl font-light mb-4">Visit Our Studio</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Come see our event planning studio and meet our team. We d love to show you our portfolio and discuss your
            vision in person.
          </p>
        </div>

        <Card className="overflow-hidden shadow-2xl border-0">
          <div className="relative h-96 md:h-[500px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.9663095343008!2d-74.00425878459418!3d40.74844097932681!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259bf5c1654f3%3A0xc80f9cfce5383d5d!2sGoogle!5e0!3m2!1sen!2sus!4v1635959542207!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="absolute inset-0"
            ></iframe>

            {/* Map Overlay with Contact Info */}
            <div className="absolute top-6 left-6 bg-white/95 backdrop-blur-sm p-6 rounded-2xl shadow-xl max-w-sm">
              <div className="flex items-center space-x-3 mb-4">
                <div className="bg-gradient-to-r from-rose-500 to-purple-500 p-2 rounded-full">
                  <MapPin className="h-5 w-5 text-white" />
                </div>
                <span className="font-semibold text-gray-800">Starling Events Studio</span>
              </div>
              <div className="space-y-3 text-sm text-gray-600">
                <div className="flex items-center space-x-2">
                  <MapPin className="h-4 w-4 text-rose-500" />
                  <span>123 Event Street, Downtown, NY 10001</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Phone className="h-4 w-4 text-purple-500" />
                  <span>+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Clock className="h-4 w-4 text-amber-500" />
                  <span>Mon-Fri: 9AM-6PM</span>
                </div>
              </div>
              <Button
                size="sm"
                className="w-full mt-4 bg-gradient-to-r from-rose-500 to-purple-500 hover:from-rose-600 hover:to-purple-600"
              >
                <Navigation className="h-4 w-4 mr-2" />
                Get Directions
              </Button>
            </div>
          </div>
        </Card>

        {/* Transportation Info */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          <Card className="text-center p-6 hover:shadow-lg transition-shadow duration-300">
            <div className="bg-rose-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
              <Car className="h-6 w-6 text-rose-600" />
            </div>
            <h4 className="font-semibold mb-2 text-gray-800">By Car</h4>
            <p className="text-sm text-gray-600 mb-3">
              Free parking available for all clients. Valet service available for events.
            </p>
            <Badge variant="outline" className="text-xs">
              2 min walk from parking
            </Badge>
          </Card>

          <Card className="text-center p-6 hover:shadow-lg transition-shadow duration-300">
            <div className="bg-purple-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
              <Train className="h-6 w-6 text-purple-600" />
            </div>
            <h4 className="font-semibold mb-2 text-gray-800">Public Transport</h4>
            <p className="text-sm text-gray-600 mb-3">
              Easily accessible via subway and bus routes. Multiple stations nearby.
            </p>
            <Badge variant="outline" className="text-xs">
              5 min walk from station
            </Badge>
          </Card>

          <Card className="text-center p-6 hover:shadow-lg transition-shadow duration-300">
            <div className="bg-amber-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
              <Clock className="h-6 w-6 text-amber-600" />
            </div>
            <h4 className="font-semibold mb-2 text-gray-800">Flexible Hours</h4>
            <p className="text-sm text-gray-600 mb-3">Weekend and evening appointments available by request.</p>
            <Badge variant="outline" className="text-xs">
              Call to schedule
            </Badge>
          </Card>
        </div>
      </div>
    </section>
  )
}
