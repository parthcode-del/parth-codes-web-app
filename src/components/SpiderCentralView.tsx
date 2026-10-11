import React, { useState } from 'react';
import {
  SPIDER_VARIANTS,
  SpiderVariant,
  MARVEL_HEROES,
  MarvelHero,
  CRISIS_RIVALS,
  CrisisRival,
  MIXTAPE_TRACKS,
  MixtapeTrack,
} from '../data/marvelData';
import { multiverseAudio } from '../utils/multiverseAudio';

interface SpiderCentralViewProps {
  onInspectHero: (hero: MarvelHero | SpiderVariant) => void;
  onLaunchPortal: () => void;
  onNavigateToPortals: () => void;
}

export const SpiderCentralView: React.FC<SpiderCentralViewProps> = ({
  onInspectHero,
  onLaunchPortal,
  onNavigateToPortals,
}) => {
  // 1. Spider-Variants Spotlight State
  const [selectedVariant, setSelectedVariant] = useState<SpiderVariant>(SPIDER_VARIANTS[0]);
  const [isPowerTesting, setIsPowerTesting] = useState(false);

  // 2. All-Star Matrix Filter State
  const [activeMatrixFilter, setActiveMatrixFilter] = useState<string>('all');

  // 3. Crisis Simulator State
  const [selectedRivalKey, setSelectedRivalKey] = useState<string>('wolverine');
  const currentRival: CrisisRival = CRISIS_RIVALS[selectedRivalKey] || CRISIS_RIVALS.wolverine;
  const [isSimulating, setIsSimulating] = useState(false);

  // 4. Mixtape Player State
  const [activeTrack, setActiveTrack] = useState<MixtapeTrack>(MIXTAPE_TRACKS[0]);
  const [isPlayingTrack, setIsPlayingTrack] = useState(false);

  // Handlers
  const handleVariantSelect = (variant: SpiderVariant) => {
    setSelectedVariant(variant);
    multiverseAudio.playThwip();
  };

  const handleTestPower = () => {
    setIsPowerTesting(true);
    if (selectedVariant.audioSfx === 'venom') {
      multiverseAudio.playVenomBurst();
    } else if (selectedVariant.audioSfx === 'bzzzt') {
      multiverseAudio.playBzzzt();
    } else if (selectedVariant.audioSfx === 'pow') {
      multiverseAudio.playPow();
    } else {
      multiverseAudio.playThwip();
    }

    setTimeout(() => {
      setIsPowerTesting(false);
    }, 1400);
  };

  const handleRunSimulation = () => {
    setIsSimulating(true);
    multiverseAudio.playBzzzt();
    setTimeout(() => {
      setIsSimulating(false);
    }, 700);
  };

  const handleToggleTrack = (track: MixtapeTrack) => {
    if (activeTrack.id === track.id && isPlayingTrack) {
      multiverseAudio.stopMusic();
      setIsPlayingTrack(false);
    } else {
      setActiveTrack(track);
      multiverseAudio.toggleMixtape(track.title);
      setIsPlayingTrack(true);
      multiverseAudio.playPow();
    }
  };

  // Matrix Filtered List
  const filteredHeroes = MARVEL_HEROES.filter((hero) => {
    if (activeMatrixFilter === 'all') return true;
    if (activeMatrixFilter === 'avengers') return hero.category === 'avengers';
    if (activeMatrixFilter === 'cosmic') return hero.category === 'cosmic';
    if (activeMatrixFilter === 'mutant') return hero.category === 'mutant';
    if (activeMatrixFilter === 'midnight') return hero.category === 'midnight';
    if (activeMatrixFilter === 'villain') return hero.category === 'villain';
    return true;
  });

  return (
    <div className="flex flex-col w-full text-[#e3e1e9]">
      {/* ======================================================== */}
      {/* 1. HERO SECTION: SPIDER-VERSE PROTOCOL // ENTER THE NEXUS */}
      {/* ======================================================== */}
      <section className="relative w-full -mt-20 pt-28 min-h-[92vh] flex flex-col justify-between overflow-hidden bg-[#0d0e13]">
        {/* Cinematic Backdrop Image */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <img
            alt="Spider-Man swinging through a rain-drenched cyberpunk Neo-Tokyo city ablaze with neon lights"
            className="w-full h-full object-cover object-center filter saturate-125 brightness-90"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCTeh2VNcIlBWKQ1A17VGLIch3TK8PRczGPEghdig6_AS7e4v5VtlBjeqyhpN0N9J7GjLrTQmHHC3YvoeDzzwd4meFtfq-Jz_JwcwTpVjuJsr_UgT8tK7uR2L0rJGP0Wi2dqBI7VsJB5R9Zf_nqrI7tzffb22RatSlHO752_G-rK6FskCvfNblYvRgN4UKxiHshMX3B89CGnZZ_tJf-MZdXZMXKrzDmKRN8qyA9win_63NP_VnQuAQB_w"
          />
          {/* Gradient Scrim */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#0d0e13] via-[#0d0e13]/80 to-[#0d0e13]/50" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0d0e13] via-transparent to-[#0d0e13]/90" />
          {/* Dot Matrix Pattern */}
          <div className="absolute inset-0 bg-halftone-pattern opacity-15" />
        </div>

        {/* Hero Content Container */}
        <div className="relative z-10 w-full px-4 lg:px-8 py-8 flex-1 flex flex-col justify-center">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-end">
            {/* Left: Typography & Kinetic Action */}
            <div className="lg:col-span-8 flex flex-col gap-4">
              {/* Top Cyber Badges */}
              <div className="flex flex-wrap items-center gap-2 font-mono-tech text-xs">
                <span className="px-2.5 py-1 bg-[#ff525e] text-black font-bold tracking-widest uppercase shadow-[0_0_12px_rgba(255,82,94,0.6)]">
                  DIMENSION BREACH // 0.04ms
                </span>
                <span className="px-2.5 py-1 bg-[#292a2f] text-[#7df4ff] tracking-wider uppercase border border-[#00eefc]/30">
                  NODE: EARTH-1610 x 616 SYNC
                </span>
                <div className="flex items-center gap-1.5 px-2.5 py-1 bg-[#34343a] text-[#f1dbff]">
                  <span className="w-2 h-2 rounded-full bg-[#00eefc] animate-ping" />
                  <span>ANOMALY CODE: 42-SPIDER</span>
                </div>
              </div>

              {/* Comic Sound FX Badges (Interactive) */}
              <div className="flex items-center gap-3 select-none">
                <button
                  onClick={() => multiverseAudio.playThwip()}
                  className="inline-block transform -rotate-6 px-3 py-1 bg-yellow-400 text-black font-headline text-lg uppercase font-extrabold shadow-ink hover:scale-110 active:scale-95 transition-transform cursor-pointer"
                  title="Click for Sound FX"
                >
                  THWIP!
                </button>
                <button
                  onClick={() => multiverseAudio.playBzzzt()}
                  className="inline-block transform rotate-3 px-3 py-1 bg-[#00eefc] text-black font-headline text-lg uppercase font-extrabold shadow-ink hover:scale-110 active:scale-95 transition-transform cursor-pointer"
                  title="Click for Sound FX"
                >
                  BZZZT!
                </button>
                <button
                  onClick={() => multiverseAudio.playPow()}
                  className="inline-block transform -rotate-3 px-3 py-1 bg-[#ff525e] text-white font-headline text-lg uppercase font-extrabold shadow-ink hover:scale-110 active:scale-95 transition-transform cursor-pointer"
                  title="Click for Sound FX"
                >
                  POW!
                </button>
              </div>

              {/* Kinetic Hero Display Headline */}
              <h1 className="font-headline text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tighter text-[#e3e1e9] uppercase max-w-4xl leading-[0.95] drop-shadow-[0_8px_20px_rgba(0,0,0,0.9)]">
                ANYONE CAN WEAR <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff525e] via-[#00eefc] to-[#b86dfd] animate-pulse">
                  THE MASK.
                </span>
              </h1>

              {/* Tagline */}
              <p className="font-body text-base lg:text-lg text-[#8F9CAE] max-w-2xl leading-relaxed">
                <span className="text-[#e3e1e9] font-semibold">
                  Peter Parker • Miles Morales • Gwen Stacy • Miguel O'Hara
                </span>{' '}
                — Navigate over 500+ Marvel Anomalies, dimensional web crossovers, and high-frequency
                battle matrices across the entire multiverse.
              </p>

              {/* Dual Call to Action Buttons */}
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <button
                  onClick={() => {
                    multiverseAudio.playVenomBurst();
                    const el = document.getElementById('roster-section');
                    el?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="group relative px-6 py-3.5 bg-[#ff525e] text-black font-mono-tech text-xs uppercase tracking-wider font-bold transition-all transform hover:-translate-x-0.5 hover:-translate-y-0.5 shadow-ink hover:shadow-[0_0_25px_rgba(255,82,94,0.8)] active:translate-x-0 active:translate-y-0 cursor-pointer"
                >
                  <span className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-[20px] animate-spin group-hover:animate-none">
                      radar
                    </span>
                    <span>ACTIVATE SPIDER-SENSE (DISCOVER ALL HEROES)</span>
                  </span>
                </button>

                <button
                  onClick={onNavigateToPortals}
                  className="px-6 py-3.5 bg-[#1e1f25]/85 backdrop-blur-md text-[#7df4ff] border border-[#00eefc]/30 font-mono-tech text-xs uppercase tracking-wider font-bold transition-all hover:bg-[#292a2f] hover:text-[#e3e1e9] shadow-ink flex items-center gap-2 cursor-pointer"
                >
                  <span className="material-symbols-outlined text-[20px] text-[#00eefc]">hub</span>
                  <span>ENTER MULTIVERSE PORTAL [EARTH-1610]</span>
                </button>
              </div>
            </div>

            {/* Right: Live Spider-Sense HUD Widget */}
            <div className="lg:col-span-4 flex flex-col gap-3">
              <div className="bg-[#1e1f25]/90 backdrop-blur-xl p-4 shadow-ink-lg border border-[#262b3a] relative overflow-hidden">
                {/* HUD Top Header */}
                <div className="flex items-center justify-between pb-2 bg-[#292a2f]/60 px-3 py-1.5 -mx-4 -mt-4 mb-3 border-b border-[#292a2f]">
                  <div className="flex items-center gap-2 font-mono-tech text-xs text-[#7df4ff]">
                    <span className="w-2 h-2 rounded-full bg-[#ff525e] animate-ping" />
                    <span>HUD // QUANTUM SCANNER</span>
                  </div>
                  <span className="font-mono-tech text-[10px] text-[#8F9CAE]">SYS.VER.88.9</span>
                </div>

                {/* Threat Radar SVG Scanner */}
                <div className="relative w-full h-44 bg-[#0d0e13] border border-[#292a2f] flex items-center justify-center overflow-hidden">
                  <svg className="w-full h-full p-2" viewBox="0 0 200 200">
                    {/* Concentric Rings */}
                    <circle
                      className="text-[#34343a]"
                      cx="100"
                      cy="100"
                      fill="none"
                      r="85"
                      stroke="currentColor"
                      strokeDasharray="4,4"
                      strokeWidth="1"
                    />
                    <circle
                      className="text-[#34343a]"
                      cx="100"
                      cy="100"
                      fill="none"
                      r="58"
                      stroke="currentColor"
                      strokeWidth="1"
                    />
                    <circle
                      className="text-[#34343a]"
                      cx="100"
                      cy="100"
                      fill="none"
                      r="30"
                      stroke="currentColor"
                      strokeDasharray="2,2"
                      strokeWidth="1"
                    />
                    {/* Reticle Axes */}
                    <line
                      className="text-[#292a2f]"
                      stroke="currentColor"
                      strokeWidth="1"
                      x1="100"
                      x2="100"
                      y1="10"
                      y2="190"
                    />
                    <line
                      className="text-[#292a2f]"
                      stroke="currentColor"
                      strokeWidth="1"
                      x1="10"
                      x2="190"
                      y1="100"
                      y2="100"
                    />

                    {/* Rotating Radar Sweep */}
                    <g className="origin-center animate-[spin_4s_linear_infinite]">
                      <polygon fill="url(#radar-gradient)" opacity="0.45" points="100,100 100,15 185,100" />
                      <line stroke="#00eefc" strokeWidth="2" x1="100" x2="100" y1="100" y2="15" />
                    </g>

                    {/* Anomaly Ping Blips */}
                    <circle className="animate-ping" cx="140" cy="65" fill="#ff525e" r="4" />
                    <circle cx="140" cy="65" fill="#ff525e" r="3" />
                    <circle cx="70" cy="130" fill="#00eefc" r="3" />
                    <circle cx="120" cy="150" fill="#f1dbff" r="2.5" />
                    {/* Central Node */}
                    <circle cx="100" cy="100" fill="#ff525e" r="4" />

                    <defs>
                      <linearGradient id="radar-gradient" x1="0" x2="1" y1="0" y2="1">
                        <stop offset="0%" stopColor="#00eefc" stopOpacity="0.8" />
                        <stop offset="100%" stopColor="#00eefc" stopOpacity="0" />
                      </linearGradient>
                    </defs>
                  </svg>

                  <div className="absolute bottom-2 left-2 font-mono-tech text-[10px] px-2 py-0.5 bg-[#1e1f25] text-[#ff525e] border border-[#ff525e]/30">
                    THREAT LEVEL: HIGH [SPOT BREACH]
                  </div>
                </div>

                {/* Web-Fluid Telemetry Gauge */}
                <div className="mt-3 flex flex-col gap-1.5">
                  <div className="flex justify-between items-center font-mono-tech text-xs">
                    <span className="text-[#8F9CAE] uppercase">WEB FLUID RESERVOIR</span>
                    <span className="text-[#7df4ff] font-bold">98% SYNTH-POLYMER</span>
                  </div>
                  <div className="w-full h-3 bg-[#0d0e13] p-0.5 flex gap-1 border border-[#292a2f]">
                    <div className="h-full bg-[#00eefc] flex-1" />
                    <div className="h-full bg-[#00eefc] flex-1" />
                    <div className="h-full bg-[#00eefc] flex-1" />
                    <div className="h-full bg-[#00eefc] flex-1" />
                    <div className="h-full bg-[#00eefc] flex-1" />
                    <div className="h-full bg-[#00eefc] flex-1" />
                    <div className="h-full bg-[#00eefc] flex-1" />
                    <div className="h-full bg-[#34343a] flex-1" />
                  </div>
                </div>

                {/* Glitch Frequency Meter */}
                <div className="mt-2 flex justify-between items-center text-xs font-mono-tech pt-2 border-t border-[#292a2f]">
                  <span className="text-[#8F9CAE]">DIMENSIONAL GLITCH:</span>
                  <span className="text-[#f1dbff] font-bold flex items-center gap-1">
                    <span className="material-symbols-outlined text-[14px] text-[#deb7ff]">
                      warning
                    </span>
                    14.28 Hz (HARMONIC)
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Live Multiverse Ticker Bar */}
        <div className="relative z-10 w-full bg-[#0d0e13] py-2 overflow-hidden flex items-center border-t border-[#292a2f]">
          <div className="px-4 py-1 bg-[#ff525e] text-black font-mono-tech text-xs font-bold shrink-0 tracking-widest uppercase">
            ANOMALY ALERTS
          </div>
          <div className="flex items-center gap-8 font-mono-tech text-xs text-[#8F9CAE] overflow-x-hidden whitespace-nowrap animate-pulse px-4">
            <span>[EARTH-65] GWEN STACY SPOTTED IN CHINATOWN ALLEY // </span>
            <span>[EARTH-928] MIGUEL O'HARA DEPLOYING RESTRUCTURING FIELD // </span>
            <span>[EARTH-138] PUNK CONCERT SOUNDWAVE OSCILLATING AT 160dB // </span>
            <span>[EARTH-50101] PAVITR PRABHAKAR SECURING GAYATRI BRIDGE // </span>
            <span>[EARTH-8311] PETER PORKER ANVIL GRAVITY NORMALIZED</span>
          </div>
        </div>
      </section>

      {/* ======================================================== */}
      {/* 2. INTERACTIVE FEATURED SPIDER-ROSTER (The Spider-Variants) */}
      {/* ======================================================== */}
      <section
        id="roster-section"
        className="w-full px-4 lg:px-8 py-14 bg-[#1a1b21] flex flex-col gap-6 border-b border-[#292a2f]"
      >
        {/* Section Title & Meta */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 font-mono-tech text-xs text-[#7df4ff] uppercase tracking-widest">
              <span className="material-symbols-outlined text-[16px] text-[#00eefc]">
                fingerprint
              </span>
              <span>SPIDER-SOCIETY REGISTRY // ARCHIVE DEPT</span>
            </div>
            <h2 className="font-headline text-3xl lg:text-4xl text-[#e3e1e9] uppercase tracking-tight font-bold">
              THE SPIDER-VARIANTS SPOTLIGHT
            </h2>
          </div>
          <p className="font-body text-sm text-[#8F9CAE] max-w-md leading-relaxed">
            Switch frequencies to synchronize biometrics, battle traits, dimensional origins, and
            custom powers across active Spider-Totems.
          </p>
        </div>

        {/* Character Switcher Tabs */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-2">
          {SPIDER_VARIANTS.map((variant) => {
            const isActive = selectedVariant.id === variant.id;
            return (
              <button
                key={variant.id}
                onClick={() => handleVariantSelect(variant)}
                className={`p-3 text-left font-mono-tech text-xs transition-all shadow-ink flex flex-col gap-1 cursor-pointer border ${
                  isActive
                    ? 'bg-[#34343a] text-[#7df4ff] border-[#00eefc]/60 shadow-[0_0_15px_rgba(0,238,252,0.3)]'
                    : 'bg-[#1e1f25] text-[#8F9CAE] border-[#292a2f] hover:bg-[#292a2f] hover:text-[#e3e1e9]'
                }`}
              >
                <span className="text-[10px] text-[#8F9CAE] uppercase">{variant.earthCode}</span>
                <span className="font-bold text-[#e3e1e9] truncate">{variant.name}</span>
                <span className="text-[10px] font-bold text-[#ff525e]">{variant.sigLabel.split(' ')[0]}</span>
              </button>
            );
          })}
        </div>

        {/* Active Character Interactive Showcase Panel */}
        <div
          id="character-card-container"
          className={`bg-[#1e1f25] p-6 shadow-ink-xl grid grid-cols-1 lg:grid-cols-12 gap-8 relative overflow-hidden border border-[#292a2f] transition-all duration-300 ${
            isPowerTesting ? 'shadow-[0_0_40px_rgba(0,238,252,0.7)] border-[#00eefc]' : ''
          }`}
        >
          {/* Character Image Showcase */}
          <div className="lg:col-span-5 relative min-h-[380px] bg-[#0d0e13] overflow-hidden flex items-end justify-center border border-[#292a2f]">
            <img
              src={selectedVariant.imageUrl}
              alt={selectedVariant.name}
              className="w-full h-full object-cover object-top transition-transform duration-500 hover:scale-105"
              onError={(e) => {
                e.currentTarget.src =
                  'https://lh3.googleusercontent.com/aida-public/AB6AXuCTeh2VNcIlBWKQ1A17VGLIch3TK8PRczGPEghdig6_AS7e4v5VtlBjeqyhpN0N9J7GjLrTQmHHC3YvoeDzzwd4meFtfq-Jz_JwcwTpVjuJsr_UgT8tK7uR2L0rJGP0Wi2dqBI7VsJB5R9Zf_nqrI7tzffb22RatSlHO752_G-rK6FskCvfNblYvRgN4UKxiHshMX3B89CGnZZ_tJf-MZdXZMXKrzDmKRN8qyA9win_63NP_VnQuAQB_w';
              }}
            />

            {/* Speech Bubble Overlay */}
            <div className="absolute top-4 left-4 right-4 bg-white text-black p-3 shadow-ink relative">
              <div className="font-headline text-sm lg:text-base uppercase tracking-tight font-extrabold">
                {selectedVariant.quote}
              </div>
              {/* Comic Bubble Pointer */}
              <div className="absolute -bottom-2 left-6 w-0 h-0 border-l-[8px] border-l-transparent border-r-[8px] border-r-transparent border-t-[8px] border-t-white" />
            </div>

            {/* Universe Badge */}
            <div className="absolute bottom-3 right-3 px-2 py-0.5 bg-black/85 backdrop-blur font-mono-tech text-[10px] text-[#00eefc] border border-[#00eefc]/30">
              {selectedVariant.universe}
            </div>
          </div>

          {/* Character Stats & Controls */}
          <div className="lg:col-span-7 flex flex-col justify-between gap-6">
            <div>
              {/* Title & Badges */}
              <div className="flex items-center justify-between">
                <span className="font-mono-tech text-xs text-[#ffb3b2] uppercase tracking-wider font-bold">
                  {selectedVariant.alias}
                </span>
                <span className="px-2 py-0.5 bg-[#00eefc] text-black font-mono-tech text-[10px] uppercase font-bold">
                  {selectedVariant.status}
                </span>
              </div>
              <h3 className="font-headline text-3xl lg:text-4xl text-[#e3e1e9] uppercase font-bold mt-1">
                {selectedVariant.name}
              </h3>
              <p className="font-body text-sm text-[#8F9CAE] mt-2 leading-relaxed">
                {selectedVariant.desc}
              </p>
            </div>

            {/* Power Radar Bars */}
            <div className="flex flex-col gap-3 bg-[#1a1b21] p-4 border border-[#292a2f]">
              <div className="flex items-center justify-between font-mono-tech text-xs">
                <span className="text-[#8F9CAE] uppercase">POWER ATTRIBUTES ANALYSIS</span>
                <span className="text-[#7df4ff]">SYS // CALIBRATED</span>
              </div>

              {/* Stat 1: Agility */}
              <div className="flex flex-col gap-1">
                <div className="flex justify-between font-mono-tech text-xs">
                  <span>AGILITY & REFLEXES</span>
                  <span className="font-bold text-[#d3fbff]">{selectedVariant.agility} / 100</span>
                </div>
                <div className="w-full h-2.5 bg-[#34343a] overflow-hidden">
                  <div
                    className="h-full bg-[#00eefc] transition-all duration-500"
                    style={{ width: `${selectedVariant.agility}%` }}
                  />
                </div>
              </div>

              {/* Stat 2: Spider-Sense */}
              <div className="flex flex-col gap-1">
                <div className="flex justify-between font-mono-tech text-xs">
                  <span>SPIDER-SENSE LATENCY</span>
                  <span className="font-bold text-[#ff525e]">{selectedVariant.sense} / 100</span>
                </div>
                <div className="w-full h-2.5 bg-[#34343a] overflow-hidden">
                  <div
                    className="h-full bg-[#ff525e] transition-all duration-500"
                    style={{ width: `${selectedVariant.sense}%` }}
                  />
                </div>
              </div>

              {/* Stat 3: Signature Power */}
              <div className="flex flex-col gap-1">
                <div className="flex justify-between font-mono-tech text-xs">
                  <span>{selectedVariant.sigLabel}</span>
                  <span className="font-bold text-yellow-400">{selectedVariant.sigVal} / 100</span>
                </div>
                <div className="w-full h-2.5 bg-[#34343a] overflow-hidden">
                  <div
                    className="h-full bg-yellow-400 transition-all duration-500"
                    style={{ width: `${selectedVariant.sigVal}%` }}
                  />
                </div>
              </div>

              {/* Stat 4: Intellect */}
              <div className="flex flex-col gap-1">
                <div className="flex justify-between font-mono-tech text-xs">
                  <span>TACTICAL ADAPTATION / INTELLECT</span>
                  <span className="font-bold text-[#f1dbff]">{selectedVariant.intellect} / 100</span>
                </div>
                <div className="w-full h-2.5 bg-[#34343a] overflow-hidden">
                  <div
                    className="h-full bg-[#b86dfd] transition-all duration-500"
                    style={{ width: `${selectedVariant.intellect}%` }}
                  />
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center justify-between gap-3 pt-1">
              <div className="flex items-center gap-1.5 font-mono-tech text-xs text-[#8F9CAE]">
                <span className="material-symbols-outlined text-[18px] text-[#00eefc]">
                  verified
                </span>
                <span>CANON EVENT INDEX: #{selectedVariant.canonEventsCount} RESOLVED</span>
              </div>
              <div className="flex items-center gap-3">
                <button
                  onClick={handleTestPower}
                  className={`px-4 py-2 font-mono-tech text-xs uppercase font-bold tracking-wider transition-all shadow-ink flex items-center gap-1.5 cursor-pointer ${
                    isPowerTesting
                      ? 'bg-[#00eefc] text-black shadow-[0_0_20px_rgba(0,238,252,0.8)]'
                      : 'bg-yellow-400 text-black hover:bg-yellow-300'
                  }`}
                >
                  <span
                    className={`material-symbols-outlined text-[16px] ${
                      isPowerTesting ? 'animate-spin' : ''
                    }`}
                  >
                    bolt
                  </span>
                  <span>{isPowerTesting ? 'DISCHARGING POWER FREQUENCY!' : selectedVariant.powerAction}</span>
                </button>

                <button
                  onClick={() => onInspectHero(selectedVariant)}
                  className="p-2 bg-[#292a2f] hover:bg-[#38393f] text-[#e3e1e9] font-mono-tech text-xs shadow-ink cursor-pointer"
                  title="Inspect Full Variant Dossier"
                >
                  <span className="material-symbols-outlined text-[18px]">open_in_full</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ======================================================== */}
      {/* 3. MARVEL MULTIVERSE ALL-STAR MATRIX (Iconic Heroes) */}
      {/* ======================================================== */}
      <section className="w-full px-4 lg:px-8 py-14 bg-[#121318] flex flex-col gap-6 border-b border-[#292a2f]">
        {/* Matrix Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 font-mono-tech text-xs text-[#ff525e] uppercase tracking-widest font-bold">
              <span className="material-symbols-outlined text-[16px]">grid_view</span>
              <span>MULTIVERSE ENTITY REGISTRY // OVERARCHING TIERS</span>
            </div>
            <h2 className="font-headline text-3xl lg:text-4xl text-[#e3e1e9] uppercase tracking-tight font-bold">
              THE MARVEL MULTIVERSE ALL-STAR MATRIX
            </h2>
          </div>
          <p className="font-body text-sm text-[#8F9CAE] max-w-md leading-relaxed">
            Cross-reference Spider-Man's tactical threat levels and cosmic synergy with the most
            powerful icons in the Marvel pantheon.
          </p>
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center gap-2 font-mono-tech text-xs">
          {[
            { id: 'all', label: '[ALL HEROES]' },
            { id: 'avengers', label: '[AVENGERS TIERS]' },
            { id: 'cosmic', label: '[COSMIC BEINGS]' },
            { id: 'mutant', label: '[MUTANT KIN]' },
            { id: 'midnight', label: '[MIDNIGHT SONS]' },
            { id: 'villain', label: '[VILLAIN LABS]' },
          ].map((filter) => {
            const isActive = activeMatrixFilter === filter.id;
            return (
              <button
                key={filter.id}
                onClick={() => {
                  multiverseAudio.playThwip();
                  setActiveMatrixFilter(filter.id);
                }}
                className={`px-3 py-1.5 uppercase transition-all shadow-ink cursor-pointer ${
                  isActive
                    ? 'bg-[#ff525e] text-black font-bold shadow-[0_0_15px_rgba(255,82,94,0.4)]'
                    : 'bg-[#292a2f] text-[#8F9CAE] hover:text-[#e3e1e9]'
                }`}
              >
                {filter.label}
              </button>
            );
          })}
        </div>

        {/* 8 Character Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {filteredHeroes.map((hero) => (
            <div
              key={hero.id}
              className="bg-[#1e1f25] p-4 flex flex-col justify-between gap-4 shadow-ink hover:shadow-[0_0_20px_rgba(255,82,94,0.4)] transition-all border border-[#292a2f]"
            >
              <div className="flex flex-col gap-3">
                <div className="relative h-56 bg-[#0d0e13] overflow-hidden border border-[#292a2f]">
                  <img
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                    src={hero.imageUrl}
                    alt={hero.name}
                    onError={(e) => {
                      e.currentTarget.src =
                        'https://lh3.googleusercontent.com/aida-public/AB6AXuCTeh2VNcIlBWKQ1A17VGLIch3TK8PRczGPEghdig6_AS7e4v5VtlBjeqyhpN0N9J7GjLrTQmHHC3YvoeDzzwd4meFtfq-Jz_JwcwTpVjuJsr_UgT8tK7uR2L0rJGP0Wi2dqBI7VsJB5R9Zf_nqrI7tzffb22RatSlHO752_G-rK6FskCvfNblYvRgN4UKxiHshMX3B89CGnZZ_tJf-MZdXZMXKrzDmKRN8qyA9win_63NP_VnQuAQB_w';
                    }}
                  />
                  <span className={`absolute top-2 left-2 px-2 py-0.5 ${hero.tagColor} font-mono-tech text-[10px] uppercase font-bold shadow-sm`}>
                    {hero.tagBadge}
                  </span>
                  <span className="absolute bottom-2 right-2 px-2 py-0.5 bg-black/85 font-mono-tech text-[9px] text-[#7df4ff]">
                    APP: {hero.firstApp.split('(')[0]}
                  </span>
                </div>

                <div className="flex items-center justify-between">
                  <h4 className="font-headline text-lg text-[#e3e1e9] uppercase font-bold">
                    {hero.name}
                  </h4>
                  <span className="font-mono-tech text-xs text-[#00eefc]">LVL {hero.level}</span>
                </div>
                <p className="font-body text-xs text-[#8F9CAE] leading-relaxed line-clamp-3">
                  {hero.shortDesc}
                </p>
              </div>

              <div className="flex flex-col gap-1.5 pt-1 bg-[#1a1b21] p-2 border border-[#292a2f]">
                <div className="flex justify-between font-mono-tech text-[10px] text-[#8F9CAE]">
                  <span>{hero.powerMeterLabel}</span>
                  <span className="text-[#7df4ff] font-bold">{hero.powerMeterVal}</span>
                </div>
                <div className="w-full h-1.5 bg-[#34343a] overflow-hidden">
                  <div
                    className={`h-full ${hero.powerBarColor}`}
                    style={{ width: `${hero.powerPercent}%` }}
                  />
                </div>
                <button
                  onClick={() => {
                    multiverseAudio.playThwip();
                    onInspectHero(hero);
                  }}
                  className="mt-2 w-full py-1.5 bg-[#292a2f] hover:bg-[#34343a] text-[#e3e1e9] text-xs font-mono-tech uppercase tracking-wider text-center cursor-pointer transition-colors"
                >
                  INSPECT BIO & POWERS
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ======================================================== */}
      {/* 4. MULTIVERSE CRISIS SIMULATOR & BATTLE COMPARATOR */}
      {/* ======================================================== */}
      <section className="w-full px-4 lg:px-8 py-14 bg-[#1a1b21] flex flex-col gap-6 border-b border-[#292a2f]">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 font-mono-tech text-xs text-[#7df4ff] uppercase tracking-widest font-bold">
              <span className="material-symbols-outlined text-[16px] text-[#00eefc]">swords</span>
              <span>SPIDER-HQ TACTICAL DRILL // COMPARISON ENGINE</span>
            </div>
            <h2 className="font-headline text-3xl lg:text-4xl text-[#e3e1e9] uppercase tracking-tight font-bold">
              MULTIVERSE CRISIS SIMULATOR
            </h2>
          </div>
          <p className="font-body text-sm text-[#8F9CAE] max-w-md leading-relaxed">
            Test hypothetical canon battles. Calculate victory probabilities between Spider-Man and
            chosen Marvel heavyweights in real-time.
          </p>
        </div>

        {/* Interactive Battle Comparator Workspace */}
        <div className="bg-[#1e1f25] p-6 shadow-ink-xl grid grid-cols-1 lg:grid-cols-12 gap-6 items-center border border-[#292a2f]">
          {/* Side A: Spider-Man */}
          <div className="lg:col-span-4 bg-[#1a1b21] p-4 flex flex-col gap-3 border-2 border-[#ff525e]/30 shadow-ink">
            <div className="flex items-center justify-between">
              <span className="font-mono-tech text-[10px] px-2 py-0.5 bg-[#ff525e] text-black font-bold uppercase">
                CHALLENGER A // TOTEM
              </span>
              <span className="font-mono-tech text-xs text-[#7df4ff]">EARTH-616</span>
            </div>
            <div className="relative h-44 bg-[#0d0e13] overflow-hidden border border-[#292a2f]">
              <img
                className="w-full h-full object-cover"
                alt="Classic Spider-Man crouched in mid-air firing web lines"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCELeeHCp_Gmf8YFvQWtUWfyByHA1beYtyIfEGm8eh0TJIxioE6JaIWuFVFYzztvZ1VlC5ri9givzlmrXer61ZhJvDWtxNsVtRkXNaJk69yJz55dh66pDBwp3vaN5b4hpSKXrZIsIdF6oEIvaWSM1TzzFcwRSguXs4bD_VWnmO5DL4um_y2EdGMp9n74fV47kjarObWtisHkaFjzWJZKE1Oe8ldjQCpt3y8QwMv9Qrv2yZagqIbhiNJfg"
              />
              <div className="absolute bottom-2 left-2 bg-black/85 px-2 py-0.5 text-[#e3e1e9] font-headline text-sm uppercase font-bold">
                SPIDER-MAN
              </div>
            </div>
            <div className="flex flex-col gap-1 text-xs font-mono-tech">
              <div className="flex justify-between">
                <span className="text-[#8F9CAE]">AGILITY RATING:</span>
                <span className="text-[#7df4ff] font-bold">99 / 100</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#8F9CAE]">COMBAT IQ:</span>
                <span className="text-[#deb7ff] font-bold">95 / 100</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#8F9CAE]">REACTIVE SENSE:</span>
                <span className="text-[#ff525e] font-bold">99 / 100</span>
              </div>
            </div>
          </div>

          {/* Center: Power Balance Bars & Matchup Selector */}
          <div className="lg:col-span-4 flex flex-col gap-4 text-center">
            <div className="font-headline text-lg uppercase tracking-tight text-yellow-400 font-extrabold">
              VS MULTIVERSE RIVAL
            </div>

            {/* Dropdown Selector */}
            <div className="flex flex-col gap-1 text-left">
              <label className="font-mono-tech text-[10px] text-[#8F9CAE] uppercase font-bold">
                SELECT OPPONENT FROM DATABASE:
              </label>
              <select
                value={selectedRivalKey}
                onChange={(e) => {
                  setSelectedRivalKey(e.target.value);
                  multiverseAudio.playThwip();
                }}
                className="w-full p-2.5 bg-[#0d0e13] text-[#e3e1e9] font-mono-tech text-xs border border-[#292a2f] focus:outline-none focus:border-[#00eefc] cursor-pointer"
              >
                <option value="wolverine">WOLVERINE [LOGAN - EARTH-616]</option>
                <option value="ironman">IRON MAN [TONY STARK - NANOTECH 85]</option>
                <option value="venom">VENOM [EDDIE BROCK - SYMBIOTE]</option>
                <option value="deadpool">DEADPOOL [WADE WILSON - 4TH WALL]</option>
                <option value="thor">THOR ODINSON [ASGARDIAN GOD]</option>
                <option value="doctorstrange">DOCTOR STRANGE [SORCERER SUPREME]</option>
              </select>
            </div>

            {/* Dynamic Win Probability Meter */}
            <div className="flex flex-col gap-2 bg-[#0d0e13] p-3 border border-[#292a2f]">
              <div className="flex justify-between items-center font-mono-tech text-xs">
                <span className="text-[#ff525e] font-bold">
                  SPIDER-MAN: {currentRival.spideyProb}%
                </span>
                <span className="text-[#8F9CAE] text-[10px]">WIN ALGORITHM</span>
                <span className="text-[#7df4ff] font-bold">
                  RIVAL: {currentRival.rivalProb}%
                </span>
              </div>

              <div className="w-full h-4 bg-[#292a2f] flex overflow-hidden border border-[#292a2f]">
                <div
                  className="h-full bg-[#ff525e] transition-all duration-500"
                  style={{ width: `${currentRival.spideyProb}%` }}
                />
                <div
                  className="h-full bg-[#00eefc] transition-all duration-500"
                  style={{ width: `${currentRival.rivalProb}%` }}
                />
              </div>

              <div className="font-mono-tech text-[11px] text-[#8F9CAE] text-left leading-relaxed">
                {currentRival.verdict}
              </div>
            </div>

            <button
              onClick={handleRunSimulation}
              className="w-full py-2.5 bg-yellow-400 hover:bg-yellow-300 text-black font-mono-tech text-xs uppercase tracking-wider font-bold shadow-ink flex items-center justify-center gap-2 cursor-pointer transition-colors"
            >
              <span
                className={`material-symbols-outlined text-[18px] ${
                  isSimulating ? 'animate-spin' : ''
                }`}
              >
                play_circle
              </span>
              <span>{isSimulating ? 'CALCULATING TIMELINES...' : 'RE-SIMULATE CRISIS PARADOX'}</span>
            </button>
          </div>

          {/* Side B: Selected Marvel Rival */}
          <div className="lg:col-span-4 bg-[#1a1b21] p-4 flex flex-col gap-3 border-2 border-[#00eefc]/30 shadow-ink">
            <div className="flex items-center justify-between">
              <span className="font-mono-tech text-[10px] px-2 py-0.5 bg-[#00eefc] text-black font-bold uppercase">
                {currentRival.tier}
              </span>
              <span className="font-mono-tech text-xs text-[#8F9CAE]">{currentRival.universe}</span>
            </div>
            <div className="relative h-44 bg-[#0d0e13] overflow-hidden border border-[#292a2f]">
              <img
                className="w-full h-full object-cover"
                alt={currentRival.name}
                src={currentRival.imageUrl}
                onError={(e) => {
                  e.currentTarget.src =
                    'https://lh3.googleusercontent.com/aida-public/AB6AXuCTeh2VNcIlBWKQ1A17VGLIch3TK8PRczGPEghdig6_AS7e4v5VtlBjeqyhpN0N9J7GjLrTQmHHC3YvoeDzzwd4meFtfq-Jz_JwcwTpVjuJsr_UgT8tK7uR2L0rJGP0Wi2dqBI7VsJB5R9Zf_nqrI7tzffb22RatSlHO752_G-rK6FskCvfNblYvRgN4UKxiHshMX3B89CGnZZ_tJf-MZdXZMXKrzDmKRN8qyA9win_63NP_VnQuAQB_w';
                }}
              />
              <div className="absolute bottom-2 left-2 bg-black/85 px-2 py-0.5 text-[#e3e1e9] font-headline text-sm uppercase font-bold">
                {currentRival.name}
              </div>
            </div>
            <div className="flex flex-col gap-1 text-xs font-mono-tech">
              <div className="flex justify-between">
                <span className="text-[#8F9CAE]">{currentRival.stat1Label}</span>
                <span className="text-[#7df4ff] font-bold">{currentRival.stat1}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#8F9CAE]">{currentRival.stat2Label}</span>
                <span className="text-[#deb7ff] font-bold">{currentRival.stat2}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#8F9CAE]">{currentRival.stat3Label}</span>
                <span className="text-[#ff525e] font-bold">{currentRival.stat3}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ======================================================== */}
      {/* 5. COMIC VAULT & SOUNDBYTES (GEN-Z VIBES) */}
      {/* ======================================================== */}
      <section className="w-full px-4 lg:px-8 py-14 bg-[#121318] flex flex-col gap-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Mixtape Widget */}
          <div className="lg:col-span-7 bg-[#1e1f25] p-6 shadow-ink-lg flex flex-col justify-between gap-5 border border-[#292a2f]">
            <div>
              <div className="flex items-center justify-between pb-3 border-b border-[#292a2f]">
                <div className="flex items-center gap-2 font-mono-tech text-xs text-[#00eefc] uppercase tracking-wider font-bold">
                  <span className="material-symbols-outlined text-[18px]">graphic_eq</span>
                  <span>MULTIVERSE CASSETTE // LO-FI PHONK DECK</span>
                </div>
                <span className="font-mono-tech text-xs text-[#ffb3b2]">
                  BPM: {activeTrack.bpm} // 24-BIT
                </span>
              </div>
              <h3 className="font-headline text-2xl lg:text-3xl text-[#e3e1e9] uppercase font-bold mt-3">
                THE MULTIVERSE MIXTAPE
              </h3>
              <p className="font-body text-xs text-[#8F9CAE] mt-1 leading-relaxed">
                Curated playlist capturing the street beats of Brooklyn 1610, the glitch distortion
                of Nueva York 2099, and the riot-grrrl anarchy of Earth-65.
              </p>
            </div>

            {/* Track Playlist items */}
            <div className="flex flex-col gap-2">
              {MIXTAPE_TRACKS.map((track) => {
                const isSelected = activeTrack.id === track.id;
                const isThisPlaying = isSelected && isPlayingTrack;
                return (
                  <div
                    key={track.id}
                    onClick={() => handleToggleTrack(track)}
                    className={`p-3 flex items-center justify-between transition-all cursor-pointer border ${
                      isThisPlaying
                        ? 'bg-[#292a2f] border-[#00eefc] text-[#7df4ff]'
                        : isSelected
                        ? 'bg-[#292a2f] border-[#292a2f] text-[#e3e1e9]'
                        : 'bg-[#1a1b21] border-[#292a2f] hover:bg-[#292a2f] text-[#e3e1e9]'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <span
                        className={`material-symbols-outlined ${
                          isThisPlaying ? 'text-[#00eefc] scale-125' : 'text-[#8F9CAE]'
                        }`}
                      >
                        {isThisPlaying ? 'volume_up' : 'play_arrow'}
                      </span>
                      <div className="flex flex-col">
                        <span className="font-headline text-sm font-bold">{track.title}</span>
                        <span className="font-mono-tech text-[10px] text-[#8F9CAE]">
                          {track.artist} ({track.subGenre})
                        </span>
                      </div>
                    </div>
                    <span className="font-mono-tech text-xs text-[#7df4ff]">{track.duration}</span>
                  </div>
                );
              })}
            </div>

            {/* Audio Progress Line */}
            <div className="flex items-center gap-3 pt-2">
              <span className="font-mono-tech text-[10px] text-[#8F9CAE]">01:45</span>
              <div className="flex-1 h-2 bg-[#0d0e13] relative overflow-hidden border border-[#292a2f]">
                <div
                  className="h-full bg-gradient-to-r from-[#00eefc] to-[#ff525e]"
                  style={{ width: isPlayingTrack ? '64%' : '48%' }}
                />
              </div>
              <span className="font-mono-tech text-[10px] text-[#8F9CAE]">
                {activeTrack.duration}
              </span>
            </div>
          </div>

          {/* Live Comic Drops & Glitch Ticker */}
          <div className="lg:col-span-5 bg-[#1e1f25] p-6 shadow-ink-lg flex flex-col justify-between gap-5 border border-[#292a2f]">
            <div>
              <div className="flex items-center justify-between pb-3 border-b border-[#292a2f]">
                <span className="font-mono-tech text-xs text-[#ff525e] uppercase font-bold tracking-wider">
                  MARVEL UNLIMITED VAULT DROPS
                </span>
                <span className="font-mono-tech text-xs text-yellow-400 flex items-center gap-1">
                  <span className="w-2 h-2 rounded-full bg-yellow-400 animate-ping" />
                  LIVE SYNC
                </span>
              </div>
              <h3 className="font-headline text-2xl lg:text-3xl text-[#e3e1e9] uppercase font-bold mt-3">
                FAN ARTIFACTS & ANOMALIES
              </h3>
              <p className="font-body text-xs text-[#8F9CAE] mt-1 leading-relaxed">
                Real-time digital mintings, restored variant covers, and canon anomalies recorded by
                the Spider-Society core.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div className="bg-[#0d0e13] p-3 flex flex-col gap-1 border border-[#292a2f]">
                <span className="font-mono-tech text-[10px] text-[#8F9CAE] uppercase">
                  TOTAL VARIANTS
                </span>
                <span className="font-mono-tech text-2xl text-[#7df4ff] font-bold">1,489</span>
                <span className="text-[11px] font-mono-tech text-[#00eefc]">+24 This Cycle</span>
              </div>
              <div className="bg-[#0d0e13] p-3 flex flex-col gap-1 border border-[#292a2f]">
                <span className="font-mono-tech text-[10px] text-[#8F9CAE] uppercase">
                  CANON BREACHES
                </span>
                <span className="font-mono-tech text-2xl text-[#ff525e] font-bold">03</span>
                <span className="text-[11px] font-mono-tech text-[#ffb3b2]">Contained by 2099</span>
              </div>
            </div>

            {/* Issue Showcase Pill */}
            <div className="bg-[#292a2f] p-3 flex items-center justify-between border border-[#34343a]">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-[#ff525e] flex items-center justify-center font-headline text-lg text-black font-extrabold shadow-sm">
                  #1
                </div>
                <div className="flex flex-col">
                  <span className="font-headline text-sm text-[#e3e1e9] font-bold">
                    EDGE OF SPIDER-VERSE #1
                  </span>
                  <span className="font-mono-tech text-[10px] text-[#8F9CAE]">
                    FIRST APPEARANCE: SPIDER-GWEN
                  </span>
                </div>
              </div>
              <button
                onClick={onLaunchPortal}
                className="px-3 py-1 bg-[#1e1f25] hover:bg-[#34343a] text-[#7df4ff] font-mono-tech text-xs uppercase border border-[#00eefc]/30 cursor-pointer"
              >
                VIEW VAULT
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
