import { useEffect, useRef, useState } from 'react';
import { Calendar, Clock } from 'lucide-react';

interface Achievement {
  image?: string;
  type: string;
  title: string;
  description: string;
  date: string;
  duration?: string;
}

const Achievements = () => {
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

  const achievements: Achievement[] = [
    {
      type: 'Reconhecimento',
      title: 'Workshop Introdução à Programação com Python',
      image: '/python_workshop_cover.png',
      description:
        'Participação no workshop de introdução à programação utilizando Python, com foco em conceitos fundamentais e aplicações práticas.',
      date: '28/03/2023',
      duration: '4 horas',
    },
    {
      type: 'Premiação',
      title: 'Segunda Maratona Senac de Inovação – 2º lugar',
      image: '/Maratona-Senac.jpeg',
      description:
        'Participação na maratona de inovação do SENAC, desenvolvendo soluções criativas e trabalhando em equipe para resolver desafios reais do mercado.',
      date: '19/08/2025 - 22/08/2025',
      duration: '16 horas',
    },
  ];

  return (
    <section
      id="achievements"
      ref={sectionRef}
      className="relative py-24 md:py-32 bg-black overflow-hidden"
    >
      {/* Background Pattern */}
      <div
        className="absolute inset-0 z-0 opacity-30"
        style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, rgba(255,0,0,0.15) 1px, transparent 0)`,
          backgroundSize: '40px 40px',
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Heading */}
        <div className="mb-16 text-center">
          <h2
            className="section-heading inline-block"
            style={{
              opacity: isVisible ? 1 : 0,
              animation: isVisible
                ? 'scale-in 0.5s var(--ease-expo-out) forwards'
                : 'none',
            }}
          >
            CONQUISTAS
          </h2>
          <div
            className="mt-4 mx-auto h-1 bg-red-600"
            style={{
              width: isVisible ? '100px' : '0',
              transition: 'width 0.4s var(--ease-expo-out) 0.4s',
            }}
          />
          <p
            className="mt-6 text-gray-400 max-w-2xl mx-auto"
            style={{
              opacity: isVisible ? 1 : 0,
              animation: isVisible
                ? 'fade-in 0.5s var(--ease-smooth) 0.3s forwards'
                : 'none',
            }}
          >
            Reconhecimentos e certificações que marcam minha jornada de
            aprendizado e desenvolvimento profissional.
          </p>
        </div>

        {/* Achievements Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {achievements.map((achievement, index) => (
            <div
              key={achievement.title}
              className={`group relative ${
                index % 2 === 0 ? 'md:-translate-y-4' : 'md:translate-y-4'
              }`}
              style={{
                opacity: isVisible ? 1 : 0,
                animation: isVisible
                  ? `slide-up 0.7s var(--ease-expo-out) ${0.2 + index * 0.2}s forwards`
                  : 'none',
              }}
            >
              <div className="relative p-6 md:p-8 border border-red-600/30 rounded-lg bg-gradient-to-br from-red-600/5 to-transparent hover:border-red-600 transition-all duration-300 hover:shadow-lg hover:shadow-red-600/10">
                {achievement.image && (
                  <div className="mb-6 -mx-6 md:-mx-8 -mt-6 md:-mt-8 h-48 overflow-hidden rounded-t-lg">
                    <img 
                      src={achievement.image} 
                      alt={achievement.title} 
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                )}
                {/* Type Badge */}
                <div className="absolute -top-3 left-6 z-10">
                  <span className="px-3 py-1 bg-red-600 text-white text-xs font-medium rounded-full">
                    {achievement.type}
                  </span>
                </div>

                {/* Content */}
                <h3 className="text-lg md:text-xl font-bold text-white mb-3 group-hover:text-red-500 transition-colors duration-300">
                  {achievement.title}
                </h3>
                <p className="text-gray-400 text-sm md:text-base mb-4 leading-relaxed">
                  {achievement.description}
                </p>

                {/* Meta Info */}
                <div className="flex flex-wrap items-center gap-4 text-gray-500 text-sm">
                  <div className="flex items-center space-x-1">
                    <Calendar size={14} />
                    <span>{achievement.date}</span>
                  </div>
                  {achievement.duration && (
                    <div className="flex items-center space-x-1">
                      <Clock size={14} />
                      <span>{achievement.duration}</span>
                    </div>
                  )}
                </div>

                {/* Decorative Corner */}
                <div className="absolute top-0 right-0 w-16 h-16 overflow-hidden rounded-tr-lg z-10">
                  <div className="absolute top-0 right-0 w-px h-12 bg-gradient-to-b from-red-600/50 to-transparent transform rotate-45 origin-top-right" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Motivational Text */}
        <div
          className="mt-16 text-center"
          style={{
            opacity: isVisible ? 1 : 0,
            animation: isVisible ? 'fade-in 0.5s var(--ease-smooth) 0.8s forwards' : 'none',
          }}
        >
          <p className="text-gray-500 text-sm md:text-base italic">
            "Cada conquista é um passo em direção ao meu objetivo de me tornar
            um desenvolvedor completo."
          </p>
        </div>
      </div>
    </section>
  );
};

export default Achievements;
