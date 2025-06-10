import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Heart, Building2, Cake,  } from "lucide-react"

const services = [
  {
    id: 1,
    title: "Wedding Planning",
    description:
      "Complete wedding planning services from venue selection to day-of coordination. Make your dream wedding a reality.",
    image: "/images/img1.jpg",
    icon: Heart,
    features: ["Venue Selection", "Catering", "Photography", "Decoration"],
    price: "Starting from $2,500",
  },
  {
    id: 2,
    title: "Corporate Events",
    description:
      "Professional corporate event management including conferences, seminars, product launches, and team building activities.",
    image: "/images/img2.jpg",
    icon: Building2,
    features: ["Conference Planning", "Team Building", "Product Launches", "Networking Events"],
    price: "Starting from $1,800",
  },
  {
    id: 3,
    title: "Birthday Parties",
    description: "Memorable birthday celebrations for all ages. From intimate gatherings to grand celebrations.",
    image: "/images/img3.jpg",
    icon: Cake,
    features: ["Theme Planning", "Entertainment", "Catering", "Decoration"],
    price: "Starting from $800",
  },

]

export function ServicesSection() {
  return (
    <section id="services" className="py-20 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">
            Our Services
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Services We Provide</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            From intimate gatherings to grand celebrations, we offer comprehensive event management services tailored to
            make your special occasions unforgettable.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => {
            const IconComponent = service.icon
            return (
              <Card key={service.id} className="group hover:shadow-xl transition-all duration-300 overflow-hidden">
                <div className="relative h-80 overflow-hidden">
                  <Image
                    src={service.image || "/placeholder.svg"}
                    alt={service.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors" />
                  {/* <div className="absolute top-4 left-4">
                    <div className="bg-white/90 p-2 rounded-full">
                      <IconComponent className="h-6 w-6 text-primary" />
                    </div>
                  </div> */}
                  {/* <div className="absolute bottom-4 right-4">
                    <Badge variant="secondary" className="bg-white/90 text-black">
                      {service.price}
                    </Badge>
                  </div> */}
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                  <p className="text-muted-foreground mb-4 line-clamp-3">{service.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {service.features.map((feature, index) => (
                      <Badge key={index} variant="outline" className="text-xs">
                        {feature}
                      </Badge>
                    ))}
                  </div>
                  <Button className="w-full group-hover:bg-primary/90 transition-colors">Learn More</Button>
                </CardContent>
              </Card>
            )
          })}
        </div>

        <div className="text-center mt-12">
          <Button size="lg" variant="outline" className="px-8">
            View All Services
          </Button>
        </div>
      </div>
    </section>
  )
}
