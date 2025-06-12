import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { GalleryHero } from "@/components/gallery-hero"
import { GalleryGrid } from "@/components/gallery-grid"

export const metadata = {
  title: "Gallery | Starling Events",
  description:
    "Explore our portfolio of stunning events, decorations, and memorable moments we ve created for our clients.",
}

export default function GalleryPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <GalleryHero />
        <GalleryGrid />
      </main>
      <Footer />
    </div>
  )
}
