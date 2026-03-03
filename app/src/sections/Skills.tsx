import { useEffect, useRef, useState } from 'react';
import {
  Code2,
  Database,
  GitBranch,
  Layers,
  Monitor,
  Server,
  Terminal,
  Users,
} from 'lucide-react';

interface Skill {
  name: string;
  icon: React.ReactNode;
}

interface SkillCategory {
  title: string;
  icon: React.ReactNode;
  skills: Skill[];
}

const Skills = () => {
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

  const skillCategories: SkillCategory[] = [
    {
      title: 'Desenvolvimento Web',
      icon: <Monitor size={24} />,
      skills: [
        { name: 'HTML/CSS', icon: <Code2 size={16} /> },
        { name: 'JavaScript', icon: <Terminal size={16} /> },
        { name: 'React', icon: <Layers size={16} /> },
        { name: 'Node.js', icon: <Server size={16} /> },
      ],
    },
    {
      title: 'Banco de Dados',
      icon: <Database size={24} />,
      skills: [
        { name: 'SQL', icon: <Database size={16} /> },
        { name: 'MySQL', icon: <Database size={16} /> },
        { name: 'PostgreSQL', icon: <Database size={16} /> },
        { name: 'Database Design', icon: <Layers size={16} /> },
      ],
    },
    {
      title: 'Ferramentas & Outros',
      icon: <GitBranch size={24} />,
      skills: [
        { name: 'Git', icon: <GitBranch size={16} /> },
        { name: 'Python', icon: <Terminal size={16} /> },
        { name: 'Metodologias Ágeis', icon: <Users size={16} /> },
        { name: 'Gestão de RH', icon: <Users size={16} /> },
      ],
    },
  ];

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="relative py-24 md:py-32 bg-black overflow-hidden"
    >
      {/* Background Gradient */}
      <div
        className="absolute inset-0 z-0"
        style={{
          background:
            'radial-gradient(ellipse at 70% 50%, rgba(255,0,0,0.03) 0%, transparent 50%)',
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
                ? 'slide-down 0.5s var(--ease-expo-out) forwards'
                : 'none',
            }}
          >
            HABILIDADES
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
              animation: isVisible ? 'fade-in 0.5s var(--ease-smooth) 0.3s forwards' : 'none',
            }}
          >
            Tecnologias e ferramentas que domino e utilizo para criar soluções
            digitais eficientes e escaláveis.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={category.title}
              className="group relative"
              style={{
                opacity: isVisible ? 1 : 0,
                animation: isVisible
                  ? `scale-in 0.6s var(--ease-expo-out) ${0.2 + categoryIndex * 0.15}s forwards`
                  : 'none',
              }}
            >
              <div className="relative p-6 md:p-8 border border-red-600/30 rounded-lg bg-gradient-to-br from-red-600/5 to-transparent hover:border-red-600 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-red-600/10 h-full">
                {/* Category Header */}
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-12 h-12 rounded-lg bg-red-600/20 flex items-center justify-center text-red-500 group-hover:bg-red-600 group-hover:text-white transition-all duration-300">
                    {category.icon}
                  </div>
                  <h3 className="text-lg md:text-xl font-bold text-white group-hover:text-red-500 transition-colors duration-300">
                    {category.title}
                  </h3>
                </div>

                {/* Skills List */}
                <div className="space-y-3">
                  {category.skills.map((skill, skillIndex) => (
                    <div
                      key={skill.name}
                      className="flex items-center space-x-3 p-3 rounded-lg border border-transparent hover:border-red-600/30 hover:bg-red-600/5 transition-all duration-300 group/skill"
                      style={{
                        opacity: isVisible ? 1 : 0,
                        animation: isVisible
                          ? `fade-in 0.3s var(--ease-smooth) ${0.5 + categoryIndex * 0.15 + skillIndex * 0.05}s forwards`
                          : 'none',
                      }}
                    >
                      <span className="text-red-500/60 group-hover/skill:text-red-500 transition-colors duration-300">
                        {skill.icon}
                      </span>
                      <span className="text-gray-300 text-sm md:text-base group-hover/skill:text-white transition-colors duration-300">
                        {skill.name}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Border Shimmer */}
                <div className="absolute inset-0 rounded-lg overflow-hidden pointer-events-none">
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{
                      background:
                        'linear-gradient(90deg, transparent, rgba(255,0,0,0.05), transparent)',
                      animation: 'shimmer 5s linear infinite',
                    }}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Languages Section */}
        <div
          className="mt-16"
          style={{
            opacity: isVisible ? 1 : 0,
            animation: isVisible
              ? 'slide-up 0.6s var(--ease-expo-out) 0.8s forwards'
              : 'none',
          }}
        >
          <h3 className="text-xl font-bold text-white mb-6 text-center">
            IDIOMAS
          </h3>
          <div className="flex flex-wrap justify-center gap-6">
            <div className="flex items-center space-x-3 px-6 py-3 border border-red-600/30 rounded-full hover:border-red-600 hover:bg-red-600/5 transition-all duration-300">
              <div className="w-3 h-3 rounded-full bg-green-500" />
              <span className="text-white font-medium">Português</span>
              <span className="text-gray-500 text-sm">Nativo/Fluente</span>
            </div>
            <div className="flex items-center space-x-3 px-6 py-3 border border-red-600/30 rounded-full hover:border-red-600 hover:bg-red-600/5 transition-all duration-300">
              <div className="w-3 h-3 rounded-full bg-amber-500" />
              <span className="text-white font-medium">Inglês</span>
              <span className="text-gray-500 text-sm">Básico</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
