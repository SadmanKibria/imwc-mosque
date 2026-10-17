import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Clock, Users, BookOpen } from "lucide-react"

export function HeroSection() {
  return (
    <section id="home" className="pt-24 pb-16 md:pt-32 md:pb-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent" />
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 0l30 30-30 30L0 30z' fill='%23000' fillOpacity='1' fillRule='evenodd'/%3E%3C/svg%3E")`,
          backgroundSize: "30px 30px",
        }}
      />

      <div className="container mx-auto px-4 relative">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 text-balance">
            Welcome to Ilford Muslim Welfare Centre
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-8 text-pretty max-w-2xl mx-auto">
            Building a stronger community through faith, education, and service. Join us in our mission to support and
            uplift our neighbors.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
              Learn More
            </Button>
            <Button size="lg" variant="outline">
              Visit Us
            </Button>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          <Card className="bg-primary text-primary-foreground border-0 shadow-lg">
            <CardHeader>
              <div className="flex items-center gap-3 mb-2">
                <div className="h-12 w-12 rounded-full bg-primary-foreground/20 flex items-center justify-center">
                  <BookOpen className="h-6 w-6" />
                </div>
                <CardTitle className="text-2xl font-serif">Hifz Course</CardTitle>
              </div>
              <CardDescription className="text-primary-foreground/80 text-base">
                Memorize the Holy Quran with qualified teachers
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex items-center gap-2">
                <Clock className="h-5 w-5 opacity-80" />
                <p className="text-sm">Monday to Friday, 5:00 PM - 7:00 PM</p>
              </div>
              <div className="flex items-center gap-2">
                <Users className="h-5 w-5 opacity-80" />
                <p className="text-sm">Small class sizes for personalized attention</p>
              </div>
              <div className="pt-2 border-t border-primary-foreground/20">
                <p className="text-3xl font-bold">
                  £70<span className="text-lg font-normal opacity-80">/month</span>
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-accent text-accent-foreground border-0 shadow-lg">
            <CardHeader>
              <div className="flex items-center gap-3 mb-2">
                <div className="h-12 w-12 rounded-full bg-accent-foreground/10 flex items-center justify-center">
                  <BookOpen className="h-6 w-6" />
                </div>
                <CardTitle className="text-2xl font-serif">Islamic Studies</CardTitle>
              </div>
              <CardDescription className="text-accent-foreground/70 text-base">
                Comprehensive Islamic education for children
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex items-center gap-2">
                <Clock className="h-5 w-5 opacity-70" />
                <p className="text-sm">Saturday & Sunday</p>
              </div>
              <div className="space-y-1 text-sm">
                <p>Girls: 9:00 AM - 11:00 AM</p>
                <p>Boys: 11:15 AM - 1:15 PM</p>
              </div>
              <div className="pt-2 border-t border-accent-foreground/20">
                <p className="text-3xl font-bold">
                  £30<span className="text-lg font-normal opacity-70">/month</span>
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
