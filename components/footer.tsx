import Link from "next/link"
import Image from "next/image"

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="relative h-12 w-12">
                <Image src="/imwc-logo.png" alt="IMWC Logo" fill className="object-contain" />
              </div>
              <p className="font-semibold">Ilford Muslim Welfare Centre</p>
            </div>
            <p className="text-sm text-primary-foreground/80 leading-relaxed">
              Serving the Muslim community in Ilford with faith, education, and compassion since 1986.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="/#prayer-times"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  Prayer Times
                </Link>
              </li>
              <li>
                <Link
                  href="/#contact"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Visit Us</h3>
            <p className="text-sm text-primary-foreground/80 leading-relaxed">
              379 Oaklands Park Ave
              <br />
              Ilford IG1 1TG
              <br />
              United Kingdom
            </p>
            <p className="text-sm text-primary-foreground/80 mt-4">
              Phone:{" "}
              <a href="tel:07950206007" className="hover:underline">
                07950 206007
              </a>
            </p>
          </div>
        </div>

        <div className="pt-8 border-t border-primary-foreground/20 space-y-3">
          <div className="text-center">
            <p className="text-sm text-primary-foreground/80">
              &copy; {new Date().getFullYear()} Ilford Muslim Welfare Centre. All rights reserved.
            </p>
            <p className="text-xs text-primary-foreground/60 mt-1">
              <a href="https://imwcentre.co.uk" className="hover:underline">
                imwcentre.co.uk
              </a>
            </p>
          </div>
          <div className="text-center">
            <p className="text-sm text-primary-foreground/70">
              Designed & Developed by{" "}
              <a
                href="https://sadmankibria.com"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold hover:underline text-primary-foreground transition-colors"
              >
                Sadman Kibria
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
