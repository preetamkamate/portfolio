import React, { useState, useEffect, useCallback } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Education } from './components/Education';
import { BeyondCode } from './components/BeyondCode';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { Cursor } from './components/Cursor';
import { BackgroundEffects } from './components/BackgroundEffects';
import { BootSequence } from './components/BootSequence';
import { sfx } from './utils/soundFx';

export default function App() {
  const [booted, setBooted] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [crtEnabled, setCrtEnabled] = useState(true);
  const [soundEnabled, setSoundEnabled] = useState(true);

  // Scroll section observer
  useEffect(() => {
    if (!booted) return;
    const sections = ['home', 'about', 'skills', 'projects', 'education', 'beyond', 'contact'];

    const handleScroll = () => {
      const scrollY = window.scrollY + 220;
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollY >= top && scrollY < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [booted]);

  const scrollTo = useCallback((id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  }, []);

  const handleToggleSound = () => {
    const nowEnabled = sfx.toggle();
    setSoundEnabled(nowEnabled);
    if (nowEnabled) sfx.beep(720, 0.05);
  };

  const handleToggleCrt = () => {
    setCrtEnabled((prev) => !prev);
  };

  return (
    <div className="relative min-h-screen bg-[#080706] text-[#f7eee4] font-sans antialiased selection:bg-orange-600 selection:text-white overflow-x-hidden">
      {/* Custom Dynamic Orange Cursor with particles and magnetic tracking */}
      <Cursor />

      {/* Cinematic Startup Loading Sequence */}
      {!booted && <BootSequence onComplete={() => setBooted(true)} />}

      {/* Background Interactive Canvas, Cyber Grid, Vignette, Scanlines */}
      <BackgroundEffects crtEnabled={crtEnabled} />

      {/* Retro Navigation Bar */}
      <Navbar
        activeSection={activeSection}
        onNavigate={scrollTo}
        crtEnabled={crtEnabled}
        onToggleCrt={handleToggleCrt}
        soundEnabled={soundEnabled}
        onToggleSound={handleToggleSound}
      />

      {/* Main Sections */}
      <main className="relative z-10 pt-16">
        <Hero onExplore={() => scrollTo('projects')} />
        <About />
        <Skills />
        <Projects />
        <Education />
        <BeyondCode />
        <Contact />
      </main>

      {/* Archival Terminal Footer */}
      <Footer onScrollToTop={() => scrollTo('home')} />
    </div>
  );
}
