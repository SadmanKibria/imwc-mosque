import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Menu } from "lucide-react"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

export function Navigation() {
  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/services", label: "Services" },
    { href: "/gallery", label: "Gallery" },
    { href: "/#prayer-times", label: "Prayer Times" },
    { href: "/#contact", label: "Contact" },
  ]

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-lg border-b border-border/50 shadow-sm animate-slide-down">
      <div className="container mx-auto px-4 h-20 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3 group">
          <div className="relative h-14 w-14 transition-transform group-hover:scale-105">
            <Image src="/imwc-logo.png" alt="Ilford Muslim Welfare Centre" fill className="object-contain" />
          </div>
          <div className="hidden lg:block">
            <p className="font-serif font-bold text-foreground text-lg leading-tight">Ilford Muslim Welfare Centre</p>
            <p className="text-xs text-muted-foreground">Serving the Community</p>
          </div>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-foreground hover:text-primary transition-all hover:scale-105"
            >
              {link.label}
            </Link>
          ))}
          <Button
            asChild
            className="bg-accent text-accent-foreground hover:bg-accent/90 hover:scale-105 transition-transform shadow-md"
          >
            <a
              href="https://pay.sumup.com/b2c/QKLP1U1U?utm_campaign=pdf&utm_medium=print&utm_source=qr"
              target="_blank"
              rel="noopener noreferrer"
            >
              Donate Now
            </a>
          </Button>
        </div>

        <Sheet>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon">
              <Menu className="h-6 w-6" />
              <span className="sr-only">Open menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right">
            <div className="flex flex-col gap-4 mt-8">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-lg font-medium text-foreground hover:text-primary transition-colors"
                >
                  {link.label}
                </Link>
              ))}
              <Button asChild className="bg-accent text-accent-foreground hover:bg-accent/90 w-full">
                <a
                  href="https://pay.sumup.com/b2c/QKLP1U1U?utm_campaign=pdf&utm_medium=print&utm_source=qr"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Donate Now
                </a>
              </Button>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  )
}
