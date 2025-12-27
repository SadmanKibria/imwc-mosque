"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Heart, Building2, Copy, CheckCircle2, Landmark, CreditCard } from "lucide-react"
import type React from "react"
import { useState } from "react"

function BankDetail({
  label,
  value,
  icon,
  copyable,
}: {
  label: string
  value: string
  icon?: React.ReactNode
  copyable?: boolean
}) {
  const [copied, setCopied] = useState(false)

  const handleCopy = () => {
    navigator.clipboard.writeText(value)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="flex items-center justify-between py-2 border-b border-border/50 last:border-0">
      <div className="flex items-center gap-2">
        {icon}
        <span className="text-sm font-medium text-muted-foreground">{label}:</span>
      </div>
      <div className="flex items-center gap-2">
        <span className="font-mono font-semibold">{value}</span>
        {copyable && (
          <button
            onClick={handleCopy}
            className="p-1.5 hover:bg-muted rounded transition-colors"
            title="Copy to clipboard"
          >
            {copied ? <CheckCircle2 className="h-4 w-4 text-green-600" /> : <Copy className="h-4 w-4" />}
          </button>
        )}
      </div>
    </div>
  )
}

function DonationImpact({ text }: { text: string }) {
  return (
    <div className="flex items-center gap-2">
      <CheckCircle2 className="h-5 w-5 text-accent flex-shrink-0" />
      <span className="text-sm">{text}</span>
    </div>
  )
}

export default function DonatePageClient() {
  return (
    <main className="min-h-screen">
      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12 animate-fade-in">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-accent/10 rounded-full mb-6">
              <Heart className="h-8 w-8 text-accent" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance">Support Our Mission</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
              Your generous donations help us serve the community through education, welfare, and spiritual guidance
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-12 animate-fade-in stagger-2">
            <Card className="p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-2">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <CreditCard className="h-6 w-6 text-primary" />
                </div>
                <h2 className="text-2xl font-bold">Online Payment</h2>
              </div>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Make a quick and secure donation through our online payment portal
              </p>
              <Button
                asChild
                size="lg"
                className="w-full bg-primary hover:bg-primary/90 hover:scale-105 transition-transform"
              >
                <a
                  href="https://pay.sumup.com/b2c/Q5G88QSI"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2"
                >
                  <Heart className="h-4 w-4" />
                  Donate Online
                </a>
              </Button>
            </Card>

            <Card className="p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-2">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-accent/10 rounded-lg">
                  <Landmark className="h-6 w-6 text-accent" />
                </div>
                <h2 className="text-2xl font-bold">Bank Transfer</h2>
              </div>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Transfer directly to our bank account for larger donations
              </p>
              <div className="space-y-3 bg-muted/30 p-4 rounded-lg">
                <BankDetail label="Account Name" value="Ilford Muslim Welfare Association" />
                <BankDetail label="Bank" value="Lloyds Bank" icon={<Building2 className="h-4 w-4" />} />
                <BankDetail label="Account Number" value="42556462" copyable />
                <BankDetail label="Sort Code" value="30-99-50" copyable />
              </div>
            </Card>
          </div>

          <Card className="p-8 bg-gradient-to-br from-primary/5 to-accent/5 border-2 animate-fade-in stagger-3">
            <h3 className="text-xl font-bold mb-4">Your Donation Helps Fund</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <DonationImpact text="Hifz & Islamic Studies Programs" />
              <DonationImpact text="Youth Activities & Services" />
              <DonationImpact text="Social Welfare & Community Support" />
              <DonationImpact text="Dawah & Educational Activities" />
              <DonationImpact text="Madrasa Education" />
              <DonationImpact text="Facility Maintenance" />
            </div>
          </Card>

          <div className="text-center mt-12 p-6 bg-muted/30 rounded-lg animate-fade-in stagger-4">
            <p className="text-sm text-muted-foreground italic">
              "The example of those who spend their wealth in the way of Allah is like a seed that sprouts seven ears;
              in every ear there are a hundred grains."
            </p>
            <p className="text-sm text-muted-foreground mt-2 font-semibold">— Quran 2:261</p>
          </div>
        </div>
      </section>
    </main>
  )
}
