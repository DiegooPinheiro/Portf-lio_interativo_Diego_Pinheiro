import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { label: 'HOME', href: '#home' },
    { label: 'SOBRE', href: '#about' },
    { label: 'FORMAÇÃO', href: '#education' },
    { label: 'CONQUISTAS', href: '#achievements' },
    { label: 'PROJETOS', href: '#projects' },
    { label: 'CONTATO', href: '#contact' },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'h-16 glass-effect border-b border-red-600/30'
          : 'h-20 bg-transparent'
      }`}
      style={{
        animation: 'slide-down 0.6s var(--ease-expo-out) forwards',
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
        <div className="flex items-center justify-between h-full">
          {/* Logo */}
          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('#home');
            }}
            className="text-white font-bold text-lg md:text-xl tracking-wider hover:text-red-500 transition-colors duration-200"
            style={{
              fontFamily: 'Montserrat, sans-serif',
              animation: 'fade-in 0.4s var(--ease-elastic) 0.2s forwards',
              opacity: 0,
            }}
          >
            DIEGO<span className="text-red-600">.</span>PM
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {menuItems.map((item, index) => (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(item.href);
                }}
                className="relative text-white text-sm font-medium tracking-wide hover:text-red-500 transition-all duration-200 group"
                style={{
                  animation: `slide-up 0.3s var(--ease-expo-out) ${200 + index * 80}ms forwards`,
                  opacity: 0,
                  transform: 'translateX(-20px)',
                }}
              >
                {item.label}
                <span className="absolute -bottom-1 left-1/2 w-0 h-0.5 bg-red-600 transition-all duration-300 group-hover:w-full group-hover:left-0" />
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white p-2 hover:text-red-500 transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden absolute top-full left-0 right-0 glass-effect border-b border-red-600/30 transition-all duration-300 ${
          isMobileMenuOpen
            ? 'opacity-100 translate-y-0'
            : 'opacity-0 -translate-y-4 pointer-events-none'
        }`}
      >
        <div className="px-4 py-6 space-y-4">
          {menuItems.map((item, index) => (
            <a
              key={item.label}
              href={item.href}
              onClick={(e) => {
                e.preventDefault();
                scrollToSection(item.href);
              }}
              className="block text-white text-lg font-medium hover:text-red-500 transition-colors"
              style={{
                animation: isMobileMenuOpen
                  ? `slide-up 0.3s var(--ease-expo-out) ${index * 100}ms forwards`
                  : 'none',
                opacity: isMobileMenuOpen ? 0 : 1,
              }}
            >
              {item.label}
            </a>
          ))}
        </div>
      </div>

      {/* Border Animation */}
      <div
        className="absolute bottom-0 left-0 h-px bg-gradient-to-r from-transparent via-red-600 to-transparent"
        style={{
          width: '100%',
          animation: 'fade-in 0.8s var(--ease-smooth) 0.6s forwards',
          opacity: 0,
        }}
      />
    </nav>
  );
};

export default Navigation;
