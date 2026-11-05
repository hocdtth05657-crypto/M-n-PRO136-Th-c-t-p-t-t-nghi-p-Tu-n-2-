import { HeritageSite } from '../types/heritage';
import { ARCHIVAL_DOCUMENTS } from './archivalDocuments';

export const HERITAGE_SITES: HeritageSite[] = [
  // ==========================================
  // HÀ NỘI
  // ==========================================
  {
    id: 'hn-opera-house',
    name: 'Nhà hát Lớn Hà Nội',
    frenchHistoricalName: "Grand Palais de l'Opéra de Hanoï",
    city: 'Hà Nội',
    coordinates: [21.0243, 105.8576],
    address: 'Số 1 Tràng Tiền, Quận Hoàn Kiếm, Hà Nội',
    constructionPeriod: '1901 – 1911',
    inaugurationYear: 1911,
    architect: 'François Lagisquet, Broger & Harloy',
    architecturalStyle: 'Kiến trúc Tân Cổ Điển Pháp',
    heritageRank: 'Di tích Kiến trúc Nghệ thuật Cấp Quốc gia',
    conditionStatus: 'Được bảo tồn tốt',
    shortSummary: 'Công trình kiến trúc sân khấu biểu diễn tiêu biểu phong cách Tân Cổ điển Pháp, phỏng theo nguyên mẫu Nhà hát Opéra Garnier Paris.',
    architecturalDescription: 'Nhà hát Lớn Hà Nội được xây dựng trên một vùng đầm lầy cũ của làng Tràng Tiền, phải đóng tới 35.000 cọc tre cùng lớp bê tông dày 90cm để gia cố nền móng. Công trình mang đậm phong cách Tân Cổ điển Pháp với các thức cột Ionic và Corinthian thanh nhã, mái vòm Mansard bọc đá phiến xám đen, cùng hệ thống ban công nhô ra trang trí phù điêu chạm nổi tinh xảo. Bên trong là thính phòng 870 chỗ ngồi với ba tầng ghế bọc nhung đỏ sang trọng và trần vòm vẽ bích họa nghệ thuật theo phong cách cổ điển châu Âu thế kỷ 19.',
    mainImage: '/src/assets/images/urban_heritage_hero_1793202394652.jpg',
    vintageImage: '/src/assets/images/vintage_archive_hanoi_1793202394745.jpg',
    blueprintImage: '/src/assets/images/heritage_blueprint_elevation_1793202395958.jpg',
    spatialFeatures: [
      'Mặt bằng đối xứng chữ nhật với sảnh đón vestibule rộng lớn',
      'Hệ thức cột Corinthian kép và phù điêu đắp nổi thần Apollo & thi ca Hy Lạp',
      'Mái vòm Mansard lợp ngói đá đen phiến Ardoise nhập khẩu từ Pháp',
      'Thính phòng hình móng ngựa theo phong cách âm học nhà hát Ý'
    ],
    archives: [
      ARCHIVAL_DOCUMENTS[0],
      ARCHIVAL_DOCUMENTS[1]
    ],
    historicalTimeline: [
      {
        year: '07/06/1899',
        title: 'Phê duyệt chủ trương xây dựng',
        description: 'Hội đồng Thành phố Hà Nội thông qua đề án xây dựng nhà hát lớn phục vụ cộng đồng kiều dân Pháp dưới thời Toàn quyền Paul Doumer.',
        milestoneType: 'Khởi công/Thiết kế'
      },
      {
        year: '1901',
        title: 'Khởi công đóng móng cọc tre',
        description: 'Bắt đầu quá trình san lấp đầm lầy và gia cố nền móng phức tạp kéo dài hơn 2 năm.',
        milestoneType: 'Khởi công/Thiết kế'
      },
      {
        year: '09/12/1911',
        title: 'Khánh thành chính thức',
        description: 'Công diễn vở kịch đầu tiên "Le Chiffonnier de Paris" trước sự tham dự của giới quý tộc Đông Dương.',
        milestoneType: 'Khánh thành'
      },
      {
        year: '19/08/1945',
        title: 'Cuộc mít tinh Cách mạng Tháng Tám',
        description: 'Quảng trường Cách mạng Tháng Tám trước Nhà hát Lớn trở thành địa điểm lịch sử khởi đầu cuộc Tổng khởi nghĩa giải phóng Thủ đô.',
        milestoneType: 'Sự kiện lịch sử'
      },
      {
        year: '1995 – 1997',
        title: 'Đại trùng tu phục hồi diện mạo nguyên bản',
        description: 'Dự án trùng tu toàn diện với sự tài trợ kỹ thuật của Cộng hòa Pháp, phục chế màu sơn vàng vôi ochre và nội thất thính phòng.',
        milestoneType: 'Trùng tu'
      }
    ],
    citation: {
      archiveCode: 'TTLTQG I, Phông Tòa Đốc lý Hà Nội, Hồ sơ số 3412',
      decreeNumber: 'Nghị định Đốc lý Hà Nội ngày 07/06/1899',
      bibliography: 'Trần Hùng, Nguyễn Quốc Thông (2004), Thăng Long - Hà Nội mười thế kỷ đô thị hoá, NXB Xây dựng.',
      curatorNotes: 'Hồ sơ lưu trữ bảo tồn số liệu mộc bản và 42 bản vẽ can chì gốc lưu tại Trung tâm Lưu trữ Quốc gia I.'
    },
    has3DModel: true
  },
  {
    id: 'hn-long-bien-bridge',
    name: 'Cầu Long Biên',
    frenchHistoricalName: 'Pont Paul Doumer',
    city: 'Hà Nội',
    coordinates: [21.0428, 105.8569],
    address: 'Bắc qua sông Hồng, nối quận Hoàn Kiếm, Ba Đình với Long Biên, Hà Nội',
    constructionPeriod: '1898 – 1902',
    inaugurationYear: 1902,
    architect: 'Hãng công xưởng Daydé & Pillé (Paris)',
    architecturalStyle: 'Kiến trúc Tân Cổ Điển Pháp',
    heritageRank: 'Di tích Lịch sử - Kiến trúc Đô thị',
    conditionStatus: 'Có nguy cơ biến dạng',
    shortSummary: 'Cây cầu dầm thép dài 2.290m bắc qua sông Hồng – kiệt tác kỹ thuật cơ khí đầu thế kỷ 20 được ví như "tháp Eiffel nằm ngang".',
    architecturalDescription: 'Cầu Long Biên gồm 19 nhịp dầm thép đặt trên 20 trụ xây bằng đá vôi chịu lực cao hơn 40 mét so với lòng sông. Cấu trúc giàn thép kiểu dầm consol dạng võng tựa như dải lụa nhấp nhô uốn lượn qua làn nước sông Hồng. Cầu thiết kế nguyên bản cho tuyến đường sắt đơn ở giữa và hai bên là làn đường dành cho xe thô sơ và người đi bộ.',
    mainImage: '/src/assets/images/vintage_archive_hanoi_1793202394745.jpg',
    vintageImage: '/src/assets/images/vintage_archive_hanoi_1793202394745.jpg',
    blueprintImage: '/src/assets/images/heritage_blueprint_elevation_1793202395958.jpg',
    spatialFeatures: [
      'Chiều dài 2.290m gồm 19 nhịp dầm thép dập tán đinh rivê tinh xảo',
      'Kết cấu giàn thép Cantilever (dầm hẫng vượt nhịp lớn)',
      '20 trụ cầu xây bằng đá nguyên khối khai thác từ mỏ đá Thanh Hóa',
      'Tuyến huyết mạch đường sắt nối cảng Hải Phòng - Hà Nội - Vân Nam'
    ],
    archives: [
      ARCHIVAL_DOCUMENTS[4]
    ],
    historicalTimeline: [
      {
        year: '1898',
        title: 'Đặt viên đá đầu tiên',
        description: 'Khởi công xây dựng với sự tham gia của hơn 3.000 công nhân Việt Nam và các kỹ sư Pháp.',
        milestoneType: 'Khởi công/Thiết kế'
      },
      {
        year: '28/02/1902',
        title: 'Khánh thành cầu Pont Doumer',
        description: 'Vua Thành Thái và Toàn quyền Paul Doumer cắt băng khánh thành cây cầu thép dài nhất bán đảo Đông Dương thời bấy giờ.',
        milestoneType: 'Khánh thành'
      },
      {
        year: '1945',
        title: 'Đổi tên thành Cầu Long Biên',
        description: 'Thị trưởng Hà Nội Trần Văn Lai quyết định đổi tên thuộc địa Pont Doumer sang tên thuần Việt Long Biên.',
        milestoneType: 'Sự kiện lịch sử'
      },
      {
        year: '1972',
        title: 'Chứng tích chiến tranh kiên cường',
        description: 'Cầu bị đánh bom phá hoại nhiều nhịp dầm nhưng liên tục được quân dân Thủ đô ứng cứu và sửa chữa nối thông mạch máu giao thông.',
        milestoneType: 'Sự kiện lịch sử'
      }
    ],
    citation: {
      archiveCode: 'TTLTQG I, Phông Nha Công chính Đông Dương, Hồ sơ số 1104',
      decreeNumber: 'Sắc lệnh Toàn quyền số 44-D ban hành ngày 12/09/1897',
      bibliography: 'Đỗ Đức Tuệ (2001), Cầu cổ Việt Nam và những dấu ấn lịch sử, NXB Giao thông Vận tải.',
      curatorNotes: 'Hiện trạng nhiều nhịp thép bị hoen rỉ cần dự án bảo tồn di sản kỹ thuật quốc gia quy mô lớn.'
    }
  },
  {
    id: 'hn-national-museum',
    name: 'Bảo tàng Lịch sử Quốc gia (Viện Viễn Đông Bác Cổ)',
    frenchHistoricalName: 'Musée Louis Finot - EFEO',
    city: 'Hà Nội',
    coordinates: [21.0252, 105.8598],
    address: 'Số 1 Tràng Tiền, Quận Hoàn Kiếm, Hà Nội',
    constructionPeriod: '1926 – 1932',
    inaugurationYear: 1932,
    architect: 'Ernest Hébrard',
    architecturalStyle: 'Kiến trúc Đông Dương (Indochine)',
    heritageRank: 'Di tích Quốc gia Đặc biệt',
    conditionStatus: 'Được bảo tồn tốt',
    shortSummary: 'Đỉnh cao mẫu mực của phong cách Kiến trúc Đông Dương – sự phối hợp hài hòa giữa cấu trúc không gian châu Âu với mái ngói chồng diêm và thông gió nhiệt đới.',
    architecturalDescription: 'Được thiết kế bởi kiến trúc sư trưởng Ernest Hébrard – người sáng lập trường phái Phong cách Đông Dương (Style Indochinois). Tòa nhà sở hữu sảnh lớn hình bát giác uy nghi với mái ngói lưu ly nhiều lớp chồng diêm, hệ thống cửa thông gió hai lớp và ô văng che nắng sâu thích ứng triệt để với khí hậu nhiệt đới nóng ẩm mưa nhiều miền Bắc Việt Nam.',
    mainImage: '/src/assets/images/urban_heritage_hero_1793202394652.jpg',
    vintageImage: '/src/assets/images/vintage_archive_hanoi_1793202394745.jpg',
    blueprintImage: '/src/assets/images/heritage_blueprint_elevation_1793202395958.jpg',
    spatialFeatures: [
      'Đại sảnh bát giác cao vút với chóp mái tháp lấy sáng tự nhiên',
      'Mái ngói âm dương nhiều tầng với bờ đao cong cách điệu đầu rồng phương Đông',
      'Hệ thống lam gió và cửa sổ hai lớp tạo đối lưu không khí thụ động',
      'Tường đôi dày 40cm có đệm không khí cách nhiệt tuyệt hảo'
    ],
    archives: [
      ARCHIVAL_DOCUMENTS[1]
    ],
    historicalTimeline: [
      {
        year: '1926',
        title: 'Ernest Hébrard lập bản đồ đồ án',
        description: 'Đồ án thiết kế bảo tàng nghiên cứu khảo cổ học Đông Nam Á cho Trường Viễn Đông Bác Cổ được thông qua.',
        milestoneType: 'Khởi công/Thiết kế'
      },
      {
        year: '1932',
        title: 'Khánh thành Musée Louis Finot',
        description: 'Mở cửa trưng bày kho cổ vật văn hóa Champa, Đông Sơn, Khmer và Đại Việt quý hiếm bậc nhất Á Châu.',
        milestoneType: 'Khánh thành'
      },
      {
        year: '1958',
        title: 'Bàn giao và thành lập Bảo tàng Lịch sử Việt Nam',
        description: 'Chính phủ Việt Nam Dân chủ Cộng hòa tiếp quản và mở rộng không gian trưng bày quốc gia.',
        milestoneType: 'Xếp hạng di sản'
      }
    ],
    citation: {
      archiveCode: 'EFEO Paris Archives - Fonds Ernest Hébrard Box 12',
      bibliography: 'Hébrard, Ernest (1928), "L\'Urbanisme en Indochine", L\'Architecture, Vol. 41.',
      curatorNotes: 'Mô hình tiêu chuẩn được giảng dạy trong lịch sử kiến trúc nhiệt đới toàn cầu.'
    }
  },
  {
    id: 'hn-st-joseph-cathedral',
    name: 'Nhà thờ Lớn Hà Nội',
    frenchHistoricalName: 'Cathédrale Saint-Joseph de Hanoï',
    city: 'Hà Nội',
    coordinates: [21.0288, 105.8493],
    address: 'Số 40 phố Nhà Chung, Hàng Trống, Quận Hoàn Kiếm, Hà Nội',
    constructionPeriod: '1884 – 1886',
    inaugurationYear: 1886,
    architect: 'Giám mục Paul-François Puginier thiết kế & chỉ đạo',
    architecturalStyle: 'Kiến trúc Romanesque & Tân Gothic',
    heritageRank: 'Di tích Kiến trúc Nghệ thuật Cấp Quốc gia',
    conditionStatus: 'Đã phục dựng hoàn chỉnh',
    shortSummary: 'Công trình kiến trúc tôn giáo phong cách Tân Gothic trung cổ châu Âu mô phỏng Nhà thờ Đức Bà Paris (Notre-Dame de Paris).',
    architecturalDescription: 'Nhà thờ Lớn Hà Nội dài 64,5m, rộng 20,5m và có hai tháp chuông vuông vức cao 31,5m với những trụ đá nặng nề ở bốn góc. Mặt đứng công trình mang đặc trưng Gothic với cửa sổ cuốn nhọn vươn cao, ô hoa hồng kính màu trung tâm rực rỡ và các chi tiết chạm khắc gạch nung trát vữa tam hợp độc đáo.',
    mainImage: '/src/assets/images/urban_heritage_hero_1793202394652.jpg',
    vintageImage: '/src/assets/images/vintage_archive_hanoi_1793202394745.jpg',
    spatialFeatures: [
      'Mặt bằng chữ thập La-tinh (cruciform) ba gian rộng lớn',
      'Hai tháp chuông vuông cao 31.5m với 5 quả chuông đồng đúc tại Pháp',
      'Cửa sổ vòm nhọn Gothic và tranh kính màu ghép Saint Gobain',
      'Cung thánh sơn thếp vàng son truyền thống theo phong cách nghệ thuật bản địa'
    ],
    archives: [
      ARCHIVAL_DOCUMENTS[1]
    ],
    historicalTimeline: [
      {
        year: '1884',
        title: 'Khởi công xây cất',
        description: 'Được xây cất trên khu đất tháp Báo Thiên xưa bằng gạch đất nung bản địa kết hợp vữa giấy bồi.',
        milestoneType: 'Khởi công/Thiết kế'
      },
      {
        year: '25/12/1886',
        title: 'Lễ thánh hóa đêm Giáng sinh',
        description: 'Tổ chức thánh lễ khánh thành long trọng đầu tiên tại Hà Nội.',
        milestoneType: 'Khánh thành'
      },
      {
        year: '2021 – 2022',
        title: 'Tu bổ và phục hồi lớp trát tường ngoài',
        description: 'Phục hồi màu sơn và gia cố kết cấu vòm mái sau hơn một thế kỷ dầm mưa dãi nắng.',
        milestoneType: 'Trùng tu'
      }
    ],
    citation: {
      archiveCode: 'Lưu trữ Tòa Tổng Giám mục Hà Nội - Ký hiệu TG-1886-CATH',
      bibliography: 'Nguyễn Văn Uẩn (1995), Hà Nội nửa đầu thế kỷ XX, NXB Hà Nội.',
      curatorNotes: 'Vừa hoàn thành dự án sơn phục nguyên màu gốc năm 2022.'
    }
  },

  // ==========================================
  // TP. HỒ CHÍ MINH / SÀI GÒN
  // ==========================================
  {
    id: 'sg-city-hall',
    name: 'Trụ sở HĐND & UBND TP. Hồ Chí Minh',
    frenchHistoricalName: 'Hôtel de Ville de Saïgon (Dinh Xã Tây)',
    city: 'TP. Hồ Chí Minh',
    coordinates: [10.7766, 106.7008],
    address: 'Số 86 Lê Thánh Tôn, Bến Nghé, Quận 1, TP. Hồ Chí Minh',
    constructionPeriod: '1898 – 1909',
    inaugurationYear: 1909,
    architect: 'KTS F. Paul Gardès & Nhà điêu khắc Louis-Adolphe Ruffier',
    architecturalStyle: 'Kiến trúc Tân Cổ Điển Pháp',
    heritageRank: 'Di tích Kiến trúc Nghệ thuật Cấp Quốc gia',
    conditionStatus: 'Được bảo tồn tốt',
    shortSummary: 'Tòa nhà dinh thự phong cách Đệ Tam Cộng hòa Pháp nguy nga tráng lệ bậc nhất phương Nam với mặt đứng phù điêu tinh xảo.',
    architecturalDescription: 'Tọa lạc ở điểm kết thúc của đại lộ Nguyễn Huệ (trước là kinh Charner), tòa nhà được mô phỏng theo Tòa thị chính Paris với tháp chuông nhô cao ở giữa và hai mái hồi Mansard hai bên. Mặt tiền được trang hoàng bởi các bức phù điêu hình tượng phụ nữ Marianne kiêu hãnh của nước Pháp, các thiên thần nhỏ, vòng nguyệt quế và đầu sư tử đắp nổi vô cùng sống động.',
    mainImage: '/src/assets/images/saigon_notredame_heritage_1793202396257.jpg',
    vintageImage: '/src/assets/images/vintage_archive_hanoi_1793202394745.jpg',
    blueprintImage: '/src/assets/images/heritage_blueprint_elevation_1793202395958.jpg',
    spatialFeatures: [
      'Mặt đứng đối xứng dài hơn 100 mét với tỷ lệ hình học chuẩn mực',
      'Tháp đồng hồ trung tâm vươn cao mô phỏng tháp chuông châu Âu thế kỷ 16',
      'Trang trí điêu khắc nổi bật của nghệ sĩ Louis-Adolphe Ruffier',
      'Nội thất trần vẽ bích họa dát vàng Baroque lộng lẫy'
    ],
    archives: [
      ARCHIVAL_DOCUMENTS[2],
      ARCHIVAL_DOCUMENTS[3]
    ],
    historicalTimeline: [
      {
        year: '1898',
        title: 'Khởi công xây cất Dinh Xã Tây',
        description: 'KTS Gardès trúng tuyển đồ án thiết kế Tòa thị chính thành phố Sài Gòn.',
        milestoneType: 'Khởi công/Thiết kế'
      },
      {
        year: '1909',
        title: 'Khánh thành nhân kỷ niệm 50 năm Pháp chiếm Sài Gòn',
        description: 'Chính thức trở thành trung tâm đầu não hành chính của thành phố Sài Gòn - Chợ Lớn.',
        milestoneType: 'Khánh thành'
      },
      {
        year: '2020',
        title: 'Công nhận Di tích Kiến trúc Nghệ thuật Quốc gia',
        description: 'Bộ Văn hóa Thể thao và Du lịch chính thức xếp hạng di tích quốc gia.',
        milestoneType: 'Xếp hạng di sản'
      }
    ],
    citation: {
      archiveCode: 'TTLTQG II, Phông Tòa Thị chính Sài Gòn, Ký hiệu HS-1909-021',
      bibliography: 'Baudrit, André (1943), Guide historique des rues de Saïgon, Imprimerie SILI.',
      curatorNotes: 'Hiện mở cửa định kỳ cho người dân và du khách tham quan vào dịp lễ lớn.'
    }
  },
  {
    id: 'sg-notre-dame',
    name: 'Vương cung thánh đường Đức Bà Sài Gòn',
    frenchHistoricalName: 'Basilique Notre-Dame de Saïgon',
    city: 'TP. Hồ Chí Minh',
    coordinates: [10.7797, 106.6990],
    address: 'Số 1 Công xã Paris, Phường Bến Nghé, Quận 1, TP. Hồ Chí Minh',
    constructionPeriod: '1877 – 1880',
    inaugurationYear: 1880,
    architect: 'J. Bourard',
    architecturalStyle: 'Kiến trúc Romanesque & Tân Gothic',
    heritageRank: 'Di tích Kiến trúc Nghệ thuật Cấp Quốc gia',
    conditionStatus: 'Đang trùng tu',
    shortSummary: 'Biểu tượng kiến trúc kinh điển của Sài Gòn với toàn bộ gạch trần đỏ thắm Marseille nguyên vẹn không phai màu qua gần 150 năm.',
    architecturalDescription: 'Tất cả vật liệu từ gạch nung ép đỏ không tô trát, xi măng, đá granit đến kính màu ghép và chuông đồng đều được vận chuyển bằng đường biển từ Pháp sang. Công trình dài 93m, rộng 35m với vòm trần cao 21m. Năm 1895, hai đỉnh tháp chuông nhọn bọc kẽm cao 60,5m được lắp dựng thêm, biến nhà thờ trở thành tiêu điểm cảnh quan cao nhất đô thị Sài Gòn suốt nhiều thập kỷ.',
    mainImage: '/src/assets/images/saigon_notredame_heritage_1793202396257.jpg',
    vintageImage: '/src/assets/images/vintage_archive_hanoi_1793202394745.jpg',
    spatialFeatures: [
      'Toàn bộ tường gạch đỏ Marseille giữ nguyên màu đỏ tươi không bám rêu mốc',
      'Hai tháp chuông nhọn vươn cao 60.5m với 6 quả chuông đồng Sol-La-Si-Do-Re-Mi nặng gần 30 tấn',
      'Hệ khung sắt chịu lực thiết kế bởi hãng đúc thép Pháp thế kỷ 19',
      'Quảng trường thánh đường hình tròn mở rộng tầm nhìn về 4 phía đại lộ'
    ],
    archives: [
      ARCHIVAL_DOCUMENTS[3]
    ],
    historicalTimeline: [
      {
        year: '07/10/1877',
        title: 'Đặt viên đá đầu tiên',
        description: 'Giám mục Isidore Colombert chủ trì nghi thức đặt đá góc tường.',
        milestoneType: 'Khởi công/Thiết kế'
      },
      {
        year: '11/04/1880',
        title: 'Khánh thành vào dịp lễ Phục sinh',
        description: 'Toàn quyền Đông Dương Le Myre de Vilers cùng cộng đồng thị dân dự lễ khánh thành.',
        milestoneType: 'Khánh thành'
      },
      {
        year: '1895',
        title: 'Lắp thêm hai tháp nhọn bọc kẽm',
        description: 'KTS Fernand Gardès lắp ráp thêm hai chóp nhọn cao 21m lên đỉnh hai tháp chuông.',
        milestoneType: 'Trùng tu'
      },
      {
        year: '2017 – 2027',
        title: 'Đại trùng tu thế kỷ với chuyên gia Bỉ & Đức',
        description: 'Dự án tu bổ mái ngói ngói vảy Marseille, ngói âm dương Monier và gia cố hai tháp chuông.',
        milestoneType: 'Trùng tu'
      }
    ],
    citation: {
      archiveCode: 'TTLTQG II, Phông Tòa Thống đốc Nam Kỳ, Ký hiệu TTD-1880-104',
      decreeNumber: 'Quyết định xây dựng nhà thờ chính tòa ký ngày 25/08/1876',
      bibliography: 'Vương Hồng Sển (1960), Sài Gòn năm xưa, Khai Trí xuất bản.',
      curatorNotes: 'Dự án trùng tu hiện đang bước vào giai đoạn lợp ngói chính và phục chế kính màu.'
    }
  },
  {
    id: 'sg-post-office',
    name: 'Bưu điện Trung tâm Sài Gòn',
    frenchHistoricalName: 'Hôtel des Postes de Saïgon',
    city: 'TP. Hồ Chí Minh',
    coordinates: [10.7799, 106.6999],
    address: 'Số 2 Công xã Paris, Phường Bến Nghé, Quận 1, TP. Hồ Chí Minh',
    constructionPeriod: '1886 – 1891',
    inaugurationYear: 1891,
    architect: 'Marie-Alfred Foulhoux & Gustave Eiffel',
    architecturalStyle: 'Kiến trúc Tân Cổ Điển Pháp',
    heritageRank: 'Di tích Kiến trúc Nghệ thuật Cấp Quốc gia',
    conditionStatus: 'Được bảo tồn tốt',
    shortSummary: 'Công trình giao thoa tuyệt mỹ giữa phong cách Phục Hưng châu Âu với vòm sắt uốn lượn phong cách Cách mạng Công nghiệp của Gustave Eiffel.',
    architecturalDescription: 'Nằm đối diện Nhà thờ Đức Bà, Bưu điện Sài Gòn gây ấn tượng bởi mặt tiền sơn màu vàng hoàng yến với các ô cửa cuốn vòm đắp nổi tên các nhà bác học, triết gia danh tiếng thế giới như Ampère, Faraday, Galvani, Franklin,... Bước qua sảnh chính là không gian nội thất bát ngát với vòm trần sắt uốn cong thanh thoát, hai bản đồ lịch sử vẽ tay trên tường thể hiện mạng lưới viễn thông Nam Kỳ và Campuchia năm 1892.',
    mainImage: '/src/assets/images/saigon_notredame_heritage_1793202396257.jpg',
    vintageImage: '/src/assets/images/vintage_archive_hanoi_1793202394745.jpg',
    blueprintImage: '/src/assets/images/heritage_blueprint_elevation_1793202395958.jpg',
    spatialFeatures: [
      'Vòm trần thép vượt nhịp lớn chịu tải bằng 4 cột sắt thanh mảnh',
      'Đồng hồ mặt ngọc lớn ở vị trí trung tâm mặt đứng chính',
      'Hệ thống quầy giao dịch bằng gỗ gõ mật chạm trổ truyền thống',
      'Hai bức bích họa bản đồ cổ Nam Kỳ "Lignes télégraphiques du Sud Viêt-nam et Cambodge 1892"'
    ],
    archives: [
      ARCHIVAL_DOCUMENTS[2]
    ],
    historicalTimeline: [
      {
        year: '1886',
        title: 'Khởi công đồ án của KTS Foulhoux',
        description: 'Thay thế cho trạm bưu chính dây thép lợp lá tạm bợ xây dựng từ năm 1863.',
        milestoneType: 'Khởi công/Thiết kế'
      },
      {
        year: '1891',
        title: 'Khánh thành Bưu điện Sài Gòn',
        description: 'Đưa vào vận hành hệ thống bưu chính điện tín hiện đại nhất vùng Viễn Đông.',
        milestoneType: 'Khánh thành'
      }
    ],
    citation: {
      archiveCode: 'TTLTQG II, Phông Bưu điện Nam Kỳ, Ký hiệu PTT-1891-B09',
      bibliography: 'Nguyễn Đình Đầu (2000), Địa chí văn hóa TP. Hồ Chí Minh, NXB TP.HCM.',
      curatorNotes: 'Một trong những bưu điện thời thuộc địa còn giữ nguyên vẹn công năng phục vụ bưu chính ban đầu.'
    }
  },
  {
    id: 'sg-reunification-palace',
    name: 'Dinh Độc Lập (Hội trường Thống Nhất)',
    frenchHistoricalName: 'Palais de la Réunification (Dinh Norodom cũ)',
    city: 'TP. Hồ Chí Minh',
    coordinates: [10.7770, 106.6953],
    address: 'Số 135 Nam Kỳ Khởi Nghĩa, Phường Bến Thành, Quận 1, TP. Hồ Chí Minh',
    constructionPeriod: '1962 – 1966',
    inaugurationYear: 1966,
    architect: 'KTS Ngô Viết Thụ (Khôi nguyên La Mã 1955)',
    architecturalStyle: 'Kiến trúc Hiện đại Nhiệt đới',
    heritageRank: 'Di tích Quốc gia Đặc biệt',
    conditionStatus: 'Được bảo tồn tốt',
    shortSummary: 'Tuyệt tác của Kiến trúc Hiện đại Nhiệt đới Việt Nam – kết hợp triết lý phong thủy phương Đông (chữ Cát, Khẩu, Trung, Tam) với bê tông hiện đại.',
    architecturalDescription: 'Được xây dựng trên nền Dinh Norodom đổ nát sau biến cố ném bom năm 1962, KTS Ngô Viết Thụ đã kiến tạo nên một biểu tượng kiến trúc đỉnh cao thế giới. Toàn thể mặt bằng Dinh tạo thành chữ CÁT (吉 - may mắn tốt lành), mặt tiền trang trí bức rèm hoa đá hình đốt trúc thanh tao vừa cản nắng gắt hướng Tây vừa lấy ánh sáng tán xạ dịu mát cho nội thất.',
    mainImage: '/src/assets/images/saigon_notredame_heritage_1793202396257.jpg',
    vintageImage: '/src/assets/images/vintage_archive_hanoi_1793202394745.jpg',
    spatialFeatures: [
      'Mặt tiền rèm hoa đá hình đốt trúc thanh thoát che nắng nhiệt đới',
      'Mặt bằng kết tinh triết học Đông phương ứng với chữ CÁT, KHẨU, TRUNG, TAM, CHỦ',
      'Hệ thống tầng hầm kiên cố chịu được bom đạn với trung tâm tác chiến điện tử',
      'Khu vườn nhiệt đới cổ thụ rộng hơn 12 héc-ta bao bọc không gian kiến trúc'
    ],
    archives: [
      ARCHIVAL_DOCUMENTS[3]
    ],
    historicalTimeline: [
      {
        year: '01/07/1962',
        title: 'Khởi công xây dựng Dinh Độc Lập mới',
        description: 'Đồ án của KTS Ngô Viết Thụ đoạt giải nhất trong cuộc thi tuyển kiến trúc quốc gia.',
        milestoneType: 'Khởi công/Thiết kế'
      },
      {
        year: '31/10/1966',
        title: 'Khánh thành Dinh Độc Lập',
        description: 'Khánh thành công trình kiến trúc hiện đại lớn nhất Đông Nam Á thời điểm đó.',
        milestoneType: 'Khánh thành'
      },
      {
        year: '30/04/1975',
        title: 'Thời khắc lịch sử Thống Nhất Đất Nước',
        description: 'Xe tăng 390 và 843 húc đổ cổng Dinh Độc Lập, cờ giải phóng tung bay trên nóc dinh chấm dứt chiến tranh.',
        milestoneType: 'Sự kiện lịch sử'
      },
      {
        year: '2009',
        title: 'Xếp hạng Di tích Quốc gia Đặc biệt',
        description: 'Thủ tướng Chính phủ ký quyết định xếp hạng đợt 1 các di tích đặc biệt quan trọng của Việt Nam.',
        milestoneType: 'Xếp hạng di sản'
      }
    ],
    citation: {
      archiveCode: 'TTLTQG II, Phông Phủ Tổng thống VNCH, Ký hiệu PTT-1966-D01',
      bibliography: 'Ngô Viết Thụ (1966), Thuyết minh kiến trúc Dinh Độc Lập, Ấn phẩm Đô thành Sài Gòn.',
      curatorNotes: 'Đồ án mẫu mực minh chứng cho tài năng hội tụ của kiến trúc sư người Việt Nam trên trường quốc tế.'
    }
  },

  // ==========================================
  // THỪA THIÊN HUẾ
  // ==========================================
  {
    id: 'hue-an-dinh',
    name: 'Cung An Định',
    frenchHistoricalName: "Palais d'An Dinh",
    city: 'Huế',
    coordinates: [16.4552, 107.5956],
    address: 'Số 179 Phan Đình Phùng, Phường Đệ Bát, TP. Huế',
    constructionPeriod: '1917 – 1919',
    inaugurationYear: 1919,
    architect: 'Bộ Công Triều Nguyễn dưới chỉ đạo của Vua Khải Định',
    architecturalStyle: 'Kiến trúc Cổ truyền / Cung đình',
    heritageRank: 'Di sản Văn hóa Thế giới UNESCO',
    conditionStatus: 'Đã phục dựng hoàn chỉnh',
    shortSummary: 'Biệt cung mùa hè độc đáo kết hợp nghệ thuật kiến trúc La Mã cổ điển với hoa văn chạm khắc rồng phượng cung đình Huế.',
    architecturalDescription: 'Cung An Định tọa lạc bên bờ sông An Cựu thơ mộng, là nơi gắn liền với cuộc đời của Hoàng đế Bảo Đại và Hoàng hậu Nam Phương cùng Đức Từ Cung. Công trình chính là Khải Tường Lâu gồm 3 tầng với mặt ngoài trang trí gốm sứ đắp nổi cầu kỳ. Sáu bức tranh bích họa khổ lớn vẽ cảnh các lăng tẩm hoàng gia triều Nguyễn vẽ bằng sơn dầu trực tiếp lên tường đại sảnh tầng một là bảo vật mỹ thuật vô giá.',
    mainImage: '/src/assets/images/heritage_blueprint_elevation_1793202395958.jpg',
    vintageImage: '/src/assets/images/vintage_archive_hanoi_1793202394745.jpg',
    blueprintImage: '/src/assets/images/heritage_blueprint_elevation_1793202395958.jpg',
    spatialFeatures: [
      'Khải Tường Lâu ba tầng kết hợp thức cột Corinthian La Mã và rồng cuốn đao đình',
      'Đình Trung Lập mái ngói bát giác cổ truyền che chở bia đá khắc công đức',
      'Sáu bức bích họa danh thắng lăng tẩm vua Nguyễn do họa sĩ cung đình Nguyễn Văn Nhân thực hiện',
      'Nghệ thuật khảm sành sứ sặc sỡ trên nền vữa vôi truyền thống Huế'
    ],
    archives: [
      ARCHIVAL_DOCUMENTS[5]
    ],
    historicalTimeline: [
      {
        year: '1917',
        title: 'Khởi công xây dựng cung điện',
        description: 'Vua Khải Định cho xây cất cung điện bằng tiền riêng từ khi còn là Hoàng tử Phụng Hóa Công.',
        milestoneType: 'Khởi công/Thiết kế'
      },
      {
        year: '1919',
        title: 'Hoàn thành Khải Tường Lâu',
        description: 'Lễ lạc thành Khải Tường Lâu và đình Trung Lập bên bờ sông An Cựu.',
        milestoneType: 'Khánh thành'
      },
      {
        year: '1945 – 1955',
        title: 'Nơi cư ngụ của Đức Từ Cung và các con của cựu hoàng Bảo Đại',
        description: 'Hoàng hậu Nam Phương cùng các con đã sống tại đây trong giai đoạn biến động lịch sử.',
        milestoneType: 'Sự kiện lịch sử'
      },
      {
        year: '2003 – 2008',
        title: 'Trùng tu phục chế bích họa với CHLB Đức',
        description: 'Tổ chức phục hồi bích họa CHLB Đức (GEKE) tài trợ trùng tu 6 bức bích họa tuyệt mỹ.',
        milestoneType: 'Trùng tu'
      }
    ],
    citation: {
      archiveCode: 'Châu bản Triều Nguyễn - Tập Khải Định thứ 4, Tờ 82',
      bibliography: 'Phan Thuận An (1999), Quần thể di tích Huế, NXB Trẻ.',
      curatorNotes: 'Nằm trong quần thể Di sản Văn hóa Thế giới Cố đô Huế được UNESCO vinh danh năm 1993.'
    }
  },
  {
    id: 'hue-kien-trung',
    name: 'Điện Kiến Trung (Hoàng thành Huế)',
    frenchHistoricalName: 'Pavillon Kien Trung',
    city: 'Huế',
    coordinates: [16.4716, 107.5794],
    address: 'Khu vực Tử Cấm Thành, Đại Nội Huế, TP. Huế',
    constructionPeriod: '1921 – 1923 (Phục dựng 2019 – 2024)',
    inaugurationYear: 2024,
    architect: 'KTS Khải Định & Trung tâm Bảo tồn Di tích Cố đô Huế',
    architecturalStyle: 'Kiến trúc Cổ truyền / Cung đình',
    heritageRank: 'Di sản Văn hóa Thế giới UNESCO',
    conditionStatus: 'Đã phục dựng hoàn chỉnh',
    shortSummary: 'Công trình hoàng cung tráng lệ bậc nhất Tử Cấm Thành vừa được hồi sinh sau 77 năm hoang tàn vì chiến tranh.',
    architecturalDescription: 'Điện Kiến Trung được xây cất dưới thời vua Khải Định và là nơi làm việc, sinh hoạt của vua Bảo Đại - hoàng hậu Nam Phương. Công trình kết hợp tinh hoa kiến trúc Pháp, phục hưng Ý với nghệ thuật chạm khảm sành sứ rực rỡ của cố đô Huế. Sau khi bị phá hủy hoàn toàn trong chiến tranh năm 1947 chỉ còn lại nền móng, năm 2019 dự án phục dựng kỳ công với kinh phí hơn 123 tỷ đồng đã tái sinh kỳ quan cung điện này vào đầu năm 2024.',
    mainImage: '/src/assets/images/heritage_blueprint_elevation_1793202395958.jpg',
    vintageImage: '/src/assets/images/vintage_archive_hanoi_1793202394745.jpg',
    blueprintImage: '/src/assets/images/heritage_blueprint_elevation_1793202395958.jpg',
    spatialFeatures: [
      'Mặt đứng chính 7 gian với hàng hiên lầu vươn dài lợp ngói hoàng lưu ly',
      'Đắp khảm hàng triệu mảnh gốm sứ hoa văn mây rồng, ngũ phúc và chữ Thọ',
      'Ban công lan can phong cách Phục Hưng Ý nhìn thẳng ra Ngự Uyển',
      'Không gian nội thất tái hiện phòng ngủ và thư phòng Vua Khải Định & Bảo Đại'
    ],
    archives: [
      ARCHIVAL_DOCUMENTS[5]
    ],
    historicalTimeline: [
      {
        year: '1921',
        title: 'Khởi công xây điện Kiến Trung',
        description: 'Vua Khải Định ra chỉ dụ xây cất cung điện hiện đại thay thế cho lầu Du Cửu.',
        milestoneType: 'Khởi công/Thiết kế'
      },
      {
        year: '1923',
        title: 'Khánh thành điện Kiến Trung',
        description: 'Trở thành chốn ngự thiện và tiếp đón khách quốc tế của hoàng gia Nguyễn.',
        milestoneType: 'Khánh thành'
      },
      {
        year: '1947',
        title: 'Bị phá hủy bởi chiến sự',
        description: 'Cung điện bị tàn phá nặng nề chỉ còn lại bậc thềm đá Thanh và dấu tích móng gạch.',
        milestoneType: 'Sự kiện lịch sử'
      },
      {
        year: '16/02/2019 – 2024',
        title: 'Đại dự án phục dựng hoàn nguyên',
        description: 'Chính thức mở cửa phục vụ công chúng vào Tết Nguyên Đán 2024 sau 5 năm thi công tỉ mỉ.',
        milestoneType: 'Trùng tu'
      }
    ],
    citation: {
      archiveCode: 'Hồ sơ Khoa học Di tích số 28-VBTDT/2018',
      bibliography: 'Trung tâm Bảo tồn Di tích Cố đô Huế (2024), Kỷ yếu Phục dựng Điện Kiến Trung, NXB Thuận Hóa.',
      curatorNotes: 'Một trong những thành tựu bảo tồn phục dựng di sản kiến trúc quy mô nhất châu Á thế kỷ 21.'
    }
  },

  // ==========================================
  // HỘI AN
  // ==========================================
  {
    id: 'ha-japanese-bridge',
    name: 'Chùa Cầu (Lai Viễn Kiều)',
    frenchHistoricalName: 'Pont Japonais de Faifo',
    city: 'Hội An',
    coordinates: [15.8771, 108.3260],
    address: 'Đầu đường Nguyễn Thị Minh Khai, Phường Minh An, TP. Hội An, Quảng Nam',
    constructionPeriod: 'Đầu thế kỷ XVII (Trùng tu 2022 – 2024)',
    inaugurationYear: 1617,
    architect: 'Thương nhân Nhật Bản tại Faifo khởi dựng',
    architecturalStyle: 'Kiến trúc Thương cảng Cổ',
    heritageRank: 'Di sản Văn hóa Thế giới UNESCO',
    conditionStatus: 'Đã phục dựng hoàn chỉnh',
    shortSummary: 'Biểu tượng linh thiêng nối nhịp quá khứ của phố cổ Hội An – cây cầu ngói gỗ độc nhất vô nhị bắc qua lạch nước đổ ra sông Hoài.',
    architecturalDescription: 'Chùa Cầu dài khoảng 18m, có kết cấu "thượng gia hạ kiều" (trên là nhà lợp mái ngói âm dương, dưới là cầu gỗ bắc qua lạch nước). Ngôi miếu nhỏ thờ Bắc Đế Trấn Vũ (vị thần trấn giữ phong ba lũ lụt) nép bên mạn bắc cầu. Hai đầu cầu đặt hai cặp tượng chó gỗ (Linh Cẩu) và khỉ gỗ (Thần Hầu) tượng trưng cho năm khởi công và năm hoàn thành công trình.',
    mainImage: '/src/assets/images/urban_heritage_hero_1793202394652.jpg',
    vintageImage: '/src/assets/images/vintage_archive_hanoi_1793202394745.jpg',
    blueprintImage: '/src/assets/images/heritage_blueprint_elevation_1793202395958.jpg',
    spatialFeatures: [
      'Kết cấu "Thượng gia hạ kiều" với 7 gian khung gỗ chịu lực',
      'Mái lợp ngói âm dương tráng men với bờ nóc uốn lượn hình rồng chầu mặt trời',
      'Miếu thờ Thần Bắc Đế Trấn Vũ che chắn bão giông cho thương cảng',
      'Hai đôi linh thú Thần Hầu (khỉ) và Thiên Cẩu (chó) bằng gỗ mít chạm khắc sống động'
    ],
    archives: [
      ARCHIVAL_DOCUMENTS[7]
    ],
    historicalTimeline: [
      {
        year: 'Đầu thế kỷ XVII',
        title: 'Thương gia Nhật Bản dựng cầu ngói',
        description: 'Dựng cầu trấn yểm thủy quái Mamazu để người dân đôi bờ buôn bán bình an.',
        milestoneType: 'Khởi công/Thiết kế'
      },
      {
        year: '1719',
        title: 'Chúa Nguyễn Phúc Chu ban tên Lai Viễn Kiều',
        description: 'Chúa Nguyễn thăm Hội An, ban tặng biển vàng khắc 3 chữ "Lai Viễn Kiều" (Cầu đón bạn từ phương xa).',
        milestoneType: 'Sự kiện lịch sử'
      },
      {
        year: '28/12/2022 – 08/2024',
        title: 'Dự án bảo tồn hạ giải toàn phần',
        description: 'Hạ giải tỉ mỉ từng thanh gỗ, gia cố mố trụ móng và số hóa 3D bảo tồn di tích gốc.',
        milestoneType: 'Trùng tu'
      }
    ],
    citation: {
      archiveCode: 'TTQLBT Di sản Văn hóa Hội An - Ký hiệu HA-CC-2024',
      decreeNumber: 'Quyết định xếp hạng Di tích Lịch sử - Văn hóa Quốc gia ngày 17/02/1990',
      bibliography: 'Nguyễn Bội Liên (1985), Di tích Chùa Cầu Hội An qua các thời kỳ, Tạp chí Nghiên cứu Lịch sử.',
      curatorNotes: 'Hình ảnh Chùa Cầu vinh dự được in trên tờ tiền polymer 20.000 VNĐ của Việt Nam.'
    }
  },
  {
    id: 'ha-tan-ky-house',
    name: 'Nhà cổ Tấn Ký',
    frenchHistoricalName: 'Maison Ancienne Tan Ky',
    city: 'Hội An',
    coordinates: [15.8778, 108.3283],
    address: 'Số 101 Nguyễn Thái Học, Phường Minh An, TP. Hội An, Quảng Nam',
    constructionPeriod: '1741',
    inaugurationYear: 1741,
    architect: 'Thợ mộc Làng Kim Bồng trứ danh thực hiện',
    architecturalStyle: 'Kiến trúc Thương cảng Cổ',
    heritageRank: 'Di sản Văn hóa Thế giới UNESCO',
    conditionStatus: 'Được bảo tồn tốt',
    shortSummary: 'Nhà ống thương gia cổ hơn 200 năm tuổi – hình mẫu trọn vẹn nhất của không gian ở kết hợp buôn bán thương cảng sông Hoài.',
    architecturalDescription: 'Ngôi nhà có mặt trước mở ra phố buôn bán sầm uất Nguyễn Thái Học, mặt sau mở ra bến sông Bạch Đằng để bốc dỡ hàng hóa từ thuyền bè. Cấu trúc nhà ống gồm hai tầng bằng gỗ lim và gỗ kiền kiền, ở giữa có giếng trời đón nắng gió thiên nhiên và thoát nước mưa tinh tế. Nội thất còn lưu giữ chiếc Chén Khổng Tử độc nhất vô nhị và nhiều bức hoành phi câu đối khảm xà cừ ngũ sắc.',
    mainImage: '/src/assets/images/urban_heritage_hero_1793202394652.jpg',
    vintageImage: '/src/assets/images/vintage_archive_hanoi_1793202394745.jpg',
    spatialFeatures: [
      'Mặt bằng nhà ống hai mặt tiền thông suốt nối phố thị với bến sông',
      'Giếng trời (giếng thông tầng) đón ánh sáng tự nhiên và thông gió đối lưu',
      'Hệ vì kèo "chồng rường giã thủ" bằng gỗ lim của thợ mộc Kim Bồng',
      'Thanh ròng rọc kéo đồ đạc lên tầng 2 khi nước sông Hoài dâng mùa lụt'
    ],
    archives: [
      ARCHIVAL_DOCUMENTS[7]
    ],
    historicalTimeline: [
      {
        year: '1741',
        title: 'Gia tộc họ Lê khởi dựng nhà Tấn Ký',
        description: 'Xây dựng phục vụ kinh doanh nông sản, quế và tơ lụa xuất khẩu sang Nhật và châu Âu.',
        milestoneType: 'Khởi công/Thiết kế'
      },
      {
        year: '1990',
        title: 'Cấp bằng Di tích Quốc gia',
        description: 'Ngôi nhà cổ tư nhân đầu tiên tại Hội An được công nhận là Di tích Lịch sử - Văn hóa Quốc gia.',
        milestoneType: 'Xếp hạng di sản'
      }
    ],
    citation: {
      archiveCode: 'Gia phả Lê gia tàng bản - Lưu tại Nhà cổ Tấn Ký',
      bibliography: 'Hoàng Châu (1998), Kiến trúc nhà cổ Hội An và bàn tay tài hoa phường thợ Kim Bồng, NXB Đà Nẵng.',
      curatorNotes: 'Đã đón tiếp nhiều nguyên thủ quốc gia và đại sứ thế giới đến tham quan.'
    }
  },

  // ==========================================
  // ĐÀ LẠT
  // ==========================================
  {
    id: 'dl-railway-station',
    name: 'Ga Xe Lửa Đà Lạt',
    frenchHistoricalName: 'Gare de Dalat',
    city: 'Đà Lạt',
    coordinates: [11.9417, 108.4552],
    address: 'Số 1 Quang Trung, Phường 10, TP. Đà Lạt, Lâm Đồng',
    constructionPeriod: '1932 – 1938',
    inaugurationYear: 1938,
    architect: 'KTS Paul Moncet & Reveron',
    architecturalStyle: 'Kiến trúc Art Deco & Biệt thự Cao nguyên',
    heritageRank: 'Di tích Kiến trúc Nghệ thuật Cấp Quốc gia',
    conditionStatus: 'Được bảo tồn tốt',
    shortSummary: 'Nhà ga xe lửa cổ kính và đẹp nhất Đông Dương với hình tượng ba mái chóp mô phỏng đỉnh núi Langbiang huyền thoại.',
    architecturalDescription: 'Ga Đà Lạt là điểm cuối của tuyến đường sắt răng cưa huyền thoại Tháp Chàm - Đà Lạt dài 84km vượt đèo Ngoạn Mục. Nhà ga nổi bật với ba mái chóp tam giác nhọn vút cao vừa gợi nhớ dãy Langbiang vừa tương đồng với mái nhà Rông Tây Nguyên. Đại sảnh được chiếu sáng bởi các ô kính màu rực rỡ phong cách Art Deco, đồng hồ mặt tròn cổ điển chỉ giờ tàu xuất bến.',
    mainImage: '/src/assets/images/heritage_blueprint_elevation_1793202395958.jpg',
    vintageImage: '/src/assets/images/vintage_archive_hanoi_1793202394745.jpg',
    blueprintImage: '/src/assets/images/heritage_blueprint_elevation_1793202395958.jpg',
    spatialFeatures: [
      'Ba mái chóp cao vút dốc đứng mô phỏng đỉnh núi Langbiang hùng vĩ',
      'Hệ thống kính màu Art Deco hình học chiếu sáng đại sảnh hành khách',
      'Đầu máy hơi nước cổ chạy than củi và toa tàu ốp gỗ cổ điển',
      'Tuyến đường sắt răng cưa kỹ thuật Thụy Sĩ độc đáo hàng đầu thế giới'
    ],
    archives: [
      ARCHIVAL_DOCUMENTS[6]
    ],
    historicalTimeline: [
      {
        year: '1932',
        title: 'Khởi công xây dựng nhà ga',
        description: 'KTS Paul Moncet thiết kế theo phong cách vùng Normandy Pháp kết hợp Tây Nguyên.',
        milestoneType: 'Khởi công/Thiết kế'
      },
      {
        year: '1938',
        title: 'Khánh thành toàn tuyến xe lửa',
        description: 'Tuyến đường sắt răng cưa Tháp Chàm - Đà Lạt chính thức thông tuyến, mở ra kỷ nguyên phát triển du lịch nghỉ dưỡng Đà Lạt.',
        milestoneType: 'Khánh thành'
      },
      {
        year: '2001',
        title: 'Công nhận Di tích Kiến trúc Nghệ thuật Cấp Quốc gia',
        description: 'Bộ Văn hóa Thông tin cấp bằng bảo tồn di tích cấp quốc gia.',
        milestoneType: 'Xếp hạng di sản'
      }
    ],
    citation: {
      archiveCode: 'TTLTQG II, Phông Hỏa xa Đông Dương, Ký hiệu HX-1938-DALAT',
      bibliography: 'Nguyễn Mộng Sinh (2003), Tuyến đường sắt răng cưa Tháp Chàm - Đà Lạt, NXB Trẻ.',
      curatorNotes: 'Hiện khai thác tuyến du lịch trải nghiệm từ ga Đà Lạt về ga Trại Mát thu hút hàng ngàn du khách mỗi ngày.'
    }
  },
  {
    id: 'dl-pedagogy-college',
    name: 'Trường Cao đẳng Sư phạm Đà Lạt (Lycée Yersin)',
    frenchHistoricalName: 'Lycée Yersin de Dalat',
    city: 'Đà Lạt',
    coordinates: [11.9362, 108.4556],
    address: 'Số 29 Yersin, Phường 10, TP. Đà Lạt, Lâm Đồng',
    constructionPeriod: '1927 – 1935',
    inaugurationYear: 1935,
    architect: 'KTS Paul Moncet',
    architecturalStyle: 'Kiến trúc Art Deco & Biệt thự Cao nguyên',
    heritageRank: 'Di tích Kiến trúc Nghệ thuật Cấp Quốc gia',
    conditionStatus: 'Được bảo tồn tốt',
    shortSummary: 'Công trình kiến trúc hiện đại thế kỷ 20 được Hội Kiến trúc sư Quốc tế (UIA) công nhận là một trong 1.000 công trình độc đáo của thế giới.',
    architecturalDescription: 'Điểm nhấn của toàn bộ ngôi trường là dãy lớp học hình vòng cung uốn lượn mềm mại như ôm lấy khoảng sân rộng lớn, kết thúc bằng tháp chuông gạch đỏ vút cao 54m soi bóng xuống rặng thông xanh. Toàn bộ gạch đỏ ốp ngoài và ngói lợp Ardoise đều được chuyển từ Pháp sang, tạo nên một vẻ đẹp lãng mạn thoát tục giữa mây ngàn Đà Lạt.',
    mainImage: '/src/assets/images/urban_heritage_hero_1793202394652.jpg',
    vintageImage: '/src/assets/images/vintage_archive_hanoi_1793202394745.jpg',
    blueprintImage: '/src/assets/images/heritage_blueprint_elevation_1793202395958.jpg',
    spatialFeatures: [
      'Dãy giảng đường hình cánh cung uốn cong mềm mại đón ánh sáng ôn đới',
      'Tháp chuông đồng hồ vuông cao 54m bằng gạch đỏ trần cổ kính',
      'Mái dốc lợp ngói đá phiến dốc đứng đặc trưng kiến trúc biệt thự Pháp',
      'Hài hòa tuyệt đối với cảnh quan đồi thông cao nguyên Langbiang'
    ],
    archives: [
      ARCHIVAL_DOCUMENTS[6]
    ],
    historicalTimeline: [
      {
        year: '1927',
        title: 'Khởi công xây dựng Lycée Yersin',
        description: 'Được đặt tên theo nhà bác học Alexandre Yersin - người có công khám phá ra cao nguyên Lâm Viên.',
        milestoneType: 'Khởi công/Thiết kế'
      },
      {
        year: '1935',
        title: 'Khánh thành và khai giảng khóa học đầu tiên',
        description: 'Trở thành trung tâm giáo dục chất lượng cao dành cho con em kiều dân và học sinh ưu tú Đông Dương.',
        milestoneType: 'Khánh thành'
      },
      {
        year: '2001',
        title: 'Công nhận Di tích Kiến trúc Quốc gia',
        description: 'Bộ Văn hóa - Thông tin chính thức công nhận di tích cấp quốc gia.',
        milestoneType: 'Xếp hạng di sản'
      }
    ],
    citation: {
      archiveCode: 'TTLTQG II, Phông Nha Học chính Đông Dương, Ký hiệu NHC-1935-YERSIN',
      bibliography: 'UIA (1999), 1000 Masterpieces of 20th Century World Architecture, UIA Publishing.',
      curatorNotes: 'Tác phẩm kiến trúc giáo dục tiêu biểu được quốc tế vinh danh.'
    }
  }
];
