import React, { useState } from 'react';
import { HeritageSite } from '../types/heritage';
import { HistoricalComparisonSlider } from './HistoricalComparisonSlider';
import { History, Layers, BookOpen, Compass, ArrowRight, Eye } from 'lucide-react';

interface ComparativeTimelineViewProps {
  sites: HeritageSite[];
  onOpenSiteDetails: (site: HeritageSite) => void;
  onJumpToMap: (site: HeritageSite) => void;
}

export const ComparativeTimelineView: React.FC<ComparativeTimelineViewProps> = ({
  sites,
  onOpenSiteDetails,
  onJumpToMap
}) => {
  const sitesWithVintage = sites.filter((s) => Boolean(s.vintageImage));
  const [activeSiteId, setActiveSiteId] = useState<string>(sitesWithVintage[0]?.id || '');

  const activeSite = sites.find((s) => s.id === activeSiteId) || sitesWithVintage[0];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8 animate-fade-in">
      {/* Editorial Header */}
      <div className="border-b border-[#E7DFD3] pb-6 space-y-2">
        <div className="text-xs font-mono uppercase tracking-widest text-[#8C3A27]">
          KHẢO CỨU HÌNH THÁI ĐÔ THỊ QUA THẾ KỶ
        </div>
        <h1 className="font-serif text-3xl sm:text-4xl font-bold text-[#1C1917] tracking-tight">
          So sánh Cảnh quan Di sản Xưa & Nay
        </h1>
        <p className="text-sm text-[#57534E] max-w-3xl leading-relaxed">
          Kéo con trượt tương tác để chứng kiến sự biến đổi hình thái kiến trúc qua hơn một thế kỷ: từ những bức ảnh chụp phim kính đen trắng của các nhà thám hiểm phương Tây đầu thế kỷ 20 đối sánh trực tiếp với hiện trạng sau các dự án trùng tu phục hồi.
        </p>
      </div>

      {/* Horizontal Site Selector Tabs */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
        {sitesWithVintage.map((site) => (
          <button
            key={site.id}
            onClick={() => setActiveSiteId(site.id)}
            className={`px-4 py-2 rounded-lg text-xs font-medium whitespace-nowrap transition-all border ${
              activeSite?.id === site.id
                ? 'bg-[#2A2421] text-white border-[#2A2421] shadow-xs'
                : 'bg-[#FBF9F5] text-[#57534E] border-[#E7DFD3] hover:bg-[#F3EDE2]'
            }`}
          >
            <span className="font-serif text-sm mr-1.5">{site.name}</span>
            <span className="font-mono text-[10px] opacity-75">({site.city})</span>
          </button>
        ))}
      </div>

      {/* Active Comparison Canvas */}
      {activeSite && (
        <div className="bg-[#FBF9F5] border border-[#E7DFD3] rounded-xl p-6 space-y-6 shadow-xs">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 border-b border-[#E7DFD3] pb-4">
            <div>
              <div className="text-xs text-[#8C3A27] font-semibold uppercase tracking-wider">
                {activeSite.city} · {activeSite.architecturalStyle}
              </div>
              <h2 className="font-serif text-2xl font-bold text-[#1C1917]">
                {activeSite.name}
              </h2>
              {activeSite.frenchHistoricalName && (
                <p className="text-xs font-serif italic text-[#786F66]">
                  {activeSite.frenchHistoricalName}
                </p>
              )}
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={() => onJumpToMap(activeSite)}
                className="px-3 py-1.5 text-xs bg-[#F5EFE4] hover:bg-[#EBE2D0] border border-[#DDD4C5] rounded-md font-medium text-[#1C1917] flex items-center gap-1.5 transition-colors"
              >
                <Compass className="w-3.5 h-3.5 text-[#8C3A27]" />
                <span>Xem trên Bản đồ</span>
              </button>
              <button
                onClick={() => onOpenSiteDetails(activeSite)}
                className="px-3.5 py-1.5 text-xs bg-[#8C3A27] hover:bg-[#722F20] text-white rounded-md font-medium flex items-center gap-1.5 transition-colors"
              >
                <BookOpen className="w-3.5 h-3.5" />
                <span>Xem Hồ sơ Lưu trữ</span>
              </button>
            </div>
          </div>

          {/* Draggable Slider */}
          <HistoricalComparisonSlider
            vintageImage={activeSite.vintageImage!}
            vintageYear="1910 – 1928 (Lưu trữ Đông Dương)"
            vintageLabel="Ảnh tư liệu xưa"
            modernImage={activeSite.mainImage}
            modernYear="2024 (Hiện trạng)"
            modernLabel="Sau các đợt đại trùng tu"
            siteName={activeSite.name}
            caption={`Kéo con trượt để đối chiếu sự thay đổi chi tiết mặt đứng, hàng hiên, màu vôi và cảnh quan xung quanh công trình ${activeSite.name}.`}
          />

          {/* Architectural Analysis Breakdown */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4 border-t border-[#E7DFD3] text-xs text-[#57534E]">
            <div className="space-y-2 bg-[#F7F3EA] p-4 rounded-lg border border-[#E7DFD3]">
              <h3 className="font-serif font-bold text-sm text-[#1C1917] flex items-center gap-1.5">
                <History className="w-4 h-4 text-[#8C3A27]" />
                <span>Giá trị Không gian Lịch sử Ban đầu</span>
              </h3>
              <p className="leading-relaxed">
                {activeSite.architecturalDescription}
              </p>
              <div className="pt-2 text-[11px] font-mono text-[#786F66]">
                Nguồn tư liệu gốc: {activeSite.citation.archiveCode}
              </div>
            </div>

            <div className="space-y-2 bg-[#F7F3EA] p-4 rounded-lg border border-[#E7DFD3]">
              <h3 className="font-serif font-bold text-sm text-[#1C1917] flex items-center gap-1.5">
                <Layers className="w-4 h-4 text-[#166534]" />
                <span>Những Thay đổi & Thành tựu Bảo tồn Đương đại</span>
              </h3>
              <p className="leading-relaxed">
                Qua các biến động thời gian và chiến tranh, công trình đã được giữ gìn nguyên vẹn các thức cột chịu lực, hệ thống mái vòm và được khôi phục màu sơn vôi truyền thống theo phương pháp phục nguyên di tích quốc tế (Hiến chương Venice & Nara).
              </p>
              <div className="pt-2 text-[11px] font-mono text-[#786F66]">
                Tình trạng hiện nay: <strong className="text-[#1C1917]">{activeSite.conditionStatus}</strong>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
