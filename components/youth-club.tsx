"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Users, Heart, MessageCircle, Calendar, User, Sparkles } from "lucide-react"

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
            <div className="inline-flex items-center gap-2 bg-accent/10 text-accent px-4 py-2 rounded-full mb-4 animate-bounce-slow">
              <Sparkles className="h-4 w-4" />
              <span className="text-sm font-semibold">New Initiative</span>
            </div>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Youth Club
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              A safe space for young Muslims to grow, connect, and thrive together
            </p>
          </div>

          <Card className="mb-8 bg-gradient-to-br from-background to-primary/5 border-2 border-primary/20 shadow-2xl animate-fade-in-up">
            <CardContent className="p-8 md:p-12">
              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Calendar className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-2">When & Where</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        <strong>Every Friday Evening</strong>
                        <br />
                        At Ilford Muslim Welfare Centre
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="h-12 w-12 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0">
                      <Users className="h-6 w-6 text-accent" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-2">Who Can Join</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        Youth aged <strong>14 years and above</strong>
                        <br />
                        All backgrounds welcome
                      </p>
                    </div>
                  </div>
                </div>

                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Heart className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-2">For Shy & Introverted Youth</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        We understand it can be intimidating to join new groups. Our youth club is specifically designed
                        to help shy and introverted individuals make genuine connections in a comfortable, welcoming
                        environment.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-accent/5 rounded-2xl p-6 md:p-8 border-2 border-accent/20 mb-8">
                <div className="flex items-start gap-4 mb-6">
                  <div className="h-14 w-14 rounded-xl bg-accent flex items-center justify-center flex-shrink-0">
                    <User className="h-7 w-7 text-accent-foreground" />
                  </div>
                  <div>
                    <h3 className="font-serif text-2xl font-bold mb-3 text-foreground">Personal Mentorship Program</h3>
                    <p className="text-muted-foreground leading-relaxed text-lg">
                      Everyone who joins will be assigned a <strong>carefully selected mentor</strong> who you can reach
                      personally for anything related to deen or dunya advice.
                    </p>
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
                  {[
                    { icon: "💻", field: "IT & Tech" },
                    { icon: "⚡", field: "Electrical" },
                    { icon: "🔒", field: "Cyber Security" },
                    { icon: "⚕️", field: "Medicine" },
                    { icon: "💼", field: "Business" },
                    { icon: "📚", field: "Education" },
                  ].map((mentor, index) => (
                    <div
                      key={mentor.field}
                      className="bg-background rounded-lg p-4 text-center border border-border hover:shadow-md transition-shadow animate-fade-in-up"
                      style={{ animationDelay: `${index * 50}ms` }}
                    >
                      <div className="text-3xl mb-2">{mentor.icon}</div>
                      <p className="text-sm font-medium">{mentor.field}</p>
                    </div>
                  ))}
                </div>

                <p className="text-sm text-muted-foreground text-center mt-6 italic">
                  All mentors are successful professionals in their respective fields
                </p>
              </div>

              <div className="mb-8">
                <h3 className="font-serif text-xl font-bold mb-4 text-center">What We Do</h3>
                <div className="grid sm:grid-cols-2 gap-4">
                  {[
                    {
                      title: "Socialise & Make Friends",
                      desc: "Connect with like-minded youth in a relaxed atmosphere",
                    },
                    { title: "Learn Deen", desc: "Weekly Islamic discussions and Quranic reflections" },
                    { title: "Personal Development", desc: "Build confidence and social skills together" },
                    { title: "Fun Activities", desc: "Games, sports, and creative projects" },
                  ].map((activity, index) => (
                    <div
                      key={activity.title}
                      className="flex gap-3 p-4 bg-background rounded-lg border border-border hover:border-primary/50 transition-colors animate-fade-in-up"
                      style={{ animationDelay: `${index * 100}ms` }}
                    >
                      <div className="h-2 w-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                      <div>
                        <p className="font-semibold mb-1">{activity.title}</p>
                        <p className="text-sm text-muted-foreground">{activity.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-2xl p-6 md:p-8 text-center border-2 border-primary/20">
                <h3 className="font-serif text-2xl font-bold mb-3 text-foreground">Still Feel Shy or Uncomfortable?</h3>
                <p className="text-muted-foreground mb-6 max-w-xl mx-auto leading-relaxed">
                  We totally understand! Click the WhatsApp button below and simply write <strong>"Youth club"</strong>{" "}
                  and we'll personally help you join in a way that's comfortable for you.
                </p>
                <Button
                  size="lg"
                  onClick={handleWhatsAppClick}
                  className="bg-[#25D366] hover:bg-[#20BA5A] text-white shadow-lg hover:scale-105 transition-all text-lg px-8 py-6"
                >
                  <MessageCircle className="mr-2 h-5 w-5" />
                  Message Us on WhatsApp
                </Button>
                <p className="text-xs text-muted-foreground mt-4">We'll respond within a few hours</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
