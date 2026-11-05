import { HeritageTrail } from '../types/heritage';

export const HERITAGE_TRAILS: HeritageTrail[] = [
  {
    id: 'trail-hanoi-indochine',
    title: 'Tuyến Di sản Kiến trúc Đông Dương & Trục Không gian Lịch sử Hà Nội',
    subtitle: 'Hành trình 3.8 km từ Nhà hát Lớn qua Bảo tàng Lịch sử đến Cầu Long Biên',
    city: 'Hà Nội',
    duration: '2.5 giờ đi bộ / 45 phút xe đạp',
    distance: '3.8 km',
    description: 'Tuyến tham quan dẫn dắt bạn qua những tinh hoa kiến trúc tiêu biểu nhất của thời kỳ chuyển giao thế kỷ 19-20 tại Hà Nội: từ phong cách Tân Cổ điển Garnier tại Nhà hát Lớn, đỉnh cao Phong cách Đông Dương của Ernest Hébrard tại Bảo tàng Lịch sử, qua Nhà thờ Lớn và kết thúc tại cây cầu thép lịch sử Long Biên trên sông Hồng.',
    highlights: [
      'Chiêm ngưỡng thức cột Corinthian và mái Mansard ngói đá phiến Nhà hát Lớn',
      'Khám phá hệ thống thông gió nhiệt đới và mái ngói chồng diêm phong cách Indochine',
      'Dạo bước ngắm nhịp dầm cantilever thép hơn 120 năm tuổi trên Cầu Long Biên'
    ],
    siteIds: ['hn-opera-house', 'hn-national-museum', 'hn-st-joseph-cathedral', 'hn-long-bien-bridge'],
    bannerImage: '/src/assets/images/urban_heritage_hero_1793202394652.jpg'
  },
  {
    id: 'trail-saigon-heart',
    title: 'Trục Di sản Trung tâm Sài Gòn: Từ Kiến trúc Phục Hưng đến Hiện đại Nhiệt đới',
    subtitle: 'Quần thể công trình kiến trúc biểu tượng quanh Công xã Paris & Nguyễn Huệ',
    city: 'TP. Hồ Chí Minh',
    duration: '2 giờ đi bộ',
    distance: '2.4 km',
    description: 'Trục không gian di sản cô đọng nhất của TP. Hồ Chí Minh. Điểm xuyết giữa những tán me rợp bóng là Vương cung thánh đường Đức Bà với gạch đỏ Marseille, Bưu điện Trung tâm với vòm thép Eiffel, Trụ sở UBND TP tráng lệ như một bảo tàng điêu khắc, và Dinh Độc Lập - kiệt tác kiến trúc hiện đại nhiệt đới của KTS Ngô Viết Thụ.',
    highlights: [
      'Gặp gỡ kiệt tác vòm sắt Eiffel và hai bức bích họa bản đồ cổ 1892 trong Bưu điện',
      'Quan sát nghệ thuật điêu khắc phù điêu tượng thần Marianne trên đỉnh Dinh Xã Tây',
      'Tìm hiểu triết lý phong thủy chữ Hán và rèm hoa đá đón gió tại Dinh Độc Lập'
    ],
    siteIds: ['sg-notre-dame', 'sg-post-office', 'sg-city-hall', 'sg-reunification-palace'],
    bannerImage: '/src/assets/images/saigon_notredame_heritage_1793202396257.jpg'
  },
  {
    id: 'trail-hue-imperial',
    title: 'Bản Giao Hưởng Cung Đình: Nghệ Thuật Khảm Sành Sứ & Tân Cổ Điển Khải Định',
    subtitle: 'Từ bờ sông An Cựu thơ mộng đến Tử Cấm Thành uy nghiêm',
    city: 'Huế',
    duration: '3 giờ tham quan',
    distance: '5.2 km',
    description: 'Hành trình khám phá sự biến chuyển đặc sắc trong mỹ thuật kiến trúc triều Nguyễn đầu thế kỷ 20: sự hòa quyện giữa kỹ thuật xây dựng phương Tây hiện đại với nghệ thuật khảm sành sứ, bích họa và đồ gỗ thếp vàng cung đình Huế tại Cung An Định và Điện Kiến Trung vừa hồi sinh.',
    highlights: [
      'Chiêm ngưỡng 6 bức bích họa nguyên bản vẽ danh thắng lăng tẩm hoàng gia',
      'Khám phá Điện Kiến Trung vừa hoàn thành phục dựng kỳ công năm 2024',
      'Nghệ thuật khảm sành sứ tinh xảo bậc nhất phương Đông'
    ],
    siteIds: ['hue-an-dinh', 'hue-kien-trung'],
    bannerImage: '/src/assets/images/heritage_blueprint_elevation_1793202395958.jpg'
  },
  {
    id: 'trail-dalat-highland',
    title: 'Âm Hưởng Cao Nguyên: Tuyến Xe Lửa Răng Cưa & Kiến Trúc Nghỉ Dưỡng Xứ Lạnh',
    subtitle: 'Vẻ đẹp lãng mạn của Art Deco và mái ngói đá phiến giữa đồi thông',
    city: 'Đà Lạt',
    duration: '2 giờ',
    distance: '3.1 km',
    description: 'Đà Lạt là bảo tàng sống của kiến trúc biệt thự châu Âu đầu thế kỷ 20. Tuyến đường đưa bạn đến Ga Đà Lạt với ba chóp mái gợi nhớ đỉnh núi Langbiang huyền thoại, rồi dừng chân tại Trường CĐ Sư phạm Đà Lạt với tháp chuông gạch đỏ vút cao được bình chọn vào top 1.000 công trình thế kỷ 20.',
    highlights: [
      'Ba chóp nhọn mô phỏng đỉnh Langbiang và đầu máy hơi nước cổ',
      'Dãy lớp học hình cánh cung ôm trọn khuôn viên thông xanh tại Lycée Yersin',
      'Kính màu Art Deco và hệ mái đá phiến Ardoise đặc trưng'
    ],
    siteIds: ['dl-railway-station', 'dl-pedagogy-college'],
    bannerImage: '/src/assets/images/urban_heritage_hero_1793202394652.jpg'
  }
];
