import Link from "next/link";
import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";

export function Footer() {
  return (
    <footer className="bg-slate-900 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center space-x-2">
              <div className="relative">
                <Image
                  src="/images/logo2.png"
                  alt="Starling Events Logo"
                  width={40}
                  height={40}
                  className="group-hover:rotate-12 transition-transform duration-500"
                  priority
                />
                <div className="absolute -inset-2 bg-gradient-to-r from-rose-400/20 to-purple-500/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-lg" />
              </div>
              <span className="text-2xl font-bold">StarlingEvents</span>
            </Link>
            <p className="text-slate-300 text-sm leading-relaxed">
              Creating unforgettable experiences through exceptional event
              planning and management. Your vision, our expertise.
            </p>
            <div className="flex space-x-4">
              <Button
                size="icon"
                variant="ghost"
                className="hover:bg-slate-800"
              >
                <Facebook className="h-5 w-5" />
              </Button>
              <Button
                size="icon"
                variant="ghost"
                className="hover:bg-slate-800"
              >
                <Twitter className="h-5 w-5" />
              </Button>
              <Button
                size="icon"
                variant="ghost"
                className="hover:bg-slate-800"
              >
                <Instagram className="h-5 w-5" />
              </Button>
              <Button
                size="icon"
                variant="ghost"
                className="hover:bg-slate-800"
              >
                <Linkedin className="h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/"
                  className="text-slate-300 hover:text-white transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="#services"
                  className="text-slate-300 hover:text-white transition-colors"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="#about"
                  className="text-slate-300 hover:text-white transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="#gallery"
                  className="text-slate-300 hover:text-white transition-colors"
                >
                  Gallery
                </Link>
              </li>
              <li>
                <Link
                  href="#contact"
                  className="text-slate-300 hover:text-white transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Our Services</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="#"
                  className="text-slate-300 hover:text-white transition-colors"
                >
                  Wedding Planning
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-slate-300 hover:text-white transition-colors"
                >
                  Corporate Events
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-slate-300 hover:text-white transition-colors"
                >
                  Birthday Parties
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-slate-300 hover:text-white transition-colors"
                >
                  Music Concerts
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-slate-300 hover:text-white transition-colors"
                >
                  Photography
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Contact Info</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-center space-x-3">
                <MapPin className="h-4 w-4 text-white flex-shrink-0" />
                <span className="text-slate-300">
                  Starling Events, Cumbummettu
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-white flex-shrink-0" />
                <span className="text-slate-300">+919400632524</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-white flex-shrink-0" />
                <span className="text-slate-300">
                  starlingeventscmt@gmail.com
                </span>
              </div>
            </div>
          </div>
        </div>

        <Separator className="my-8 bg-slate-700" />

        <div className="flex flex-col md:flex-row justify-between items-center text-sm text-slate-400">
          <p>&copy; 2024 StarlingEvents. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="#" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="hover:text-white transition-colors">
              Terms of Service
            </Link>
            <Link href="#" className="hover:text-white transition-colors">
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
