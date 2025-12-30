import { HeroSection } from "@/components/hero-section"
import { PrayerTimes } from "@/components/prayer-times"
import { WhatsAppCommunity } from "@/components/whatsapp-community"
import { YouthClub } from "@/components/youth-club"
import { Services } from "@/components/services"
import { MosqueGallery } from "@/components/mosque-gallery"
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
      <WhatsAppCommunity />
      <YouthClub />
      <Services />
      <MosqueGallery />
      <Contact />
      <Footer />
    </main>
  )
}
