import { useEffect, useRef, useState } from 'react';
import { ExternalLink, Github, Layers } from 'lucide-react';

interface Project {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  demoUrl?: string;
  repoUrl?: string;
}

const Projects = () => {
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

  // Projetos - adicione seus projetos aqui
  const projects: Project[] = [
    {
      title: 'Blog Científico',
      description: 'Um blog focado em divulgação e conteúdos científicos com interface moderna.',
      image: '/blogcientifico.png',
      technologies: ['Vue', 'JavaScript', 'HTML', 'CSS'],
      demoUrl: 'https://blog-cient-fico.vercel.app/',
      repoUrl: 'https://github.com/DiegooPinheiro/Blog-Cient-fico',
    },
    {
      title: 'Projeto 2',
      description: 'Descrição do seu segundo projeto. Destaque as funcionalidades principais.',
      image: '/project-placeholder.jpg',
      technologies: ['HTML', 'CSS', 'JavaScript'],
      demoUrl: '#',
      repoUrl: '#',
    },
    {
      title: 'Projeto 3',
      description: 'Descrição do seu terceiro projeto. Mencione os desafios superados.',
      image: '/project-placeholder.jpg',
      technologies: ['Python', 'MySQL'],
      demoUrl: '#',
      repoUrl: '#',
    },
  ];

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="relative py-24 md:py-32 bg-black overflow-hidden"
    >
      {/* Background Pattern */}
      <div
        className="absolute inset-0 z-0 opacity-20"
        style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, rgba(255,0,0,0.1) 1px, transparent 0)`,
          backgroundSize: '50px 50px',
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
                ? 'slide-up 0.6s var(--ease-expo-out) forwards'
                : 'none',
            }}
          >
            PROJETOS
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
            Alguns dos projetos que desenvolvi para aplicar meus conhecimentos
            e criar soluções práticas.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="group relative"
              style={{
                opacity: isVisible ? 1 : 0,
                animation: isVisible
                  ? `slide-up 0.7s var(--ease-expo-out) ${0.2 + index * 0.15}s forwards`
                  : 'none',
              }}
            >
              <div className="relative overflow-hidden rounded-lg border border-red-600/30 bg-gradient-to-br from-red-600/5 to-transparent hover:border-red-600 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-red-600/10">
                {/* Project Image */}
                <div className="relative h-48 overflow-hidden">
                  {project.image && project.image !== '/project-placeholder.jpg' ? (
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                    />
                  ) : (
                    <div className="absolute inset-0 bg-gradient-to-br from-red-900/30 to-black/60 flex items-center justify-center">
                      <Layers size={48} className="text-red-600/50" />
                    </div>
                  )}
                  {/* Overlay on hover */}
                  <div className="absolute inset-0 bg-red-600/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
                    {project.demoUrl && (
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-red-600 hover:scale-110 transition-transform duration-300"
                        aria-label="Ver demo"
                      >
                        <ExternalLink size={20} />
                      </a>
                    )}
                    {project.repoUrl && (
                      <a
                        href={project.repoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-red-600 hover:scale-110 transition-transform duration-300"
                        aria-label="Ver código"
                      >
                        <Github size={20} />
                      </a>
                    )}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-lg md:text-xl font-bold text-white mb-2 group-hover:text-red-500 transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 text-sm mb-4 line-clamp-3">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 text-xs font-medium text-red-500 bg-red-600/10 border border-red-600/30 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Decorative Corner */}
                <div className="absolute top-0 right-0 w-12 h-12 overflow-hidden">
                  <div className="absolute top-0 right-0 w-px h-8 bg-gradient-to-b from-red-600/50 to-transparent transform rotate-45 origin-top-right" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div
          className="mt-16 text-center"
          style={{
            opacity: isVisible ? 1 : 0,
            animation: isVisible
              ? 'fade-in 0.5s var(--ease-smooth) 0.8s forwards'
              : 'none',
          }}
        >
          <p className="text-gray-500 mb-4">
            Quer ver mais projetos? Acesse meu GitHub!
          </p>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 px-6 py-3 border border-red-600 text-red-500 rounded-lg hover:bg-red-600 hover:text-white transition-all duration-300"
          >
            <Github size={20} />
            <span>Ver GitHub</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
