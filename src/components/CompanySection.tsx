
import { MapPin, Mail, Clock, Building2, Award, Shield, CheckCircle } from 'lucide-react';

const CompanySection = () => {
  const qualityFeatures = [
    {
      icon: Award,
      title: "DIN EN 10203",
      description: "Zertifizierte Qualität",
      color: "from-emerald-500 to-green-600"
    },
    {
      icon: Shield,
      title: "100% Sicherheit",
      description: "Geprüfte Lieferungen",
      color: "from-red-500 to-rose-600"
    },
    {
      icon: CheckCircle,
      title: "Premium Service",
      description: "Höchste Standards",
      color: "from-purple-500 to-violet-600"
    },
    {
      icon: Building2,
      title: "Deutschlandweit",
      description: "Lieferung zum Wunschtermin",
      color: "from-orange-500 to-red-600"
    }
  ];

  const contactItems = [
    {
      icon: MapPin,
      title: "Unser Standort",
      content: (
        <>
          Augsburger Str. 9a<br />
          85247 Schwabhausen<br />
          Deutschland
        </>
      ),
      color: "from-red-500 to-rose-600"
    },
    {
      icon: Mail,
      title: "E-Mail Kontakt",
      content: (
        <a 
          href="mailto:info@umh-heizoel.de" 
          className="text-primary hover:text-primary/80 transition-colors font-medium hover:underline"
        >
          info@umh-heizoel.de
        </a>
      ),
      color: "from-emerald-500 to-green-600"
    },
    {
      icon: Clock,
      title: "Bestellzeiten",
      content: (
        <>
          Online: 24/7 verfügbar<br />
          Support: Mo-Fr 8:00-18:00
        </>
      ),
      color: "from-purple-500 to-violet-600"
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-red-50/30 to-orange-50/20 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(239,28,35,0.06),transparent)]"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-20 items-start">
          {/* Company Info */}
          <div className="animate-fade-in">
            <div className="inline-block bg-primary/10 text-primary px-6 py-2 rounded-full text-sm font-semibold mb-6">
              Über uns
            </div>
            
            <h2 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-8">
              Über <span className="gradient-text">UMH Heizöl</span>
            </h2>
            
            <div className="space-y-6 text-lg text-gray-600 leading-relaxed mb-12">
              <p>
                UMH Heizöl – Ihr verlässlicher Partner aus Schwabhausen für Premium-Heizöl in ganz Deutschland. 
                Von unserem Standort in Bayern aus beliefern wir Privat- und Geschäftskunden bundesweit mit erstklassigem Heizöl zu unschlagbaren Konditionen.
              </p>
              
              <p>
                Durch direkte Raffineriekooperationen und optimierte Logistik bieten wir Ihnen 
                <span className="font-semibold text-primary"> Premium Heizöl ab 70 Cent pro Liter</span> – deutschlandweit geliefert.
              </p>
              
              <p>
                Unser Versprechen: Transparente Preise, verlässlicher Premium-Service und kostenlose Lieferung ab 2.000 Litern deutschlandweit. 
                <span className="font-semibold text-gray-900">Über 100.000 zufriedene Kunden in ganz Deutschland</span> vertrauen auf UMH Heizöl.
              </p>
            </div>

            {/* Quality Features Grid */}
            <div className="grid grid-cols-2 gap-4">
              {qualityFeatures.map((feature, index) => {
                const IconComponent = feature.icon;
                return (
                  <div 
                    key={index}
                    className="group bg-white/80 backdrop-blur-md border border-red-200/50 rounded-2xl p-6 shadow-md hover:shadow-lg hover:-translate-y-1 hover:bg-white/90 transition-all duration-500 animate-fade-in"
                    style={{ animationDelay: `${0.2 + index * 0.1}s` }}
                  >
                    <div className={`w-12 h-12 bg-gradient-to-br ${feature.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                    <h4 className="font-bold text-gray-900 mb-2">{feature.title}</h4>
                    <p className="text-sm text-gray-600">{feature.description}</p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Contact & Legal Section */}
          <div className="animate-fade-in" style={{ animationDelay: '0.3s' }}>
            {/* Contact Card */}
            <div className="bg-white/85 backdrop-blur-md border border-red-200/50 rounded-3xl p-8 mb-8 shadow-md hover:shadow-xl hover:bg-white/93 transition-all duration-500">
              <div className="text-center mb-8">
                <h3 className="text-3xl font-bold text-gray-900 mb-3">
                  Kontakt & Standort
                </h3>
                <p className="text-gray-600">
                  Ihr direkter Draht zu uns
                </p>
              </div>

              <div className="space-y-6">
                {contactItems.map((item, index) => {
                  const IconComponent = item.icon;
                  return (
                    <div key={index} className="group flex items-start space-x-4 p-4 rounded-2xl hover:bg-gray-50/50 transition-colors duration-300">
                      <div className={`w-12 h-12 bg-gradient-to-br ${item.color} rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                        <IconComponent className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">{item.title}</h4>
                        <div className="text-gray-600 leading-relaxed">
                          {item.content}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Legal Info Card */}
            <div className="bg-gradient-to-br from-gray-50/50 to-white/50 border border-gray-200/50 rounded-3xl p-8">
              <h4 className="text-xl font-bold text-gray-900 mb-6 text-center">Rechtliche Angaben</h4>
              <div className="space-y-3 text-center">
                <div className="p-4 bg-white/50 rounded-2xl">
                  <p className="font-semibold text-gray-900">UMH Heizöl (UMH Handels - GmbH)</p>
                </div>
                <div className="p-4 bg-white/50 rounded-2xl">
                  <p className="text-gray-700">Amtsgericht München HRB 107149</p>
                </div>
                <div className="p-4 bg-white/50 rounded-2xl">
                  <p className="text-gray-700">USt-ID: DE354426258</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompanySection;
