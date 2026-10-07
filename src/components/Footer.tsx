import React from 'react';
import { sfx } from '../utils/soundFx';

interface FooterProps {
  onScrollToTop: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onScrollToTop }) => {
  return (
    <footer className="border-t border-orange-500/30 bg-[#080605] py-10 px-4 sm:px-6 lg:px-8 relative font-mono text-xs z-10">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center space-x-2.5">
          <span className="w-2 h-2 bg-orange-500 rounded-full animate-pulse" />
          <span className="text-orange-400 font-bold tracking-widest uppercase">
            PREETAM KAMATE // PERSONAL ARCHIVE
          </span>
        </div>

        <div className="text-amber-500/60 text-[11px] text-center">
          RETRO-FUTURISTIC CHRONO TERMINAL // BENGALURU, KARNATAKA
        </div>

        <button
          onClick={() => {
            sfx.click();
            onScrollToTop();
          }}
          className="text-orange-400 hover:text-orange-200 border border-orange-500/40 px-3 py-1.5 bg-[#120e0b] hover:bg-orange-500/20 transition-all rounded-xs cursor-pointer"
          data-cursor-interact
        >
          [ TOP_RETURN ]
        </button>
      </div>
    </footer>
  );
};
