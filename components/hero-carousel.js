"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

const carouselItems = [
  {
    id: 1,
    title: "Dream Wedding Events",
    subtitle: "We Plan to Make Your Every Moment Just as a Dream",
    description:
      "Complete wedding planning with decoration, beautician services, photography, and catering - creating your perfect day.",
    image: "/images/hero1.jpg",
    cta: "Plan Your Wedding",
    accent: "rose",
  },
  {
    id: 2,
    title: "Live Music Concerts",
    subtitle: "Where Words Fail, Music Speaks",
    description:
      "Professional live music events with bands, orchestra, choir, and complete sound setup for unforgettable experiences.",
    image: "/images/hero3.jpg",
    cta: "Book Concert",
    accent: "purple",
  },
  {
    id: 3,
    title: "DJ Nights & Parties",
    subtitle: "Beats That Move Your Soul",
    description:
      "Professional DJ services with tested beats, lighting, and sound systems for the ultimate party experience.",
    image: "/images/hero2.jpg",
    cta: "Book DJ Night",
    accent: "amber",
  },
];

export function HeroCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const intervalRef = useRef(null);

  useEffect(() => {
    setIsLoaded(true);
    setIsMounted(true);
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);

    startAutoSlide();

    return () => {
      clearInterval(intervalRef.current);
      window.removeEventListener("resize", checkMobile);
    };
  }, []);

  const startAutoSlide = () => {
    clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % carouselItems.length);
    }, 10000);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % carouselItems.length);
    startAutoSlide();
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + carouselItems.length) % carouselItems.length
    );
    startAutoSlide();
  };

  return (
    <section className="relative h-[90vh] overflow-hidden">
      {/* Floating Particles using tw-animate-css */}
      {isMounted && (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(isMobile ? 8 : 15)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-gradient-to-r from-rose-400 to-purple-500 rounded-full opacity-20 animate-float"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
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
              : index < currentSlide && currentSlide !== 0
              ? "-translate-x-full opacity-0 scale-110"
              : "translate-x-full opacity-0 scale-90"
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
            <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-black/40 to-black/70" />

            {/* Professional Animated Content */}
            <div className="absolute inset-0 flex items-center justify-center px-4 sm:px-6 lg:px-8">
              <div className="w-full max-w-6xl mx-auto">
                <div
                  className={`text-center text-white transition-all duration-1000 ease-out ${
                    index === currentSlide && isLoaded
                      ? "translate-y-0 opacity-100"
                      : "translate-y-10 opacity-0"
                  }`}
                >
                  {/* Professional Badge with tw-animate-css */}
                  <div
                    className={`inline-flex items-center space-x-2 bg-white/15 backdrop-blur-xl border border-white/25 rounded-full px-4 py-2 sm:px-6 sm:py-3 mb-4 sm:mb-6 transition-all duration-700 ease-out ${
                      index === currentSlide
                        ? "scale-100 opacity-100 animate-fade-in-up"
                        : "scale-0 opacity-0"
                    }`}
                    style={{ animationDelay: "0.5s" }}
                  >
                    <Sparkles className="h-3 w-3 sm:h-4 sm:w-4 animate-pulse" />
                    <span className="text-xs sm:text-sm font-medium tracking-wide">
                      {item.subtitle}
                    </span>
                  </div>

                  {/* Enhanced Title with Professional Mobile Typography */}
                  <div className="mb-6 sm:mb-8">
                    {item.title.split(" ").map((word, i) => (
                      <div
                        key={i}
                        className={`inline-block transition-all duration-1000 ease-out ${
                          index === currentSlide
                            ? "translate-y-0 opacity-100 animate-fade-in-up"
                            : "translate-y-20 opacity-0"
                        }`}
                        style={{
                          animationDelay: `${0.7 + i * 0.2}s`,
                        }}
                      >
                        <h1
                          className={`text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-extralight leading-tight sm:leading-none tracking-tight mr-2 sm:mr-4 ${
                            i === 0
                              ? "text-white"
                              : i === 1
                              ? `text-${item.accent}-300 sm:text-${item.accent}-400`
                              : `text-${item.accent}-200 sm:text-${item.accent}-300`
                          } hover:scale-105 transition-transform duration-500 cursor-default`}
                        >
                          {word}
                        </h1>
                      </div>
                    ))}
                  </div>

                  {/* Professional Description with Mobile Optimization */}
                  <div
                    className={`mb-8 sm:mb-10 transition-all duration-1000 ease-out ${
                      index === currentSlide
                        ? "translate-y-0 opacity-100 animate-fade-in-up"
                        : "translate-y-20 opacity-0"
                    }`}
                    style={{ animationDelay: "1.1s" }}
                  >
                    <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/90 max-w-2xl sm:max-w-3xl lg:max-w-4xl mx-auto leading-relaxed sm:leading-relaxed font-light tracking-wide px-4 sm:px-0">
                      {item.description}
                    </p>
                  </div>

                  {/* Professional CTA Button with Mobile-First Design */}
                  <div
                    className={`flex justify-center items-center px-4 sm:px-0 transition-all duration-1000 ease-out ${
                      index === currentSlide
                        ? "translate-y-0 opacity-100 animate-fade-in-up"
                        : "translate-y-20 opacity-0"
                    }`}
                    style={{ animationDelay: "1.3s" }}
                  >
                    <Button
                      size="lg"
                      className="group relative overflow-hidden bg-gradient-to-r from-rose-500 via-purple-500 to-amber-500 hover:from-rose-600 hover:via-purple-600 hover:to-amber-600 text-white px-8 sm:px-10 py-4 sm:py-6 text-base sm:text-lg font-medium shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-105 w-full sm:w-auto min-w-[200px] sm:min-w-[240px] animate-gradient-x"
                    >
                      <span className="relative z-10 flex items-center justify-center">
                        <Sparkles className="h-4 w-4 sm:h-5 sm:w-5 mr-2 group-hover:scale-110 transition-transform duration-300 animate-pulse" />
                        View Gallery
                      </span>
                      <div className="absolute inset-0 bg-white/20 scale-0 group-hover:scale-100 transition-transform duration-500 rounded-full"></div>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Enhanced Navigation Arrows - Mobile Optimized */}
      <Button
        variant="ghost"
        size="icon"
        className="absolute left-2 sm:left-6 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 text-white border-white/20 backdrop-blur-xl w-10 h-10 sm:w-14 sm:h-14 rounded-full hover:scale-110 transition-all duration-300 group animate-fade-in"
        onClick={prevSlide}
      >
        <ChevronLeft className="h-4 w-4 sm:h-6 sm:w-6 group-hover:-translate-x-1 transition-transform duration-300" />
      </Button>
      <Button
        variant="ghost"
        size="icon"
        className="absolute right-2 sm:right-6 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 text-white border-white/20 backdrop-blur-xl w-10 h-10 sm:w-14 sm:h-14 rounded-full hover:scale-110 transition-all duration-300 group animate-fade-in"
        onClick={nextSlide}
      >
        <ChevronRight className="h-4 w-4 sm:h-6 sm:w-6 group-hover:translate-x-1 transition-transform duration-300" />
      </Button>

      {/* Enhanced Dots Indicator - Mobile Optimized */}
      <div className="absolute bottom-4 sm:bottom-8 left-1/2 -translate-x-1/2 flex space-x-2 sm:space-x-3 animate-fade-in-up">
        {carouselItems.map((_, index) => (
          <button
            key={index}
            className={`relative transition-all duration-500 ${
              index === currentSlide
                ? "w-8 sm:w-12 h-2 sm:h-3"
                : "w-2 sm:w-3 h-2 sm:h-3"
            }`}
            onClick={() => setCurrentSlide(index)}
          >
            <div
              className={`absolute inset-0 rounded-full transition-all duration-500 ${
                index === currentSlide
                  ? "bg-gradient-to-r from-rose-400 via-purple-500 to-amber-500 animate-gradient-x"
                  : "bg-white/50 hover:bg-white/70"
              }`}
            />
            {index === currentSlide && (
              <div className="absolute inset-0 bg-white/30 rounded-full animate-pulse" />
            )}
          </button>
        ))}
      </div>

      {/* Scroll Indicator - Hidden on Mobile */}
      <div className="absolute bottom-4 sm:bottom-8 right-4 sm:right-8 hidden sm:flex flex-col items-center space-y-2 text-white/70 animate-fade-in">
        <span className="text-xs font-medium rotate-90 origin-center tracking-wider">
          SCROLL
        </span>
        <div className="w-px h-8 sm:h-12 bg-gradient-to-b from-white/50 to-transparent animate-pulse" />
      </div>
    </section>
  );
}
