import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { MapPin, Phone, Mail, Facebook, Star } from "lucide-react"

export function Contact() {
  return (
    <section id="contact" className="py-16 md:py-24 bg-gradient-to-br from-muted/30 to-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-12 animate-fade-in">
          <h2 className="font-serif text-3xl md:text-5xl font-bold text-foreground mb-4">Get in Touch</h2>
          <p className="text-muted-foreground text-lg">We'd love to hear from you</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          <Card className="animate-fade-in-up hover:shadow-xl transition-all hover:-translate-y-1">
            <CardHeader>
              <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center mb-3">
                <MapPin className="h-6 w-6 text-primary" />
              </div>
              <CardTitle className="font-serif text-xl">Visit Us</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground leading-relaxed">
                379 Oaklands Park Ave
                <br />
                Ilford IG1 1TG
                <br />
                United Kingdom
              </p>
              <Button variant="outline" size="sm" className="w-full mt-4 bg-transparent" asChild>
                <a
                  href="https://www.google.com/maps/search/?api=1&query=379+Oaklands+Park+Ave+Ilford+IG1+1TG"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Get Directions
                </a>
              </Button>
            </CardContent>
          </Card>

          <Card
            className="animate-fade-in-up hover:shadow-xl transition-all hover:-translate-y-1"
            style={{ animationDelay: "100ms" }}
          >
            <CardHeader>
              <div className="h-12 w-12 rounded-xl bg-accent/10 flex items-center justify-center mb-3">
                <Phone className="h-6 w-6 text-accent" />
              </div>
              <CardTitle className="font-serif text-xl">Call Us</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-2">Have a question? Give us a call</p>
              <a href="tel:07950206007" className="text-lg font-semibold text-primary hover:underline block mb-4">
                07950 206007
              </a>
              <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center mb-3 mt-6">
                <Mail className="h-6 w-6 text-primary" />
              </div>
              <p className="text-sm text-muted-foreground mb-2">Email us at</p>
              <a href="mailto:imwchello@gmail.com" className="text-sm text-primary hover:underline break-all">
                imwchello@gmail.com
              </a>
            </CardContent>
          </Card>

          <Card
            className="animate-fade-in-up hover:shadow-xl transition-all hover:-translate-y-1"
            style={{ animationDelay: "200ms" }}
          >
            <CardHeader>
              <div className="h-12 w-12 rounded-xl bg-accent/10 flex items-center justify-center mb-3">
                <Star className="h-6 w-6 text-accent" />
              </div>
              <CardTitle className="font-serif text-xl">Connect Online</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <Button
                variant="outline"
                className="w-full justify-start gap-3 hover:bg-primary/5 bg-transparent"
                asChild
              >
                <a href="https://www.facebook.com/imwcadmin/" target="_blank" rel="noopener noreferrer">
                  <Facebook className="h-5 w-5 text-[#1877F2]" />
                  Follow on Facebook
                </a>
              </Button>

              <Button variant="outline" className="w-full justify-start gap-3 hover:bg-accent/5 bg-transparent" asChild>
                <a
                  href="https://www.google.com/search?q=ilford+muslim+welfare+centre&oq=ilfo&gs_lcrp=EgZjaHJvbWUqDAgAECMYJxjjAhiKBTIMCAAQIxgnGOMCGIoFMhIIARAuGCcYrwEYxwEYigUYjgUyBggCEEUYOzIGCAMQRRhBMgYIBBBFGD0yBggFEEUYPDIGCAYQRRhBMgYIBxBFGEHSAQgxMjM0ajBqN6gCALACAA&sourceid=chrome&ie=UTF-8#ip=1&lrd=0x47d8a7c25b5711ef:0xf6a8e72a37b5f065,1,,,,"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Star className="h-5 w-5 text-[#FBBC04]" />
                  Leave a Review
                </a>
              </Button>

              <div className="pt-4 border-t">
                <Button
                  size="lg"
                  className="w-full bg-accent text-accent-foreground hover:bg-accent/90 hover:scale-105 transition-all shadow-md"
                  asChild
                >
                  <a href="/donate">Support Our Mission</a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
