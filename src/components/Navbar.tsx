import React, { useState, useEffect } from 'react';
import { Clock, Monitor, Volume2, VolumeX, Menu, X } from 'lucide-react';
import { sfx } from '../utils/soundFx';

interface NavbarProps {
  activeSection: string;
  onNavigate: (sectionId: string) => void;
  crtEnabled: boolean;
  onToggleCrt: () => void;
  soundEnabled: boolean;
  onToggleSound: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  activeSection,
  onNavigate,
  crtEnabled,
  onToggleCrt,
  soundEnabled,
  onToggleSound,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [currentTime, setCurrentTime] = useState('');

  // Clock ticker in retro format
  useEffect(() => {
    const updateTime = () => {
      const d = new Date();
      setCurrentTime(
        d.toLocaleTimeString('en-US', {
          hour12: false,
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
        }) + ' IST'
      );
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const navItems = [
    { id: 'home', label: 'HOME' },
    { id: 'about', label: '01 // ABOUT' },
    { id: 'skills', label: '02 // SKILLS' },
    { id: 'projects', label: '03 // PROJECTS' },
    { id: 'education', label: '04 // EDUCATION' },
    { id: 'contact', label: '05 // CONTACT' },
  ];

  const handleItemClick = (id: string) => {
    sfx.click();
    setMobileMenuOpen(false);
    onNavigate(id);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-30 bg-[#090807]/90 backdrop-blur-md border-b border-orange-500/25">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Brand & Retro Coordinates */}
        <button
          onClick={() => handleItemClick('home')}
          className="flex items-center space-x-3 text-left group cursor-pointer focus:outline-none focus:ring-1 focus:ring-orange-400"
          data-cursor-interact
          aria-label="Home page"
        >
          <div className="w-8 h-8 rounded-xs border border-orange-500/80 bg-orange-950/40 flex items-center justify-center text-orange-400 font-mono font-bold text-xs group-hover:bg-orange-500 group-hover:text-black transition-all shadow-[0_0_10px_rgba(234,88,12,0.2)]">
            PK
          </div>
          <div className="flex flex-col">
            <span className="font-mono text-xs sm:text-sm tracking-widest text-orange-400 font-bold uppercase group-hover:text-amber-200 transition-colors">
              PREETAM KAMATE
            </span>
            <span className="font-mono text-[9px] text-amber-500/70 tracking-wider">
              COORD // 12.97°N 77.59°E
            </span>
          </div>
        </button>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex items-center space-x-1 font-mono text-xs tracking-wider" aria-label="Main Navigation">
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleItemClick(item.id)}
                data-cursor-interact
                className={`relative px-3 py-2 transition-all duration-200 uppercase cursor-pointer rounded-xs ${
                  isActive
                    ? 'text-orange-400 font-bold'
                    : 'text-amber-100/70 hover:text-orange-300 hover:bg-orange-500/5'
                }`}
              >
                {item.label}
                {isActive && (
                  <span className="absolute bottom-0 left-2 right-2 h-[2px] bg-orange-500 shadow-[0_0_10px_#f97316]" />
                )}
              </button>
            );
          })}
        </nav>

        {/* Retro Utility Controls */}
        <div className="flex items-center space-x-3">
          {/* Live Chrono Time Display */}
          <div className="hidden lg:flex items-center space-x-1.5 font-mono text-[11px] text-orange-400/90 bg-[#140f0c] px-2.5 py-1 rounded-xs border border-orange-500/30">
            <Clock className="w-3.5 h-3.5 text-orange-500 animate-spin-slow" />
            <span>{currentTime || '00:00:00 IST'}</span>
          </div>

          {/* CRT scanline switch */}
          <button
            onClick={() => {
              sfx.click();
              onToggleCrt();
            }}
            title={crtEnabled ? 'Disable CRT Scanlines' : 'Enable CRT Scanlines'}
            aria-label="Toggle CRT Scanlines"
            className={`p-2 rounded-xs border text-xs font-mono transition-colors cursor-pointer ${
              crtEnabled
                ? 'border-orange-500/70 bg-orange-950/40 text-orange-400 shadow-[0_0_8px_rgba(234,88,12,0.3)]'
                : 'border-stone-800 text-stone-500 hover:text-stone-300'
            }`}
            data-cursor-interact
          >
            <Monitor className="w-3.5 h-3.5" />
          </button>

          {/* Audio Toggle */}
          <button
            onClick={() => {
              onToggleSound();
            }}
            title={soundEnabled ? 'Mute Terminal Audio' : 'Unmute Terminal Audio'}
            aria-label="Toggle Audio Sound Effects"
            className={`p-2 rounded-xs border text-xs font-mono transition-colors cursor-pointer ${
              soundEnabled
                ? 'border-orange-500/70 bg-orange-950/40 text-orange-400 shadow-[0_0_8px_rgba(234,88,12,0.3)]'
                : 'border-stone-800 text-stone-500 hover:text-stone-300'
            }`}
            data-cursor-interact
          >
            {soundEnabled ? <Volume2 className="w-3.5 h-3.5" /> : <VolumeX className="w-3.5 h-3.5" />}
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => {
              sfx.click();
              setMobileMenuOpen(!mobileMenuOpen);
            }}
            className="md:hidden p-2 text-orange-400 hover:text-orange-300 border border-orange-500/35 bg-[#140f0c] rounded-xs cursor-pointer"
            aria-label="Toggle Navigation Menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0c0a08] border-b border-orange-500/30 px-4 py-4 space-y-2 font-mono text-sm animate-in slide-in-from-top duration-200">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleItemClick(item.id)}
              className={`block w-full text-left py-2.5 px-3 rounded-xs border-l-2 transition-all ${
                activeSection === item.id
                  ? 'border-orange-500 bg-orange-500/15 text-orange-300 font-bold'
                  : 'border-transparent text-amber-200/90 hover:bg-orange-500/10 hover:text-orange-400'
              }`}
            >
              {item.label}
            </button>
          ))}
          <div className="pt-2 border-t border-orange-500/20 flex items-center justify-between text-xs text-orange-400/80 px-3">
            <span>LIVE CHRONO</span>
            <span>{currentTime}</span>
          </div>
        </div>
      )}
    </header>
  );
};
