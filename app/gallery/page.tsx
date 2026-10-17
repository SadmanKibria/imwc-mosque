import type React from "react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { WhatsAppWidget } from "@/components/whatsapp-widget"
import { Card } from "@/components/ui/card"
import { Camera, Calendar, Users, Sparkles } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Gallery | Ilford Muslim Welfare Centre",
  description:
    "View photos and memories from our community events, activities, and programs at Ilford Muslim Welfare Centre.",
}

export default function GalleryPage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <WhatsAppWidget />

      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-6">
              <Camera className="h-8 w-8 text-primary" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance">Community Gallery</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
              Moments and memories from our community events and activities
            </p>
          </div>

          {/* Upcoming: Event Categories */}
          <div className="grid md:grid-cols-3 gap-6 mb-16 animate-fade-in stagger-2">
            <GalleryCategory
              icon={<Sparkles className="h-6 w-6" />}
              title="Ramadan 2025"
              description="Iftar gatherings and Taraweeh prayers"
              count={0}
              color="text-primary"
            />
            <GalleryCategory
              icon={<Users className="h-6 w-6" />}
              title="Youth Activities"
              description="Sports, trips, and educational events"
              count={0}
              color="text-accent"
            />
            <GalleryCategory
              icon={<Calendar className="h-6 w-6" />}
              title="Community Events"
              description="Celebrations and gatherings"
              count={0}
              color="text-primary"
            />
          </div>

          {/* Placeholder for photos */}
          <Card className="p-12 text-center animate-fade-in stagger-3">
            <div className="max-w-md mx-auto">
              <div className="w-24 h-24 bg-muted rounded-full flex items-center justify-center mx-auto mb-6">
                <Camera className="h-12 w-12 text-muted-foreground" />
              </div>
              <h3 className="text-2xl font-bold mb-3">Photos Coming Soon</h3>
              <p className="text-muted-foreground leading-relaxed">
                We're building our gallery! Check back soon to see photos from our community events, Ramadan activities,
                youth programs, and more.
              </p>
            </div>
          </Card>

          {/* Future: Photo Grid will be added here */}
          {/* <div className="grid md:grid-cols-3 gap-4 animate-fade-in stagger-4">
            {photos.map((photo, index) => (
              <PhotoCard key={index} photo={photo} />
            ))}
          </div> */}
        </div>
      </section>

      <Footer />
    </main>
  )
}

function GalleryCategory({
  icon,
  title,
  description,
  count,
  color,
}: {
  icon: React.ReactNode
  title: string
  description: string
  count: number
  color: string
}) {
  return (
    <Card className="p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
      <div className={`${color} mb-4`}>{icon}</div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-sm text-muted-foreground mb-3">{description}</p>
      <p className="text-xs text-muted-foreground">
        {count} {count === 1 ? "photo" : "photos"}
      </p>
    </Card>
  )
}
