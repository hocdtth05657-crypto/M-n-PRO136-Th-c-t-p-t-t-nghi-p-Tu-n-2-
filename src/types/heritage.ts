export type City = 'Hà Nội' | 'TP. Hồ Chí Minh' | 'Huế' | 'Hội An' | 'Đà Lạt';

export type ArchitecturalStyle =
  | 'Kiến trúc Tân Cổ Điển Pháp'
  | 'Kiến trúc Đông Dương (Indochine)'
  | 'Kiến trúc Cổ truyền / Cung đình'
  | 'Kiến trúc Hiện đại Nhiệt đới'
  | 'Kiến trúc Romanesque & Tân Gothic'
  | 'Kiến trúc Thương cảng Cổ'
  | 'Kiến trúc Art Deco & Biệt thự Cao nguyên';

export type HeritageRank =
  | 'Di sản Văn hóa Thế giới UNESCO'
  | 'Di tích Quốc gia Đặc biệt'
  | 'Di tích Kiến trúc Nghệ thuật Cấp Quốc gia'
  | 'Di tích Lịch sử - Kiến trúc Đô thị'
  | 'Công trình Thuộc diện Bảo tồn Cấp I';

export type ConservationStatus =
  | 'Được bảo tồn tốt'
  | 'Đang trùng tu'
  | 'Có nguy cơ biến dạng'
  | 'Đã phục dựng hoàn chỉnh';

export type DocumentType =
  | 'Bản vẽ kỹ thuật (Plan/Elevation)'
  | 'Ảnh tư liệu lịch sử (Historical Photo)'
  | 'Bản đồ địa chính cổ (Cadastral Map)'
  | 'Nghị định & Công văn lưu trữ (Official Decree)'
  | 'Thư tịch & Sách chuyên khảo (Monograph)';

export type ArchiveInstitution =
  | 'Trung tâm Lưu trữ Quốc gia I (Hà Nội)'
  | 'Trung tâm Lưu trữ Quốc gia II (TP.HCM)'
  | 'Trung tâm Lưu trữ Hải ngoại Quốc gia Pháp (ANOM)'
  | 'Trường Viễn Đông Bác Cổ (EFEO Paris & Hà Nội)'
  | 'Thư viện Quốc gia Pháp (BnF Gallica)'
  | 'Viện Bảo tồn Di tích - Bộ VHTTDL'
  | 'Trung tâm Bảo tồn Di tích Cố đô Huế'
  | 'Trung tâm Quản lý Bảo tồn Di sản Văn hóa Hội An'
  | 'Bộ sưu tập Nhiếp ảnh Albert Kahn (Archives de la Planète)'
  | 'Thư viện Quốc gia Việt Nam (NLV)';

export interface ArchivalSource {
  id: string;
  title: string;
  documentType: DocumentType;
  archiveInstitution: ArchiveInstitution;
  archiveRefCode: string;
  year: number | string;
  description: string;
  imageUrl: string;
  highResUrl?: string;
  dimensionsOrPages?: string;
  historicalSignificance: string;
  heritageSiteId?: string;
  authorOrPhotographer?: string;
}

export interface TimelineEvent {
  year: string;
  title: string;
  description: string;
  milestoneType: 'Khởi công/Thiết kế' | 'Khánh thành' | 'Trùng tu' | 'Sự kiện lịch sử' | 'Xếp hạng di sản';
}

export interface HeritageSite {
  id: string;
  name: string;
  frenchHistoricalName?: string;
  city: City;
  coordinates: [number, number]; // [lat, lng]
  address: string;
  constructionPeriod: string;
  inaugurationYear: number;
  architect: string;
  architecturalStyle: ArchitecturalStyle;
  heritageRank: HeritageRank;
  conditionStatus: ConservationStatus;
  shortSummary: string;
  architecturalDescription: string;
  mainImage: string;
  vintageImage?: string;
  blueprintImage?: string;
  spatialFeatures: string[];
  archives: ArchivalSource[];
  historicalTimeline: TimelineEvent[];
  citation: {
    archiveCode: string;
    decreeNumber?: string;
    bibliography: string;
    curatorNotes?: string;
  };
  has3DModel?: boolean;
}

export interface HeritageTrail {
  id: string;
  title: string;
  subtitle: string;
  city: City;
  duration: string;
  distance: string;
  description: string;
  highlights: string[];
  siteIds: string[];
  bannerImage: string;
}
