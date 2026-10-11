/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Header } from './components/Header';
import { SpiderCentralView } from './components/SpiderCentralView';
import { CharacterArchivesView } from './components/CharacterArchivesView';
import { MultiversePortalsView } from './components/MultiversePortalsView';
import { PowerBattleMatrixView } from './components/PowerBattleMatrixView';
import { ComicArtifactsView } from './components/ComicArtifactsView';
import { HeroDrawerModal } from './components/HeroDrawerModal';
import { PortalWarpModal } from './components/PortalWarpModal';
import { Footer } from './components/Footer';
import { MarvelHero, SpiderVariant } from './data/marvelData';
import { multiverseAudio } from './utils/multiverseAudio';

export default function App() {
  const [currentTab, setCurrentTab] = useState<string>('spider-central');
  const [inspectedHero, setInspectedHero] = useState<MarvelHero | SpiderVariant | null>(null);
  const [isPortalModalOpen, setIsPortalModalOpen] = useState<boolean>(false);
  const [currentDimension, setCurrentDimension] = useState<string>('EARTH-616 // STABLE');

  const handleSelectTab = (tab: string) => {
    setCurrentTab(tab);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSendToSimulator = (heroName: string) => {
    setCurrentTab('power-battle-matrix');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#121318] text-[#e3e1e9] flex flex-col font-body selection:bg-[#ff525e] selection:text-black">
      {/* Top Protocol Navigation */}
      <Header
        currentTab={currentTab}
        onSelectTab={handleSelectTab}
        onLaunchPortal={() => setIsPortalModalOpen(true)}
        currentDimension={currentDimension}
        onSelectDimension={(dim) => setCurrentDimension(dim)}
      />

      {/* Main Screen Views */}
      <main className="w-full pt-20 flex-1 flex flex-col bg-[#121318]">
        {currentTab === 'spider-central' && (
          <SpiderCentralView
            onInspectHero={(hero) => setInspectedHero(hero)}
            onLaunchPortal={() => setIsPortalModalOpen(true)}
            onNavigateToPortals={() => handleSelectTab('multiverse-portals')}
          />
        )}

        {currentTab === 'character-archives' && (
          <CharacterArchivesView
            onInspectHero={(hero) => setInspectedHero(hero)}
            onSendToSimulator={handleSendToSimulator}
          />
        )}

        {currentTab === 'multiverse-portals' && (
          <MultiversePortalsView
            onSelectDimension={(dim) => setCurrentDimension(dim)}
            onLaunchPortalModal={() => setIsPortalModalOpen(true)}
          />
        )}

        {currentTab === 'power-battle-matrix' && <PowerBattleMatrixView />}

        {currentTab === 'comic-artifacts' && <ComicArtifactsView />}
      </main>

      {/* Persistent System Footer */}
      <Footer onSelectTab={handleSelectTab} />

      {/* Hero Dossier Inspector Modal */}
      <HeroDrawerModal hero={inspectedHero} onClose={() => setInspectedHero(null)} />

      {/* Dimensional Warp Jump Modal */}
      <PortalWarpModal
        isOpen={isPortalModalOpen}
        onClose={() => setIsPortalModalOpen(false)}
        onSelectDimension={(dim) => setCurrentDimension(dim)}
      />
    </div>
  );
}
