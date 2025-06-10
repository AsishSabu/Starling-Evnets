import React from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Star, Crown, Sparkles } from "lucide-react"
import { galleryData } from "@/data/gallery-data"

export function FeaturedGallery() {
  const { header, mainFeatures, showcaseImage, galleryGrid, bouquetSection, bouquets, cta } = galleryData

  // Get left and right features
  const leftFeature = mainFeatures.find((feature) => feature.position === "left")
  const rightFeature = mainFeatures.find((feature) => feature.position === "right")

  // Helper function to render stars
  const renderStars = (count) => {
    return Array.from({ length: count }).map((_, index) => (
      <Star key={index} className="w-4 h-4 fill-amber-400 text-amber-400" />
    ))
  }

  return (
    <section className="relative py-32 bg-gradient-to-b from-slate-50 via-white to-rose-50/30 overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-32 h-32 bg-rose-200 rounded-full blur-3xl"></div>
        <div className="absolute bottom-40 right-20 w-48 h-48 bg-purple-200 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-amber-200 rounded-full blur-2xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Luxurious Header */}
        <div className="text-center mb-20">
          <Badge variant="outline" className="mb-6 px-6 py-2 text-sm font-light border-rose-200 text-rose-600">
            {React.createElement(header.badge.icon, { className: "w-4 h-4 mr-2" })}
            {header.badge.text}
          </Badge>
          <h2 className="text-6xl md:text-7xl lg:text-8xl font-extralight text-gray-900 mb-8 tracking-tight">
            {header.title}
            <span className="block bg-gradient-to-r from-rose-400 via-purple-500 to-amber-500 bg-clip-text text-transparent font-light">
              {header.subtitle}
            </span>
          </h2>
          <div className="flex items-center justify-center mb-10">
            <div className="w-16 h-px bg-gradient-to-r from-transparent via-rose-300 to-transparent"></div>
            <Crown className="w-6 h-6 mx-4 text-rose-400" />
            <div className="w-16 h-px bg-gradient-to-r from-transparent via-rose-300 to-transparent"></div>
          </div>
          <p className="max-w-4xl mx-auto text-xl text-gray-600 leading-relaxed font-light">{header.description}</p>
        </div>

        {/* Enhanced Main Feature Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center mb-32">
          {/* Left Column - Decoration */}
          {leftFeature && (
            <div className="lg:col-span-4 space-y-8">
              <div className="relative">
                <div
                  className={`absolute -top-4 -left-4 w-8 h-8 bg-gradient-to-br ${leftFeature.gradient} rounded-full opacity-20`}
                ></div>
                <h3 className="text-4xl md:text-5xl font-extralight text-gray-900 mb-6 relative">
                  {leftFeature.title}
                  <span className="block text-rose-500">{leftFeature.subtitle}</span>
                </h3>
              </div>
              <div className={`w-12 h-px bg-gradient-to-r ${leftFeature.gradient} mb-6`}></div>
              <p className="text-gray-600 leading-relaxed text-lg font-light">{leftFeature.description}</p>
              <div className="flex items-center space-x-4 pt-4">
                <Button
                  variant="outline"
                  className="group relative overflow-hidden border-2 border-gray-300 hover:border-rose-400 text-gray-700 hover:text-rose-600 px-8 py-3 transition-all duration-300"
                >
                  <span className="relative z-10">{leftFeature.buttonText}</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-rose-50 to-purple-50 translate-x-full group-hover:translate-x-0 transition-transform duration-300"></div>
                </Button>
                <div className="flex space-x-1">{renderStars(leftFeature.rating)}</div>
              </div>
            </div>
          )}

          {/* Center Column - Main Showcase */}
          <div className="lg:col-span-4 relative">
            <div className="relative group">
              {/* Decorative Frame */}
              <div className="absolute -inset-4 bg-gradient-to-r from-rose-400 via-purple-500 to-amber-500 rounded-2xl opacity-20 blur-xl group-hover:opacity-30 transition-opacity duration-500"></div>
              <div className="relative aspect-[3/4] overflow-hidden rounded-2xl shadow-2xl">
                <Image
                  src={showcaseImage.src || "/placeholder.svg"}
                  alt={showcaseImage.alt}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>

                {/* Floating Badge */}
                <div className="absolute top-6 right-6 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg">
                  <div className="flex items-center space-x-2">
                    {React.createElement(showcaseImage.badge.icon, { className: "w-4 h-4 text-rose-500" })}
                    <span className="text-sm font-medium text-gray-700">{showcaseImage.badge.text}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Custom Events */}
          {rightFeature && (
            <div className="lg:col-span-4 space-y-8">
              <div className="relative">
                <div
                  className={`absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-br ${rightFeature.gradient} rounded-full opacity-20`}
                ></div>
                <h3 className="text-4xl md:text-5xl font-extralight text-gray-900 mb-6 relative text-right">
                  {rightFeature.title}
                  <span className="block text-purple-500">{rightFeature.subtitle}</span>
                </h3>
              </div>
              <div className={`w-12 h-px bg-gradient-to-r ${rightFeature.gradient} mb-6 ml-auto`}></div>
              <p className="text-gray-600 leading-relaxed text-lg font-light text-right">{rightFeature.description}</p>
              <div className="flex items-center justify-end space-x-4 pt-4">
                <div className="flex space-x-1">{renderStars(rightFeature.rating)}</div>
                <Button
                  variant="outline"
                  className="group relative overflow-hidden border-2 border-gray-300 hover:border-purple-400 text-gray-700 hover:text-purple-600 px-8 py-3 transition-all duration-300"
                >
                  <span className="relative z-10">{rightFeature.buttonText}</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-50 to-amber-50 translate-x-full group-hover:translate-x-0 transition-transform duration-300"></div>
                </Button>
              </div>
            </div>
          )}
        </div>

        {/* Stylish Gallery Grid */}
        <div className="mb-32">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {galleryGrid.map((item) => (
              <div key={item.id} className="group relative">
                <div className="relative aspect-square overflow-hidden rounded-2xl shadow-xl">
                  <Image
                    src={item.image || "/placeholder.svg"}
                    alt={item.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                  {/* Overlay Content */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                    <Badge variant="secondary" className="mb-2 bg-white/20 text-white border-white/30">
                      {item.category}
                    </Badge>
                    <h4 className="text-xl font-light text-white mb-2">{item.title}</h4>
                    <p className="text-white/80 text-sm">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Luxurious Bridal Bouquet Section */}
        <div className="relative">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-6 px-6 py-2 text-sm font-light border-rose-200 text-rose-600">
              {React.createElement(bouquetSection.badge.icon, { className: "w-4 h-4 mr-2" })}
              {bouquetSection.badge.text}
            </Badge>
            <h3 className="text-5xl md:text-6xl font-extralight text-gray-900 mb-8">
              {bouquetSection.title}
              <span className="block bg-gradient-to-r from-rose-400 to-purple-500 bg-clip-text text-transparent">
                {bouquetSection.subtitle}
              </span>
            </h3>
            <div className="flex items-center justify-center mb-8">
              <div className="w-20 h-px bg-gradient-to-r from-transparent via-rose-300 to-transparent"></div>
              <Sparkles className="w-5 h-5 mx-4 text-rose-400" />
              <div className="w-20 h-px bg-gradient-to-r from-transparent via-rose-300 to-transparent"></div>
            </div>
            <p className="max-w-3xl mx-auto text-lg text-gray-600 font-light leading-relaxed">
              {bouquetSection.description}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {bouquets.map((bouquet) => (
              <div key={bouquet.id} className="group relative">
                <div className="relative aspect-[3/4] overflow-hidden rounded-2xl shadow-xl">
                  <Image
                    src={bouquet.image || "/placeholder.svg"}
                    alt={bouquet.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                  {/* Price Badge */}
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full shadow-lg">
                    <span className="text-sm font-semibold text-gray-800">{bouquet.price}</span>
                  </div>

                  {/* Overlay Content */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                    <h4 className="text-xl font-light text-white mb-1">{bouquet.name}</h4>
                    <p className="text-white/80 text-sm mb-3">{bouquet.style}</p>
                    <Button
                      size="sm"
                      variant="secondary"
                      className="bg-white/20 hover:bg-white/30 text-white border-white/30"
                    >
                      View Details
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-20">
          <Button
            size="lg"
            className="group relative overflow-hidden bg-gradient-to-r from-rose-500 via-purple-500 to-amber-500 hover:from-rose-600 hover:via-purple-600 hover:to-amber-600 text-white px-12 py-4 text-lg font-light shadow-xl hover:shadow-2xl transition-all duration-300"
          >
            <span className="relative z-10">{cta.text}</span>
            <div className="absolute inset-0 bg-white/20 translate-x-full group-hover:translate-x-0 transition-transform duration-300"></div>
          </Button>
        </div>
      </div>
    </section>
  )
}
