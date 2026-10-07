import React from 'react';
import { ArrowUpRight, Terminal, Sparkles } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import { ClockMascot } from './ClockMascot';
import { PERSONAL_INFO } from '../data/portfolioData';
import { sfx } from '../utils/soundFx';

interface HeroProps {
  onExplore: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExplore }) => {
  return (
    <section
      id="home"
      className="min-h-screen relative flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-20 pb-16 overflow-hidden"
    >
      {/* Subtle Corner Brackets for Archival Interface */}
      <div className="absolute top-20 left-6 sm:left-10 text-orange-500/40 font-mono text-[11px] select-none pointer-events-none hidden sm:block">
        ┌── [RAD_SYS_01] ───────────────
      </div>
      <div className="absolute top-20 right-6 sm:right-10 text-orange-500/40 font-mono text-[11px] select-none pointer-events-none hidden sm:block">
        ─────────────── [SEC_ACTIVE] ──┐
      </div>
      <div className="absolute bottom-8 left-6 sm:left-10 text-orange-500/40 font-mono text-[11px] select-none pointer-events-none hidden sm:block">
        └── [STREAM_V6] ───────────────
      </div>
      <div className="absolute bottom-8 right-6 sm:right-10 text-orange-500/40 font-mono text-[11px] select-none pointer-events-none hidden sm:block">
        ─────────────── [FREQ_NORM] ──┘
      </div>

      <div className="max-w-6xl w-full mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
        {/* Left Hero Text Block */}
        <div className="lg:col-span-7 space-y-6 text-left">
          {/* Terminal System Status Badge */}
          <div className="inline-flex items-center space-x-2 border border-orange-500/40 bg-orange-950/20 px-3 py-1 rounded-xs">
            <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse" />
            <span className="text-xs font-mono tracking-widest text-orange-400 font-semibold">
              ARCHIVAL_STATION // PERSONAL_INTERFACE
            </span>
          </div>

          {/* Main Title & Subtitle */}
          <div className="space-y-2">
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight font-mono text-transparent bg-clip-text bg-gradient-to-r from-amber-100 via-orange-300 to-amber-500 drop-shadow-[0_2px_15px_rgba(234,88,12,0.35)]">
              {PERSONAL_INFO.name}
            </h1>
            <div className="flex items-center space-x-3 pt-1">
              <div className="h-[2px] w-8 sm:w-12 bg-orange-500" />
              <p className="text-lg sm:text-2xl font-mono tracking-wider text-orange-400 font-bold">
                {PERSONAL_INFO.title}
              </p>
            </div>
          </div>

          {/* Introduction Quote */}
          <p className="text-base sm:text-lg text-amber-100/90 max-w-xl leading-relaxed font-sans font-normal border-l-2 border-orange-500/50 pl-4 py-1 bg-gradient-to-r from-orange-950/10 to-transparent">
            "{PERSONAL_INFO.intro}"
          </p>

          {/* Technical Telemetry Strip */}
          <div className="grid grid-cols-3 gap-3 pt-2 font-mono text-[11px] max-w-lg">
            <div className="p-2.5 border border-orange-500/30 bg-[#120e0c]/80 rounded-xs">
              <span className="text-orange-500/70 block text-[10px] tracking-widest uppercase">ENROLLMENT</span>
              <span className="text-amber-200 font-semibold text-xs sm:text-sm">{PERSONAL_INFO.semester}</span>
            </div>
            <div className="p-2.5 border border-orange-500/30 bg-[#120e0c]/80 rounded-xs">
              <span className="text-orange-500/70 block text-[10px] tracking-widest uppercase">ACADEMIC_CGPA</span>
              <span className="text-orange-400 font-bold text-xs sm:text-sm">{PERSONAL_INFO.cgpa}</span>
            </div>
            <div className="p-2.5 border border-orange-500/30 bg-[#120e0c]/80 rounded-xs">
              <span className="text-orange-500/70 block text-[10px] tracking-widest uppercase">NIDS_ACCURACY</span>
              <span className="text-amber-400 font-bold text-xs sm:text-sm">99.8% XGB</span>
            </div>
          </div>

          {/* Action Navigation Buttons */}
          <div className="flex flex-wrap items-center gap-4 pt-4">
            <button
              onClick={() => {
                sfx.click();
                onExplore();
              }}
              data-cursor-interact
              data-magnetic
              className="px-6 py-3.5 bg-gradient-to-r from-orange-600 via-amber-600 to-orange-500 hover:from-orange-500 hover:to-amber-500 text-stone-950 font-mono font-bold text-sm tracking-wider uppercase rounded-xs transition-all shadow-[0_0_25px_rgba(234,88,12,0.45)] hover:shadow-[0_0_35px_rgba(234,88,12,0.7)] flex items-center space-x-2 cursor-pointer active:scale-95"
            >
              <span>[ EXPLORE ]</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>

            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noreferrer"
              onClick={() => sfx.click()}
              data-cursor-interact
              data-magnetic
              className="px-6 py-3.5 border border-orange-500/60 bg-[#120e0c]/80 hover:bg-orange-500/20 text-orange-300 hover:text-orange-200 font-mono text-sm tracking-wider uppercase rounded-xs transition-all flex items-center space-x-2 cursor-pointer"
            >
              <GithubIcon className="w-4 h-4 text-orange-400" />
              <span>[ GITHUB ]</span>
            </a>

            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noreferrer"
              onClick={() => sfx.click()}
              data-cursor-interact
              data-magnetic
              className="px-6 py-3.5 border border-orange-500/60 bg-[#120e0c]/80 hover:bg-orange-500/20 text-orange-300 hover:text-orange-200 font-mono text-sm tracking-wider uppercase rounded-xs transition-all flex items-center space-x-2 cursor-pointer"
            >
              <LinkedinIcon className="w-4 h-4 text-orange-400" />
              <span>[ LINKEDIN ]</span>
            </a>
          </div>
        </div>

        {/* Right Hero Mascot & Chrono-Rings Interface */}
        <div className="lg:col-span-5 flex flex-col items-center justify-center relative">
          <ClockMascot />
          <div className="mt-4 flex items-center space-x-2 font-mono text-[10px] text-orange-500/70 tracking-widest uppercase">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-400 animate-pulse" />
            <span>ORIGINAL CHRONO MASCOT // ACTIVE</span>
          </div>
        </div>
      </div>
    </section>
  );
};
