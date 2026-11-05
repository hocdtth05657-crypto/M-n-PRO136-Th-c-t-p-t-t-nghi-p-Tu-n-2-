import React from 'react';
import { Compass, BookOpen, Layers, History, Search } from 'lucide-react';

export type NavigationTab = 'map' | 'archives' | 'trails' | 'comparative';

interface HeaderProps {
  currentTab: NavigationTab;
  onSelectTab: (tab: NavigationTab) => void;
  onOpenSearch: () => void;
  selectedCity: string;
  onSelectCity: (city: string) => void;
  siteCount: number;
  archiveCount: number;
}

export const Header: React.FC<HeaderProps> = ({
  currentTab,
  onSelectTab,
  onOpenSearch,
  selectedCity,
  onSelectCity,
  siteCount,
  archiveCount
}) => {
  return (
    <header className="sticky top-0 z-40 bg-[#FBF9F5]/95 backdrop-blur-md border-b border-[#E7DFD3] transition-all">
      {/* Strict 3-zone Top Bar Contract */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-8">
        {/* Zone 1: Brand Wordmark (Single text element) */}
        <div 
          onClick={() => onSelectTab('map')}
          className="cursor-pointer flex items-center gap-3 shrink-0"
        >
          <div className="w-9 h-9 rounded bg-[#2A2421] text-[#FBF9F5] flex items-center justify-center shadow-xs">
            <Compass className="w-5 h-5 text-[#E7C794]" />
          </div>
          <div className="flex flex-col">
            <span className="font-serif text-xl font-bold tracking-tight text-[#1C1917] whitespace-nowrap">
              Bản đồ Di sản Kiến trúc
            </span>
            <span className="text-[10px] uppercase tracking-widest text-[#786F66] font-medium hidden sm:inline">
              Hệ thống Tư liệu & Bản đồ Đô thị Việt Nam
            </span>
          </div>
        </div>

        {/* Zone 2: 4-5 single-line clean navigation links */}
        <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-[#57534E]">
          <button
            onClick={() => onSelectTab('map')}
            className={`whitespace-nowrap transition-colors pb-1 border-b-2 flex items-center gap-1.5 ${
              currentTab === 'map'
                ? 'text-[#1C1917] border-[#8C3A27] font-semibold'
                : 'border-transparent hover:text-[#1C1917]'
            }`}
          >
            <Compass className="w-4 h-4 opacity-70" />
            <span>Bản đồ Di sản</span>
          </button>

          <button
            onClick={() => onSelectTab('archives')}
            className={`whitespace-nowrap transition-colors pb-1 border-b-2 flex items-center gap-1.5 ${
              currentTab === 'archives'
                ? 'text-[#1C1917] border-[#8C3A27] font-semibold'
                : 'border-transparent hover:text-[#1C1917]'
            }`}
          >
            <BookOpen className="w-4 h-4 opacity-70" />
            <span>Kho Tư liệu Lưu trữ</span>
          </button>

          <button
            onClick={() => onSelectTab('trails')}
            className={`whitespace-nowrap transition-colors pb-1 border-b-2 flex items-center gap-1.5 ${
              currentTab === 'trails'
                ? 'text-[#1C1917] border-[#8C3A27] font-semibold'
                : 'border-transparent hover:text-[#1C1917]'
            }`}
          >
            <Layers className="w-4 h-4 opacity-70" />
            <span>Tuyến Du hành</span>
          </button>

          <button
            onClick={() => onSelectTab('comparative')}
            className={`whitespace-nowrap transition-colors pb-1 border-b-2 flex items-center gap-1.5 ${
              currentTab === 'comparative'
                ? 'text-[#1C1917] border-[#8C3A27] font-semibold'
                : 'border-transparent hover:text-[#1C1917]'
            }`}
          >
            <History className="w-4 h-4 opacity-70" />
            <span>So sánh Xưa & Nay</span>
          </button>
        </nav>

        {/* Zone 3: 1 Primary Action */}
        <div className="flex items-center gap-3 shrink-0">
          <button
            onClick={onOpenSearch}
            className="px-3.5 py-1.5 text-xs font-medium text-[#1C1917] bg-[#EFE9DF] hover:bg-[#E5DDCF] border border-[#DDD4C5] rounded-md transition-colors flex items-center gap-2 whitespace-nowrap"
            title="Tìm kiếm di sản, kiến trúc sư, hồ sơ lưu trữ"
          >
            <Search className="w-3.5 h-3.5 text-[#786F66]" />
            <span className="hidden sm:inline">Tra cứu Tư liệu</span>
            <kbd className="hidden lg:inline-block px-1.5 py-0.5 text-[10px] font-mono text-[#786F66] bg-[#FBF9F5] border border-[#DDD4C5] rounded">⌘K</kbd>
          </button>
        </div>
      </div>

      {/* Operational Utility Ribbon (Secondary Subbar - Curatorial Context) */}
      <div className="bg-[#F3EDE2] border-t border-[#E7DFD3] text-xs text-[#57534E] py-1.5 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3">
          {/* Cities fast navigation */}
          <div className="flex items-center gap-1.5 overflow-x-auto py-0.5 scrollbar-none">
            <span className="text-[11px] font-semibold text-[#8C3A27] uppercase tracking-wider whitespace-nowrap mr-1">
              Đô thị:
            </span>
            {['Tất cả', 'Hà Nội', 'TP. Hồ Chí Minh', 'Huế', 'Hội An', 'Đà Lạt'].map((city) => (
              <button
                key={city}
                onClick={() => onSelectCity(city)}
                className={`px-2.5 py-0.5 rounded text-xs transition-colors whitespace-nowrap font-medium ${
                  selectedCity === city
                    ? 'bg-[#2A2421] text-[#FBF9F5] shadow-xs'
                    : 'text-[#57534E] hover:text-[#1C1917] hover:bg-[#E7DFD3]'
                }`}
              >
                {city}
              </button>
            ))}
          </div>

          {/* Curatorial data metrics */}
          <div className="hidden lg:flex items-center gap-3 text-[11px] text-[#786F66]">
            <span>Đã số hóa: <strong className="font-mono text-[#1C1917]">{siteCount}</strong> công trình</span>
            <span aria-hidden="true">·</span>
            <span>Kho tư liệu: <strong className="font-mono text-[#1C1917]">{archiveCount}</strong> hồ sơ</span>
            <span aria-hidden="true">·</span>
            <span>Nguồn lưu trữ: <span className="font-medium text-[#1C1917]">10 cơ quan lưu trữ quốc gia & quốc tế</span></span>
          </div>
        </div>
      </div>
    </header>
  );
};
