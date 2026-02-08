import { Link, useRouterState } from '@tanstack/react-router';
import { Menu } from 'lucide-react';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/courses', label: 'Courses' },
  { href: '/contact', label: 'Contact' },
];

export default function SiteHeader() {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouterState();
  const currentPath = router.location.pathname;

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80">
      <div className="container flex h-16 items-center justify-between">
        <Link 
          to="/" 
          className="flex items-center gap-3"
          aria-label="Science Squad Home"
        >
          <img
            src="/assets/image-2.png"
            alt="Science Squad Logo"
            className="h-10 w-auto max-w-[120px] object-contain px-2 py-1.5 sm:max-w-[140px] md:max-w-[160px] md:px-3 md:py-2"
            loading="lazy"
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-6 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              className={`text-sm font-medium transition-colors hover:text-primary ${
                currentPath === link.href
                  ? 'text-primary'
                  : 'text-foreground/80'
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link to="/contact">
            <Button size="sm" className="ml-2">
              Enroll Now
            </Button>
          </Link>
        </nav>

        {/* Mobile Navigation */}
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon" aria-label="Open menu">
              <Menu className="h-5 w-5" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[280px]">
            <div className="flex flex-col gap-4 pt-8">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`text-base font-medium transition-colors hover:text-primary ${
                    currentPath === link.href
                      ? 'text-primary'
                      : 'text-foreground/80'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <Link to="/contact" onClick={() => setIsOpen(false)}>
                <Button className="w-full">Enroll Now</Button>
              </Link>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
