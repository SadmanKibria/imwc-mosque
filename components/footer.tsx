import Link from "next/link"
import Image from "next/image"
import { MapPin, Phone, Mail, Facebook } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground py-12">
      {/* Developer: Sadman Kibria | Website: sadmankibria.com */}
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="relative h-12 w-12">
                <Image src="/imwc-logo.png" alt="IMWC Logo" fill className="object-contain" />
              </div>
              <p className="font-semibold">Ilford Muslim Welfare Centre</p>
            </div>
            <p className="text-sm text-primary-foreground/80 leading-relaxed">
              Serving the Muslim community in Ilford with faith, education, and compassion.
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
                  href="/gallery"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  Gallery
                </Link>
              </li>
              <li>
                <Link
                  href="/donate"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  Donate
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
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Contact Us</h3>
            <div className="space-y-3 text-sm text-primary-foreground/80">
              <div className="flex items-start gap-2">
                <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <p className="leading-relaxed">
                  379 Oaklands Park Ave
                  <br />
                  Ilford IG1 1TG
                  <br />
                  United Kingdom
                </p>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4 flex-shrink-0" />
                <a href="tel:07950206007" className="hover:underline">
                  07950 206007
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4 flex-shrink-0" />
                <a href="mailto:imwchello@gmail.com" className="hover:underline">
                  imwchello@gmail.com
                </a>
              </div>
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Follow Us</h3>
            <div className="flex gap-3">
              <a
                href="https://www.facebook.com/imwcadmin/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-primary-foreground/10 hover:bg-primary-foreground/20 rounded-lg transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
            </div>
            <div className="mt-6">
              <a
                href="https://www.google.com/search?q=ilford+muslim+welfare+centre&oq=ilfo&gs_lcrp=EgZjaHJvbWUqDAgAECMYJxjjAhiKBTIMCAAQIxgnGOMCGIoFMhIIARAuGCcYrwEYxwEYigUYjgUyBggCEEUYOzIGCAMQRRhBMgYIBBBFGD0yBggFEEUYPDIGCAYQRRhBMgYIBxBFGEHSAQgxMjM0ajBqN6gCALACAA&sourceid=chrome&ie=UTF-8#ip=1&lrd=0x47d8a7c25b5711ef:0xf6a8e72a37b5f065,1,,,,"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors inline-flex items-center gap-1"
              >
                Leave us a Google Review →
              </a>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-primary-foreground/20">
          <div className="text-center">
            <p className="text-sm text-primary-foreground/80">
              &copy; {new Date().getFullYear()} Ilford Muslim Welfare Centre. All rights reserved.
            </p>
            <p className="text-xs text-primary-foreground/60 mt-1">Registered in England and Wales (14615563)</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
