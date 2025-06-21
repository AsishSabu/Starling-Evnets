"use client"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight, Sparkles, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const carouselItems = [
  {
    id: 1,
    title: "Dream Wedding Events",
    subtitle: "We Plan to Make Your Every Moment Just as a Dream",
    description: "Complete wedding planning with decoration, beautician services, photography, and catering.",
    image: "/images/hero4.jpg",
    accent: "rose",
    gradient: "from-rose-500 via-pink-500 to-rose-600",
    textGradient: "from-rose-300 via-pink-300 to-rose-400",
    overlay: "from-black/80 via-black/60 to-black/80", // Stronger overlay for bright wedding image
  },
  {
    id: 2,
    title: "Live Music Concerts",
    subtitle: "Where Words Fail, Music Speaks",
    description: "Professional live music events with bands, orchestra, choir, and complete sound setup.",
    image: "/images/hero3.jpg",
    accent: "blue",
    gradient: "from-blue-500 via-indigo-500 to-purple-600",
    textGradient: "from-blue-300 via-indigo-300 to-purple-400",
    overlay: "from-black/70 via-black/40 to-black/70", // Medium overlay for blue-toned image
  },
  {
    id: 3,
    title: "DJ Nights & Parties",
    subtitle: "Beats That Move Your Soul",
    description:
      "Professional DJ services with tested beats, lighting, and sound systems for ultimate party experience.",
    image: "/images/hero2.jpg",
    accent: "amber",
    gradient: "from-amber-500 via-orange-500 to-amber-600",
    textGradient: "from-amber-300 via-orange-300 to-amber-400",
    overlay: "from-black/60 via-black/30 to-black/70", // Lighter overlay for warm-toned image
  },
]

