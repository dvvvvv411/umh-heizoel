
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import USPSection from '@/components/USPSection';
import TrustSection from '@/components/TrustSection';
import CompanySection from '@/components/CompanySection';
import Footer from '@/components/Footer';
import SEO from '@/components/SEO';

import { companyStructuredData, localBusinessStructuredData } from '@/data/structuredData';

const Index = () => {
  const structuredData = [companyStructuredData, localBusinessStructuredData];

  return (
    <div className="min-h-screen">
        <SEO
        title="UMH Heizöl | Premium Heizöl ab 70 Cent/L | Kostenlose Lieferung ab 2.000L"
        description="Premium Heizöl ab 70 Cent pro Liter mit kostenloser Lieferung ab 2.000L deutschlandweit. Jetzt Preis berechnen!"
        keywords="Heizöl günstig, Heizöl bestellen, Heizöl Lieferung Deutschland, günstige Heizölpreise, Heizöl online kaufen"
        structuredData={structuredData}
        canonicalUrl="https://umh-heizoel.de/"
      />
      <Header />
      <HeroSection />
      <USPSection />
      <TrustSection />
      <CompanySection />
      <Footer />
    </div>
  );
};

export default Index;
