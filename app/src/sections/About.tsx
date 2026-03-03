import { useEffect, useRef, useState } from 'react';
import { MapPin, GraduationCap, Briefcase, Heart } from 'lucide-react';

const About = () => {
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

  const details = [
    {
      icon: <Briefcase size={18} />,
      label: 'Nome',
      value: 'Diego Pinheiro Morgado',
    },
    {
      icon: <MapPin size={18} />,
      label: 'Localização',
      value: 'São Luís, Maranhão, Brasil',
    },
    {
      icon: <GraduationCap size={18} />,
      label: 'Formação',
      value: 'Desenvolvimento de Sistemas (em andamento)',
    },
    {
      icon: <Heart size={18} />,
      label: 'Interesses',
      value: 'Web Development, Database, RH Tech',
    },
  ];

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative py-24 md:py-32 bg-black overflow-hidden"
    >
      {/* Background Decorative Text */}
      <div
        className="absolute top-1/2 left-0 -translate-y-1/2 text-[150px] md:text-[200px] font-bold text-red-600/5 whitespace-nowrap pointer-events-none select-none"
        style={{
          fontFamily: 'Montserrat, sans-serif',
          transform: 'translateY(-50%) rotate(-90deg) translateX(-30%)',
          opacity: isVisible ? 0.2 : 0,
          transition: 'opacity 0.8s ease 0.2s',
        }}
      >
        SOBRE
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Heading */}
        <div className="mb-16">
          <h2
            className="section-heading"
            style={{
              opacity: isVisible ? 1 : 0,
              animation: isVisible
                ? 'slide-up 0.6s var(--ease-expo-out) forwards'
                : 'none',
            }}
          >
            SOBRE MIM
          </h2>
          <div
            className="mt-4 h-1 bg-red-600"
            style={{
              width: isVisible ? '100px' : '0',
              transition: 'width 0.4s var(--ease-expo-out) 0.4s',
            }}
          />
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Left Column - Text */}
          <div
            className="space-y-6"
            style={{
              opacity: isVisible ? 1 : 0,
              animation: isVisible
                ? 'slide-up 0.6s var(--ease-expo-out) 0.3s forwards'
                : 'none',
            }}
          >
            <p className="text-gray-300 text-base md:text-lg leading-relaxed">
              Sou um desenvolvedor apaixonado por tecnologia, com formação
              técnica sólida pelo{' '}
              <span className="text-red-500 font-medium">SENAC</span> em
              Desenvolvimento de Sistemas, Programação Web e Administração de
              Banco de Dados.
            </p>
            <p className="text-gray-300 text-base md:text-lg leading-relaxed">
              Busco constantemente aprimorar minhas habilidades e criar soluções
              que façam a diferença. Meu objetivo é contribuir com projetos
              inovadores que impactem positivamente a vida das pessoas.
            </p>
            <p className="text-gray-400 text-sm md:text-base leading-relaxed">
              Embora ainda não tenha experiência profissional comprovada, estou
              sempre em busca de novos desafios e oportunidades para aplicar
              meus conhecimentos e crescer como profissional.
            </p>

            {/* Decorative Image */}
            <div className="mt-8 relative">
              <div className="relative overflow-hidden rounded-lg border border-red-600/30">
                <img
                  src="/about-image.jpg"
                  alt="Abstract geometric shapes"
                  className="w-full h-48 md:h-64 object-cover opacity-80 hover:opacity-100 transition-opacity duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              </div>
            </div>
          </div>

          {/* Right Column - Details */}
          <div
            className="lg:mt-16"
            style={{
              opacity: isVisible ? 1 : 0,
              animation: isVisible
                ? 'slide-up 0.6s var(--ease-expo-out) 0.5s forwards'
                : 'none',
            }}
          >
            {/* Vertical Line */}
            <div
              className="hidden lg:block absolute left-1/2 top-0 w-px bg-gradient-to-b from-red-600/50 via-red-600/30 to-transparent"
              style={{
                height: isVisible ? '100%' : '0',
                transition: 'height 0.7s var(--ease-expo-out) 0.4s',
              }}
            />

            <div className="space-y-6">
              {details.map((detail, index) => (
                <div
                  key={detail.label}
                  className="group flex items-start space-x-4 p-4 rounded-lg border border-transparent hover:border-red-600/30 hover:bg-red-600/5 transition-all duration-300"
                  style={{
                    opacity: isVisible ? 1 : 0,
                    animation: isVisible
                      ? `slide-up 0.4s var(--ease-smooth) ${0.6 + index * 0.1}s forwards`
                      : 'none',
                  }}
                >
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-red-600/20 flex items-center justify-center text-red-500 group-hover:bg-red-600 group-hover:text-white transition-all duration-300">
                    {detail.icon}
                  </div>
                  <div>
                    <p className="text-gray-500 text-sm mb-1">{detail.label}</p>
                    <p className="text-white font-medium group-hover:translate-x-2 transition-transform duration-300">
                      {detail.value}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Quote */}
            <div
              className="mt-10 p-6 border-l-4 border-red-600 bg-red-600/5 rounded-r-lg"
              style={{
                opacity: isVisible ? 1 : 0,
                animation: isVisible
                  ? 'slide-up 0.5s var(--ease-expo-out) 1s forwards'
                  : 'none',
              }}
            >
              <p className="text-gray-300 italic text-sm md:text-base">
                "A tecnologia move o mundo, e eu quero fazer parte dessa
                revolução."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
