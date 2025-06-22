import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Starling Events | Best Event Management Company in India",
  description:
    "Starling Events offers premium wedding, corporate, and party event planning services across Kerala.",
  keywords:
    "Starling Events, event management India, wedding planners, corporate event planners, birthday party organizers, starlingevent.in",
  authors: [{ name: "Starling Events Team" }],
  creator: "Starling Events",
  openGraph: {
    title: "Starling Events | Best Event Management Company in kerala",
    description:
      "Trusted event planners for weddings, corporate functions, and personal celebrations.",
    url: "https://starlingevent.in",
    siteName: "Starling Events",
    images: [
      {
        url: "/opengraph.png",
        width: 1200,
        height: 630,
        alt: "Starling Events - Premium Event Planners",
      },
    ],
    type: "website",
    locale: "en_IN",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.ico" />

        <meta name="robots" content="index, follow" />
        <meta name="theme-color" content="#ffffff" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
