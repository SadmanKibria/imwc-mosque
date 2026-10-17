"use client"

import { MessageCircle } from "lucide-react"
import { useState } from "react"

export function WhatsAppWidget() {
  const [isHovered, setIsHovered] = useState(false)
  const phoneNumber = "447950206007" // UK format without spaces

  return (
    <a
      href={`https://wa.me/${phoneNumber}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      aria-label="Chat on WhatsApp"
    >
      <div className="relative">
        {/* Pulse animation ring */}
        <div className="absolute inset-0 bg-[#25D366] rounded-full animate-ping opacity-75" />

        {/* Main button */}
        <div className="relative bg-[#25D366] hover:bg-[#20BA5A] text-white rounded-full p-4 shadow-2xl transition-all duration-300 group-hover:scale-110">
          <MessageCircle className="h-7 w-7" />
        </div>

        {/* Tooltip */}
        {isHovered && (
          <div className="absolute right-full mr-3 top-1/2 -translate-y-1/2 whitespace-nowrap bg-gray-900 text-white text-sm px-4 py-2 rounded-lg shadow-lg animate-fade-in">
            Chat with us on WhatsApp
            <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-full border-8 border-transparent border-l-gray-900" />
          </div>
        )}
      </div>
    </a>
  )
}
