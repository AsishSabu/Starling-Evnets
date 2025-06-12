import { Card, CardContent } from "@/components/ui/card"
import { Users, Calendar, Award, Heart } from "lucide-react"

const stats = [
  {
    icon: Users,
    number: "500+",
    label: "Happy Clients",
    description: "Satisfied customers who trusted us with their special moments",
    color: "rose",
  },
  {
    icon: Calendar,
    number: "1000+",
    label: "Events Planned",
    description: "Successful events delivered with excellence and creativity",
    color: "purple",
  },
  {
    icon: Award,
    number: "15+",
    label: "Awards Won",
    description: "Industry recognition for outstanding event planning services",
    color: "amber",
  },
  {
    icon: Heart,
    number: "5+",
    label: "Years Experience",
    description: "Years of dedicated service in creating magical moments",
    color: "green",
  },
]

export function AboutStats() {
  return (
    <section className="py-20 bg-gradient-to-r from-rose-500 via-purple-500 to-amber-500">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light mb-6 text-white">Our Impact in Numbers</h2>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            These numbers represent more than statistics – they represent dreams fulfilled, moments celebrated, and
            memories created.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon
            return (
              <Card
                key={index}
                className="bg-white/10 backdrop-blur-xl border-white/20 text-white hover:bg-white/20 transition-all duration-300 hover:scale-105"
              >
                <CardContent className="p-8 text-center">
                  <div className="bg-white/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                    <IconComponent className="h-8 w-8 text-white" />
                  </div>
                  <div className="text-4xl font-bold mb-2">{stat.number}</div>
                  <div className="text-xl font-semibold mb-3">{stat.label}</div>
                  <p className="text-white/80 text-sm leading-relaxed">{stat.description}</p>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
