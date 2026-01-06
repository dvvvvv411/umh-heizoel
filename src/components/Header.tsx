
import { Calculator, Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: 'Startseite', href: '/' },
    { name: 'Heizöl-Sorten', href: '/heizoelsorten' },
    { name: 'Lieferservice', href: '/lieferservice' },
    { name: 'Preise & Konditionen', href: '/preise' },
    { name: 'Über uns & Service', href: '/ueber-uns' },
  ];

  const isActive = (href: string) => location.pathname === href;

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Auto-scroll to top on route change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [location.pathname]);

  const handleNavClick = () => {
    setIsMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToPriceCalculator = () => {
    if (location.pathname === '/') {
      // If already on home page, scroll to calculator
      const element = document.getElementById('price-calculator');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      // If on different page, navigate to home then scroll
      window.location.href = '/#price-calculator';
    }
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-[#ef1c23] backdrop-blur-xl border-b border-red-800/30 shadow-lg shadow-black/10' 
        : 'bg-[#ef1c23]/95 backdrop-blur-md border-b border-red-800/20'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-24">
          {/* Logo */}
          <div className="flex items-center lg:flex-none flex-1 lg:flex-initial justify-center lg:justify-start">
            <Link to="/" onClick={handleNavClick} className="group">
              <img 
                src="/lovable-uploads/koelner-kraftstoff-logo.png" 
                alt="UMH Heizöl" 
                className="h-20 w-auto transition-transform duration-300 group-hover:scale-105"
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                onClick={handleNavClick}
                className={`relative px-4 py-2 text-sm font-medium rounded-lg transition-all duration-300 group ${
                  isActive(item.href)
                    ? 'text-white bg-white/20'
                    : 'text-white/90 hover:text-white hover:bg-white/10'
                }`}
              >
                {item.name}
                <span className={`absolute bottom-0 left-1/2 transform -translate-x-1/2 h-0.5 bg-white transition-all duration-300 ${
                  isActive(item.href) ? 'w-8' : 'w-0 group-hover:w-8'
                }`} />
              </Link>
            ))}
          </nav>

          {/* Contact Button & Mobile Menu */}
          <div className="flex items-center space-x-4">
            <button 
              onClick={scrollToPriceCalculator}
              className="hidden sm:flex items-center space-x-2 bg-white text-[#ef1c23] px-6 py-2.5 rounded-xl font-medium shadow-lg shadow-black/10 hover:shadow-xl hover:shadow-black/20 hover:bg-gray-50 transition-all duration-300 hover:scale-105"
            >
              <Calculator className="w-4 h-4" />
              <span>zum Preisrechner</span>
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2.5 rounded-xl hover:bg-white/10 transition-all duration-300 absolute right-4"
            >
              <div className="relative w-5 h-5">
                <Menu className={`w-5 h-5 text-white absolute transition-all duration-300 ${isMenuOpen ? 'opacity-0 rotate-180' : 'opacity-100 rotate-0'}`} />
                <X className={`w-5 h-5 text-white absolute transition-all duration-300 ${isMenuOpen ? 'opacity-100 rotate-0' : 'opacity-0 -rotate-180'}`} />
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className={`lg:hidden transition-all duration-300 overflow-hidden ${
          isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}>
          <div className="py-4 border-t border-red-800/30">
            <nav className="flex flex-col space-y-1">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  onClick={handleNavClick}
                  className={`px-4 py-3 rounded-xl text-sm font-medium transition-all duration-300 ${
                    isActive(item.href)
                      ? 'bg-white/20 text-white shadow-lg shadow-black/10'
                      : 'text-white/90 hover:bg-white/10 hover:text-white'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              <button 
                onClick={scrollToPriceCalculator}
                className="sm:hidden mt-4 flex items-center justify-center space-x-2 bg-white text-[#ef1c23] px-4 py-3 rounded-xl font-medium shadow-lg shadow-black/10"
              >
                <Calculator className="w-4 h-4" />
                <span>zum Preisrechner</span>
              </button>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
