"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Dialog, DialogContent, DialogClose } from "@/components/ui/dialog";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  X,
  ChevronLeft,
  ChevronRight,
  Heart,
  Share2,
  Download,
  Sparkles,
} from "lucide-react";

// Gallery data organized by categories
const galleryData = {
  weddings: [
    {
      id: "w1",
      title: "Wedding Planning",
      description:
        "From theme moodboards to 3D venue designs, we tailor every wedding to reflect your culture and traditions—be it South Indian, Christian, Muslim or Hindu.",
      image: "/images/img5.jpg",
      category: "weddings",
      featured: true,
    },
    {
      id: "w2",
      title: "Grand Entries",
      description:
        "Make your entrance memorable with our curated vehicle rental service offering elegant options for a grand arrival.",
      image: "/images/img5.jpg",
      category: "weddings",
    },
    {
      id: "w3",
      title: "Bridal Bouquets",
      description:
        "Handcrafted bouquets tailored for bridesmaids and flower girls in your choice of colors and design.",
      image: "/images/img5.jpg",
      category: "weddings",
    },
    {
      id: "w4",
      title: "Destination Weddings",
      description:
        "Explore dream destinations and say ‘I do’ in exotic locations with our all-inclusive destination wedding planning.",
      image: "/images/img5.jpg",
      category: "weddings",
    },
  ],
  decoration: [
    {
      id: "d1",
      title: "Stage Decoration",
      description:
        "Elegant stage settings combining art, light, and design—crafted to harmonize and impress.",
      image: "/images/img5.jpg",
      category: "decoration",
      featured: true,
    },
    {
      id: "d2",
      title: "Venue Styling",
      description:
        "Transform ordinary venues into magical spaces with our expert draping, lighting, and theme-based styling.",
      image: "/images/img5.jpg",
      category: "decoration",
    },
    {
      id: "d3",
      title: "Car Decoration",
      description:
        "From floral garlands to luxury ribbons, elevate your wedding ride with our car styling service.",
      image: "/images/img5.jpg",
      category: "decoration",
    },
  ],
  music: [
    {
      id: "m1",
      title: "Light & Sound",
      description:
        "Set the mood with expert sound engineering and dynamic lighting that enhance every moment of your celebration.",
      image: "/images/img5.jpg",
      category: "music",
      featured: true,
    },
  ],
  corporate: [
    {
      id: "c1",
      title: "Event Management",
      description:
        "Seamless execution of events through expert coordination and creative input—tailored to both traditional and modern themes.",
      image: "/images/img5.jpg",
      category: "corporate",
      featured: true,
    },
    {
      id: "c2",
      title: "Venue & Transport",
      description:
        "End-to-end assistance in finding the perfect venue and smooth guest transportation—ensuring a stress-free event.",
      image: "/images/img5.jpg",
      category: "corporate",
    },
  ],
  catering: [
    {
      id: "f1",
      title: "Experience Planning",
      description:
        "We craft emotionally resonant experiences that turn your special day into lifelong memories.",
      image: "/images/img5.jpg",
      category: "catering",
      featured: true,
    },
  ],
};

// Flatten the gallery data for easier access
const allGalleryItems = Object.values(galleryData).flat();

