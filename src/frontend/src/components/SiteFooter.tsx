import { Link } from '@tanstack/react-router';
import { SiFacebook, SiInstagram } from 'react-icons/si';
import { MapPin, Phone, Mail, Heart } from 'lucide-react';
import { getPhoneLink, getEmailLink } from '@/lib/contactLinks';

export default function SiteFooter() {
  return (
    <footer className="border-t border-border bg-muted/30">
      <div className="container py-12">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="space-y-4">
            <Link 
              to="/" 
              className="inline-flex items-center"
              aria-label="Science Squad Home"
            >
              <img
                src="/assets/image-2.png"
                alt="Science Squad Logo"
                className="h-12 w-auto max-w-[160px] object-contain"
                loading="lazy"
              />
            </Link>
            <p className="text-sm text-muted-foreground">
              Excellence in education for Classes 6-12 and competitive exam preparation.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-4 text-sm font-semibold">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/" className="text-muted-foreground transition-colors hover:text-primary">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-muted-foreground transition-colors hover:text-primary">
                  About
                </Link>
              </li>
              <li>
                <Link to="/courses" className="text-muted-foreground transition-colors hover:text-primary">
                  Courses
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-muted-foreground transition-colors hover:text-primary">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="mb-4 text-sm font-semibold">Contact Us</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <MapPin className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary" />
                <span className="text-muted-foreground">
                  2F, 29/A, Raja SC Mullick Rd, Ananda Pally, Bapuji Nagar, Jadavpur, Kolkata, West Bengal 700032
                </span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-primary" />
                <a
                  href={getPhoneLink()}
                  className="text-muted-foreground transition-colors hover:text-primary"
                >
                  084818 42879
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-primary" />
                <a
                  href={getEmailLink()}
                  className="text-muted-foreground transition-colors hover:text-primary"
                >
                  science.squad.kolkata@gmail.com
                </a>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="mb-4 text-sm font-semibold">Connect With Us</h3>
            <div className="flex flex-wrap justify-center gap-4 md:justify-start">
              <a
                href="https://www.facebook.com/share/1BxtRPtL4o/"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-2 rounded-lg px-4 py-2.5 text-white shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-[#1877F2]/30"
                style={{ backgroundColor: '#1877F2' }}
                aria-label="Visit our Facebook page"
              >
                <SiFacebook className="h-5 w-5" />
                <span className="text-sm font-medium">Facebook</span>
              </a>
              <a
                href="https://www.instagram.com/sciencesquadkolkata?igsh=MWEyNzJkbW9icGM3aw=="
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-2 rounded-lg bg-gradient-to-br from-[#833AB4] via-[#E1306C] to-[#F77737] px-4 py-2.5 text-white shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-[#E1306C]/30"
                aria-label="Visit our Instagram page"
              >
                <SiInstagram className="h-5 w-5" />
                <span className="text-sm font-medium">Instagram</span>
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 border-t border-border pt-8 text-center text-sm text-muted-foreground">
          <p>
            © 2026. Built with <Heart className="inline h-4 w-4 text-destructive" /> using{' '}
            <a
              href="https://caffeine.ai"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium transition-colors hover:text-primary"
            >
              caffeine.ai
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
