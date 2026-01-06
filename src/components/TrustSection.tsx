
import { Star, Quote, Award, Clock, Truck, Shield } from 'lucide-react';

const TrustSection = () => {
  const testimonials = [
    {
      name: "Maria Schmidt",
      location: "München",
      rating: 5,
      text: "Fantastischer Service! Das Heizöl wurde pünktlich geliefert und der Preis war unschlagbar. Werden definitiv wieder bestellen.",
      date: "vor 2 Wochen",
      initial: "MS"
    },
    {
      name: "Thomas Weber",
      location: "Hamburg",
      rating: 5,
      text: "Sehr professionelle Abwicklung und günstige Preise. Die Bestellung war einfach und die Lieferung war kostenlos ab 2000L.",
      date: "vor 1 Monat",
      initial: "TW"
    },
    {
      name: "Andrea Müller",
      location: "Berlin",
      rating: 5,
      text: "Seit 3 Jahren unser Heizöl-Lieferant. Immer zuverlässig, pünktlich und zu fairen Preisen. Absolute Empfehlung!",
      date: "vor 3 Wochen",
      initial: "AM"
    }
  ];

  const trustIndicators = [
    {
      icon: Star,
      value: "4.9/5",
      label: "Kundenbewertung",
      sublabel: "Google & Trustpilot",
      color: "from-yellow-400 to-orange-500"
    },
    {
      icon: Award,
      value: "99%",
      label: "Weiterempfehlung",
      sublabel: "von unseren Kunden",
      color: "from-emerald-400 to-green-500"
    },
    {
      icon: Clock,
      value: "4-7",
      label: "Werktage",
      sublabel: "deutschlandweit",
      color: "from-red-400 to-rose-500"
    },
    {
      icon: Shield,
      value: "100%",
      label: "Sicherheit",
      sublabel: "geprüfte Qualität",
      color: "from-purple-400 to-violet-500"
    }
  ];

  const securityBadges = [
    { name: "SSL", description: "Verschlüsselte Übertragung" },
    { name: "TÜV", description: "Geprüfte Sicherheit" },
    { name: "DIN EN", description: "Qualitätsstandard" },
    { name: "ISO 9001", description: "Qualitätsmanagement" }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-white to-red-50/30 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(239,28,35,0.08),transparent)]"></div>
      <div className="absolute top-20 right-20 w-96 h-96 bg-gradient-to-br from-primary/5 to-transparent rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-20 animate-fade-in">
          <div className="inline-block bg-gradient-to-r from-primary/10 to-red-600/10 text-primary px-6 py-2 rounded-full text-sm font-semibold mb-6">
            Kundenzufriedenheit
          </div>
          <h2 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Was unsere <span className="gradient-text">Kunden sagen</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            UMH Heizöl beliefert über 100.000 zufriedene Kunden in ganz Deutschland. 
            Wir liefern Premium-Heizöl bundesweit – lesen Sie, was unsere Kunden sagen.
          </p>
        </div>

        {/* Trust Indicators */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 mb-20">
          {trustIndicators.map((indicator, index) => {
            const IconComponent = indicator.icon;
            return (
              <div 
                key={index}
                className="group bg-white/80 backdrop-blur-md border border-red-200/50 rounded-2xl p-4 sm:p-6 text-center shadow-md hover:shadow-lg hover:-translate-y-1 hover:bg-white/90 transition-all duration-500 animate-fade-in overflow-hidden"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={`w-12 h-12 bg-gradient-to-br ${indicator.color} rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <IconComponent className="w-6 h-6 text-white" />
                </div>
                <div className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">{indicator.value}</div>
                <div className="text-sm sm:text-base text-gray-700 font-medium mb-1 break-words">{indicator.label}</div>
                <div className="text-xs sm:text-sm text-gray-500 break-words">{indicator.sublabel}</div>
              </div>
            );
          })}
        </div>

        {/* Testimonials */}
        <div className="grid lg:grid-cols-3 gap-8 mb-20">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="group bg-white/85 backdrop-blur-md border border-red-200/50 rounded-3xl p-8 shadow-md hover:shadow-xl hover:shadow-primary/5 hover:-translate-y-2 hover:bg-white/93 transition-all duration-700 animate-fade-in"
              style={{ animationDelay: `${0.4 + index * 0.15}s` }}
            >
              {/* Quote Background */}
              <div className="relative">
                <div className="absolute -top-2 -left-2 w-8 h-8 bg-gradient-to-br from-primary/20 to-red-600/20 rounded-full flex items-center justify-center">
                  <Quote className="w-4 h-4 text-primary" />
                </div>
                
                {/* Rating */}
                <div className="flex items-center space-x-1 mb-6 pt-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>

                {/* Review Text */}
                <p className="text-gray-700 mb-8 leading-relaxed text-lg">
                  "{testimonial.text}"
                </p>

                {/* Customer Info */}
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary/20 to-red-600/20 rounded-full flex items-center justify-center font-semibold text-primary">
                    {testimonial.initial}
                  </div>
                  <div className="flex-1">
                    <div className="font-semibold text-gray-900">{testimonial.name}</div>
                    <div className="text-sm text-gray-500">{testimonial.location}</div>
                  </div>
                  <div className="text-sm text-gray-400">
                    {testimonial.date}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Security & Certifications */}
        <div className="bg-gradient-to-r from-red-50/30 to-white/50 rounded-3xl border border-red-200/30 p-8 md:p-12 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">
            Sicherheit & Qualitätszertifikate
          </h3>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Vertrauen Sie auf unsere geprüfte Sicherheit und höchste Qualitätsstandards
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
            {securityBadges.map((badge, index) => (
              <div 
                key={index}
                className="group p-3 sm:p-4 rounded-2xl border border-red-200/50 bg-white/80 backdrop-blur-sm shadow-sm hover:bg-white/90 hover:shadow-md transition-all duration-300 animate-fade-in overflow-hidden"
                style={{ animationDelay: `${0.8 + index * 0.1}s` }}
              >
                <div className="text-lg sm:text-xl font-bold text-gray-800 mb-2 group-hover:text-primary transition-colors duration-300 break-words">
                  {badge.name}
                </div>
                <div className="text-xs sm:text-sm text-gray-600 break-words">
                  {badge.description}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustSection;
