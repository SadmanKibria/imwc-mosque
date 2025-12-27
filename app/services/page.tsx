import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { WhatsAppWidget } from "@/components/whatsapp-widget"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { BookOpen, Heart, Users, Sparkles, GraduationCap, Clock, KeyRound as Pound } from "lucide-react"

const services = [
  {
    icon: GraduationCap,
    title: "Hifz Course",
    description: "Memorization of the Holy Quran with qualified teachers in a supportive environment.",
    schedule: "Monday to Friday, 5:00 PM - 7:00 PM",
    price: "£70 per month",
    features: ["Qualified Hafiz teachers", "Small class sizes", "Progress tracking", "Tajweed correction"],
  },
  {
    icon: BookOpen,
    title: "Islamic Studies",
    description: "Comprehensive Islamic education covering Quran, Hadith, Fiqh, and Islamic history.",
    schedule: "Girls: Sat & Sun 9:00 AM - 11:00 AM | Boys: Sat & Sun 11:15 AM - 1:15 PM",
    price: "£30 per month",
    features: ["Age-appropriate curriculum", "Interactive lessons", "Character building", "Arabic basics"],
  },
  {
    icon: BookOpen,
    title: "Madrasa",
    description: "Traditional Islamic education for children focusing on Quran recitation and basic Islamic knowledge.",
    schedule: "Contact us for schedules",
    price: "Affordable rates",
    features: ["Quran reading", "Arabic language", "Islamic etiquette", "Duas and prayers"],
  },
  {
    icon: Users,
    title: "Youth Services",
    description: "Engaging programs and activities designed to help young Muslims grow in faith and character.",
    schedule: "Various times throughout the week",
    price: "Free for community",
    features: ["Sports activities", "Social events", "Mentorship programs", "Leadership development"],
  },
  {
    icon: Heart,
    title: "Social Welfare Advice",
    description: "Support and guidance for community members facing hardship or needing assistance.",
    schedule: "Available during prayer times",
    price: "Free service",
    features: ["Welfare benefits advice", "Family support", "Counseling referrals", "Community resources"],
  },
  {
    icon: Sparkles,
    title: "Dawah Activities",
    description: "Outreach programs to share the message of Islam and build bridges with the wider community.",
    schedule: "Regular events and programs",
    price: "Free to participate",
    features: ["Community events", "Open days", "Educational seminars", "Interfaith dialogue"],
  },
]

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/20">
      <Navigation />
      <WhatsAppWidget />

      <main className="pt-32 pb-16">
        <div className="container mx-auto px-4">
          {/* Hero Section */}
          <div className="max-w-4xl mx-auto text-center mb-16 animate-fade-in">
            <h1 className="font-serif text-4xl md:text-6xl font-bold text-foreground mb-6 text-balance">
              Our Services
            </h1>
            <p className="text-muted-foreground text-lg md:text-xl leading-relaxed text-pretty">
              Supporting our community through education, guidance, and care. We offer a range of services to help
              individuals and families grow in their faith and thrive in life.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
            {services.map((service, index) => {
              const Icon = service.icon
              return (
                <Card
                  key={index}
                  className="border-border hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 animate-fade-in-up group overflow-hidden"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <CardHeader>
                    <div className="h-14 w-14 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                      <Icon className="h-7 w-7 text-white" />
                    </div>
                    <CardTitle className="font-serif text-2xl">{service.title}</CardTitle>
                    <CardDescription className="text-base leading-relaxed">{service.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-start gap-2">
                      <Clock className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                      <p className="text-sm text-muted-foreground">{service.schedule}</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <Pound className="h-4 w-4 text-accent" />
                      <p className="text-sm font-semibold text-accent">{service.price}</p>
                    </div>
                    <ul className="space-y-2 pt-2">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-sm text-muted-foreground">
                          <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              )
            })}
          </div>

          {/* CTA Section */}
          <div className="max-w-3xl mx-auto mt-16 text-center animate-fade-in">
            <Card className="bg-gradient-to-br from-primary/5 to-accent/5 border-primary/20">
              <CardHeader>
                <CardTitle className="font-serif text-3xl">Interested in Our Services?</CardTitle>
                <CardDescription className="text-base">
                  Contact us to learn more or to register for any of our programs
                </CardDescription>
              </CardHeader>
              <CardContent className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="tel:07950206007"
                  className="inline-flex items-center justify-center px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-all hover:scale-105 font-medium shadow-md"
                >
                  Call Us: 07950 206007
                </a>
                <a
                  href="https://wa.me/447950206007"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-6 py-3 bg-[#25D366] text-white rounded-lg hover:bg-[#20BA5A] transition-all hover:scale-105 font-medium shadow-md"
                >
                  WhatsApp Us
                </a>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
