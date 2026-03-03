import { useEffect, useRef, useState } from 'react';
import { Linkedin, Heart } from 'lucide-react';

const Footer = () => {
  const footerRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.5 }
    );

    if (footerRef.current) {
      observer.observe(footerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const currentYear = new Date().getFullYear();

  return (
    <footer
      ref={footerRef}
      className="relative py-12 bg-black overflow-hidden"
    >
      {/* Top Border */}
      <div
        className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-red-600/50 to-transparent"
        style={{
          opacity: isVisible ? 1 : 0,
          animation: isVisible
            ? 'fade-in 0.8s var(--ease-expo-out) forwards'
            : 'none',
        }}
      />

      {/* Border Glow Animation */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-px bg-gradient-to-r from-transparent via-red-600 to-transparent"
        style={{
          opacity: isVisible ? 0.6 : 0,
          animation: isVisible ? 'pulse-glow 4s ease-in-out infinite' : 'none',
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center space-y-6">
          {/* Logo */}
          <div
            style={{
              opacity: isVisible ? 1 : 0,
              animation: isVisible
                ? 'fade-in 0.5s var(--ease-smooth) 0.3s forwards'
                : 'none',
            }}
          >
            <a
              href="#home"
              className="text-white font-bold text-xl tracking-wider hover:text-red-500 transition-colors duration-200"
              style={{ fontFamily: 'Montserrat, sans-serif' }}
            >
              DIEGO<span className="text-red-600">.</span>PM
            </a>
          </div>

          {/* Social Links */}
          <div
            className="flex items-center space-x-6"
            style={{
              opacity: isVisible ? 1 : 0,
              animation: isVisible
                ? 'fade-in 0.4s var(--ease-smooth) 0.4s forwards'
                : 'none',
            }}
          >
            <a
              href="https://www.linkedin.com/in/diego-pinheiro-3628a2273/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-red-500 transition-all duration-300 hover:scale-110"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
          </div>

          {/* Divider */}
          <div className="w-16 h-px bg-red-600/30" />

          {/* Copyright */}
          <div
            className="text-center"
            style={{
              opacity: isVisible ? 1 : 0,
              animation: isVisible
                ? 'fade-in 0.5s var(--ease-smooth) 0.5s forwards'
                : 'none',
            }}
          >
            <p className="text-gray-500 text-sm flex items-center justify-center flex-wrap gap-1">
              <span>© {currentYear} Diego Pinheiro.</span>
              <span>Feito com</span>
              <Heart
                size={14}
                className="text-red-600 inline animate-pulse"
                fill="currentColor"
              />
              <span>Todos os direitos reservados.</span>
            </p>
          </div>

          {/* Back to Top */}
          <div
            style={{
              opacity: isVisible ? 1 : 0,
              animation: isVisible
                ? 'fade-in 0.4s var(--ease-smooth) 0.6s forwards'
                : 'none',
            }}
          >
            <a
              href="#home"
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="text-gray-500 text-sm hover:text-red-500 transition-colors duration-300 flex items-center space-x-1"
            >
              <span>Voltar ao topo</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
