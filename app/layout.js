import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "StarlingEvents - Premium Event Management Services",
  description:
    "Creating unforgettable experiences through exceptional event planning and management. Weddings, corporate events, birthdays, and more.",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