export function GalleryGrid() {
  const [activeTab, setActiveTab] = useState("all");
  const [filteredItems, setFilteredItems] = useState(allGalleryItems);
  const [selectedImage, setSelectedImage] = useState(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  // Filter gallery items when tab changes
  useEffect(() => {
    if (activeTab === "all") {
      setFilteredItems(allGalleryItems);
    } else {
      setFilteredItems(
        allGalleryItems.filter((item) => item.category === activeTab)
      );
    }
  }, [activeTab]);

  // Handle image click to open lightbox
  const handleImageClick = (item) => {
    setSelectedImage(item);
    setIsDialogOpen(true);
  };

  // Navigate to next/previous image in lightbox
  const navigateImage = (direction) => {
    const currentIndex = allGalleryItems.findIndex(
      (item) => item.id === selectedImage.id
    );
    let newIndex;

    if (direction === "next") {
      newIndex = (currentIndex + 1) % allGalleryItems.length;
    } else {
      newIndex =
        (currentIndex - 1 + allGalleryItems.length) % allGalleryItems.length;
    }

    setSelectedImage(allGalleryItems[newIndex]);
  };

  return (
    <section className="py-12 md:py-20 bg-gradient-to-b from-white to-rose-50/30">
      <div className="container mx-auto px-4">
        {/* Filter tabs */}
        <Tabs
          defaultValue="all"
          value={activeTab}
          onValueChange={setActiveTab}
          className="mb-12"
        >
          <div className="flex justify-center">
            <TabsList className="bg-white/80 backdrop-blur-md border border-rose-100 p-1 rounded-full">
              <TabsTrigger
                value="all"
                className="rounded-full px-6 py-2 data-[state=active]:bg-gradient-to-r data-[state=active]:from-rose-500 data-[state=active]:to-purple-500 data-[state=active]:text-white"
              >
                All
              </TabsTrigger>
              <TabsTrigger
                value="weddings"
                className="rounded-full px-6 py-2 data-[state=active]:bg-gradient-to-r data-[state=active]:from-rose-500 data-[state=active]:to-purple-500 data-[state=active]:text-white"
              >
                Weddings
              </TabsTrigger>
              <TabsTrigger
                value="music"
                className="rounded-full px-6 py-2 data-[state=active]:bg-gradient-to-r data-[state=active]:from-rose-500 data-[state=active]:to-purple-500 data-[state=active]:text-white"
              >
                Music Events
              </TabsTrigger>

              <TabsTrigger
                value="decoration"
                className="rounded-full px-6 py-2 data-[state=active]:bg-gradient-to-r data-[state=active]:from-rose-500 data-[state=active]:to-purple-500 data-[state=active]:text-white"
              >
                Decoration
              </TabsTrigger>
              <TabsTrigger
                value="catering"
                className="rounded-full px-6 py-2 data-[state=active]:bg-gradient-to-r data-[state=active]:from-rose-500 data-[state=active]:to-purple-500 data-[state=active]:text-white"
              >
                Catering
              </TabsTrigger>
            </TabsList>
          </div>
        </Tabs>

        {/* Featured items - larger display */}
        <div className="mb-12">
          <h2 className="text-2xl font-light text-center mb-8">
            <span className="inline-block bg-gradient-to-r from-rose-500 to-purple-500 bg-clip-text text-transparent">
              Featured
            </span>{" "}
            Gallery
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredItems
              .filter((item) => item.featured)
              .map((item) => (
                <Card
                  key={item.id}
                  className="group overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer border-0"
                  onClick={() => handleImageClick(item)}
                >
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image
                      src={item.image || "/placeholder.svg"}
                      alt={item.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-100 transition-opacity duration-500"></div>

                    {/* Featured badge */}
                    <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full shadow-lg">
                      <div className="flex items-center space-x-1">
                        <Sparkles className="w-3 h-3 text-rose-500 animate-pulse" />
                        <span className="text-xs font-medium text-gray-700">
                          Featured
                        </span>
                      </div>
                    </div>

                    {/* Content overlay */}
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <Badge
                        variant="secondary"
                        className="mb-2 bg-white/20 text-white border-white/30 text-xs"
                      >
                        {item.category.charAt(0).toUpperCase() +
                          item.category.slice(1)}
                      </Badge>
                      <h3 className="text-xl font-light text-white mb-2">
                        {item.title}
                      </h3>
                      <p className="text-white/80 text-sm line-clamp-2">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </Card>
              ))}
          </div>
        </div>

        {/* Gallery grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredItems
            .filter((item) => !item.featured)
            .map((item) => (
              <Card
                key={item.id}
                className="group overflow-hidden rounded-xl shadow-md hover:shadow-lg transition-all duration-300 cursor-pointer border-0"
                onClick={() => handleImageClick(item)}
              >
                <div className="relative aspect-square overflow-hidden">
                  <Image
                    src={item.image || "/placeholder.svg"}
                    alt={item.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                  {/* Content overlay - only visible on hover for non-featured items */}
                  <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                    <Badge
                      variant="secondary"
                      className="mb-2 bg-white/20 text-white border-white/30 text-xs"
                    >
                      {item.category.charAt(0).toUpperCase() +
                        item.category.slice(1)}
                    </Badge>
                    <h3 className="text-lg font-light text-white mb-1">
                      {item.title}
                    </h3>
                    <p className="text-white/80 text-xs line-clamp-2">
                      {item.description}
                    </p>
                  </div>
                </div>
              </Card>
            ))}
        </div>

        {/* Load more button */}

        <div className="text-center mt-12">
          <a
            href="https://www.instagram.com/YOUR_USERNAME" // replace with your actual Instagram handle
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

      {/* Image lightbox dialog */}
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="max-w-5xl w-[90vw] h-[90vh] p-0 bg-black/95 border-none">
          <div className="relative w-full h-full flex flex-col">
            {/* Close button */}
            <DialogClose className="absolute top-4 right-4 z-50">
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full bg-black/50 text-white hover:bg-black/70"
              >
                <X className="h-5 w-5" />
              </Button>
            </DialogClose>

            {/* Navigation buttons */}
            <Button
              variant="ghost"
              size="icon"
              className="absolute left-4 top-1/2 -translate-y-1/2 z-50 rounded-full bg-black/50 text-white hover:bg-black/70"
              onClick={() => navigateImage("prev")}
            >
              <ChevronLeft className="h-6 w-6" />
            </Button>

            <Button
              variant="ghost"
              size="icon"
              className="absolute right-4 top-1/2 -translate-y-1/2 z-50 rounded-full bg-black/50 text-white hover:bg-black/70"
              onClick={() => navigateImage("next")}
            >
              <ChevronRight className="h-6 w-6" />
            </Button>

            {/* Image container */}
            {selectedImage && (
              <div className="flex-1 flex items-center justify-center p-8">
                <div className="relative w-full h-full">
                  <Image
                    src={selectedImage.image || "/placeholder.svg"}
                    alt={selectedImage.title}
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
            )}

            {/* Image info footer */}
            {selectedImage && (
              <div className="bg-black/80 p-6 text-white">
                <div className="flex justify-between items-start">
                  <div>
                    <Badge
                      variant="outline"
                      className="mb-2 border-white/20 text-white/80 text-xs"
                    >
                      {selectedImage.category.charAt(0).toUpperCase() +
                        selectedImage.category.slice(1)}
                    </Badge>
                    <h3 className="text-xl font-light mb-1">
                      {selectedImage.title}
                    </h3>
                    <p className="text-white/70 text-sm">
                      {selectedImage.description}
                    </p>
                  </div>

                  <div className="flex space-x-2">
                    <Button
                      variant="ghost"
                      size="icon"
                      className="rounded-full bg-white/10 hover:bg-white/20"
                    >
                      <Heart className="h-4 w-4" />
                    </Button>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="rounded-full bg-white/10 hover:bg-white/20"
                    >
                      <Share2 className="h-4 w-4" />
                    </Button>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="rounded-full bg-white/10 hover:bg-white/20"
                    >
                      <Download className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
}
