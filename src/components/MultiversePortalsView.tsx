import React, { useState } from 'react';
import { MULTIVERSE_PORTALS, DimensionPortal } from '../data/marvelData';
import { multiverseAudio } from '../utils/multiverseAudio';

interface MultiversePortalsViewProps {
  onSelectDimension: (dim: string) => void;
  onLaunchPortalModal: () => void;
}

export const MultiversePortalsView: React.FC<MultiversePortalsViewProps> = ({
  onSelectDimension,
  onLaunchPortalModal,
}) => {
  const [activePortal, setActivePortal] = useState<DimensionPortal>(MULTIVERSE_PORTALS[0]);
  const [anomalyContainment, setAnomalyContainment] = useState(88);
  const [frequencyTuning, setFrequencyTuning] = useState(activePortal.glitchHz);
  const [isSyncing, setIsSyncing] = useState(false);

  const handlePortalClick = (portal: DimensionPortal) => {
    setActivePortal(portal);
    setFrequencyTuning(portal.glitchHz);
    multiverseAudio.playThwip();
  };

  const handleSyncFrequency = () => {
    setIsSyncing(true);
    multiverseAudio.playBzzzt();
    setTimeout(() => {
      setIsSyncing(false);
      multiverseAudio.playPow();
      onSelectDimension(`${activePortal.code} // CALIBRATED`);
    }, 800);
  };

  return (
    <div className="flex flex-col w-full text-[#e3e1e9] px-4 lg:px-8 py-10 gap-8">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-[#292a2f] pb-6">
        <div>
          <div className="flex items-center gap-2 font-mono-tech text-xs text-[#00eefc] uppercase tracking-widest font-bold">
            <span className="material-symbols-outlined text-[16px]">all_inclusive</span>
            <span>THE WEB OF LIFE & DESTINY // DIMENSIONAL JUMP GATES</span>
          </div>
          <h1 className="font-headline text-3xl lg:text-5xl text-[#e3e1e9] uppercase tracking-tight font-extrabold mt-1">
            MULTIVERSE PORTALS GATEWAY
          </h1>
          <p className="font-body text-sm text-[#8F9CAE] max-w-xl mt-2 leading-relaxed">
            Monitor quantum anomaly spikes, calibrate interdimensional transit watches, and bridge
            spatial gaps between parallel Earths across the Spider-Society core.
          </p>
        </div>

        <button
          onClick={() => {
            multiverseAudio.playPortalWarp();
            onLaunchPortalModal();
          }}
          className="px-6 py-3 bg-[#ff525e] hover:bg-[#ff7582] text-black font-mono-tech text-xs font-bold uppercase tracking-wider shadow-ink hover:shadow-[0_0_20px_rgba(255,82,94,0.7)] cursor-pointer flex items-center gap-2 self-start md:self-end"
        >
          <span className="material-symbols-outlined text-[18px]">rocket_launch</span>
          <span>LAUNCH EXPEDITION JUMP</span>
        </button>
      </div>

      {/* Main Grid: Left Node List + Right Telemetry Control Deck */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left: Portals List */}
        <div className="lg:col-span-7 flex flex-col gap-3">
          <div className="flex items-center justify-between font-mono-tech text-xs text-[#8F9CAE] pb-2 border-b border-[#292a2f]">
            <span>ACTIVE DIMENSIONAL FREQUENCIES ({MULTIVERSE_PORTALS.length})</span>
            <span className="text-[#00eefc]">STATUS // ONLINE</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {MULTIVERSE_PORTALS.map((portal) => {
              const isSelected = activePortal.id === portal.id;
              return (
                <div
                  key={portal.id}
                  onClick={() => handlePortalClick(portal)}
                  className={`p-4 border transition-all cursor-pointer flex flex-col justify-between gap-3 shadow-ink ${
                    isSelected
                      ? 'bg-[#1e1f25] border-[#00eefc] shadow-[0_0_15px_rgba(0,238,252,0.35)]'
                      : 'bg-[#161a24] border-[#292a2f] hover:border-[#38393f]'
                  }`}
                >
                  <div className="flex items-start justify-between">
                    <div>
                      <span className="font-mono-tech text-[10px] text-[#ff525e] font-bold block">
                        {portal.code}
                      </span>
                      <h3 className="font-headline text-lg font-bold text-[#e3e1e9]">
                        {portal.name}
                      </h3>
                      <span className="font-mono-tech text-[10px] text-[#7df4ff]">
                        {portal.designation}
                      </span>
                    </div>
                    <span
                      className={`px-2 py-0.5 font-mono-tech text-[9px] font-bold uppercase ${
                        portal.status === 'STABLE'
                          ? 'bg-[#00eefc]/20 text-[#00eefc] border border-[#00eefc]/40'
                          : portal.status === 'CRITICAL BREACH'
                          ? 'bg-[#ff525e]/20 text-[#ff525e] border border-[#ff525e]/40'
                          : 'bg-yellow-400/20 text-yellow-400 border border-yellow-400/40'
                      }`}
                    >
                      {portal.status}
                    </span>
                  </div>

                  <p className="font-body text-xs text-[#8F9CAE] leading-relaxed line-clamp-2">
                    {portal.description}
                  </p>

                  <div className="flex items-center justify-between font-mono-tech text-[10px] text-[#8F9CAE] pt-2 border-t border-[#292a2f]">
                    <span>SPIDER: {portal.dominantSpider}</span>
                    <span className="text-yellow-400">{portal.glitchHz} Hz</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Right: Quantum Telemetry & Frequency Tuner */}
        <div className="lg:col-span-5 flex flex-col gap-4">
          <div className="bg-[#1e1f25] border border-[#292a2f] p-6 shadow-ink-lg flex flex-col gap-5">
            <div className="flex items-center justify-between border-b border-[#292a2f] pb-3">
              <div>
                <span className="font-mono-tech text-[10px] text-[#ff525e] uppercase font-bold tracking-wider">
                  TARGET TERMINAL
                </span>
                <h2 className="font-headline text-2xl font-bold uppercase text-[#e3e1e9]">
                  {activePortal.code} TELEMETRY
                </h2>
              </div>
              <span className="px-2.5 py-1 bg-[#292a2f] text-[#00eefc] font-mono-tech text-xs font-bold">
                RANK: {activePortal.threatRank}
              </span>
            </div>

            {/* Live Holographic Radar Frame */}
            <div className="relative h-48 bg-[#0d0e13] border border-[#00eefc]/30 flex flex-col items-center justify-center overflow-hidden p-4">
              <div className="absolute inset-0 bg-halftone-pattern opacity-25" />
              {/* Concentric Web Graphic */}
              <div className="relative z-10 text-center flex flex-col items-center gap-1">
                <span className="material-symbols-outlined text-4xl text-[#00eefc] animate-pulse">
                  all_inclusive
                </span>
                <span className="font-headline text-xl font-bold uppercase text-[#e3e1e9]">
                  {activePortal.name}
                </span>
                <span className="font-mono-tech text-xs text-[#facc15]">
                  FREQUENCY: {frequencyTuning.toFixed(2)} Hz
                </span>
              </div>
              <div className="absolute bottom-2 right-2 font-mono-tech text-[10px] text-[#8F9CAE]">
                NODE COORDINATES: [X: 42.9, Y: 16.1, Z: 61.6]
              </div>
            </div>

            {/* Timeline Integrity Gauge */}
            <div className="flex flex-col gap-1.5">
              <div className="flex justify-between font-mono-tech text-xs">
                <span className="text-[#8F9CAE]">TIMELINE INTEGRITY:</span>
                <span className="text-[#00eefc] font-bold">
                  {activePortal.timelineIntegrity}%
                </span>
              </div>
              <div className="w-full h-3 bg-[#0d0e13] p-0.5 border border-[#292a2f]">
                <div
                  className="h-full bg-gradient-to-r from-[#00eefc] to-yellow-400 transition-all duration-300"
                  style={{ width: `${activePortal.timelineIntegrity}%` }}
                />
              </div>
            </div>

            {/* Anomaly Containment Field Slider */}
            <div className="flex flex-col gap-2">
              <div className="flex justify-between font-mono-tech text-xs">
                <span className="text-[#8F9CAE]">CONTAINMENT FORCEFIELD:</span>
                <span className="text-[#ff525e] font-bold">{anomalyContainment}%</span>
              </div>
              <input
                type="range"
                min="30"
                max="100"
                value={anomalyContainment}
                onChange={(e) => setAnomalyContainment(Number(e.target.value))}
                className="w-full accent-[#ff525e] cursor-pointer"
              />
            </div>

            {/* Frequency Tuning Slider */}
            <div className="flex flex-col gap-2">
              <div className="flex justify-between font-mono-tech text-xs">
                <span className="text-[#8F9CAE]">CALIBRATE TRANSIT RESONANCE:</span>
                <span className="text-yellow-400 font-bold">{frequencyTuning.toFixed(1)} Hz</span>
              </div>
              <input
                type="range"
                min="1"
                max="120"
                step="0.5"
                value={frequencyTuning}
                onChange={(e) => setFrequencyTuning(Number(e.target.value))}
                className="w-full accent-[#00eefc] cursor-pointer"
              />
            </div>

            {/* Actions */}
            <div className="flex gap-3 pt-2">
              <button
                onClick={handleSyncFrequency}
                className="flex-1 py-2.5 bg-[#00eefc] hover:bg-[#7df4ff] text-black font-mono-tech text-xs uppercase font-bold tracking-wider shadow-ink transition-all cursor-pointer flex items-center justify-center gap-2"
              >
                <span className="material-symbols-outlined text-[16px]">sync</span>
                <span>{isSyncing ? 'SYNCHRONIZING...' : 'LOCK TRANSIT WATCH'}</span>
              </button>
              <button
                onClick={() => {
                  multiverseAudio.playPortalWarp();
                  onSelectDimension(`${activePortal.code} // JUMPED`);
                }}
                className="px-4 py-2.5 bg-[#ff525e] hover:bg-[#ff7582] text-black font-mono-tech text-xs uppercase font-bold shadow-ink cursor-pointer"
              >
                DIRECT JUMP
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
