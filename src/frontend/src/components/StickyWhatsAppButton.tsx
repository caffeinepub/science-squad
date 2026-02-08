import { MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { getWhatsAppLink } from '@/lib/contactLinks';

export default function StickyWhatsAppButton() {
  return (
    <a
      href={getWhatsAppLink()}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-40 md:bottom-8 md:right-8"
      aria-label="Chat on WhatsApp"
    >
      <Button
        size="lg"
        className="h-14 w-14 rounded-full shadow-lg transition-transform hover:scale-110 md:h-16 md:w-16"
        style={{ backgroundColor: '#25D366' }}
      >
        <MessageCircle className="h-6 w-6 md:h-7 md:w-7" />
      </Button>
    </a>
  );
}
