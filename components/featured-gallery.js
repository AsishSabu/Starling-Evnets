import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Crown, Sparkles, Heart } from "lucide-react";
import { galleryData } from "@/data/gallery-data";
import Link from "next/link";

export function FeaturedGallery() {
  const { header, showcaseImage, galleryGrid, bouquetSection, bouquets, cta } =
    galleryData;

  // Create features directly since they re now in the data
  const leftFeature = {
    position: "left",
    title: "Luxury",
    subtitle: "Decoration",
    description:
      "Transform ordinary spaces into extraordinary experiences. Our bespoke decoration services blend elegance with innovation, creating atmospheres that captivate and inspire.",
    // buttonText: "DISCOVER MORE",
    // rating: 5,
    gradient: "from-rose-400 to-purple-500",
  };

  const rightFeature = {
    position: "right",
    title: "Bespoke",
    subtitle: "Events",
    description:
      "Every dream deserves a perfect execution. We collaborate intimately with our clients to bring their unique visions to life, crafting celebrations that reflect their personal story and style.",
    // buttonText: "VIEW DETAILS",
    // rating: 5,
    gradient: "from-purple-400 to-amber-500",
  };

  // Helper function to render stars
  // const renderStars = (count) => {
  //   return Array.from({ length: count }).map((_, index) => (
  //     <Star
  //       key={index}
  //       className="w-3 h-3 sm:w-4 sm:h-4 fill-amber-400 text-amber-400 animate-pulse"
  //       style={{ animationDelay: `${index * 0.1}s` }}
  //     />
  //   ));
  // };

  return (
    <section className="relative py-4 sm:py-8 lg:py-10 bg-gradient-to-b from-slate-50 via-white to-rose-50/30 overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-32 h-32 bg-rose-200 rounded-full blur-3xl animate-float"></div>
        <div
          className="absolute bottom-40 right-20 w-48 h-48 bg-purple-200 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className="absolute top-1/2 left-1/3 w-24 h-24 bg-amber-200 rounded-full blur-2xl animate-float"
          style={{ animationDelay: "2s" }}
        ></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Professional Header with Mobile Optimization */}
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <Badge
            variant="outline"
            className="mb-4 sm:mb-6 px-4 sm:px-6 py-2 text-xs sm:text-sm font-light border-rose-200 text-rose-600 animate-fade-in-up"
          >
            <Sparkles className="w-3 h-3 sm:w-4 sm:h-4 mr-2 animate-pulse" />
            {header.badge.text}
          </Badge>

          {/* Enhanced Title Animation for Mobile */}
          <div className="mb-6 sm:mb-8 lg:mb-10">
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-extralight text-gray-900 tracking-tight leading-tight">
              <span
                className="block animate-fade-in-up"
                style={{ animationDelay: "0.3s" }}
              >
                {header.title}
              </span>
              <span
                className="block bg-gradient-to-r from-rose-400 via-purple-500 to-amber-500 bg-clip-text text-transparent font-light animate-fade-in-up animate-gradient-x"
                style={{ animationDelay: "0.5s" }}
              >
                {header.subtitle}
              </span>
            </h2>
          </div>

          <div
            className="flex items-center justify-center mb-6 sm:mb-8 lg:mb-10 animate-fade-in"
            style={{ animationDelay: "0.7s" }}
          >
            <div className="w-12 sm:w-16 h-px bg-gradient-to-r from-transparent via-rose-300 to-transparent"></div>
            <Crown className="w-5 h-5 sm:w-6 sm:h-6 mx-3 sm:mx-4 text-rose-400 animate-pulse" />
            <div className="w-12 sm:w-16 h-px bg-gradient-to-r from-transparent via-rose-300 to-transparent"></div>
          </div>

          <p
            className="max-w-2xl sm:max-w-3xl lg:max-w-4xl mx-auto text-lg sm:text-xl lg:text-xl text-gray-600 leading-relaxed font-light px-4 sm:px-0 animate-fade-in-up"
            style={{ animationDelay: "0.9s" }}
          >
            {header.description}
          </p>
        </div>

        {/* Enhanced Main Feature Section with Mobile-First Design */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center mb-20 sm:mb-24 lg:mb-32">
          {/* Left Column - Mobile Optimized */}
          {leftFeature && (
            <div
              className="lg:col-span-4 space-y-6 sm:space-y-8 animate-fade-in-left"
              style={{ animationDelay: "0.3s" }}
            >
              <div className="relative">
                <div
                  className={`absolute -top-2 sm:-top-4 -left-2 sm:-left-4 w-6 h-6 sm:w-8 sm:h-8 bg-gradient-to-br ${leftFeature.gradient} rounded-full opacity-20 animate-pulse`}
                ></div>
                <h3 className="text-3xl sm:text-4xl md:text-5xl font-extralight text-gray-900 mb-4 sm:mb-6 relative leading-tight">
                  <span className="block animate-fade-in-up">
                    {leftFeature.title}
                  </span>
                  <span
                    className="block text-rose-500 animate-fade-in-up"
                    style={{ animationDelay: "0.2s" }}
                  >
                    {leftFeature.subtitle}
                  </span>
                </h3>
              </div>
              <div
                className={`w-8 sm:w-12 h-px bg-gradient-to-r ${leftFeature.gradient} mb-4 sm:mb-6 animate-fade-in`}
              ></div>
              <p
                className="text-gray-600 leading-relaxed text-base sm:text-lg font-light animate-fade-in-up"
                style={{ animationDelay: "0.4s" }}
              >
                {leftFeature.description}
              </p>
              {/* <div
                className="flex flex-col sm:flex-row sm:items-center space-y-4 sm:space-y-0 sm:space-x-4 pt-4 animate-fade-in-up"
                style={{ animationDelay: "0.6s" }}
              >
                <Button
                  variant="outline"
                  className="group relative overflow-hidden border-2 border-gray-300 hover:border-rose-400 text-gray-700 hover:text-rose-600 px-6 sm:px-8 py-3 transition-all duration-300 w-full sm:w-auto hover:scale-105"
                >
                  <span className="relative z-10 text-sm sm:text-base">
                    {leftFeature.buttonText}
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-rose-50 to-purple-50 translate-x-full group-hover:translate-x-0 transition-transform duration-300"></div>
                </Button>
                <div className="flex space-x-1 justify-center sm:justify-start">
                  {renderStars(leftFeature.rating)}
                </div>
              </div> */}
            </div>
          )}

          {/* Center Column - Enhanced Mobile View */}
          <div
            className="lg:col-span-4 relative order-first lg:order-none animate-zoom-in"
            style={{ animationDelay: "0.5s" }}
          >
            <div className="relative group">
              {/* Decorative Frame */}
              <div className="absolute -inset-2 sm:-inset-4 bg-gradient-to-r from-rose-400 via-purple-500 to-amber-500 rounded-xl sm:rounded-2xl opacity-20 blur-xl group-hover:opacity-30 transition-opacity duration-500 animate-gradient-x"></div>
              <div className="relative aspect-[5/6] overflow-hidden rounded-xl sm:rounded-2xl shadow-2xl">
                <Image
                  src={showcaseImage.src || "/placeholder.svg"}
                  alt={showcaseImage.alt}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>

                {/* Floating Badge - Mobile Optimized */}
                {/* <div className="absolute top-3 sm:top-6 right-3 sm:right-6 bg-white/90 backdrop-blur-sm px-3 sm:px-4 py-1 sm:py-2 rounded-full shadow-lg animate-fade-in-down">
                  <div className="flex items-center space-x-1 sm:space-x-2">
                    <Heart className="w-3 h-3 sm:w-4 sm:h-4 text-rose-500 animate-pulse" />
                    <span className="text-xs sm:text-sm font-medium text-gray-700">{showcaseImage.badge.text}</span>
                  </div>
                </div> */}
              </div>
            </div>
          </div>

          {/* Right Column - Mobile Optimized */}
          {rightFeature && (
            <div
              className="lg:col-span-4 space-y-6 sm:space-y-8 animate-fade-in-right"
              style={{ animationDelay: "0.7s" }}
            >
              <div className="relative">
                <div
                  className={`absolute -top-2 sm:-top-4 -right-2 sm:-right-4 w-6 h-6 sm:w-8 sm:h-8 bg-gradient-to-br ${rightFeature.gradient} rounded-full opacity-20 animate-pulse`}
                ></div>
                <h3 className="text-3xl sm:text-4xl md:text-5xl font-extralight text-gray-900 mb-4 sm:mb-6 relative text-left lg:text-right leading-tight">
                  <span className="block animate-fade-in-up">
                    {rightFeature.title}
                  </span>
                  <span
                    className="block text-purple-500 animate-fade-in-up"
                    style={{ animationDelay: "0.2s" }}
                  >
                    {rightFeature.subtitle}
                  </span>
                </h3>
              </div>
              <div
                className={`w-8 sm:w-12 h-px bg-gradient-to-r ${rightFeature.gradient} mb-4 sm:mb-6 lg:ml-auto animate-fade-in`}
              ></div>
              <p
                className="text-gray-600 leading-relaxed text-base sm:text-lg font-light text-left lg:text-right animate-fade-in-up"
                style={{ animationDelay: "0.4s" }}
              >
                {rightFeature.description}
              </p>
              {/* <div
                className="flex flex-col sm:flex-row sm:items-center lg:justify-end space-y-4 sm:space-y-0 sm:space-x-4 pt-4 animate-fade-in-up"
                style={{ animationDelay: "0.6s" }}
              >
                <div className="flex space-x-1 justify-center sm:justify-start lg:justify-end order-2 sm:order-1">
                  {renderStars(rightFeature.rating)}
                </div>
                <Button
                  variant="outline"
                  className="group relative overflow-hidden border-2 border-gray-300 hover:border-purple-400 text-gray-700 hover:text-purple-600 px-6 sm:px-8 py-3 transition-all duration-300 w-full sm:w-auto order-1 sm:order-2 hover:scale-105"
                >
                  <span className="relative z-10 text-sm sm:text-base">
                    {rightFeature.buttonText}
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-50 to-amber-50 translate-x-full group-hover:translate-x-0 transition-transform duration-300"></div>
                </Button>
              </div> */}
            </div>
          )}
        </div>

        {/* Stylish Gallery Grid */}
        <div className="mb-20 sm:mb-24 lg:mb-32">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {galleryGrid.map((item, index) => (
              <div
                key={item.id}
                className="group relative animate-fade-in-up"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="relative aspect-square overflow-hidden rounded-xl sm:rounded-2xl shadow-xl">
                  <Image
                    src={item.image || "/placeholder.svg"}
                    alt={item.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-100 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity duration-500"></div>

                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Luxurious Bridal Bouquet Section - Mobile Enhanced */}
        <div className="relative">
          <div className="text-center mb-12 sm:mb-16">
            <Badge
              variant="outline"
              className="mb-4 sm:mb-6 px-4 sm:px-6 py-2 text-xs sm:text-sm font-light border-rose-200 text-rose-600 animate-fade-in-up"
            >
              <Heart className="w-3 h-3 sm:w-4 sm:h-4 mr-2 animate-pulse" />
              {bouquetSection.badge.text}
            </Badge>
            <h3 className="text-4xl sm:text-5xl md:text-6xl font-extralight text-gray-900 mb-6 sm:mb-8">
              <span
                className="block animate-fade-in-up"
                style={{ animationDelay: "0.2s" }}
              >
                {bouquetSection.title}
              </span>
              <span
                className="block bg-gradient-to-r from-rose-400 to-purple-500 bg-clip-text text-transparent animate-fade-in-up animate-gradient-x"
                style={{ animationDelay: "0.4s" }}
              >
                {bouquetSection.subtitle}
              </span>
            </h3>
            <div
              className="flex items-center justify-center mb-6 sm:mb-8 animate-fade-in"
              style={{ animationDelay: "0.6s" }}
            >
              <div className="w-16 sm:w-20 h-px bg-gradient-to-r from-transparent via-rose-300 to-transparent"></div>
              <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 mx-3 sm:mx-4 text-rose-400 animate-pulse" />
              <div className="w-16 sm:w-20 h-px bg-gradient-to-r from-transparent via-rose-300 to-transparent"></div>
            </div>
            <p
              className="max-w-2xl sm:max-w-3xl mx-auto text-base sm:text-lg text-gray-600 font-light leading-relaxed px-4 sm:px-0 animate-fade-in-up"
              style={{ animationDelay: "0.8s" }}
            >
              {bouquetSection.description}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {bouquets.map((bouquet, index) => (
              <div
                key={bouquet.id}
                className="group relative animate-fade-in-up"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <div className="relative aspect-[3/4] overflow-hidden rounded-xl sm:rounded-2xl shadow-xl">
                  <Image
                    src={bouquet.image || "/placeholder.svg"}
                    alt={bouquet.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-100 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity duration-500"></div>


                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action - Mobile Enhanced */}
        <div className="text-center mt-16 sm:mt-20">
          <Link
            href="/gallery"
            className="group relative px-4 py-2 text-sm font-medium transition-all duration-300 hover:scale-105"
          >
            <Button
              size="lg"
              className="group relative overflow-hidden bg-gradient-to-r from-rose-500 via-purple-500 to-amber-500 hover:from-rose-600 hover:via-purple-600 hover:to-amber-600 text-white px-8 sm:px-12 py-4 text-base sm:text-lg font-light shadow-xl hover:shadow-2xl transition-all duration-300 w-full sm:w-auto max-w-sm sm:max-w-none animate-fade-in-up hover:scale-105 animate-gradient-x"
            >
              <span className="relative z-10">{cta.text}</span>
              <div className="absolute inset-0 bg-white/20 translate-x-full group-hover:translate-x-0 transition-transform duration-300"></div>
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
