import React, { useState } from 'react';
import { Mail, Phone, MapPin, ExternalLink, Copy, Radio, ArrowUpRight, Check } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import { PERSONAL_INFO } from '../data/portfolioData';
import { sfx } from '../utils/soundFx';

export const Contact: React.FC = () => {
  const [copyStatus, setCopyStatus] = useState<string | null>(null);
  const [subject, setSubject] = useState('AI / ML Project Collaboration');
  const [message, setMessage] = useState(
    'Hi Preetam, I reviewed your AI & Machine Learning portfolio...'
  );

  const copyToClipboard = (text: string, type: string) => {
    navigator.clipboard.writeText(text);
    sfx.click();
    setCopyStatus(type);
    setTimeout(() => setCopyStatus(null), 2500);
  };

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    sfx.warp();
    const mailtoUrl = `mailto:${PERSONAL_INFO.email}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(message)}`;
    window.location.href = mailtoUrl;
  };

  return (
    <section
      id="contact"
      className="py-24 px-4 sm:px-6 lg:px-8 border-t border-orange-500/20 relative"
    >
      <div className="max-w-5xl mx-auto space-y-12">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between border-b border-orange-500/30 pb-4 gap-2">
          <div>
            <span className="text-xs font-mono text-orange-500 tracking-widest block uppercase">
              COMMUNICATION // INTERFACE
            </span>
            <h2 className="text-3xl sm:text-4xl font-mono font-bold text-amber-100">
              05 // CONTACT
            </h2>
          </div>
          <span className="font-mono text-xs text-orange-400/80">
            PORT: 25 // PROTOCOL SECURE
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Direct Channels Panel */}
          <div className="lg:col-span-5 bg-[#110e0c]/90 border border-orange-500/35 p-6 rounded-xs space-y-6 shadow-[0_0_20px_rgba(234,88,12,0.12)]">
            <div className="flex items-center space-x-2 text-xs font-mono text-orange-400 pb-3 border-b border-orange-500/20">
              <Radio className="w-4 h-4 text-orange-500 animate-pulse" />
              <span className="font-bold tracking-widest uppercase">DIRECT_SIGNAL_LINES</span>
            </div>

            <div className="space-y-4 font-mono text-xs">
              {/* Email */}
              <div className="p-3 bg-[#17110d] border border-orange-500/20 rounded-xs space-y-1">
                <span className="text-[10px] text-orange-500 uppercase tracking-widest block font-semibold">
                  EMAIL_COORDINATE
                </span>
                <div className="flex items-center justify-between">
                  <span className="text-amber-200 select-all text-[11px] sm:text-xs">
                    {PERSONAL_INFO.email}
                  </span>
                  <button
                    onClick={() => copyToClipboard(PERSONAL_INFO.email, 'email')}
                    className="text-orange-400 hover:text-orange-300 p-1 rounded transition-colors cursor-pointer"
                    title="Copy Email Address"
                    data-cursor-interact
                  >
                    {copyStatus === 'email' ? (
                      <span className="text-[10px] text-emerald-400 font-bold flex items-center">
                        <Check className="w-3 h-3 mr-0.5" /> COPIED
                      </span>
                    ) : (
                      <Copy className="w-3.5 h-3.5" />
                    )}
                  </button>
                </div>
              </div>

              {/* Phone */}
              <div className="p-3 bg-[#17110d] border border-orange-500/20 rounded-xs space-y-1">
                <span className="text-[10px] text-orange-500 uppercase tracking-widest block font-semibold">
                  VOICE_FREQUENCY (PHONE)
                </span>
                <div className="flex items-center justify-between">
                  <span className="text-amber-200 select-all text-[11px] sm:text-xs">
                    {PERSONAL_INFO.phone}
                  </span>
                  <button
                    onClick={() => copyToClipboard(PERSONAL_INFO.phone, 'phone')}
                    className="text-orange-400 hover:text-orange-300 p-1 rounded transition-colors cursor-pointer"
                    title="Copy Phone Number"
                    data-cursor-interact
                  >
                    {copyStatus === 'phone' ? (
                      <span className="text-[10px] text-emerald-400 font-bold flex items-center">
                        <Check className="w-3 h-3 mr-0.5" /> COPIED
                      </span>
                    ) : (
                      <Copy className="w-3.5 h-3.5" />
                    )}
                  </button>
                </div>
              </div>

              {/* Location */}
              <div className="p-3 bg-[#17110d] border border-orange-500/20 rounded-xs space-y-1">
                <span className="text-[10px] text-orange-500 uppercase tracking-widest block font-semibold">
                  BASE_LOCATION
                </span>
                <div className="flex items-center space-x-2 text-amber-200 text-xs">
                  <MapPin className="w-3.5 h-3.5 text-orange-400 shrink-0" />
                  <span>{PERSONAL_INFO.location}, India</span>
                </div>
              </div>
            </div>

            {/* Direct Profiles Links */}
            <div className="pt-2 flex flex-col space-y-2">
              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noreferrer"
                onClick={() => sfx.click()}
                className="flex items-center justify-between p-3 border border-orange-500/30 bg-[#16120e] hover:bg-orange-500/15 text-orange-300 font-mono text-xs rounded-xs transition-colors group cursor-pointer"
                data-cursor-interact
              >
                <span className="flex items-center space-x-2">
                  <GithubIcon className="w-4 h-4 text-orange-400" />
                  <span>github.com/preetamkamate</span>
                </span>
                <ExternalLink className="w-3.5 h-3.5 text-orange-500 group-hover:translate-x-0.5 transition-transform" />
              </a>

              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noreferrer"
                onClick={() => sfx.click()}
                className="flex items-center justify-between p-3 border border-orange-500/30 bg-[#16120e] hover:bg-orange-500/15 text-orange-300 font-mono text-xs rounded-xs transition-colors group cursor-pointer"
                data-cursor-interact
              >
                <span className="flex items-center space-x-2">
                  <LinkedinIcon className="w-4 h-4 text-orange-400" />
                  <span>linkedin.com/in/preetam-kamate</span>
                </span>
                <ExternalLink className="w-3.5 h-3.5 text-orange-500 group-hover:translate-x-0.5 transition-transform" />
              </a>
            </div>
          </div>

          {/* Futuristic Signal Transmit Terminal */}
          <div className="lg:col-span-7 bg-[#100d0b]/90 border border-orange-500/35 p-6 sm:p-8 rounded-xs relative shadow-[0_0_20px_rgba(234,88,12,0.12)]">
            <div className="flex items-center justify-between border-b border-orange-500/20 pb-3 mb-6">
              <span className="font-mono text-xs text-orange-400 font-bold flex items-center space-x-2 uppercase">
                <Mail className="w-4 h-4 text-orange-500" />
                <span>DISPATCH_PACKET // CLIENT_ENVELOPE</span>
              </span>
              <span className="text-[10px] font-mono text-amber-500/70">SMTP_PROTOCOL</span>
            </div>

            <form onSubmit={handleSendMessage} className="space-y-4 font-mono text-xs">
              <div className="space-y-1.5">
                <label className="text-[10px] text-orange-500 uppercase tracking-widest block font-semibold">
                  TRANSMISSION_SUBJECT
                </label>
                <input
                  type="text"
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  className="w-full bg-[#181310] border border-orange-500/30 text-amber-100 p-3 rounded-xs focus:outline-none focus:border-orange-400 transition-colors"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-[10px] text-orange-500 uppercase tracking-widest block font-semibold">
                  SIGNAL_PAYLOAD (MESSAGE)
                </label>
                <textarea
                  rows={4}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full bg-[#181310] border border-orange-500/30 text-amber-100 p-3 rounded-xs focus:outline-none focus:border-orange-400 transition-colors"
                />
              </div>

              <button
                type="submit"
                data-cursor-interact
                className="w-full py-4 bg-gradient-to-r from-orange-600 via-amber-600 to-orange-500 hover:from-orange-500 hover:to-amber-500 text-stone-950 font-bold tracking-widest uppercase transition-all rounded-xs shadow-[0_0_20px_rgba(234,88,12,0.4)] hover:shadow-[0_0_30px_rgba(234,88,12,0.6)] flex items-center justify-center space-x-2 cursor-pointer active:scale-98"
              >
                <span>[ TRANSMIT VIA DEFAULT MAIL CLIENT ]</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
