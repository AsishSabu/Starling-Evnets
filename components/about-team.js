import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Users, Mail, Linkedin, Twitter } from "lucide-react"

const teamMembers = [
  {
    name: "Sarah Johnson",
    role: "Founder & Creative Director",
    bio: "With over 8 years in event planning, Sarah brings creativity and vision to every project.",
    image: "/placeholder.svg?height=400&width=400&text=Sarah+Johnson",
    specialties: ["Wedding Planning", "Creative Direction", "Vendor Relations"],
  },
  {
    name: "Michael Chen",
    role: "Operations Manager",
    bio: "Michael ensures every event runs smoothly with his meticulous attention to detail.",
    image: "/placeholder.svg?height=400&width=400&text=Michael+Chen",
    specialties: ["Event Coordination", "Logistics", "Timeline Management"],
  },
  {
    name: "Emily Rodriguez",
    role: "Design Specialist",
    bio: "Emily transforms spaces with her exceptional eye for design and decoration.",
    image: "/placeholder.svg?height=400&width=400&text=Emily+Rodriguez",
    specialties: ["Floral Design", "Venue Styling", "Theme Development"],
  },
  {
    name: "David Thompson",
    role: "Technical Director",
    bio: "David handles all technical aspects, from sound systems to lighting design.",
    image: "/placeholder.svg?height=400&width=400&text=David+Thompson",
    specialties: ["Audio/Visual", "Lighting Design", "Technical Setup"],
  },
]

export function AboutTeam() {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-rose-50/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-6 px-6 py-2 text-sm font-light border-rose-200 text-rose-600">
            <Users className="w-4 h-4 mr-2" />
            Our Team
          </Badge>
          <h2 className="text-4xl md:text-5xl font-light mb-8">
            Meet the{" "}
            <span className="bg-gradient-to-r from-rose-500 to-purple-500 bg-clip-text text-transparent">
              Dream Team
            </span>
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed font-light max-w-3xl mx-auto">
            Our talented team of event professionals brings diverse skills, creative vision, and years of experience to
            make your event extraordinary.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {teamMembers.map((member, index) => (
            <Card
              key={index}
              className="group hover:shadow-xl transition-all duration-300 border-0 bg-white/80 backdrop-blur-xl overflow-hidden"
            >
              <div className="relative aspect-square overflow-hidden">
                <Image
                  src={member.image || "/placeholder.svg"}
                  alt={member.name}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                {/* Social links overlay */}
                <div className="absolute bottom-4 left-4 right-4 flex justify-center space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <Button size="icon" variant="secondary" className="w-8 h-8 bg-white/20 hover:bg-white/30">
                    <Mail className="h-4 w-4" />
                  </Button>
                  <Button size="icon" variant="secondary" className="w-8 h-8 bg-white/20 hover:bg-white/30">
                    <Linkedin className="h-4 w-4" />
                  </Button>
                  <Button size="icon" variant="secondary" className="w-8 h-8 bg-white/20 hover:bg-white/30">
                    <Twitter className="h-4 w-4" />
                  </Button>
                </div>
              </div>

              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-1 text-gray-800">{member.name}</h3>
                <p className="text-rose-600 font-medium mb-3">{member.role}</p>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">{member.bio}</p>

                <div className="space-y-2">
                  <p className="text-xs font-medium text-gray-700">Specialties:</p>
                  <div className="flex flex-wrap gap-1">
                    {member.specialties.map((specialty, i) => (
                      <Badge key={i} variant="outline" className="text-xs">
                        {specialty}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Join our team CTA */}
        <Card className="bg-gradient-to-r from-rose-500 to-purple-500 text-white text-center">
          <CardContent className="p-12">
            <h3 className="text-3xl font-light mb-4">Join Our Amazing Team</h3>
            <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
              We're always looking for passionate, creative individuals who share our love for creating magical moments.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="secondary" size="lg" className="bg-white text-rose-600 hover:bg-gray-100">
                View Open Positions
              </Button>
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-white/10">
                Send Your Resume
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
