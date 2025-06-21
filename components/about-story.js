"use client";

import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Sparkles, Heart, Award, MessageCircle, Phone } from "lucide-react";

export function AboutStory() {
  return (
    <section className="py-16 md:py-20 bg-gradient-to-b from-white to-rose-50/30">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-12 lg:mb-16">
          <Badge
            variant="outline"
            className="mb-6 px-6 py-2 border-rose-200 text-rose-600"
          >
            <Sparkles className="w-4 h-4 mr-2" />
            Why Choose Us
          </Badge>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light mb-6">
            Your Dream Event{" "}
            <span className="bg-gradient-to-r from-rose-500 to-purple-500 bg-clip-text text-transparent">
              Awaits
            </span>
          </h2>
        </div>

        {/* Story Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center mb-12 lg:mb-16">
          <div className="space-y-6 lg:space-y-8 lg:pr-8">
            <div>
              <h3 className="text-xl md:text-2xl font-light mb-3 md:mb-4 text-gray-800">
                Our Beginning
              </h3>
              <p className="text-gray-600 leading-relaxed">
                In 2022, passionate event enthusiasts came together to form
                Starling Events in Cumbummettu. Our mission: craft celebrations
                as unique as the people we serve.
              </p>
            </div>

            <div>
              <h3 className="text-xl md:text-2xl font-light mb-3 md:mb-4 text-gray-800">
                Growing Together
              </h3>
              <p className="text-gray-600 leading-relaxed">
                We&apos;ve orchestrated hundreds of unforgettable events – from
                intimate weddings to grand celebrations. Each event refines our
                passion for creating magical moments.
              </p>
            </div>

            <div>
              <h3 className="text-xl md:text-2xl font-light mb-3 md:mb-4 text-gray-800">
                Your Story Next
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Today, we&apos;re one of the region&apos;s most trusted event
                planners. Ready to make your celebration extraordinary?
                Let&apos;s create something beautiful together.
              </p>
            </div>
          </div>

          {/* Image - Reduced Height */}
          <div className="relative w-full">
            <div className="aspect-[4/3] sm:aspect-[3/2] lg:aspect-[4/3] overflow-hidden rounded-2xl shadow-xl">
              <Image
                src="/images/about1.jpg"
                alt="Event planning process at Starling Events"
                fill
                className="object-cover rounded-2xl"
              />
            </div>
          </div>
        </div>

        {/* Simple Values */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-10 lg:mb-12">
          <div className="text-center p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
            <div className="bg-rose-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Heart className="h-8 w-8 text-rose-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Passionate</h3>
            <p className="text-gray-600">
              Every event gets our full heart and attention
            </p>
          </div>

          <div className="text-center p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
            <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Sparkles className="h-8 w-8 text-purple-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Creative</h3>
            <p className="text-gray-600">
              Fresh ideas that make your event unique
            </p>
          </div>

          <div className="text-center p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
            <div className="bg-amber-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Award className="h-8 w-8 text-amber-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Reliable</h3>
            <p className="text-gray-600">
              On time, every time, with perfect execution
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-gradient-to-r from-rose-500 to-purple-500 hover:from-rose-600 hover:to-purple-600 text-white px-8 py-3 rounded-full"
              onClick={() =>
                window.open(
                  "https://wa.me/919400632524?text=Hi! I would like to discuss planning an event with Starling Events.",
                  "_blank"
                )
              }
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              Let&apos;s Chat
            </Button>

            <Button
              size="lg"
              variant="outline"
              className="border-rose-500 text-rose-500 hover:bg-rose-50 px-8 py-3 rounded-full"
              onClick={() => window.open("tel:+919400632524")}
            >
              <Phone className="w-5 h-5 mr-2" />
              Call Now
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
