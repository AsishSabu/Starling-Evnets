import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Heart, Music, Headphones, Building2, Sparkles } from "lucide-react";
import { servicesData } from "@/data/services-data";

// Replace the existing services array with the data from the services-data.js file
// Find where the services array is defined (likely near the top of the file) and replace it with:
const services = servicesData.services
  .filter((service) => service.featured)
  .slice(0, 6);

const mainServices = [
  {
    id: 1,
    title: "Wedding Planning",
    description:
      "We plan to make your every moment just as a dream. Complete wedding planning with decoration, beautician services, and all arrangements.",
    image: "/images/img3.jpg",
    icon: Heart,
    features: ["Decoration", "Beautician Services", "Photography", "Catering"],
    price: "Starting from $2,500",
    category: "main",
  },
  {
    id: 2,
    title: "Live Music Concerts",
    description:
      "Where words fail, music speaks. Professional live music events with bands, orchestra, choir, and complete sound setup.",
    image: "/images/img4.jpg",
    icon: Music,
    features: ["Music Bands", "Orchestra", "Choir", "Sound System"],
    price: "Starting from $3,500",
    category: "main",
  },
  {
    id: 3,
    title: "DJ Nights",
    description:
      "Everything I make as a producer, I visualize it as a DJ first. Professional DJ services with all those tested beats.",
    image: "/images/img5.jpg",
    icon: Headphones,
    features: [
      "Professional DJ",
      "Sound System",
      "Lighting",
      "Music Production",
    ],
    price: "Starting from $1,500",
    category: "main",
  },
  {
    id: 4,
    title: "Corporate Events",
    description:
      "Professional corporate event management with complete audio-visual setup, catering, and decoration services.",
    image: "/images/img6.jpg",
    icon: Building2,
    features: [
      "AV Setup",
      "Catering",
      "Professional Photography",
      "Event Coordination",
    ],
    price: "Starting from $2,000",
    category: "main",
  },
];

// const additionalServices = [
//   {
//     id: 5,
//     title: "Photography & Videography",
//     description: "We are making photographs to understand what our lives mean to us. Professional event documentation.",
//     image: "/images/img3.jpg",
//     icon: Camera,
//     features: ["Event Photography", "Videography", "Live Streaming", "Photo Editing"],
//     price: "Starting from $800",
//     category: "additional",
//   },
//   {
//     id: 6,
//     title: "Catering Services",
//     description: "Now we offer all catering works. Complete food and beverage solutions for your events.",
//     image: "/placeholder.svg?height=300&width=400",
//     icon: Utensils,
//     features: ["Menu Planning", "Food Service", "Beverage Setup", "Dietary Options"],
//     price: "Starting from $25/person",
//     category: "additional",
//   },
//   {
//     id: 7,
//     title: "Light & Sound",
//     description:
//       "In the right light at the right time everything is extraordinary. Professional lighting and sound solutions.",
//     image: "/placeholder.svg?height=300&width=400",
//     icon: Lightbulb,
//     features: ["Stage Lighting", "Sound Systems", "AV Equipment", "Technical Support"],
//     price: "Starting from $1,200",
//     category: "additional",
//   },
//   {
//     id: 8,
//     title: "Decoration & Design",
//     description: "There are three responses to design - Yes, no and Wow! Wow is the one we aim for.",
//     image: "/placeholder.svg?height=300&width=400",
//     icon: Palette,
//     features: ["Event Decoration", "Floral Arrangements", "Theme Design", "Venue Styling"],
//     price: "Starting from $1,000",
//     category: "additional",
//   },
// ]

export function ServicesSection() {
  return (
    <section
      id="services"
      className="pt-20 pb-10 bg-gradient-to-b from-background to-muted/20"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">
            <Sparkles className="w-4 h-4 mr-2" />
            Our Services
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            We Plan to Make Your Every Moment Just as a Dream
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            From intimate celebrations to grand events, we offer comprehensive
            event management services with professional expertise in music,
            decoration, catering, and technical support.
          </p>
        </div>

        {/* Main Services */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold text-center mb-8 text-primary">
            Main Event Services
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {mainServices.map((service) => {
              return (
                <Card
                  key={service.id}
                  className="group hover:shadow-xl transition-all duration-300 overflow-hidden  p-0"
                >
                  <div className="relative h-64 overflow-hidden">
                    <Image
                      src={service.image || "/placeholder.svg"}
                      alt={service.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors" />
                  </div>
                  <CardContent className="p-4">
                    <h3 className="text-xl font-semibold mb-3">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground mb-4 line-clamp-3">
                      {service.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {service.features.map((feature, index) => (
                        <Badge
                          key={index}
                          variant="outline"
                          className="text-xs"
                        >
                          {feature}
                        </Badge>
                      ))}
                    </div>
                    {/* <Button className="w-full group-hover:bg-primary/90 transition-colors">Learn More</Button> */}
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Additional Services */}
        <div className="mb-12">
          <h3 className="text-2xl font-semibold text-center mb-8 text-secondary-foreground">
            Additional Services
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service) => {
              return (
                <Card
                  key={service.id}
                  className="group hover:shadow-xl transition-all duration-300 overflow-hidden  p-0"
                >
                  <div className="relative h-64 overflow-hidden">
                    <Image
                      src={service.image || "/placeholder.svg"}
                      alt={service.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors" />
                  </div>
                  <CardContent className="p-4">
                    <h3 className="text-xl font-semibold mb-3">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground mb-4 line-clamp-3">
                      {service.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {service.features.map((feature, index) => (
                        <Badge
                          key={index}
                          variant="outline"
                          className="text-xs"
                        >
                          {feature}
                        </Badge>
                      ))}
                    </div>
                    {/* <Button className="w-full group-hover:bg-primary/90 transition-colors">Learn More</Button> */}
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        <div className="text-center">
          <Button size="lg" variant="outline" className="px-8">
            View All Services
          </Button>
        </div>
      </div>
    </section>
  );
}
