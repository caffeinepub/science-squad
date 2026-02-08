import { useEffect } from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import MarketingSection from '@/components/MarketingSection';
import ContactForm from '@/components/ContactForm';
import GoogleMapEmbed from '@/components/GoogleMapEmbed';
import { getPhoneLink, getEmailLink } from '@/lib/contactLinks';
import { setPageMeta } from '@/lib/seo';

export default function ContactPage() {
  useEffect(() => {
    setPageMeta(
      'Contact Science Squad - Get in Touch | Jadavpur, Kolkata',
      'Contact Science Squad for admissions and inquiries. Visit us at Jadavpur, Kolkata or call 084818 42879. We\'re here to help you achieve academic excellence.'
    );
  }, []);

  return (
    <>
      {/* Hero */}
      <MarketingSection className="bg-gradient-to-b from-primary/5 to-background">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="mb-6 text-4xl font-bold leading-tight md:text-5xl">
            Get in <span className="text-primary">Touch</span>
          </h1>
          <p className="text-lg text-muted-foreground md:text-xl">
            Have questions about our courses or admissions? We're here to help. Reach out to us and we'll get back to you shortly.
          </p>
        </div>
      </MarketingSection>

      {/* Contact Information & Form */}
      <MarketingSection>
        <div className="grid gap-12 lg:grid-cols-2">
          {/* Contact Details */}
          <div className="space-y-8">
            <div>
              <h2 className="mb-6 text-2xl font-bold">Contact Information</h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <MapPin className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="mb-1 font-semibold">Address</h3>
                    <p className="text-sm text-muted-foreground">
                      2F, 29/A, Raja SC Mullick Rd, Ananda Pally,
                      <br />
                      Bapuji Nagar, Jadavpur,
                      <br />
                      Kolkata, West Bengal 700032
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <Phone className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="mb-1 font-semibold">Phone & WhatsApp</h3>
                    <a
                      href={getPhoneLink()}
                      className="text-sm text-muted-foreground transition-colors hover:text-primary"
                    >
                      084818 42879
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <Mail className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="mb-1 font-semibold">Email</h3>
                    <a
                      href={getEmailLink()}
                      className="text-sm text-muted-foreground transition-colors hover:text-primary"
                    >
                      science.squad.kolkata@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <Clock className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="mb-1 font-semibold">Office Hours</h3>
                    <p className="text-sm text-muted-foreground">
                      Monday - Saturday: 9:00 AM - 7:00 PM
                      <br />
                      Sunday: By Appointment
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <h2 className="mb-6 text-2xl font-bold">Send Us a Message</h2>
            <ContactForm />
          </div>
        </div>
      </MarketingSection>

      {/* Map */}
      <MarketingSection className="bg-muted/30">
        <div className="mb-8 text-center">
          <h2 className="mb-4 text-2xl font-bold md:text-3xl">Visit Our Campus</h2>
          <p className="text-muted-foreground">
            Located in the heart of Jadavpur, easily accessible by public transport.
          </p>
        </div>
        <GoogleMapEmbed />
      </MarketingSection>
    </>
  );
}
