import React, { useState } from 'react';
import { SPIDER_VARIANTS, MARVEL_HEROES, SpiderVariant, MarvelHero } from '../data/marvelData';
import { multiverseAudio } from '../utils/multiverseAudio';

export const PowerBattleMatrixView: React.FC = () => {
  const combinedRoster: (SpiderVariant | MarvelHero)[] = [...SPIDER_VARIANTS, ...MARVEL_HEROES];

  const [fighterAId, setFighterAId] = useState<string>(SPIDER_VARIANTS[0].id);
  const [fighterBId, setFighterBId] = useState<string>(MARVEL_HEROES[3].id); // Wolverine
  const [arenaTerrain, setArenaTerrain] = useState<string>('nyc');
  const [isSimulating, setIsSimulating] = useState(false);
  const [battleLogs, setBattleLogs] = useState<string[]>([
    'Combat Initialized: Distance 25 meters.',
    'Challenger A charges bio-electric venom spark.',
    'Challenger B unholsters Adamantium claws with audible clash.',
  ]);

  const fighterA = combinedRoster.find((c) => c.id === fighterAId) || combinedRoster[0];
  const fighterB = combinedRoster.find((c) => c.id === fighterBId) || combinedRoster[1];

  const isSpiderA = 'sigLabel' in fighterA;
  const isSpiderB = 'sigLabel' in fighterB;

  const scoreA = isSpiderA
    ? ((fighterA as SpiderVariant).agility + (fighterA as SpiderVariant).sense + (fighterA as SpiderVariant).sigVal + (fighterA as SpiderVariant).intellect) / 4
    : (fighterA as MarvelHero).level;

  const scoreB = isSpiderB
    ? ((fighterB as SpiderVariant).agility + (fighterB as SpiderVariant).sense + (fighterB as SpiderVariant).sigVal + (fighterB as SpiderVariant).intellect) / 4
    : (fighterB as MarvelHero).level;

  const totalScore = scoreA + scoreB;
  const probA = Math.round((scoreA / totalScore) * 100);
  const probB = 100 - probA;

  const handleRunSimulation = () => {
    setIsSimulating(true);
    multiverseAudio.playPow();

    setTimeout(() => {
      multiverseAudio.playBzzzt();
      const logs = [
        `Terrain Active: ${arenaTerrain.toUpperCase()} conditions applied.`,
        `${fighterA.name} opens with high-velocity evasive arc.`,
        `${fighterB.name} counters using signature offensive salvo.`,
        probA >= probB
          ? `Verdict: ${fighterA.name} gains tactical upper hand with ${probA}% dominance!`
          : `Verdict: ${fighterB.name} overpowers perimeter defenses with ${probB}% advantage!`,
      ];
      setBattleLogs(logs);
      setIsSimulating(false);
    }, 700);
  };

  return (
    <div className="flex flex-col w-full text-[#e3e1e9] px-4 lg:px-8 py-10 gap-8">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-[#292a2f] pb-6">
        <div>
          <div className="flex items-center gap-2 font-mono-tech text-xs text-[#ff525e] uppercase tracking-widest font-bold">
            <span className="material-symbols-outlined text-[16px]">sports_martial_arts</span>
            <span>TACTICAL ENGAGEMENT // HYPOTHETICAL DUEL SIMULATOR</span>
          </div>
          <h1 className="font-headline text-3xl lg:text-5xl text-[#e3e1e9] uppercase tracking-tight font-extrabold mt-1">
            POWER BATTLE MATRIX
          </h1>
          <p className="font-body text-sm text-[#8F9CAE] max-w-xl mt-2 leading-relaxed">
            Pit any two Marvel entities into the quantum simulation arena. Calculate victory margins,
            damage profiles, and tactical counters across varied battle dimensions.
          </p>
        </div>

        {/* Terrain Selector */}
        <div className="flex flex-col gap-1">
          <label className="font-mono-tech text-[10px] text-[#8F9CAE] uppercase font-bold">
            ARENA TERRAIN MATRIX:
          </label>
          <select
            value={arenaTerrain}
            onChange={(e) => setArenaTerrain(e.target.value)}
            className="p-2.5 bg-[#161a24] text-[#e3e1e9] font-mono-tech text-xs border border-[#292a2f] focus:outline-none focus:border-[#ff525e] cursor-pointer"
          >
            <option value="nyc">Manhattan Rooftops (Dense Web-Points)</option>
            <option value="collider">Alchemax Particle Collider (Quantum Rifts)</option>
            <option value="nueva-york">Nueva York 2099 Sky-Spire (High-Altitude)</option>
            <option value="mirror">Doctor Strange Mirror Dimension (Fractal Shifts)</option>
            <option value="battleworld">Battleworld Crater (Zero Obstacles)</option>
          </select>
        </div>
      </div>

      {/* Versus Comparison Stage */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
        {/* Fighter A Card */}
        <div className="lg:col-span-5 bg-[#1e1f25] border-2 border-[#ff525e]/40 p-6 shadow-ink-lg flex flex-col justify-between gap-4">
          <div className="flex flex-col gap-3">
            <div className="flex items-center justify-between">
              <span className="px-2 py-0.5 bg-[#ff525e] text-black font-mono-tech text-[10px] font-bold uppercase">
                CORNER A
              </span>
              <select
                value={fighterAId}
                onChange={(e) => setFighterAId(e.target.value)}
                className="bg-[#0d0e13] text-[#e3e1e9] text-xs font-mono-tech p-1.5 border border-[#292a2f]"
              >
                {combinedRoster.map((c) => (
                  <option key={c.id} value={c.id}>
                    {c.name}
                  </option>
                ))}
              </select>
            </div>

            <div className="relative h-64 bg-[#0d0e13] overflow-hidden border border-[#292a2f]">
              <img
                src={fighterA.imageUrl}
                alt={fighterA.name}
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.currentTarget.src =
                    'https://lh3.googleusercontent.com/aida-public/AB6AXuCTeh2VNcIlBWKQ1A17VGLIch3TK8PRczGPEghdig6_AS7e4v5VtlBjeqyhpN0N9J7GjLrTQmHHC3YvoeDzzwd4meFtfq-Jz_JwcwTpVjuJsr_UgT8tK7uR2L0rJGP0Wi2dqBI7VsJB5R9Zf_nqrI7tzffb22RatSlHO752_G-rK6FskCvfNblYvRgN4UKxiHshMX3B89CGnZZ_tJf-MZdXZMXKrzDmKRN8qyA9win_63NP_VnQuAQB_w';
                }}
              />
              <div className="absolute bottom-2 left-2 bg-black/85 px-3 py-1 font-headline text-lg font-bold uppercase text-[#e3e1e9]">
                {fighterA.name}
              </div>
            </div>

            <div className="flex flex-col gap-1 font-mono-tech text-xs bg-[#161a24] p-3 border border-[#292a2f]">
              <div className="flex justify-between">
                <span className="text-[#8F9CAE]">COMBAT RATING:</span>
                <span className="text-[#ff525e] font-bold">{scoreA.toFixed(1)} / 100</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#8F9CAE]">TERRAIN AFFINITY:</span>
                <span className="text-[#00eefc] font-bold">OPTIMAL</span>
              </div>
            </div>
          </div>
        </div>

        {/* Center: Probability Clash & Simulation Action */}
        <div className="lg:col-span-2 flex flex-col justify-center items-center gap-5 text-center bg-[#161a24] p-6 border border-[#292a2f] shadow-ink">
          <div className="w-14 h-14 bg-[#ff525e] text-black font-headline text-2xl font-extrabold flex items-center justify-center shadow-ink">
            VS
          </div>

          <div className="w-full flex flex-col gap-2">
            <span className="font-mono-tech text-[10px] text-[#8F9CAE] uppercase">
              VICTORY PROBABILITY
            </span>
            <div className="flex justify-between font-mono-tech text-xs font-bold">
              <span className="text-[#ff525e]">{probA}%</span>
              <span className="text-[#00eefc]">{probB}%</span>
            </div>
            <div className="w-full h-3 bg-[#0d0e13] flex overflow-hidden border border-[#292a2f]">
              <div
                className="h-full bg-[#ff525e] transition-all duration-500"
                style={{ width: `${probA}%` }}
              />
              <div
                className="h-full bg-[#00eefc] transition-all duration-500"
                style={{ width: `${probB}%` }}
              />
            </div>
          </div>

          <button
            onClick={handleRunSimulation}
            className="w-full py-3 bg-yellow-400 hover:bg-yellow-300 text-black font-mono-tech text-xs uppercase font-bold tracking-wider shadow-ink transition-all cursor-pointer"
          >
            {isSimulating ? 'SIMULATING...' : 'RUN CLASH'}
          </button>
        </div>

        {/* Fighter B Card */}
        <div className="lg:col-span-5 bg-[#1e1f25] border-2 border-[#00eefc]/40 p-6 shadow-ink-lg flex flex-col justify-between gap-4">
          <div className="flex flex-col gap-3">
            <div className="flex items-center justify-between">
              <span className="px-2 py-0.5 bg-[#00eefc] text-black font-mono-tech text-[10px] font-bold uppercase">
                CORNER B
              </span>
              <select
                value={fighterBId}
                onChange={(e) => setFighterBId(e.target.value)}
                className="bg-[#0d0e13] text-[#e3e1e9] text-xs font-mono-tech p-1.5 border border-[#292a2f]"
              >
                {combinedRoster.map((c) => (
                  <option key={c.id} value={c.id}>
                    {c.name}
                  </option>
                ))}
              </select>
            </div>

            <div className="relative h-64 bg-[#0d0e13] overflow-hidden border border-[#292a2f]">
              <img
                src={fighterB.imageUrl}
                alt={fighterB.name}
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.currentTarget.src =
                    'https://lh3.googleusercontent.com/aida-public/AB6AXuCTeh2VNcIlBWKQ1A17VGLIch3TK8PRczGPEghdig6_AS7e4v5VtlBjeqyhpN0N9J7GjLrTQmHHC3YvoeDzzwd4meFtfq-Jz_JwcwTpVjuJsr_UgT8tK7uR2L0rJGP0Wi2dqBI7VsJB5R9Zf_nqrI7tzffb22RatSlHO752_G-rK6FskCvfNblYvRgN4UKxiHshMX3B89CGnZZ_tJf-MZdXZMXKrzDmKRN8qyA9win_63NP_VnQuAQB_w';
                }}
              />
              <div className="absolute bottom-2 left-2 bg-black/85 px-3 py-1 font-headline text-lg font-bold uppercase text-[#e3e1e9]">
                {fighterB.name}
              </div>
            </div>

            <div className="flex flex-col gap-1 font-mono-tech text-xs bg-[#161a24] p-3 border border-[#292a2f]">
              <div className="flex justify-between">
                <span className="text-[#8F9CAE]">COMBAT RATING:</span>
                <span className="text-[#00eefc] font-bold">{scoreB.toFixed(1)} / 100</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#8F9CAE]">TERRAIN AFFINITY:</span>
                <span className="text-[#facc15] font-bold">COMPATIBLE</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Live Simulation Telemetry Terminal Log */}
      <div className="bg-[#0d0e13] border border-[#292a2f] p-5 flex flex-col gap-3 font-mono-tech text-xs shadow-ink">
        <div className="flex items-center justify-between border-b border-[#292a2f] pb-2 text-[#8F9CAE]">
          <span className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            AI COMBAT TELEMETRY LOG
          </span>
          <span>CYCLE: 14,000,605 SIMULATIONS COMPLETE</span>
        </div>
        <div className="flex flex-col gap-1.5 text-[#e3e1e9]">
          {battleLogs.map((log, idx) => (
            <div key={idx} className="flex items-start gap-2">
              <span className="text-[#ff525e]">{`>`}</span>
              <span>{log}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
