import { useEffect } from 'react';
import { Link } from '@tanstack/react-router';
import { Button } from '@/components/ui/button';
import { Phone, MessageCircle, UserPlus, BookOpen, Target, Users, Award, GraduationCap, Microscope } from 'lucide-react';
import MarketingSection from '@/components/MarketingSection';
import FeatureCard from '@/components/FeatureCard';
import { getPhoneLink, getWhatsAppLink } from '@/lib/contactLinks';
import { setPageMeta } from '@/lib/seo';

export default function HomePage() {
  useEffect(() => {
    setPageMeta(
      'Science Squad - Premier Institute for CBSE, ICSE & ISC | Classes 6-12 & Competitive Exams',
      'Science Squad offers excellence in education for Classes 6-12 (CBSE, ICSE, ISC) and competitive exam preparation (IIT-JEE, NEET, WBJEE, JELET, JENPAS) in Kolkata. Expert faculty, proven results.'
    );
  }, []);

  return (
    <>
      {/* Hero Section */}
      <MarketingSection className="bg-gradient-to-b from-primary/5 to-background">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="flex flex-col justify-center space-y-6">
            <h1 className="text-4xl font-bold leading-tight tracking-tight md:text-5xl lg:text-6xl">
              Excellence in Education,
              <span className="text-primary"> Success in Results</span>
            </h1>
            <p className="text-lg text-muted-foreground md:text-xl">
              A Premier Institute of CBSE, ICSE & ISC Board. Empowering students from Classes 6 to 12 with expert guidance for board exams and competitive foundations.
            </p>
            <div className="flex flex-wrap gap-3">
              <a href={getPhoneLink()}>
                <Button size="lg" variant="outline" className="gap-2">
                  <Phone className="h-5 w-5" />
                  Call Now
                </Button>
              </a>
              <a href={getWhatsAppLink()} target="_blank" rel="noopener noreferrer">
                <Button size="lg" variant="outline" className="gap-2">
                  <MessageCircle className="h-5 w-5" />
                  WhatsApp Us
                </Button>
              </a>
              <Link to="/contact">
                <Button size="lg" className="gap-2">
                  <UserPlus className="h-5 w-5" />
                  Enroll Now
                </Button>
              </Link>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <img
              src="/assets/generated/science-squad-hero-illustration.dim_1600x900.png"
              alt="Science Squad Education"
              className="w-full max-w-lg rounded-lg shadow-xl"
            />
          </div>
        </div>
      </MarketingSection>

      {/* Why Choose Science Squad */}
      <MarketingSection>
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold md:text-4xl">Why Choose Science Squad?</h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            We combine academic excellence with personalized attention to ensure every student reaches their full potential.
          </p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <FeatureCard
            icon={<BookOpen className="h-8 w-8" />}
            title="Conceptual Clarity"
            description="Deep understanding of fundamentals through structured teaching methodology and regular assessments."
          />
          <FeatureCard
            icon={<Target className="h-8 w-8" />}
            title="Exam-Oriented Approach"
            description="Strategic preparation focused on board exams and competitive tests with proven techniques."
          />
          <FeatureCard
            icon={<Users className="h-8 w-8" />}
            title="Expert Faculty"
            description="Experienced teachers dedicated to student success with personalized mentoring and guidance."
          />
          <FeatureCard
            icon={<Award className="h-8 w-8" />}
            title="Proven Results"
            description="Track record of excellence with students consistently achieving top scores and ranks."
          />
        </div>
      </MarketingSection>

      {/* Courses Offered */}
      <MarketingSection className="bg-muted/30">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold md:text-4xl">Courses Offered</h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            Comprehensive programs designed for academic excellence and competitive success.
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-2">
          {/* Board Classes */}
          <div className="rounded-lg border border-border bg-background p-8 shadow-sm transition-all hover:border-primary hover:shadow-md">
            <div className="mb-4 flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                <GraduationCap className="h-6 w-6" />
              </div>
              <h3 className="text-2xl font-bold">Board Classes</h3>
            </div>
            <p className="mb-4 text-muted-foreground">
              Classes 6 to 12 for CBSE, ICSE & ISC Boards
            </p>
            <ul className="space-y-2">
              <li className="flex items-start gap-2 text-sm">
                <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
                Comprehensive syllabus coverage
              </li>
              <li className="flex items-start gap-2 text-sm">
                <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
                Regular tests and assessments
              </li>
              <li className="flex items-start gap-2 text-sm">
                <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
                Doubt clearing sessions
              </li>
            </ul>
          </div>

          {/* Competitive Foundation */}
          <div className="rounded-lg border border-border bg-background p-8 shadow-sm transition-all hover:border-primary hover:shadow-md">
            <div className="mb-4 flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                <Microscope className="h-6 w-6" />
              </div>
              <h3 className="text-2xl font-bold">Competitive Foundation</h3>
            </div>
            <p className="mb-4 text-muted-foreground">
              Specialized coaching for competitive exams
            </p>
            <ul className="space-y-2">
              <li className="flex items-start gap-2 text-sm">
                <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
                IIT-JEE (Main & Advanced)
              </li>
              <li className="flex items-start gap-2 text-sm">
                <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
                NEET (Medical Entrance)
              </li>
              <li className="flex items-start gap-2 text-sm">
                <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
                WBJEE, JELET, JENPAS
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 text-center">
          <Link to="/courses">
            <Button size="lg" variant="outline">
              View All Courses
            </Button>
          </Link>
        </div>
      </MarketingSection>

      {/* CTA Banner */}
      <MarketingSection className="bg-primary text-primary-foreground">
        <div className="text-center">
          <h2 className="mb-4 text-3xl font-bold md:text-4xl">Ready to Excel in Your Studies?</h2>
          <p className="mx-auto mb-8 max-w-2xl text-lg opacity-90">
            Join Science Squad today and experience the difference that quality education makes. Limited seats available for the upcoming batch.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/contact">
              <Button size="lg" variant="secondary" className="gap-2">
                <UserPlus className="h-5 w-5" />
                Enroll Now
              </Button>
            </Link>
            <a href={getPhoneLink()}>
              <Button size="lg" variant="destructive" className="gap-2">
                <Phone className="h-5 w-5" />
                Call: 084818 42879
              </Button>
            </a>
          </div>
        </div>
      </MarketingSection>
    </>
  );
}
