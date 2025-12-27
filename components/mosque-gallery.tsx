"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Camera, ArrowRight } from "lucide-react"
import Link from "next/link"

export function MosqueGallery() {
  return (
    <section className="py-20 px-4 bg-muted/30">
      <div className="container mx-auto">
        <div className="text-center mb-12 animate-fade-in">
          <div className="inline-flex items-center justify-center w-14 h-14 bg-primary/10 rounded-full mb-6">
            <Camera className="h-7 w-7 text-primary" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">Our Mosque</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-pretty">
            Take a virtual tour of our facilities and spaces
          </p>
        </div>

        <Card className="p-12 text-center animate-fade-in stagger-2">
          <div className="max-w-md mx-auto">
            <div className="w-20 h-20 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <Camera className="h-10 w-10 text-primary" />
            </div>
            <h3 className="text-2xl font-bold mb-3">Mosque Photos Coming Soon</h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              We're preparing beautiful photos of our prayer halls, classrooms, and facilities. Check back soon to see
              our space!
            </p>
            <Button asChild variant="outline" className="hover:scale-105 transition-transform bg-transparent">
              <Link href="/gallery" className="inline-flex items-center gap-2">
                View Full Gallery
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </Card>
      </div>
    </section>
  )
}
