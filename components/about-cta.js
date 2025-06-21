"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Phone, Mail, MessageCircle, Copy, Check, MapPin } from "lucide-react"
import { useState } from "react"

export function AboutCTA() {
  const [copiedEmail, setCopiedEmail] = useState(false)
  const [copiedPhone, setCopiedPhone] = useState(false)

  const handleCopyEmail = async () => {
    await navigator.clipboard.writeText("starlingeventscmt@gmail.com")
    setCopiedEmail(true)
    setTimeout(() => setCopiedEmail(false), 2000)
  }

  const handleCopyPhone = async () => {
    await navigator.clipboard.writeText("+919400632524")
    setCopiedPhone(true)
    setTimeout(() => setCopiedPhone(false), 2000)
  }

  return (
    <section className="py-20 bg-gradient-to-r from-rose-500 via-purple-500 to-amber-500">
      <div className="container mx-auto px-4">
        <Card className="bg-white/10 backdrop-blur-xl border-white/20 text-white max-w-4xl mx-auto">
          <CardContent className="p-12 text-center">
            <h2 className="text-4xl md:text-5xl font-light mb-6">Ready to Create Magic?</h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Your perfect event is just one conversation away. Choose your preferred way to connect with us.
            </p>

            {/* Primary Contact Methods */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              {/* Email */}
              <Button
                size="lg"
                className="bg-white text-rose-600 hover:bg-white/90 px-6 py-4 rounded-full h-auto"
                onClick={() =>
                  window.open(
                    "mailto:starlingeventscmt@gmail.com?subject=Event Planning Inquiry&body=Hi! I would like to discuss planning an event. Please contact me back.",
                  )
                }
              >
                <Mail className="w-5 h-5 mr-3" />
                <div className="text-left">
                  <div className="font-semibold">Email Us</div>
                  <div className="text-sm opacity-80">starlingeventscmt@gmail.com</div>
                </div>
              </Button>

              {/* WhatsApp */}
              <Button
                size="lg"
                className="bg-green-500 text-white hover:bg-green-600 px-6 py-4 rounded-full h-auto"
                onClick={() =>
                  window.open(
                    "https://wa.me/919400632524?text=Hi! I would like to discuss planning an event with Starling Events.",
                    "_blank",
                  )
                }
              >
                <MessageCircle className="w-5 h-5 mr-3" />
                <div className="text-left">
                  <div className="font-semibold">WhatsApp</div>
                  <div className="text-sm opacity-80">Quick Response</div>
                </div>
              </Button>
            </div>

            {/* Secondary Contact Methods */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
              {/* Phone */}
              <Button
                variant="outline"
                className="border-white text-white hover:bg-white/10 px-6 py-3 rounded-full"
                onClick={() => window.open("tel:+919400632524")}
              >
                <Phone className="w-4 h-4 mr-2" />
                Call: +91 94006 32524
              </Button>

              {/* Copy Email */}
              <Button
                variant="outline"
                className="border-white text-white hover:bg-white/10 px-6 py-3 rounded-full"
                onClick={handleCopyEmail}
              >
                {copiedEmail ? (
                  <>
                    <Check className="w-4 h-4 mr-2" />
                    Email Copied!
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4 mr-2" />
                    Copy Email
                  </>
                )}
              </Button>
            </div>

            {/* Contact Info Grid */}
            <div className="bg-white/10 rounded-2xl p-6 backdrop-blur-sm">
              <h3 className="text-lg font-semibold mb-6">Multiple Ways to Reach Us</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 text-sm">
                <div className="text-center">
                  <Phone className="w-5 h-5 mx-auto mb-2" />
                  <div className="font-medium">Primary</div>
                  <div className="text-white/80">+91 94006 32524</div>
                </div>
                <div className="text-center">
                  <Phone className="w-5 h-5 mx-auto mb-2" />
                  <div className="font-medium">Secondary</div>
                  <div className="text-white/80">+91 90613 26616</div>
                </div>
                <div className="text-center">
                  <MapPin className="w-5 h-5 mx-auto mb-2" />
                  <div className="font-medium">Location</div>
                  <div className="text-white/80">Cumbummettu</div>
                </div>
                <div className="text-center">
                  <MessageCircle className="w-5 h-5 mx-auto mb-2" />
                  <div className="font-medium">Response Time</div>
                  <div className="text-white/80">Within 2 hours</div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
