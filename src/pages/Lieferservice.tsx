
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PageSection from '@/components/PageSection';
import InfoCard from '@/components/InfoCard';
import SEO from '@/components/SEO';
import { Truck, Shield, Clock, Calculator, CheckCircle, Star, Gauge, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Lieferservice = () => {
  const navigateToPriceCalculator = () => {
    window.location.href = '/#price-calculator';
  };

  return (
    <div className="min-h-screen">
      <SEO
        title="Deutschlandweite Heizöl-Lieferung | 4-7 Werktage | UMH Heizöl"
        description="Zuverlässige Heizöl-Lieferung deutschlandweit in 4-7 Werktagen. TÜV-geprüfte Tankfahrzeuge, kostenlose Lieferung ab 2.000L. Jetzt bestellen!"
        keywords="Heizöl Lieferung Deutschland, Tankfahrzeuge, TÜV-geprüft, kostenlose Lieferung, Heizöl Transport"
        canonicalUrl="https://umh-heizoel.de/lieferservice"
      />
      <Header />
      
      {/* Hero Section */}
      <PageSection className="pt-32 pb-20" background="primary">
        <div className="max-w-6xl mx-auto">
          <div className="text-center space-y-8">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 border border-white/20 text-sm font-medium text-gray-700 mb-4">
              <Truck className="w-4 h-4 mr-2 text-primary" />
              Deutschlandweite Premium-Lieferung
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight">
              Deutschlandweite <span className="gradient-text">Heizöl-Lieferung</span>
            </h1>
            
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Zuverlässige Lieferung in 4-7 Werktagen deutschlandweit. 
              Professionelle Tankfahrzeuge, geschulte Fahrer und höchste Sicherheitsstandards.
            </p>
            
            <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto pt-8">
              <div className="group">
            <div className="relative bg-white/80 backdrop-blur-md border border-red-200/50 rounded-2xl p-6 shadow-md hover:shadow-xl hover:bg-white/90 transition-all duration-300">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="relative flex flex-col items-center space-y-3">
                    <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center">
                      <Truck className="w-7 h-7 text-primary" />
                    </div>
                    <div className="text-center">
                      <p className="text-2xl font-bold text-gray-900">4-7 Werktage</p>
                      <p className="text-sm text-gray-600">Deutschlandweit</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="group">
            <div className="relative bg-white/80 backdrop-blur-md border border-red-200/50 rounded-2xl p-6 shadow-md hover:shadow-xl hover:bg-white/90 transition-all duration-300">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="relative flex flex-col items-center space-y-3">
                    <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center">
                      <Shield className="w-7 h-7 text-primary" />
                    </div>
                    <div className="text-center">
                      <p className="text-2xl font-bold text-gray-900">100% Sicher</p>
                      <p className="text-sm text-gray-600">TÜV-Zertifiziert</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="group">
                <div className="relative bg-white/80 backdrop-blur-md border border-red-200/50 rounded-2xl p-6 shadow-md hover:shadow-xl hover:bg-white/90 transition-all duration-300">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="relative flex flex-col items-center space-y-3">
                    <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center">
                      <CheckCircle className="w-7 h-7 text-primary" />
                    </div>
                    <div className="text-center">
                      <p className="text-2xl font-bold text-gray-900">Kostenlos</p>
                      <p className="text-sm text-gray-600">ab 2.000L</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </PageSection>

      {/* Warum Blueline? */}
      <PageSection className="py-24" background="warm">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Warum UMH Heizöl?</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Über 100.000 zufriedene Kunden vertrauen auf unsere Expertise und Premium-Service
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8">
            <div className="group">
            <div className="bg-white/80 backdrop-blur-md border border-red-200/50 rounded-2xl p-8 shadow-md hover:shadow-lg hover:bg-white/90 transition-all duration-300 h-full">
                <div className="relative mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-yellow-100 to-orange-100 rounded-2xl flex items-center justify-center mx-auto">
                    <Star className="w-8 h-8 text-yellow-600" />
                  </div>
                </div>
                <div className="text-center">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Kundenvertrauen</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Kunden in ganz Deutschland vertrauen auf unsere Zuverlässigkeit und Premium-Expertise.
                  </p>
                </div>
              </div>
            </div>

            <div className="group">
            <div className="bg-white/80 backdrop-blur-md border border-red-200/50 rounded-2xl p-8 shadow-md hover:shadow-lg hover:bg-white/90 transition-all duration-300 h-full">
                <div className="relative mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-100 to-emerald-100 rounded-2xl flex items-center justify-center mx-auto">
                    <Gauge className="w-8 h-8 text-green-600" />
                  </div>
                </div>
                <div className="text-center">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Beste Preise</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Heizöl ab 70 Cent pro Liter - bis zu 30% günstiger als lokale Anbieter mit Premium-Qualität.
                  </p>
                </div>
              </div>
            </div>

            <div className="group">
            <div className="bg-white/80 backdrop-blur-md border border-red-200/50 rounded-2xl p-8 shadow-md hover:shadow-lg hover:bg-white/90 transition-all duration-300 h-full">
                <div className="relative mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-red-100 to-rose-100 rounded-2xl flex items-center justify-center mx-auto">
                    <Users className="w-8 h-8 text-red-600" />
                  </div>
                </div>
                <div className="text-center">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">100.000+ Kunden</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Über 100.000 zufriedene Kunden vertrauen bereits auf unseren Premium-Service.
                  </p>
                </div>
              </div>
            </div>

            <div className="group">
              <div className="bg-white/80 backdrop-blur-md border border-red-200/50 rounded-2xl p-8 shadow-md hover:shadow-lg hover:bg-white/90 transition-all duration-300 h-full">
                <div className="relative mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-100 to-violet-100 rounded-2xl flex items-center justify-center mx-auto">
                    <Shield className="w-8 h-8 text-purple-600" />
                  </div>
                </div>
                <div className="text-center">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Sicherheit garantiert</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Alle Tankfahrzeuge sind TÜV-geprüft und entsprechen neuesten Sicherheitsstandards.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </PageSection>

      {/* Tankfahrzeuge & Technik */}
      <PageSection background="gray" className="py-24">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Moderne Tankfahrzeuge & Technik</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Unsere hochmoderne Fahrzeugflotte garantiert sichere und umweltfreundliche Lieferung
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Hochmoderne Flotte</h3>
                <div className="space-y-6">
                  <div className="group flex items-start space-x-4 p-4 rounded-xl hover:bg-white/50 transition-all duration-300">
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <p className="font-bold text-gray-900 text-lg mb-1">TÜV-geprüfte Tankfahrzeuge</p>
                      <p className="text-gray-600">Regelmäßige Wartung und Sicherheitsprüfungen garantieren höchste Standards</p>
                    </div>
                  </div>
                  
                  <div className="group flex items-start space-x-4 p-4 rounded-xl hover:bg-white/50 transition-all duration-300">
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <p className="font-bold text-gray-900 text-lg mb-1">GPS-Tracking in Echtzeit</p>
                      <p className="text-gray-600">Transparente Verfolgung Ihrer Lieferung jederzeit möglich</p>
                    </div>
                  </div>
                  
                  <div className="group flex items-start space-x-4 p-4 rounded-xl hover:bg-white/50 transition-all duration-300">
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <p className="font-bold text-gray-900 text-lg mb-1">Umweltfreundliche Motoren</p>
                      <p className="text-gray-600">Euro 6 Standard für minimale Emissionen und Umweltschutz</p>
                    </div>
                  </div>
                  
                  <div className="group flex items-start space-x-4 p-4 rounded-xl hover:bg-white/50 transition-all duration-300">
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <p className="font-bold text-gray-900 text-lg mb-1">Geschulte Fahrer</p>
                      <p className="text-gray-600">ADR-zertifiziert für professionellen Gefahrguttransport</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-red-600/10 rounded-3xl transform rotate-2"></div>
              <div className="relative bg-white/85 backdrop-blur-md border border-red-200/50 rounded-3xl p-10 shadow-lg hover:shadow-xl hover:bg-white/93 transition-all duration-300">
                <div className="text-center mb-8">
                  <div className="w-20 h-20 bg-gradient-to-br from-primary/10 to-primary/5 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Truck className="w-10 h-10 text-primary" />
                  </div>
                  <h4 className="text-2xl font-bold text-gray-900">Tankvolumen-Optionen</h4>
                  <p className="text-gray-600 mt-2">Für jeden Bedarf das richtige Fahrzeug</p>
                </div>
                
                <div className="space-y-4">
                  <div className="flex justify-between items-center p-4 bg-gray-50 rounded-xl">
                    <div>
                      <span className="font-semibold text-gray-900">Kleinfahrzeuge</span>
                      <p className="text-sm text-gray-600">Für enge Zufahrten</p>
                    </div>
                    <span className="text-xl font-bold text-primary">bis 3.000L</span>
                  </div>
                  
                  <div className="flex justify-between items-center p-4 bg-primary/5 rounded-xl border border-primary/20">
                    <div>
                      <span className="font-semibold text-gray-900">Standardfahrzeuge</span>
                      <p className="text-sm text-gray-600">Meist verwendete Größe</p>
                    </div>
                    <span className="text-xl font-bold text-primary">bis 10.000L</span>
                  </div>
                  
                  <div className="flex justify-between items-center p-4 bg-gray-50 rounded-xl">
                    <div>
                      <span className="font-semibold text-gray-900">Großfahrzeuge</span>
                      <p className="text-sm text-gray-600">Für große Tanks</p>
                    </div>
                    <span className="text-xl font-bold text-primary">bis 25.000L</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </PageSection>

      {/* Service & Sicherheit */}
      <PageSection className="py-24" background="warm">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Service & Sicherheit</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Höchste Standards bei Sicherheit, Pünktlichkeit und professionellem Service
            </p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="group">
            <div className="relative bg-white/80 backdrop-blur-md border border-red-200/50 rounded-2xl p-8 shadow-md hover:shadow-lg hover:bg-white/90 transition-all duration-300 h-full">
                <div className="absolute top-6 right-6">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                </div>
                
                <div className="mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-100 to-emerald-100 rounded-2xl flex items-center justify-center mb-4">
                    <Shield className="w-8 h-8 text-green-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Sicherheitsgarantie</h3>
                  <p className="text-gray-600 text-sm mb-4">Umfassender Schutz für jeden Transport</p>
                </div>
                
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full flex-shrink-0"></div>
                    <p className="text-gray-700">Vollversicherung aller Transporte</p>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full flex-shrink-0"></div>
                    <p className="text-gray-700">ADR-zertifizierte Fahrer</p>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full flex-shrink-0"></div>
                    <p className="text-gray-700">Notfall-Hotline 24/7</p>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full flex-shrink-0"></div>
                    <p className="text-gray-700">Umweltschutz-Zertifikat</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="group">
            <div className="relative bg-white/80 backdrop-blur-md border border-red-200/50 rounded-2xl p-8 shadow-md hover:shadow-lg hover:bg-white/90 transition-all duration-300 h-full">
                <div className="absolute top-6 right-6">
                  <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
                </div>
                
                <div className="mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-red-100 to-rose-100 rounded-2xl flex items-center justify-center mb-4">
                    <Clock className="w-8 h-8 text-red-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Pünktliche Lieferung</h3>
                  <p className="text-gray-600 text-sm mb-4">Zuverlässig und termingerecht</p>
                </div>
                
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-red-500 rounded-full flex-shrink-0"></div>
                    <p className="text-gray-700">SMS-Benachrichtigung</p>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-red-500 rounded-full flex-shrink-0"></div>
                    <p className="text-gray-700">2-Stunden-Zeitfenster</p>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-red-500 rounded-full flex-shrink-0"></div>
                    <p className="text-gray-700">Lieferung Mo-Sa 7-17 Uhr</p>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-red-500 rounded-full flex-shrink-0"></div>
                    <p className="text-gray-700">Express-Service verfügbar</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="group">
              <div className="relative bg-white/80 border border-red-200/50 rounded-2xl p-8 shadow-md hover:shadow-lg hover:bg-white/90 transition-all duration-300 h-full">
                <div className="absolute top-6 right-6">
                  <div className="w-3 h-3 bg-purple-500 rounded-full animate-pulse"></div>
                </div>
                
                <div className="mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-100 to-violet-100 rounded-2xl flex items-center justify-center mb-4">
                    <Truck className="w-8 h-8 text-purple-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Professioneller Service</h3>
                  <p className="text-gray-600 text-sm mb-4">Rundum-Betreuung vor Ort</p>
                </div>
                
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-purple-500 rounded-full flex-shrink-0"></div>
                    <p className="text-gray-700">Tankprüfung inklusive</p>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-purple-500 rounded-full flex-shrink-0"></div>
                    <p className="text-gray-700">Saubere Befüllung</p>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-purple-500 rounded-full flex-shrink-0"></div>
                    <p className="text-gray-700">Digitale Rechnung</p>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-purple-500 rounded-full flex-shrink-0"></div>
                    <p className="text-gray-700">Kundendienst vor Ort</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </PageSection>

      {/* Optimized CTA */}
      <PageSection background="primary" className="py-24">
        <div className="max-w-5xl mx-auto text-center">
          <div className="mb-12">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Jetzt Heizöl bestellen und <span className="gradient-text">sparen!</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Deutschlandweite Lieferung in 4-7 Werktagen. Kostenlose Lieferung ab 2.000 Liter.
              Berechnen Sie jetzt online Ihren individuellen Preis.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
            <button onClick={navigateToPriceCalculator} className="group">
              <div className="relative">
                <div className="absolute inset-0 bg-primary rounded-xl blur opacity-25 group-hover:opacity-40 transition-opacity duration-300"></div>
                <Button size="lg" className="relative bg-primary hover:bg-primary/90 text-white text-lg px-10 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                  <Calculator className="w-5 h-5 mr-3" />
                  zum Preisrechner
                </Button>
              </div>
            </button>
            
            <Link to="/preise" className="group">
              <Button variant="outline" size="lg" className="text-lg px-10 py-4 rounded-xl border-2 border-white/30 bg-white/10 text-gray-900 hover:bg-white hover:text-primary backdrop-blur-sm transition-all duration-300">
                Preise anzeigen
              </Button>
            </Link>
          </div>
          
          <div className="inline-flex items-center justify-center space-x-3 px-6 py-3 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
            <div className="flex space-x-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <span className="text-gray-700 font-medium">Über 100.000 zufriedene Kunden deutschlandweit</span>
          </div>
        </div>
      </PageSection>

      <Footer />
    </div>
  );
};

export default Lieferservice;
