"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { MessageCircle, Calendar, Sparkles, Gift } from "lucide-react"

export function YouthClub() {
  const handleWhatsAppClick = () => {
    const message = encodeURIComponent("Youth club")
    window.open(`https://wa.me/447950206007?text=${message}`, "_blank")
  }

  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-primary/5 via-accent/5 to-background relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-32 h-32 border-4 border-primary rounded-full animate-pulse" />
        <div
          className="absolute bottom-20 right-20 w-24 h-24 border-4 border-accent rounded-full animate-pulse"
          style={{ animationDelay: "1s" }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="inline-flex items-center gap-2 bg-accent/10 text-accent px-4 py-2 rounded-full animate-bounce-slow">
                <Sparkles className="h-4 w-4" />
                <span className="text-sm font-semibold">Every Friday</span>
              </div>
              <div
                className="inline-flex items-center gap-2 bg-green-500/10 text-green-600 px-4 py-2 rounded-full animate-bounce-slow"
                style={{ animationDelay: "0.2s" }}
              >
                <Gift className="h-4 w-4" />
                <span className="text-sm font-semibold">100% FREE + Food</span>
              </div>
            </div>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Youth Club
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Connect. Grow. Thrive. Together.
            </p>
          </div>

          <Card className="mb-8 bg-gradient-to-br from-background to-primary/5 border-2 border-primary/20 shadow-2xl animate-fade-in-up">
            <CardContent className="p-6 md:p-10">
              <div className="grid md:grid-cols-3 gap-6 mb-10">
                <div className="text-center p-6 bg-gradient-to-br from-primary/10 to-transparent rounded-2xl border border-primary/20">
                  <Calendar className="h-10 w-10 text-primary mx-auto mb-3" />
                  <h3 className="font-bold text-lg mb-2">When</h3>
                  <p className="text-muted-foreground">Every Friday Evening</p>
                </div>

                <div className="text-center p-6 bg-gradient-to-br from-accent/10 to-transparent rounded-2xl border border-accent/20">
                  <div className="text-4xl mb-3">🎯</div>
                  <h3 className="font-bold text-lg mb-2">Who</h3>
                  <p className="text-muted-foreground">Ages 14+</p>
                </div>

                <div className="text-center p-6 bg-gradient-to-br from-green-500/10 to-transparent rounded-2xl border border-green-500/20">
                  <Gift className="h-10 w-10 text-green-600 mx-auto mb-3" />
                  <h3 className="font-bold text-lg mb-2">Cost</h3>
                  <p className="text-green-600 font-semibold">FREE + Food Included</p>
                </div>
              </div>

              <div className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-3xl p-8 mb-10 border-2 border-purple-500/20">
                <div className="text-center mb-6">
                  <div className="text-5xl mb-4">🫶</div>
                  <h3 className="font-serif text-2xl md:text-3xl font-bold mb-3 text-foreground">
                    Made for Shy & Introverted Youth
                  </h3>
                  <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                    We get it. Meeting new people can be hard. That's exactly why we created this space.
                  </p>
                </div>
              </div>

              <div className="bg-accent/5 rounded-3xl p-6 md:p-8 border-2 border-accent/20 mb-10">
                <div className="text-center mb-8">
                  <div className="text-5xl mb-4">🤝</div>
                  <h3 className="font-serif text-2xl md:text-3xl font-bold mb-3 text-foreground">
                    Personal Mentor Assigned to You
                  </h3>
                  <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                    Get paired with a young, friendly mentor who's successful in their field. Ask anything about deen or
                    dunya.
                  </p>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                  {[
                    { icon: "💻", field: "Software Engineers" },
                    { icon: "🩺", field: "Doctors" },
                    { icon: "💊", field: "Pharmacists" },
                    { icon: "⚡", field: "Electricians" },
                    { icon: "🔧", field: "Mechanics" },
                    { icon: "🔥", field: "Gas Engineers" },
                    { icon: "🔒", field: "Cyber Security" },
                    { icon: "📊", field: "Business" },
                  ].map((mentor, index) => (
                    <div
                      key={mentor.field}
                      className="bg-background rounded-xl p-4 text-center border border-border hover:shadow-lg hover:scale-105 transition-all animate-fade-in-up"
                      style={{ animationDelay: `${index * 30}ms` }}
                    >
                      <div className="text-3xl mb-2">{mentor.icon}</div>
                      <p className="text-sm font-medium leading-tight">{mentor.field}</p>
                    </div>
                  ))}
                </div>

                <p className="text-center text-muted-foreground italic">
                  All mentors are young-friendly professionals & students in their fields
                </p>
              </div>

              <div className="mb-10">
                <h3 className="font-serif text-2xl font-bold mb-6 text-center">What You'll Get</h3>
                <div className="grid sm:grid-cols-2 gap-4">
                  {[
                    { icon: "👥", title: "Make Real Friends", desc: "Connect with peers in a comfortable space" },
                    { icon: "📖", title: "Learn Deen", desc: "Islamic discussions & Quran reflections" },
                    { icon: "💬", title: "Direct 1-to-1 Chat", desc: "Private mentorship & personal advice" },
                    { icon: "🎮", title: "Fun Activities", desc: "Games, sports & creative projects" },
                    { icon: "🍕", title: "Free Food", desc: "Enjoy meals together every week" },
                    { icon: "💪", title: "Build Confidence", desc: "Grow your social skills naturally" },
                  ].map((activity, index) => (
                    <div
                      key={activity.title}
                      className="flex gap-4 p-5 bg-gradient-to-br from-background to-primary/5 rounded-xl border border-border hover:border-primary/50 hover:shadow-md transition-all animate-fade-in-up"
                      style={{ animationDelay: `${index * 50}ms` }}
                    >
                      <div className="text-3xl flex-shrink-0">{activity.icon}</div>
                      <div>
                        <p className="font-bold mb-1">{activity.title}</p>
                        <p className="text-sm text-muted-foreground">{activity.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-gradient-to-r from-green-500/20 via-primary/20 to-accent/20 rounded-3xl p-8 md:p-10 text-center border-2 border-primary/30 shadow-xl">
                <div className="text-5xl mb-4">😊</div>
                <h3 className="font-serif text-2xl md:text-3xl font-bold mb-4 text-foreground">
                  Still Feel Uncomfortable?
                </h3>
                <p className="text-muted-foreground mb-6 max-w-xl mx-auto text-lg leading-relaxed">
                  No pressure at all! Just message us on WhatsApp with{" "}
                  <strong className="text-green-600">"Youth club"</strong> and we'll help you join comfortably.
                </p>
                <Button
                  size="lg"
                  onClick={handleWhatsAppClick}
                  className="bg-[#25D366] hover:bg-[#20BA5A] text-white shadow-lg hover:scale-105 transition-all text-lg px-8 py-6 h-auto"
                >
                  <MessageCircle className="mr-2 h-6 w-6" />
                  Chat with Us on WhatsApp
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
