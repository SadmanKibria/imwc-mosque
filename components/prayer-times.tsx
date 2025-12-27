"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Clock, Calendar } from "lucide-react"
import { useEffect, useState } from "react"

interface PrayerTime {
  name: string
  time: string
}

export function PrayerTimes() {
  const [prayerTimes, setPrayerTimes] = useState<PrayerTime[]>([
    { name: "Fajr", time: "Loading..." },
    { name: "Sunrise", time: "Loading..." },
    { name: "Dhuhr", time: "Loading..." },
    { name: "Asr", time: "Loading..." },
    { name: "Maghrib", time: "Loading..." },
    { name: "Isha", time: "Loading..." },
  ])
  const [currentDate, setCurrentDate] = useState<string>("")

  useEffect(() => {
    const fetchPrayerTimes = async () => {
      try {
        const today = new Date()
        const day = today.getDate()
        const month = today.getMonth() + 1
        const year = today.getFullYear()

        const formattedDate = today.toLocaleDateString("en-GB", {
          weekday: "long",
          year: "numeric",
          month: "long",
          day: "numeric",
        })
        setCurrentDate(formattedDate)

        const response = await fetch(
          `https://api.aladhan.com/v1/timings/${day}-${month}-${year}?latitude=51.5588&longitude=0.0819&method=2`,
        )
        const data = await response.json()

        if (data.code === 200 && data.data.timings) {
          const timings = data.data.timings
          setPrayerTimes([
            { name: "Fajr", time: timings.Fajr },
            { name: "Sunrise", time: timings.Sunrise },
            { name: "Dhuhr", time: timings.Dhuhr },
            { name: "Asr", time: timings.Asr },
            { name: "Maghrib", time: timings.Maghrib },
            { name: "Isha", time: timings.Isha },
          ])
        }
      } catch (error) {
        console.error("Error fetching prayer times:", error)
        setPrayerTimes([
          { name: "Fajr", time: "5:30" },
          { name: "Sunrise", time: "7:15" },
          { name: "Dhuhr", time: "12:15" },
          { name: "Asr", time: "14:45" },
          { name: "Maghrib", time: "16:30" },
          { name: "Isha", time: "18:15" },
        ])
      }
    }

    fetchPrayerTimes()
  }, [])

  return (
    <section id="prayer-times" className="py-16 md:py-24 bg-gradient-to-b from-muted/20 to-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-12 animate-fade-in">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4 font-serif">Prayer Times</h2>
          <div className="flex items-center justify-center gap-2 text-muted-foreground">
            <Calendar className="h-5 w-5" />
            <p className="text-base">{currentDate || "Loading date..."}</p>
          </div>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
            {prayerTimes.map((prayer, index) => (
              <Card
                key={index}
                className="bg-card hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border animate-fade-in-up"
                style={{ animationDelay: `${index * 80}ms` }}
              >
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div className="flex-1">
                      <p className="font-semibold text-lg text-foreground mb-2">{prayer.name}</p>
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <Clock className="h-4 w-4" />
                        <p className="text-xl font-mono font-semibold text-foreground">{prayer.time}</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card
            className="bg-gradient-to-br from-primary to-primary/90 text-primary-foreground border-0 shadow-2xl animate-fade-in-up hover:scale-105 transition-transform"
            style={{ animationDelay: "600ms" }}
          >
            <CardHeader>
              <CardTitle className="text-2xl md:text-3xl font-bold text-center font-serif">Jumu'ah Prayer</CardTitle>
            </CardHeader>
            <CardContent className="text-center pb-6">
              <p className="text-5xl md:text-6xl font-bold font-mono mb-2">12:00 PM</p>
              <p className="text-sm md:text-base opacity-90">Every Friday</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
