"use client"
import { MessageCircle, Users, Bell, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

export function WhatsAppCommunity() {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-[#25D366]/5 via-background to-primary/5">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#25D366]/10 mb-6 animate-bounce-slow">
              <MessageCircle className="w-8 h-8 text-[#25D366]" />
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4 font-serif">
              Join Our WhatsApp Community
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              Stay connected with instant updates on prayer times, events, courses, and community activities
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-10">
            <Card className="p-6 text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-primary/20">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 mb-4">
                <Bell className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Instant Updates</h3>
              <p className="text-sm text-muted-foreground">
                Get notified about prayer times, Jumu'ah announcements, and special events
              </p>
            </Card>

            <Card className="p-6 text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-primary/20">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 mb-4">
                <Users className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Community Connection</h3>
              <p className="text-sm text-muted-foreground">
                Connect with fellow community members and stay engaged with mosque activities
              </p>
            </Card>

            <Card className="p-6 text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-primary/20">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 mb-4">
                <Sparkles className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Exclusive Content</h3>
              <p className="text-sm text-muted-foreground">
                Receive Islamic reminders, course updates, and youth program details first
              </p>
            </Card>
          </div>

          <div className="text-center">
            <a
              href="https://chat.whatsapp.com/Iwmni4n4hfQDqZ7caO1GPi?mode=wwt"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block"
            >
              <Button
                size="lg"
                className="bg-[#25D366] hover:bg-[#20BD5A] text-white px-8 py-6 text-lg rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 font-semibold"
              >
                <MessageCircle className="mr-3 h-6 w-6" />
                Join WhatsApp Community Now
              </Button>
            </a>
            <p className="text-sm text-muted-foreground mt-4">Free to join • 100% Community Run</p>
          </div>
        </div>
      </div>
    </section>
  )
}
