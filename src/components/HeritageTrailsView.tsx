import React from 'react';
import { HeritageTrail, HeritageSite } from '../types/heritage';
import { Clock, MapPin, Compass, ArrowRight, CheckCircle2, ChevronRight, Layers } from 'lucide-react';

interface HeritageTrailsViewProps {
  trails: HeritageTrail[];
  sites: HeritageSite[];
  onSelectTrailOnMap: (trail: HeritageTrail) => void;
  onOpenSiteDetails: (site: HeritageSite) => void;
}

export const HeritageTrailsView: React.FC<HeritageTrailsViewProps> = ({
  trails,
  sites,
  onSelectTrailOnMap,
  onOpenSiteDetails
}) => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-10 animate-fade-in">
      {/* Editorial Header Section */}
      <div className="border-b border-[#E7DFD3] pb-6 space-y-2">
        <div className="text-xs font-mono uppercase tracking-widest text-[#8C3A27]">
          HÀNH TRÌNH ĐÔ THỊ HỌC & KIẾN TRÚC
        </div>
        <h1 className="font-serif text-3xl sm:text-4xl font-bold text-[#1C1917] tracking-tight">
          Tuyến Du hành Di sản Kiến trúc
        </h1>
        <p className="text-sm text-[#57534E] max-w-3xl leading-relaxed">
          Các lộ trình đi bộ và đạp xe khảo cứu được giám tuyển tỉ mỉ qua từng trục không gian lịch sử: từ các đại lộ phong cách Parisien tại Hà Nội và Sài Gòn, đến dấu ấn cung đình triều Nguyễn tại Huế và cao nguyên sương mù Đà Lạt.
        </p>
      </div>

      {/* Trails List */}
      <div className="space-y-12">
        {trails.map((trail, index) => {
          const trailSites = trail.siteIds
            .map((id) => sites.find((s) => s.id === id))
            .filter((s): s is HeritageSite => Boolean(s));

          return (
            <div
              key={trail.id}
              className="bg-[#FBF9F5] border border-[#E7DFD3] rounded-xl overflow-hidden shadow-xs grid grid-cols-1 lg:grid-cols-12 gap-0"
            >
              {/* Left Column: Visual Banner & Summary */}
              <div className="lg:col-span-5 relative h-64 lg:h-auto min-h-[300px] overflow-hidden bg-[#2A2421]">
                <img
                  src={trail.bannerImage}
                  alt={trail.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent lg:bg-gradient-to-r lg:from-transparent lg:to-black/30" />
                
                <div className="absolute top-4 left-4 bg-black/75 backdrop-blur-xs text-[#E7C794] text-xs font-mono px-2.5 py-1 rounded">
                  Lộ trình {index + 1} · {trail.city}
                </div>

                <div className="absolute bottom-4 left-4 right-4 text-white space-y-1.5">
                  <div className="flex items-center gap-3 text-xs text-[#E7DFD3]">
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-[#E7C794]" />
                      <span>{trail.duration}</span>
                    </span>
                    <span aria-hidden="true">·</span>
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5 text-[#E7C794]" />
                      <span>{trail.distance}</span>
                    </span>
                  </div>
                </div>
              </div>

              {/* Right Column: Narrative, Stops & Action */}
              <div className="lg:col-span-7 p-6 sm:p-8 flex flex-col justify-between space-y-6">
                <div className="space-y-3">
                  <div className="text-xs font-semibold text-[#8C3A27] uppercase tracking-wider">
                    {trail.city} · {trail.distance}
                  </div>
                  <h2 className="font-serif text-xl sm:text-2xl font-bold text-[#1C1917] leading-tight">
                    {trail.title}
                  </h2>
                  <p className="text-xs sm:text-sm text-[#786F66] font-serif italic">
                    {trail.subtitle}
                  </p>
                  <p className="text-xs sm:text-sm text-[#57534E] leading-relaxed">
                    {trail.description}
                  </p>

                  {/* Highlights checklist */}
                  <div className="pt-2 space-y-1.5">
                    <div className="text-xs font-bold text-[#1C1917] uppercase tracking-wider">
                      Điểm nhấn kiến trúc nổi bật:
                    </div>
                    {trail.highlights.map((item, hIdx) => (
                      <div key={hIdx} className="flex items-start gap-2 text-xs text-[#57534E]">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#166534] shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>

                  {/* Sequential Route Stops */}
                  <div className="pt-3">
                    <div className="text-xs font-bold text-[#1C1917] uppercase tracking-wider mb-2">
                      Các điểm dừng khảo cứu ({trailSites.length} công trình):
                    </div>
                    <div className="flex flex-wrap items-center gap-2">
                      {trailSites.map((site, sIdx) => (
                        <React.Fragment key={site.id}>
                          <button
                            onClick={() => onOpenSiteDetails(site)}
                            className="px-2.5 py-1 text-xs bg-[#F5EFE4] hover:bg-[#EBE2D0] border border-[#E7DFD3] rounded text-[#1C1917] font-medium transition-colors flex items-center gap-1"
                          >
                            <span className="font-mono text-[10px] text-[#8C3A27]">{sIdx + 1}.</span>
                            <span>{site.name}</span>
                          </button>
                          {sIdx < trailSites.length - 1 && (
                            <ChevronRight className="w-3.5 h-3.5 text-[#A89F91]" />
                          )}
                        </React.Fragment>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Primary CTA */}
                <div className="pt-4 border-t border-[#E7DFD3] flex items-center justify-between">
                  <div className="text-xs text-[#786F66]">
                    Phù hợp cho: Kiến trúc sư, nhà nghiên cứu & du khách văn hóa
                  </div>
                  <button
                    onClick={() => onSelectTrailOnMap(trail)}
                    className="px-4 py-2 bg-[#8C3A27] hover:bg-[#722F20] text-white text-xs font-medium rounded-md transition-colors flex items-center gap-1.5 shadow-xs"
                  >
                    <Compass className="w-4 h-4" />
                    <span>Xem lộ trình trên Bản đồ</span>
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
