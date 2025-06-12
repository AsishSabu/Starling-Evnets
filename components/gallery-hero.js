import { Badge } from "@/components/ui/badge"
import { Camera, Sparkles } from "lucide-react"

export function GalleryHero() {
  return (
    <section className="relative py-20 md:py-28 overflow-hidden">
      {/* Background with gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-rose-500/20 via-purple-500/20 to-amber-500/20 opacity-30"></div>

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
            <Camera className="w-4 h-4 mr-2" />
            Our Portfolio
          </Badge>

          <h1 className="text-5xl md:text-7xl font-extralight mb-6 leading-tight">
            <span className="block">Moments</span>
            <span className="block bg-gradient-to-r from-rose-500 via-purple-500 to-amber-500 bg-clip-text text-transparent font-light">
              We ve Crafted
            </span>
          </h1>

          <div className="flex items-center justify-center mb-8">
            <div className="w-16 h-px bg-gradient-to-r from-transparent via-rose-300 to-transparent"></div>
            <Sparkles className="w-5 h-5 mx-4 text-rose-400 animate-pulse" />
            <div className="w-16 h-px bg-gradient-to-r from-transparent via-rose-300 to-transparent"></div>
          </div>

          <p className="text-xl text-gray-600 leading-relaxed font-light max-w-3xl mx-auto">
            Explore our collection of stunning events, beautiful decorations, and unforgettable moments we ve created
            for our clients. Each image tells a story of dreams brought to life.
          </p>
        </div>
      </div>
    </section>
  )
}
