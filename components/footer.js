"use client";

import Link from "next/link";
import { Instagram, Heart, Sparkles, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";

export function Footer() {
  return (
    <footer className="relative bg-gradient-to-br from-gray-900 via-slate-900 to-gray-900 text-white overflow-hidden">
      {/* Subtle Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-r from-rose-500/5 to-pink-500/5 rounded-full blur-3xl animate-pulse"></div>
        <div
          className="absolute bottom-0 right-1/4 w-80 h-80 bg-gradient-to-r from-purple-500/5 to-indigo-500/5 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "2s" }}
        ></div>
        <div
          className="absolute top-1/2 left-1/3 w-64 h-64 bg-gradient-to-r from-amber-500/5 to-orange-500/5 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "4s" }}
        ></div>
      </div>

      {/* Subtle top border */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-rose-400/30 via-purple-400/30 to-amber-400/30"></div>

      <div className="container mx-auto px-4 py-16 lg:py-20 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Enhanced Company Info */}
          <div className="space-y-6 lg:col-span-2">
            <Link href="/" className="group flex items-center space-x-3">
              <div className="relative">
                <div className="absolute -inset-3 bg-gradient-to-r from-rose-400/10 via-purple-400/10 to-amber-400/10 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 blur-lg"></div>
                <Image
                  src="/images/logo2.png"
                  alt="Starling Events Logo"
                  width={48}
                  height={48}
                  className="relative group-hover:rotate-12 transition-transform duration-500"
                  priority
                />
              </div>
              <div>
                <span className="text-3xl font-light bg-gradient-to-r from-rose-300/80 via-purple-300/80 to-amber-300/80 bg-clip-text text-white">
                  Starling
                </span>
                <span className="text-3xl font-light text-white/90">
                  {" "}
                  Events
                </span>
              </div>
            </Link>

            <p className="text-gray-300 text-lg leading-relaxed max-w-md font-light">
              Creating unforgettable experiences through exceptional event
              planning and management. Where dreams meet reality, and every
              moment becomes magical.
            </p>

            {/* Professional Instagram Button */}
            <div className="flex items-center space-x-4">
              <Button
                size="lg"
                className="group relative overflow-hidden bg-gradient-to-r from-slate-700 to-slate-600 hover:from-slate-600 hover:to-slate-500 text-white px-6 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border border-white/10"
                onClick={() =>
                  window.open(
                    "https://instagram.com/starling_events_",
                    "_blank"
                  )
                }
              >
                <Instagram className="h-5 w-5 mr-2 group-hover:rotate-12 transition-transform duration-300" />
                Follow Us
                <div className="absolute inset-0 bg-gradient-to-r from-rose-500/20 to-purple-500/20 translate-x-full group-hover:translate-x-0 transition-transform duration-300"></div>
              </Button>

              <div className="flex items-center space-x-2 text-gray-400">
                <Heart className="h-4 w-4 text-rose-300/60 animate-pulse" />
                <span className="text-sm">Follow for daily inspiration</span>
              </div>
            </div>
          </div>

          {/* Enhanced Quick Links */}
          <div className="space-y-6">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-slate-600 to-slate-500 rounded-full flex items-center justify-center border border-white/10">
                <ArrowRight className="h-4 w-4 text-white/80" />
              </div>
              <h3 className="text-xl font-light text-white/90">Quick Links</h3>
            </div>
            <ul className="space-y-3">
              {[
                { name: "Home", href: "/" },
                { name: "Services", href: "/#services" },
                { name: "About Us", href: "/about" },
                { name: "Gallery", href: "/gallery" },
                { name: "Contact", href: "/#contact" },
              ].map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="group flex items-center space-x-2 text-gray-300 hover:text-white transition-all duration-300"
                  >
                    <div className="w-1 h-1 bg-rose-300/60 rounded-full group-hover:w-2 group-hover:h-2 group-hover:bg-rose-300 transition-all duration-300"></div>
                    <span className="group-hover:translate-x-1 transition-transform duration-300">
                      {link.name}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Enhanced Services */}
          <div className="space-y-6">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-slate-600 to-slate-500 rounded-full flex items-center justify-center border border-white/10">
                <Sparkles
                  className="h-4 w-4 text-white/80 animate-spin"
                  style={{ animationDuration: "3s" }}
                />
              </div>
              <h3 className="text-xl font-light text-white/90">Our Services</h3>
            </div>
            <ul className="space-y-3">
              {[
                "Wedding Planning",
                "Corporate Events",
                "Birthday Parties",
                "Music Concerts",
                "Photography",
              ].map((service) => (
                <li key={service}>
                  <Link
                    href="#"
                    className="group flex items-center space-x-2 text-gray-300 hover:text-white transition-all duration-300"
                  >
                    <div className="w-1 h-1 bg-purple-300/60 rounded-full group-hover:w-2 group-hover:h-2 group-hover:bg-purple-300 transition-all duration-300"></div>
                    <span className="group-hover:translate-x-1 transition-transform duration-300">
                      {service}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Professional Separator */}
        <div className="my-6 lg:my-8">
          <div className="relative">
            <Separator className="bg-white/10" />
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-gray-900 via-slate-900 to-gray-900 px-6">
              <Heart className="h-4 w-4 text-rose-300/60 animate-pulse" />
            </div>
          </div>
        </div>

        {/* Professional Bottom Section */}
        <div className="flex flex-col lg:flex-row justify-center items-center space-y-4 lg:space-y-0">
          <div className="flex items-center space-x-2">
            <p className="text-gray-400 text-sm">
              &copy; 2024 Starling Events. Crafted with{" "}
              <Heart className="inline h-4 w-4 text-rose-300/60 animate-pulse" />{" "}
              in Kerala
            </p>
          </div>

        </div>
      </div>
    </footer>
  );
}
