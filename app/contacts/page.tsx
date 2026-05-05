import { ContactForm } from '@/components/contacts/contact-form'
import { Mail, MapPin, Phone } from 'lucide-react'

const contactInfo = [
  {
    icon: Mail,
    label: 'Email',
    value: 'beerpongframpula@gmail.com',
    href: 'mailto:beerpongframpula@gmail.com',
  },
  {
    icon: Phone,
    label: 'Telefono',
    value: '+39 351 327 5210',
    href: 'tel:+393513275210',
  },
  {
    icon: MapPin,
    label: 'Location',
    value: 'Milan, Italy',
    href: null,
  },
]

export default function ContactsPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Header */}
      <section className="bg-secondary border-b-4 border-primary py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <span className="inline-block bg-primary text-primary-foreground px-3 py-1 text-xs font-bold uppercase tracking-wider border-2 border-primary mb-4">
            Contact
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold uppercase tracking-tight text-primary mb-4 text-balance">
            Get in Touch
          </h1>
          <p className="text-secondary-foreground text-lg max-w-2xl mx-auto">
            Have questions about our tournaments? Want to sponsor an event? We&apos;d love to hear from you!
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {/* Contact Info */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold uppercase tracking-tight text-secondary mb-6">
                Contact Information
              </h2>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                Reach out to us through any of the following channels. We typically respond within 24 hours during business days.
              </p>

              <div className="space-y-4">
                {contactInfo.map((info) => (
                  <div
                    key={info.label}
                    className="flex items-center gap-4 p-4 bg-card border-4 border-secondary neo-brutal-shadow"
                  >
                    <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center bg-primary text-primary-foreground border-2 border-secondary">
                      <info.icon className="h-6 w-6" />
                    </div>
                    <div>
                      <div className="text-xs font-bold uppercase tracking-wide text-muted-foreground">
                        {info.label}
                      </div>
                      {info.href ? (
                        <a
                          href={info.href}
                          className="font-medium text-secondary hover:text-primary transition-colors"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <span className="font-medium text-secondary">{info.value}</span>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Social reminder */}
              <div className="mt-8 p-6 bg-primary/10 border-4 border-secondary">
                <p className="font-bold text-secondary uppercase tracking-wide mb-2">
                  Follow Us
                </p>
                <p className="text-muted-foreground text-sm">
                  Stay updated on upcoming tournaments and community events by following us on social media. Links are in the footer below!
                </p>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <div className="bg-card border-4 border-secondary neo-brutal-shadow-lg p-6 md:p-8">
                <h2 className="text-2xl font-bold uppercase tracking-tight text-secondary mb-6">
                  Send a Message
                </h2>
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
