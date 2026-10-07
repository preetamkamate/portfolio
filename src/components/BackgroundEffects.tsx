import React, { useEffect, useRef } from 'react';

interface BackgroundEffectsProps {
  crtEnabled: boolean;
}

export const BackgroundEffects: React.FC<BackgroundEffectsProps> = ({ crtEnabled }) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);

    // Subtle floating orange telemetry particles
    const particleCount = Math.min(40, Math.floor(window.innerWidth / 35));
    const particles = Array.from({ length: particleCount }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.45,
      vy: (Math.random() - 0.5) * 0.45,
      size: Math.random() * 2 + 1,
      baseAlpha: Math.random() * 0.5 + 0.2,
      pulseSpeed: Math.random() * 0.02 + 0.01,
      pulseOffset: Math.random() * Math.PI * 2,
    }));

    let frame = 0;
    const render = () => {
      frame++;
      ctx.clearRect(0, 0, width, height);

      // Render drifting particles
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;
        if (p.y < 0) p.y = height;
        if (p.y > height) p.y = 0;

        const currentAlpha =
          p.baseAlpha + Math.sin(frame * p.pulseSpeed + p.pulseOffset) * 0.2;

        ctx.fillStyle = `rgba(249, 115, 22, ${Math.max(0.1, currentAlpha)})`;
        ctx.shadowColor = '#ea580c';
        ctx.shadowBlur = 6;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();

        // Connect nearby particles with faint technical lines
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dist = Math.hypot(p.x - p2.x, p.y - p2.y);
          if (dist < 100) {
            ctx.shadowBlur = 0;
            ctx.strokeStyle = `rgba(234, 88, 12, ${(1 - dist / 100) * 0.15})`;
            ctx.lineWidth = 0.75;
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();
          }
        }
      }

      animId = requestAnimationFrame(render);
    };

    animId = requestAnimationFrame(render);

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animId);
    };
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden select-none">
      {/* Animated Subtle Technical Grid */}
      <div className="absolute inset-0 retro-grid-bg opacity-15" />

      {/* Floating Orange Particles Canvas */}
      <canvas ref={canvasRef} className="absolute inset-0 opacity-80" />

      {/* Periodic Vertical Scanning Line */}
      <div className="absolute inset-x-0 h-2 bg-gradient-to-b from-transparent via-orange-500/20 to-transparent animate-radar-sweep-v" />

      {/* Retro Vignette */}
      <div className="absolute inset-0 crt-vignette pointer-events-none" />

      {/* Toggleable CRT Scanlines */}
      {crtEnabled && (
        <div className="absolute inset-0 crt-overlay opacity-65 pointer-events-none" />
      )}
    </div>
  );
};
