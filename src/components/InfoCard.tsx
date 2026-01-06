
import { ReactNode } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { LucideIcon } from 'lucide-react';

interface InfoCardProps {
  title: string;
  description: string;
  icon?: LucideIcon;
  children?: ReactNode;
  className?: string;
}

const InfoCard = ({ title, description, icon: Icon, children, className = '' }: InfoCardProps) => {
  return (
    <Card className={`bg-white/80 backdrop-blur-md border border-red-200/50 rounded-2xl shadow-md hover:shadow-lg hover:bg-white/90 transition-all duration-300 hover-scale h-full ${className}`}>
      <CardHeader>
        {Icon && (
          <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
            <Icon className="w-6 h-6 text-primary" />
          </div>
        )}
        <CardTitle className="text-xl font-bold text-gray-900">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-gray-600 mb-4">{description}</p>
        {children}
      </CardContent>
    </Card>
  );
};

export default InfoCard;
