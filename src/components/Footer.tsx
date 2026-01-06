
import { Mail, MapPin, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="relative bg-gradient-to-br from-[#ef1c23] via-[#d41a1f] to-[#ef1c23]">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.08),transparent_50%)]"></div>
      
      <div className="relative">
        {/* Main Footer Content */}
        <div className="container mx-auto px-4 py-20">
          <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
            {/* Company Info */}
            <div className="space-y-6">
              <div>
                <img 
                  src="/lovable-uploads/koelner-kraftstoff-logo.png" 
                  alt="Kölner Kraftstoff" 
                  className="h-24 w-auto mb-4"
                />
                <p className="text-gray-300 text-sm leading-relaxed">
                  Ihr vertrauensvoller Partner für hochwertiges Heizöl. 
                  Deutschlandweite Premium-Lieferung ab 70 Cent pro Liter.
                </p>
              </div>
            </div>

            {/* Contact Info */}
            <div className="space-y-6">
              <h4 className="text-xl font-bold text-white relative">
                Kontakt
                <div className="absolute -bottom-2 left-0 w-12 h-1 bg-white rounded-full"></div>
              </h4>
              <div className="space-y-4">
                <div className="group flex items-start space-x-3">
                  <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center mt-1 group-hover:bg-white/30 transition-colors duration-300">
                    <MapPin className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-gray-200 text-sm">Dieselstr. 10, 50996 Köln</span>
                </div>
                
                <div className="group flex items-center space-x-3">
                  <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center group-hover:bg-white/30 transition-colors duration-300">
                    <Phone className="w-4 h-4 text-white" />
                  </div>
              <a 
                href="tel:+4922129291090" 
                className="text-gray-200 text-sm hover:text-white transition-colors duration-300"
              >
                0221 29291090
              </a>
                </div>
                
                <div className="group flex items-center space-x-3">
                  <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center group-hover:bg-white/30 transition-colors duration-300">
                    <Mail className="w-4 h-4 text-white" />
                  </div>
                  <a 
                    href="mailto:info@koelnerkraftstoff-heizoel.de" 
                    className="text-gray-200 text-sm hover:text-white transition-colors duration-300"
                  >
                    info@koelnerkraftstoff-heizoel.de
                  </a>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div className="space-y-6">
              <h4 className="text-xl font-bold text-white relative">
                Service
                <div className="absolute -bottom-2 left-0 w-12 h-1 bg-white rounded-full"></div>
              </h4>
              <ul className="space-y-4">
                <li>
                  <a 
                    href="#preisrechner" 
                    className="text-gray-300 hover:text-white transition-all duration-300 flex items-center space-x-2 group"
                  >
                    <span className="w-2 h-2 bg-white/50 rounded-full group-hover:bg-white transition-colors duration-300"></span>
                    <span>Preisrechner</span>
                  </a>
                </li>
                <li>
                  <a 
                    href="#kontakt" 
                    className="text-gray-300 hover:text-white transition-all duration-300 flex items-center space-x-2 group"
                  >
                    <span className="w-2 h-2 bg-white/50 rounded-full group-hover:bg-white transition-colors duration-300"></span>
                    <span>Kontakt</span>
                  </a>
                </li>
                <li>
                  <Link 
                    to="/preise" 
                    className="text-gray-300 hover:text-white transition-all duration-300 flex items-center space-x-2 group"
                  >
                    <span className="w-2 h-2 bg-white/50 rounded-full group-hover:bg-white transition-colors duration-300"></span>
                    <span>Preise</span>
                  </Link>
                </li>
                <li>
                  <Link 
                    to="/lieferservice" 
                    className="text-gray-300 hover:text-white transition-all duration-300 flex items-center space-x-2 group"
                  >
                    <span className="w-2 h-2 bg-white/50 rounded-full group-hover:bg-white transition-colors duration-300"></span>
                    <span>Lieferbedingungen</span>
                  </Link>
                </li>
              </ul>
            </div>

            {/* Legal */}
            <div className="space-y-6">
              <h4 className="text-xl font-bold text-white relative">
                Rechtliches
                <div className="absolute -bottom-2 left-0 w-12 h-1 bg-white rounded-full"></div>
              </h4>
              <ul className="space-y-4">
                <li>
                  <Link 
                    to="/impressum" 
                    className="text-gray-300 hover:text-white transition-all duration-300 flex items-center space-x-2 group"
                  >
                    <span className="w-2 h-2 bg-white/50 rounded-full group-hover:bg-white transition-colors duration-300"></span>
                    <span>Impressum</span>
                  </Link>
                </li>
                <li>
                  <Link 
                    to="/datenschutz" 
                    className="text-gray-300 hover:text-white transition-all duration-300 flex items-center space-x-2 group"
                  >
                    <span className="w-2 h-2 bg-white/50 rounded-full group-hover:bg-white transition-colors duration-300"></span>
                    <span>Datenschutz</span>
                  </Link>
                </li>
                <li>
                  <Link 
                    to="/agb" 
                    className="text-gray-300 hover:text-white transition-all duration-300 flex items-center space-x-2 group"
                  >
                    <span className="w-2 h-2 bg-white/50 rounded-full group-hover:bg-white transition-colors duration-300"></span>
                    <span>AGB</span>
                  </Link>
                </li>
                <li>
                  <Link 
                    to="/widerrufsrecht" 
                    className="text-gray-300 hover:text-white transition-all duration-300 flex items-center space-x-2 group"
                  >
                    <span className="w-2 h-2 bg-white/50 rounded-full group-hover:bg-white transition-colors duration-300"></span>
                    <span>Widerrufsrecht</span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 bg-[#c01418]/50 backdrop-blur-sm">
          <div className="container mx-auto px-4 py-8">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 md:gap-6">
              <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-6 text-white/90 text-sm">
                <span className="text-center sm:text-left">© 2025 Kölner Kraftstoff. Alle Rechte vorbehalten.</span>
                <span className="text-center sm:text-left">Amtsgericht Köln HRA 27679 | USt-ID: DE302487506</span>
              </div>
              <div className="text-sm text-white/90 bg-white/15 px-4 py-2 rounded-full border border-white/30 text-center md:whitespace-nowrap mx-auto md:mx-0">
                Made with ❤️ in Germany
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
