import React, { useState, useEffect, useRef } from 'react';
import { sfx } from '../utils/soundFx';

interface ClockMascotProps {
  isBooting?: boolean;
}

export const ClockMascot: React.FC<ClockMascotProps> = ({ isBooting = false }) => {
  const [blink, setBlink] = useState(false);
  const [isWinking, setIsWinking] = useState(false);
  const [hourAngle, setHourAngle] = useState(45);
  const [minuteAngle, setMinuteAngle] = useState(210);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement | null>(null);

  // Blinking timer & clock movement
  useEffect(() => {
    const blinkInterval = setInterval(() => {
      setBlink(true);
      setTimeout(() => setBlink(false), 160);
    }, 3600);

    const clockTimer = setInterval(() => {
      setHourAngle((h) => (h + 0.25) % 360);
      setMinuteAngle((m) => (m + 1.8) % 360);
    }, 100);

    return () => {
      clearInterval(blinkInterval);
      clearInterval(clockTimer);
    };
  }, []);

  // Subtle interactive mouse parallax
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (isBooting || !containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    const dx = (e.clientX - cx) / (rect.width / 2);
    const dy = (e.clientY - cy) / (rect.height / 2);
    setTilt({ x: dx * 10, y: -dy * 10 });
  };

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0 });
  };

  const handleMascotClick = () => {
    sfx.warp();
    setIsWinking(true);
    setTimeout(() => setIsWinking(false), 600);
  };

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={handleMascotClick}
      className={`relative ${
        isBooting ? 'w-24 h-24' : 'w-72 h-72 sm:w-80 sm:h-80 md:w-96 md:h-96'
      } flex items-center justify-center select-none cursor-pointer group`}
      style={{
        transform: `perspective(800px) rotateY(${tilt.x}deg) rotateX(${tilt.y}deg)`,
        transition: 'transform 0.15s ease-out',
      }}
      title="Click to interact with Chrono Mascot"
      data-cursor-interact
    >
      {/* Outer Rotating Radar Chrono Rings */}
      <div className="absolute inset-0 rounded-full border border-orange-500/25 animate-[spin_40s_linear_infinite]" />
      <div className="absolute inset-2 sm:inset-3 rounded-full border border-dashed border-orange-500/40 animate-[spin_25s_linear_infinite_reverse]" />
      <div className="absolute inset-6 sm:inset-8 rounded-full border border-amber-500/30" />

      {/* Radial Dial Ticks */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        {[0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330].map((deg) => (
          <div
            key={deg}
            className="absolute w-full h-full flex justify-between items-center py-2 px-3"
            style={{ transform: `rotate(${deg}deg)` }}
          >
            <span className="w-2.5 h-[1.5px] bg-orange-500/50" />
            <span className="w-2.5 h-[1.5px] bg-orange-500/50" />
          </div>
        ))}
      </div>

      {/* Futuristic Telemetry Coordinate Badges */}
      {!isBooting && (
        <>
          <div className="absolute -top-3 left-1/2 -translate-x-1/2 text-[9px] font-mono tracking-widest text-orange-400/90 bg-[#0c0a08] px-2.5 py-0.5 border border-orange-500/35 shadow-[0_0_10px_rgba(234,88,12,0.2)]">
            OSC//CHRONO_CORE
          </div>
          <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 text-[9px] font-mono tracking-widest text-amber-500/80 bg-[#0c0a08] px-2.5 py-0.5 border border-amber-500/35 shadow-[0_0_10px_rgba(234,88,12,0.2)]">
            LAT: 12.97°N // 24.08 GHz
          </div>
        </>
      )}

      {/* Central Mascot SVG Character */}
      <div
        className={`relative ${
          isBooting ? 'w-20 h-20' : 'w-52 h-52 sm:w-60 sm:h-60 md:w-64 md:h-64'
        } z-10 transition-transform duration-300 group-hover:scale-105`}
      >
        <svg
          viewBox="0 0 240 240"
          className="w-full h-full drop-shadow-[0_0_30px_rgba(234,88,12,0.45)]"
        >
          {/* Subtle Outer Dial Ring */}
          <circle
            cx="120"
            cy="120"
            r="108"
            fill="none"
            stroke="#ea580c"
            strokeWidth="2"
            strokeDasharray="6 4"
            opacity="0.6"
          />

          {/* Main Body Chassis */}
          <circle cx="120" cy="120" r="98" fill="#140f0c" stroke="#f97316" strokeWidth="4.5" />
          <circle cx="120" cy="120" r="90" fill="#22160f" stroke="#ea580c" strokeWidth="1.5" />

          {/* Clock Mascot Eyes */}
          <g>
            {/* Left Eye */}
            {blink ? (
              <line
                x1="76"
                y1="94"
                x2="102"
                y2="94"
                stroke="#fbbf24"
                strokeWidth="4.5"
                strokeLinecap="round"
              />
            ) : (
              <g>
                <ellipse cx="89" cy="93" rx="12" ry="16" fill="#fef3c7" />
                <ellipse cx="92" cy="93" rx="7" ry="10" fill="#ea580c" />
                <circle cx="94" cy="90" r="3" fill="#ffffff" />
                {/* Vintage retro pie wedge cutout */}
                <path d="M 89 93 L 96 89 A 8 8 0 0 0 93 85 Z" fill="#22160f" />
              </g>
            )}

            {/* Right Eye (winks when clicked!) */}
            {blink || isWinking ? (
              <path
                d="M 137 94 Q 150 102 163 94"
                fill="none"
                stroke="#fbbf24"
                strokeWidth="4"
                strokeLinecap="round"
              />
            ) : (
              <g>
                <ellipse cx="151" cy="93" rx="12" ry="16" fill="#fef3c7" />
                <ellipse cx="154" cy="93" rx="7" ry="10" fill="#ea580c" />
                <circle cx="156" cy="90" r="3" fill="#ffffff" />
                <path d="M 151 93 L 158 89 A 8 8 0 0 0 155 85 Z" fill="#22160f" />
              </g>
            )}
          </g>

          {/* Cute Retro Expression Smile */}
          <path
            d="M 85 132 Q 120 166 155 132"
            fill="none"
            stroke="#fed7aa"
            strokeWidth="3.8"
            strokeLinecap="round"
          />
          {/* Dimple Accents */}
          <circle cx="83" cy="130" r="2.5" fill="#ea580c" />
          <circle cx="157" cy="130" r="2.5" fill="#ea580c" />

          {/* Analog Hands (Hour & Minute) emanating from nose pivot */}
          <g>
            {/* Hour Hand */}
            <line
              x1="120"
              y1="120"
              x2={120 + 38 * Math.cos(((hourAngle - 90) * Math.PI) / 180)}
              y2={120 + 38 * Math.sin(((hourAngle - 90) * Math.PI) / 180)}
              stroke="#fbbf24"
              strokeWidth="4"
              strokeLinecap="round"
            />
            {/* Minute Hand */}
            <line
              x1="120"
              y1="120"
              x2={120 + 56 * Math.cos(((minuteAngle - 90) * Math.PI) / 180)}
              y2={120 + 56 * Math.sin(((minuteAngle - 90) * Math.PI) / 180)}
              stroke="#f97316"
              strokeWidth="2.5"
              strokeLinecap="round"
            />
            {/* Center Pivot Pin */}
            <circle cx="120" cy="120" r="5" fill="#fef3c7" stroke="#ea580c" strokeWidth="2" />
          </g>

          {/* Retro Bottom Bowtie Gauge Motif */}
          <path
            d="M 106 182 L 120 190 L 106 198 Z M 134 182 L 120 190 L 134 198 Z"
            fill="#f97316"
            stroke="#ea580c"
          />
          <circle cx="120" cy="190" r="3.5" fill="#fef3c7" />

          {/* Retro Top Twin Oscillator Antenna Bells */}
          <circle cx="56" cy="48" r="10" fill="#2d1c13" stroke="#ea580c" strokeWidth="2.5" />
          <line x1="68" y1="58" x2="80" y2="70" stroke="#ea580c" strokeWidth="3" />
          <circle cx="184" cy="48" r="10" fill="#2d1c13" stroke="#ea580c" strokeWidth="2.5" />
          <line x1="172" y1="58" x2="160" y2="70" stroke="#ea580c" strokeWidth="3" />
        </svg>

        {/* Ambient Pulsing Radar Blip */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 rounded-full border border-orange-500/20 animate-ping pointer-events-none" />
      </div>
    </div>
  );
};
