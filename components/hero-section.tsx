"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Clock, Users, BookOpen, ChevronLeft, ChevronRight, Calendar } from "lucide-react"

export function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [nextPrayer, setNextPrayer] = useState<{ name: string; time: string } | null>(null)

  // Placeholder images - user will replace with actual mosque photos
  const carouselImages = [
    { url: "/beautiful-mosque-exterior-modern.jpg", alt: "Mosque Exterior" },
    { url: "/mosque-prayer-hall-interior.jpg", alt: "Prayer Hall" },
    { url: "/islamic-school-children-learning.jpg", alt: "Madrasa Classes" },
  ]

  useEffect(() => {
    const fetchNextPrayer = async () => {
      try {
        const today = new Date()
        const response = await fetch(
          `https://api.aladhan.com/v1/timingsByAddress/${today.getDate()}-${today.getMonth() + 1}-${today.getFullYear()}?address=Ilford,UK&method=2`,
        )
        const data = await response.json()

        if (data.code === 200) {
          const timings = data.data.timings
          const now = new Date()
          const currentTime = now.getHours() * 60 + now.getMinutes()

          const prayers = [
            { name: "Fajr", time: timings.Fajr },
            { name: "Dhuhr", time: timings.Dhuhr },
            { name: "Asr", time: timings.Asr },
            { name: "Maghrib", time: timings.Maghrib },
            { name: "Isha", time: timings.Isha },
          ]

          for (const prayer of prayers) {
            const [hours, minutes] = prayer.time.split(":").map(Number)
            const prayerTime = hours * 60 + minutes

            if (currentTime < prayerTime) {
              setNextPrayer({ name: prayer.name, time: prayer.time })
              break
            }
          }

          if (!nextPrayer) {
            setNextPrayer({ name: "Fajr", time: timings.Fajr })
          }
        }
      } catch (error) {
        console.error("Error fetching prayer times:", error)
      }
    }

    fetchNextPrayer()
  }, [])

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % carouselImages.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [carouselImages.length])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % carouselImages.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + carouselImages.length) % carouselImages.length)
  }

  return (
    <section id="home" className="pt-20 md:pt-24 bg-gradient-to-b from-background via-muted/10 to-background">
      <div className="container mx-auto px-4 pb-8 md:pb-12">
        <div className="relative max-w-6xl mx-auto">
          {/* Carousel */}
          <div className="relative h-[400px] md:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
            {carouselImages.map((image, index) => (
              <div
                key={index}
                className={`absolute inset-0 transition-opacity duration-700 ${
                  index === currentSlide ? "opacity-100" : "opacity-0"
                }`}
              >
                <img src={image.url || "/placeholder.svg"} alt={image.alt} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
              </div>
            ))}

            {/* Overlay Content */}
            <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-10">
              <div className="max-w-3xl animate-fade-in">
                <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-4 text-balance leading-tight drop-shadow-lg">
                  Welcome to Ilford Muslim Welfare Centre
                </h1>

                {/* Next Prayer Badge */}
                {nextPrayer && (
                  <div className="inline-flex items-center gap-3 bg-white/95 backdrop-blur-sm rounded-full px-5 py-3 mb-6 shadow-lg">
                    <Clock className="h-5 w-5 text-primary" />
                    <div className="text-sm font-semibold">
                      <span className="text-muted-foreground">Next: </span>
                      <span className="text-primary">{nextPrayer.name}</span>
                      <span className="text-muted-foreground"> at </span>
                      <span className="text-foreground">{nextPrayer.time}</span>
                    </div>
                  </div>
                )}

                <div className="flex flex-col sm:flex-row gap-3">
                  <Button
                    size="lg"
                    className="bg-primary text-primary-foreground hover:bg-primary/90 hover:scale-105 transition-all shadow-lg"
                    asChild
                  >
                    <a href="#courses">Enroll Now</a>
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="bg-white/95 hover:bg-white hover:scale-105 transition-all backdrop-blur-sm border-2"
                    asChild
                  >
                    <a href="/donate">Donate</a>
                  </Button>
                </div>
              </div>
            </div>

            {/* Carousel Controls */}
            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white rounded-full p-2 shadow-lg transition-all hover:scale-110"
              aria-label="Previous slide"
            >
              <ChevronLeft className="h-6 w-6 text-foreground" />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white rounded-full p-2 shadow-lg transition-all hover:scale-110"
              aria-label="Next slide"
            >
              <ChevronRight className="h-6 w-6 text-foreground" />
            </button>

            {/* Carousel Indicators */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
              {carouselImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`h-2 rounded-full transition-all ${
                    index === currentSlide ? "w-8 bg-white" : "w-2 bg-white/50"
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 pb-16 md:pb-24">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            <div className="inline-flex items-center gap-2 bg-primary/10 rounded-full px-4 py-2 mb-4">
              <Calendar className="h-4 w-4 text-primary" />
              <span className="text-sm font-semibold text-primary">Enroll Today</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">Our Courses</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">Quality Islamic education for all ages</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6" id="courses">
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
      </div>
    </section>
  )
}
