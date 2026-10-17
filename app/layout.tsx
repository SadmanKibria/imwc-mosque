import type { Metadata, Viewport } from "next"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

export const metadata: Metadata = {
  metadataBase: new URL("https://www.ilfordmasjid.co.uk"),
  title: { default: "Ilford Muslim Welfare Association | Mosque, Madrasa & Youth", template: "%s | IMWA Ilford" },
  description: "A welcoming mosque and community hub in Ilford offering daily prayers, Quran and Islamic studies, youth activities, mentoring and welfare support.",
  keywords: ["Ilford mosque", "mosque near me", "prayer times Ilford", "Ilford madrasa", "Quran classes Ilford", "Muslim youth club Ilford", "Ilford Muslim Welfare Association"],
  alternates: { canonical: "/" },
  openGraph: {
    title: "Ilford Muslim Welfare Association",
    description: "Faith, friendship and a place to belong in the heart of Ilford.",
    url: "https://www.ilfordmasjid.co.uk",
    siteName: "Ilford Muslim Welfare Association",
    locale: "en_GB",
    type: "website",
    images: [{ url: "/images/youth-football.jpg", width: 1600, height: 1200, alt: "Young people at an IMWA community football day" }]
  },
  robots: { index: true, follow: true },
  icons: { icon: "/icon.png", apple: "/icon.png" }
}

export const viewport: Viewport = { width: "device-width", initialScale: 1, themeColor: "#081f26" }

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}<Analytics /></body></html>
}
