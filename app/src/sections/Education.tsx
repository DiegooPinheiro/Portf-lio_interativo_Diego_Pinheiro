import { useEffect, useRef, useState } from 'react';
import { BookOpen, Clock, CheckCircle2, Circle } from 'lucide-react';

interface EducationItem {
  title: string;
  institution: string;
  period: string;
  status: 'completed' | 'ongoing';
  image: string;
}

const Education = () => {
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

  const educationItems: EducationItem[] = [
    {
      title: 'Administração e Desenvolvimento de Sistemas',
      institution: 'SENAC',
      period: '1/2025 – 4/2026',
      status: 'ongoing',
      image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=600&auto=format&fit=crop',
    },
    {
      title: 'Recursos Humanos',
      institution: 'SENAC',
      period: '6/2023 - 4/2024',
      status: 'completed',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=600&auto=format&fit=crop',
    },
    {
      title: 'Programador Web',
      institution: 'SENAC',
      period: '1/2023 - 5/2023',
      status: 'completed',
      image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=600&auto=format&fit=crop',
    },
    {
      title: 'DBA - Administrador de Banco de Dados',
      institution: 'SENAC',
      period: '8/2022 - 1/2023',
      status: 'completed',
      image: 'https://images.unsplash.com/photo-1544383835-bda2bc66a55d?q=80&w=600&auto=format&fit=crop',
    },
  ];

  return (
    <section
      id="education"
      ref={sectionRef}
      className="relative py-24 md:py-32 bg-black overflow-hidden"
    >
      {/* Background Gradient */}
      <div
        className="absolute inset-0 z-0"
        style={{
          background:
            'radial-gradient(ellipse at 30% 50%, rgba(255,0,0,0.03) 0%, transparent 50%)',
        }}
      />

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
            FORMAÇÃO
          </h2>
          <div
            className="mt-4 h-1 bg-red-600"
            style={{
              width: isVisible ? '100px' : '0',
              transition: 'width 0.4s var(--ease-expo-out) 0.4s',
            }}
          />
          <p
            className="mt-6 text-gray-400 max-w-2xl"
            style={{
              opacity: isVisible ? 1 : 0,
              animation: isVisible
                ? 'fade-in 0.5s var(--ease-smooth) 0.3s forwards'
                : 'none',
            }}
          >
            Minha trajetória educacional é marcada pela busca constante por
            conhecimento e aprimoramento profissional através do SENAC.
          </p>
        </div>

        {/* Education Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {educationItems.map((item, index) => (
            <div
              key={item.title}
              className="group relative perspective-1000"
              style={{
                opacity: isVisible ? 1 : 0,
                animation: isVisible
                  ? `flip-in 0.7s var(--ease-expo-out) ${0.2 + index * 0.15}s forwards`
                  : 'none',
              }}
            >
              <div className="relative border border-red-600/30 rounded-xl bg-gradient-to-br from-red-600/5 to-transparent hover:border-red-600 transition-all duration-300 card-hover preserve-3d overflow-hidden flex flex-col h-full">
                
                {/* Banner Image */}
                <div className="w-full h-32 relative overflow-hidden">
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-colors duration-500 z-10" />
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                  />
                  
                  {/* Status Indicator */}
                  <div className="absolute top-4 right-4 z-20 bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/10">
                    {item.status === 'ongoing' ? (
                      <div className="flex items-center space-x-2 text-amber-500">
                        <Circle
                          size={10}
                          className="animate-pulse"
                          fill="currentColor"
                        />
                        <span className="text-xs font-semibold tracking-wide uppercase">Em andamento</span>
                      </div>
                    ) : (
                      <div className="flex items-center space-x-2 text-emerald-400">
                        <CheckCircle2 size={12} />
                        <span className="text-xs font-semibold tracking-wide uppercase">Completo</span>
                      </div>
                    )}
                  </div>
                </div>

                <div className="p-6 md:p-8 relative flex-grow flex flex-col justify-center">
                  {/* Content */}
                  <h3 className="text-lg md:text-xl font-bold text-white mb-2 group-hover:text-red-500 transition-colors duration-300">
                    {item.title}
                  </h3>
                  <p className="text-red-500/80 font-medium mb-4">
                    {item.institution}
                  </p>

                  {/* Period */}
                  <div className="flex items-center space-x-2 text-gray-400 text-sm mt-auto">
                    <Clock size={14} className="text-red-500/60" />
                    <span>{item.period}</span>
                  </div>
                </div>

                {/* Border Shimmer Effect */}
                <div className="absolute inset-0 rounded-xl overflow-hidden pointer-events-none">
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{
                      background:
                        'linear-gradient(90deg, transparent, rgba(255,0,0,0.1), transparent)',
                      animation: 'shimmer 3s linear infinite',
                    }}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Summary Stats */}
        <div
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6"
          style={{
            opacity: isVisible ? 1 : 0,
            animation: isVisible
              ? 'slide-up 0.6s var(--ease-expo-out) 0.8s forwards'
              : 'none',
          }}
        >
          <div className="text-center p-4 border border-red-600/20 rounded-lg">
            <p className="text-3xl md:text-4xl font-bold text-red-500">4</p>
            <p className="text-gray-400 text-sm mt-1">Cursos Técnicos</p>
          </div>
          <div className="text-center p-4 border border-red-600/20 rounded-lg">
            <p className="text-3xl md:text-4xl font-bold text-red-500">3</p>
            <p className="text-gray-400 text-sm mt-1">Completos</p>
          </div>
          <div className="text-center p-4 border border-red-600/20 rounded-lg">
            <p className="text-3xl md:text-4xl font-bold text-red-500">1</p>
            <p className="text-gray-400 text-sm mt-1">Em Andamento</p>
          </div>
          <div className="text-center p-4 border border-red-600/20 rounded-lg">
            <p className="text-3xl md:text-4xl font-bold text-red-500">SENAC</p>
            <p className="text-gray-400 text-sm mt-1">Instituição</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
