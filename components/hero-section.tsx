import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Clock, Users, BookOpen } from "lucide-react"
import Image from "next/image"

export function HeroSection() {
  return (
    <section
      id="home"
      className="pt-28 pb-16 md:pt-36 md:pb-24 bg-gradient-to-b from-background via-muted/10 to-background"
    >
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16 animate-fade-in">
          <div className="flex justify-center mb-8 animate-scale-in">
            <Image
              src="/imwc-logo.png"
              alt="Ilford Muslim Welfare Centre"
              width={140}
              height={140}
              className="object-contain"
              priority
            />
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 text-balance leading-tight">
            Ilford Muslim Welfare Centre
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-8 text-pretty max-w-2xl mx-auto leading-relaxed">
            Building a stronger community through faith, education, and service
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90 hover:scale-105 transition-all shadow-lg"
              asChild
            >
              <a href="#services">Learn More</a>
            </Button>
            <Button size="lg" variant="outline" className="hover:scale-105 transition-all bg-transparent" asChild>
              <a href="#contact">Visit Us</a>
            </Button>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          <Card className="border-2 border-primary hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 animate-fade-in-up">
            <CardHeader className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="h-12 w-12 rounded-lg bg-gradient-to-br from-primary to-primary/70 flex items-center justify-center shadow-md">
                  <BookOpen className="h-6 w-6 text-primary-foreground" />
                </div>
                <CardTitle className="text-2xl font-bold text-primary">Hifz Course</CardTitle>
              </div>
              <CardDescription className="text-base text-muted-foreground">
                Memorize the Holy Quran with qualified teachers
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-start gap-3">
                <Clock className="h-5 w-5 text-primary mt-0.5" />
                <div className="text-sm text-foreground">
                  <p className="font-semibold">Monday to Friday</p>
                  <p className="text-muted-foreground">5:00 PM - 7:00 PM</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Users className="h-5 w-5 text-primary mt-0.5" />
                <p className="text-sm text-foreground">Small class sizes for personalized attention</p>
              </div>
              <div className="pt-4 border-t">
                <p className="text-3xl font-bold text-primary">
                  £70<span className="text-lg font-normal text-muted-foreground">/month</span>
                </p>
              </div>
            </CardContent>
          </Card>

          <Card
            className="border-2 border-accent hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 animate-fade-in-up"
            style={{ animationDelay: "150ms" }}
          >
            <CardHeader className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="h-12 w-12 rounded-lg bg-gradient-to-br from-accent to-accent/70 flex items-center justify-center shadow-md">
                  <BookOpen className="h-6 w-6 text-accent-foreground" />
                </div>
                <CardTitle className="text-2xl font-bold text-accent">Islamic Studies</CardTitle>
              </div>
              <CardDescription className="text-base text-muted-foreground">
                Comprehensive Islamic education for children
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-start gap-3">
                <Clock className="h-5 w-5 text-accent mt-0.5" />
                <div className="text-sm text-foreground space-y-1">
                  <p className="font-semibold">Saturday & Sunday</p>
                  <p className="text-muted-foreground">Girls: 9:00 AM - 11:00 AM</p>
                  <p className="text-muted-foreground">Boys: 11:15 AM - 1:15 PM</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Users className="h-5 w-5 text-accent mt-0.5" />
                <p className="text-sm text-foreground">Age-appropriate curriculum and teaching methods</p>
              </div>
              <div className="pt-4 border-t">
                <p className="text-3xl font-bold text-accent">
                  £30<span className="text-lg font-normal text-muted-foreground">/month</span>
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
