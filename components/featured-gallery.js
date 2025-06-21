"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Crown, Sparkles, Heart, ArrowRight } from "lucide-react"
import { galleryData } from "@/data/gallery-data"
import Link from "next/link"

export function FeaturedGallery() {
  const { header, showcaseImage, galleryGrid, bouquetSection, bouquets, cta } = galleryData

  // Enhanced features with professional styling
  const leftFeature = {
    position: "left",
    title: "Luxury",
    subtitle: "Decoration",
    description:
      "Transform ordinary spaces into extraordinary experiences. Our bespoke decoration services blend elegance with innovation, creating atmospheres that captivate and inspire.",
    gradient: "from-rose-400 to-purple-500",
  }

  const rightFeature = {
    position: "right",
    title: "Bespoke",
    subtitle: "Events",
    description:
      "Every dream deserves a perfect execution. We collaborate intimately with our clients to bring their unique visions to life, crafting celebrations that reflect their personal story and style.",
    gradient: "from-purple-400 to-amber-500",
  }

  return (
    <section className="relative py-8 sm:py-10 lg:py-12 bg-gradient-to-b from-rose-50/30 via-white to-purple-50/30 overflow-hidden">
      {/* Beautiful Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-1/4 w-96 h-96 bg-gradient-to-r from-rose-200/20 to-pink-200/20 rounded-full blur-3xl animate-pulse"></div>
        <div
          className="absolute bottom-40 right-1/4 w-80 h-80 bg-gradient-to-r from-purple-200/20 to-indigo-200/20 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "2s" }}
        ></div>
        <div
          className="absolute top-1/2 left-1/3 w-64 h-64 bg-gradient-to-r from-amber-200/20 to-orange-200/20 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "4s" }}
        ></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Professional Header */}
        <div className="text-center mb-8 sm:mb-10 lg:mb-12">


          <div className="mb-8 sm:mb-10 lg:mb-12">
            <h2 className="text-5xl sm:text-6xl md:text-7xl  font-light text-gray-800 tracking-tight leading-tight">
              <span className="block">{header.title}</span>
              <span className="block bg-gradient-to-r from-rose-500 via-purple-500 to-amber-500 bg-clip-text text-transparent font-light">
                {header.subtitle}
              </span>
            </h2>
          </div>

          <div className="flex items-center justify-center mb-8 sm:mb-10">
            <div className="w-16 sm:w-20 h-px bg-gradient-to-r from-transparent via-rose-300 to-transparent"></div>
            <Crown className="w-6 h-6 mx-4 text-rose-400 animate-pulse" />
            <div className="w-16 sm:w-20 h-px bg-gradient-to-r from-transparent via-rose-300 to-transparent"></div>
          </div>

          <p className="max-w-4xl mx-auto text-xl sm:text-2xl text-gray-600 leading-relaxed font-light px-4 sm:px-0">
            {header.description}
          </p>
        </div>

        {/* Enhanced Main Feature Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center mb-24 sm:mb-28 lg:mb-32">
          {/* Left Feature */}
          {leftFeature && (
            <div className="lg:col-span-4 space-y-6 sm:space-y-8">
              <div className="relative">
                <div
                  className={`absolute -top-4 -left-4 w-8 h-8 bg-gradient-to-br ${leftFeature.gradient} rounded-full opacity-30 animate-pulse`}
                ></div>
                <h3 className="text-4xl sm:text-5xl font-light text-gray-800 mb-6 relative leading-tight">
                  <span className="block">{leftFeature.title}</span>
                  <span className="block text-rose-500">{leftFeature.subtitle}</span>
                </h3>
              </div>
              <div className={`w-12 h-px bg-gradient-to-r ${leftFeature.gradient} mb-6`}></div>
              <p className="text-gray-600 leading-relaxed text-lg font-light">{leftFeature.description}</p>
            </div>
          )}

          {/* Center Showcase */}
          <div className="lg:col-span-4 relative order-first lg:order-none">
            <div className="relative group">
              {/* Enhanced decorative frame */}
              <div className="absolute -inset-4 bg-gradient-to-r from-rose-400 via-purple-500 to-amber-500 rounded-2xl opacity-20 blur-xl group-hover:opacity-30 transition-opacity duration-500"></div>
              <div className="relative aspect-[4/5] overflow-hidden rounded-2xl shadow-2xl bg-white">
                <Image
                  src={showcaseImage.src || "/placeholder.svg?height=600&width=480"}
                  alt={showcaseImage.alt}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>

                {/* Professional floating badge */}
                <div className="absolute top-6 right-6 bg-white/95 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg">
                  <div className="flex items-center space-x-2">
                    <Heart className="w-4 h-4 text-rose-500 animate-pulse" />
                    <span className="text-sm font-medium text-gray-700">Featured Work</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Feature */}
          {rightFeature && (
            <div className="lg:col-span-4 space-y-6 sm:space-y-8">
              <div className="relative">
                <div
                  className={`absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-br ${rightFeature.gradient} rounded-full opacity-30 animate-pulse`}
                ></div>
                <h3 className="text-4xl sm:text-5xl font-light text-gray-800 mb-6 relative text-left lg:text-right leading-tight">
                  <span className="block">{rightFeature.title}</span>
                  <span className="block text-purple-500">{rightFeature.subtitle}</span>
                </h3>
              </div>
              <div className={`w-12 h-px bg-gradient-to-r ${rightFeature.gradient} mb-6 lg:ml-auto`}></div>
              <p className="text-gray-600 leading-relaxed text-lg font-light text-left lg:text-right">
                {rightFeature.description}
              </p>
            </div>
          )}
        </div>

        {/* Professional Gallery Grid */}
        <div className="mb-24 sm:mb-28 lg:mb-32">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {galleryGrid.map((item) => (
              <div key={item.id} className="group relative">
                <div className="relative aspect-square overflow-hidden rounded-2xl shadow-xl bg-white hover:shadow-2xl transition-all duration-500 hover:scale-105">
                  <Image
                    src={item.image || "/placeholder.svg?height=400&width=400"}
                    alt={item.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Enhanced Bridal Bouquet Section */}
        <div className="relative">
          <div className="text-center mb-16 sm:mb-20">
            <h3 className="text-5xl sm:text-6xl md:text-7xl font-light text-gray-800 mb-8 sm:mb-10">
              <span className="block">{bouquetSection.title}</span>
              <span className="block bg-gradient-to-r from-rose-400 to-purple-500 bg-clip-text text-transparent">
                {bouquetSection.subtitle}
              </span>
            </h3>
            <div className="flex items-center justify-center mb-8 sm:mb-10">
              <div className="w-20 h-px bg-gradient-to-r from-transparent via-rose-300 to-transparent"></div>
              <Sparkles className="w-5 h-5 mx-4 text-rose-400 animate-pulse" />
              <div className="w-20 h-px bg-gradient-to-r from-transparent via-rose-300 to-transparent"></div>
            </div>
            <p className="max-w-3xl mx-auto text-lg sm:text-xl text-gray-600 font-light leading-relaxed px-4 sm:px-0">
              {bouquetSection.description}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {bouquets.map((bouquet) => (
              <div key={bouquet.id} className="group relative">
                <div className="relative aspect-[3/4] overflow-hidden rounded-2xl shadow-xl bg-white hover:shadow-2xl transition-all duration-500 hover:scale-105">
                  <Image
                    src={bouquet.image || "/placeholder.svg?height=500&width=375"}
                    alt={bouquet.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>


                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Professional Call to Action */}
        <div className="text-center mt-20 sm:mt-24">
          <div className="max-w-2xl mx-auto mb-8">
            <h4 className="text-2xl sm:text-3xl font-light text-gray-800 mb-4">Ready to Create Your Dream Event?</h4>
            <p className="text-gray-600 font-light">
              Explore our complete gallery and discover the magic we can create for your special occasion.
            </p>
          </div>

          <Link href="/gallery">
            <Button
              size="lg"
              className="group relative overflow-hidden bg-gradient-to-r from-rose-500 via-purple-500 to-amber-500 hover:from-rose-600 hover:via-purple-600 hover:to-amber-600 text-white px-12 py-4 text-lg font-light shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
            >
              <span className="relative z-10 flex items-center">
                {cta.text}
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
              </span>
              <div className="absolute inset-0 bg-white/20 translate-x-full group-hover:translate-x-0 transition-transform duration-300"></div>
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
