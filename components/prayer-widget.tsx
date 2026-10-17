"use client"

import { useEffect } from "react"

const widgetScript = "https://masjidbox.com/widgets/loader.js"

export function PrayerWidget() {
  useEffect(() => {
    if (document.querySelector(`script[src="${widgetScript}"]`)) return

    const script = document.createElement("script")
    script.src = widgetScript
    script.async = true
    script.defer = true
    document.head.appendChild(script)

    return () => {
      script.remove()
    }
  }, [])

  return (
    <a
      data-masjidbox-widget="WG4WGMXZmcPEyMXdFV1Dr"
      data-masjidbox-ifr=""
      href="https://masjidbox.com/prayer-times/ilford-muslim-welfare-centre-1686536133928"
      style={{
        display: "flex",
        minHeight: 500,
        alignItems: "center",
        justifyContent: "center",
        color: "var(--teal)",
        fontWeight: 700,
      }}
    >
      View today&apos;s prayer times
    </a>
  )
}
