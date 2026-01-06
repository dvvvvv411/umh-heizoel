
import { ReactNode } from 'react';

interface PageSectionProps {
  children: ReactNode;
  className?: string;
  background?: 'white' | 'gray' | 'primary' | 'warm';
}

const PageSection = ({ children, className = '', background = 'white' }: PageSectionProps) => {
  const backgroundClasses = {
    white: 'bg-white',
    gray: 'bg-gray-50',
    primary: 'bg-gradient-to-br from-primary/8 to-red-600/8',
    warm: 'bg-gradient-to-b from-red-50/40 to-orange-50/20'
  };

  return (
    <section className={`py-20 ${backgroundClasses[background]} ${className}`}>
      <div className="container mx-auto px-4">
        {children}
      </div>
    </section>
  );
};

export default PageSection;
