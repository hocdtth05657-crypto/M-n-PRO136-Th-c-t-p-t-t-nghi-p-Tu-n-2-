import React, { useState, useEffect } from 'react';
import { Header, NavigationTab } from './components/Header';
import { HeritageMap } from './components/HeritageMap';
import { HeritageDetailModal } from './components/HeritageDetailModal';
import { BlueprintViewerModal } from './components/BlueprintViewerModal';
import { ArchiveRepositoryView } from './components/ArchiveRepositoryView';
import { HeritageTrailsView } from './components/HeritageTrailsView';
import { ComparativeTimelineView } from './components/ComparativeTimelineView';
import { SearchLookupModal } from './components/SearchLookupModal';

import { HERITAGE_SITES } from './data/heritageSites';
import { ARCHIVAL_DOCUMENTS } from './data/archivalDocuments';
import { HERITAGE_TRAILS } from './data/heritageTrails';
import { HeritageSite, ArchivalSource, HeritageTrail } from './types/heritage';

export default function App() {
  const [currentTab, setCurrentTab] = useState<NavigationTab>('map');
  const [selectedCity, setSelectedCity] = useState<string>('Tất cả');
  const [selectedSite, setSelectedSite] = useState<HeritageSite | null>(null);
  const [detailedSiteModal, setDetailedSiteModal] = useState<HeritageSite | null>(null);
  const [inspectedDocument, setInspectedDocument] = useState<ArchivalSource | null>(null);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  // Global keyboard shortcut for search
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setIsSearchOpen(true);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const handleSelectTrailOnMap = (trail: HeritageTrail) => {
    setSelectedCity(trail.city);
    setCurrentTab('map');
    const firstSite = HERITAGE_SITES.find((s) => s.id === trail.siteIds[0]);
    if (firstSite) {
      setSelectedSite(firstSite);
    }
  };

  const handleJumpToSiteOnMap = (site: HeritageSite) => {
    setSelectedCity(site.city);
    setSelectedSite(site);
    setCurrentTab('map');
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FBF9F5] text-[#1C1917]">
      {/* Top Bar Navigation */}
      <Header
        currentTab={currentTab}
        onSelectTab={setCurrentTab}
        onOpenSearch={() => setIsSearchOpen(true)}
        selectedCity={selectedCity}
        onSelectCity={setSelectedCity}
        siteCount={HERITAGE_SITES.length}
        archiveCount={ARCHIVAL_DOCUMENTS.length}
      />

      {/* Main Content Areas */}
      <main className="flex-1 flex flex-col">
        {currentTab === 'map' && (
          <HeritageMap
            sites={HERITAGE_SITES}
            selectedSite={selectedSite}
            onSelectSite={setSelectedSite}
            selectedCity={selectedCity}
            onSelectCity={setSelectedCity}
            onOpenSiteDetails={setDetailedSiteModal}
          />
        )}

        {currentTab === 'archives' && (
          <ArchiveRepositoryView
            documents={ARCHIVAL_DOCUMENTS}
            sites={HERITAGE_SITES}
            onInspectDocument={setInspectedDocument}
            onJumpToSite={handleJumpToSiteOnMap}
          />
        )}

        {currentTab === 'trails' && (
          <HeritageTrailsView
            trails={HERITAGE_TRAILS}
            sites={HERITAGE_SITES}
            onSelectTrailOnMap={handleSelectTrailOnMap}
            onOpenSiteDetails={setDetailedSiteModal}
          />
        )}

        {currentTab === 'comparative' && (
          <ComparativeTimelineView
            sites={HERITAGE_SITES}
            onOpenSiteDetails={setDetailedSiteModal}
            onJumpToMap={handleJumpToSiteOnMap}
          />
        )}
      </main>

      {/* Editorial Footer (Curatorial Credo & Archive Institutions) */}
      <footer className="bg-[#2A2421] text-[#E7DFD3] border-t border-[#443E3B] py-8 px-4 sm:px-6 lg:px-8 mt-auto">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="space-y-1">
            <div className="font-serif text-lg font-bold text-white tracking-wide">
              Bản đồ Di sản Kiến trúc Đô thị Việt Nam
            </div>
            <p className="text-xs text-[#A89F91] max-w-xl leading-relaxed">
              Dự án số hóa dữ liệu địa chính, bản vẽ kỹ thuật nguyên bản và hồ sơ lưu trữ phục vụ nghiên cứu bảo tồn kiến trúc đô thị giai đoạn 1880 – 1975.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-6 text-xs text-[#A89F91]">
            <div className="space-y-0.5">
              <span className="block text-white font-medium">10 Cơ quan Lưu trữ & Viện Nghiên cứu:</span>
              <span className="max-w-md block leading-relaxed text-[11px]">
                TTLTQG I & II · ANOM Pháp · EFEO Paris · BnF Gallica · Viện Bảo tồn Di tích · Cố đô Huế · Di sản Hội An · Musée Albert-Kahn · Thư viện Quốc gia Việt Nam
              </span>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto pt-6 mt-6 border-t border-[#3D3531] flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] text-[#8C8276]">
          <div>
            © {new Date().getFullYear()} Dự án Di sản Kiến trúc Đô thị. Cung cấp phục vụ giáo dục, nghiên cứu học thuật và bảo tồn di tích.
          </div>
          <div className="flex items-center gap-4">
            <button
              onClick={() => setCurrentTab('archives')}
              className="hover:text-white transition-colors"
            >
              Tra cứu hồ sơ
            </button>
            <span aria-hidden="true">·</span>
            <button
              onClick={() => setCurrentTab('trails')}
              className="hover:text-white transition-colors"
            >
              Tuyến khảo cứu
            </button>
            <span aria-hidden="true">·</span>
            <button
              onClick={() => setCurrentTab('comparative')}
              className="hover:text-white transition-colors"
            >
              Đối chiếu Xưa & Nay
            </button>
          </div>
        </div>
      </footer>

      {/* High-Resolution Blueprint & Document Viewer Modal */}
      <BlueprintViewerModal
        document={inspectedDocument}
        onClose={() => setInspectedDocument(null)}
      />

      {/* Comprehensive Heritage Monograph & Details Modal */}
      <HeritageDetailModal
        site={detailedSiteModal}
        onClose={() => setDetailedSiteModal(null)}
        onInspectDocument={(doc) => {
          setDetailedSiteModal(null);
          setInspectedDocument(doc);
        }}
      />

      {/* Quick Search Lookup Modal */}
      <SearchLookupModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        sites={HERITAGE_SITES}
        archives={ARCHIVAL_DOCUMENTS}
        onSelectSite={(site) => {
          setSelectedCity(site.city);
          setSelectedSite(site);
          setCurrentTab('map');
        }}
        onSelectDocument={(doc) => {
          setInspectedDocument(doc);
        }}
      />
    </div>
  );
}
