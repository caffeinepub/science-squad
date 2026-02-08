import { ReactNode } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Phone, MessageCircle, UserPlus } from 'lucide-react';
import { getPhoneLink, getWhatsAppLink } from '@/lib/contactLinks';
import { Link } from '@tanstack/react-router';

interface CourseSectionProps {
  title: string;
  overview: string;
  benefits: string[];
  icon?: ReactNode;
}

export default function CourseSection({ title, overview, benefits, icon }: CourseSectionProps) {
  return (
    <Card className="border-border transition-all duration-300 hover:border-primary hover:shadow-md">
      <CardHeader>
        <CardTitle className="flex items-center gap-3 text-2xl">
          {icon && <div className="text-primary">{icon}</div>}
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <p className="text-muted-foreground">{overview}</p>
        
        <div>
          <h4 className="mb-3 font-semibold">Key Benefits:</h4>
          <ul className="space-y-2">
            {benefits.map((benefit, index) => (
              <li key={index} className="flex items-start gap-2 text-sm text-muted-foreground">
                <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
                {benefit}
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-wrap gap-3 pt-4">
          <Link to="/contact">
            <Button className="gap-2">
              <UserPlus className="h-4 w-4" />
              Enroll Now
            </Button>
          </Link>
          <a href={getPhoneLink()}>
            <Button variant="outline" className="gap-2">
              <Phone className="h-4 w-4" />
              Call Now
            </Button>
          </a>
          <a href={getWhatsAppLink()} target="_blank" rel="noopener noreferrer">
            <Button variant="outline" className="gap-2">
              <MessageCircle className="h-4 w-4" />
              WhatsApp
            </Button>
          </a>
        </div>
      </CardContent>
    </Card>
  );
}
