import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Ilford Muslim Welfare Centre | Islamic Education & Community Services",
  description:
    "Ilford Muslim Welfare Centre (IMWC) - A community mosque serving Ilford with daily prayer times, Hifz course, Islamic studies, madrasa, social welfare advice, dawah activities, and youth services. Located at 379 Oaklands Park Ave, Ilford IG1 1TG. Call 07950 206007.",
  keywords: [
    "Ilford mosque",
    "Ilford Muslim Welfare Centre",
    "IMWC",
    "Islamic centre Ilford",
    "prayer times Ilford",
    "Hifz course Ilford",
    "Islamic studies Ilford",
    "madrasa Ilford",
    "Muslim community Ilford",
    "Jumu'ah prayer",
    "Quran classes",
    "Islamic education",
    "dawah Ilford",
    "youth services mosque",
  ],
  authors: [{ name: "Sadman Kibria", url: "https://sadmankibria.com" }],
  creator: "Sadman Kibria",
  publisher: "Ilford Muslim Welfare Centre",
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: "https://imwcentre.co.uk",
    siteName: "Ilford Muslim Welfare Centre",
    title: "Ilford Muslim Welfare Centre | Islamic Education & Community Services",
    description:
      "Community mosque in Ilford offering prayer times, Hifz course, Islamic studies, and community services. Join us at 379 Oaklands Park Ave, Ilford IG1 1TG.",
    images: [
      {
        url: "/imwc-logo.png",
        width: 1200,
        height: 630,
        alt: "Ilford Muslim Welfare Centre Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ilford Muslim Welfare Centre | Islamic Education & Community Services",
    description:
      "Community mosque in Ilford offering prayer times, Hifz course, Islamic studies, and community services.",
    images: ["/imwc-logo.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://imwcentre.co.uk",
  },
  generator: "v0.app",
  icons: {
    icon: "/icon.png",
    apple: "/apple-icon.png",
  },
}

export const viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#3B7AB8",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
