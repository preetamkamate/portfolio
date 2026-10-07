import React, { useState, useEffect, useRef } from 'react';

interface Particle {
  id: number;
  x: number;
  y: number;
  size: number;
  opacity: number;
}

export const Cursor: React.FC = () => {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [followerPos, setFollowerPos] = useState({ x: -100, y: -100 });
  const [hoverState, setHoverState] = useState<'none' | 'button' | 'card'>('none');
  const [particles, setParticles] = useState<Particle[]>([]);
  const [isMobile, setIsMobile] = useState(true);

  const posRef = useRef(pos);
  const followerRef = useRef(followerPos);
  posRef.current = pos;
  followerRef.current = followerPos;

  useEffect(() => {
    const checkMobile = () => {
      const isTouch =
        window.innerWidth < 768 ||
        'ontouchstart' in window ||
        window.matchMedia('(pointer: coarse)').matches;
      setIsMobile(isTouch);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    if (isMobile) return;

    let animId: number;

    const handleMouseMove = (e: MouseEvent) => {
      let targetX = e.clientX;
      let targetY = e.clientY;

      // Magnetic interaction check
      const hoveredBtn = (e.target as HTMLElement)?.closest('button, [data-magnetic]');
      if (hoveredBtn) {
        const rect = hoveredBtn.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        const dist = Math.hypot(e.clientX - centerX, e.clientY - centerY);
        if (dist < 45) {
          // Gentle magnetic pull
          targetX = centerX * 0.35 + e.clientX * 0.65;
          targetY = centerY * 0.35 + e.clientY * 0.65;
        }
      }

      setPos({ x: targetX, y: targetY });

      // Append particle trail
      if (Math.random() > 0.4) {
        const pId = Date.now() + Math.random();
        setParticles((prev) => [
          ...prev.slice(-15),
          {
            id: pId,
            x: e.clientX,
            y: e.clientY,
            size: Math.random() * 3.5 + 2,
            opacity: 0.85,
          },
        ]);
      }
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (!target) return;

      if (target.closest('[data-project-card]')) {
        setHoverState('card');
      } else if (
        target.closest('button') ||
        target.closest('a') ||
        target.closest('[data-cursor-interact]')
      ) {
        setHoverState('button');
      } else {
        setHoverState('none');
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseover', handleMouseOver);

    // Smooth lerp for follower
    const updateFollower = () => {
      const current = followerRef.current;
      const target = posRef.current;
      const nextX = current.x + (target.x - current.x) * 0.22;
      const nextY = current.y + (target.y - current.y) * 0.22;
      setFollowerPos({ x: nextX, y: nextY });
      animId = requestAnimationFrame(updateFollower);
    };
    animId = requestAnimationFrame(updateFollower);

    // Fade particles
    const particleInterval = setInterval(() => {
      setParticles((prev) =>
        prev
          .map((p) => ({ ...p, opacity: p.opacity - 0.08, size: p.size * 0.92 }))
          .filter((p) => p.opacity > 0.05)
      );
    }, 35);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseover', handleMouseOver);
      cancelAnimationFrame(animId);
      clearInterval(particleInterval);
    };
  }, [isMobile]);

  if (isMobile) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-50 overflow-hidden select-none">
      {/* Dynamic particle trail */}
      {particles.map((p) => (
        <div
          key={p.id}
          className="absolute rounded-full bg-gradient-to-tr from-orange-600 to-amber-400 transition-opacity"
          style={{
            left: `${p.x}px`,
            top: `${p.y}px`,
            width: `${p.size}px`,
            height: `${p.size}px`,
            opacity: p.opacity,
            transform: 'translate(-50%, -50%)',
            boxShadow: '0 0 10px rgba(249, 115, 22, 0.9)',
          }}
        />
      ))}

      {/* Outer Follower Ring / Reticle */}
      <div
        className={`absolute rounded-full transition-all duration-150 ease-out flex items-center justify-center ${
          hoverState === 'card'
            ? 'w-16 h-16 border-2 border-dashed border-amber-400 bg-orange-950/20 scale-125 rotate-45'
            : hoverState === 'button'
            ? 'w-14 h-14 border border-orange-400 bg-orange-500/15 scale-125 shadow-[0_0_25px_rgba(249,115,22,0.5)]'
            : 'w-8 h-8 border border-orange-500/80 scale-100 shadow-[0_0_12px_rgba(234,88,12,0.3)]'
        }`}
        style={{
          left: `${followerPos.x}px`,
          top: `${followerPos.y}px`,
          transform: 'translate(-50%, -50%)',
        }}
      >
        {hoverState === 'card' ? (
          <div className="text-[9px] font-mono text-amber-300 font-bold -rotate-45 tracking-widest">
            TARGET
          </div>
        ) : (
          <div
            className={`w-1.5 h-1.5 rounded-full bg-orange-400/60 transition-transform ${
              hoverState === 'button' ? 'scale-150 bg-amber-300' : ''
            }`}
          />
        )}
      </div>

      {/* Small Glowing Center Point */}
      <div
        className="absolute w-2 h-2 rounded-full bg-orange-400 shadow-[0_0_14px_#f97316]"
        style={{
          left: `${pos.x}px`,
          top: `${pos.y}px`,
          transform: 'translate(-50%, -50%)',
        }}
      />
    </div>
  );
};
