import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu } from "lucide-react"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

export function Navigation() {
  const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#prayer-times", label: "Prayer Times" },
    { href: "#services", label: "Services" },
    { href: "#contact", label: "Contact" },
  ]

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <div className="h-10 w-10 bg-primary rounded-lg flex items-center justify-center">
            <span className="text-primary-foreground font-serif text-xl">IM</span>
          </div>
          <div className="hidden md:block">
            <p className="font-serif font-semibold text-foreground">Ilford Muslim Welfare Centre</p>
            <p className="text-xs text-muted-foreground">Serving the Community</p>
          </div>
        </Link>

        <div className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-foreground hover:text-primary transition-colors"
            >
              {link.label}
            </Link>
          ))}
          <Button className="bg-accent text-accent-foreground hover:bg-accent/90">Donate Now</Button>
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
              <Button className="bg-accent text-accent-foreground hover:bg-accent/90 w-full">Donate Now</Button>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  )
}
