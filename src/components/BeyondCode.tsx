import React from 'react';
import { Globe } from 'lucide-react';
import { BEYOND_CODE_LANGUAGES } from '../data/portfolioData';
import { sfx } from '../utils/soundFx';

export const BeyondCode: React.FC = () => {
  return (
    <section id="beyond" className="py-16 px-4 sm:px-6 lg:px-8 border-t border-orange-500/20 bg-[#090706]">
      <div className="max-w-4xl mx-auto">
        <div className="border border-orange-500/30 bg-[#120e0b]/80 p-6 sm:p-7 rounded-xs flex flex-col sm:flex-row sm:items-center justify-between gap-6 shadow-[0_0_20px_rgba(234,88,12,0.1)]">
          <div className="space-y-1">
            <span className="text-[10px] font-mono text-orange-500 tracking-widest uppercase block">
              LINGUISTIC_CHANNELS // ARCHIVE
            </span>
            <h3 className="font-mono text-xl font-bold text-amber-100 flex items-center space-x-2">
              <Globe className="w-5 h-5 text-orange-400" />
              <span>BEYOND CODE</span>
            </h3>
          </div>

          <div className="flex flex-wrap gap-3 font-mono text-xs">
            {BEYOND_CODE_LANGUAGES.map((lang) => (
              <div
                key={lang}
                onMouseEnter={() => sfx.hover()}
                className="px-4 py-2 bg-[#1b140f] border border-orange-500/30 hover:border-orange-500/80 text-amber-200 rounded-xs flex items-center space-x-2.5 transition-all duration-200 hover:-translate-y-0.5 cursor-default"
                data-cursor-interact
              >
                <span className="w-2 h-2 rounded-full bg-orange-400 shadow-[0_0_6px_#f97316]" />
                <span className="font-semibold">{lang}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
