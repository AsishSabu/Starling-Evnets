import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { AboutHero } from "@/components/about-hero"
import { AboutStory } from "@/components/about-story"
import { AboutValues } from "@/components/about-values"
import { AboutStats } from "@/components/about-stats"

export const metadata = {
  title: "About Us | Starling Events",
  description:
    "Learn about Starling Events - our story, team, and passion for creating unforgettable moments and experiences.",
}

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <AboutHero />
        <AboutStory />
        <AboutStats />
        <AboutValues />
      </main>
      <Footer />
    </div>
  )
}
