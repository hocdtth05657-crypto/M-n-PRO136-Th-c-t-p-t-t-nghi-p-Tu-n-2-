import React, { useState } from 'react';
import { HeritageSite, ArchivalSource } from '../types/heritage';
import { HistoricalComparisonSlider } from './HistoricalComparisonSlider';
import { 
  X, Compass, BookOpen, Layers, History, FileText, 
  Award, Copy, Check, ExternalLink, Calendar, MapPin, 
  Maximize2, ArrowUpRight, Share2 
} from 'lucide-react';

interface HeritageDetailModalProps {
  site: HeritageSite | null;
  onClose: () => void;
  onInspectDocument: (doc: ArchivalSource) => void;
}

export const HeritageDetailModal: React.FC<HeritageDetailModalProps> = ({
  site,
  onClose,
  onInspectDocument
}) => {
  const [activeTab, setActiveTab] = useState<'overview' | 'archives' | 'compare' | 'timeline' | 'citation'>('overview');
  const [copiedCitation, setCopiedCitation] = useState(false);

  if (!site) return null;

  const handleCopyCitation = () => {
    const citation = `${site.architect} (${site.inaugurationYear}). Hồ sơ kiến trúc ${site.name} (${site.frenchHistoricalName || ''}). Nguồn lưu trữ: ${site.citation.archiveCode}. ${site.citation.bibliography}.`;
    navigator.clipboard.writeText(citation);
    setCopiedCitation(true);
    setTimeout(() => setCopiedCitation(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 md:p-6 bg-black/75 backdrop-blur-xs animate-fade-in">
      <div className="relative w-full max-w-5xl h-[92vh] bg-[#FBF9F5] border border-[#DDD4C5] rounded-xl flex flex-col overflow-hidden shadow-2xl text-[#1C1917]">
        
        {/* Modal Header */}
        <div className="px-6 py-4 bg-[#F5EFE4] border-b border-[#E7DFD3] flex items-center justify-between shrink-0">
          <div className="space-y-0.5 pr-4">
            <div className="flex items-center gap-2 text-xs text-[#786F66]">
              <span className="font-semibold text-[#8C3A27] uppercase tracking-wider">{site.city}</span>
              <span aria-hidden="true">·</span>
              <span>{site.heritageRank}</span>
              <span aria-hidden="true">·</span>
              <span className="font-mono text-[#57534E]">{site.constructionPeriod}</span>
            </div>
            <h2 className="font-serif text-xl sm:text-2xl font-bold text-[#1C1917]">
              {site.name}
            </h2>
            {site.frenchHistoricalName && (
              <p className="text-xs font-serif italic text-[#786F66]">
                {site.frenchHistoricalName}
              </p>
            )}
          </div>

          <button
            onClick={onClose}
            className="p-2 text-[#786F66] hover:text-[#1C1917] hover:bg-[#EBE2D0] rounded-lg transition-colors shrink-0"
            title="Đóng hồ sơ"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Navigation Tabs (Inside Monograph) */}
        <div className="px-6 bg-[#FBF9F5] border-b border-[#E7DFD3] flex items-center gap-6 overflow-x-auto scrollbar-none text-xs font-medium text-[#57534E] shrink-0">
          <button
            onClick={() => setActiveTab('overview')}
            className={`py-3 border-b-2 transition-colors whitespace-nowrap flex items-center gap-1.5 ${
              activeTab === 'overview'
                ? 'border-[#8C3A27] text-[#1C1917] font-semibold'
                : 'border-transparent hover:text-[#1C1917]'
            }`}
          >
            <Layers className="w-4 h-4" />
            <span>Giải phẫu Kiến trúc</span>
          </button>

          <button
            onClick={() => setActiveTab('archives')}
            className={`py-3 border-b-2 transition-colors whitespace-nowrap flex items-center gap-1.5 ${
              activeTab === 'archives'
                ? 'border-[#8C3A27] text-[#1C1917] font-semibold'
                : 'border-transparent hover:text-[#1C1917]'
            }`}
          >
            <FileText className="w-4 h-4" />
            <span>Nguồn Tư liệu & Bản vẽ ({site.archives.length})</span>
          </button>

          {site.vintageImage && (
            <button
              onClick={() => setActiveTab('compare')}
              className={`py-3 border-b-2 transition-colors whitespace-nowrap flex items-center gap-1.5 ${
                activeTab === 'compare'
                  ? 'border-[#8C3A27] text-[#1C1917] font-semibold'
                  : 'border-transparent hover:text-[#1C1917]'
              }`}
            >
              <History className="w-4 h-4" />
              <span>Đối sánh Xưa & Nay</span>
            </button>
          )}

          <button
            onClick={() => setActiveTab('timeline')}
            className={`py-3 border-b-2 transition-colors whitespace-nowrap flex items-center gap-1.5 ${
              activeTab === 'timeline'
                ? 'border-[#8C3A27] text-[#1C1917] font-semibold'
                : 'border-transparent hover:text-[#1C1917]'
            }`}
          >
            <Calendar className="w-4 h-4" />
            <span>Trục Lịch sử ({site.historicalTimeline.length})</span>
          </button>

          <button
            onClick={() => setActiveTab('citation')}
            className={`py-3 border-b-2 transition-colors whitespace-nowrap flex items-center gap-1.5 ${
              activeTab === 'citation'
                ? 'border-[#8C3A27] text-[#1C1917] font-semibold'
                : 'border-transparent hover:text-[#1C1917]'
            }`}
          >
            <BookOpen className="w-4 h-4" />
            <span>Hồ sơ Lưu trữ & Trích dẫn</span>
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6">
          
          {/* TAB 1: OVERVIEW & ARCHITECTURAL ANATOMY */}
          {activeTab === 'overview' && (
            <div className="space-y-6">
              {/* Hero Image Showcase */}
              <div className="relative h-72 sm:h-84 md:h-96 rounded-lg overflow-hidden border border-[#E7DFD3] shadow-xs">
                <img
                  src={site.mainImage}
                  alt={site.name}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute bottom-4 left-5 right-5 text-white flex flex-col sm:flex-row sm:items-end justify-between gap-2">
                  <div>
                    <span className="text-[11px] font-mono uppercase tracking-widest text-[#E7C794]">
                      {site.architecturalStyle}
                    </span>
                    <h3 className="font-serif text-2xl font-bold text-white leading-tight">
                      {site.name}
                    </h3>
                    <p className="text-xs text-stone-300 mt-1 flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5 text-[#E7C794]" />
                      <span>{site.address}</span>
                    </p>
                  </div>
                  <div className="text-right shrink-0">
                    <span className="inline-block px-2.5 py-1 text-xs rounded bg-white/20 backdrop-blur-xs font-mono font-medium">
                      Năm khánh thành: {site.inaugurationYear}
                    </span>
                  </div>
                </div>
              </div>

              {/* Monograph Narrative Content */}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div className="lg:col-span-2 space-y-4">
                  <h4 className="font-serif text-lg font-bold text-[#1C1917] border-b border-[#E7DFD3] pb-2">
                    Khảo cứu Đặc điểm Kiến trúc & Không gian Đô thị
                  </h4>
                  <p className="text-sm text-[#44403C] leading-relaxed first-letter:text-4xl first-letter:font-serif first-letter:font-bold first-letter:float-left first-letter:mr-2.5 first-letter:text-[#8C3A27]">
                    {site.architecturalDescription}
                  </p>

                  <div className="pt-2">
                    <h5 className="font-serif font-bold text-sm text-[#1C1917] mb-2.5">
                      Các Giải pháp Kết cấu & Chi tiết Không gian Tiêu biểu
                    </h5>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                      {site.spatialFeatures.map((feat, idx) => (
                        <div
                          key={idx}
                          className="p-3 bg-[#F5EFE4] border border-[#E7DFD3] rounded-md text-xs text-[#44403C] flex items-start gap-2"
                        >
                          <span className="font-mono text-[#8C3A27] font-bold text-xs mt-0.5">
                            0{idx + 1}.
                          </span>
                          <span className="leading-snug">{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Right Specification Box */}
                <div className="bg-[#F7F3EA] border border-[#E7DFD3] rounded-lg p-4 space-y-3.5 text-xs text-[#57534E]">
                  <h5 className="font-serif font-bold text-sm text-[#1C1917] border-b border-[#E7DFD3] pb-2">
                    Thông số Kỹ thuật & Hồ sơ
                  </h5>

                  <div>
                    <span className="text-[11px] text-[#786F66] block">Tác giả thiết kế / KTS</span>
                    <strong className="text-[#1C1917] text-sm font-medium">{site.architect}</strong>
                  </div>

                  <div>
                    <span className="text-[11px] text-[#786F66] block">Phong cách kiến trúc</span>
                    <strong className="text-[#1C1917]">{site.architecturalStyle}</strong>
                  </div>

                  <div>
                    <span className="text-[11px] text-[#786F66] block">Thời gian xây dựng</span>
                    <strong className="font-mono text-[#1C1917]">{site.constructionPeriod}</strong>
                  </div>

                  <div>
                    <span className="text-[11px] text-[#786F66] block">Cấp bậc xếp hạng di sản</span>
                    <strong className="text-[#8C3A27]">{site.heritageRank}</strong>
                  </div>

                  <div>
                    <span className="text-[11px] text-[#786F66] block">Tình trạng bảo tồn</span>
                    <strong className="text-[#1C1917]">{site.conditionStatus}</strong>
                  </div>

                  <div>
                    <span className="text-[11px] text-[#786F66] block">Tọa độ địa lý (GPS)</span>
                    <span className="font-mono text-[11px] text-[#786F66]">
                      {site.coordinates[0].toFixed(4)}°N, {site.coordinates[1].toFixed(4)}°E
                    </span>
                  </div>

                  {site.blueprintImage && (
                    <button
                      onClick={() => onInspectDocument(site.archives[0])}
                      className="w-full py-2 px-3 bg-[#2A2421] hover:bg-[#3D3531] text-[#FBF9F5] rounded-md font-medium text-xs flex items-center justify-center gap-1.5 transition-colors mt-2"
                    >
                      <Maximize2 className="w-3.5 h-3.5 text-[#E7C794]" />
                      <span>Xem Bản vẽ Kỹ thuật Gốc</span>
                    </button>
                  )}
                </div>
              </div>
            </div>
          )}

          {/* TAB 2: ARCHIVES & BLUEPRINTS */}
          {activeTab === 'archives' && (
            <div className="space-y-6">
              <div className="flex items-center justify-between border-b border-[#E7DFD3] pb-3">
                <div>
                  <h4 className="font-serif text-lg font-bold text-[#1C1917]">
                    Nguồn Tư liệu Lịch sử & Hồ sơ Bản vẽ
                  </h4>
                  <p className="text-xs text-[#786F66]">
                    Thu thập từ Trung tâm Lưu trữ Quốc gia, Viện Viễn Đông Bác Cổ (EFEO) và Viện Bảo tồn Di tích
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {site.archives.map((doc) => (
                  <div
                    key={doc.id}
                    onClick={() => onInspectDocument(doc)}
                    className="group bg-[#F7F3EA] border border-[#E7DFD3] rounded-lg overflow-hidden hover:border-[#8C3A27] cursor-pointer transition-all flex flex-col justify-between shadow-2xs"
                  >
                    <div className="relative h-48 bg-[#EBE4D5] overflow-hidden">
                      <img
                        src={doc.imageUrl}
                        alt={doc.title}
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute top-2 left-2 bg-black/75 text-[#E7C794] text-[10px] font-mono px-2 py-0.5 rounded backdrop-blur-xs">
                        {doc.archiveRefCode}
                      </div>
                      <div className="absolute bottom-2 right-2 bg-white/90 text-[#1C1917] p-1.5 rounded-full shadow-md">
                        <Maximize2 className="w-3.5 h-3.5 text-[#8C3A27]" />
                      </div>
                    </div>

                    <div className="p-4 space-y-2">
                      <div className="text-[11px] text-[#8C3A27] font-semibold uppercase tracking-wider">
                        {doc.documentType} · Năm {doc.year}
                      </div>
                      <h5 className="font-serif font-bold text-sm text-[#1C1917] group-hover:text-[#8C3A27] transition-colors leading-snug">
                        {doc.title}
                      </h5>
                      <p className="text-xs text-[#57534E] line-clamp-2 leading-relaxed">
                        {doc.description}
                      </p>
                      <div className="text-[11px] font-mono text-[#786F66] pt-1">
                        Cơ quan lưu giữ: {doc.archiveInstitution}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 3: HISTORICAL COMPARISON */}
          {activeTab === 'compare' && site.vintageImage && (
            <div className="space-y-4">
              <div>
                <h4 className="font-serif text-lg font-bold text-[#1C1917]">
                  Đối sánh Cảnh quan & Hình thái Kiến trúc Xưa - Nay
                </h4>
                <p className="text-xs text-[#786F66]">
                  So sánh trực quan giữa ảnh tư liệu đầu thế kỷ XX với hiện trạng sau các đợt đại trùng tu
                </p>
              </div>

              <HistoricalComparisonSlider
                vintageImage={site.vintageImage}
                vintageYear="1910 – 1925"
                vintageLabel="Ảnh tư liệu lưu trữ"
                modernImage={site.mainImage}
                modernYear="Hiện trạng bảo tồn"
                modernLabel="Hiện trạng ngày nay"
                siteName={site.name}
                caption={`Hình thái mặt đứng và không gian đô thị của ${site.name} qua hơn một thế kỷ thăng trầm lịch sử.`}
              />
            </div>
          )}

          {/* TAB 4: HISTORICAL TIMELINE */}
          {activeTab === 'timeline' && (
            <div className="space-y-4">
              <div>
                <h4 className="font-serif text-lg font-bold text-[#1C1917]">
                  Biên niên sử Xây dựng & Các mốc Đại trùng tu
                </h4>
                <p className="text-xs text-[#786F66]">
                  Dòng thời gian ghi nhận từ các văn bản sắc lệnh quy hoạch và nhật ký thi công
                </p>
              </div>

              <div className="relative pl-6 sm:pl-8 border-l-2 border-[#E7DFD3] space-y-6 pt-2">
                {site.historicalTimeline.map((item, idx) => (
                  <div key={idx} className="relative group">
                    {/* Timeline Node */}
                    <div className="absolute -left-[31px] sm:-left-[39px] top-1 w-4 h-4 rounded-full bg-[#8C3A27] border-2 border-white shadow-xs" />

                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <span className="font-mono text-xs font-bold text-[#8C3A27]">
                          {item.year}
                        </span>
                        <span aria-hidden="true" className="text-[#D6CEBE]">·</span>
                        <span className="text-[11px] text-[#786F66] uppercase tracking-wider font-medium">
                          {item.milestoneType}
                        </span>
                      </div>
                      <h5 className="font-serif font-bold text-base text-[#1C1917]">
                        {item.title}
                      </h5>
                      <p className="text-xs text-[#57534E] leading-relaxed max-w-2xl">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 5: OFFICIAL CITATIONS & BIBLIOGRAPHY */}
          {activeTab === 'citation' && (
            <div className="space-y-6">
              <div>
                <h4 className="font-serif text-lg font-bold text-[#1C1917]">
                  Hồ sơ Khoa học Di sản & Nguồn Dẫn Thư tịch
                </h4>
                <p className="text-xs text-[#786F66]">
                  Chuẩn hóa mã hồ sơ lưu trữ và trích dẫn học thuật phục vụ đồ án, bài nghiên cứu chuyên khảo
                </p>
              </div>

              <div className="p-5 bg-[#F5EFE4] border border-[#E7DFD3] rounded-lg space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#8C3A27]">
                    Trích dẫn Học thuật Chuẩn APA / Chicago
                  </span>
                  <button
                    onClick={handleCopyCitation}
                    className="px-3 py-1.5 bg-[#2A2421] hover:bg-[#3D3531] text-white text-xs font-medium rounded transition-colors flex items-center gap-1.5"
                  >
                    {copiedCitation ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-400" />
                        <span>Đã sao chép</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        <span>Sao chép trích dẫn</span>
                      </>
                    )}
                  </button>
                </div>

                <div className="p-3 bg-white border border-[#DDD4C5] rounded font-mono text-xs text-[#2A2421] leading-relaxed select-all">
                  {site.architect} ({site.inaugurationYear}). <em>Hồ sơ nghiên cứu kiến trúc {site.name} ({site.frenchHistoricalName || ''})</em>. Mã hồ sơ lưu trữ: {site.citation.archiveCode}. Thư mục: {site.citation.bibliography}.
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2 text-xs text-[#57534E]">
                  <div>
                    <span className="text-[11px] text-[#786F66] block">Mã số hồ sơ lưu trữ quốc gia</span>
                    <strong className="font-mono text-[#1C1917]">{site.citation.archiveCode}</strong>
                  </div>

                  {site.citation.decreeNumber && (
                    <div>
                      <span className="text-[11px] text-[#786F66] block">Văn bản pháp quy / Sắc lệnh thành lập</span>
                      <strong className="text-[#1C1917]">{site.citation.decreeNumber}</strong>
                    </div>
                  )}

                  <div className="sm:col-span-2">
                    <span className="text-[11px] text-[#786F66] block">Tài liệu tham khảo chuyên khảo</span>
                    <span className="text-[#1C1917] italic">{site.citation.bibliography}</span>
                  </div>

                  {site.citation.curatorNotes && (
                    <div className="sm:col-span-2 p-3 bg-[#EFE9DF] rounded text-[11px] text-[#57534E]">
                      <strong>Ghi chú của giám tuyển bảo tồn:</strong> {site.citation.curatorNotes}
                    </div>
                  )}
                </div>
              </div>
            </div>
          )}

        </div>

        {/* Modal Footer Bar */}
        <div className="px-6 py-3 bg-[#F5EFE4] border-t border-[#E7DFD3] flex items-center justify-between text-xs text-[#786F66] shrink-0">
          <div className="flex items-center gap-2">
            <span>Tọa độ: <span className="font-mono text-[#1C1917]">{site.coordinates.join(', ')}</span></span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleCopyCitation}
              className="px-3 py-1 text-xs border border-[#DDD4C5] rounded bg-white hover:bg-[#F3EDE2] text-[#1C1917] font-medium transition-colors flex items-center gap-1.5"
            >
              <Copy className="w-3.5 h-3.5 text-[#8C3A27]" />
              <span>Lấy trích dẫn</span>
            </button>
            <button
              onClick={onClose}
              className="px-4 py-1 text-xs rounded bg-[#2A2421] text-white hover:bg-[#3D3531] font-medium transition-colors"
            >
              Đóng
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
