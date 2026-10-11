import React, { useState, useEffect, useRef } from 'react';
import { MULTIVERSE_PORTALS, DimensionPortal } from '../data/marvelData';
import { multiverseAudio } from '../utils/multiverseAudio';

interface PortalWarpModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectDimension: (dim: string) => void;
}

export const PortalWarpModal: React.FC<PortalWarpModalProps> = ({
  isOpen,
  onClose,
  onSelectDimension,
}) => {
  const [selectedPortal, setSelectedPortal] = useState<DimensionPortal>(MULTIVERSE_PORTALS[0]);
  const [isWarping, setIsWarping] = useState(false);
  const [warpProgress, setWarpProgress] = useState(0);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    if (!isOpen) return;

    // Canvas particle vortex animation
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animId: number;
    let angle = 0;
    const particles: { x: number; y: number; radius: number; speed: number; angle: number; color: string }[] = [];

    const colors = ['#00eefc', '#ff525e', '#facc15', '#b86dfd', '#ffffff'];

    for (let i = 0; i < 70; i++) {
      particles.push({
        x: canvas.width / 2,
        y: canvas.height / 2,
        radius: Math.random() * 140 + 20,
        speed: Math.random() * 0.04 + 0.01,
        angle: Math.random() * Math.PI * 2,
        color: colors[Math.floor(Math.random() * colors.length)],
      });
    }

    const render = () => {
      ctx.fillStyle = 'rgba(13, 14, 19, 0.25)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      const cx = canvas.width / 2;
      const cy = canvas.height / 2;

      particles.forEach((p) => {
        p.angle += p.speed * (isWarping ? 4 : 1);
        const curRadius = isWarping ? p.radius * (1 + Math.sin(angle * 2) * 0.2) : p.radius;
        const px = cx + Math.cos(p.angle) * curRadius;
        const py = cy + Math.sin(p.angle) * curRadius;

        ctx.beginPath();
        ctx.arc(px, py, isWarping ? 2.5 : 1.5, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.shadowColor = p.color;
        ctx.shadowBlur = 8;
        ctx.fill();
        ctx.shadowBlur = 0;
      });

      // Central portal nexus pulse
      ctx.beginPath();
      ctx.arc(cx, cy, isWarping ? 35 + Math.sin(angle * 10) * 8 : 25, 0, Math.PI * 2);
      ctx.strokeStyle = '#00eefc';
      ctx.lineWidth = 2;
      ctx.stroke();

      angle += 0.05;
      animId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animId);
    };
  }, [isOpen, isWarping]);

  if (!isOpen) return null;

  const handleTriggerJump = () => {
    setIsWarping(true);
    setWarpProgress(0);
    multiverseAudio.playPortalWarp();

    const interval = setInterval(() => {
      setWarpProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setIsWarping(false);
          onSelectDimension(`${selectedPortal.code} // ACTIVE`);
          setTimeout(() => {
            onClose();
          }, 300);
          return 100;
        }
        return prev + 10;
      });
    }, 120);
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-xl flex items-center justify-center p-4 lg:p-8 animate-in fade-in">
      <div className="bg-[#161a24] max-w-4xl w-full border-2 border-[#00eefc]/50 shadow-ink-xl flex flex-col gap-5 p-6 relative overflow-hidden">
        {/* Background Canvas */}
        <canvas
          ref={canvasRef}
          width={800}
          height={300}
          className="absolute inset-0 w-full h-full opacity-35 pointer-events-none"
        />

        {/* Modal Header */}
        <div className="relative z-10 flex items-center justify-between border-b border-[#292a2f] pb-4">
          <div className="flex items-center gap-3">
            <span className="w-3 h-3 bg-[#00eefc] rounded-full animate-ping" />
            <div>
              <span className="font-mono-tech text-xs text-[#00eefc] uppercase tracking-widest font-bold">
                QUANTUM NEXUS // DIMENSIONAL TRANSIT
              </span>
              <h2 className="font-headline text-2xl lg:text-3xl text-[#e3e1e9] uppercase font-bold tracking-tight">
                LAUNCH MULTIVERSE PORTAL
              </h2>
            </div>
          </div>
          <button
            onClick={() => {
              multiverseAudio.playThwip();
              onClose();
            }}
            className="p-2 bg-[#292a2f] hover:bg-[#34343a] text-[#e3e1e9] transition-colors cursor-pointer"
          >
            <span className="material-symbols-outlined">close</span>
          </button>
        </div>

        {/* Portal Dimension Selector Grid */}
        <div className="relative z-10 flex flex-col gap-2">
          <span className="font-mono-tech text-xs text-[#8F9CAE] uppercase">
            TARGET DIMENSIONAL COORDINATES:
          </span>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
            {MULTIVERSE_PORTALS.map((portal) => {
              const isSelected = selectedPortal.id === portal.id;
              return (
                <button
                  key={portal.id}
                  onClick={() => {
                    multiverseAudio.playThwip();
                    setSelectedPortal(portal);
                  }}
                  className={`p-3 text-left border transition-all cursor-pointer flex flex-col gap-1 ${
                    isSelected
                      ? 'bg-[#1e1f25] border-[#00eefc] shadow-[0_0_15px_rgba(0,238,252,0.4)] text-[#7df4ff]'
                      : 'bg-[#121318] border-[#292a2f] text-[#8F9CAE] hover:border-[#38393f] hover:text-[#e3e1e9]'
                  }`}
                >
                  <span className="font-mono-tech text-[10px] text-[#ff525e] font-bold">
                    {portal.code}
                  </span>
                  <span className="font-headline text-xs font-bold text-[#e3e1e9] truncate">
                    {portal.name}
                  </span>
                  <span className="font-mono-tech text-[9px] text-[#00eefc]">
                    GLITCH: {portal.glitchHz} Hz
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Selected Dimension Telemetry Box */}
        <div className="relative z-10 bg-[#0d0e13]/90 p-4 border border-[#292a2f] flex flex-col gap-3">
          <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[#292a2f] pb-2">
            <div>
              <span className="font-mono-tech text-xs text-[#00eefc] font-bold">
                {selectedPortal.code} // {selectedPortal.designation}
              </span>
              <p className="font-body text-xs text-[#e3e1e9] mt-0.5">
                {selectedPortal.description}
              </p>
            </div>
            <div className="flex items-center gap-2 font-mono-tech text-[11px]">
              <span className="px-2 py-0.5 bg-[#292a2f] text-[#facc15]">
                INTEGRITY: {selectedPortal.timelineIntegrity}%
              </span>
              <span className="px-2 py-0.5 bg-[#ff525e] text-black font-bold">
                RANK: {selectedPortal.threatRank}
              </span>
            </div>
          </div>

          <div className="flex items-center justify-between font-mono-tech text-xs text-[#8F9CAE]">
            <span>DOMINANT SPIDER-TOTEM:</span>
            <span className="text-[#e3e1e9] font-bold">{selectedPortal.dominantSpider}</span>
          </div>

          {/* Warp Progress Bar if in warp mode */}
          {isWarping && (
            <div className="flex flex-col gap-1 pt-1">
              <div className="flex justify-between font-mono-tech text-[11px] text-[#00eefc]">
                <span>WARPING DIMENSIONAL STRANDS...</span>
                <span>{warpProgress}%</span>
              </div>
              <div className="w-full h-3 bg-[#1e1f25] border border-[#00eefc]/40 overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-[#00eefc] via-[#b86dfd] to-[#ff525e] transition-all duration-150"
                  style={{ width: `${warpProgress}%` }}
                />
              </div>
            </div>
          )}
        </div>

        {/* Actions */}
        <div className="relative z-10 flex flex-wrap items-center justify-between gap-3 pt-2">
          <div className="flex items-center gap-2 font-mono-tech text-xs text-[#8F9CAE]">
            <span className="material-symbols-outlined text-[16px] text-[#00eefc]">vpn_key</span>
            <span>TRANSLATION FREQUENCY: {selectedPortal.glitchHz} HZ LOCKED</span>
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={() => {
                multiverseAudio.playThwip();
                onClose();
              }}
              className="px-4 py-2 bg-[#292a2f] hover:bg-[#34343a] text-[#e3e1e9] font-mono-tech text-xs uppercase cursor-pointer"
            >
              ABORT JUMP
            </button>
            <button
              disabled={isWarping}
              onClick={handleTriggerJump}
              className="px-6 py-2.5 bg-[#ff525e] hover:bg-[#ff7582] text-black font-mono-tech text-xs uppercase font-bold tracking-wider shadow-ink hover:shadow-[0_0_20px_rgba(255,82,94,0.7)] transition-all cursor-pointer flex items-center gap-2"
            >
              <span className="material-symbols-outlined text-[18px]">all_inclusive</span>
              <span>{isWarping ? 'WARPING DIMENSIONS...' : `ENGAGE JUMP TO ${selectedPortal.code}`}</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
