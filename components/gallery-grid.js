"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {} from "lucide-react";
import { galleryItems } from "../data/gallery-data";

// Gallery data (all in one flat list)

export function GalleryGrid() {
  return (
    <section className="py-8 md:py-16 bg-gradient-to-b from-white to-rose-50/30">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-light text-center mb-8">
          <span className="inline-block bg-gradient-to-r from-rose-500 to-purple-500 bg-clip-text text-transparent">
            Our
          </span>{" "}
          Gallery
        </h2>

        {/* Unified Image Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {galleryItems.map((item) => (
            <Card
              key={item.id}
              className="group overflow-hidden rounded-xl shadow-md hover:shadow-lg transition-all duration-300 cursor-pointer border-0 p-0"
            >
              <div className="relative aspect-square overflow-hidden">
                <Image
                  src={item.image || "/placeholder.svg"}
                  alt={item.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
            </Card>
          ))}
        </div>

        {/* Instagram CTA */}
        <div className="text-center mt-12">
          <a
            href="https://www.instagram.com/starling_events_"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button
              variant="outline"
              size="lg"
              className="px-8 border-2 border-rose-200 hover:border-rose-400 hover:bg-rose-50 transition-all duration-300"
            >
              View More on Instagram
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
}