export function HeroCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isLoaded, setIsLoaded] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  const [isMounted, setIsMounted] = useState(false)
  const intervalRef = useRef(null)

  useEffect(() => {
    setIsLoaded(true)
    setIsMounted(true)
    const checkMobile = () => setIsMobile(window.innerWidth < 768)
    checkMobile()
    window.addEventListener("resize", checkMobile)

    startAutoSlide()

    return () => {
      clearInterval(intervalRef.current)
      window.removeEventListener("resize", checkMobile)
    }
  }, [])

  const startAutoSlide = () => {
    clearInterval(intervalRef.current)
    intervalRef.current = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % carouselItems.length)
    }, 8000)
  }

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % carouselItems.length)
    startAutoSlide()
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + carouselItems.length) % carouselItems.length)
    startAutoSlide()
  }

  const currentItem = carouselItems[currentSlide]

  return (
    <section className="relative h-[90vh] min-h-[600px] overflow-hidden bg-gray-900">
      {/* Beautiful Floating Elements */}
      {isMounted && (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(isMobile ? 8 : 15)].map((_, i) => (
            <div
              key={i}
              className={`absolute w-1 h-1 sm:w-2 sm:h-2 bg-gradient-to-r ${currentItem.textGradient} rounded-full opacity-20 animate-pulse`}
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 4}s`,
                animationDuration: `${3 + Math.random() * 2}s`,
              }}
            />
          ))}
        </div>
      )}

      {carouselItems.map((item, index) => (
        <div
          key={item.id}
          className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
            index === currentSlide
              ? "translate-x-0 opacity-100 scale-100"
              : index < currentSlide
                ? "-translate-x-full opacity-0 scale-105"
                : "translate-x-full opacity-0 scale-95"
          }`}
        >
          <div className="relative h-full">
            <Image
              src={item.image || "/placeholder.svg"}
              alt={item.title}
              fill
              className="object-cover"
              priority={index === 0}
            />
            {/* Dynamic overlay based on image */}
            <div className={`absolute inset-0 bg-gradient-to-br ${item.overlay}`} />

            {/* Professional Content Layout */}
            <div className="absolute inset-0 flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-16 sm:pt-20">
              <div className="w-full max-w-6xl mx-auto">
                <div
                  className={`text-center text-white transition-all duration-1200 ease-out ${
                    index === currentSlide && isLoaded ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
                  }`}
                >
                  {/* Professional Badge */}
                  <div
                    className={`inline-flex items-center space-x-2 bg-white/15 backdrop-blur-xl border border-white/25 rounded-full px-4 py-2 mb-4 sm:mb-6 transition-all duration-800 ease-out ${
                      index === currentSlide ? "scale-100 opacity-100" : "scale-0 opacity-0"
                    }`}
                    style={{ animationDelay: "0.3s" }}
                  >
                    <Sparkles className="h-3 w-3 animate-spin" style={{ animationDuration: "3s" }} />
                    <span className="text-xs sm:text-sm font-medium tracking-wide">{item.subtitle}</span>
                  </div>

                  {/* Enhanced Title - Reduced Size */}
                  <div className="mb-4 sm:mb-6">
                    <h1
                      className={`text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-light leading-tight tracking-tight transition-all duration-1000 ease-out ${
                        index === currentSlide ? "translate-y-0 opacity-100" : "translate-y-16 opacity-0"
                      }`}
                      style={{ animationDelay: "0.5s" }}
                    >
                      <span className="block text-white drop-shadow-lg">{item.title.split(" ")[0]}</span>
                      <span
                        className={`block bg-gradient-to-r ${item.textGradient} bg-clip-text text-transparent drop-shadow-lg`}
                      >
                        {item.title.split(" ").slice(1).join(" ")}
                      </span>
                    </h1>
                  </div>

                  {/* Professional Description - Reduced Size */}
                  <div
                    className={`mb-12 sm:mb-16 transition-all duration-1000 ease-out ${
                      index === currentSlide ? "translate-y-0 opacity-100" : "translate-y-16 opacity-0"
                    }`}
                    style={{ animationDelay: "0.7s" }}
                  >
                    <p className="text-base sm:text-lg lg:text-xl text-white/95 max-w-3xl mx-auto leading-relaxed font-light tracking-wide drop-shadow-md">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Beautiful Navigation Arrows */}
      <Button
        variant="ghost"
        size="icon"
        className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 group"
        onClick={prevSlide}
      >
        <div className="relative w-14 h-14 sm:w-16 sm:h-16 bg-white/10 hover:bg-white/20 backdrop-blur-xl border border-white/20 rounded-full transition-all duration-500 hover:scale-110 shadow-xl hover:shadow-2xl">
          {/* Gradient ring on hover */}
          <div
            className={`absolute inset-0 rounded-full bg-gradient-to-r ${currentItem.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-500`}
          ></div>

          {/* Inner glow effect */}
          <div className="absolute inset-1 rounded-full bg-white/5 group-hover:bg-white/10 transition-colors duration-300"></div>

          {/* Icon */}
          <div className="absolute inset-0 flex items-center justify-center">
            <ChevronLeft className="h-6 w-6 sm:h-7 sm:w-7 text-white group-hover:-translate-x-1 transition-all duration-300 drop-shadow-lg" />
          </div>

          {/* Ripple effect */}
          <div className="absolute inset-0 rounded-full bg-white/20 scale-0 group-hover:scale-100 opacity-0 group-hover:opacity-100 transition-all duration-700"></div>
        </div>
      </Button>

      <Button
        variant="ghost"
        size="icon"
        className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 group"
        onClick={nextSlide}
      >
        <div className="relative w-14 h-14 sm:w-16 sm:h-16 bg-white/10 hover:bg-white/20 backdrop-blur-xl border border-white/20 rounded-full transition-all duration-500 hover:scale-110 shadow-xl hover:shadow-2xl">
          {/* Gradient ring on hover */}
          <div
            className={`absolute inset-0 rounded-full bg-gradient-to-r ${currentItem.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-500`}
          ></div>

          {/* Inner glow effect */}
          <div className="absolute inset-1 rounded-full bg-white/5 group-hover:bg-white/10 transition-colors duration-300"></div>

          {/* Icon */}
          <div className="absolute inset-0 flex items-center justify-center">
            <ChevronRight className="h-6 w-6 sm:h-7 sm:w-7 text-white group-hover:translate-x-1 transition-all duration-300 drop-shadow-lg" />
          </div>

          {/* Ripple effect */}
          <div className="absolute inset-0 rounded-full bg-white/20 scale-0 group-hover:scale-100 opacity-0 group-hover:opacity-100 transition-all duration-700"></div>
        </div>
      </Button>

      {/* Enhanced Dots Indicator */}
      <div className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 flex space-x-3 sm:space-x-4">
        {carouselItems.map((_, index) => (
          <button
            key={index}
            className={`relative transition-all duration-500 hover:scale-110 ${
              index === currentSlide ? "w-8 sm:w-12 h-2 sm:h-3" : "w-2 sm:w-3 h-2 sm:h-3"
            }`}
            onClick={() => {
              setCurrentSlide(index)
              startAutoSlide()
            }}
          >
            <div
              className={`absolute inset-0 rounded-full transition-all duration-500 ${
                index === currentSlide
                  ? `bg-gradient-to-r ${currentItem.gradient} shadow-lg`
                  : "bg-white/50 hover:bg-white/70"
              }`}
            />
            {index === currentSlide && <div className="absolute inset-0 bg-white/30 rounded-full animate-pulse" />}
          </button>
        ))}
      </div>

      {/* Professional Progress Bar */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/20">
        <div
          className={`h-full bg-gradient-to-r ${currentItem.gradient} transition-all duration-8000 ease-linear`}
          style={{
            width: currentSlide === currentSlide ? "100%" : "0%",
            animation: currentSlide === currentSlide ? "progress 8s linear infinite" : "none",
          }}
        />
      </div>

      {/* Professional Scroll Indicator */}
      <div className="absolute bottom-6 sm:bottom-8 right-6 sm:right-8 hidden lg:flex flex-col items-center space-y-2 text-white/70">
        <span className="text-xs font-medium tracking-widest writing-mode-vertical">SCROLL</span>
        <div className="w-px h-8 bg-gradient-to-b from-white/50 to-transparent animate-pulse" />
        <ArrowRight className="w-3 h-3 rotate-90 animate-bounce" />
      </div>
    </section>
  )
}
