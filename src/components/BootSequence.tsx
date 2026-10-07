import React, { useState, useEffect, useMemo } from 'react';
import { ClockMascot } from './ClockMascot';
import { sfx } from '../utils/soundFx';

interface BootSequenceProps {
  onComplete: () => void;
}

export const BootSequence: React.FC<BootSequenceProps> = ({ onComplete }) => {
  const [phase, setPhase] = useState<number>(0);
  const [typedTitle, setTypedTitle] = useState<string>('');
  const [typedSubtitle, setTypedSubtitle] = useState<string>('');

  const fullName = 'PREETAM KAMATE';
  const fullSub = 'AI & MACHINE LEARNING STUDENT';

  useEffect(() => {
    // Step progression timer
    const t1 = setTimeout(() => {
      setPhase(1); // Technical lines appear
      sfx.blip();
    }, 300);

    const t2 = setTimeout(() => {
      setPhase(2); // Grid activates
      sfx.click();
    }, 700);

    const t3 = setTimeout(() => {
      setPhase(3); // Clock rings draw
      sfx.blip();
    }, 1100);

    const t4 = setTimeout(() => {
      setPhase(4); // Clock mascot appears
      sfx.beep(760, 0.08, 'triangle', 0.035);
    }, 1600);

    const t5 = setTimeout(() => {
      setPhase(5); // Start typing PREETAM KAMATE
      let charIdx = 0;
      const typeInterval = setInterval(() => {
        if (charIdx <= fullName.length) {
          setTypedTitle(fullName.slice(0, charIdx));
          sfx.click();
          charIdx++;
        } else {
          clearInterval(typeInterval);
          setPhase(6); // Start typing subtitle
          let subIdx = 0;
          const subInterval = setInterval(() => {
            if (subIdx <= fullSub.length) {
              setTypedSubtitle(fullSub.slice(0, subIdx));
              sfx.click();
              subIdx++;
            } else {
              clearInterval(subInterval);
              setPhase(7);
              sfx.warp();
              setTimeout(() => {
                onComplete();
              }, 700);
            }
          }, 30);
        }
      }, 45);
    }, 2100);

    // Escape key listener to skip immediately
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' || e.key === 'Enter') {
        sfx.warp();
        onComplete();
      }
    };
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      clearTimeout(t4);
      clearTimeout(t5);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onComplete]);

  return (
    <div className="fixed inset-0 z-50 bg-[#070605] flex flex-col items-center justify-center p-6 text-orange-500 font-mono select-none overflow-hidden">
      {/* Step 1: Scanlines and Vignette */}
      <div className="absolute inset-0 pointer-events-none crt-overlay opacity-60" />
      <div className="absolute inset-0 pointer-events-none crt-vignette" />

      {/* Step 2: Technical Grid Activation */}
      <div
        className={`absolute inset-0 retro-grid-bg pointer-events-none transition-opacity duration-700 ${
          phase >= 2 ? 'opacity-20' : 'opacity-0'
        }`}
      />

      {/* Step 1: Technical Orange Boundary Lines */}
      <div
        className={`absolute top-10 inset-x-8 sm:inset-x-16 border-t border-orange-500/50 flex justify-between text-[10px] tracking-widest text-orange-400/80 pt-2 transition-all duration-500 ${
          phase >= 1 ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'
        }`}
      >
        <span>SYS//INIT_BOOT_CYCLE</span>
        <span>CHIP: PK-AIML_v2026</span>
        <span>COORD: 12.9716°N 77.5946°E</span>
      </div>

      <div
        className={`absolute bottom-10 inset-x-8 sm:inset-x-16 border-b border-orange-500/50 flex justify-between text-[10px] tracking-widest text-orange-400/80 pb-2 transition-all duration-500 ${
          phase >= 1 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`}
      >
        <span>FREQ: 24.08 GHz</span>
        <span>STATUS: MOUNTING_AI_CORES</span>
        <button
          onClick={() => {
            sfx.warp();
            onComplete();
          }}
          className="border border-orange-500/60 bg-orange-950/40 px-2 py-0.5 text-amber-300 hover:bg-orange-500 hover:text-black transition-colors rounded-xs cursor-pointer"
        >
          [ ESC: SKIP_BOOT ]
        </button>
      </div>

      {/* Central Startup Staging Box */}
      <div className="relative z-10 flex flex-col items-center justify-center max-w-lg w-full text-center space-y-6">
        {/* Step 3 & 4: Clock Mascot & Rotating Concentric Rings */}
        <div
          className={`relative transition-all duration-700 transform ${
            phase >= 3 ? 'opacity-100 scale-100' : 'opacity-0 scale-75'
          }`}
        >
          {phase >= 4 ? (
            <ClockMascot isBooting />
          ) : (
            // Ring drawing placeholder animation
            <div className="w-24 h-24 rounded-full border-2 border-dashed border-orange-500 animate-spin flex items-center justify-center">
              <span className="w-4 h-4 rounded-full bg-orange-500 animate-ping" />
            </div>
          )}
        </div>

        {/* Step 5: Name Reveal */}
        <div className="min-h-[50px] flex items-center justify-center">
          {phase >= 5 && (
            <h1 className="text-3xl sm:text-5xl font-mono font-extrabold tracking-wider text-amber-100 drop-shadow-[0_0_20px_rgba(249,115,22,0.6)]">
              {typedTitle}
              {phase === 5 && <span className="inline-block w-2.5 h-7 bg-orange-500 ml-1 animate-pulse" />}
            </h1>
          )}
        </div>

        {/* Step 6: Subtitle Reveal */}
        <div className="min-h-[30px] flex items-center justify-center">
          {phase >= 6 && (
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 rounded-full bg-orange-400 animate-ping" />
              <p className="text-sm sm:text-base font-mono text-orange-400 font-semibold tracking-widest uppercase">
                {typedSubtitle}
                {phase === 6 && <span className="inline-block w-2 h-4 bg-orange-500 ml-1 animate-pulse" />}
              </p>
            </div>
          )}
        </div>

        {/* Progress Bar */}
        <div className="w-48 sm:w-64 h-1.5 bg-[#17110d] rounded-full overflow-hidden border border-orange-500/30">
          <div
            className="h-full bg-gradient-to-r from-orange-600 via-amber-500 to-orange-400 transition-all duration-300"
            style={{ width: `${Math.min(100, (phase / 7) * 100)}%` }}
          />
        </div>
      </div>
    </div>
  );
};
