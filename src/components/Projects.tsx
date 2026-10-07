import React, { useState, useEffect } from 'react';
import { Radio, ExternalLink, GitBranch, RefreshCw, Star } from 'lucide-react';
import { GithubIcon } from './Icons';
import { PROJECTS, PERSONAL_INFO } from '../data/portfolioData';
import { ProjectCard } from './ProjectCard';
import { GitHubStats } from '../types';
import { sfx } from '../utils/soundFx';

export const Projects: React.FC = () => {
  const [gitStats, setGitStats] = useState<GitHubStats>({
    publicRepos: 5,
    followers: 0,
    updated: 'LIVE',
    loading: false,
  });

  const [liveRepos, setLiveRepos] = useState<Array<{ name: string; url: string; language: string; stars: number }>>([]);

  // Fetch verified public GitHub activity
  useEffect(() => {
    const fetchGitHub = async () => {
      try {
        setGitStats((prev) => ({ ...prev, loading: true }));
        const [userRes, reposRes] = await Promise.all([
          fetch('https://api.github.com/users/preetamkamate'),
          fetch('https://api.github.com/users/preetamkamate/repos?sort=updated&per_page=6'),
        ]);

        if (userRes.ok && reposRes.ok) {
          const user = await userRes.json();
          const repos = await reposRes.json();
          setGitStats({
            publicRepos: user.public_repos || 5,
            followers: user.followers || 0,
            updated: new Date(user.updated_at || Date.now()).toLocaleDateString(),
            loading: false,
          });

          if (Array.isArray(repos)) {
            setLiveRepos(
              repos.slice(0, 4).map((r: { name: string; html_url: string; language: string; stargazers_count: number }) => ({
                name: r.name,
                url: r.html_url,
                language: r.language || 'Python',
                stars: r.stargazers_count || 0,
              }))
            );
          }
        } else {
          setGitStats((prev) => ({ ...prev, loading: false }));
        }
      } catch {
        // Graceful fallback to verified static data
        setGitStats((prev) => ({ ...prev, loading: false }));
      }
    };

    fetchGitHub();
  }, []);

  const featuredProjects = PROJECTS.filter((p) => p.featured);
  const additionalProjects = PROJECTS.filter((p) => !p.featured);

  return (
    <section
      id="projects"
      className="py-24 px-4 sm:px-6 lg:px-8 border-t border-orange-500/20 relative"
    >
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between border-b border-orange-500/30 pb-4 gap-4">
          <div>
            <span className="text-xs font-mono text-orange-500 tracking-widest block uppercase">
              PORTFOLIO_MODULE // REPOSITORIES
            </span>
            <h2 className="text-3xl sm:text-4xl font-mono font-bold text-amber-100">
              03 // PROJECTS
            </h2>
          </div>

          <div className="flex items-center space-x-3 font-mono text-xs">
            <span className="px-3 py-1 bg-orange-950/40 border border-orange-500/40 text-orange-400 rounded-xs flex items-center">
              <Radio className="w-3.5 h-3.5 text-orange-400 animate-pulse mr-2" />
              GIT_PUBLIC: {gitStats.publicRepos} REPOS
            </span>
            <span className="text-amber-500/70 hidden sm:inline">
              SYNC: {gitStats.updated}
            </span>
          </div>
        </div>

        {/* Featured Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        {/* Additional Verified Repositories */}
        <div className="pt-6 space-y-6">
          <div className="flex items-center justify-between border-b border-orange-500/20 pb-3">
            <span className="text-xs font-mono text-orange-400 font-semibold tracking-wider uppercase">
              ADDITIONAL VERIFIED REPOSITORIES
            </span>
            <span className="text-[11px] font-mono text-stone-500">
              GITHUB ARCHIVE // PK
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {additionalProjects.map((project) => (
              <ProjectCard key={project.id} project={project} isCompact />
            ))}
          </div>
        </div>

        {/* Live Public GitHub Activity Panel */}
        <div className="p-6 bg-[#110e0c]/90 border border-orange-500/30 rounded-xs flex flex-col sm:flex-row sm:items-center justify-between gap-6">
          <div className="space-y-1">
            <div className="flex items-center space-x-2 text-orange-400 font-mono text-xs font-bold uppercase">
              <GithubIcon className="w-4 h-4 text-orange-500" />
              <span>GITHUB TELEMETRY // @preetamkamate</span>
            </div>
            <p className="text-xs text-amber-200/75 font-sans">
              All projects and code repositories are openly accessible and regularly updated on GitHub.
            </p>
          </div>

          <a
            href={PERSONAL_INFO.github}
            target="_blank"
            rel="noreferrer"
            onClick={() => sfx.click()}
            data-cursor-interact
            className="inline-flex items-center space-x-2 px-5 py-2.5 bg-gradient-to-r from-orange-600 to-amber-600 hover:from-orange-500 hover:to-amber-500 text-stone-950 font-mono font-bold text-xs uppercase rounded-xs transition-all shadow-[0_0_15px_rgba(234,88,12,0.3)] shrink-0"
          >
            <span>EXPLORE GITHUB PROFILE</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </section>
  );
};
