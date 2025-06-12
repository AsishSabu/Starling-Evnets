import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Sparkles, Heart, Lightbulb, Users, Award, Clock } from "lucide-react"

const values = [
  {
    icon: Heart,
    title: "Passion",
    description: "We pour our heart into every event, treating each celebration as if it were our own.",
    color: "rose",
  },
  {
    icon: Lightbulb,
    title: "Creativity",
    description: "Innovation and fresh ideas drive us to create unique experiences that stand out.",
    color: "amber",
  },
  {
    icon: Users,
    title: "Collaboration",
    description: "We work closely with our clients, making their vision the foundation of our planning.",
    color: "purple",
  },
  {
    icon: Award,
    title: "Excellence",
    description: "We strive for perfection in every detail, ensuring flawless execution of your event.",
    color: "blue",
  },
  {
    icon: Clock,
    title: "Reliability",
    description: "You can count on us to deliver on time, every time, with consistent quality service.",
    color: "green",
  },
  {
    icon: Sparkles,
    title: "Magic",
    description: "We believe in creating those special moments that take your breath away.",
    color: "pink",
  },
]

export function AboutValues() {
  return (
    <section className="py-20 bg-gradient-to-b from-rose-50/30 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-6 px-6 py-2 text-sm font-light border-rose-200 text-rose-600">
            <Sparkles className="w-4 h-4 mr-2" />
            Our Values
          </Badge>
          <h2 className="text-4xl md:text-5xl font-light mb-8">
            What{" "}
            <span className="bg-gradient-to-r from-rose-500 to-purple-500 bg-clip-text text-transparent">
              Drives Us
            </span>
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed font-light max-w-3xl mx-auto">
            Our core values shape every decision we make and every event we plan. They're not just words on a page –
            they're the principles that guide our daily work.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {values.map((value, index) => {
            const IconComponent = value.icon
            return (
              <Card
                key={index}
                className="group hover:shadow-xl transition-all duration-300 border-0 bg-white/80 backdrop-blur-xl hover:scale-105"
              >
                <CardContent className="p-8 text-center">
                  <div
                    className={`bg-${value.color}-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-${value.color}-200 transition-colors duration-300`}
                  >
                    <IconComponent className={`h-8 w-8 text-${value.color}-600`} />
                  </div>
                  <h3 className="text-xl font-semibold mb-4 text-gray-800">{value.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{value.description}</p>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
