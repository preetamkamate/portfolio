import React, { useEffect, useRef, useState } from 'react';
import { Terminal, MapPin, Award, BookOpen, User, CheckCircle2 } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const About: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.15 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="py-24 px-4 sm:px-6 lg:px-8 border-t border-orange-500/20 relative overflow-hidden"
    >
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Section Header */}
        <div
          className={`flex items-center justify-between border-b border-orange-500/30 pb-4 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          <div>
            <span className="text-xs font-mono text-orange-500 tracking-widest block uppercase">
              SYS_TELEMETRY // ARCHIVE
            </span>
            <h2 className="text-3xl sm:text-4xl font-mono font-bold text-amber-100 flex items-center space-x-3">
              <span>01 // ABOUT ME</span>
            </h2>
          </div>
          <div className="hidden sm:flex items-center space-x-2 font-mono text-xs text-orange-400/80 bg-orange-950/20 px-3 py-1 border border-orange-500/25">
            <MapPin className="w-3.5 h-3.5 text-orange-500" />
            <span>LOC: {PERSONAL_INFO.location.toUpperCase()}</span>
          </div>
        </div>

        {/* Content Panels */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Bio Narrative Card */}
          <div
            className={`lg:col-span-7 bg-[#100d0b]/85 border border-orange-500/35 p-6 sm:p-8 rounded-xs relative flex flex-col justify-between transition-all duration-700 delay-150 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            {/* Corner Bracket Frame */}
            <div className="absolute top-2 right-3 font-mono text-[10px] text-orange-500/60">
              REC_ID: #PK-2005
            </div>

            <div>
              <div className="flex items-center space-x-2 pb-3 mb-5 border-b border-orange-500/20">
                <Terminal className="w-4 h-4 text-orange-500" />
                <h3 className="font-mono text-sm tracking-widest text-orange-400 font-bold uppercase">
                  PERSONAL_SUMMARY.DAT
                </h3>
              </div>

              <blockquote className="text-base sm:text-lg text-amber-100/90 leading-relaxed font-sans mb-6 border-l-2 border-orange-500/50 pl-4 italic">
                "{PERSONAL_INFO.about}"
              </blockquote>

              <p className="text-sm text-amber-200/75 leading-relaxed font-sans">
                Dedicated to developing intelligent data-driven architectures from raw ingestion to model deployment. Actively exploring supervised learning, gradient boosting optimizations, network intrusion forensics, and vector similarity search.
              </p>
            </div>

            {/* Academic Highlights & Focus */}
            <div className="border-t border-orange-500/20 pt-5 mt-6 space-y-3 font-mono text-xs">
              <div className="flex items-center justify-between py-1.5 border-b border-orange-500/10">
                <span className="text-orange-400/80">PRIMARY_FOCUS:</span>
                <span className="text-amber-200">Applied Machine Learning & Data Pipelines</span>
              </div>
              <div className="flex items-center justify-between py-1.5 border-b border-orange-500/10">
                <span className="text-orange-400/80">CORE_ORIENTATION:</span>
                <span className="text-amber-200">Practical Model Architecture & Evaluation</span>
              </div>
              <div className="flex items-center justify-between py-1.5">
                <span className="text-orange-400/80">INTERFACE_STATUS:</span>
                <span className="text-emerald-400 flex items-center">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse mr-2" />
                  ACTIVE_RESEARCH
                </span>
              </div>
            </div>
          </div>

          {/* Profile Specification Panel */}
          <div
            className={`lg:col-span-5 bg-[#120e0c]/90 border border-orange-500/40 p-6 sm:p-7 rounded-xs relative shadow-[0_0_25px_rgba(234,88,12,0.12)] flex flex-col justify-between transition-all duration-700 delay-300 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <div className="flex items-center justify-between pb-3 border-b border-orange-500/30 mb-5">
              <span className="font-mono text-xs tracking-widest text-orange-400 font-bold uppercase flex items-center space-x-2">
                <User className="w-3.5 h-3.5 text-orange-500" />
                <span>SPECIFICATION_PANEL</span>
              </span>
              <span className="text-[10px] font-mono text-amber-500/70">ID: PK-AIML</span>
            </div>

            <div className="space-y-4 font-mono text-xs">
              <div className="p-2.5 bg-[#181310] border border-orange-500/20 rounded-xs">
                <span className="text-[10px] text-orange-500/70 uppercase tracking-widest block">NAME</span>
                <span className="text-base text-amber-100 font-semibold">{PERSONAL_INFO.name}</span>
              </div>

              <div className="p-2.5 bg-[#181310] border border-orange-500/20 rounded-xs">
                <span className="text-[10px] text-orange-500/70 uppercase tracking-widest block">FIELD</span>
                <span className="text-sm text-amber-100">{PERSONAL_INFO.title}</span>
              </div>

              <div className="p-2.5 bg-[#181310] border border-orange-500/20 rounded-xs">
                <span className="text-[10px] text-orange-500/70 uppercase tracking-widest block">COLLEGE</span>
                <span className="text-sm text-amber-100">{PERSONAL_INFO.college}</span>
              </div>

              <div className="p-2.5 bg-[#181310] border border-orange-500/20 rounded-xs">
                <span className="text-[10px] text-orange-500/70 uppercase tracking-widest block">LOCATION</span>
                <span className="text-sm text-amber-100">{PERSONAL_INFO.location}</span>
              </div>

              {/* Verified CGPA Metric Badge */}
              <div className="p-3.5 bg-gradient-to-r from-orange-950/40 to-amber-950/20 border border-orange-500/50 rounded-xs">
                <span className="text-[10px] text-orange-400 uppercase tracking-widest block font-bold">
                  ACADEMIC CGPA
                </span>
                <div className="flex items-baseline space-x-2 mt-1">
                  <span className="text-3xl font-extrabold text-amber-300 font-mono">9.06</span>
                  <span className="text-sm text-amber-400/80 font-mono">/ 10</span>
                  <span className="text-[11px] text-orange-400/70 font-mono ml-auto">Verified 4th Sem</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
