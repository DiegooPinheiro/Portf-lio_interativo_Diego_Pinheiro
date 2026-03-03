import { useEffect, useRef, useState } from 'react';
import { Mail, Phone, MapPin, Linkedin, Send } from 'lucide-react';

const Contact = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const contactInfo = [
    {
      icon: <Mail size={20} />,
      label: 'Email',
      value: 'diego.pinheiro.m@hotmail.com',
      href: 'mailto:diego.pinheiro.m@hotmail.com',
    },
    {
      icon: <Phone size={20} />,
      label: 'Telefone',
      value: '(98) 98441-0040',
      href: 'tel:+5598984410040',
    },
    {
      icon: <MapPin size={20} />,
      label: 'Localização',
      value: 'São Luís, MA - Brasil',
      href: '#',
    },
    {
      icon: <Linkedin size={20} />,
      label: 'LinkedIn',
      value: 'linkedin.com/in/diego-pinheiro-3628a2273/',
      href: 'https://www.linkedin.com/in/diego-pinheiro-3628a2273/',
      external: true,
    },
  ];

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="relative py-24 md:py-32 bg-black overflow-hidden"
    >
      {/* Background Gradient */}
      <div
        className="absolute inset-0 z-0"
        style={{
          background:
            'radial-gradient(ellipse at 50% 100%, rgba(255,0,0,0.05) 0%, transparent 50%)',
        }}
      />

      {/* Decorative Shape */}
      <div
        className="absolute top-1/2 right-0 -translate-y-1/2 w-64 h-64 md:w-96 md:h-96 opacity-10 pointer-events-none"
        style={{
          animation: isVisible ? 'orbit 60s linear infinite' : 'none',
        }}
      >
        <div className="w-full h-full border-2 border-red-600 rotate-45" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Heading */}
        <div className="mb-16 text-center">
          <h2
            className="section-heading inline-block"
            style={{
              opacity: isVisible ? 1 : 0,
              animation: isVisible
                ? 'slide-up 0.6s var(--ease-expo-out) forwards'
                : 'none',
            }}
          >
            CONTATO
          </h2>
          <div
            className="mt-4 mx-auto h-1 bg-red-600"
            style={{
              width: isVisible ? '100px' : '0',
              transition: 'width 0.4s var(--ease-expo-out) 0.4s',
            }}
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Column - Contact Info */}
          <div>
            <h3
              className="text-2xl md:text-3xl font-bold text-white mb-6"
              style={{
                opacity: isVisible ? 1 : 0,
                animation: isVisible
                  ? 'slide-up 0.5s var(--ease-expo-out) 0.2s forwards'
                  : 'none',
              }}
            >
              Vamos trabalhar juntos?
            </h3>
            <p
              className="text-gray-400 mb-10"
              style={{
                opacity: isVisible ? 1 : 0,
                animation: isVisible
                  ? 'fade-in 0.5s var(--ease-smooth) 0.3s forwards'
                  : 'none',
              }}
            >
              Estou sempre aberto a novas oportunidades e desafios. Entre em
              contato e vamos conversar sobre como posso contribuir com seu
              projeto!
            </p>

            {/* Contact Items */}
            <div className="space-y-4">
              {contactInfo.map((item, index) => (
                <a
                  key={item.label}
                  href={item.href}
                  target={item.external ? '_blank' : undefined}
                  rel={item.external ? 'noopener noreferrer' : undefined}
                  className="group flex items-center space-x-4 p-4 rounded-lg border border-transparent hover:border-red-600/30 hover:bg-red-600/5 transition-all duration-300"
                  style={{
                    opacity: isVisible ? 1 : 0,
                    animation: isVisible
                      ? `slide-up 0.4s var(--ease-expo-out) ${0.4 + index * 0.1}s forwards`
                      : 'none',
                  }}
                >
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-red-600/20 flex items-center justify-center text-red-500 group-hover:bg-red-600 group-hover:text-white group-hover:scale-110 transition-all duration-300">
                    {item.icon}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-gray-500 text-sm">{item.label}</p>
                    <p className="text-white font-medium truncate group-hover:text-red-500 transition-colors duration-300">
                      {item.value}
                    </p>
                  </div>
                  <Send
                    size={16}
                    className="text-gray-600 group-hover:text-red-500 group-hover:translate-x-1 transition-all duration-300"
                  />
                </a>
              ))}
            </div>
          </div>

          {/* Right Column - CTA Card */}
          <div
            className="relative"
            style={{
              opacity: isVisible ? 1 : 0,
              animation: isVisible
                ? 'slide-up 0.6s var(--ease-expo-out) 0.6s forwards'
                : 'none',
            }}
          >
            <div className="relative p-8 md:p-12 border border-red-600/30 rounded-lg bg-gradient-to-br from-red-600/10 to-red-600/5 text-center">
              {/* Decorative Elements */}
              <div className="absolute top-4 left-4 w-8 h-8 border-t-2 border-l-2 border-red-600/50" />
              <div className="absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2 border-red-600/50" />
              <div className="absolute bottom-4 left-4 w-8 h-8 border-b-2 border-l-2 border-red-600/50" />
              <div className="absolute bottom-4 right-4 w-8 h-8 border-b-2 border-r-2 border-red-600/50" />

              <div className="mb-6">
                <div className="w-20 h-20 mx-auto rounded-full bg-red-600/20 flex items-center justify-center text-red-500 animate-pulse-glow">
                  <Send size={32} />
                </div>
              </div>

              <h4 className="text-xl md:text-2xl font-bold text-white mb-4">
                Pronto para começar?
              </h4>
              <p className="text-gray-400 mb-8">
                Envie um email ou me procure no LinkedIn. Responderei o mais
                breve possível!
              </p>

              <a
                href="mailto:diego.pinheiro.m@hotmail.com"
                className="inline-block btn-primary"
              >
                ENVIAR EMAIL
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
