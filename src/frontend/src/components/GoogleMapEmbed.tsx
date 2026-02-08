import { useEffect, useRef, useState } from 'react';

export default function GoogleMapEmbed() {
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin: '100px' }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const mapUrl = `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3685.0!2d88.3639!3d22.4986!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a0271b0b0b0b0b0%3A0x0!2s2F%2C%2029%2FA%2C%20Raja%20SC%20Mullick%20Rd%2C%20Ananda%20Pally%2C%20Bapuji%20Nagar%2C%20Jadavpur%2C%20Kolkata%2C%20West%20Bengal%20700032!5e0!3m2!1sen!2sin!4v1234567890`;

  return (
    <div ref={containerRef} className="h-[400px] w-full overflow-hidden rounded-lg border border-border">
      {isVisible ? (
        <iframe
          src={mapUrl}
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Science Squad Location"
        />
      ) : (
        <div className="flex h-full w-full items-center justify-center bg-muted">
          <p className="text-muted-foreground">Loading map...</p>
        </div>
      )}
    </div>
  );
}
