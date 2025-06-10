"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight, Play } from "lucide-react"
import { Button } from "@/components/ui/button"

const carouselItems = [
  {
    id: 1,
    title: "Luxury Wedding Events",
    subtitle: "Creating Unforgettable Moments",
    description: "Transform your special day into a magical celebration with our premium wedding planning services.",
    image: "/images/img1.jpg",
    cta: "Plan Your Wedding",
  },
  {
    id: 2,
    title: "Corporate Events",
    subtitle: "Professional Excellence",
    description: "Elevate your business gatherings with our sophisticated corporate event management solutions.",
    image: "/images/img2.jpg",
    cta: "Book Corporate Event",
  },
  {
    id: 3,
    title: "Birthday Celebrations",
    subtitle: "Make Every Year Special",
    description: "From intimate gatherings to grand celebrations, we make every birthday unforgettable.",
    image: "/images/img3.jpg",
    cta: "Celebrate With Us",
  },
]

export function HeroCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % carouselItems.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % carouselItems.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + carouselItems.length) % carouselItems.length)
  }

  return (
    <section className="relative h-[70vh] md:h-[80vh] overflow-hidden">
      {carouselItems.map((item, index) => (
        <div
          key={item.id}
          className={`absolute inset-0 transition-transform duration-700 ease-in-out ${
            index === currentSlide ? "translate-x-0" : index < currentSlide ? "-translate-x-full" : "translate-x-full"
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
            <div className="absolute inset-0 bg-black/40" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="container mx-auto px-4">
                <div className="max-w-3xl text-center text-white">
                  <h2 className="text-sm md:text-base font-medium mb-4 text-primary-foreground/80">{item.subtitle}</h2>
                  <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">{item.title}</h1>
                  <p className="text-lg md:text-xl mb-8 text-primary-foreground/90 max-w-2xl mx-auto">
                    {item.description}
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button size="lg" className="text-lg px-8 py-6">
                      {item.cta}
                    </Button>
                    <Button
                      size="lg"
                      variant="outline"
                      className="text-lg px-8 py-6 bg-white/10 border-white/20 text-white hover:bg-white/20"
                    >
                      <Play className="h-5 w-5 mr-2" />
                      Watch Video
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Arrows */}
      <Button
        variant="ghost"
        size="icon"
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 text-white border-white/20"
        onClick={prevSlide}
      >
        <ChevronLeft className="h-6 w-6" />
      </Button>
      <Button
        variant="ghost"
        size="icon"
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 text-white border-white/20"
        onClick={nextSlide}
      >
        <ChevronRight className="h-6 w-6" />
      </Button>

      {/* Dots Indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex space-x-2">
        {carouselItems.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full transition-all ${index === currentSlide ? "bg-white" : "bg-white/50"}`}
            onClick={() => setCurrentSlide(index)}
          />
        ))}
      </div>
    </section>
  )
}
