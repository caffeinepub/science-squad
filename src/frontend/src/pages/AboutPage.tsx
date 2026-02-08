import { useEffect } from 'react';
import { Link } from '@tanstack/react-router';
import { Button } from '@/components/ui/button';
import { Target, Eye, BookOpen, Users, Award, TrendingUp } from 'lucide-react';
import MarketingSection from '@/components/MarketingSection';
import { setPageMeta } from '@/lib/seo';

export default function AboutPage() {
  useEffect(() => {
    setPageMeta(
      'About Science Squad - Our Mission, Vision & Teaching Methodology',
      'Learn about Science Squad\'s commitment to academic excellence, conceptual clarity, and exam-oriented preparation. Trusted by students and parents in Kolkata for quality education.'
    );
  }, []);

  return (
    <>
      {/* Hero */}
      <MarketingSection className="bg-gradient-to-b from-primary/5 to-background">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="mb-6 text-4xl font-bold leading-tight md:text-5xl">
            About <span className="text-primary">Science Squad</span>
          </h1>
          <p className="text-lg text-muted-foreground md:text-xl">
            Building futures through quality education, discipline, and a commitment to excellence that parents trust and students thrive in.
          </p>
        </div>
      </MarketingSection>

      {/* Mission */}
      <MarketingSection>
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="flex items-center justify-center">
            <div className="flex h-64 w-64 items-center justify-center rounded-full bg-primary/10">
              <Target className="h-32 w-32 text-primary" />
            </div>
          </div>
          <div className="flex flex-col justify-center space-y-4">
            <h2 className="text-3xl font-bold">Our Mission</h2>
            <p className="text-lg text-muted-foreground">
              To provide world-class education that empowers students to achieve academic excellence and develop critical thinking skills essential for success in board examinations and competitive tests.
            </p>
            <p className="text-muted-foreground">
              We are committed to creating a learning environment where every student receives personalized attention, conceptual clarity, and the confidence to excel. Our mission extends beyond academics—we aim to nurture well-rounded individuals prepared for future challenges.
            </p>
          </div>
        </div>
      </MarketingSection>

      {/* Vision */}
      <MarketingSection className="bg-muted/30">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="order-2 flex flex-col justify-center space-y-4 lg:order-1">
            <h2 className="text-3xl font-bold">Our Vision</h2>
            <p className="text-lg text-muted-foreground">
              To be the most trusted educational institution in Kolkata, recognized for transforming students into confident, knowledgeable achievers who excel in academics and beyond.
            </p>
            <p className="text-muted-foreground">
              We envision a future where Science Squad is synonymous with quality education, where parents confidently entrust their children's academic journey to us, knowing they will receive the best guidance, support, and results-oriented preparation.
            </p>
          </div>
          <div className="order-1 flex items-center justify-center lg:order-2">
            <div className="flex h-64 w-64 items-center justify-center rounded-full bg-primary/10">
              <Eye className="h-32 w-32 text-primary" />
            </div>
          </div>
        </div>
      </MarketingSection>

      {/* Teaching Methodology */}
      <MarketingSection>
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold md:text-4xl">Our Teaching Methodology</h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            A proven approach that combines conceptual understanding with exam-oriented strategies.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <div className="rounded-lg border border-border bg-background p-6 shadow-sm transition-all hover:border-primary hover:shadow-md">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
              <BookOpen className="h-6 w-6" />
            </div>
            <h3 className="mb-2 text-xl font-semibold">Conceptual Clarity</h3>
            <p className="text-sm text-muted-foreground">
              We focus on building strong fundamentals through detailed explanations, real-world examples, and interactive learning that ensures deep understanding of every concept.
            </p>
          </div>

          <div className="rounded-lg border border-border bg-background p-6 shadow-sm transition-all hover:border-primary hover:shadow-md">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
              <Target className="h-6 w-6" />
            </div>
            <h3 className="mb-2 text-xl font-semibold">Exam-Oriented Preparation</h3>
            <p className="text-sm text-muted-foreground">
              Strategic approach to board and competitive exams with regular mock tests, previous year question analysis, and time management techniques.
            </p>
          </div>

          <div className="rounded-lg border border-border bg-background p-6 shadow-sm transition-all hover:border-primary hover:shadow-md">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
              <Users className="h-6 w-6" />
            </div>
            <h3 className="mb-2 text-xl font-semibold">Personalized Attention</h3>
            <p className="text-sm text-muted-foreground">
              Small batch sizes ensure every student receives individual attention, with dedicated doubt-clearing sessions and one-on-one mentoring when needed.
            </p>
          </div>

          <div className="rounded-lg border border-border bg-background p-6 shadow-sm transition-all hover:border-primary hover:shadow-md">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
              <Award className="h-6 w-6" />
            </div>
            <h3 className="mb-2 text-xl font-semibold">Disciplined Environment</h3>
            <p className="text-sm text-muted-foreground">
              Structured learning environment with regular attendance tracking, progress monitoring, and timely communication with parents about student performance.
            </p>
          </div>

          <div className="rounded-lg border border-border bg-background p-6 shadow-sm transition-all hover:border-primary hover:shadow-md">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
              <TrendingUp className="h-6 w-6" />
            </div>
            <h3 className="mb-2 text-xl font-semibold">Continuous Assessment</h3>
            <p className="text-sm text-muted-foreground">
              Regular tests, assignments, and performance reviews help identify strengths and areas for improvement, ensuring consistent academic growth.
            </p>
          </div>

          <div className="rounded-lg border border-border bg-background p-6 shadow-sm transition-all hover:border-primary hover:shadow-md">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
              <Users className="h-6 w-6" />
            </div>
            <h3 className="mb-2 text-xl font-semibold">Parent Partnership</h3>
            <p className="text-sm text-muted-foreground">
              We believe in transparent communication with parents through regular updates, parent-teacher meetings, and progress reports to ensure collaborative success.
            </p>
          </div>
        </div>
      </MarketingSection>

      {/* Trust Building */}
      <MarketingSection className="bg-primary text-primary-foreground">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="mb-4 text-3xl font-bold md:text-4xl">Why Parents Trust Us</h2>
          <p className="mb-8 text-lg opacity-90">
            At Science Squad, we understand that choosing the right educational institution is one of the most important decisions parents make. We earn your trust through:
          </p>
          <div className="grid gap-6 text-left sm:grid-cols-2">
            <div className="rounded-lg bg-primary-foreground/10 p-6">
              <h3 className="mb-2 font-semibold">Transparency</h3>
              <p className="text-sm opacity-90">
                Open communication about curriculum, teaching methods, and student progress at every step.
              </p>
            </div>
            <div className="rounded-lg bg-primary-foreground/10 p-6">
              <h3 className="mb-2 font-semibold">Consistency</h3>
              <p className="text-sm opacity-90">
                Reliable, structured approach to education with experienced faculty and proven methodologies.
              </p>
            </div>
            <div className="rounded-lg bg-primary-foreground/10 p-6">
              <h3 className="mb-2 font-semibold">Results</h3>
              <p className="text-sm opacity-90">
                Track record of students achieving excellent scores in board exams and competitive tests.
              </p>
            </div>
            <div className="rounded-lg bg-primary-foreground/10 p-6">
              <h3 className="mb-2 font-semibold">Care</h3>
              <p className="text-sm opacity-90">
                Student-centric approach where every child's academic and personal growth matters.
              </p>
            </div>
          </div>
          <div className="mt-8">
            <Link to="/contact">
              <Button size="lg" variant="secondary">
                Schedule a Visit
              </Button>
            </Link>
          </div>
        </div>
      </MarketingSection>
    </>
  );
}
