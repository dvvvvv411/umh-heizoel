
import { Euro, Truck, Shield, TrendingDown, MapPin, Award } from 'lucide-react';

const USPSection = () => {
  const usps = [
    {
      icon: Euro,
      title: "Ab 70 Cent pro Liter",
      description: "Marktführende Preise für Standard- und Premium-Heizöl durch optimierte Beschaffung und direkte Raffineriekooperationen.",
      highlight: "Bis zu 30% günstiger",
      accent: "from-emerald-500 to-green-600"
    },
    {
      icon: Truck,
      title: "Kostenlose Lieferung ab 2.000L",
      description: "Von Köln aus liefern wir deutschlandweit kostenfrei ab 2.000L. Zuverlässige Premium-Anlieferung zu Ihrem Wunschtermin – egal wo in Deutschland Sie sind.",
      highlight: "Deutschlandweit",
      accent: "from-red-500 to-rose-600"
    },
    {
      icon: Shield,
      title: "Verlässlicher Service",
      description: "Pünktliche Lieferung, geprüfte Partner und transparente Prozesse – für maximale Sicherheit.",
      highlight: "100.000+ Kunden",
      accent: "from-purple-500 to-violet-600"
    }
  ];

  const stats = [
    { icon: TrendingDown, value: "100.000+", label: "Zufriedene Kunden", color: "text-emerald-600" },
    { icon: MapPin, value: "50M+", label: "Liter geliefert", color: "text-red-600" },
    { icon: Award, value: "24/7", label: "Bestellung", color: "text-purple-600" },
    { icon: Shield, value: "99%", label: "Kundenzufriedenheit", color: "text-orange-600" }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-red-50/30 to-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(239,28,35,0.06),transparent)]"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-20 animate-fade-in">
          <div className="inline-block bg-primary/10 text-primary px-6 py-2 rounded-full text-sm font-semibold mb-6">
            Premium Heizöl Service
          </div>
          <h2 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Warum <span className="gradient-text">Kölner Kraftstoff</span>?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Kölner Kraftstoff – Premium Heizöl aus Köln für ganz Deutschland. Entdecken Sie unsere überzeugenden Vorteile und verlässlichen Service.
          </p>
        </div>

        {/* Main USPs */}
        <div className="grid lg:grid-cols-3 gap-8 mb-20">
          {usps.map((usp, index) => {
            const IconComponent = usp.icon;
            return (
              <div 
                key={index}
                className="group relative bg-white/80 backdrop-blur-md border border-red-200/50 rounded-3xl p-8 shadow-md hover:shadow-2xl hover:shadow-primary/10 hover:bg-white/90 hover:backdrop-blur-lg transition-all duration-700 hover:-translate-y-2 animate-fade-in"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                {/* Background Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${usp.accent} opacity-0 group-hover:opacity-5 rounded-3xl transition-opacity duration-700`}></div>
                
                {/* Content */}
                <div className="relative z-10">
                  {/* Icon */}
                  <div className={`w-16 h-16 bg-gradient-to-br ${usp.accent} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500`}>
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>

                  {/* Highlight Badge */}
                  <div className="inline-block bg-gray-100 text-gray-700 px-4 py-2 rounded-full text-sm font-semibold mb-4 group-hover:bg-primary/10 group-hover:text-primary transition-colors duration-300">
                    {usp.highlight}
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-gray-800">
                    {usp.title}
                  </h3>
                  
                  {/* Description */}
                  <p className="text-gray-600 leading-relaxed">
                    {usp.description}
                  </p>
                </div>

                {/* Decorative Element */}
                <div className="absolute bottom-0 left-8 right-8 h-1 bg-gradient-to-r from-transparent via-gray-200 to-transparent group-hover:via-primary/30 transition-colors duration-500"></div>
              </div>
            );
          })}
        </div>

        {/* Stats Section */}
        <div className="bg-white/85 backdrop-blur-md rounded-3xl border border-red-200/50 p-8 md:p-12 shadow-md">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Vertrauen durch Zahlen</h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Diese Kennzahlen sprechen für sich und zeigen unser Engagement für Qualität und Kundenzufriedenheit.
            </p>
          </div>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <div key={index} className="text-center group animate-fade-in" style={{ animationDelay: `${0.6 + index * 0.1}s` }}>
                  <div className="w-12 h-12 bg-white/70 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-white/90 transition-colors duration-300">
                    <IconComponent className={`w-6 h-6 ${stat.color}`} />
                  </div>
                  <div className="text-4xl font-bold text-gray-900 mb-2 group-hover:scale-110 transition-transform duration-300">
                    {stat.value}
                  </div>
                  <div className="text-gray-600 font-medium">
                    {stat.label}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default USPSection;
