import type { Metadata } from "next"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { WhatsAppWidget } from "@/components/whatsapp-widget"
import DonateContent from "./donate-content"

export const metadata: Metadata = {
  title: "Donate | Ilford Muslim Welfare Centre",
  description:
    "Support Ilford Muslim Welfare Centre. Donate to help our community programs, education, and welfare services.",
}

export default function DonatePage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <WhatsAppWidget />
      <DonateContent />
      <Footer />
    </main>
  )
}
