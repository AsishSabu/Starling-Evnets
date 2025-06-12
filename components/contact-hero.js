import { Badge } from "@/components/ui/badge"
import { Phone, Mail, MapPin, Sparkles } from "lucide-react"

export function ContactHero() {
  return (
    <section className="relative py-20 md:py-28 overflow-hidden">
      {/* Background with gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-rose-500/10 via-purple-500/10 to-amber-500/10"></div>

      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-1/4 w-64 h-64 bg-rose-200 rounded-full blur-3xl opacity-20 animate-float"></div>
        <div
          className="absolute bottom-10 right-1/4 w-80 h-80 bg-purple-200 rounded-full blur-3xl opacity-20 animate-float"
          style={{ animationDelay: "1s" }}
        ></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <Badge variant="outline" className="mb-6 px-6 py-2 text-sm font-light border-rose-200 text-rose-600">
            <Phone className="w-4 h-4 mr-2" />
            Get In Touch
          </Badge>

          <h1 className="text-5xl md:text-7xl font-extralight mb-6 leading-tight">
            <span className="block">Let's Create</span>
            <span className="block bg-gradient-to-r from-rose-500 via-purple-500 to-amber-500 bg-clip-text text-transparent font-light">
              Something Amazing
            </span>
          </h1>

          <div className="flex items-center justify-center mb-8">
            <div className="w-16 h-px bg-gradient-to-r from-transparent via-rose-300 to-transparent"></div>
            <Sparkles className="w-5 h-5 mx-4 text-rose-400 animate-pulse" />
            <div className="w-16 h-px bg-gradient-to-r from-transparent via-rose-300 to-transparent"></div>
          </div>

          <p className="text-xl text-gray-600 leading-relaxed font-light max-w-3xl mx-auto mb-12">
            Ready to turn your vision into reality? We're here to listen, understand, and create the perfect event
            experience for you. Let's start planning your unforgettable moment.
          </p>

          {/* Quick contact info */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="bg-white/60 backdrop-blur-xl rounded-2xl p-6 border border-white/50 hover:bg-white/80 transition-all duration-500 hover:scale-105 hover:shadow-xl group">
              <div className="bg-rose-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-rose-200 transition-colors duration-300">
                <Phone className="h-6 w-6 text-rose-600" />
              </div>
              <h3 className="font-semibold text-gray-800 mb-2">Call Us</h3>
              <p className="text-gray-600 text-sm">+1 (555) 123-4567</p>
            </div>

            <div className="bg-white/60 backdrop-blur-xl rounded-2xl p-6 border border-white/50 hover:bg-white/80 transition-all duration-500 hover:scale-105 hover:shadow-xl group">
              <div className="bg-purple-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-purple-200 transition-colors duration-300">
                <Mail className="h-6 w-6 text-purple-600" />
              </div>
              <h3 className="font-semibold text-gray-800 mb-2">Email Us</h3>
              <p className="text-gray-600 text-sm">info@starlingevents.com</p>
            </div>

            <div className="bg-white/60 backdrop-blur-xl rounded-2xl p-6 border border-white/50 hover:bg-white/80 transition-all duration-500 hover:scale-105 hover:shadow-xl group">
              <div className="bg-amber-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-amber-200 transition-colors duration-300">
                <MapPin className="h-6 w-6 text-amber-600" />
              </div>
              <h3 className="font-semibold text-gray-800 mb-2">Visit Us</h3>
              <p className="text-gray-600 text-sm">123 Event Street, Downtown</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
