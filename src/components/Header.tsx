import React, { useState, useEffect } from 'react';
import { multiverseAudio } from '../utils/multiverseAudio';

interface HeaderProps {
  currentTab: string;
  onSelectTab: (tab: string) => void;
  onLaunchPortal: () => void;
  currentDimension: string;
  onSelectDimension: (dim: string) => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentTab,
  onSelectTab,
  onLaunchPortal,
  currentDimension,
  onSelectDimension,
}) => {
  const [isAudioPlaying, setIsAudioPlaying] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showDimensionPicker, setShowDimensionPicker] = useState(false);

  useEffect(() => {
    const checkAudio = () => {
      setIsAudioPlaying(multiverseAudio.getIsPlaying());
    };
    const interval = setInterval(checkAudio, 500);
    return () => clearInterval(interval);
  }, []);

  const handleToggleBeat = () => {
    const playing = multiverseAudio.toggleMixtape('SPIDER-PUNK REMIX');
    setIsAudioPlaying(playing);
    if (playing) {
      multiverseAudio.playPow();
    }
  };

  const navItems = [
    { id: 'spider-central', label: 'HOMEPAGE // SPIDER-CENTRAL' },
    { id: 'character-archives', label: 'CHARACTER ARCHIVES' },
    { id: 'multiverse-portals', label: 'MULTIVERSE PORTALS' },
    { id: 'power-battle-matrix', label: 'POWER BATTLE MATRIX' },
    { id: 'comic-artifacts', label: 'COMIC ARTIFACTS' },
  ];

  const dimensions = [
    'EARTH-616 // STABLE',
    'EARTH-1610 // BROOKLYN',
    'EARTH-65 // GWEN',
    'EARTH-928 // 2099',
    'EARTH-138 // PUNK',
    'EARTH-42 // PROWLER',
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#121318]/90 backdrop-blur-xl border-b border-[#292a2f] shadow-[0_1px_8px_rgba(0,0,0,0.6)]">
      <div className="h-20 w-full px-4 lg:px-8 flex items-center justify-between gap-4">
        {/* Brand Lockup */}
        <button
          onClick={() => onSelectTab('spider-central')}
          className="flex items-center gap-3 shrink-0 text-left cursor-pointer group"
        >
          <img
            alt="Multiverse Spider Icon"
            className="h-8 w-auto object-contain transition-transform group-hover:scale-110"
            src="https://lh3.googleusercontent.com/aida/AEtjO1VlwZ2B2fcpAOfd8KfU2Px18r0m5YEMvKjaJzfpLH3w2zMGwB_VYJ3VAmTEYpnxUQDAevcxH1JlIWBqga-wbYgiWP3KW7QosC5F-bHq8E6WISnh0jtAPTG7lf3TZxZ7ymaRR6vj-9sJFRqPzqASoVC6XJP8EwpXb5qywmWvIYsTej1tyJFqgEr7aceqAguTBM8_i092x7K0xJlkBjfTHHg2qQbJxHXRCYirfAY0HLl73rGyfhgYbzL6jtrd"
            onError={(e) => {
              // Fallback SVG if network fails
              e.currentTarget.style.display = 'none';
            }}
          />
          <div className="flex flex-col">
            <div className="flex items-center gap-1.5">
              <span className="font-headline text-xl lg:text-2xl font-bold tracking-tighter text-[#e3e1e9] uppercase">
                SPIDER//VERSE
              </span>
              <span className="px-1.5 py-0.5 rounded-none bg-[#ff525e] text-[#5b0010] font-mono-tech text-[10px] font-bold tracking-wider">
                LIVE
              </span>
            </div>
            <span className="font-mono-tech text-[11px] text-[#8F9CAE] uppercase tracking-wider">
              MARVEL MULTIVERSE PROTOCOL v4.2
            </span>
          </div>
        </button>

        {/* Desktop Navigation Links */}
        <nav className="hidden xl:flex items-center gap-2">
          {navItems.map((item) => {
            const isActive = currentTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => {
                  multiverseAudio.playThwip();
                  onSelectTab(item.id);
                }}
                className={`px-3 py-1.5 font-mono-tech text-xs tracking-wider transition-all cursor-pointer whitespace-nowrap ${
                  isActive
                    ? 'bg-[#292a2f] text-[#7df4ff] font-bold shadow-[0_0_12px_rgba(0,238,252,0.35)] border border-[#00eefc]/40'
                    : 'text-[#8F9CAE] hover:text-[#e3e1e9] hover:bg-[#1e1f25]'
                }`}
              >
                {item.label}
              </button>
            );
          })}
        </nav>

        {/* Right Action Controls */}
        <div className="flex items-center gap-2 lg:gap-3 shrink-0">
          {/* Dimension Status Switcher */}
          <div className="relative">
            <button
              onClick={() => setShowDimensionPicker(!showDimensionPicker)}
              className="hidden md:flex items-center gap-2 px-3 py-1.5 bg-[#1a1b21] hover:bg-[#292a2f] border border-[#292a2f] text-[#7df4ff] font-mono-tech text-xs tracking-wider transition-colors cursor-pointer"
              title="Click to shift dimensional focus"
            >
              <div className="w-2 h-2 rounded-full bg-[#00eefc] animate-pulse shadow-[0_0_8px_rgba(0,238,252,0.8)]" />
              <span>DIMENSION: {currentDimension}</span>
              <span className="material-symbols-outlined text-[14px]">expand_more</span>
            </button>

            {/* Dropdown */}
            {showDimensionPicker && (
              <div className="absolute right-0 mt-1 w-56 bg-[#1a1b21] border border-[#00eefc]/40 shadow-ink-lg p-1 z-50 flex flex-col gap-1">
                <div className="px-2 py-1 text-[10px] font-mono-tech text-[#8F9CAE] uppercase border-b border-[#292a2f]">
                  SELECT MULTIVERSE NODE:
                </div>
                {dimensions.map((dim) => (
                  <button
                    key={dim}
                    onClick={() => {
                      onSelectDimension(dim);
                      setShowDimensionPicker(false);
                      multiverseAudio.playPortalWarp();
                    }}
                    className={`px-2 py-1.5 text-left font-mono-tech text-xs transition-colors cursor-pointer ${
                      currentDimension === dim
                        ? 'bg-[#00eefc]/20 text-[#7df4ff] font-bold'
                        : 'text-[#e3e1e9] hover:bg-[#292a2f]'
                    }`}
                  >
                    {dim}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Audio Beat Toggle */}
          <button
            onClick={handleToggleBeat}
            className={`hidden lg:flex items-center gap-1.5 px-3 py-1.5 border font-mono-tech text-xs tracking-wider transition-all cursor-pointer ${
              isAudioPlaying
                ? 'bg-[#b86dfd]/20 text-[#f1dbff] border-[#b86dfd] shadow-[0_0_15px_rgba(184,109,253,0.4)]'
                : 'bg-[#292a2f] text-[#8F9CAE] border-transparent hover:bg-[#34343a] hover:text-[#e3e1e9]'
            }`}
            title="Toggle Procedural Synthesizer Beat"
          >
            <span
              className={`material-symbols-outlined text-[16px] text-[#deb7ff] ${
                isAudioPlaying ? 'animate-pulse' : ''
              }`}
            >
              graphic_eq
            </span>
            <span>
              {isAudioPlaying ? 'BEAT: ACTIVE [SPIDER-PUNK]' : 'BEAT: ON [SPIDER-PUNK REMIX]'}
            </span>
          </button>

          {/* Launch Portal CTA Button */}
          <button
            onClick={() => {
              multiverseAudio.playPortalWarp();
              onLaunchPortal();
            }}
            className="flex items-center gap-1.5 px-3 lg:px-4 py-2 bg-[#ff525e] text-black hover:bg-[#ff7582] transition-all font-mono-tech text-xs font-bold tracking-wider shadow-[0_0_20px_rgba(255,82,94,0.4)] hover:shadow-[0_0_25px_rgba(255,82,94,0.7)] cursor-pointer transform hover:-translate-y-0.5 active:translate-y-0"
          >
            <span className="material-symbols-outlined text-[18px]">all_inclusive</span>
            <span>LAUNCH PORTAL</span>
          </button>

          {/* User Profile Avatar */}
          <div
            className="w-8 h-8 bg-[#ff525e] flex items-center justify-center shrink-0 shadow-ink text-black font-bold cursor-pointer"
            title="Spider-Society Protocol Operative"
          >
            <span className="material-symbols-outlined text-black text-[18px]">person</span>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="xl:hidden p-2 text-[#e3e1e9] hover:bg-[#292a2f] cursor-pointer"
          >
            <span className="material-symbols-outlined text-[24px]">
              {mobileMenuOpen ? 'close' : 'menu'}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-[#161a24] border-b border-[#292a2f] p-4 flex flex-col gap-2 shadow-ink-lg animate-in slide-in-from-top">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => {
                multiverseAudio.playThwip();
                onSelectTab(item.id);
                setMobileMenuOpen(false);
              }}
              className={`p-2.5 text-left font-mono-tech text-xs tracking-wider ${
                currentTab === item.id
                  ? 'bg-[#292a2f] text-[#7df4ff] font-bold border-l-2 border-[#00eefc]'
                  : 'text-[#8F9CAE] hover:bg-[#1e1f25]'
              }`}
            >
              {item.label}
            </button>
          ))}
          <div className="pt-2 border-t border-[#292a2f] flex flex-col gap-2">
            <button
              onClick={handleToggleBeat}
              className="flex items-center justify-center gap-2 py-2 bg-[#292a2f] text-[#deb7ff] font-mono-tech text-xs"
            >
              <span className="material-symbols-outlined text-[16px]">graphic_eq</span>
              <span>{isAudioPlaying ? 'STOP BEAT' : 'PLAY SPIDER-PUNK BEAT'}</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
