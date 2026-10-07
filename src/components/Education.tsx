import React, { useEffect, useRef, useState } from 'react';
import { EDUCATION_DATA } from '../data/portfolioData';
import { Award, GraduationCap, Calendar, CheckCircle2 } from 'lucide-react';
import { sfx } from '../utils/soundFx';

export const Education: React.FC = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  // Dynamic scroll-drawing line calculation
  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // Start drawing when top enters lower half of window, finish when bottom reaches upper third
      const totalDist = rect.height + windowHeight * 0.4;
      const currentDist = windowHeight - rect.top;
      const progress = Math.min(1, Math.max(0, currentDist / totalDist));
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section
      id="education"
      className="py-24 px-4 sm:px-6 lg:px-8 border-t border-orange-500/20 bg-[#0a0806]/50 relative"
    >
      <div className="max-w-4xl mx-auto space-y-12">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between border-b border-orange-500/30 pb-4 gap-2">
          <div>
            <span className="text-xs font-mono text-orange-500 tracking-widest block uppercase">
              CHRONOLOGICAL_ACADEMICS // ARCHIVE
            </span>
            <h2 className="text-3xl sm:text-4xl font-mono font-bold text-amber-100">
              04 // EDUCATION
            </h2>
          </div>
          <span className="font-mono text-xs text-orange-400/80">
            TIMELINE_NODES: 03 RECORDED
          </span>
        </div>

        {/* Vertical Animated Timeline */}
        <div ref={containerRef} className="relative pl-8 sm:pl-10 my-8 space-y-12">
          {/* Static background track line */}
          <div className="absolute left-[13px] sm:left-[17px] top-4 bottom-4 w-[2px] bg-stone-800/80 pointer-events-none" />

          {/* Dynamic drawing foreground line */}
          <div
            className="absolute left-[13px] sm:left-[17px] top-4 w-[2px] bg-gradient-to-b from-orange-500 via-amber-400 to-orange-600 transition-all duration-150 shadow-[0_0_10px_#f97316] pointer-events-none"
            style={{
              height: `${scrollProgress * 95}%`,
            }}
          />

          {EDUCATION_DATA.map((item, idx) => {
            const isNodePassed = scrollProgress >= (idx + 0.3) / EDUCATION_DATA.length;

            return (
              <div
                key={item.id}
                onMouseEnter={() => sfx.hover()}
                className="relative group transition-all duration-300"
              >
                {/* Node Ring and Pulse */}
                <div
                  className={`absolute -left-[35px] sm:-left-[39px] top-1.5 w-6 h-6 rounded-full bg-[#120e0c] border-2 transition-all duration-300 flex items-center justify-center ${
                    isNodePassed
                      ? 'border-orange-400 shadow-[0_0_12px_rgba(249,115,22,0.8)]'
                      : 'border-stone-700'
                  }`}
                >
                  <div
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      isNodePassed
                        ? 'bg-amber-300 scale-125 shadow-[0_0_6px_#fbbf24]'
                        : 'bg-stone-600'
                    }`}
                  />
                </div>

                {/* Timeline Card */}
                <div className="bg-[#120e0c]/90 border border-orange-500/30 group-hover:border-orange-400 p-6 sm:p-7 rounded-xs space-y-3 transition-all duration-300 group-hover:shadow-[0_0_25px_rgba(234,88,12,0.2)]">
                  {/* Top Bar with Period and Metric Score */}
                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <div className="flex items-center space-x-2 font-mono text-xs text-orange-400 font-bold">
                      <Calendar className="w-3.5 h-3.5 text-orange-500" />
                      <span>{item.period}</span>
                    </div>

                    <div className="px-3 py-1 bg-gradient-to-r from-orange-950/50 to-amber-950/40 border border-orange-500/40 rounded-xs flex items-center space-x-2">
                      <Award className="w-3.5 h-3.5 text-amber-400" />
                      <span className="font-mono text-xs font-bold text-amber-300">
                        {item.metricLabel}: {item.metricValue}
                      </span>
                    </div>
                  </div>

                  {/* Institution Title */}
                  <h3 className="font-mono text-lg sm:text-xl font-bold text-amber-100 group-hover:text-orange-300 transition-colors">
                    {item.institution}
                  </h3>

                  {/* Degree / Stream */}
                  <div className="flex items-center space-x-2 text-sm text-orange-400 font-mono">
                    <GraduationCap className="w-4 h-4 text-orange-500 shrink-0" />
                    <span>
                      {item.degree}
                      {item.field ? ` — ${item.field}` : ''}
                    </span>
                  </div>

                  {/* Description */}
                  {item.description && (
                    <p className="text-xs sm:text-sm text-amber-200/80 font-sans leading-relaxed pt-1">
                      {item.description}
                    </p>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
