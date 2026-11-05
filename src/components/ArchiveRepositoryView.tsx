import React, { useState } from 'react';
import { ArchivalSource, HeritageSite, DocumentType, ArchiveInstitution } from '../types/heritage';
import { 
  Search, Filter, BookOpen, FileText, Maximize2, 
  Copy, Check, ExternalLink, Download, Layers, Building 
} from 'lucide-react';

interface ArchiveRepositoryViewProps {
  documents: ArchivalSource[];
  sites: HeritageSite[];
  onInspectDocument: (doc: ArchivalSource) => void;
  onJumpToSite: (site: HeritageSite) => void;
}

export const ArchiveRepositoryView: React.FC<ArchiveRepositoryViewProps> = ({
  documents,
  sites,
  onInspectDocument,
  onJumpToSite
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedType, setSelectedType] = useState<string>('Tất cả');
  const [selectedInstitution, setSelectedInstitution] = useState<string>('Tất cả');
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const documentTypes = [
    'Tất cả',
    ...Array.from(new Set(documents.map((d) => d.documentType)))
  ];

  const institutions = [
    'Tất cả',
    ...Array.from(new Set(documents.map((d) => d.archiveInstitution)))
  ];

  const filteredDocuments = documents.filter((doc) => {
    if (selectedType !== 'Tất cả' && doc.documentType !== selectedType) return false;
    if (selectedInstitution !== 'Tất cả' && doc.archiveInstitution !== selectedInstitution) return false;
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      const matchTitle = doc.title.toLowerCase().includes(q);
      const matchCode = doc.archiveRefCode.toLowerCase().includes(q);
      const matchDesc = doc.description.toLowerCase().includes(q);
      const matchAuthor = doc.authorOrPhotographer?.toLowerCase().includes(q) || false;
      if (!matchTitle && !matchCode && !matchDesc && !matchAuthor) return false;
    }
    return true;
  });

  const handleCopyCitation = (doc: ArchivalSource, e: React.MouseEvent) => {
    e.stopPropagation();
    const citationText = `${doc.title}. Ký hiệu lưu trữ: ${doc.archiveRefCode}, ${doc.archiveInstitution} (${doc.year}).`;
    navigator.clipboard.writeText(citationText);
    setCopiedId(doc.id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8 animate-fade-in">
      {/* Editorial Header Section */}
      <div className="border-b border-[#E7DFD3] pb-6 space-y-2">
        <div className="text-xs font-mono uppercase tracking-widest text-[#8C3A27]">
          KHO LƯU TRỮ VĂN KHƠI & TƯ LIỆU ĐỊA CHÍNH
        </div>
        <h1 className="font-serif text-3xl sm:text-4xl font-bold text-[#1C1917] tracking-tight">
          Nguồn Tư liệu & Bản đồ Di sản Đô thị
        </h1>
        <p className="text-sm text-[#57534E] max-w-3xl leading-relaxed">
          Tập hợp hệ thống bản vẽ kỹ thuật nguyên bản tỉ lệ chuẩn, họa đồ mặt bằng, bản đồ phân khu đô thị cổ, ảnh chụp phim kính thế kỷ 19-20 và các nghị định quy hoạch thành lập từ các trung tâm lưu trữ quốc gia Việt Nam và quốc tế.
        </p>
      </div>

      {/* Control / Filter Bar */}
      <div className="bg-[#F7F3EA] border border-[#E7DFD3] rounded-lg p-4 space-y-4 shadow-2xs">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          {/* Keyword Search */}
          <div className="relative">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Tìm theo từ khóa, mã số lưu trữ (VD: TTLTQG1, EFEO)..."
              className="w-full pl-9 pr-3 py-2 text-xs bg-[#FBF9F5] border border-[#DDD4C5] rounded-md focus:outline-hidden focus:ring-1 focus:ring-[#8C3A27]"
            />
            <Search className="w-4 h-4 text-[#786F66] absolute left-3 top-2.5" />
          </div>

          {/* Document Type Filter */}
          <div>
            <select
              value={selectedType}
              onChange={(e) => setSelectedType(e.target.value)}
              className="w-full py-2 px-3 text-xs bg-[#FBF9F5] border border-[#DDD4C5] rounded-md focus:outline-hidden focus:border-[#8C3A27]"
            >
              {documentTypes.map((t) => (
                <option key={t} value={t}>{t === 'Tất cả' ? 'Tất cả loại tư liệu' : t}</option>
              ))}
            </select>
          </div>

          {/* Institution Filter */}
          <div>
            <select
              value={selectedInstitution}
              onChange={(e) => setSelectedInstitution(e.target.value)}
              className="w-full py-2 px-3 text-xs bg-[#FBF9F5] border border-[#DDD4C5] rounded-md focus:outline-hidden focus:border-[#8C3A27]"
            >
              {institutions.map((inst) => (
                <option key={inst} value={inst}>{inst === 'Tất cả' ? 'Tất cả cơ quan lưu trữ' : inst}</option>
              ))}
            </select>
          </div>
        </div>

        {/* Active counter & Reset */}
        <div className="flex items-center justify-between text-xs text-[#786F66] pt-1 border-t border-[#E7DFD3]/60">
          <span>
            Tìm thấy <strong className="font-mono text-[#1C1917]">{filteredDocuments.length}</strong> tư liệu số hóa
          </span>
          {(selectedType !== 'Tất cả' || selectedInstitution !== 'Tất cả' || searchQuery) && (
            <button
              onClick={() => {
                setSelectedType('Tất cả');
                setSelectedInstitution('Tất cả');
                setSearchQuery('');
              }}
              className="text-[#8C3A27] hover:underline font-medium"
            >
              Xóa tất cả bộ lọc
            </button>
          )}
        </div>
      </div>

      {/* Grid of Archival Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredDocuments.map((doc) => {
          const associatedSite = sites.find((s) => s.id === doc.heritageSiteId);

          return (
            <div
              key={doc.id}
              onClick={() => onInspectDocument(doc)}
              className="group bg-[#FBF9F5] border border-[#E7DFD3] rounded-lg overflow-hidden hover:border-[#8C3A27] hover:shadow-md cursor-pointer transition-all flex flex-col justify-between"
            >
              {/* Document Image Framing */}
              <div className="relative h-56 bg-[#2A2421] overflow-hidden">
                <img
                  src={doc.imageUrl}
                  alt={doc.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300 opacity-90 group-hover:opacity-100"
                />
                <div className="absolute top-2.5 left-2.5 bg-black/80 backdrop-blur-xs text-[#E7C794] text-[10px] font-mono px-2 py-0.5 rounded border border-[#E7C794]/20">
                  {doc.archiveRefCode}
                </div>
                <div className="absolute bottom-2.5 right-2.5 bg-black/60 text-white p-1.5 rounded hover:bg-black transition-colors">
                  <Maximize2 className="w-3.5 h-3.5" />
                </div>
              </div>

              {/* Document Metadata Card Body */}
              <div className="p-4 space-y-3 flex-1 flex flex-col justify-between">
                <div className="space-y-1.5">
                  <div className="flex items-center justify-between text-[11px] text-[#786F66]">
                    <span className="font-semibold text-[#8C3A27] uppercase tracking-wider">
                      {doc.year}
                    </span>
                    <span className="truncate max-w-[180px]">{doc.documentType.split(' ')[0]}</span>
                  </div>

                  <h3 className="font-serif font-bold text-base text-[#1C1917] group-hover:text-[#8C3A27] transition-colors leading-snug line-clamp-2">
                    {doc.title}
                  </h3>

                  <p className="text-xs text-[#57534E] line-clamp-3 leading-relaxed">
                    {doc.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-[#E7DFD3] space-y-2">
                  <div className="text-[11px] text-[#786F66] truncate font-mono">
                    {doc.archiveInstitution}
                  </div>

                  <div className="flex items-center justify-between pt-1">
                    {associatedSite ? (
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          onJumpToSite(associatedSite);
                        }}
                        className="text-xs font-medium text-[#166534] hover:underline flex items-center gap-1 truncate max-w-[160px]"
                        title={`Xem vị trí ${associatedSite.name} trên bản đồ`}
                      >
                        <Building className="w-3 h-3 shrink-0" />
                        <span className="truncate">{associatedSite.name}</span>
                      </button>
                    ) : (
                      <span className="text-xs text-[#A89F91]">Tư liệu đô thị chung</span>
                    )}

                    <button
                      onClick={(e) => handleCopyCitation(doc, e)}
                      className="text-xs px-2 py-1 rounded bg-[#F5EFE4] hover:bg-[#EAE2D2] text-[#1C1917] flex items-center gap-1 transition-colors shrink-0"
                      title="Sao chép trích dẫn tài liệu"
                    >
                      {copiedId === doc.id ? (
                        <>
                          <Check className="w-3 h-3 text-emerald-600" />
                          <span className="text-[11px]">Đã chép</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3 h-3 text-[#786F66]" />
                          <span className="text-[11px]">Trích dẫn</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
