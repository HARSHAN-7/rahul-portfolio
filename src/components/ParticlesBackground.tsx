import React, { useEffect, useRef } from 'react';

export const ParticlesBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    // Tamil vowels and symbols for ambient floating effect
    const tamilLetters = ['அ', 'ஆ', 'இ', 'ஈ', 'உ', 'சொல்', 'கவி', 'நினைவு', 'மழை', 'மௌனம்', 'ஃ'];

    interface Particle {
      x: number;
      y: number;
      size: number;
      speedY: number;
      speedX: number;
      opacity: number;
      text?: string;
      isText: boolean;
      rot: number;
      rotSpeed: number;
    }

    const particles: Particle[] = [];
    const particleCount = Math.min(Math.floor(width / 25), 45);

    for (let i = 0; i < particleCount; i++) {
      const isText = Math.random() < 0.35;
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        size: isText ? Math.random() * 12 + 14 : Math.random() * 2 + 1,
        speedY: -(Math.random() * 0.4 + 0.1),
        speedX: (Math.random() - 0.5) * 0.2,
        opacity: Math.random() * 0.25 + 0.05,
        text: tamilLetters[Math.floor(Math.random() * tamilLetters.length)],
        isText,
        rot: (Math.random() - 0.5) * 0.2,
        rotSpeed: (Math.random() - 0.5) * 0.005,
      });
    }

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      for (let p of particles) {
        p.y += p.speedY;
        p.x += p.speedX;
        p.rot += p.rotSpeed;

        if (p.y < -30) {
          p.y = height + 30;
          p.x = Math.random() * width;
        }

        ctx.save();
        ctx.translate(p.x, p.y);

        if (p.isText && p.text) {
          ctx.rotate(p.rot);
          ctx.font = `${p.size}px "Noto Serif Tamil", serif`;
          ctx.fillStyle = `rgba(212, 175, 55, ${p.opacity * 0.7})`; // Warm Gold
          ctx.fillText(p.text, 0, 0);
        } else {
          ctx.beginPath();
          ctx.arc(0, 0, p.size, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(212, 175, 55, ${p.opacity * 0.8})`;
          ctx.shadowBlur = 8;
          ctx.shadowColor = 'rgba(212, 175, 55, 0.4)';
          ctx.fill();
        }

        ctx.restore();
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0 opacity-60"
    />
  );
};
