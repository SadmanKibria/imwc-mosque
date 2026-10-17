import { HeroSection } from "@/components/hero-section"
import { PrayerTimes } from "@/components/prayer-times"
import { Services } from "@/components/services"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"
import { Navigation } from "@/components/navigation"
import { WhatsAppWidget } from "@/components/whatsapp-widget"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <WhatsAppWidget />
      <HeroSection />
      <PrayerTimes />
      <Services />
      <Contact />
      <Footer />
    </main>
  )
}
