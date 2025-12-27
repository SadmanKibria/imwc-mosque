import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { MapPin, Phone, Facebook, Star } from "lucide-react"

export function Contact() {
  return (
    <section id="contact" className="py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-12 animate-fade-in">
          <h2 className="font-serif text-3xl md:text-5xl font-bold text-foreground mb-4">Get in Touch</h2>
          <p className="text-muted-foreground text-lg">Visit us, call us, or connect with us online</p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          <Card className="animate-fade-in-up hover:shadow-xl transition-shadow">
            <CardHeader>
              <CardTitle className="font-serif text-2xl">Contact Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <MapPin className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="font-semibold mb-1">Address</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    379 Oaklands Park Ave
                    <br />
                    Ilford IG1 1TG
                    <br />
                    United Kingdom
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Phone className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="font-semibold mb-1">Phone</p>
                  <a href="tel:07950206007" className="text-sm text-primary hover:underline">
                    07950 206007
                  </a>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="animate-fade-in-up hover:shadow-xl transition-shadow" style={{ animationDelay: "100ms" }}>
            <CardHeader>
              <CardTitle className="font-serif text-2xl">Connect With Us</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <Button
                variant="outline"
                className="w-full justify-start gap-3 bg-transparent hover:bg-primary/5 transition-colors"
                asChild
              >
                <a href="https://www.facebook.com/Iifordmuslimwelfarecentre" target="_blank" rel="noopener noreferrer">
                  <Facebook className="h-5 w-5" />
                  Follow us on Facebook
                </a>
              </Button>

              <Button
                variant="outline"
                className="w-full justify-start gap-3 bg-transparent hover:bg-accent/10 transition-colors"
                asChild
              >
                <a
                  href="https://www.google.com/search?q=ilford+muslim+welfare+centre&oq=ilfo&gs_lcrp=EgZjaHJvbWUqDAgAECMYJxjjAhiKBTIMCAAQIxgnGOMCGIoFMhIIARAuGCcYrwEYxwEYigUYjgUyBggCEEUYOzIGCAMQRRhBMgYIBBBFGD0yBggFEEUYPDIGCAYQRRhBMgYIBxBFGEHSAQgxMjM0ajBqN6gCALACAA&sourceid=chrome&ie=UTF-8#ip=1&lrd=0x47d8a7c25b5711ef:0xf6a8e72a37b5f065,1,,,,"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Star className="h-5 w-5" />
                  Leave a Google Review
                </a>
              </Button>

              <div className="pt-4 border-t">
                <Button
                  size="lg"
                  className="w-full bg-accent text-accent-foreground hover:bg-accent/90 hover:scale-105 transition-all shadow-md"
                  asChild
                >
                  <a href="https://imwcentre.co.uk/donate" target="_blank" rel="noopener noreferrer">
                    Donate to Support Our Work
                  </a>
                </Button>
                <p className="text-xs text-muted-foreground text-center mt-2">
                  Your donations help us serve the community better
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
