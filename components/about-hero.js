import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { Heart, Sparkles } from 'lucide-react'
import { Button } from "@/components/ui/button"

export function AboutHero() {
  return (
    <section className="relative py-16 md:py-20 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-rose-500/10 via-purple-500/10 to-amber-500/10"></div>

      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-1/4 w-64 h-64 bg-rose-200 rounded-full blur-3xl opacity-20 animate-pulse"></div>
        <div
          className="absolute bottom-10 right-1/4 w-80 h-80 bg-purple-200 rounded-full blur-3xl opacity-20 animate-pulse"
          style={{ animationDelay: "2s" }}
        ></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Content */}
          <div className="lg:pr-8">


            <h1 className="text-4xl md:text-5xl lg:text-6xl font-light mb-6 leading-tight">
              <span className="block">Creating</span>
              <span className="block bg-gradient-to-r from-rose-500 via-purple-500 to-amber-500 bg-clip-text text-transparent">
                Magical Moments
              </span>
            </h1>

            <div className="flex items-center mb-6">
              <div className="w-16 h-px bg-gradient-to-r from-transparent via-rose-300 to-transparent"></div>
              <Sparkles className="w-5 h-5 mx-4 text-rose-400 animate-pulse" />
              <div className="w-16 h-px bg-gradient-to-r from-transparent via-rose-300 to-transparent"></div>
            </div>

            <p className="text-lg md:text-xl text-gray-600 leading-relaxed mb-8">
              Since 2022, we&apos;ve been turning dreams into unforgettable celebrations. Every event tells a story, and
              we&apos;re here to make yours extraordinary.
            </p>

            <Button
              size="lg"
              className="bg-gradient-to-r from-rose-500 to-purple-500 hover:from-rose-600 hover:to-purple-600 text-white px-8 py-3 rounded-full"
            >
              Start Planning Your Event
            </Button>
          </div>

          <div className="relative w-full">
            <div className="relative aspect-[4/3] sm:aspect-[3/2] lg:aspect-[4/3] overflow-hidden rounded-2xl shadow-2xl">
              <Image src="/images/about2.jpg" alt="Beautiful event setup" fill  className="object-cover rounded-2xl " />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
            </div>

            <div className="absolute -bottom-3 -left-3 sm:-bottom-4 sm:-left-4 bg-white/95 backdrop-blur-sm p-4 sm:p-5 rounded-2xl shadow-xl">
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-rose-600">100+</div>
                <div className="text-xs sm:text-sm text-gray-600">Happy Clients</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
