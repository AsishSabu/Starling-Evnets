import { Navbar } from "@/components/navbar"
import { HeroCarousel } from "@/components/hero-carousel"
import { ServicesSection } from "@/components/services-section"
import { FeaturedGallery } from "@/components/featured-gallery"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <HeroCarousel />
        <ServicesSection />
        <FeaturedGallery />
        <ContactSection />
      </main>
      <Footer />
    </div>
  )
}
