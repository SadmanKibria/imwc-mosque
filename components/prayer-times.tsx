"use client"
import { useEffect, useState } from "react"

export function PrayerTimes() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    const loadMasjidBoxWidget = () => {
      // Check if script already exists
      const existingScript = document.querySelector('script[src="https://masjidbox.com/widgets/loader.js"]')
      if (existingScript) {
        setIsLoaded(true)
        return
      }

      const script = document.createElement("script")
      script.type = "text/javascript"
      script.async = true
      script.defer = true
      script.src = "https://masjidbox.com/widgets/loader.js"
      script.onload = () => setIsLoaded(true)
      script.onerror = () => console.error("[v0] Failed to load MasjidBox widget")

      const firstScript = document.getElementsByTagName("script")[0]
      firstScript.parentNode?.insertBefore(script, firstScript)
    }

    // Load on mount or after a short delay
    const timer = setTimeout(loadMasjidBoxWidget, 100)

    return () => clearTimeout(timer)
  }, [])

  return (
    <section id="prayer-times" className="py-16 md:py-24 bg-gradient-to-b from-muted/20 to-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-12 animate-fade-in">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4 font-serif">Prayer Times</h2>
          <p className="text-muted-foreground text-lg">Daily prayer schedule for Ilford Muslim Welfare Centre</p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="w-full flex justify-center min-h-[400px] md:min-h-[500px]">
            <a
              data-masjidbox-widget="WG4WGMXZmcPEyMXdFV1Dr"
              data-masjidbox-ifr="true"
              href="https://masjidbox.com/prayer-times/ilford-muslim-welfare-centre-1686536133928"
              className="block w-full max-w-4xl text-primary hover:underline text-center"
              target="_blank"
              rel="noopener noreferrer"
            >
              {!isLoaded && "Loading Prayer Times..."}
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
