import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { Heart, Sparkles } from "lucide-react"

export function AboutHero() {
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
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <Badge variant="outline" className="mb-6 px-6 py-2 text-sm font-light border-rose-200 text-rose-600">
              <Heart className="w-4 h-4 mr-2" />
              Our Story
            </Badge>

            <h1 className="text-5xl md:text-6xl font-extralight mb-6 leading-tight">
              <span className="block">Creating</span>
              <span className="block bg-gradient-to-r from-rose-500 via-purple-500 to-amber-500 bg-clip-text text-transparent font-light">
                Magical Moments
              </span>
            </h1>

            <div className="flex items-center mb-8">
              <div className="w-16 h-px bg-gradient-to-r from-transparent via-rose-300 to-transparent"></div>
              <Sparkles className="w-5 h-5 mx-4 text-rose-400 animate-pulse" />
              <div className="w-16 h-px bg-gradient-to-r from-transparent via-rose-300 to-transparent"></div>
            </div>

            <p className="text-xl text-gray-600 leading-relaxed font-light mb-8">
              At Starling Events, we believe every celebration deserves to be extraordinary. For over five years, we've
              been transforming dreams into reality, creating unforgettable experiences that touch hearts and create
              lasting memories.
            </p>

            <p className="text-lg text-gray-600 leading-relaxed font-light">
              From intimate gatherings to grand celebrations, we bring passion, creativity, and meticulous attention to
              detail to every event we plan. Your vision is our inspiration, and your joy is our greatest reward.
            </p>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="relative aspect-[4/5] overflow-hidden rounded-2xl shadow-2xl">
              <Image
                src="/placeholder.svg?height=800&width=600&text=About+Us+Hero"
                alt="Starling Events team planning an event"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
            </div>

            {/* Floating elements */}
            <div className="absolute -top-6 -right-6 bg-white/90 backdrop-blur-sm p-4 rounded-2xl shadow-xl">
              <div className="text-center">
                <div className="text-2xl font-bold text-rose-600">500+</div>
                <div className="text-sm text-gray-600">Happy Clients</div>
              </div>
            </div>

            <div className="absolute -bottom-6 -left-6 bg-white/90 backdrop-blur-sm p-4 rounded-2xl shadow-xl">
              <div className="text-center">
                <div className="text-2xl font-bold text-purple-600">5+</div>
                <div className="text-sm text-gray-600">Years Experience</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
