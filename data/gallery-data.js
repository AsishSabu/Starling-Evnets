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
      "Every celebration tells a unique story, and we craft each narrative with unparalleled artistry and attention to detail. Our curated collection showcases the extraordinary moments we ve had the privilege to create.",
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
    src: "/images/img6.jpg",
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
      image: "/images/stage2.jpg",
      description: "Crafted with precision and passion",
    },
    {
      id: 2,
      title: "Floral Masterpieces",
      category: "Arrangements",
      image: "/images/stage3.jpg",
      description: "Crafted with precision and passion",
    },
    {
      id: 3,
      title: "Venue Transformations",
      category: "Design",
      image: "/images/stage1.jpg",
      description: "Crafted with precision and passion",
    },
  ],

  bouquetSection: {
    badge: {
      text: "Signature Collection",
    },
    title: "Wedding",
    subtitle: "Collections",
    description:
      "A handpicked showcase of our finest wedding photography — capturing love, tradition, and celebration in timeless frames.",
  },

  bouquets: [
    {
      id: 1,
      name: "Classic Romance",
      style: "Timeless Elegance",
      image: "/images/wed1.jpg",
    },
    {
      id: 2,
      name: "Garden Dreams",
      style: "Natural Beauty",
      image: "/images/wed5.JPG",
    },
    {
      id: 3,
      name: "Modern Luxe",
      style: "Contemporary Chic",
      image: "/images/wed3.jpg",
    },
    {
      id: 4,
      name: "Vintage Charm",
      style: "Nostalgic Grace",
      image: "/images/wed4.jpg",
    },
  ],

  cta: {
    text: "Explore Full Gallery",
  },

  categories: [
    { id: "weddings", name: "Wedding" },
    { id: "corporate", name: "Corporate Events" },
    { id: "decor", name: "Decoration" },
    { id: "entertainment", name: "Entertainment" },
    { id: "catering", name: "Catering" },
    { id: "social", name: "Social Events" },
  ],

  items: [
    {
      id: "w1",
      title: "Traditional South Indian Wedding",
      description:
        "A beautiful ceremony with authentic decorations and customs",
      image: "/placeholder.svg?height=600&width=800&text=Traditional+Wedding",
      category: "weddings",
      featured: true,
    },
    {
      id: "w2",
      title: "Modern Wedding Reception",
      description: "Elegant reception with contemporary design elements",
      image: "/placeholder.svg?height=600&width=800&text=Modern+Reception",
      category: "weddings",
      featured: true,
    },
    {
      id: "w3",
      title: "Destination Beach Wedding",
      description: "Romantic beachside ceremony with tropical elements",
      image: "/placeholder.svg?height=600&width=800&text=Beach+Wedding",
      category: "weddings",
      featured: false,
    },
    {
      id: "d1",
      title: "Traditional Stage Decoration",
      description: "Ornate stage setup with floral and traditional elements",
      image: "/placeholder.svg?height=600&width=800&text=Stage+Decoration",
      category: "decor",
      featured: true,
    },
    {
      id: "d2",
      title: "Wedding Mandap Design",
      description: "Beautifully crafted mandap with traditional elements",
      image: "/placeholder.svg?height=600&width=800&text=Wedding+Mandap",
      category: "decor",
      featured: false,
    },
    {
      id: "d3",
      title: "Corporate Event Setup",
      description:
        "Professional stage and seating arrangement for business events",
      image: "/placeholder.svg?height=600&width=800&text=Corporate+Setup",
      category: "decor",
      featured: false,
    },
    {
      id: "e1",
      title: "Live Band Performance",
      description: "Professional musicians creating the perfect atmosphere",
      image: "/placeholder.svg?height=600&width=800&text=Live+Band",
      category: "entertainment",
      featured: true,
    },
    {
      id: "e2",
      title: "DJ Night Setup",
      description: "High-energy DJ setup with lighting and sound systems",
      image: "/placeholder.svg?height=600&width=800&text=DJ+Night",
      category: "entertainment",
      featured: true,
    },
    {
      id: "e3",
      title: "Traditional Dance Performance",
      description: "Cultural dance showcase at a corporate event",
      image: "/placeholder.svg?height=600&width=800&text=Dance+Performance",
      category: "entertainment",
      featured: false,
    },
    {
      id: "c1",
      title: "Product Launch Event",
      description: "Successful product unveiling with media coverage",
      image: "/placeholder.svg?height=600&width=800&text=Product+Launch",
      category: "corporate",
      featured: true,
    },
    {
      id: "c2",
      title: "Annual Corporate Meeting",
      description: "Well-organized conference with technical setup",
      image: "/placeholder.svg?height=600&width=800&text=Corporate+Meeting",
      category: "corporate",
      featured: false,
    },
    {
      id: "c3",
      title: "Award Ceremony",
      description: "Elegant award function with professional presentation",
      image: "/placeholder.svg?height=600&width=800&text=Award+Ceremony",
      category: "corporate",
      featured: false,
    },
    {
      id: "f1",
      title: "Wedding Feast Setup",
      description: "Elaborate traditional meal arrangement",
      image: "/placeholder.svg?height=600&width=800&text=Wedding+Feast",
      category: "catering",
      featured: true,
    },
    {
      id: "f2",
      title: "Corporate Lunch Buffet",
      description: "Professional catering for business events",
      image: "/placeholder.svg?height=600&width=800&text=Corporate+Buffet",
      category: "catering",
      featured: false,
    },
    {
      id: "f3",
      title: "Dessert Station",
      description: "Creative sweet treats display for special events",
      image: "/placeholder.svg?height=600&width=800&text=Dessert+Station",
      category: "catering",
      featured: false,
    },
    {
      id: "s1",
      title: "Birthday Celebration",
      description: "Colorful birthday party with themed decorations",
      image: "/placeholder.svg?height=600&width=800&text=Birthday+Party",
      category: "social",
      featured: true,
    },
    {
      id: "s2",
      title: "House Warming Ceremony",
      description: "Traditional house warming with cultural elements",
      image: "/placeholder.svg?height=600&width=800&text=House+Warming",
      category: "social",
      featured: false,
    },
    {
      id: "s3",
      title: "College Cultural Fest",
      description: "Vibrant campus event with multiple activities",
      image: "/placeholder.svg?height=600&width=800&text=College+Fest",
      category: "social",
      featured: true,
    },
  ],
};

export const galleryItems = [
  {
    id: "w1",
    title: "Wedding Planning",
    image: "/images/img1.jpg",
  },
  {
    id: "w2",
    title: "Grand Entries",
    image: "/images/img2.jpg",
  },
  {
    id: "w3",
    title: "Bridal Bouquets",
    image: "/images/img3.jpg",
  },
  {
    id: "w4",
    title: "Destination Weddings",
    image: "/images/img4.jpg",
  },
  {
    id: "d1",
    title: "Stage Decoration",
    image: "/images/img5.jpg",
  },
  {
    id: "d2",
    title: "Venue Styling",
    image: "/images/stage1.jpg",
  },
  {
    id: "d3",
    title: "Car Decoration",
    image: "/images/stage2.jpg",
  },
  {
    id: "m1",
    title: "Light & Sound",
    image: "/images/stage3.jpg",
  },
  {
    id: "c1",
    title: "Event Management",
    image: "/images/stage4.jpg",
  },
  {
    id: "c2",
    title: "Venue & Transport",
    image: "/images/stage5.jpg",
  },
  {
    id: "f1",
    title: "Experience Planning",
    image: "/images/stage6.jpg",
  },
    {
    id: "f2",
    title: "Experience Planning",
    image: "/images/stage7.jpg",
  },
];
