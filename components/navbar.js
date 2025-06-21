"use client"

import { useState, useEffect, useCallback } from "react"
import Link from "next/link"
import { Phone, Sparkles, MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { DialogTitle } from "@/components/ui/dialog"
import Image from "next/image"

const NAV_ITEMS = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/#services" },
  { name: "About", href: "/about" },
  { name: "Gallery", href: "/gallery" },
  { name: "Contact", href: "/#contact" },
]

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [mounted, setMounted] = useState(false)

  const handleScroll = useCallback(() => {
    setScrolled(window.scrollY > 50)
  }, [])

  const closeMenu = useCallback(() => {
    setIsOpen(false)
  }, [])

  useEffect(() => {
    setMounted(true)
    if (typeof window !== "undefined") {
      handleScroll()
      window.addEventListener("scroll", handleScroll, { passive: true })
      return () => window.removeEventListener("scroll", handleScroll)
    }
  }, [handleScroll])

  const navClassName = `fixed top-0 z-50 w-full transition-all duration-700 ${
    mounted && scrolled
      ? "bg-white/90 backdrop-blur-2xl border-b border-rose-100/50 shadow-xl shadow-rose-100/20"
      : "bg-transparent"
  }`

  return (
    <nav className={navClassName}>
      <div className="container mx-auto px-4">
        <div className="flex h-20 items-center justify-between">
          {/* Enhanced Logo & Brand */}
          <Link href="/" className="group flex items-center space-x-3">
            <div className="relative">
              {/* Dynamic logo based on scroll state */}
              {mounted && scrolled ? (
                <Image
                  src="/images/logo.png"
                  alt="Starling Events Logo"
                  width={48}
                  height={48}
                  className="group-hover:rotate-12 transition-transform duration-500"
                  priority
                />
              ) : (
                <Image
                  src="/images/logo2.png"
                  alt="Starling Events Logo"
                  width={48}
                  height={48}
                  className="group-hover:rotate-12 transition-transform duration-500"
                  priority
                />
              )}

              {/* Beautiful glow effect */}
              <div className="absolute -inset-3 bg-gradient-to-r from-rose-400/20 via-purple-400/20 to-amber-400/20 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 blur-lg" />
            </div>

            {/* Enhanced brand text */}
            <div className="flex items-center space-x-2">
              <span
                className={`text-2xl lg:text-3xl font-light transition-all duration-700 group-hover:scale-105 ${
                  mounted && scrolled
                    ? "bg-gradient-to-r from-rose-500 via-purple-500 to-amber-500 bg-clip-text text-gray-800"
                    : "text-white drop-shadow-lg"
                }`}
              >
                Starling
              </span>
              <span
                className={`text-2xl lg:text-3xl font-light transition-all duration-700 ${
                  mounted && scrolled ? "text-gray-800" : "text-white/90 drop-shadow-lg"
                }`}
              >
                Events
              </span>
              <Sparkles
                className={`h-5 w-5 transition-all duration-500 group-hover:rotate-180 group-hover:scale-110 ${
                  mounted && scrolled ? "text-amber-500" : "text-amber-300"
                } opacity-0 group-hover:opacity-100 animate-pulse`}
              />
            </div>
          </Link>

          {/* Enhanced Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-2">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="group relative px-6 py-3 text-sm font-medium transition-all duration-300 hover:scale-105"
              >
                <span
                  className={`relative z-10 transition-colors duration-300 text-gray-700 group-hover:text-white`}
                >
                  {item.name}
                </span>
                {/* Beautiful hover background */}
                <div className="absolute inset-0 bg-gradient-to-r from-rose-500 via-purple-500 to-amber-500 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 scale-0 group-hover:scale-100" />
                <div className="absolute -inset-1 bg-gradient-to-r from-rose-400/30 via-purple-400/30 to-amber-400/30 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-md" />
                {/* Active indicator dot */}
                <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-gradient-to-r from-rose-400 to-purple-400 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300" />
              </Link>
            ))}
          </div>

          {/* Enhanced Desktop CTA Buttons */}
          <div className="hidden lg:flex items-center space-x-4">
            {/* Call Button */}
            <a href="tel:+919400632524">
              <Button
                variant="outline"
                size="lg"
                className={`group relative overflow-hidden border-2 transition-all duration-300 hover:scale-105 border-rose-200 hover:border-rose-400 bg-white/50 backdrop-blur-sm`}
              >
                <Phone className="h-4 w-4 mr-2 group-hover:animate-pulse" />
                <span className="relative z-10 font-medium">Call Us</span>
                <div className="absolute inset-0 bg-gradient-to-r from-rose-50/80 to-purple-50/80 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
              </Button>
            </a>

            {/* WhatsApp Button */}
            <Button
              size="lg"
              className="group relative overflow-hidden bg-gradient-to-r from-rose-500 via-purple-500 to-amber-500 hover:from-rose-600 hover:via-purple-600 hover:to-amber-600 hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
              onClick={() =>
                window.open(
                  "https://wa.me/919400632524?text=Hi! I would like to discuss planning an event with Starling Events.",
                  "_blank",
                )
              }
            >
              <MessageCircle className="h-4 w-4 mr-2 group-hover:rotate-12 transition-transform duration-300" />
              <span className="relative z-10 font-medium">WhatsApp</span>
              <div className="absolute inset-0 bg-white/20 scale-0 group-hover:scale-100 transition-transform duration-300 rounded-full" />
            </Button>
          </div>

          {/* Enhanced Mobile Menu Button */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="lg:hidden">
              <Button
                variant="ghost"
                size="icon"
                className="relative group hover:scale-110 transition-transform duration-300 p-2"
                aria-label="Toggle menu"
              >
                <div className="flex flex-col justify-center items-center w-6 h-6">
                  <span
                    className={`block transition-all duration-500 ease-out h-0.5 w-6 rounded-sm ${
                      isOpen ? "rotate-45 translate-y-1" : "-translate-y-0.5"
                    } ${
                      mounted && scrolled ? "bg-gradient-to-r from-rose-500 to-purple-500" : "bg-white drop-shadow-sm"
                    }`}
                  />
                  <span
                    className={`block transition-all duration-500 ease-out h-0.5 w-6 rounded-sm my-0.5 ${
                      isOpen ? "opacity-0 scale-0" : "opacity-100 scale-100"
                    } ${
                      mounted && scrolled ? "bg-gradient-to-r from-purple-500 to-amber-500" : "bg-white drop-shadow-sm"
                    }`}
                  />
                  <span
                    className={`block transition-all duration-500 ease-out h-0.5 w-6 rounded-sm ${
                      isOpen ? "-rotate-45 -translate-y-1" : "translate-y-0.5"
                    } ${
                      mounted && scrolled ? "bg-gradient-to-r from-amber-500 to-rose-500" : "bg-white drop-shadow-sm"
                    }`}
                  />
                </div>
              </Button>
            </SheetTrigger>

            {/* Enhanced Mobile Menu */}
            <SheetContent
              side="right"
              className="w-[350px] sm:w-[400px] bg-gradient-to-br from-white/95 via-rose-50/90 to-purple-50/80 border-l border-rose-100/50 backdrop-blur-2xl"
            >
              <DialogTitle className="sr-only">Navigation Menu</DialogTitle>

              {/* Mobile Menu Header */}
              <div className="flex items-center justify-start ps-3 mb-8 pt-4">
                <div className="flex items-center space-x-3 group">
                  <div className="relative">
                    <Image
                      src="/images/logo.png"
                      alt="Starling Events Logo"
                      width={32}
                      height={32}
                      className="group-hover:rotate-12 transition-transform duration-500"
                    />
                    <div className="absolute -inset-2 bg-gradient-to-r from-rose-400/20 to-purple-400/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-lg" />
                  </div>
                  <div>
                    <span className="text-xl font-light bg-gradient-to-r from-rose-500 via-purple-500 to-amber-500 text-gray-800 bg-clip-text ">
                      Starling
                    </span>
                    <span className="text-xl font-light text-gray-800"> Events</span>
                  </div>
                  <div className="w-2 h-2 bg-gradient-to-r from-rose-400 to-purple-500 rounded-full animate-pulse" />
                </div>
              </div>

              {/* Enhanced Mobile Navigation */}
              <div className="space-y-2 mb-8">
                {NAV_ITEMS.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="group flex items-center justify-between px-6 py-4 mx-4 rounded-2xl text-gray-700 hover:text-white hover:bg-gradient-to-r hover:from-rose-500 hover:via-purple-500 hover:to-amber-500 transition-all duration-500 backdrop-blur-sm hover:scale-105 hover:shadow-lg"
                    onClick={closeMenu}
                  >
                    <div className="flex items-center space-x-4">
                      <div className="w-2 h-2 rounded-full bg-gradient-to-r from-rose-400 to-purple-500 opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:scale-150" />
                      <span className="text-lg font-medium group-hover:translate-x-1 transition-transform duration-300">
                        {item.name}
                      </span>
                    </div>
                    <div className="w-0 group-hover:w-8 h-0.5 bg-gradient-to-r from-rose-400 to-purple-500 transition-all duration-500 rounded-full" />
                  </Link>
                ))}
              </div>

              {/* Beautiful Separator */}
              <div className="relative mb-8">
                <div className="w-full h-px bg-gradient-to-r from-transparent via-rose-300 to-transparent" />
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-gradient-to-r from-rose-400 to-purple-500 rounded-full animate-pulse" />
              </div>

              {/* Enhanced Contact Section */}
              <div className="space-y-4 mx-4 mb-8">


                {/* Mobile CTA Buttons */}
                <div className="grid grid-cols-1 gap-3 px-2">
                  <a href="tel:+919400632524">
                    <Button
                      size="lg"
                      variant="outline"
                      className="w-full border-2 border-rose-200 hover:border-rose-400 bg-white/50 backdrop-blur-sm hover:bg-white/80 transition-all duration-300 hover:scale-105"
                    >
                      <Phone className="h-4 w-4 mr-2" />
                      Call Now
                    </Button>
                  </a>
                  <Button
                    size="lg"
                    className="w-full bg-gradient-to-r from-rose-500 via-purple-500 to-amber-500 hover:from-rose-600 hover:via-purple-600 hover:to-amber-600 transition-all duration-300 hover:scale-105 shadow-lg"
                    onClick={() => {
                      window.open(
                        "https://wa.me/919400632524?text=Hi! I would like to discuss planning an event with Starling Events.",
                        "_blank",
                      )
                      closeMenu()
                    }}
                  >
                    <MessageCircle className="h-4 w-4 mr-2" />
                    WhatsApp Us
                  </Button>
                </div>
              </div>

              {/* Professional Badge */}
              <div className="text-center">
                <div className="inline-flex items-center space-x-2 bg-white/60 backdrop-blur-sm border border-white/50 rounded-full px-4 py-2">
                  <Sparkles className="h-3 w-3 text-amber-400 animate-pulse" />
                  <span className="text-xs text-gray-600 font-medium">Professional Event Planning</span>
                  <Sparkles className="h-3 w-3 text-rose-400 animate-pulse" />
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  )
}
