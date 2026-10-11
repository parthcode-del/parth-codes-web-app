import React from 'react';
import { MarvelHero, SpiderVariant } from '../data/marvelData';
import { multiverseAudio } from '../utils/multiverseAudio';

interface HeroDrawerModalProps {
  hero: MarvelHero | SpiderVariant | null;
  onClose: () => void;
}

export const HeroDrawerModal: React.FC<HeroDrawerModalProps> = ({ hero, onClose }) => {
  if (!hero) return null;

  const isSpider = 'sigLabel' in hero;
  const name = hero.name;
  const alias = isSpider ? (hero as SpiderVariant).alias : (hero as MarvelHero).realName;
  const category = isSpider ? (hero as SpiderVariant).universe : (hero as MarvelHero).tagBadge;
  const powers = isSpider ? (hero as SpiderVariant).desc : (hero as MarvelHero).powers;
  const firstApp = isSpider ? (hero as SpiderVariant).firstAppearance : (hero as MarvelHero).firstApp;
  const rating = isSpider ? (hero as SpiderVariant).threatLevel : `LVL ${(hero as MarvelHero).level}`;
  const synergy = isSpider
    ? `Canon Events Resolved: ${(hero as SpiderVariant).canonEventsCount} across the Web of Life & Destiny.`
    : (hero as MarvelHero).synergy;

  return (
    <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4 lg:p-6 animate-in fade-in duration-200">
      <div className="bg-[#1a1b21] max-w-xl w-full border border-[#262b3a] shadow-ink-xl flex flex-col gap-5 p-6 relative">
        {/* Header */}
        <div className="flex items-start justify-between border-b border-[#292a2f] pb-4">
          <div className="flex flex-col gap-1">
            <span className="font-mono-tech text-[10px] px-2 py-0.5 bg-[#ff525e] text-black font-bold uppercase tracking-wider w-fit">
              {category}
            </span>
            <h3 className="font-headline text-2xl lg:text-3xl text-[#e3e1e9] uppercase font-bold tracking-tight">
              {name}
            </h3>
            <span className="font-mono-tech text-xs text-[#7df4ff] tracking-wide">
              IDENTITY // {alias}
            </span>
          </div>
          <button
            onClick={() => {
              multiverseAudio.playThwip();
              onClose();
            }}
            className="p-1.5 bg-[#292a2f] hover:bg-[#34343a] text-[#e3e1e9] transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <span className="material-symbols-outlined text-[20px]">close</span>
          </button>
        </div>

        {/* Hero image and quick summary */}
        <div className="flex gap-4 items-center bg-[#121318] p-3 border border-[#292a2f]">
          <div className="w-20 h-24 shrink-0 bg-[#0d0e13] overflow-hidden border border-[#ff525e]/30">
            <img
              src={hero.imageUrl}
              alt={name}
              className="w-full h-full object-cover"
              onError={(e) => {
                e.currentTarget.src =
                  'https://lh3.googleusercontent.com/aida-public/AB6AXuCTeh2VNcIlBWKQ1A17VGLIch3TK8PRczGPEghdig6_AS7e4v5VtlBjeqyhpN0N9J7GjLrTQmHHC3YvoeDzzwd4meFtfq-Jz_JwcwTpVjuJsr_UgT8tK7uR2L0rJGP0Wi2dqBI7VsJB5R9Zf_nqrI7tzffb22RatSlHO752_G-rK6FskCvfNblYvRgN4UKxiHshMX3B89CGnZZ_tJf-MZdXZMXKrzDmKRN8qyA9win_63NP_VnQuAQB_w';
              }}
            />
          </div>
          <div className="flex flex-col gap-1 text-xs">
            <span className="font-mono-tech text-[#8F9CAE] uppercase">BIO & STATUS</span>
            <p className="text-[#e3e1e9] leading-relaxed">
              {isSpider ? (hero as SpiderVariant).quote : (hero as MarvelHero).shortDesc}
            </p>
          </div>
        </div>

        {/* Powers & Tactical Breakdown */}
        <div className="bg-[#121318] p-4 flex flex-col gap-2 font-body text-sm border border-[#292a2f]">
          <span className="font-mono-tech text-[11px] text-[#8F9CAE] uppercase font-bold tracking-wider">
            TACTICAL PROFILE & POWERS:
          </span>
          <p className="text-[#e3e1e9] leading-relaxed font-normal">{powers}</p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 gap-3 font-mono-tech text-xs">
          <div className="bg-[#0d0e13] p-3 flex flex-col gap-1 border border-[#292a2f]">
            <span className="text-[#8F9CAE] text-[10px] uppercase">FIRST COMIC ISSUE</span>
            <span className="text-[#7df4ff] font-bold">{firstApp}</span>
          </div>
          <div className="bg-[#0d0e13] p-3 flex flex-col gap-1 border border-[#292a2f]">
            <span className="text-[#8F9CAE] text-[10px] uppercase">POWER RATING INDEX</span>
            <span className="text-[#ff525e] font-bold">{rating}</span>
          </div>
        </div>

        {/* Multiverse Synergy */}
        <div className="bg-[#0d0e13] p-3 border border-[#292a2f]">
          <span className="text-[#8F9CAE] font-mono-tech text-[10px] uppercase tracking-wider block">
            SPIDER-MAN MULTIVERSE SYNERGY:
          </span>
          <span className="text-[#e3e1e9] text-xs font-body block mt-1 leading-relaxed">
            {synergy}
          </span>
        </div>

        {/* Action Button */}
        <button
          onClick={() => {
            multiverseAudio.playThwip();
            onClose();
          }}
          className="w-full py-2.5 bg-[#ff525e] hover:bg-[#ff7582] text-black font-mono-tech text-xs uppercase tracking-wider font-bold shadow-ink cursor-pointer transition-colors"
        >
          CLOSE ARCHIVE TELEMETRY
        </button>
      </div>
    </div>
  );
};
