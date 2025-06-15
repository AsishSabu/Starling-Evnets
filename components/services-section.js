import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
// import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Sparkles } from "lucide-react";
import { servicesData, mainServices } from "@/data/services-data";

const services = servicesData.services.filter((service) => service.featured);



export function ServicesSection() {
  return (
    <section
      id="services"
      className="pt-20 pb-5 bg-gradient-to-b from-background to-muted/20"
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
                    <p className="text-muted-foreground mb-4 line-clamp-5">
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
                    <p className="text-muted-foreground mb-4 line-clamp-5">
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

        {/* <div className="text-center">
          <Button size="lg" variant="outline" className="px-8">
            View All Services
          </Button>
        </div> */}
      </div>
    </section>
  );
}
