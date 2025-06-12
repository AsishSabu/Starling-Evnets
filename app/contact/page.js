import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { ContactHero } from "@/components/contact-hero"
import { ContactForm } from "@/components/contact-form"
import { ContactInfo } from "@/components/contact-info"
import { ContactMap } from "@/components/contact-map"

export const metadata = {
  title: "Contact Us | Starling Events",
  description:
    "Get in touch with Starling Events for your dream event planning. We're here to make your special moments unforgettable.",
}

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <ContactHero />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
          <ContactForm />
          <ContactInfo />
        </div>
        <ContactMap />
      </main>
      <Footer />
    </div>
  )
}
