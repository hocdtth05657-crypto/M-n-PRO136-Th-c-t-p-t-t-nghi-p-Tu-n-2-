import React, { useState } from 'react';
import { ArchivalSource } from '../types/heritage';
import { X, ZoomIn, ZoomOut, RotateCcw, Copy, Check, Download, Building, Landmark, ExternalLink } from 'lucide-react';

interface BlueprintViewerModalProps {
  document: ArchivalSource | null;
  onClose: () => void;
}

export const BlueprintViewerModal: React.FC<BlueprintViewerModalProps> = ({ document, onClose }) => {
  const [zoomLevel, setZoomLevel] = useState(1);
  const [copiedCitation, setCopiedCitation] = useState(false);

  if (!document) return null;

  const handleCopyCitation = () => {
    const citationText = `${document.title}. Ký hiệu lưu trữ: ${document.archiveRefCode}, ${document.archiveInstitution} (${document.year}).`;
    navigator.clipboard.writeText(citationText);
    setCopiedCitation(true);
    setTimeout(() => setCopiedCitation(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-sm animate-fade-in">
      <div className="relative w-full max-w-6xl h-[90vh] bg-[#1C1917] border border-[#44403C] rounded-lg flex flex-col overflow-hidden shadow-2xl text-[#E7DFD3]">
        {/* Top Header Bar */}
        <div className="flex items-center justify-between px-5 py-3.5 bg-[#292524] border-b border-[#44403C] shrink-0">
          <div className="flex items-center gap-3 truncate pr-4">
            <span className="font-mono text-xs text-[#E7C794] uppercase tracking-wider bg-[#3A3532] px-2 py-0.5 rounded border border-[#524B47] shrink-0">
              {document.documentType.split(' ')[0]}
            </span>
            <h3 className="font-serif text-base sm:text-lg font-bold text-white truncate">
              {document.title}
            </h3>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            {/* Zoom controls */}
            <div className="hidden sm:flex items-center gap-1 bg-[#1C1917] rounded border border-[#44403C] p-0.5">
              <button
                onClick={() => setZoomLevel((prev) => Math.max(0.6, prev - 0.2))}
                className="p-1 hover:bg-[#292524] text-stone-300 rounded"
                title="Thu nhỏ"
              >
                <ZoomOut className="w-4 h-4" />
              </button>
              <span className="text-[11px] font-mono px-1.5 text-stone-400">
                {Math.round(zoomLevel * 100)}%
              </span>
              <button
                onClick={() => setZoomLevel((prev) => Math.min(2.5, prev + 0.2))}
                className="p-1 hover:bg-[#292524] text-stone-300 rounded"
                title="Phóng to"
              >
                <ZoomIn className="w-4 h-4" />
              </button>
              <button
                onClick={() => setZoomLevel(1)}
                className="p-1 hover:bg-[#292524] text-stone-300 rounded"
                title="Khôi phục"
              >
                <RotateCcw className="w-3.5 h-3.5" />
              </button>
            </div>

            <button
              onClick={onClose}
              className="p-1.5 text-stone-400 hover:text-white hover:bg-[#3A3532] rounded-md transition-colors"
              title="Đóng"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Center: Image Canvas with Zoom & Pan */}
        <div className="flex-1 overflow-auto p-4 flex items-center justify-center bg-[#0F0E0D] relative select-none">
          <div
            className="transition-transform duration-150 ease-out origin-center"
            style={{ transform: `scale(${zoomLevel})` }}
          >
            <img
              src={document.highResUrl || document.imageUrl}
              alt={document.title}
              referrerPolicy="no-referrer"
              className="max-h-[65vh] max-w-full object-contain rounded shadow-2xl border border-[#3A3532]"
            />
          </div>

          {/* Official Archival Seal Badge (bottom left of canvas) */}
          <div className="absolute bottom-4 left-4 bg-black/75 backdrop-blur-md border border-[#44403C] rounded p-2.5 text-xs text-stone-300 max-w-xs pointer-events-none">
            <div className="text-[10px] uppercase font-mono tracking-wider text-[#E7C794]">
              {document.archiveInstitution}
            </div>
            <div className="font-mono text-white text-xs mt-0.5">
              Ký hiệu: {document.archiveRefCode}
            </div>
          </div>
        </div>

        {/* Bottom Metadata & Curatorial Citation Drawer */}
        <div className="bg-[#292524] border-t border-[#44403C] p-4 text-xs space-y-2 shrink-0">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-3">
            <div className="space-y-1">
              <p className="text-stone-300 leading-relaxed max-w-3xl">
                {document.description}
              </p>
              {document.historicalSignificance && (
                <p className="text-[#E7C794] text-[11px] italic font-serif">
                  Ý nghĩa nghiên cứu: {document.historicalSignificance}
                </p>
              )}
            </div>

            <div className="flex items-center gap-2 shrink-0">
              <button
                onClick={handleCopyCitation}
                className="px-3 py-1.5 bg-[#3A3532] hover:bg-[#44403C] text-stone-200 border border-[#524B47] rounded-md flex items-center gap-1.5 transition-colors font-medium text-xs"
              >
                {copiedCitation ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Đã sao chép trích dẫn</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>Sao chép trích dẫn APA</span>
                  </>
                )}
              </button>
            </div>
          </div>

          <div className="pt-2 border-t border-[#3A3532] flex flex-wrap items-center justify-between gap-4 text-[11px] text-stone-400 font-mono">
            <div>Năm tài liệu: <span className="text-white">{document.year}</span></div>
            <div>Tác giả / Đo vẽ: <span className="text-white">{document.authorOrPhotographer || 'Ban Công chính Đông Dương'}</span></div>
            <div>Quy cách: <span className="text-white">{document.dimensionsOrPages || 'Lưu trữ điện tử chuẩn 600 DPI'}</span></div>
          </div>
        </div>
      </div>
    </div>
  );
};
