import React, { useState } from 'react';
import { COMIC_ARTIFACTS, ComicArtifact } from '../data/marvelData';
import { multiverseAudio } from '../utils/multiverseAudio';

export const ComicArtifactsView: React.FC = () => {
  const [selectedArtifact, setSelectedArtifact] = useState<ComicArtifact>(COMIC_ARTIFACTS[0]);
  const [lastSfxTriggered, setLastSfxTriggered] = useState<string | null>(null);

  const triggerSfx = (sfx: 'thwip' | 'bzzzt' | 'pow' | 'venom' | 'portal') => {
    setLastSfxTriggered(sfx.toUpperCase());
    if (sfx === 'thwip') multiverseAudio.playThwip();
    if (sfx === 'bzzzt') multiverseAudio.playBzzzt();
    if (sfx === 'pow') multiverseAudio.playPow();
    if (sfx === 'venom') multiverseAudio.playVenomBurst();
    if (sfx === 'portal') multiverseAudio.playPortalWarp();

    setTimeout(() => {
      setLastSfxTriggered(null);
    }, 1200);
  };

  return (
    <div className="flex flex-col w-full text-[#e3e1e9] px-4 lg:px-8 py-10 gap-8">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-[#292a2f] pb-6">
        <div>
          <div className="flex items-center gap-2 font-mono-tech text-xs text-[#facc15] uppercase tracking-widest font-bold">
            <span className="material-symbols-outlined text-[16px]">menu_book</span>
            <span>RESTRICTED VAULT // CGC GRADED MULTIVERSE CANON</span>
          </div>
          <h1 className="font-headline text-3xl lg:text-5xl text-[#e3e1e9] uppercase tracking-tight font-extrabold mt-1">
            COMIC ARTIFACTS & SOUNDBOARD
          </h1>
          <p className="font-body text-sm text-[#8F9CAE] max-w-xl mt-2 leading-relaxed">
            Authentic provenance archive of rare variant covers, first historical debuts, and the
            interactive Spider-Sense comic sound effects console.
          </p>
        </div>
      </div>

      {/* Comic SFX Interactive Soundboard Section */}
      <div className="bg-[#1e1f25] border-2 border-[#facc15]/40 p-6 shadow-ink-lg flex flex-col gap-5">
        <div className="flex items-center justify-between border-b border-[#292a2f] pb-3">
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-yellow-400">volume_up</span>
            <h2 className="font-headline text-xl font-bold uppercase text-[#e3e1e9]">
              INTERACTIVE COMIC SOUNDBOARD
            </h2>
          </div>
          <span className="font-mono-tech text-xs text-[#8F9CAE]">
            REAL-TIME WEB AUDIO SYNTHESIS
          </span>
        </div>

        {/* Buttons Grid */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          <button
            onClick={() => triggerSfx('thwip')}
            className="p-5 bg-yellow-400 hover:bg-yellow-300 text-black font-headline text-2xl font-extrabold uppercase shadow-ink transform hover:-translate-y-1 active:translate-y-0 transition-transform cursor-pointer flex flex-col items-center gap-2"
          >
            <span>THWIP!</span>
            <span className="font-mono-tech text-[10px] font-normal tracking-wide">
              Web-Fluid Slingshot
            </span>
          </button>

          <button
            onClick={() => triggerSfx('bzzzt')}
            className="p-5 bg-[#00eefc] hover:bg-[#7df4ff] text-black font-headline text-2xl font-extrabold uppercase shadow-ink transform hover:-translate-y-1 active:translate-y-0 transition-transform cursor-pointer flex flex-col items-center gap-2"
          >
            <span>BZZZT!</span>
            <span className="font-mono-tech text-[10px] font-normal tracking-wide">
              Electric Arc Drone
            </span>
          </button>

          <button
            onClick={() => triggerSfx('pow')}
            className="p-5 bg-[#ff525e] hover:bg-[#ff7582] text-white font-headline text-2xl font-extrabold uppercase shadow-ink transform hover:-translate-y-1 active:translate-y-0 transition-transform cursor-pointer flex flex-col items-center gap-2"
          >
            <span>POW!</span>
            <span className="font-mono-tech text-[10px] font-normal tracking-wide">
              Kinetic Smash Impact
            </span>
          </button>

          <button
            onClick={() => triggerSfx('venom')}
            className="p-5 bg-[#b86dfd] hover:bg-[#deb7ff] text-black font-headline text-2xl font-extrabold uppercase shadow-ink transform hover:-translate-y-1 active:translate-y-0 transition-transform cursor-pointer flex flex-col items-center gap-2"
          >
            <span>VENOM!</span>
            <span className="font-mono-tech text-[10px] font-normal tracking-wide">
              Bio-Electric Pulse
            </span>
          </button>

          <button
            onClick={() => triggerSfx('portal')}
            className="p-5 bg-[#34343a] hover:bg-[#4a4a52] text-[#00eefc] font-headline text-2xl font-extrabold uppercase shadow-ink transform hover:-translate-y-1 active:translate-y-0 transition-transform cursor-pointer flex flex-col items-center gap-2 border border-[#00eefc]/50"
          >
            <span>WARP!</span>
            <span className="font-mono-tech text-[10px] font-normal tracking-wide">
              Dimensional Tear
            </span>
          </button>
        </div>

        {/* Live Feedback Bubble */}
        {lastSfxTriggered && (
          <div className="self-center mt-2 px-6 py-2 bg-white text-black font-headline text-xl font-extrabold shadow-ink animate-bounce">
            {lastSfxTriggered} TRIGGERED ACROSS THE DIMENSION!
          </div>
        )}
      </div>

      {/* Comic Artifacts Vault Grid & Inspection */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Artifacts List */}
        <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-4">
          {COMIC_ARTIFACTS.map((artifact) => {
            const isSelected = selectedArtifact.id === artifact.id;
            return (
              <div
                key={artifact.id}
                onClick={() => {
                  multiverseAudio.playThwip();
                  setSelectedArtifact(artifact);
                }}
                className={`p-4 border transition-all cursor-pointer flex flex-col justify-between gap-3 shadow-ink ${
                  isSelected
                    ? 'bg-[#1e1f25] border-yellow-400 shadow-[0_0_15px_rgba(250,204,21,0.35)]'
                    : 'bg-[#161a24] border-[#292a2f] hover:border-[#38393f]'
                }`}
              >
                <div className="flex items-start justify-between">
                  <div>
                    <span className="font-mono-tech text-[10px] text-[#ff525e] font-bold">
                      {artifact.earthOrigin} // {artifact.year}
                    </span>
                    <h3 className="font-headline text-lg font-bold text-[#e3e1e9]">
                      {artifact.title}
                    </h3>
                  </div>
                  <span className="px-2 py-0.5 bg-yellow-400 text-black font-mono-tech text-[9px] font-bold uppercase">
                    {artifact.rarity}
                  </span>
                </div>

                <p className="font-body text-xs text-[#8F9CAE] leading-relaxed line-clamp-2">
                  {artifact.significance}
                </p>

                <div className="flex items-center justify-between font-mono-tech text-xs pt-2 border-t border-[#292a2f]">
                  <span className="text-[#00eefc] font-bold">{artifact.priceEstimate}</span>
                  <span className="text-[#8F9CAE] text-[10px]">{artifact.status}</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Selected Artifact Showcase Dossier */}
        <div className="lg:col-span-4 bg-[#1e1f25] border border-[#292a2f] p-6 shadow-ink-lg flex flex-col justify-between gap-5">
          <div className="flex flex-col gap-4">
            <div className="flex items-center justify-between border-b border-[#292a2f] pb-3">
              <span className="px-2 py-0.5 bg-yellow-400 text-black font-mono-tech text-[10px] font-bold uppercase">
                {selectedArtifact.rarity}
              </span>
              <span className="font-mono-tech text-xs text-[#00eefc]">
                {selectedArtifact.earthOrigin}
              </span>
            </div>

            {/* Vintage Comic Frame */}
            <div className="relative h-64 bg-[#0d0e13] border-2 border-[#292a2f] flex flex-col items-center justify-center p-4 text-center overflow-hidden">
              <div className="absolute inset-0 bg-halftone-pattern opacity-30" />
              <div className="relative z-10 flex flex-col items-center gap-2">
                <span className="w-12 h-12 bg-[#ff525e] text-black font-headline text-2xl font-black flex items-center justify-center shadow-ink">
                  {selectedArtifact.issueNumber}
                </span>
                <h3 className="font-headline text-xl font-bold uppercase text-[#e3e1e9]">
                  {selectedArtifact.title}
                </h3>
                <span className="font-mono-tech text-xs text-yellow-400">
                  {selectedArtifact.variantCover}
                </span>
              </div>
              <div className="absolute bottom-2 font-mono-tech text-[10px] text-[#8F9CAE]">
                CGC UNIVERSAL GRADE // CERT #8841920
              </div>
            </div>

            <div className="flex flex-col gap-1 text-xs font-body text-[#8F9CAE] bg-[#161a24] p-3 border border-[#292a2f]">
              <span className="font-mono-tech text-[10px] text-[#e3e1e9] uppercase font-bold">
                HISTORICAL SIGNIFICANCE:
              </span>
              <p className="leading-relaxed">{selectedArtifact.significance}</p>
            </div>
          </div>

          <div className="flex flex-col gap-2 pt-3 border-t border-[#292a2f]">
            <div className="flex justify-between font-mono-tech text-xs">
              <span className="text-[#8F9CAE]">ESTIMATED VALUE:</span>
              <span className="text-yellow-400 font-bold">{selectedArtifact.priceEstimate}</span>
            </div>
            <button
              onClick={() => {
                multiverseAudio.playPow();
                alert(`Artifact [${selectedArtifact.title}] secured in offline vault storage.`);
              }}
              className="w-full py-2.5 bg-[#00eefc] hover:bg-[#7df4ff] text-black font-mono-tech text-xs uppercase font-bold tracking-wider shadow-ink cursor-pointer transition-colors"
            >
              ACQUIRE DIGITAL MINT
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
