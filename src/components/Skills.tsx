import React from 'react';
import { Code2, Cpu, Database, Sliders, CheckCircle2, Terminal } from 'lucide-react';
import { SKILL_CATEGORIES } from '../data/portfolioData';
import { sfx } from '../utils/soundFx';

export const Skills: React.FC = () => {
  const getCategoryIcon = (iconName: string) => {
    switch (iconName) {
      case 'Code2':
        return <Code2 className="w-4 h-4 text-orange-400" />;
      case 'Cpu':
        return <Cpu className="w-4 h-4 text-orange-400" />;
      case 'Database':
        return <Database className="w-4 h-4 text-orange-400" />;
      case 'Sliders':
      default:
        return <Sliders className="w-4 h-4 text-orange-400" />;
    }
  };

  return (
    <section
      id="skills"
      className="py-24 px-4 sm:px-6 lg:px-8 border-t border-orange-500/20 bg-[#0a0807]/60 relative"
    >
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between border-b border-orange-500/30 pb-4 gap-2">
          <div>
            <span className="text-xs font-mono text-orange-500 tracking-widest block uppercase">
              COMPETENCIES // VERIFIED_STACK
            </span>
            <h2 className="text-3xl sm:text-4xl font-mono font-bold text-amber-100">
              02 // SKILLS
            </h2>
          </div>
          <div className="flex items-center space-x-3 font-mono text-xs text-orange-400/80">
            <span className="px-2.5 py-1 bg-orange-950/30 border border-orange-500/25 rounded-xs flex items-center">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse mr-2" />
              17 ACTIVE COMPETENCIES
            </span>
          </div>
        </div>

        {/* Categorized Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SKILL_CATEGORIES.map((cat, idx) => (
            <div
              key={cat.title}
              className="border border-orange-500/30 bg-[#120e0b]/85 p-5 rounded-xs space-y-4 hover:border-orange-500/60 transition-all duration-300 hover:shadow-[0_0_20px_rgba(234,88,12,0.15)] flex flex-col justify-between group"
            >
              <div className="space-y-4">
                {/* Header */}
                <div className="flex items-center justify-between pb-2 border-b border-orange-500/20">
                  <div className="flex items-center space-x-2">
                    {getCategoryIcon(cat.iconName)}
                    <h3 className="font-mono text-xs font-bold tracking-widest text-orange-300 uppercase">
                      {cat.title}
                    </h3>
                  </div>
                  <span className="text-[10px] font-mono text-stone-500">
                    0{idx + 1}
                  </span>
                </div>

                {/* Skill Items */}
                <div className="space-y-2">
                  {cat.skills.map((skill) => (
                    <div
                      key={skill}
                      onMouseEnter={() => sfx.hover()}
                      className="px-3 py-2 bg-[#1a130f] border border-orange-500/20 hover:border-orange-500/70 rounded-xs flex items-center justify-between group/item transition-all duration-200 cursor-default"
                      data-cursor-interact
                    >
                      <span className="font-mono text-xs text-amber-100 font-medium group-hover/item:text-orange-300 transition-colors">
                        {skill}
                      </span>
                      <div className="flex items-center space-x-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-orange-500/40 group-hover/item:bg-orange-400 group-hover/item:shadow-[0_0_6px_#f97316] transition-all" />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Technical category footer indicator */}
              <div className="pt-3 border-t border-orange-500/10 flex items-center justify-between text-[10px] font-mono text-orange-500/60">
                <span>REGISTERED</span>
                <span>{cat.skills.length} UNITS</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
