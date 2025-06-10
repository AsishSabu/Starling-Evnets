import { Sparkles, Heart } from "lucide-react";

export const galleryData = {
  header: {
    badge: {
      text: "Our Masterpieces",
      icon: Sparkles,
    },
    title: "Featured",
    subtitle: "Gallery",
    description:
      "Every celebration tells a unique story, and we craft each narrative with unparalleled artistry and attention to detail. Our curated collection showcases the extraordinary moments we've had the privilege to create.",
  },

  mainFeatures: [
    {
      id: 1,
      position: "left",
      title: "Luxury",
      subtitle: "Decoration",
      description:
        "Transform ordinary spaces into extraordinary experiences. Our bespoke decoration services blend elegance with innovation, creating atmospheres that captivate and inspire.",
      buttonText: "DISCOVER MORE",
      rating: 5,
      gradient: "from-rose-400 to-purple-500",
    },
    {
      id: 2,
      position: "right",
      title: "Bespoke",
      subtitle: "Events",
      description:
        "Every dream deserves a perfect execution. We collaborate intimately with our clients to bring their unique visions to life, crafting celebrations that reflect their personal story and style.",
      buttonText: "VIEW DETAILS",
      rating: 5,
      gradient: "from-purple-400 to-amber-500",
    },
  ],

  showcaseImage: {
    src: "/images/img1.jpg",
    alt: "Elegant bride with bouquet",
    badge: {
      text: "Premium",
      icon: Heart,
    },
  },

  galleryGrid: [
    {
      id: 1,
      title: "Elegant Table Settings",
      category: "Decoration",
      image: "/images/img2.jpg",
      description: "Crafted with precision and passion",
    },
    {
      id: 2,
      title: "Floral Masterpieces",
      category: "Arrangements",
      image: "/images/img2.jpg",
      description: "Crafted with precision and passion",
    },
    {
      id: 3,
      title: "Venue Transformations",
      category: "Design",
      image: "/images/img2.jpg",
      description: "Crafted with precision and passion",
    },
  ],

  bouquetSection: {
    badge: {
      text: "Signature Collection",
      icon: Heart,
    },
    title: "Bridal",
    subtitle: "Bouquets",
    description:
      "Each bouquet is a work of art, meticulously crafted to complement your unique style and the essence of your special day.",
  },

  bouquets: [
    {
      id: 1,
      name: "Classic Romance",
      style: "Timeless Elegance",
      price: "$150",
      image: "/images/img2.jpg",
    },
    {
      id: 2,
      name: "Garden Dreams",
      style: "Natural Beauty",
      price: "$180",
      image: "/images/img2.jpg",
    },
    {
      id: 3,
      name: "Modern Luxe",
      style: "Contemporary Chic",
      price: "$220",
      image: "/images/img2.jpg",
    },
    {
      id: 4,
      name: "Vintage Charm",
      style: "Nostalgic Grace",
      price: "$195",
      image: "/images/img2.jpg",
    },
  ],

  cta: {
    text: "Explore Full Gallery",
  },
};
