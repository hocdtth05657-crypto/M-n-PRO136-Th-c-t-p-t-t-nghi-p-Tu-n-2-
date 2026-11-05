import React, { useEffect, useRef, useState } from 'react';
import L from 'leaflet';
import { HeritageSite, ArchitecturalStyle } from '../types/heritage';
import { MapPin, Eye, FileText, Layers, Calendar, SlidersHorizontal, ArrowRight, BookOpen, Compass } from 'lucide-react';

interface HeritageMapProps {
  sites: HeritageSite[];
  selectedSite: HeritageSite | null;
  onSelectSite: (site: HeritageSite) => void;
  selectedCity: string;
  onSelectCity: (city: string) => void;
  onOpenSiteDetails: (site: HeritageSite) => void;
}

// City center anchor coordinates
const CITY_COORDINATES: Record<string, { center: [number, number]; zoom: number }> = {
  'Tất cả': { center: [16.0544, 108.2022], zoom: 6 },
  'Hà Nội': { center: [21.0285, 105.8542], zoom: 14 },
  'TP. Hồ Chí Minh': { center: [10.7769, 106.7009], zoom: 15 },
  'Huế': { center: [16.4637, 107.5909], zoom: 14 },
  'Hội An': { center: [15.8801, 108.3380], zoom: 16 },
  'Đà Lạt': { center: [11.9404, 108.4583], zoom: 14 }
};

// Map tile layers
const TILE_LAYERS = {
  architectural: {
    name: 'Bản đồ Tinh giản',
    url: 'https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png',
    attribution: '&copy; CartoDB &copy; OpenStreetMap',
    cssClass: ''
  },
  vintage: {
    name: 'Bản đồ Thư tịch Cổ',
    url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
    attribution: '&copy; OpenStreetMap contributors',
    cssClass: 'vintage-map-tiles'
  },
  satellite: {
    name: 'Ảnh Không ảnh Vệ tinh',
    url: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}',
    attribution: '&copy; Esri, Maxar, Earthstar Geographics',
    cssClass: ''
  }
};

const getStyleColor = (style: ArchitecturalStyle): { bg: string; border: string; text: string } => {
  if (style.includes('Tân Cổ Điển')) return { bg: '#9A3412', border: '#7C2D12', text: '#FDF6F0' }; // Terracotta
  if (style.includes('Đông Dương')) return { bg: '#166534', border: '#14532D', text: '#F0FDF4' }; // Deep Green
  if (style.includes('Cổ truyền') || style.includes('Cung đình')) return { bg: '#B45309', border: '#92400E', text: '#FFFBEB' }; // Imperial Amber
  if (style.includes('Hiện đại')) return { bg: '#1E40AF', border: '#1E3A8A', text: '#EFF6FF' }; // Royal Blue
  if (style.includes('Romanesque') || style.includes('Gothic')) return { bg: '#701A75', border: '#581C87', text: '#FDF4FF' }; // Royal Purple
  if (style.includes('Thương cảng')) return { bg: '#854D0E', border: '#713F12', text: '#FEFCE8' }; // Ochre Wood
  return { bg: '#374151', border: '#1F2937', text: '#F9FAFB' };
};

