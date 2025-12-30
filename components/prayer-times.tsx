"use client"
import { useEffect } from "react"

export function PrayerTimes() {
  useEffect(() => {
    const loadScript = () => {
      // Check if script already loaded
      if (document.querySelector('script[src*="masjidbox.com/widgets/loader.js"]')) {
        return
      }

      const script = document.createElement("script")
      script.type = "text/javascript"
      script.async = true
      script.defer = true
      script.src = "https://masjidbox.com/widgets/loader.js"

      const firstScript = document.getElementsByTagName("script")[0]
      if (firstScript && firstScript.parentNode) {
        firstScript.parentNode.insertBefore(script, firstScript)
      }
    }

    // Small delay to ensure DOM is ready
    const timer = setTimeout(loadScript, 500)
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
          <div className="w-full bg-white rounded-lg shadow-lg p-6 min-h-[500px]">
            <a
              data-masjidbox-widget="WG4WGMXZmcPEyMXdFV1Dr"
              data-masjidbox-ifr=""
              href="https://masjidbox.com/prayer-times/ilford-muslim-welfare-centre-1686536133928"
              style={{ display: "block", minHeight: "450px" }}
            >
              Prayer times Ilford Muslim Welfare Centre
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
