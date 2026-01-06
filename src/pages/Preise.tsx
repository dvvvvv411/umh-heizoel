
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PageSection from '@/components/PageSection';
import SEO from '@/components/SEO';
import { Calculator } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Preise = () => {
  const scrollToPriceCalculator = () => {
    // Navigate to home page and scroll to calculator
    window.location.href = '/#price-calculator';
  };

  return (
    <div className="min-h-screen">
      <SEO
        title="Heizöl Preise & Konditionen | Ab 70 Cent/L | Kölner Kraftstoff"
        description="Transparente Heizöl-Preise ohne versteckte Kosten. Standard Heizöl ab 70 Cent/L, Premium ab 73 Cent/L. Preisgarantie bis zur Lieferung!"
        keywords="Heizöl Preise, Heizöl Kosten, Preisgarantie, transparente Preise, Heizöl günstig kaufen, Köln"
        canonicalUrl="https://koelnerkraftstoff-heizoel.de/preise"
      />
      <Header />
      
      {/* Hero Section */}
      <PageSection className="pt-32 pb-20" background="primary">
        <div className="max-w-6xl mx-auto">
          <div className="text-center space-y-8">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 border border-white/20 text-sm font-medium text-gray-700 mb-4">
              <Calculator className="w-4 h-4 mr-2 text-primary" />
              Transparente Preisgestaltung
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight">
              Transparente <span className="gradient-text">Preise & Konditionen</span>
            </h1>
            
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Faire und transparente Preise ohne versteckte Kosten. 
              Profitieren Sie von unseren Mengenrabatten und Premium-Kundenvorteilen.
            </p>
          </div>
        </div>
      </PageSection>

      {/* Aktuelle Preise */}
      <PageSection className="py-24" background="warm">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Aktuelle Heizölpreise</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Profitieren Sie von unseren günstigen Preisen und erstklassiger Qualität
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {/* Standard Heizöl EL */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-gray-100 rounded-3xl transform rotate-1 group-hover:rotate-2 transition-transform duration-300"></div>
              <div className="relative bg-white border border-gray-200 rounded-3xl p-10 shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">Standard Heizöl EL</h3>
                  <div className="relative inline-block">
                    <div className="text-6xl font-bold text-primary mb-2">0,70 €</div>
                    <div className="absolute -top-2 -right-8 text-sm text-gray-500 font-medium">inkl. MwSt.</div>
                  </div>
                  <div className="text-gray-600 font-medium">pro Liter</div>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-center space-x-3 p-3 rounded-xl bg-green-50">
                    <div className="w-2 h-2 bg-green-500 rounded-full flex-shrink-0"></div>
                    <p className="text-gray-700 font-medium">DIN 51603-1 Qualität</p>
                  </div>
                  <div className="flex items-center space-x-3 p-3 rounded-xl bg-green-50">
                    <div className="w-2 h-2 bg-green-500 rounded-full flex-shrink-0"></div>
                    <p className="text-gray-700 font-medium">Schwefelarm</p>
                  </div>
                  <div className="flex items-center space-x-3 p-3 rounded-xl bg-green-50">
                    <div className="w-2 h-2 bg-green-500 rounded-full flex-shrink-0"></div>
                    <p className="text-gray-700 font-medium">Sofort verfügbar</p>
                  </div>
                  <div className="flex items-center space-x-3 p-3 rounded-xl bg-green-50">
                    <div className="w-2 h-2 bg-green-500 rounded-full flex-shrink-0"></div>
                    <p className="text-gray-700 font-medium">Für alle Ölheizungen</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Premium Heizöl Plus */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-red-600/10 rounded-3xl transform -rotate-1 group-hover:-rotate-2 transition-transform duration-300"></div>
              <div className="relative bg-white border-2 border-primary/30 rounded-3xl p-10 shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-gradient-to-r from-primary to-red-600 text-white px-6 py-2 rounded-full text-sm font-bold shadow-lg">
                    PREMIUM
                  </div>
                </div>
                
                <div className="text-center mb-8 pt-4">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">Premium Heizöl Plus</h3>
                  <div className="relative inline-block">
                    <div className="text-6xl font-bold text-primary mb-2">0,73 €</div>
                    <div className="absolute -top-2 -right-8 text-sm text-gray-500 font-medium">inkl. MwSt.</div>
                  </div>
                  <div className="text-gray-600 font-medium">pro Liter</div>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-center space-x-3 p-3 rounded-xl bg-primary/5 border border-primary/20">
                    <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                    <p className="text-gray-700 font-medium">Premium-Qualität mit Additiven</p>
                  </div>
                  <div className="flex items-center space-x-3 p-3 rounded-xl bg-primary/5 border border-primary/20">
                    <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                    <p className="text-gray-700 font-medium">Ultra-schwefelarm</p>
                  </div>
                  <div className="flex items-center space-x-3 p-3 rounded-xl bg-primary/5 border border-primary/20">
                    <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                    <p className="text-gray-700 font-medium">Verlängerte Haltbarkeit</p>
                  </div>
                  <div className="flex items-center space-x-3 p-3 rounded-xl bg-primary/5 border border-primary/20">
                    <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                    <p className="text-gray-700 font-medium">Optimierte Verbrennung</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-16">
            <div className="inline-flex flex-col items-center space-y-6 p-8 bg-gradient-to-br from-gray-50 to-white rounded-2xl border border-gray-200 shadow-sm">
              <p className="text-lg text-gray-700 font-medium">
                Benötigen Sie ein individuelles Angebot?
              </p>
              <Button 
                onClick={scrollToPriceCalculator}
                className="bg-primary hover:bg-primary/90 text-white px-8 py-3 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <Calculator className="w-5 h-5 mr-3" />
                zum Preisrechner
              </Button>
            </div>
          </div>
        </div>
      </PageSection>

      {/* Preisgarantie */}
      <PageSection background="primary" className="py-24">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Unsere Preisgarantie</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Ihre Sicherheit ist unser Versprechen - transparente Kosten ohne Überraschungen
            </p>
          </div>
          
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-white/80 to-white/60 rounded-3xl backdrop-blur-sm transform rotate-1"></div>
            <div className="relative bg-white/90 border border-white/40 rounded-3xl p-12 shadow-xl backdrop-blur-sm">
              <div className="text-center mb-12">
                <div className="w-20 h-20 bg-gradient-to-br from-primary/10 to-primary/5 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <div className="text-4xl">🛡️</div>
                </div>
                <p className="text-xl text-gray-700 leading-relaxed max-w-4xl mx-auto">
                  Nach Ihrer Bestellung garantieren wir den vereinbarten Preis bis zur Lieferung - 
                  auch bei steigenden Marktpreisen. Sie profitieren von Planungssicherheit und 
                  transparenten Kosten ohne unerwartete Überraschungen.
                </p>
              </div>
              
              <div className="grid lg:grid-cols-2 gap-12">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl transform rotate-1"></div>
                  <div className="relative bg-white border border-green-200/50 rounded-2xl p-8">
                    <div className="flex items-center mb-6">
                      <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mr-4">
                        <span className="text-2xl">✓</span>
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900">Garantiert</h3>
                    </div>
                    <div className="space-y-4">
                      <div className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-green-500 rounded-full flex-shrink-0"></div>
                        <p className="text-gray-700">Festpreis bei Bestellung</p>
                      </div>
                      <div className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-green-500 rounded-full flex-shrink-0"></div>
                        <p className="text-gray-700">Keine nachträglichen Kosten</p>
                      </div>
                      <div className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-green-500 rounded-full flex-shrink-0"></div>
                        <p className="text-gray-700">Transparente Preisgestaltung</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-red-50 to-rose-50 rounded-2xl transform -rotate-1"></div>
                  <div className="relative bg-white border border-red-200/50 rounded-2xl p-8">
                    <div className="flex items-center mb-6">
                      <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center mr-4">
                        <span className="text-2xl">📞</span>
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900">Service</h3>
                    </div>
                    <div className="space-y-4">
                      <div className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-red-500 rounded-full flex-shrink-0"></div>
                        <p className="text-gray-700">Kostenlose Beratung</p>
                      </div>
                      <div className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-red-500 rounded-full flex-shrink-0"></div>
                        <p className="text-gray-700">Individuelle Angebote</p>
                      </div>
                      <div className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-red-500 rounded-full flex-shrink-0"></div>
                        <p className="text-gray-700">Persönliche Betreuung</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </PageSection>

      <Footer />
    </div>
  );
};

export default Preise;
