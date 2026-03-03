import { useEffect, useRef, useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
}

const Hero = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const mouseRef = useRef({ x: 0, y: 0 });
  const animationRef = useRef<number>(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Particle animation
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Initialize particles
    const particleCount = window.innerWidth < 768 ? 30 : 60;
    particlesRef.current = Array.from({ length: particleCount }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 0.5,
      vy: (Math.random() - 0.5) * 0.5,
      radius: Math.random() * 2 + 1,
    }));

    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });

    let frameCount = 0;
    const animate = () => {
      frameCount++;
      // Render every 2nd frame for performance (30fps)
      if (frameCount % 2 === 0) {
        ctx.fillStyle = 'rgba(0, 0, 0, 0.1)';
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        const particles = particlesRef.current;

        particles.forEach((particle, i) => {
          // Mouse repulsion
          const dx = mouseRef.current.x - particle.x;
          const dy = mouseRef.current.y - particle.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 100) {
            particle.vx -= (dx / dist) * 0.5;
            particle.vy -= (dy / dist) * 0.5;
          }

          // Update position
          particle.x += particle.vx;
          particle.y += particle.vy;

          // Damping
          particle.vx *= 0.99;
          particle.vy *= 0.99;

          // Boundary wrap
          if (particle.x < 0) particle.x = canvas.width;
          if (particle.x > canvas.width) particle.x = 0;
          if (particle.y < 0) particle.y = canvas.height;
          if (particle.y > canvas.height) particle.y = 0;

          // Draw particle
          ctx.beginPath();
          ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
          ctx.fillStyle = 'rgba(255, 0, 0, 0.6)';
          ctx.fill();

          // Draw connections (only check every 5th particle for performance)
          if (i % 5 === 0) {
            particles.slice(i + 1).forEach((other) => {
              const dx = particle.x - other.x;
              const dy = particle.y - other.y;
              const distance = Math.sqrt(dx * dx + dy * dy);

              if (distance < 120) {
                ctx.beginPath();
                ctx.moveTo(particle.x, particle.y);
                ctx.lineTo(other.x, other.y);
                ctx.strokeStyle = `rgba(255, 0, 0, ${0.2 * (1 - distance / 120)})`;
                ctx.lineWidth = 0.5;
                ctx.stroke();
              }
            });
          }
        });
      }

      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationRef.current);
    };
  }, []);

  const scrollToAbout = () => {
    const element = document.querySelector('#about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black"
    >
      {/* Particle Canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 z-0"
        style={{ opacity: isVisible ? 1 : 0, transition: 'opacity 1s ease' }}
      />

      {/* Gradient Overlay */}
      <div
        className="absolute inset-0 z-[1]"
        style={{
          background:
            'radial-gradient(ellipse at center, rgba(255,0,0,0.05) 0%, transparent 70%)',
        }}
      />

      {/* Floating Decorative Elements */}
      <div
        className="absolute top-1/4 right-1/4 w-32 h-32 rounded-full border border-red-600/20 z-[1]"
        style={{ animation: 'float 6s ease-in-out infinite' }}
      />
      <div
        className="absolute bottom-1/3 left-1/5 w-20 h-20 rotate-45 border border-red-600/15 z-[1]"
        style={{ animation: 'float 5s ease-in-out infinite 1s' }}
      />
      <div
        className="absolute top-1/3 left-1/4 w-4 h-4 rounded-full bg-red-600/30 z-[1]"
        style={{ animation: 'float 4s ease-in-out infinite 0.5s' }}
      />

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto perspective-1000">
        {/* Greeting */}
        <p
          className="text-red-500 text-sm sm:text-base font-medium tracking-[0.3em] mb-4"
          style={{
            opacity: isVisible ? 1 : 0,
            animation: isVisible
              ? 'slide-up 0.6s var(--ease-expo-out) 0.3s forwards'
              : 'none',
          }}
        >
          OLÁ, EU SOU
        </p>

        {/* Name */}
        <h1
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-4 tracking-tight preserve-3d"
          style={{
            fontFamily: 'Montserrat, sans-serif',
            opacity: isVisible ? 1 : 0,
            animation: isVisible
              ? 'flip-in 0.8s var(--ease-dramatic) 0.8s forwards'
              : 'none',
            textShadow: '0 0 30px rgba(255, 0, 0, 0.3)',
          }}
        >
          DIEGO PINHEIRO
        </h1>

        {/* Title */}
        <h2
          className="text-xl sm:text-2xl md:text-3xl font-semibold text-white/90 mb-6"
          style={{
            fontFamily: 'Montserrat, sans-serif',
            opacity: isVisible ? 1 : 0,
            animation: isVisible
              ? 'slide-up 0.7s var(--ease-expo-out) 1.2s forwards'
              : 'none',
          }}
        >
          DESENVOLVEDOR{' '}
          <span className="text-red-500">FULL STACK</span>
        </h2>

        {/* Subtitle */}
        <p
          className="text-gray-400 text-base sm:text-lg max-w-2xl mx-auto mb-10"
          style={{
            opacity: isVisible ? 1 : 0,
            animation: isVisible
              ? 'fade-in 0.5s var(--ease-smooth) 1.5s forwards'
              : 'none',
          }}
        >
          Transformando ideias em soluções digitais através de código limpo e
          arquitetura robusta
        </p>

        {/* CTA Button */}
        <div
          style={{
            opacity: isVisible ? 1 : 0,
            animation: isVisible
              ? 'scale-in 0.6s var(--ease-elastic) 1.8s forwards'
              : 'none',
          }}
        >
          <button
            onClick={scrollToAbout}
            className="btn-primary text-sm sm:text-base tracking-wide"
          >
            CONHECER MAIS
          </button>
        </div>

        {/* Red Accent Line */}
        <div
          className="mt-12 mx-auto h-1 bg-gradient-to-r from-transparent via-red-600 to-transparent"
          style={{
            width: isVisible ? '200px' : '0',
            transition: 'width 0.4s var(--ease-expo-out) 2s',
          }}
        />
      </div>

      {/* Scroll Indicator */}
      <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
        style={{
          opacity: isVisible ? 1 : 0,
          animation: isVisible
            ? 'fade-in 0.5s var(--ease-smooth) 2.2s forwards'
            : 'none',
        }}
      >
        <button
          onClick={scrollToAbout}
          className="text-white/50 hover:text-red-500 transition-colors duration-300 animate-float"
          aria-label="Scroll down"
        >
          <ChevronDown size={32} />
        </button>
      </div>
    </section>
  );
};

export default Hero;
