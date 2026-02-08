import { ReactNode } from 'react';

interface MarketingSectionProps {
  children: ReactNode;
  className?: string;
  id?: string;
}

export default function MarketingSection({ children, className = '', id }: MarketingSectionProps) {
  return (
    <section id={id} className={`py-16 md:py-24 ${className}`}>
      <div className="container">{children}</div>
    </section>
  );
}
