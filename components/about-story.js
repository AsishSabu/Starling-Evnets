import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Lightbulb, Heart, Award } from "lucide-react"

export function AboutStory() {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-rose-50/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <Badge variant="outline" className="mb-6 px-6 py-2 text-sm font-light border-rose-200 text-rose-600">
            Our Journey
          </Badge>
          <h2 className="text-4xl md:text-5xl font-light mb-8">
            How{" "}
            <span className="bg-gradient-to-r from-rose-500 to-purple-500 bg-clip-text text-transparent">
              Starling Events
            </span>{" "}
            Began
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed font-light">
            Our story started with a simple belief: every moment worth celebrating deserves to be perfect. What began as
            a passion project has grown into a trusted partner for life s most important occasions.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-light mb-4 text-gray-800">The Beginning</h3>
              <p className="text-gray-600 leading-relaxed">
                Founded in 2019 by a team of passionate event enthusiasts, Starling Events emerged from a desire to
                bring fresh creativity and personal touch to event planning. We started with a simple mission: to make
                every celebration as unique as the people we serve.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-light mb-4 text-gray-800">Our Growth</h3>
              <p className="text-gray-600 leading-relaxed">
                Over the years, we ve had the privilege of planning hundreds of events, from intimate weddings to
                large-scale corporate gatherings. Each event has taught us something new and helped us refine our
                approach to creating truly memorable experiences.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-light mb-4 text-gray-800">Today & Tomorrow</h3>
              <p className="text-gray-600 leading-relaxed">
                Today, we re proud to be one of the most trusted event planning companies in the region. But we re not
                stopping here – we continue to innovate, expand our services, and find new ways to exceed our clients
                expectations.
              </p>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-[4/5] overflow-hidden rounded-2xl shadow-xl">
              <Image
                src="/placeholder.svg?height=800&width=600&text=Our+Story"
                alt="Starling Events journey"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>

        {/* Mission, Vision, Values */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="text-center p-8 bg-gradient-to-br from-rose-50 to-white border-rose-100 hover:shadow-lg transition-shadow duration-300">
            <CardContent className="p-0">
              <div className="bg-rose-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Lightbulb className="h-8 w-8 text-rose-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-gray-800">Our Mission</h3>
              <p className="text-gray-600 leading-relaxed">
                To transform your vision into reality through creative planning, meticulous execution, and unwavering
                dedication to excellence.
              </p>
            </CardContent>
          </Card>

          <Card className="text-center p-8 bg-gradient-to-br from-purple-50 to-white border-purple-100 hover:shadow-lg transition-shadow duration-300">
            <CardContent className="p-0">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Heart className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-gray-800">Our Vision</h3>
              <p className="text-gray-600 leading-relaxed">
                To be the premier event planning company that creates magical moments and lasting memories for every
                client we serve.
              </p>
            </CardContent>
          </Card>

          <Card className="text-center p-8 bg-gradient-to-br from-amber-50 to-white border-amber-100 hover:shadow-lg transition-shadow duration-300">
            <CardContent className="p-0">
              <div className="bg-amber-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Award className="h-8 w-8 text-amber-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-gray-800">Our Values</h3>
              <p className="text-gray-600 leading-relaxed">
                Creativity, integrity, attention to detail, and genuine care for our clients guide everything we do.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
