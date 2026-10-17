"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Clock } from "lucide-react"
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

  useEffect(() => {
    // Fetch prayer times - using placeholder times for now
    // In production, you'd fetch from an API or MasjidBox
    const mockTimes: PrayerTime[] = [
      { name: "Fajr", time: "6:15 AM" },
      { name: "Sunrise", time: "8:05 AM" },
      { name: "Dhuhr", time: "12:20 PM" },
      { name: "Asr", time: "2:30 PM" },
      { name: "Maghrib", time: "4:45 PM" },
      { name: "Isha", time: "6:30 PM" },
    ]
    setPrayerTimes(mockTimes)
  }, [])

  return (
    <section id="prayer-times" className="py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h2 className="font-serif text-3xl md:text-5xl font-bold text-foreground mb-4">Prayer Times</h2>
          <p className="text-muted-foreground text-lg">Daily prayer times for Ilford Muslim Welfare Centre</p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
            {prayerTimes.map((prayer, index) => (
              <Card key={index} className="bg-card hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-semibold text-lg text-foreground mb-1">{prayer.name}</p>
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <Clock className="h-4 w-4" />
                        <p className="text-xl font-mono">{prayer.time}</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card className="bg-primary text-primary-foreground border-0">
            <CardHeader>
              <CardTitle className="font-serif text-2xl text-center">Jumu'ah Prayer</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-4xl font-bold font-mono">12:00 PM</p>
              <p className="text-sm mt-2 opacity-90">Every Friday</p>
            </CardContent>
          </Card>

          <p className="text-center text-sm text-muted-foreground mt-6">
            Prayer times are calculated for Ilford, UK. Times may vary by a few minutes.
          </p>
        </div>
      </div>
    </section>
  )
}
