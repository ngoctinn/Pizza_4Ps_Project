// Tạo mảng các sản phẩm
const products = [
  {
    id: 1,
    name: "Pizza Tôm Xốt Tỏi Cay",
    price: "245,000 VND",
    image: "../assets/img/products/PZ_TomXotToiCay.webp",
    type: "Pizza",
    title: "Tôm ướp tỏi trên nền xốt cà chua Arrabbiata",
  },
  {
    id: 2,
    name: "Pizza Margherita thịt nguội & Burrata",
    price: "398,000 VND",
    image: "../assets/img/products/PZ_MargheritaThitNguoi&Burrata.webp",
    type: "Pizza",
    title:
      "Nền bánh Margherita cổ điển được thêm thắt với thịt nguội Parma, rau Rocket và phô mai Burrata nhà làm béo ngậy. Lưu ý: Thịt nguội và rau rocket được đặt riêng để đảm bảo độ tươi ngon của pizza khi giao đến bạn",
  },
  {
    id: 3,
    name: "Pizza 3 loại phô mai nhà làm",
    price: "198,000 VND",
    image: "../assets/img/products/PZ_3LoaiPMNL.webp",
    type: "Pizza",
    title:
      "(Món chay) Bạn sẽ bất ngờ trước sự hợp cạ của bộ đôi “phô mai-mật ong” này đấy! Dòng pizza 3 loại phô mai nhà làm gồm: phô mai Mozzarella, Grano Padano và Camembert.",
  },
  {
    id: 4,
    name: "Pizza 4 loại phô mai nhà làm",
    price: "248,000 VND",
    image: "../assets/img/products/PZ_4LoaiPMNL.webp",
    type: "Pizza",
    title:
      "(Món chay) Dòng pizza 4 loại phô mai nhà làm gồm: phô mai xanh, Mozzarella, Grano Padano, và Camembert.",
  },
  {
    id: 5,
    name: "Pizza 5 loại phô mai nhà làm",
    price: "298,000 VND",
    image: "../assets/img/products/PZ_5LoaiPMNL.webp",
    type: "Pizza",
    title:
      "(Vegetarian) Dòng pizza 5 loại phô mai nhà làm gồm: phô mai xanh, Mozzarella, Grano Padano, Camembert và Raclette.",
  },
  {
    id: 6,
    name: "Pizza Margherita",
    price: "160,000 VND",
    image: "../assets/img/products/PZ_Margherita.webp",
    type: "Pizza",
    title:
      "(Món chay) Chiếc bánh pizza nóng hổi với nền xốt cà chua, cùng nhân phô mai Mozzarella nhà làm điểm mùi thơm thảo mộc từ lá húng quế tươi.",
  },
  {
    id: 7,
    name: "Pizza Margherita thịt nguội",
    price: "331,000 VND",
    image: "../assets/img/products/PZ_MargheritaThitNguoi.webp",
    type: "Pizza",
    title:
      "Nền bánh Margherita cổ điển được thêm thắt với thịt nguội Parma và rau rocket. Lưu ý: Thịt nguội và rau rocket được đặt riêng để đảm bảo độ tươi ngon của pizza khi giao đến bạn",
  },
  {
    id: 8,
    name: "Pizza Margherita & 2 loại xúc xích Ý",
    price: "238,000 VND",
    image: "../assets/img/products/PZ_Margherita&2LoaiXucXichY.webp",
    type: "Pizza",
    title:
      "Trên lớp nền Margherita cổ điển, nổi bật hương vị địa phương đích thực với hai loại xúc xích Ý Milano Salami và xúc xích cay Chorizo.",
  },
  {
    id: 9,
    name: "Pizza Margherita cà tím nướng",
    price: "198,000 VND",
    image: "../assets/img/products/PZ_MargheritaCaTimNuong.webp",
    type: "Pizza",
    title:
      "(Món chay) Cà tím nướng ướp giấm balsamic với húng quế trên nền Margherita, nhấn điểm với nụ bạch hoa, mang đến vị chua và ngọt dịu hậu vị.",
  },
  {
    id: 10,
    name: "Pizza cá hồi xốt kem Miso",
    price: "278,000 VND",
    image: "../assets/img/products/PZ_CaHoiXotKemMiSo.webp",
    type: "Pizza",
    title:
      "Sự cân bằng hài hòa giữa xốt Miso, phô mai Mozzarella nhà làm, cá hồi xen lẫn vị ngọt thanh của hành tây và mùi thơm thoang thoảng từ tiêu cùng hành lá.",
  },
  {
    id: 11,
    name: "Pizza hải sản cay với phô mai hun khói",
    price: "274,000 VND",
    image: "../assets/img/products/PZ_haisancay&pmhunkhoi.webp",
    type: "Pizza",
    title:
      "Chiếc bánh với ba loại hải sản tươi (nghêu, tôm, mực) toát lên mùi thơm hấp dẫn từ phô mai Scamorza hun khói trên nền xốt cà chua và các loại thảo mộc, điểm xuyết chút cay nhẹ kích vị.",
  },
  {
    id: 12,
    name: "Pizza tôm và xốt Mayonnaise",
    price: "254,000 VND",
    image: "../assets/img/products/PZ_tom&mayonnaise.webp",
    type: "Pizza",
    title:
      "Một lựa chọn được yêu thích bởi trẻ em và người lớn. Hãy cùng thưởng thức và cảm nhận vị ngọt dịu từ xốt mayonnaise, kết hợp kèm bông cải xanh, tôm tươi và phô mai Mozzarella nhà làm.",
  },
  {
    id: 13,
    name: "Pizza gà xốt Teriyaki",
    price: "218,000 VND",
    image: "../assets/img/products/PZ_GaXotTeriyaki.webp",
    type: "Pizza",
    title:
      "Vị mặn ngọt đặc trưng của xốt Teriyaki trong nền ẩm thực Nhật Bản là điểm nhấn của loại pizza này, nổi bật cùng những lát thịt gà mềm-mọng nước và mùi thơm từ rong biển và lá tía tô.",
  },
  {
    id: 14,
    name: "Pizza Camembert và xốt nấm thịt nguội",
    price: "208,000 VND",
    image: "../assets/img/products/PZ_Camembert&XotNamThitNguoi.webp",
    type: "Pizza",
    title:
      "Món bánh đáng thử cho thực khách yêu phô mai. Mùi thơm nhẹ nhàng từ lớp xốt nấm nổi bật cùng vị béo của phô mai Camembert nhà làm và vị đậm đà từ những lát thịt nguội.",
  },
  {
    id: 15,
    name: "Pizza 4 loại nấm",
    price: "198,000 VND",
    image: "../assets/img/products/PZ_4LoaiNam1.webp",
    type: "Pizza",
    title:
      "(Món chay) Sự kết hợp của 4 loại nấm tươi: linh chi trắng, linh chi nâu, nấm mỡ trắng, và nấm mỡ nâu; tất cả nổi bật trên nền xốt nấm và phô mai Mozzarella nhà làm.",
  },
  {
    id: 16,
    name: "Pizza 4 loại nấm",
    price: "198,000 VND",
    image: "../assets/img/products/PZ_4LoaiNam2.webp",
    type: "Pizza",
    title:
      "(Món chay) Sự kết hợp của 4 loại nấm tươi: linh chi trắng, linh chi nâu, nấm mỡ trắng, và nấm mỡ nâu; tất cả nổi bật trên nền xốt nấm và phô mai Mozzarella nhà làm.",
  },
  {
    id: 17,
    name: "Pizza xốt bí ngòi quế tây và hoa",
    price: "178,000 VND",
    image: "../assets/img/products/PZ_XotBiNgoiQueTay&Hoa.webp",
    type: "Pizza",
    title: "Món chay, bí ngòi và hoa cùng xốt húng tây và hạt",
  },
  {
    id: 18,
    name: "Xốt bí ngòi quế tây với phô mai Latic nhà làm",
    price: "178,000 VND",
    image: "../assets/img/products/PZ_xotbingoiquetay&pmLactic.webp",
    type: "Pizza",
    title: "Món chay, bí ngòi và hoa cùng xốt húng tây và hạt",
  },
  {
    id: 19,
    name: "Xốt bí ngòi quế tây với phô mai Mozzarella nhà làm",
    price: "178,000 VND",
    image: "../assets/img/products/PZ_XotBiNgoiQueTay&PMMozzarella.webp",
    type: "Pizza",
    title: "Món chay, bí ngòi và hoa cùng xốt húng tây và hạt",
  },
  {
    id: 20,
    name: "Pizza gà Tandoori",
    price: "218,000 VND",
    image: "../assets/img/products/PZ_gaTandooi.webp",
    type: "Pizza",
    title:
      "Vị đậm đà và mùi thơm đặc trưng của cà ri Ấn Độ kết hợp cùng thịt gà, phô mai nhà làm và rau rocket sẽ mang đến bạn hương vị khó quên.",
  },
  {
    id: 21,
    name: "Pizza cải xoăn với Ricotta chanh",
    price: "188,000 VND",
    image: "../assets/img/products/PZ_CaiXoan&RicottaChanh.webp",
    type: "Pizza",
    title:
      "(Món chay) Pizza rau cải xoăn chay trên lớp xốt nền tapenade từ ô liu và nụ bạch hoa, kết hợp vị béo nhẹ của phô mai Ricotta nhà làm và một chút chua của chanh, điểm xuyết đầy màu sắc từ các loại hoa ăn được.",
  },
  {
    id: 22,
    name: "Pizza sò điệp với xốt Miso ngọt",
    price: "420,000 VND",
    image: "../assets/img/products/PZ_SoDiep&XotMisoNgot.webp",
    type: "Pizza",
    title:
      "Sò điệp mọng nước từ Hokkaido, Nhật Bản được kết hợp hoàn hảo với xốt miso ngọt và bông cải non nướng giúp nâng tầm hương vị món ăn thêm đậm đà.",
  },
  {
    id: 23,
    name: "Pizza thịt bò cay kiểu Kebab",
    price: "294,000 VND",
    image: "../assets/img/products/PZ_ThitBoCayKieuKebab.webp",
    type: "Pizza",
    title:
      "Hương vị đậm đà của thịt bò nướng kiểu Kebab, kết hợp phô mai nhà làm trên nền xốt cà chua, cùng vị cay đặc biệt từ ớt xanh, ớt Jalapeno, và hạt cumin.",
  },
  {
    id: 24,
    name: "Pizza bò kho",
    price: "248,000 VND",
    image: "../assets/img/products/PZ_BoKho.webp",
    type: "Pizza",
    title:
      "Phần gân và thịt bò được om nhiều giờ cùng vang đỏ, ngũ vị hương, cà rốt, khoai tây, hành tây, cà chua, kết hợp với phô mai, bánh phở chiên, các loại rau xanh.",
  },
  {
    id: 25,
    name: "Pizza xúc xích cay",
    price: "170,000 VND",
    image: "../assets/img/products/PZ_XucXichCay.webp",
    type: "Pizza",
    title:
      "Xúc xích thảo mộc nhà làm, tiêu xanh, bông cải xanh, xốt cà chua, phô mai Mozzarella, Grana Padano",
  },
  {
    id: 26,
    name: "Pizza trứng, cải bó xôi",
    price: "160,000 VND",
    image: "../assets/img/products/PZ_trung&caiboxoi.webp",
    type: "Pizza",
    title: "Trứng, cải bó xôi và bơ tỏi, phô mai Ricotta, tiêu đen",
  },
  {
    id: 27,
    name: "Pizza Hawaiian 4P's",
    price: "160,000 VND",
    image: "../assets/img/products/PZ_Hawaiian.webp",
    type: "Pizza",
    title:
      "Xốt ớt mayonnaise ngọt, giăm bông, dứa, hành tây, cà chua bi, phô mai Mascarpone, cỏ xạ hương",
  },
  {
    id: 28,
    name: "Các loại phô mai nhà làm (S)",
    price: "109,000 VND",
    image: "../assets/img/products/KV_cacloaiPMNL(S).webp",
    type: "KhaiVi",
    title:
      "Phô mai các loại là sự kết hợp của 4 loại Phô mai nhà làm 4P's gồm Raclette, Scamorza hun khói, Camembert Truffle và Phô mai xanh. Mứt ngọt hoặc các loại hạt được thêm vào để tăng hương vị của từng loại phô mai.",
  },
  {
    id: 29,
    name: "Các loại phô mai nhà làm (L)",
    price: "198,000 VND",
    image: "../assets/img/products/KV_cacloaiPMNL(L).webp",
    type: "KhaiVi",
    title:
      "Phô mai các loại là sự kết hợp của 4 loại Phô mai nhà làm 4P's gồm Raclette, Scamorza hun khói, Camembert Truffle và Phô mai xanh. Mứt ngọt hoặc các loại hạt được thêm vào để tăng hương vị của từng loại phô mai.",
  },
  {
    id: 30,
    name: "Thịt nguội cuộn xoài kèm xốt chanh dây",
    price: "144,000 VND",
    image: "../assets/img/products/KV_thitnguoicuonxoai&xotchanhday.webp",
    type: "KhaiVi",
    title:
      "Vị mặn của thịt nguội, vị thơm của xoài hoà quyện cùng với xốt chanh dây thơm lừng tạo nên một sự khởi đầu lôi cuốn.",
  },
  {
    id: 31,
    name: "(1pc) Camembert kẹp Mascarpone Truffle",
    price: "47,000 VND",
    image: "../assets/img/products/KV_(1pc)Camembert&MascarponeTruffle.webp",
    type: "KhaiVi",
    title:
      "(Món chay) Với hương thơm tinh tế của dầu nấm Truffle hòa quyện cùng vị ngon thuần túy của phô mai Camembert nhà làm.",
  },
  {
    id: 32,
    name: "(2pc) Camembert kẹp Mascarpone Truffle",
    price: "94,000 VND",
    image: "../assets/img/products/KV_(2pc)Camembert&MascarponeTruffle.webp",
    type: "KhaiVi",
    title:
      "(Món chay) Với hương thơm tinh tế của dầu nấm Truffle hòa quyện cùng vị ngon thuần túy của phô mai Camembert nhà làm.",
  },
  {
    id: 33,
    name: "Khoai tây Đức bỏ lò",
    price: "72,000 VND",
    image: "../assets/img/products/KV_khoaitayDucbolo.webp",
    type: "KhaiVi",
    title:
      "Vị bùi của khoai tây, vị ngọt nhẹ của hành tây và vị mặn của thịt xông khói quyện với hương thơm đặc trưng của hương thảo.",
  },
  {
    id: 34,
    name: "Súp nghêu hầm",
    price: "92,000 VND",
    image: "../assets/img/products/KV_supngheuham.webp",
    type: "KhaiVi",
    title:
      "Cảm nhận từng muỗng súp nghêu béo ngậy, thơm lừng kết hợp cần tây làm gia tăng hương vị ngọt dịu của súp.",
  },
  {
    id: 35,
    name: "Súp cà chua thịt viên Ý",
    price: "82,000 VND",
    image: "../assets/img/products/KV_supcachuathitvienY.webp",
    type: "KhaiVi",
    title:
      "Với hương vị tự nhiên đậm đà, chua ngọt hài hòa khi chúng tôi sử dụng nước xốt cà chua tươi truyền thống từ Ý. Một món súp thú vị để khởi đầu bữa ăn!",
  },
  {
    id: 36,
    name: "Gà rán với gia vị phương Đông, 2 miếng",
    price: "98,000 VND",
    image: "../assets/img/products/KV_garan&giaviphuongDong(2mieng).webp",
    type: "KhaiVi",
    title:
      "Thơm ngon-giòn rụm, sự kết hợp độc đáo giữa gà rán kiểu Châu Mỹ với các gia vị đặc trưng của phương Đông và tiêu Sansho hữu cơ, chấm với xốt Jalapeno nhà làm.",
  },
  {
    id: 37,
    name: "Thịt nguội cuộn Ricotta & Rocket 1pc",
    price: "44,000 VND",
    image: "../assets/img/products/KV_thitnguoicuonRicotta&Rocket.webp",
    type: "KhaiVi",
    title:
      "Một tổ hợp rất Ý giữa thịt nguội cuộn phô mai Rocitta kèm lá Rocket hữu cơ. Công thức này cho ra hương vị cân bằng giữa vị đắng của lá rocket, vị ngon của thịt nguội và vị béo dày của phô mai",
  },
  {
    id: 38,
    name: "Set thịt nguội phô mai nhà làm (lớn)",
    price: "334,000 VND",
    image: "../assets/img/products/KV_setthitnguoiPMNL(lon).webp",
    type: "KhaiVi",
    title:
      "Phô mai Camembert, Mascarpone dầu nấm, Scamorza, Raclette, Gorgonzola, các loại hạt",
  },
  {
    id: 39,
    name: "Set thịt nguội phô mai nhà làm (nhỏ)",
    price: "172,000 VND",
    image: "../assets/img/products/KV_setthitnguoiPMNL(nho).webp",
    type: "KhaiVi",
    title:
      "Phô mai Camembert, Mascarpone dầu nấm, Scamorza, Raclette, Gorgonzola, các loại hạt",
  },
  {
    id: 40,
    name: "Burrata với cá cơm",
    price: "198,000 VND",
    image: "../assets/img/products/KV_Burrata&cacom.webp",
    type: "KhaiVi",
    title: "Cá cơm và phô mai Burrata thơm ngon",
  },
  {
    id: 41,
    name: "Burrata xốt bò cay (L)",
    price: "198,000 VND",
    image: "../assets/img/products/KV_Burrataxotbocay(L).webp",
    type: "KhaiVi",
    title: "Xốt bò bằm cay và phô mai Burrata với cải bó xôi",
  },
  {
    id: 42,
    name: "Burrata xốt bò cay (S)",
    price: "98,000 VND",
    image: "../assets/img/products/KV_Burrataxotbocay(S).webp",
    type: "KhaiVi",
    title: "Xốt bò bằm cay và phô mai Burrata với cải bó xôi",
  },
  {
    id: 43,
    name: "khoai tây nghiền với phô mai Raclette",
    price: "98,000 VND",
    image: "../assets/img/products/KV_khoaitaynghien&pmRaclette.webp",
    type: "KhaiVi",
    title: "Khoai tây nghiền béo mịn với phô mai, kèm đế bánh pizza",
  },
  {
    id: 44,
    name: "Pate gan gà",
    price: "98,000 VND",
    image: "../assets/img/products/KV_pateganga.webp",
    type: "KhaiVi",
    title:
      "Pa tê gan gà với vị béo ngọt đậm đà, trứng, nho khô, kèm đế bánh pizza",
  },
  {
    id: 45,
    name: "Salad cá hồi, bơ và phô mai Ricotta",
    price: "158,000 VND",
    image: "../assets/img/products/SL_cahoibo&pmRicotta.webp",
    type: "Salad",
    title:
      "Một chút biến tấu trên nền các loại rau xanh kết hợp thêm vị béo từ cá hồi tươi, bơ và phô mai Ricotta. Dùng kèm xốt tương đậu nành và cá cơm kiểu Nhật cho ra vị mặn ngon, hoặc xốt ngọt dịu từ hành tây và giấm cho vị chua đậm.",
  },
  {
    id: 46,
    name: "Salad cải xoăn hữu cơ",
    price: "105,000 VND",
    image: "../assets/img/products/SL_caixoan.webp",
    type: "Salad",
    title:
      "Xà lách cải xoăn được phục vụ với phô mai Lactic nhà làm, các loại hạt ngào đường caramen mặn, đậu xanh, củ thì là và dầu giấm vị hành tây.",
  },
  {
    id: 47,
    name: "Mozzarella nhà làm và cà chua Đà Lạt",
    price: "105,000 VND",
    image: "../assets/img/products/SL_Mozzarella&cachuaDaLat.webp",
    type: "Salad",
    title:
      "Tổng thể hương vị món ăn được cân bằng khi kết hợp phô mai tươi cùng vị chua ngọt từ cà chua, kèm mùi thơm của lá quế tây, dầu ô liu và điểm xuyến một chút muối, tiêu.",
  },
  {
    id: 48,
    name: "Phô mai Burrata & rau Rocket hữu cơ",
    price: "185,000 VND",
    image: "../assets/img/products/SL_pmBurrata&rauRocket.webp",
    type: "Salad",
    title:
      "Sự tươi xanh của rau Rocket hữu cơ, vị mát từ cà chua và độ thơm béo đặc trưng đến từ phô mai Burrata nhà làm, điểm xuyết thêm hạt hạnh nhân giòn rụm.",
  },
  {
    id: 49,
    name: "Rau Rocket hữu cơ và cà chua",
    price: "81,000 VND",
    image: "../assets/img/products/SL_rauRocket&cachua.webp",
    type: "Salad",
    title:
      "Một sự hài hòa của lá Rocket hữu cơ và cà chua với một chút Giấm đen nhà làm.",
  },
  {
    id: 50,
    name: "Salad rau xanh với xốt nhà làm",
    price: "85,000 VND",
    image: "../assets/img/products/SL_rauxanh&xotnhalam.webp",
    type: "Salad",
    title:
      "Gồm 7 loại rau xanh với cải bẹ xanh và 6 loại rau xà lách, và 6 loại rau mùi như kinh giới, ngò gai, húng quế, húng thơm, rau mùi và thì là.",
  },
  {
    id: 51,
    name: "Thịt nguội cuộn Ricotta & Rocket 2pc",
    price: "88,000 VND",
    image: "../assets/img/products/SL_thitnguoicuonRicotta&Rocket.webp",
    type: "Salad",
    title:
      "Một tổ hợp rất Ý giữa thịt nguội cuộn phô mai Rocitta kèm lá Rocket hữu cơ. Công thức này cho ra hương vị cân bằng giữa vị đắng của lá rocket, vị ngon của thịt nguội và vị béo dày của phô mai.",
  },
  {
    id: 52,
    name: "Salad tôm và bơ",
    price: "158,000 VND",
    image: "../assets/img/products/SL_tom&bo.webp",
    type: "Salad",
    title:
      "Món salad đầy sắc màu tươi mát với các nguyên liệu tươi ngon từ rau rocket, bơ, cà chua, cần tây, tôm tươi và phô mai bột Parmesan.",
  },
  {
    id: 53,
    name: "Trái cây, Burrata và thịt nguội (nhỏ)",
    price: "129,000 VND",
    image: "../assets/img/products/SL_traicayBurrata&thitnguoi(nho).webp",
    type: "Salad",
    title:
      "Salad trái cây với nguyên liệu chính là những loại trái cây xanh tươi được nâng tầm với thịt nguội nhập khẩu cùng phô mai Burrata nhà làm",
  },
  {
    id: 54,
    name: "Trái cây, Burrata và thịt nguội (lớn)",
    price: "238,000 VND",
    image: "../assets/img/products/SL_traicayBurrata&thitnguoi(lon).webp",
    type: "Salad",
    title:
      "Salad trái cây với nguyên liệu chính là những loại trái cây xanh tươi được nâng tầm với thịt nguội nhập khẩu cùng phô mai Burrata nhà làm",
  },
  {
    id: 55,
    name: "Cơm Ý Risotto mực",
    price: "165,000 VND",
    image: "../assets/img/products/MC_comyRisottomuc.webp",
    type: "MonChinh",
    title: "Ăn kèm mực nướng và phô mai Caciocavallo nhà làm",
  },
  {
    id: 56,
    name: "Mì Fettuccine tươi xốt kem cá hồi",
    price: "194,000 VND",
    image: "../assets/img/products/MC_Fettuccine&xotkemcahoi.webp",
    type: "MonChinh",
    title:
      "Hãy nhớ vắt một ít chanh lên và trộn đều, vị chua tự nhiên của chanh sẽ trung hòa vị béo ngậy của món ăn, hài hòa cùng cá hồi ngọt thanh và mùi thơm nồng của tiêu hồng.",
  },
  {
    id: 57,
    name: "Mì Fettuccine tươi xốt kem tôm và nấm",
    price: "198,000 VND",
    image: "../assets/img/products/MC_Fettuccine&xottomnam.webp",
    type: "MonChinh",
    title:
      "Sợi mì dẹt Fettuccine tươi kết hợp vị ngọt thanh tự nhiên của tôm, nấm đùi gà và măng tây, hòa cùng vị thơm béo của xốt kem và hạnh nhân giòn rụm.",
  },
  {
    id: 58,
    name: "Mì Lasagna đút lò",
    price: "178,000 VND",
    image: "../assets/img/products/MC_Lasagnadutlo.webp",
    type: "MonChinh",
    title:
      "Sự cân bằng tuyệt vời khi kết hợp vị đậm đà của thịt bò bằm xen kẽ những lớp mì Lasagna, hòa cùng vị chua dịu từ cà chua và vị béo của phô mai Scamozza.",
  },
  {
    id: 59,
    name: "Mì Ý Arrabbiata với phô mai Mascarpone",
    price: "165,000 VND",
    image: "../assets/img/products/MC_miyArrabbiata&pmMascarpone.webp",
    type: "MonChinh",
    title:
      "Món ăn kết hợp vị cay nồng của sốt Arrabbiata với vị mềm mại và béo ngậy của phô mai Mascarpone, tạo nên một hương vị độc đáo và hấp dẫn.",
  },
  {
    id: 60,
    name: "Mì Ý bò bằm và phô mai hun khói",
    price: "168,000 VND",
    image: "../assets/img/products/MC_miybobam&pmhunkhoi.webp",
    type: "MonChinh",
    title:
      "Mì Ý xốt bò bằm Bolognese, điểm nhấn không chỉ ở sự đậm đà của nước xốt thịt bò bằm mà còn nổi bật với vị thơm béo khó cưỡng từ phần phô mai Scamozza hun khói phía bên trên.",
  },
  {
    id: 61,
    name: "Mì Ý cua và xốt kem cà chua",
    price: "154,000 VND",
    image: "../assets/img/products/MC_miycua&xotkemcachua.webp",
    type: "MonChinh",
    title:
      "Món mì “huyền thoại” ở Pizza 4P’s sẽ đánh thức khứu giác của bạn với mùi cua thơm nồng hấp dẫn hòa quyện cùng xốt kem cà chua và phô mai Ricotta béo dịu.",
  },
  {
    id: 62,
    name: "Mì Ý nghêu và xốt quế tây",
    price: "165,000 VND",
    image: "../assets/img/products/MC_miyngheu&xotquetay.webp",
    type: "MonChinh",
    title:
      "Món mì với mùi thơm nồng của nghêu và màu xanh đặc trưng của xốt quế tây nhà làm quyện đều lên từng sợi mì, với thịt nghêu và hạt bí.",
  },
  {
    id: 63,
    name: "Mì Ý tôm tỏi cay",
    price: "188,000 VND",
    image: "../assets/img/products/MC_miytomtoicay.webp",
    type: "MonChinh",
    title: "Vị tỏi cay nồng hòa quyện với mùi thơm từ nước dùng tôm",
  },
  {
    id: 64,
    name: "Mì Ý xốt cà chua và phô mai Mascarpone",
    price: "150,000 VND",
    image: "../assets/img/products/MC_miyxotcachua&mpMascarpone.webp",
    type: "MonChinh",
    title:
      "(Món cay) Sắc đỏ nổi bật và vị chua đặc trưng của xốt cà chua Ý hòa cùng vị béo thanh của phô mai Mascarpone nhà làm và điểm xuyết chút cay từ ớt. Chúng tôi có thể điều chỉnh độ cay theo mong muốn của bạn. Hãy cho chúng tôi biết.",
  },
  {
    id: 65,
    name: "Bánh phô mai 2 lớp",
    price: "75,000 VND",
    image: "../assets/img/products/TM_banhphomai2lop.webp",
    type: "TrangMieng",
    title:
      "Một chiếc bánh ngọt với hai lớp phô mai đặc biệt, mang đến trải nghiệm ẩm thực tuyệt vời với vị béo mịn và hương vị thơm ngon không thể cưỡng lại.",
  },
  {
    id: 66,
    name: "Pudding kem trứng (90g)",
    price: "37,000 VND",
    image: "../assets/img/products/TM_puddingkemtrung.webp",
    type: "TrangMieng",
    title: "Bánh pudding nhà làm có kết cấu mềm, mùi vị dịu nhẹ của kem trứng",
  },
  {
    id: 67,
    name: "Pudding matcha (90g)",
    price: "37,000 VND",
    image: "../assets/img/products/TM_puddingmatcha.webp",
    type: "TrangMieng",
    title: "Bánh pudding nhà làm hương vị trà xanh",
  },
  {
    id: 68,
    name: "Sữa chua kiểu Hy Lạp (90g)",
    price: "40,000 VND",
    image: "../assets/img/products/TM_suachuaHyLap.webp",
    type: "TrangMieng",
    title: "Sữa chua có kết cấu đặc, béo mịn với đặc trưng nguyên bản nhà làm",
  },
  {
    id: 69,
    name: "Sữa chua ít đường (90g)",
    price: "27,000 VND",
    image: "../assets/img/products/TM_suachuaitduong.webp",
    type: "TrangMieng",
    title: "Sữa chua nhà làm ít đường, vị thanh nhẹ",
  },
  {
    id: 70,
    name: "Sữa chua không đường (90g)",
    price: "27,000 VND",
    image: "../assets/img/products/TM_suachuakhongduong.webp",
    type: "TrangMieng",
    title: "Sữa chua nhà làm nguyên bản không đường",
  },
  {
    id: 71,
    name: "Sữa chua xốt chanh dây (90g)",
    price: "30,000 VND",
    image: "../assets/img/products/TM_suachuaxotchanhday.webp",
    type: "TrangMieng",
    title: "Sữa chua nhà làm mang vị chua ngọt hài hòa của chanh dây",
  },
  {
    id: 72,
    name: "Sữa chua xốt dâu (90g)",
    price: "30,000 VND",
    image: "../assets/img/products/TM_suachuaxotdau.webp",
    type: "TrangMieng",
    title: "Sữa chua nhà làm với hương dâu ngọt ngào",
  },
  {
    id: 73,
    name: "Nước ép rau Rocket hữu cơ",
    price: "65,000 VND",
    image: "../assets/img/products/TU_rauRocket.webp",
    type: "ThucUong",
    title: "Sự tươi mát và sảng khoái cùng hỗn hợp nước ép từ táo và dứa",
  },
  {
    id: 74,
    name: "Nước ép dưa hấu",
    price: "57,000 VND",
    image: "../assets/img/products/TU_duahau.webp",
    type: "ThucUong",
    title:
      "Nước ép dưa hấu tươi ngon, cung cấp nhiều vitamin và dưỡng chất, đem lại cảm giác mát lạnh và sảng khoái.",
  },
  {
    id: 75,
    name: "Nước ép dứa",
    price: "57,000 VND",
    image: "../assets/img/products/TU_dua.webp",
    type: "Pizza",
    title:
      "Nước ép dứa tươi ngon, cung cấp nhiều vitamin và dưỡng chất, đem lại cảm giác mát lạnh và sảng khoái.",
  },
  {
    id: 76,
    name: "Nước ép cam",
    price: "59,000 VND",
    image: "../assets/img/products/TU_cam.webp",
    type: "ThucUong",
    title:
      "Nước ép cam tươi ngon, cung cấp nhiều vitamin và dưỡng chất, đem lại cảm giác mát lạnh và sảng khoái.",
  },
  {
    id: 77,
    name: "Nước chanh",
    price: "42,000 VND",
    image: "../assets/img/products/TU_chanh.webp",
    type: "ThucUong",
    title:
      "Nước chanh tươi ngon, cung cấp nhiều vitamin và dưỡng chất, đem lại cảm giác mát lạnh và sảng khoái.",
  },
  {
    id: 78,
    name: "Coca Cola",
    price: "39,000 VND",
    image: "../assets/img/products/TU_coca.webp",
    type: "ThucUong",
    title: "Vị ngọt thổi bừng hứng ",
  },
  {
    id: 79,
    name: "Coca Cola không đường",
    price: "39,000 VND",
    image: "../assets/img/products/TU_cocazero.webp",
    type: "ThucUong",
    title: "Vị ngọt thổi bừng hứng khởi",
  },
  {
    id: 80,
    name: "Sprite",
    price: "39,000 VND",
    image: "../assets/img/products/TU_sprite.webp",
    type: "ThucUong",
    title: "Thoả mãn cơn khát",
  },
  {
    id: 81,
    name: "Bia Heineken không cồn",
    price: "44,000 VND",
    image: "../assets/img/products/TU_Heinkenkhongcon.webp",
    type: "ThucUong",
    title:
      "Thưởng thức hương vị đặc trưng của bia Heineken mà không lo ngại về cồn, mang lại trải nghiệm sảng khoái và an toàn.",
  },
  {
    id: 82,
    name: "Bộ 6 loại bia Original của 4P's",
    price: "440,000 VND",
    image: "../assets/img/products/TU_bo6loaibia.webp",
    type: "ThucUong",
    title: "Một sự lựa chọn đầy đủ với 6 loại bia Original của 4P's",
  },
  {
    id: 83,
    name: "Bia 4P's Mikan (5.0% ABV)",
    price: "79,000 VND",
    image: "../assets/img/products/TU_Mikan.webp",
    type: "ThucUong",
    title:
      "Một loại bia nhẹ, sạch, sắc nét với hương cam quýt Mikan Nhật Bản tinh tế. Một loại bia mang đến cảm giác sảng khoái, được tạo tác để kết hợp cùng pizza",
  },
  {
    id: 84,
    name: "Bia KAGUA Roast (6.2% ABV)",
    price: "79,000 VND",
    image: "../assets/img/products/TU_KAGUARoast.webp",
    type: "ThucUong",
    title: "Hương thơm độc đáo của tiêu Nhật Sansho và mạch nha rang",
  },
  {
    id: 85,
    name: "Bia Premium Lager(5.5% ABV)",
    price: "79,000 VND",
    image: "../assets/img/products/TU_PremiumLager.webp",
    type: "ThucUong",
    title: "Dòng bia lager cổ điển là sự kết hợp lý tưởng với mọi món ăn",
  },
  {
    id: 86,
    name: "Bia Sesion IPA (4.5% ABV)",
    price: "79,000 VND",
    image: "../assets/img/products/TU_SessionIPA.webp",
    type: "ThucUong",
    title: "Với nồng độ cồn thấp, IPA được làm từ bột pizza của 4P's",
  },
  {
    id: 87,
    name: "Whey Cider (6.5% ABV)",
    price: "79,000 VND",
    image: "../assets/img/products/TU_Cider.webp",
    type: "ThucUong",
    title:
      "Nước táo lên men làm từ nước whey chắt lọc trong quá trình sản xuất phô mai, mang hương vị độc đáo của dứa, quế và hoa bia Úc.",
  },
  {
    id: 88,
    name: "Bia 4P's Whey Stout (5.5% ABV)",
    price: "79,000 VND",
    image: "../assets/img/products/TU_Stout.webp",
    type: "ThucUong",
    title:
      "Loại bia đen sản xuất theo hướng bền vững khi được làm từ nước whey",
  },
  {
    id: 89,
    name: "Nước táo lên men",
    price: "44,000 VND",
    image: "../assets/img/products/TU_nuoctaolenmen.webp",
    type: "ThucUong",
    title:
      "Hương vị thanh mát, độc đáo của nước táo lên men tự nhiên, mang đến trải nghiệm mới lạ và sảng khoái.",
  },
  {
    id: 90,
    name: "Nước táo lên men vị dâu đỏ",
    price: "44,000 VND",
    image: "../assets/img/products/TU_nuoctaolenmenvidau.webp",
    type: "ThucUong",
    title:
      "Sự kết hợp hoàn hảo giữa nước táo lên men và vị ngọt thơm của dâu đỏ, mang đến hương vị tuyệt vời và mới mẻ.",
  },
  {
    id: 91,
    name: "Rượu Sake tự nhiên Niida-honke",
    price: "610,000 VND",
    image: "../assets/img/products/TU_Niida-honke.webp",
    type: "ThucUong",
    title:
      "Rượu Sake tự nhiên làm từ gạo hữu cơ được ủ trong suốt 1 năm mang lại vị ngọt nhẹ, nồng độ cồn dễ chịu và hương vị êm dịu. Được sản xuất bởi Niida-honke ở tỉnh Fukushima, Nhật Bản–một xưởng rượu thủ công được thành lập vào năm 1711. Họ chỉ sử dụng gạo hữu cơ nhà trồng không phân bón hoá học hoặc thuốc trừ sâu để sản xuất rượu sake này với phương pháp truyền thống.",
  },
  {
    id: 92,
    name: "Rượu Sangria đỏ Vang đỏ & trái cây",
    price: "250,000 VND",
    image: "../assets/img/products/TU_Sangriado(250k).webp",
    type: "ThucUong",
    title: "Hỗn hợp rượu vang đỏ cùng các loại trái cây và nguyên liệu khác",
  },
  {
    id: 93,
    name: "Rượu Sangria đỏ Vang đỏ & trái cây",
    price: "99,000 VND",
    image: "../assets/img/products/TU_Sangriado(99k).webp",
    type: "ThucUong",
    title: "Rượu vang đỏ trộn với trái cây và gia vị",
  },
  {
    id: 94,
    name: "Rượu Sangria trắng Vang trắng & trái cây",
    price: "250,000 VND",
    image: "../assets/img/products/TU_SangriaTrang(250k).webp",
    type: "ThucUong",
    title: "Hỗn hợp rượu vang trắng cùng các loại trái cây và nguyên liệu khác",
  },
  {
    id: 95,
    name: "Rượu Sangria trắng Vang trắng & trái cây",
    price: "99,000 VND",
    image: "../assets/img/products/TU_SangriaTrang(99k).webp",
    type: "ThucUong",
    title: "Rượu vang trắng trộn với trái cây và gia vị",
  },
  {
    id: 96,
    name: "Rượu vang trắng Chapel",
    price: "590,000 VND",
    image: "../assets/img/products/TU_vangtrangChapel.webp",
    type: "ThucUong",
    title:
      "Hương vị tinh tế và thanh khiết của rượu vang trắng Chapel, hoàn hảo cho những bữa tiệc sang trọng và các dịp đặc biệt.",
  },
  {
    id: 97,
    name: "Rượu Robertson Brut",
    price: "600,000 VND",
    image: "../assets/img/products/TU_RobertsonBurt.webp",
    type: "ThucUong",
    title:
      "Rượu vang sủi tăm Robertson Brut với hương vị tinh tế và sang trọng, thích hợp cho các buổi tiệc và dịp kỷ niệm đặc biệt.",
  },
  {
    id: 98,
    name: "Il Vei Ortugo, Ý Vang trắng tự nhiên",
    price: "770,000 VND",
    image: "../assets/img/products/TU_ilVeiOrtrugo.webp",
    type: "ThucUong",
    title: "Vang trắng tự nhiên từ Ý, hương lê và mơ cùng độ ngọt quyến rũ",
  },
];

// Lưu trữ sản phẩm vào localStorage
if (!localStorage.getItem("products")) {
  localStorage.setItem("products", JSON.stringify(products));
}

// Lưu trữ danh mục vào localStorage
if (!localStorage.getItem("categories")) {
  localStorage.setItem("categories", JSON.stringify(categories));
}
