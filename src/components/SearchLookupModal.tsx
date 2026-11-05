import React, { useState, useEffect, useRef } from 'react';
import { HeritageSite, ArchivalSource } from '../types/heritage';
import { Search, X, Building, FileText, ArrowRight, Compass } from 'lucide-react';

interface SearchLookupModalProps {
  isOpen: boolean;
  onClose: () => void;
  sites: HeritageSite[];
  archives: ArchivalSource[];
  onSelectSite: (site: HeritageSite) => void;
  onSelectDocument: (doc: ArchivalSource) => void;
}

export const SearchLookupModal: React.FC<SearchLookupModalProps> = ({
  isOpen,
  onClose,
  sites,
  archives,
  onSelectSite,
  onSelectDocument
}) => {
  const [query, setQuery] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
    } else {
      setQuery('');
    }
  }, [isOpen]);

  // Keyboard shortcut Cmd/Ctrl + K
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        if (isOpen) onClose();
        else {
          // open modal is handled in parent
        }
      }
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const q = query.trim().toLowerCase();

  const matchedSites = q
    ? sites.filter(
        (s) =>
          s.name.toLowerCase().includes(q) ||
          s.frenchHistoricalName?.toLowerCase().includes(q) ||
          s.architect.toLowerCase().includes(q) ||
          s.city.toLowerCase().includes(q) ||
          s.architecturalStyle.toLowerCase().includes(q)
      )
    : sites.slice(0, 4);

  const matchedArchives = q
    ? archives.filter(
        (a) =>
          a.title.toLowerCase().includes(q) ||
          a.archiveRefCode.toLowerCase().includes(q) ||
          a.description.toLowerCase().includes(q) ||
          a.archiveInstitution.toLowerCase().includes(q)
      )
    : archives.slice(0, 3);

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-16 sm:pt-24 px-4 bg-black/60 backdrop-blur-xs animate-fade-in">
      <div className="w-full max-w-2xl bg-[#FBF9F5] border border-[#DDD4C5] rounded-xl shadow-2xl overflow-hidden flex flex-col max-h-[80vh]">
        {/* Search Input Box */}
        <div className="p-4 border-b border-[#E7DFD3] flex items-center gap-3 bg-[#F5EFE4]">
          <Search className="w-5 h-5 text-[#8C3A27] shrink-0" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Tra cứu tên công trình, kiến trúc sư, mã lưu trữ..."
            className="flex-1 bg-transparent border-none text-sm text-[#1C1917] placeholder-[#A89F91] focus:outline-hidden"
          />
          {query && (
            <button
              onClick={() => setQuery('')}
              className="text-xs text-[#786F66] hover:text-[#1C1917]"
            >
              ✕
            </button>
          )}
          <kbd className="hidden sm:inline-block px-2 py-0.5 text-[10px] font-mono text-[#786F66] bg-[#EFE9DF] border border-[#DDD4C5] rounded">
            ESC
          </kbd>
        </div>

        {/* Results List */}
        <div className="flex-1 overflow-y-auto p-4 space-y-6">
          {/* Sites Group */}
          <div>
            <div className="text-[11px] font-semibold text-[#8C3A27] uppercase tracking-wider mb-2 flex items-center gap-1.5">
              <Building className="w-3.5 h-3.5" />
              <span>Công trình Di sản ({matchedSites.length})</span>
            </div>

            <div className="divide-y divide-[#E7DFD3]/60">
              {matchedSites.map((site) => (
                <div
                  key={site.id}
                  onClick={() => {
                    onSelectSite(site);
                    onClose();
                  }}
                  className="py-2.5 px-3 hover:bg-[#F3EDE2] rounded-md cursor-pointer transition-colors flex items-center justify-between gap-3 group"
                >
                  <div className="truncate">
                    <div className="font-serif font-bold text-sm text-[#1C1917] group-hover:text-[#8C3A27] transition-colors truncate">
                      {site.name}
                    </div>
                    <div className="text-[11px] text-[#786F66] flex items-center gap-1.5 mt-0.5">
                      <span className="font-medium">{site.city}</span>
                      <span aria-hidden="true">·</span>
                      <span>KTS: {site.architect}</span>
                      <span aria-hidden="true">·</span>
                      <span className="font-mono">{site.inaugurationYear}</span>
                    </div>
                  </div>
                  <ArrowRight className="w-4 h-4 text-[#A89F91] group-hover:text-[#8C3A27] transition-colors shrink-0" />
                </div>
              ))}
            </div>
          </div>

          {/* Archives Group */}
          <div>
            <div className="text-[11px] font-semibold text-[#8C3A27] uppercase tracking-wider mb-2 flex items-center gap-1.5">
              <FileText className="w-3.5 h-3.5" />
              <span>Hồ sơ & Bản vẽ Lưu trữ ({matchedArchives.length})</span>
            </div>

            <div className="divide-y divide-[#E7DFD3]/60">
              {matchedArchives.map((doc) => (
                <div
                  key={doc.id}
                  onClick={() => {
                    onSelectDocument(doc);
                    onClose();
                  }}
                  className="py-2.5 px-3 hover:bg-[#F3EDE2] rounded-md cursor-pointer transition-colors flex items-center justify-between gap-3 group"
                >
                  <div className="truncate">
                    <div className="font-serif font-bold text-sm text-[#1C1917] group-hover:text-[#8C3A27] transition-colors truncate">
                      {doc.title}
                    </div>
                    <div className="text-[11px] text-[#786F66] flex items-center gap-1.5 mt-0.5">
                      <span className="font-mono text-[#8C3A27] font-medium">{doc.archiveRefCode}</span>
                      <span aria-hidden="true">·</span>
                      <span>{doc.archiveInstitution}</span>
                      <span aria-hidden="true">·</span>
                      <span className="font-mono">{doc.year}</span>
                    </div>
                  </div>
                  <ArrowRight className="w-4 h-4 text-[#A89F91] group-hover:text-[#8C3A27] transition-colors shrink-0" />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="px-4 py-2.5 bg-[#F5EFE4] border-t border-[#E7DFD3] text-[11px] text-[#786F66] flex items-center justify-between">
          <span>Hệ thống cơ sở dữ liệu số hóa di sản kiến trúc đô thị</span>
          <button
            onClick={onClose}
            className="text-[#8C3A27] hover:underline font-medium"
          >
            Đóng
          </button>
        </div>
      </div>
    </div>
  );
};
