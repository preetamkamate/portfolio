import React, { useState, useRef } from 'react';
import { ExternalLink, Activity, Sparkles, CheckCircle2 } from 'lucide-react';
import { GithubIcon } from './Icons';
import { Project } from '../types';
import { sfx } from '../utils/soundFx';

interface ProjectCardProps {
  project: Project;
  isCompact?: boolean;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, isCompact = false }) => {
  const cardRef = useRef<HTMLDivElement | null>(null);
  const [transform, setTransform] = useState<string>('perspective(1000px) rotateX(0deg) rotateY(0deg)');
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current || window.innerWidth < 768) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -6;
    const rotateY = ((x - centerX) / centerX) * 6;

    setTransform(`perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.015, 1.015, 1.015)`);
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
    sfx.hover();
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setTransform('perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)');
  };

  if (isCompact) {
    return (
      <div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        data-project-card
        data-cursor-interact
        style={{ transform, transition: 'transform 0.18s ease-out, box-shadow 0.25s ease' }}
        className="border border-orange-500/30 hover:border-orange-400 bg-[#120e0b]/90 p-5 rounded-xs space-y-4 transition-all duration-300 hover:shadow-[0_0_25px_rgba(234,88,12,0.2)] flex flex-col justify-between relative group overflow-hidden"
      >
        {/* Scanning Line Effect */}
        {isHovered && (
          <div className="absolute inset-x-0 h-1 bg-gradient-to-r from-transparent via-orange-400/50 to-transparent animate-scanline pointer-events-none" />
        )}

        <div className="space-y-3">
          <div className="flex items-center justify-between font-mono text-xs text-orange-500">
            <span className="font-bold">PROJECT {project.number}</span>
            <span className="text-[10px] text-amber-500/70 border border-orange-500/30 px-1.5 py-0.5 bg-orange-950/20">
              {project.badge || 'SYSTEM'}
            </span>
          </div>

          <h4 className="font-mono text-base font-bold text-amber-100 group-hover:text-orange-300 transition-colors">
            {project.title}
          </h4>

          <p className="text-xs text-amber-200/80 font-sans leading-relaxed">
            {project.description}
          </p>

          <div className="flex flex-wrap gap-1.5 pt-1">
            {project.technologies.slice(0, 4).map((tech) => (
              <span
                key={tech}
                className="text-[10px] font-mono px-2 py-0.5 bg-[#1a1410] text-orange-300/90 border border-orange-500/20"
              >
                #{tech}
              </span>
            ))}
          </div>
        </div>

        <div className="pt-4 border-t border-orange-500/20 flex items-center justify-between">
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noreferrer"
            onClick={() => sfx.click()}
            className="inline-flex items-center space-x-1.5 text-xs font-mono text-orange-400 hover:text-orange-300 group-hover:translate-x-1 transition-all"
            data-cursor-interact
          >
            <span>VIEW REPOSITORY</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
          {project.highlightStat && (
            <span className="text-[10px] font-mono text-stone-500">
              {project.highlightStat}
            </span>
          )}
        </div>
      </div>
    );
  }

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      data-project-card
      data-cursor-interact
      style={{ transform, transition: 'transform 0.18s ease-out, box-shadow 0.25s ease' }}
      className="border border-orange-500/35 hover:border-orange-400 bg-[#120f0c]/90 p-6 sm:p-7 rounded-xs relative group transition-all duration-300 hover:shadow-[0_0_35px_rgba(234,88,12,0.25)] flex flex-col justify-between overflow-hidden"
    >
      {/* Scanning Line Effect on Hover */}
      {isHovered && (
        <div className="absolute inset-x-0 h-1 bg-gradient-to-r from-transparent via-orange-400/60 to-transparent animate-scanline pointer-events-none" />
      )}

      {/* Card Header */}
      <div className="space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-2 font-mono text-xs">
          <span className="px-2.5 py-0.5 bg-orange-500/20 text-orange-400 border border-orange-500/40 font-bold uppercase tracking-wider">
            PROJECT {project.number} // {project.badge || 'FEATURED'}
          </span>
          <span className="text-amber-400/80 font-mono text-[11px]">
            {project.subtitle}
          </span>
        </div>

        <h3 className="text-xl sm:text-2xl font-mono font-bold text-amber-100 group-hover:text-orange-300 transition-colors">
          {project.title}
        </h3>

        <p className="text-sm text-amber-100/85 font-sans leading-relaxed">
          {project.description}
        </p>

        {/* Verified Result Metric */}
        {project.result && (
          <div className="p-3 bg-[#19130f] border border-orange-500/40 rounded-xs flex items-center justify-between shadow-inner">
            <span className="text-xs font-mono text-orange-400 font-semibold">
              VERIFIED_OUTCOME:
            </span>
            <span className="text-sm font-mono font-bold text-amber-300 flex items-center">
              <span className="w-2 h-2 rounded-full bg-emerald-400 mr-2 animate-pulse" />
              {project.result}
            </span>
          </div>
        )}

        {/* Feature List */}
        {project.features && project.features.length > 0 && (
          <div className="space-y-1.5 pt-1">
            <span className="text-[10px] font-mono text-orange-500 uppercase tracking-widest block">
              ARCHITECTURE FEATURES
            </span>
            <div className="flex flex-wrap gap-1.5">
              {project.features.map((feat) => (
                <span
                  key={feat}
                  className="text-[11px] font-mono px-2 py-0.5 bg-[#17120e] text-amber-200/90 border border-orange-500/20 rounded-xs flex items-center space-x-1"
                >
                  <CheckCircle2 className="w-3 h-3 text-orange-500/70 mr-1 inline" />
                  <span>{feat}</span>
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Technologies */}
        <div className="pt-2">
          <span className="text-[10px] font-mono text-orange-500 uppercase tracking-widest block">
            CORE TECHNOLOGIES
          </span>
          <div className="flex flex-wrap gap-2 pt-1 font-mono text-xs">
            {project.technologies.map((t) => (
              <span
                key={t}
                className="text-orange-300 bg-orange-950/30 px-2 py-0.5 border border-orange-500/25 rounded-xs transition-transform duration-200 hover:-translate-y-0.5"
              >
                #{t}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Card Action Controls */}
      <div className="pt-6 mt-6 border-t border-orange-500/20 flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center space-x-3">
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noreferrer"
            onClick={() => sfx.click()}
            className="inline-flex items-center space-x-2 text-xs font-mono tracking-wider text-stone-950 font-bold bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-400 hover:to-amber-400 px-3.5 py-2 transition-all rounded-xs shadow-[0_0_15px_rgba(234,88,12,0.3)] cursor-pointer"
            data-cursor-interact
          >
            <span>VIEW PROJECT</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>

          <a
            href={project.githubUrl}
            target="_blank"
            rel="noreferrer"
            onClick={() => sfx.click()}
            className="inline-flex items-center space-x-1.5 text-xs font-mono tracking-wider text-orange-300 hover:text-orange-100 border border-orange-500/50 px-3 py-2 bg-[#17120e] hover:bg-orange-500/20 transition-all rounded-xs cursor-pointer"
            data-cursor-interact
          >
            <GithubIcon className="w-3.5 h-3.5 text-orange-400" />
            <span>CODE</span>
          </a>
        </div>

        {project.highlightStat && (
          <span className="text-[11px] font-mono text-stone-400 bg-[#16110d] px-2.5 py-1 border border-orange-500/20">
            {project.highlightStat}
          </span>
        )}
      </div>
    </div>
  );
};
