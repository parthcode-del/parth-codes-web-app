import React, { useState } from 'react';
import { SPIDER_VARIANTS, MARVEL_HEROES, SpiderVariant, MarvelHero } from '../data/marvelData';
import { multiverseAudio } from '../utils/multiverseAudio';

interface CharacterArchivesViewProps {
  onInspectHero: (hero: MarvelHero | SpiderVariant) => void;
  onSendToSimulator: (heroName: string) => void;
}

export const CharacterArchivesView: React.FC<CharacterArchivesViewProps> = ({
  onInspectHero,
  onSendToSimulator,
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedFaction, setSelectedFaction] = useState('all');

  const allCharacters: (SpiderVariant | MarvelHero)[] = [
    ...SPIDER_VARIANTS,
    ...MARVEL_HEROES,
  ];

  const filtered = allCharacters.filter((char) => {
    const isSpider = 'sigLabel' in char;
    const name = char.name.toLowerCase();
    const alias = (isSpider ? (char as SpiderVariant).alias : (char as MarvelHero).realName).toLowerCase();
    const matchesSearch = name.includes(searchQuery.toLowerCase()) || alias.includes(searchQuery.toLowerCase());

    if (!matchesSearch) return false;
    if (selectedFaction === 'all') return true;
    if (selectedFaction === 'spider') return isSpider;
    if (selectedFaction === 'avengers') return !isSpider && (char as MarvelHero).category === 'avengers';
    if (selectedFaction === 'mutant') return !isSpider && (char as MarvelHero).category === 'mutant';
    if (selectedFaction === 'cosmic') return !isSpider && (char as MarvelHero).category === 'cosmic';
    if (selectedFaction === 'midnight') return !isSpider && (char as MarvelHero).category === 'midnight';
    if (selectedFaction === 'villain') return !isSpider && (char as MarvelHero).category === 'villain';
    return true;
  });

  return (
    <div className="flex flex-col w-full text-[#e3e1e9] px-4 lg:px-8 py-10 gap-8">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-[#292a2f] pb-6">
        <div>
          <div className="flex items-center gap-2 font-mono-tech text-xs text-[#00eefc] uppercase tracking-widest font-bold">
            <span className="material-symbols-outlined text-[16px]">folder_special</span>
            <span>CENTRAL ARCHIVES // BIOMETRIC DOSSIERS</span>
          </div>
          <h1 className="font-headline text-3xl lg:text-5xl text-[#e3e1e9] uppercase tracking-tight font-extrabold mt-1">
            MULTIVERSE CHARACTER ARCHIVES
          </h1>
          <p className="font-body text-sm text-[#8F9CAE] max-w-xl mt-2 leading-relaxed">
            Exhaustive database of Spider-Society variants, Avengers prime operatives, mutant anomalies,
            and cosmic entities across alternate Earths.
          </p>
        </div>

        {/* Search Bar */}
        <div className="w-full md:w-80 relative">
          <input
            type="text"
            placeholder="SEARCH HERO, IDENTITY, OR UNIVERSE..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-[#161a24] border border-[#292a2f] text-xs font-mono-tech px-3 py-2.5 text-[#e3e1e9] placeholder:text-[#8F9CAE] focus:outline-none focus:border-[#00eefc]"
          />
          <span className="material-symbols-outlined absolute right-2.5 top-2.5 text-[#8F9CAE] text-[18px]">
            search
          </span>
        </div>
      </div>

      {/* Faction Filter Controls */}
      <div className="flex flex-wrap items-center gap-2 font-mono-tech text-xs">
        {[
          { id: 'all', label: '[ALL ARCHIVES]' },
          { id: 'spider', label: '[SPIDER-SOCIETY TOTEMS]' },
          { id: 'avengers', label: '[AVENGERS CORE]' },
          { id: 'mutant', label: '[MUTANTS & WEAPON X]' },
          { id: 'cosmic', label: '[COSMIC ENTITIES]' },
          { id: 'midnight', label: '[MIDNIGHT SONS]' },
          { id: 'villain', label: '[ROGUES & SYMBIOTES]' },
        ].map((f) => {
          const isActive = selectedFaction === f.id;
          return (
            <button
              key={f.id}
              onClick={() => {
                multiverseAudio.playThwip();
                setSelectedFaction(f.id);
              }}
              className={`px-3 py-1.5 uppercase transition-all shadow-ink cursor-pointer border ${
                isActive
                  ? 'bg-[#00eefc] text-black font-bold border-[#00eefc]'
                  : 'bg-[#1e1f25] text-[#8F9CAE] border-[#292a2f] hover:text-[#e3e1e9]'
              }`}
            >
              {f.label}
            </button>
          );
        })}
      </div>

      {/* Archive Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {filtered.map((item) => {
          const isSpider = 'sigLabel' in item;
          const name = item.name;
          const sub = isSpider ? (item as SpiderVariant).earthCode : (item as MarvelHero).tagBadge;
          const desc = isSpider ? (item as SpiderVariant).desc : (item as MarvelHero).shortDesc;
          const powerRating = isSpider
            ? (item as SpiderVariant).threatLevel
            : `LVL ${(item as MarvelHero).level}`;

          return (
            <div
              key={item.id}
              className="bg-[#1e1f25] border border-[#292a2f] p-4 flex flex-col justify-between gap-4 shadow-ink hover:shadow-[0_0_20px_rgba(0,238,252,0.35)] hover:border-[#00eefc]/50 transition-all group"
            >
              <div className="flex flex-col gap-3">
                <div className="relative h-60 bg-[#0d0e13] overflow-hidden border border-[#292a2f]">
                  <img
                    src={item.imageUrl}
                    alt={name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    onError={(e) => {
                      e.currentTarget.src =
                        'https://lh3.googleusercontent.com/aida-public/AB6AXuCTeh2VNcIlBWKQ1A17VGLIch3TK8PRczGPEghdig6_AS7e4v5VtlBjeqyhpN0N9J7GjLrTQmHHC3YvoeDzzwd4meFtfq-Jz_JwcwTpVjuJsr_UgT8tK7uR2L0rJGP0Wi2dqBI7VsJB5R9Zf_nqrI7tzffb22RatSlHO752_G-rK6FskCvfNblYvRgN4UKxiHshMX3B89CGnZZ_tJf-MZdXZMXKrzDmKRN8qyA9win_63NP_VnQuAQB_w';
                    }}
                  />
                  <span
                    className={`absolute top-2 left-2 px-2 py-0.5 font-mono-tech text-[10px] font-bold uppercase shadow-sm ${
                      isSpider ? 'bg-[#ff525e] text-black' : 'bg-[#00eefc] text-black'
                    }`}
                  >
                    {sub}
                  </span>
                  <span className="absolute bottom-2 right-2 px-2 py-0.5 bg-black/85 font-mono-tech text-[10px] text-yellow-400">
                    {powerRating}
                  </span>
                </div>

                <div className="flex flex-col gap-0.5">
                  <h3 className="font-headline text-xl text-[#e3e1e9] uppercase font-bold group-hover:text-[#00eefc] transition-colors">
                    {name}
                  </h3>
                  <span className="font-mono-tech text-[11px] text-[#8F9CAE]">
                    {isSpider ? (item as SpiderVariant).alias : (item as MarvelHero).realName}
                  </span>
                </div>

                <p className="font-body text-xs text-[#8F9CAE] leading-relaxed line-clamp-3">
                  {desc}
                </p>
              </div>

              <div className="flex flex-col gap-2 pt-2 border-t border-[#292a2f]">
                <div className="flex items-center justify-between text-[10px] font-mono-tech text-[#8F9CAE]">
                  <span>FIRST DEBUT:</span>
                  <span className="text-[#7df4ff]">
                    {isSpider
                      ? (item as SpiderVariant).firstAppearance.split('(')[0]
                      : (item as MarvelHero).firstApp.split('(')[0]}
                  </span>
                </div>
                <div className="grid grid-cols-2 gap-2">
                  <button
                    onClick={() => {
                      multiverseAudio.playThwip();
                      onInspectHero(item);
                    }}
                    className="py-1.5 bg-[#292a2f] hover:bg-[#38393f] text-[#e3e1e9] font-mono-tech text-xs uppercase cursor-pointer text-center"
                  >
                    DOSSIER
                  </button>
                  <button
                    onClick={() => {
                      multiverseAudio.playPow();
                      onSendToSimulator(item.name);
                    }}
                    className="py-1.5 bg-[#ff525e] hover:bg-[#ff7582] text-black font-mono-tech text-xs uppercase font-bold cursor-pointer text-center"
                  >
                    SIMULATE
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
