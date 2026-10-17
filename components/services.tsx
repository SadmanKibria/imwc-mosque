import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { BookOpen, Heart, Users, Sparkles } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

const services = [
  {
    icon: BookOpen,
    title: "Madrasa",
    description:
      "Islamic education for children with qualified teachers, focusing on Quran, Arabic, and Islamic studies.",
  },
  {
    icon: Heart,
    title: "Social Welfare Advice",
    description:
      "Support and guidance for community members in need, including welfare benefits and practical assistance.",
  },
  {
    icon: Sparkles,
    title: "Dawah Activities",
    description:
      "Outreach programs and events to share the message of Islam and build bridges with the wider community.",
  },
  {
    icon: Users,
    title: "Youth Services",
    description:
      "Engaging activities and programs designed specifically for young Muslims to grow in faith and character.",
  },
]

export function Services() {
  return (
    <section id="services" className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-12 animate-fade-in">
          <h2 className="font-serif text-3xl md:text-5xl font-bold text-foreground mb-4">Our Services</h2>
          <p className="text-muted-foreground text-lg">
            Supporting our community through education, guidance, and care
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <Card
                key={index}
                className="border-border hover:shadow-xl transition-all duration-300 hover:-translate-y-1 animate-fade-in-up group"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardHeader>
                  <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="font-serif text-2xl">{service.title}</CardTitle>
                  <CardDescription className="text-base leading-relaxed">{service.description}</CardDescription>
                </CardHeader>
              </Card>
            )
          })}
        </div>

        <div className="text-center mt-12 animate-fade-in">
          <Button size="lg" asChild className="hover:scale-105 transition-transform shadow-lg">
            <Link href="/services">View All Services & Programs</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