export const HeritageMap: React.FC<HeritageMapProps> = ({
  sites,
  selectedSite,
  onSelectSite,
  selectedCity,
  onSelectCity,
  onOpenSiteDetails
}) => {
  const mapContainerRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<L.Map | null>(null);
  const markersLayerRef = useRef<L.LayerGroup | null>(null);
  const tileLayerRef = useRef<L.TileLayer | null>(null);

  const [activeTileType, setActiveTileType] = useState<keyof typeof TILE_LAYERS>('vintage');
  const [selectedStyleFilter, setSelectedStyleFilter] = useState<string>('Tất cả');
  const [selectedEraFilter, setSelectedEraFilter] = useState<string>('Tất cả');
  const [isFilterPanelOpen, setIsFilterPanelOpen] = useState(false);
  const [searchKeyword, setSearchKeyword] = useState('');

  // Filter sites
  const filteredSites = sites.filter((site) => {
    // City filter
    if (selectedCity !== 'Tất cả' && site.city !== selectedCity) return false;
    // Style filter
    if (selectedStyleFilter !== 'Tất cả' && site.architecturalStyle !== selectedStyleFilter) return false;
    // Era filter
    if (selectedEraFilter === 'Trước 1880' && site.inaugurationYear >= 1880) return false;
    if (selectedEraFilter === '1880 – 1945' && (site.inaugurationYear < 1880 || site.inaugurationYear > 1945)) return false;
    if (selectedEraFilter === '1945 – 1975' && (site.inaugurationYear < 1945 || site.inaugurationYear > 1975)) return false;
    if (selectedEraFilter === 'Sau 1975' && site.inaugurationYear < 1975) return false;
    // Keyword search
    if (searchKeyword.trim()) {
      const q = searchKeyword.toLowerCase();
      const matchName = site.name.toLowerCase().includes(q);
      const matchFr = site.frenchHistoricalName?.toLowerCase().includes(q) || false;
      const matchArch = site.architect.toLowerCase().includes(q);
      const matchAddr = site.address.toLowerCase().includes(q);
      if (!matchName && !matchFr && !matchArch && !matchAddr) return false;
    }
    return true;
  });

  // Initialize Map
  useEffect(() => {
    if (!mapContainerRef.current || mapInstanceRef.current) return;

    const initial = CITY_COORDINATES[selectedCity] || CITY_COORDINATES['Tất cả'];
    const map = L.map(mapContainerRef.current, {
      center: initial.center,
      zoom: initial.zoom,
      zoomControl: false,
      attributionControl: true
    });

    // Add zoom control at top right
    L.control.zoom({ position: 'topright' }).addTo(map);

    // Initial tile layer
    const tileConf = TILE_LAYERS[activeTileType];
    const tileLayer = L.tileLayer(tileConf.url, {
      attribution: tileConf.attribution,
      maxZoom: 19,
      className: tileConf.cssClass
    }).addTo(map);

    tileLayerRef.current = tileLayer;

    // Markers layer group
    const markersGroup = L.layerGroup().addTo(map);
    markersLayerRef.current = markersGroup;

    mapInstanceRef.current = map;

    return () => {
      map.remove();
      mapInstanceRef.current = null;
    };
  }, []);

  // Update Tile Layer
  useEffect(() => {
    const map = mapInstanceRef.current;
    if (!map || !tileLayerRef.current) return;

    const tileConf = TILE_LAYERS[activeTileType];
    map.removeLayer(tileLayerRef.current);
    const newLayer = L.tileLayer(tileConf.url, {
      attribution: tileConf.attribution,
      maxZoom: 19,
      className: tileConf.cssClass
    }).addTo(map);
    tileLayerRef.current = newLayer;
  }, [activeTileType]);

  // Update Markers
  useEffect(() => {
    const map = mapInstanceRef.current;
    const markersGroup = markersLayerRef.current;
    if (!map || !markersGroup) return;

    markersGroup.clearLayers();

    filteredSites.forEach((site) => {
      const isSelected = selectedSite?.id === site.id;
      const styleColors = getStyleColor(site.architecturalStyle);

      // Create distinctive architectural icon
      const iconHtml = `
        <div style="
          width: ${isSelected ? '38px' : '30px'};
          height: ${isSelected ? '38px' : '30px'};
          background-color: ${styleColors.bg};
          border: 2px solid #FFFFFF;
          box-shadow: 0 4px 10px rgba(0,0,0,0.35);
          border-radius: 50% 50% 50% 0;
          transform: rotate(-45deg);
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: transform 0.2s cubic-bezier(0.16, 1, 0.3, 1);
        ">
          <div style="
            transform: rotate(45deg);
            color: ${styleColors.text};
            font-size: ${isSelected ? '12px' : '10px'};
            font-family: monospace;
            font-weight: 700;
          ">
            🏛
          </div>
        </div>
      `;

      const customIcon = L.divIcon({
        className: 'custom-heritage-marker',
        html: iconHtml,
        iconSize: [isSelected ? 38 : 30, isSelected ? 38 : 30],
        iconAnchor: [isSelected ? 19 : 15, isSelected ? 38 : 30],
        popupAnchor: [0, -32]
      });

      const marker = L.marker(site.coordinates, { icon: customIcon });

      // Custom tooltip
      marker.bindTooltip(`
        <div style="padding: 4px 8px; font-family: 'Plus Jakarta Sans', sans-serif;">
          <div style="font-weight: 600; font-size: 13px; color: #1C1917;">${site.name}</div>
          <div style="font-size: 11px; color: #786F66;">${site.inaugurationYear} · ${site.architecturalStyle}</div>
        </div>
      `, {
        direction: 'top',
        offset: [0, -28],
        opacity: 0.95
      });

      marker.on('click', () => {
        onSelectSite(site);
      });

      markersGroup.addLayer(marker);
    });
  }, [filteredSites, selectedSite]);

  // Fly to selected city or selected site
  useEffect(() => {
    const map = mapInstanceRef.current;
    if (!map) return;

    if (selectedSite) {
      map.flyTo(selectedSite.coordinates, 16, { duration: 1.2 });
    } else {
      const cityCfg = CITY_COORDINATES[selectedCity] || CITY_COORDINATES['Tất cả'];
      map.flyTo(cityCfg.center, cityCfg.zoom, { duration: 1.5 });
    }
  }, [selectedCity, selectedSite]);

  return (
    <div className="relative w-full h-[calc(100vh-6.5rem)] flex overflow-hidden">
      {/* Left Sidebar: Heritage Catalog & Filter Engine */}
      <div className="w-full sm:w-96 lg:w-[420px] bg-[#FBF9F5] border-r border-[#E7DFD3] flex flex-col h-full z-20 shrink-0 shadow-lg sm:shadow-none">
        {/* Search & Filter Header */}
        <div className="p-4 border-b border-[#E7DFD3] bg-[#F7F3EA] space-y-3">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="font-serif text-lg font-bold text-[#1C1917]">Danh mục Di sản</h2>
              <div className="text-xs text-[#786F66] flex items-center gap-1.5 mt-0.5">
                <span>{selectedCity}</span>
                <span aria-hidden="true">·</span>
                <span>{filteredSites.length} công trình</span>
              </div>
            </div>
            <button
              onClick={() => setIsFilterPanelOpen(!isFilterPanelOpen)}
              className={`p-2 rounded-md border text-xs flex items-center gap-1.5 transition-colors ${
                isFilterPanelOpen || selectedStyleFilter !== 'Tất cả' || selectedEraFilter !== 'Tất cả'
                  ? 'bg-[#8C3A27] text-white border-[#8C3A27]'
                  : 'bg-[#FBF9F5] text-[#57534E] border-[#DDD4C5] hover:bg-[#EFE9DF]'
              }`}
              title="Bộ lọc phong cách và thời kỳ"
            >
              <SlidersHorizontal className="w-3.5 h-3.5" />
              <span className="font-medium text-xs">Lọc</span>
            </button>
          </div>

          {/* Quick search input */}
          <div className="relative">
            <input
              type="text"
              value={searchKeyword}
              onChange={(e) => setSearchKeyword(e.target.value)}
              placeholder="Tìm theo tên, KTS, phố..."
              className="w-full pl-8 pr-3 py-1.5 text-xs bg-[#FBF9F5] border border-[#DDD4C5] rounded-md focus:outline-hidden focus:ring-1 focus:ring-[#8C3A27] focus:border-[#8C3A27]"
            />
            <Compass className="w-3.5 h-3.5 absolute left-2.5 top-2.5 text-[#A89F91]" />
            {searchKeyword && (
              <button
                onClick={() => setSearchKeyword('')}
                className="absolute right-2.5 top-2 text-xs text-[#786F66] hover:text-[#1C1917]"
              >
                ✕
              </button>
            )}
          </div>

          {/* Collapsible advanced filters */}
          {isFilterPanelOpen && (
            <div className="pt-2 border-t border-[#E7DFD3] space-y-3 text-xs">
              <div>
                <label className="block text-[#786F66] font-medium mb-1">Phong cách kiến trúc</label>
                <select
                  value={selectedStyleFilter}
                  onChange={(e) => setSelectedStyleFilter(e.target.value)}
                  className="w-full py-1 px-2 bg-[#FBF9F5] border border-[#DDD4C5] rounded text-xs text-[#1C1917] focus:outline-hidden focus:border-[#8C3A27]"
                >
                  <option value="Tất cả">Tất cả phong cách</option>
                  <option value="Kiến trúc Tân Cổ Điển Pháp">Tân Cổ Điển Pháp</option>
                  <option value="Kiến trúc Đông Dương (Indochine)">Kiến trúc Đông Dương (Indochine)</option>
                  <option value="Kiến trúc Cổ truyền / Cung đình">Cổ truyền / Cung đình</option>
                  <option value="Kiến trúc Hiện đại Nhiệt đới">Hiện đại Nhiệt đới</option>
                  <option value="Kiến trúc Romanesque & Tân Gothic">Romanesque & Tân Gothic</option>
                  <option value="Kiến trúc Thương cảng Cổ">Thương cảng Cổ</option>
                  <option value="Kiến trúc Art Deco & Biệt thự Cao nguyên">Art Deco Cao nguyên</option>
                </select>
              </div>

              <div>
                <label className="block text-[#786F66] font-medium mb-1">Thời kỳ niên đại</label>
                <div className="grid grid-cols-2 gap-1.5">
                  {['Tất cả', 'Trước 1880', '1880 – 1945', '1945 – 1975'].map((era) => (
                    <button
                      key={era}
                      onClick={() => setSelectedEraFilter(era)}
                      className={`py-1 px-2 rounded text-left border transition-colors ${
                        selectedEraFilter === era
                          ? 'bg-[#2A2421] text-white border-[#2A2421]'
                          : 'bg-[#FBF9F5] text-[#57534E] border-[#E7DFD3] hover:bg-[#EFE9DF]'
                      }`}
                    >
                      {era}
                    </button>
                  ))}
                </div>
              </div>

              {(selectedStyleFilter !== 'Tất cả' || selectedEraFilter !== 'Tất cả') && (
                <button
                  onClick={() => {
                    setSelectedStyleFilter('Tất cả');
                    setSelectedEraFilter('Tất cả');
                  }}
                  className="text-[11px] text-[#8C3A27] hover:underline"
                >
                  Đặt lại bộ lọc
                </button>
              )}
            </div>
          )}
        </div>

        {/* Heritage Sites Scrollable List */}
        <div className="flex-1 overflow-y-auto divide-y divide-[#E7DFD3]/70">
          {filteredSites.length === 0 ? (
            <div className="p-8 text-center text-xs text-[#786F66]">
              <p>Không tìm thấy công trình phù hợp với bộ lọc.</p>
              <button
                onClick={() => {
                  setSearchKeyword('');
                  setSelectedStyleFilter('Tất cả');
                  setSelectedEraFilter('Tất cả');
                  onSelectCity('Tất cả');
                }}
                className="mt-2 text-[#8C3A27] font-medium hover:underline"
              >
                Xóa tất cả bộ lọc
              </button>
            </div>
          ) : (
            filteredSites.map((site) => {
              const isSelected = selectedSite?.id === site.id;
              const styleColor = getStyleColor(site.architecturalStyle);

              return (
                <div
                  key={site.id}
                  onClick={() => onSelectSite(site)}
                  className={`p-3.5 transition-all cursor-pointer hover:bg-[#F3EDE2] ${
                    isSelected ? 'bg-[#EFE7D8] border-l-4 border-l-[#8C3A27]' : ''
                  }`}
                >
                  <div className="flex items-start justify-between gap-2">
                    <h3 className="font-serif text-base font-bold text-[#1C1917] leading-tight">
                      {site.name}
                    </h3>
                    <span className="font-mono text-[11px] text-[#786F66] shrink-0 font-medium">
                      {site.inaugurationYear}
                    </span>
                  </div>

                  {site.frenchHistoricalName && (
                    <div className="text-[11px] font-serif italic text-[#786F66] mt-0.5">
                      {site.frenchHistoricalName}
                    </div>
                  )}

                  {/* Clean unboxed metadata with separators (Anti-Pill Rule) */}
                  <div className="flex items-center gap-1.5 text-[11px] text-[#6B635B] mt-1.5">
                    <span className="font-medium text-[#8C3A27]">{site.city}</span>
                    <span aria-hidden="true">·</span>
                    <span className="truncate">{site.architecturalStyle}</span>
                  </div>

                  <p className="text-xs text-[#57534E] line-clamp-2 mt-2 leading-relaxed">
                    {site.shortSummary}
                  </p>

                  {/* Curatorial actions row */}
                  <div className="flex items-center justify-between mt-3 pt-2 border-t border-[#E7DFD3]/50">
                    <div className="flex items-center gap-2 text-[11px] text-[#786F66]">
                      <span className="flex items-center gap-1">
                        <FileText className="w-3 h-3 text-[#8C3A27]" />
                        {site.archives.length} tư liệu
                      </span>
                      {site.blueprintImage && (
                        <>
                          <span aria-hidden="true">·</span>
                          <span className="text-[#2D5A43] font-medium">Bản vẽ gốc</span>
                        </>
                      )}
                    </div>

                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        onOpenSiteDetails(site);
                      }}
                      className="text-xs font-semibold text-[#8C3A27] hover:text-[#6A2B1D] flex items-center gap-1 transition-colors"
                    >
                      <span>Xem hồ sơ</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              );
            })
          )}
        </div>
      </div>

      {/* Center/Right: Leaflet Map Container */}
      <div className="flex-1 relative h-full">
        <div ref={mapContainerRef} className="w-full h-full" />

        {/* Floating Map Tile Layer Switcher */}
        <div className="absolute top-4 left-4 z-10 bg-[#FBF9F5]/90 backdrop-blur-md border border-[#E7DFD3] rounded-lg p-1 shadow-md flex items-center gap-1">
          {(Object.keys(TILE_LAYERS) as Array<keyof typeof TILE_LAYERS>).map((type) => (
            <button
              key={type}
              onClick={() => setActiveTileType(type)}
              className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors whitespace-nowrap ${
                activeTileType === type
                  ? 'bg-[#2A2421] text-white shadow-xs'
                  : 'text-[#57534E] hover:text-[#1C1917] hover:bg-[#EFE9DF]'
              }`}
            >
              {TILE_LAYERS[type].name}
            </button>
          ))}
        </div>

        {/* Map Legend (Bottom Left) */}
        <div className="hidden lg:block absolute bottom-6 left-6 z-10 bg-[#FBF9F5]/95 backdrop-blur-md border border-[#E7DFD3] rounded-lg p-3 text-xs shadow-md max-w-xs">
          <div className="font-serif font-bold text-sm text-[#1C1917] mb-2 flex items-center gap-1.5">
            <Layers className="w-3.5 h-3.5 text-[#8C3A27]" />
            <span>Chú giải Phong cách</span>
          </div>
          <div className="space-y-1.5 text-[11px] text-[#57534E]">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-[#9A3412] shrink-0" />
              <span>Kiến trúc Tân Cổ Điển Pháp</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-[#166534] shrink-0" />
              <span>Kiến trúc Đông Dương (Indochine)</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-[#B45309] shrink-0" />
              <span>Cổ truyền & Cung đình Triều Nguyễn</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-[#1E40AF] shrink-0" />
              <span>Hiện đại Nhiệt đới Việt Nam</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-[#701A75] shrink-0" />
              <span>Gothic & Romanesque Phương Tây</span>
            </div>
          </div>
        </div>

        {/* Selected Site Preview Card Overlay (Floating Bottom Right) */}
        {selectedSite && (
          <div className="absolute bottom-6 right-6 z-10 w-80 sm:w-96 bg-[#FBF9F5] border border-[#E7DFD3] rounded-lg shadow-xl overflow-hidden animate-fade-in">
            <div className="relative h-36 bg-[#EBE4D5] overflow-hidden">
              <img
                src={selectedSite.mainImage}
                alt={selectedSite.name}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
              <button
                onClick={() => onSelectSite(null as unknown as HeritageSite)}
                className="absolute top-2 right-2 w-6 h-6 rounded-full bg-black/50 text-white flex items-center justify-center text-xs hover:bg-black"
                title="Đóng xem trước"
              >
                ✕
              </button>
              <div className="absolute bottom-2 left-3 right-3 text-white">
                <span className="text-[10px] font-mono uppercase tracking-wider text-[#E7C794]">
                  {selectedSite.city} · {selectedSite.inaugurationYear}
                </span>
                <h3 className="font-serif text-base font-bold leading-tight truncate">
                  {selectedSite.name}
                </h3>
              </div>
            </div>

            <div className="p-3.5 space-y-2.5">
              <div className="text-xs text-[#57534E] line-clamp-2 leading-relaxed">
                {selectedSite.shortSummary}
              </div>

              <div className="text-[11px] text-[#786F66] border-t border-[#E7DFD3] pt-2 space-y-1">
                <div>KTS: <span className="font-medium text-[#1C1917]">{selectedSite.architect}</span></div>
                <div>Lưu trữ: <span className="font-mono text-[#8C3A27]">{selectedSite.citation.archiveCode}</span></div>
              </div>

              <div className="flex items-center gap-2 pt-1">
                <button
                  onClick={() => onOpenSiteDetails(selectedSite)}
                  className="flex-1 py-1.5 px-3 bg-[#8C3A27] hover:bg-[#722F20] text-white text-xs font-medium rounded-md transition-colors flex items-center justify-center gap-1.5"
                >
                  <BookOpen className="w-3.5 h-3.5" />
                  <span>Mở Hồ sơ & Bản vẽ</span>
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
