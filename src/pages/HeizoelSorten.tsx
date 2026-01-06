
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PageSection from '@/components/PageSection';
import InfoCard from '@/components/InfoCard';
import SEO from '@/components/SEO';
import { Shield, Droplets, Thermometer } from 'lucide-react';

const HeizoelSorten = () => {
  return (
    <div className="min-h-screen">
      <SEO
        title="Heizöl-Sorten | Standard & Premium Heizöl | UMH Heizöl"
        description="Hochwertige Heizöl-Sorten: Standard Heizöl EL ab 70 Cent/L und Premium Heizöl Plus ab 73 Cent/L. Schwefelarm, DIN-Norm konform. Jetzt bestellen!"
        keywords="Heizöl Sorten, Standard Heizöl EL, Premium Heizöl Plus, schwefelarmes Heizöl, DIN 51603-1"
        canonicalUrl="https://umh-heizoel.de/heizoelsorten"
      />
      <Header />
      
      {/* Hero Section */}
      <PageSection className="pt-32 pb-20" background="primary">
        <div className="max-w-4xl mx-auto">
          <div className="text-center space-y-6">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 border border-white/20 text-sm font-medium text-gray-700 mb-4">
              <Droplets className="w-4 h-4 mr-2 text-primary" />
              Premium Heizöl-Qualitäten
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight">
              Hochwertige <span className="gradient-text">Heizöl-Sorten</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Entdecken Sie unsere Premium-Heizölsorten für optimale Heizleistung und Effizienz. 
              Alle Sorten erfüllen höchste Qualitätsstandards und sind besonders umweltfreundlich.
            </p>
          </div>
        </div>
      </PageSection>

      {/* Heizöl-Sorten Overview */}
      <PageSection className="py-24" background="warm">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Unsere Heizöl-Qualitäten</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Zwei erstklassige Heizölsorten für unterschiedliche Ansprüche und Budgets
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Standard Heizöl EL */}
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-red-600/5 rounded-2xl transform rotate-1 group-hover:rotate-2 transition-transform duration-300"></div>
              <div className="relative bg-white/80 backdrop-blur-md border border-red-200/50 rounded-2xl p-8 shadow-md hover:shadow-xl hover:bg-white/90 transition-all duration-300">
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center">
                      <Droplets className="w-7 h-7 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900">Standard Heizöl EL</h3>
                      <p className="text-sm text-gray-500 font-medium">DIN 51603-1 konform</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-3xl font-bold text-primary">0,70 €</div>
                    <div className="text-sm text-gray-500">pro Liter</div>
                  </div>
                </div>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Bewährte Qualität für zuverlässige Wärme in Ihrem Zuhause. Entspricht DIN 51603-1 Standard.
                </p>
                
                <div className="space-y-3">
                  <div className="flex items-center text-sm text-gray-700">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3 flex-shrink-0"></div>
                    Schwefelarm (max. 1000 mg/kg)
                  </div>
                  <div className="flex items-center text-sm text-gray-700">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3 flex-shrink-0"></div>
                    Optimale Verbrennungsqualität
                  </div>
                  <div className="flex items-center text-sm text-gray-700">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3 flex-shrink-0"></div>
                    Für alle modernen Ölheizungen geeignet
                  </div>
                </div>
              </div>
            </div>

            {/* Premium Heizöl Plus */}
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-red-600/10 rounded-2xl transform -rotate-1 group-hover:-rotate-2 transition-transform duration-300"></div>
              <div className="relative bg-white/85 backdrop-blur-md border-2 border-primary/30 rounded-2xl p-8 shadow-lg hover:shadow-xl hover:bg-white/93 transition-all duration-300">
                <div className="absolute top-4 right-4">
                  <div className="bg-primary text-white text-xs font-bold px-3 py-1 rounded-full">PREMIUM</div>
                </div>
                
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-14 h-14 bg-primary/15 rounded-xl flex items-center justify-center">
                      <Shield className="w-7 h-7 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900">Premium Heizöl Plus</h3>
                      <p className="text-sm text-primary font-medium">Mit Additiven</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-3xl font-bold text-primary">0,73 €</div>
                    <div className="text-sm text-gray-500">pro Liter</div>
                  </div>
                </div>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Höchste Qualität mit Additiven für bessere Performance und längere Haltbarkeit Ihrer Heizungsanlage.
                </p>
                
                <div className="space-y-3">
                  <div className="flex items-center text-sm text-gray-700">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3 flex-shrink-0"></div>
                    Schwefelarm (max. 50 mg/kg)
                  </div>
                  <div className="flex items-center text-sm text-gray-700">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3 flex-shrink-0"></div>
                    Mit Additiven gegen Alterung
                  </div>
                  <div className="flex items-center text-sm text-gray-700">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3 flex-shrink-0"></div>
                    Verbesserte Fließeigenschaften
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </PageSection>

      {/* Qualitätsmerkmale */}
      <PageSection background="gray" className="py-24">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Qualitätsmerkmale</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Unsere Heizölqualität überzeugt durch geprüfte Standards und höchste Reinheit
            </p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="group">
            <div className="bg-white/80 backdrop-blur-md rounded-2xl p-8 shadow-md border border-red-200/50 hover:shadow-lg hover:bg-white/90 transition-all duration-300 h-full">
                <div className="relative mb-6">
                  <div className="w-20 h-20 bg-gradient-to-br from-primary/10 to-primary/5 rounded-2xl flex items-center justify-center mx-auto relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-transparent to-primary/5 group-hover:to-primary/10 transition-all duration-300"></div>
                    <Thermometer className="w-10 h-10 text-primary relative z-10" />
                  </div>
                </div>
                <div className="text-center">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Optimaler Heizwert</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Mindestens 42,6 MJ/kg für maximale Energieausbeute und Effizienz Ihrer Heizung.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="group">
            <div className="bg-white/80 backdrop-blur-md rounded-2xl p-8 shadow-md border border-red-200/50 hover:shadow-lg hover:bg-white/90 transition-all duration-300 h-full">
                <div className="relative mb-6">
                  <div className="w-20 h-20 bg-gradient-to-br from-primary/10 to-primary/5 rounded-2xl flex items-center justify-center mx-auto relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-transparent to-primary/5 group-hover:to-primary/10 transition-all duration-300"></div>
                    <Shield className="w-10 h-10 text-primary relative z-10" />
                  </div>
                </div>
                <div className="text-center">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Geprüfte Reinheit</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Regelmäßige Qualitätskontrollen und Laborprüfungen garantieren höchste Reinheit.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="group">
              <div className="bg-white/80 backdrop-blur-md rounded-2xl p-8 shadow-md border border-red-200/50 hover:shadow-lg hover:bg-white/90 transition-all duration-300 h-full">
                <div className="relative mb-6">
                  <div className="w-20 h-20 bg-gradient-to-br from-primary/10 to-primary/5 rounded-2xl flex items-center justify-center mx-auto relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-transparent to-primary/5 group-hover:to-primary/10 transition-all duration-300"></div>
                    <Droplets className="w-10 h-10 text-primary relative z-10" />
                  </div>
                </div>
                <div className="text-center">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Umweltfreundlich</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Schwefelarme Qualität reduziert Emissionen und schont die Umwelt.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </PageSection>

      {/* Lagerung & Haltbarkeit */}
      <PageSection className="py-24" background="warm">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Lagerung & Haltbarkeit</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Unser Heizöl ist bei sachgerechter Lagerung mehrere Jahre haltbar. 
              Für optimale Qualität empfehlen wir die Beachtung folgender Punkte:
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Empfehlungen */}
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl transform rotate-1"></div>
              <div className="relative bg-white/80 backdrop-blur-md border border-green-200/50 rounded-2xl p-8 shadow-md hover:shadow-lg hover:bg-white/90 transition-all duration-300">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mr-4">
                    <span className="text-2xl">✓</span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">Empfehlungen</h3>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-gray-700">Dunkle, kühle Lagerung</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-gray-700">Regelmäßige Tankwartung</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-gray-700">Schutz vor Kondenswasser</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Vermeiden */}
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl transform -rotate-1"></div>
              <div className="relative bg-white/80 backdrop-blur-md border border-amber-200/50 rounded-2xl p-8 shadow-md hover:shadow-lg hover:bg-white/90 transition-all duration-300">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center mr-4">
                    <span className="text-2xl">⚠️</span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">Vermeiden</h3>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-amber-500 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-gray-700">Direkte Sonneneinstrahlung</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-amber-500 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-gray-700">Temperaturschwankungen</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-amber-500 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-gray-700">Verunreinigungen</p>
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

export default HeizoelSorten;
