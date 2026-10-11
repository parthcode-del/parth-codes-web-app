import React from 'react';
import { multiverseAudio } from '../utils/multiverseAudio';

interface FooterProps {
  onSelectTab: (tab: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onSelectTab }) => {
  return (
    <footer className="w-full bg-[#0d0e13] border-t border-[#292a2f] mt-16">
      <div className="w-full px-4 lg:px-8 py-6 flex flex-col md:flex-row items-center justify-between gap-4 text-[#8F9CAE] font-mono-tech text-xs">
        <div className="flex flex-wrap items-center gap-4">
          <span className="flex items-center gap-1.5 text-[#e3e1e9]">
            <span className="w-2 h-2 rounded-full bg-[#00eefc] animate-pulse" />
            STATUS // MULTIVERSE-WEB ONLINE
          </span>
          <span>LATENCY: 0.04ms</span>
          <span>GRID NODE: 1610-A</span>
        </div>

        <div className="flex flex-wrap items-center gap-6">
          <button
            onClick={() => {
              multiverseAudio.playThwip();
              onSelectTab('spider-central');
            }}
            className="hover:text-[#e3e1e9] transition-colors cursor-pointer"
          >
            CENTRAL
          </button>
          <button
            onClick={() => {
              multiverseAudio.playThwip();
              onSelectTab('multiverse-portals');
            }}
            className="hover:text-[#e3e1e9] transition-colors cursor-pointer"
          >
            GATEWAYS
          </button>
          <button
            onClick={() => {
              multiverseAudio.playThwip();
              onSelectTab('power-battle-matrix');
            }}
            className="hover:text-[#e3e1e9] transition-colors cursor-pointer"
          >
            TELEMETRY
          </button>
          <button
            onClick={() => {
              multiverseAudio.playThwip();
              onSelectTab('comic-artifacts');
            }}
            className="hover:text-[#e3e1e9] transition-colors cursor-pointer"
          >
            VAULT
          </button>
          <span className="text-[#5e3f3e]">
            © 2025 MARVEL PROTOCOL // SPIDER-SOCIETY CORE
          </span>
        </div>
      </div>
    </footer>
  );
};
