"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { Phone, Mail, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { DialogTitle } from "@/components/ui/dialog";
import Image from "next/image";

const NAV_ITEMS = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/#services" },
  { name: "About", href: "/about" }, // Updated to link to the about page
  { name: "Gallery", href: "/gallery" },
  { name: "Contact", href: "/#contact" }, // Updated to link to the contact page
];

const SOCIAL_LINKS = [
  { name: "Facebook", icon: "📘", color: "hover:bg-blue-100" },
  { name: "Instagram", icon: "📷", color: "hover:bg-pink-100" },
  { name: "Twitter", icon: "🐦", color: "hover:bg-sky-100" },
  { name: "LinkedIn", icon: "💼", color: "hover:bg-indigo-100" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);

  const handleScroll = useCallback(() => {
    setScrolled(window.scrollY > 50);
  }, []);

  const closeMenu = useCallback(() => {
    setIsOpen(false);
  }, []);

  useEffect(() => {
    setMounted(true);

    if (typeof window !== "undefined") {
      handleScroll();
      window.addEventListener("scroll", handleScroll, { passive: true });
      return () => window.removeEventListener("scroll", handleScroll);
    }
  }, [handleScroll]);

  // Stable class names
  const navClassName = `fixed top-0 z-50 w-full transition-all duration-500 ${
    mounted && scrolled
      ? "bg-white/80 backdrop-blur-xl border-b border-rose-100/50 shadow-lg shadow-rose-100/20"
      : "bg-transparent"
  }`;

  return (
    <nav className={navClassName}>
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="group flex items-center space-x-3">
            <div className="relative">
              <Image
                src="/images/logo.png"
                alt="Starling Events Logo"
                width={40}
                height={40}
                className="group-hover:rotate-12 transition-transform duration-500"
                priority
              />
              <div className="absolute -inset-2 bg-gradient-to-r from-rose-400/20 to-purple-500/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-lg" />
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-primary via-purple-600 to-amber-500 bg-clip-text text-transparent group-hover:scale-105 transition-transform duration-300">
              Starling Events
            </span>
            <Sparkles className="h-4 w-4 text-amber-400 opacity-0 group-hover:opacity-100 transition-all duration-500 group-hover:rotate-180" />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-2">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="group relative px-4 py-2 text-sm font-medium transition-all duration-300 hover:scale-105"
              >
                <span className="relative z-10 text-gray-700 group-hover:text-white transition-colors duration-300">
                  {item.name}
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-rose-500 via-purple-500 to-amber-500 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 scale-0 group-hover:scale-100" />
                <div className="absolute -inset-1 bg-gradient-to-r from-rose-400/30 to-purple-500/30 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-md" />
              </Link>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center space-x-4">
            <a href="tel:+919400632524">
              <Button
                variant="outline"
                size="sm"
                className="group relative overflow-hidden border-2 border-rose-200 hover:border-rose-400 hover:scale-105 transition-all duration-300"
              >
                <Phone className="h-4 w-4 mr-2 group-hover:animate-pulse" />
                <span className="relative z-10">Call Us</span>
                <div className="absolute inset-0 bg-gradient-to-r from-rose-50 to-purple-50 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
              </Button>
            </a>

            <Button
              size="sm"
              className="group relative overflow-hidden bg-gradient-to-r from-rose-500 via-purple-500 to-amber-500 hover:from-rose-600 hover:via-purple-600 hover:to-amber-600 hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              <Mail className="h-4 w-4 mr-2 group-hover:rotate-12 transition-transform duration-300" />
              <a
                href="https://www.instagram.com/starling_events_"
                target="_blank"
                rel="noopener noreferrer"
              >
                {" "}
                <span className="relative z-10">Instagram</span>
              </a>
              <div className="absolute inset-0 bg-white/20 scale-0 group-hover:scale-100 transition-transform duration-300 rounded-full" />
            </Button>
          </div>

          {/* Mobile Menu */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button
                variant="ghost"
                size="icon"
                className="relative group hover:scale-110 transition-transform duration-300"
                aria-label="Toggle menu"
              >
                <div className="flex flex-col justify-center items-center w-6 h-6">
                  <span
                    className={`bg-gradient-to-r from-rose-500 to-purple-500 block transition-all duration-500 ease-out h-0.5 w-6 rounded-sm ${
                      isOpen ? "rotate-45 translate-y-1" : "-translate-y-0.5"
                    }`}
                  />
                  <span
                    className={`bg-gradient-to-r from-purple-500 to-amber-500 block transition-all duration-500 ease-out h-0.5 w-6 rounded-sm my-0.5 ${
                      isOpen ? "opacity-0 scale-0" : "opacity-100 scale-100"
                    }`}
                  />
                  <span
                    className={`bg-gradient-to-r from-amber-500 to-rose-500 block transition-all duration-500 ease-out h-0.5 w-6 rounded-sm ${
                      isOpen ? "-rotate-45 -translate-y-1" : "translate-y-0.5"
                    }`}
                  />
                </div>
              </Button>
            </SheetTrigger>
            <SheetContent
              side="right"
              className="w-[350px] sm:w-[400px] bg-gradient-to-br from-white/95 via-rose-50/80 to-purple-50/60 border-l border-rose-100/50 backdrop-blur-2xl"
            >
              {/* Add DialogTitle for accessibility */}
              <DialogTitle className="sr-only">Navigation Menu</DialogTitle>

              {/* Mobile Header */}
              <div className="flex items-center justify-between mb-8 ps-3 pt-4">
                <div className="flex items-center space-x-2 group">
                  <Image
                    src="/images/logo.png"
                    alt="Starling Events Logo"
                    width={24}
                    height={24}
                    className="group-hover:rotate-12 transition-transform duration-500"
                  />
                  <span className="text-xl font-bold bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
                    Starling Events
                  </span>
                  <div className="w-2 h-2 bg-gradient-to-r from-rose-400 to-purple-500 rounded-full animate-pulse" />
                </div>
              </div>

              {/* Mobile Navigation */}
              <div className="space-y-2 mb-4">
                {NAV_ITEMS.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="group mx-6 flex items-center space-x-4 px-4 py-4 rounded-2xl text-gray-700 hover:text-white hover:bg-gradient-to-r hover:from-rose-500 hover:via-purple-500 hover:to-amber-500 transition-all duration-500 backdrop-blur-sm hover:scale-105 hover:shadow-lg"
                    onClick={closeMenu}
                  >
                    <div className=" w-2 h-2 rounded-full bg-gradient-to-r from-rose-400 to-purple-500 opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:scale-150" />
                    <span className="text-lg font-medium group-hover:translate-x-1 transition-transform duration-300">
                      {item.name}
                    </span>
                    <div className="ml-auto w-0 group-hover:w-8 h-0.5 bg-gradient-to-r from-rose-400 to-purple-500 transition-all duration-500 rounded-full" />
                  </Link>
                ))}
              </div>

              {/* Divider */}
              <div className="relative mb-4">
                <div className="w-full h-px bg-gradient-to-r from-transparent via-rose-300 to-transparent" />
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-gradient-to-r from-rose-400 to-purple-500 rounded-full animate-pulse" />
              </div>

              {/* Contact Info */}
              <div className="space-y-2 mb-4 mx-6">
                <div className="bg-white/60 backdrop-blur-xl rounded-2xl p-5 border border-white/50 hover:bg-white/80 transition-all duration-500 hover:scale-105 hover:shadow-xl group">
                  <h4 className="font-semibold text-gray-800 mb-3 flex items-center group-hover:text-rose-600 transition-colors duration-300">
                    <Phone className="h-5 w-5 mr-3 text-rose-500 group-hover:scale-110 transition-transform duration-300" />
                    Quick Contact
                  </h4>
                  <div className="space-y-2 text-sm text-gray-600">
                    <p className="hover:text-rose-600 transition-colors duration-300 cursor-pointer">
                      📞 +919400632524
                    </p>
                    <p className="hover:text-purple-600 transition-colors duration-300 cursor-pointer">
                      ✉️ starlingeventscmt@gmail.com
                    </p>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="pt-2 border-t border-rose-100/50">
                <p className="text-sm text-gray-600 mb-4 text-center font-medium">
                  Follow us on social media
                </p>
                <div className="flex justify-center space-x-4">
                  {SOCIAL_LINKS.map((social) => (
                    <button
                      key={social.name}
                      className={`w-12 h-12 rounded-2xl bg-white/60 ${social.color} flex items-center justify-center text-lg hover:scale-125 transition-all duration-500 shadow-sm hover:shadow-lg backdrop-blur-sm`}
                      aria-label={`Follow us on ${social.name}`}
                    >
                      {social.icon}
                    </button>
                  ))}
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
}
