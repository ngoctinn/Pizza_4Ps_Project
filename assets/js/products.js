// Tạo mảng các sản phẩm
const products = [
  {
    id: 1,
    name: "Pizza Tôm Xốt Tỏi Cay",
    price: "245,000 VND",
    image: "../assets/img/products/PZ_TomXotToiCay.webp",
    type: "Pizza",
    decribe:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, commodi facere. Totam quod repellat molestiae in cum. Pariatur tenetur, odio ab accusamus sed impedit. Alias cum reiciendis distinctio eligendi recusandae.",
  },
  {
    id: 2,
    name: "Pizza Margherita thịt nguội & Burrata",
    price: "398,000 VND",
    image: "../assets/img/products/PZ_MargheritaThitNguoi&Burrata.webp",
    type: "Pizza",
    decribe:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, commodi facere. Totam quod repellat molestiae in cum. Pariatur tenetur, odio ab accusamus sed impedit. Alias cum reiciendis distinctio eligendi recusandae.",
  },
  {
    id: 3,
    name: "Pizza 3 loại phô mai nhà làm",
    price: "198,000 VND",
    image: "../assets/img/products/PZ_3LoaiPMNL.webp",
    type: "Pizza",
    decribe:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, commodi facere. Totam quod repellat molestiae in cum. Pariatur tenetur, odio ab accusamus sed impedit. Alias cum reiciendis distinctio eligendi recusandae.",
  },
  {
    id: 4,
    name: "Pizza 4 loại phô mai nhà làm",
    price: "248,000 VND",
    image: "../assets/img/products/PZ_4LoaiPMNL.webp",
    type: "Pizza",
    decribe:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, commodi facere. Totam quod repellat molestiae in cum. Pariatur tenetur, odio ab accusamus sed impedit. Alias cum reiciendis distinctio eligendi recusandae.",
  },
  {
    id: 5,
    name: "Pizza 5 loại phô mai nhà làm",
    price: "298,000 VND",
    image: "../assets/img/products/PZ_5LoaiPMNL.webp",
    type: "Pizza",
    decribe:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, commodi facere. Totam quod repellat molestiae in cum. Pariatur tenetur, odio ab accusamus sed impedit. Alias cum reiciendis distinctio eligendi recusandae.",
  },
  {
    id: 6,
    name: "Pizza 3 loại phô mai nhà làm",
    price: "160,000 VND",
    image: "../assets/img/products/PZ_Margherita.webp",
    type: "Pizza",
    decribe:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, commodi facere. Totam quod repellat molestiae in cum. Pariatur tenetur, odio ab accusamus sed impedit. Alias cum reiciendis distinctio eligendi recusandae.",
  },
  {
    id: 7,
    name: "Pizza Margherita thịt nguội",
    price: "331,000 VND",
    image: "../assets/img/products/PZ_MargheritaThitNguoi.webp",
    type: "Pizza",
    decribe:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, commodi facere. Totam quod repellat molestiae in cum. Pariatur tenetur, odio ab accusamus sed impedit. Alias cum reiciendis distinctio eligendi recusandae.",
  },
  {
    id: 8,
    name: "Pizza Margherita & 2 loại xúc xích Ý",
    price: "238,000 VND",
    image: "../assets/img/products/PZ_Margherita&2LoaiXucXichY.webp",
    type: "Pizza",
    decribe:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, commodi facere. Totam quod repellat molestiae in cum. Pariatur tenetur, odio ab accusamus sed impedit. Alias cum reiciendis distinctio eligendi recusandae.",
  },
  {
    id: 9,
    name: "Pizza Margherita cà tím nướng",
    price: "198,000 VND",
    image: "../assets/img/products/PZ_MargheritaCaTimNuong.webp",
    type: "Pizza",
    decribe:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, commodi facere. Totam quod repellat molestiae in cum. Pariatur tenetur, odio ab accusamus sed impedit. Alias cum reiciendis distinctio eligendi recusandae.",
  },
  {
    id: 10,
    name: "Pizza cá hồi xốt kem Miso",
    price: "278,000 VND",
    image: "../assets/img/products/PZ_CaHoiXotKemMiSo.webp",
    type: "Pizza",
    decribe:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, commodi facere. Totam quod repellat molestiae in cum. Pariatur tenetur, odio ab accusamus sed impedit. Alias cum reiciendis distinctio eligendi recusandae.",
  },
  {
    id: 11,
    name: "Pizza hải sản cay với phô mai hun khói",
    price: "274,000 VND",
    image: "../assets/img/products/PZ_haisancay&pmhunkhoi.webp",
    type: "Pizza",
    decribe:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, commodi facere. Totam quod repellat molestiae in cum. Pariatur tenetur, odio ab accusamus sed impedit. Alias cum reiciendis distinctio eligendi recusandae.",
  },
  {
    id: 12,
    name: "Pizza tôm và xốt Mayonnaise",
    price: "254,000 VND",
    image: "../assets/img/products/PZ_tom&mayonnaise.webp",
    type: "Pizza",
    decribe:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, commodi facere. Totam quod repellat molestiae in cum. Pariatur tenetur, odio ab accusamus sed impedit. Alias cum reiciendis distinctio eligendi recusandae.",
  },
  {
    id: 13,
    name: "Pizza gà xốt Teriyaki",
    price: "218,000 VND",
    image: "../assets/img/products/PZ_GaXotTeriyaki.webp",
    type: "Pizza",
    decribe:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, commodi facere. Totam quod repellat molestiae in cum. Pariatur tenetur, odio ab accusamus sed impedit. Alias cum reiciendis distinctio eligendi recusandae.",
  },
  {
    id: 14,
    name: "Pizza Camembert và xốt nấm thịt nguội",
    price: "208,000 VND",
    image: "../assets/img/products/PZ_Camembert&XotNamThitNguoi.webp",
    type: "Pizza",
    decribe:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, commodi facere. Totam quod repellat molestiae in cum. Pariatur tenetur, odio ab accusamus sed impedit. Alias cum reiciendis distinctio eligendi recusandae.",
  },
  {
    id: 15,
    name: "Pizza 4 loại nấm",
    price: "198,000 VND",
    image: "../assets/img/products/PZ_4LoaiNam1.webp",
    type: "Pizza",
    decribe:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, commodi facere. Totam quod repellat molestiae in cum. Pariatur tenetur, odio ab accusamus sed impedit. Alias cum reiciendis distinctio eligendi recusandae.",
  },
  {
    id: 16,
    name: "Pizza 4 loại nấm",
    price: "198,000 VND",
    image: "../assets/img/products/PZ_4LoaiNam2.webp",
    type: "Pizza",
    decribe:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, commodi facere. Totam quod repellat molestiae in cum. Pariatur tenetur, odio ab accusamus sed impedit. Alias cum reiciendis distinctio eligendi recusandae.",
  },
  {
    id: 17,
    name: "Pizza xốt bí ngòi quế tây và hoa",
    price: "178,000 VND",
    image: "../assets/img/products/PZ_XotBiNgoiQueTay&Hoa.webp",
    type: "Pizza",
    decribe:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, commodi facere. Totam quod repellat molestiae in cum. Pariatur tenetur, odio ab accusamus sed impedit. Alias cum reiciendis distinctio eligendi recusandae.",
  },
  {
    id: 18,
    name: "Xốt bí ngòi quế tây với phô mai Latic nhà làm",
    price: "178,000 VND",
    image: "../assets/img/products/PZ_xotbingoiquetay&pmLactic.webp",
    type: "Pizza",
    decribe:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, commodi facere. Totam quod repellat molestiae in cum. Pariatur tenetur, odio ab accusamus sed impedit. Alias cum reiciendis distinctio eligendi recusandae.",
  },
  {
    id: 19,
    name: "Xốt bí ngòi quế tây với phô mai Mozzarella nhà làm",
    price: "178,000 VND",
    image: "../assets/img/products/PZ_XotBiNgoiQueTay&PMMozzarella.webp",
    type: "Pizza",
    decribe:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, commodi facere. Totam quod repellat molestiae in cum. Pariatur tenetur, odio ab accusamus sed impedit. Alias cum reiciendis distinctio eligendi recusandae.",
  },
  {
    id: 20,
    name: "Pizza gà Tandoori",
    price: "218,000 VND",
    image: "../assets/img/products/PZ_gaTandooi.webp",
    type: "Pizza",
    decribe:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, commodi facere. Totam quod repellat molestiae in cum. Pariatur tenetur, odio ab accusamus sed impedit. Alias cum reiciendis distinctio eligendi recusandae.",
  },
  {
    id: 21,
    name: "Pizza cải xoăn với Ricotta chanh",
    price: "188,000 VND",
    image: "../assets/img/products/PZ_CaiXoan&RicottaChanh.webp",
    type: "Pizza",
    decribe:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, commodi facere. Totam quod repellat molestiae in cum. Pariatur tenetur, odio ab accusamus sed impedit. Alias cum reiciendis distinctio eligendi recusandae.",
  },
  {
    id: 22,
    name: "Pizza sò điệp với xốt Miso ngọt",
    price: "420,000 VND",
    image: "../assets/img/products/PZ_SoDiep&XotMisoNgot.webp",
    type: "Pizza",
    decribe:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, commodi facere. Totam quod repellat molestiae in cum. Pariatur tenetur, odio ab accusamus sed impedit. Alias cum reiciendis distinctio eligendi recusandae.",
  },
  {
    id: 23,
    name: "Pizza thịt bò cay kiểu Kebab",
    price: "294,000 VND",
    image: "../assets/img/products/PZ_ThitBoCayKieuKebab.webp",
    type: "Pizza",
    decribe:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, commodi facere. Totam quod repellat molestiae in cum. Pariatur tenetur, odio ab accusamus sed impedit. Alias cum reiciendis distinctio eligendi recusandae.",
  },
  {
    id: 24,
    name: "Pizza bò kho",
    price: "248,000 VND",
    image: "../assets/img/products/PZ_BoKho.webp",
    type: "Pizza",
    decribe:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, commodi facere. Totam quod repellat molestiae in cum. Pariatur tenetur, odio ab accusamus sed impedit. Alias cum reiciendis distinctio eligendi recusandae.",
  },
  {
    id: 25,
    name: "(Chỉ có ở Đà Nẵng) Pizza xúc xích cay",
    price: "170,000 VND",
    image: "../assets/img/products/PZ_XucXichCay.webp",
    type: "Pizza",
    decribe:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, commodi facere. Totam quod repellat molestiae in cum. Pariatur tenetur, odio ab accusamus sed impedit. Alias cum reiciendis distinctio eligendi recusandae.",
  },
  {
    id: 26,
    name: "(Chỉ có ở Đà Nẵng) Pizza trứng, cải bó xôi",
    price: "160,000 VND",
    image: "../assets/img/products/PZ_trung&caiboxoi.webp",
    type: "Pizza",
    decribe:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, commodi facere. Totam quod repellat molestiae in cum. Pariatur tenetur, odio ab accusamus sed impedit. Alias cum reiciendis distinctio eligendi recusandae.",
  },
  {
    id: 27,
    name: "(Chỉ có ở Đà Nẵng) Pizza Hawaiian 4P's",
    price: "160,000 VND",
    image: "../assets/img/products/PZ_Hawaiian.webp",
    type: "Pizza",
    decribe:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, commodi facere. Totam quod repellat molestiae in cum. Pariatur tenetur, odio ab accusamus sed impedit. Alias cum reiciendis distinctio eligendi recusandae.",
  },
  {
    id: 28,
    name: "Các loại phô mai nhà làm (S)",
    price: "109,000 VND",
    image: "../assets/img/products/KV_cacloaiPMNL(S).webp",
    type: "KhaiVi",
    decribe:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, commodi facere. Totam quod repellat molestiae in cum. Pariatur tenetur, odio ab accusamus sed impedit. Alias cum reiciendis distinctio eligendi recusandae.",
  },
  {
    id: 29,
    name: "Các loại phô mai nhà làm (L)",
    price: "198,000 VND",
    image: "../assets/img/products/KV_cacloaiPMNL(L).webp",
    type: "KhaiVi",
    decribe:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, commodi facere. Totam quod repellat molestiae in cum. Pariatur tenetur, odio ab accusamus sed impedit. Alias cum reiciendis distinctio eligendi recusandae.",
  },
  {
    id: 30,
    name: "Thịt nguội cuộn xoài kèm xốt chanh dây",
    price: "144,000 VND",
    image: "../assets/img/products/KV_thitnguoicuonxoai&xotchanhday.webp",
    type: "KhaiVi",
    decribe:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, commodi facere. Totam quod repellat molestiae in cum. Pariatur tenetur, odio ab accusamus sed impedit. Alias cum reiciendis distinctio eligendi recusandae.",
  },
  {
    id: 31,
    name: "(1pc) Camembert kẹp Mascarpone Truffle",
    price: "47,000 VND",
    image: "../assets/img/products/KV_(1pc)Camembert&MascarponeTruffle.webp",
    type: "KhaiVi",
    decribe:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, commodi facere. Totam quod repellat molestiae in cum. Pariatur tenetur, odio ab accusamus sed impedit. Alias cum reiciendis distinctio eligendi recusandae.",
  },
  {
    id: 32,
    name: "(2pc) Camembert kẹp Mascarpone Truffle",
    price: "94,000 VND",
    image: "../assets/img/products/KV_(2pc)Camembert&MascarponeTruffle.webp",
    type: "KhaiVi",
    decribe:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, commodi facere. Totam quod repellat molestiae in cum. Pariatur tenetur, odio ab accusamus sed impedit. Alias cum reiciendis distinctio eligendi recusandae.",
  },
  {
    id: 33,
    name: "Khoai tây Đức bỏ lò",
    price: "72,000 VND",
    image: "../assets/img/products/KV_khoaitayDucbolo.webp",
    type: "KhaiVi",
    decribe:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, commodi facere. Totam quod repellat molestiae in cum. Pariatur tenetur, odio ab accusamus sed impedit. Alias cum reiciendis distinctio eligendi recusandae.",
  },
  {
    id: 34,
    name: "Súp nghêu hầm",
    price: "92,000 VND",
    image: "../assets/img/products/KV_supngheuham.webp",
    type: "KhaiVi",
    decribe:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, commodi facere. Totam quod repellat molestiae in cum. Pariatur tenetur, odio ab accusamus sed impedit. Alias cum reiciendis distinctio eligendi recusandae.",
  },
  {
    id: 35,
    name: "Súp cà chua thịt viên Ý",
    price: "82,000 VND",
    image: "../assets/img/products/KV_supcachuathitvienY.webp",
    type: "KhaiVi",
    decribe:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, commodi facere. Totam quod repellat molestiae in cum. Pariatur tenetur, odio ab accusamus sed impedit. Alias cum reiciendis distinctio eligendi recusandae.",
  },
  {
    id: 36,
    name: "Gà rán với gia vị phương Đông, 2 miếng",
    price: "98,000 VND",
    image: "../assets/img/products/KV_garan&giaviphuongDong(2mieng).webp",
    type: "KhaiVi",
    decribe:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, commodi facere. Totam quod repellat molestiae in cum. Pariatur tenetur, odio ab accusamus sed impedit. Alias cum reiciendis distinctio eligendi recusandae.",
  },
  {
    id: 37,
    name: "Thịt nguội cuộn Ricotta & Rocket 1pc",
    price: "44,000 VND",
    image: "../assets/img/products/KV_thitnguoicuonRicotta&Rocket.webp",
    type: "KhaiVi",
    decribe:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, commodi facere. Totam quod repellat molestiae in cum. Pariatur tenetur, odio ab accusamus sed impedit. Alias cum reiciendis distinctio eligendi recusandae.",
  },
  {
    id: 38,
    name: "Set thịt nguội phô mai nhà làm (lớn)",
    price: "334,000 VND",
    image: "../assets/img/products/KV_setthitnguoiPMNL(lon).webp",
    type: "KhaiVi",
    decribe:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, commodi facere. Totam quod repellat molestiae in cum. Pariatur tenetur, odio ab accusamus sed impedit. Alias cum reiciendis distinctio eligendi recusandae.",
  },
  {
    id: 39,
    name: "Set thịt nguội phô mai nhà làm (nhỏ)",
    price: "172,000 VND",
    image: "../assets/img/products/KV_setthitnguoiPMNL(nho).webp",
    type: "KhaiVi",
    decribe:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, commodi facere. Totam quod repellat molestiae in cum. Pariatur tenetur, odio ab accusamus sed impedit. Alias cum reiciendis distinctio eligendi recusandae.",
  },
  {
    id: 40,
    name: "Burrata với cá cơm",
    price: "198,000 VND",
    image: "../assets/img/products/KV_Burrata&cacom.webp",
    type: "KhaiVi",
    decribe:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, commodi facere. Totam quod repellat molestiae in cum. Pariatur tenetur, odio ab accusamus sed impedit. Alias cum reiciendis distinctio eligendi recusandae.",
  },
  {
    id: 41,
    name: "Burrata xốt bò cay (L)",
    price: "198,000 VND",
    image: "../assets/img/products/KV_Burrataxotbocay(L).webp",
    type: "KhaiVi",
    decribe:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, commodi facere. Totam quod repellat molestiae in cum. Pariatur tenetur, odio ab accusamus sed impedit. Alias cum reiciendis distinctio eligendi recusandae.",
  },
  {
    id: 42,
    name: "Burrata xốt bò cay (S)",
    price: "98,000 VND",
    image: "../assets/img/products/KV_Burrataxotbocay(S).webp",
    type: "KhaiVi",
    decribe:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, commodi facere. Totam quod repellat molestiae in cum. Pariatur tenetur, odio ab accusamus sed impedit. Alias cum reiciendis distinctio eligendi recusandae.",
  },
  {
    id: 43,
    name: "khoai tây nghiền với phô mai Raclette",
    price: "98,000 VND",
    image: "../assets/img/products/KV_khoaitaynghien&pmRaclette.webp",
    type: "KhaiVi",
    decribe:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, commodi facere. Totam quod repellat molestiae in cum. Pariatur tenetur, odio ab accusamus sed impedit. Alias cum reiciendis distinctio eligendi recusandae.",
  },
  {
    id: 44,
    name: "Pate gan gà",
    price: "98,000 VND",
    image: "../assets/img/products/KV_pateganga.webp",
    type: "KhaiVi",
    decribe:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, commodi facere. Totam quod repellat molestiae in cum. Pariatur tenetur, odio ab accusamus sed impedit. Alias cum reiciendis distinctio eligendi recusandae.",
  },
  {
    id: 45,
    name: "Salad cá hồi, bơ và phô mai Ricotta",
    price: "158,000 VND",
    image: "../assets/img/products/SL_cahoibo&pmRicotta.webp",
    type: "Salad",
    decribe:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, commodi facere. Totam quod repellat molestiae in cum. Pariatur tenetur, odio ab accusamus sed impedit. Alias cum reiciendis distinctio eligendi recusandae.",
  },
  {
    id: 46,
    name: "Salad cải xoăn hữu cơ",
    price: "105,000 VND",
    image: "../assets/img/products/SL_caixoan.webp",
    type: "Salad",
    decribe:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, commodi facere. Totam quod repellat molestiae in cum. Pariatur tenetur, odio ab accusamus sed impedit. Alias cum reiciendis distinctio eligendi recusandae.",
  },
  {
    id: 47,
    name: "Mozzarella nhà làm và cà chua Đà Lạt",
    price: "105,000 VND",
    image: "../assets/img/products/SL_Mozzarella&cachuaDaLat.webp",
    type: "Salad",
    decribe:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, commodi facere. Totam quod repellat molestiae in cum. Pariatur tenetur, odio ab accusamus sed impedit. Alias cum reiciendis distinctio eligendi recusandae.",
  },
  {
    id: 48,
    name: "Phô mai Burrata & rau Rocket hữu cơ",
    price: "185,000 VND",
    image: "../assets/img/products/SL_pmBurrata&rauRocket.webp",
    type: "Salad",
    decribe:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, commodi facere. Totam quod repellat molestiae in cum. Pariatur tenetur, odio ab accusamus sed impedit. Alias cum reiciendis distinctio eligendi recusandae.",
  },
  {
    id: 49,
    name: "Rau Rocket hữu cơ và cà chua",
    price: "81,000 VND",
    image: "../assets/img/products/SL_rauRocket&cachua.webp",
    type: "Salad",
    decribe:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, commodi facere. Totam quod repellat molestiae in cum. Pariatur tenetur, odio ab accusamus sed impedit. Alias cum reiciendis distinctio eligendi recusandae.",
  },
  {
    id: 50,
    name: "Salad rau xanh với xốt nhà làm",
    price: "85,000 VND",
    image: "../assets/img/products/SL_rauxanh&xotnhalam.webp",
    type: "Salad",
    decribe:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, commodi facere. Totam quod repellat molestiae in cum. Pariatur tenetur, odio ab accusamus sed impedit. Alias cum reiciendis distinctio eligendi recusandae.",
  },
  {
    id: 51,
    name: "Thịt nguội cuộn Ricotta & Rocket 2pc",
    price: "88,000 VND",
    image: "../assets/img/products/SL_thitnguoicuonRicotta&Rocket.webp",
    type: "Salad",
    decribe:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, commodi facere. Totam quod repellat molestiae in cum. Pariatur tenetur, odio ab accusamus sed impedit. Alias cum reiciendis distinctio eligendi recusandae.",
  },
  {
    id: 52,
    name: "Salad tôm và bơ",
    price: "158,000 VND",
    image: "../assets/img/products/SL_tom&bo.webp",
    type: "Salad",
    decribe:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, commodi facere. Totam quod repellat molestiae in cum. Pariatur tenetur, odio ab accusamus sed impedit. Alias cum reiciendis distinctio eligendi recusandae.",
  },
  {
    id: 53,
    name: "Trái cây, Burrata và thịt nguội (nhỏ)",
    price: "129,000 VND",
    image: "../assets/img/products/SL_traicayBurrata&thitnguoi(nho).webp",
    type: "Salad",
    decribe:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, commodi facere. Totam quod repellat molestiae in cum. Pariatur tenetur, odio ab accusamus sed impedit. Alias cum reiciendis distinctio eligendi recusandae.",
  },
  {
    id: 54,
    name: "Trái cây, Burrata và thịt nguội (lớn)",
    price: "238,000 VND",
    image: "../assets/img/products/SL_traicayBurrata&thitnguoi(lon).webp",
    type: "Salad",
    decribe:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, commodi facere. Totam quod repellat molestiae in cum. Pariatur tenetur, odio ab accusamus sed impedit. Alias cum reiciendis distinctio eligendi recusandae.",
  },
  {
    id: 55,
    name: "Cơm Ý Risotto mực",
    price: "165,000 VND",
    image: "../assets/img/products/MC_comyRisottomuc.webp",
    type: "MonChinh",
    decribe:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, commodi facere. Totam quod repellat molestiae in cum. Pariatur tenetur, odio ab accusamus sed impedit. Alias cum reiciendis distinctio eligendi recusandae.",
  },
  {
    id: 56,
    name: "Mì Fettuccine tươi xốt kem cá hồi",
    price: "194,000 VND",
    image: "../assets/img/products/MC_Fettuccine&xotkemcahoi.webp",
    type: "MonChinh",
    decribe:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, commodi facere. Totam quod repellat molestiae in cum. Pariatur tenetur, odio ab accusamus sed impedit. Alias cum reiciendis distinctio eligendi recusandae.",
  },
  {
    id: 57,
    name: "Mì Fettuccine tươi xốt kem tôm và nấm",
    price: "198,000 VND",
    image: "../assets/img/products/MC_Fettuccine&xottomnam.webp",
    type: "MonChinh",
    decribe:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, commodi facere. Totam quod repellat molestiae in cum. Pariatur tenetur, odio ab accusamus sed impedit. Alias cum reiciendis distinctio eligendi recusandae.",
  },
  {
    id: 58,
    name: "Mì Lasagna đút lò",
    price: "178,000 VND",
    image: "../assets/img/products/MC_Lasagnadutlo.webp",
    type: "MonChinh",
    decribe:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, commodi facere. Totam quod repellat molestiae in cum. Pariatur tenetur, odio ab accusamus sed impedit. Alias cum reiciendis distinctio eligendi recusandae.",
  },
  {
    id: 59,
    name: "Mì Ý Arrabbiata với phô mai Mascarpone",
    price: "165,000 VND",
    image: "../assets/img/products/MC_miyArrabbiata&pmMascarpone.webp",
    type: "MonChinh",
    decribe:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, commodi facere. Totam quod repellat molestiae in cum. Pariatur tenetur, odio ab accusamus sed impedit. Alias cum reiciendis distinctio eligendi recusandae.",
  },
  {
    id: 60,
    name: "Mì Ý bò bằm và phô mai hun khói",
    price: "168,000 VND",
    image: "../assets/img/products/MC_miybobam&pmhunkhoi.webp",
    type: "MonChinh",
    decribe:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, commodi facere. Totam quod repellat molestiae in cum. Pariatur tenetur, odio ab accusamus sed impedit. Alias cum reiciendis distinctio eligendi recusandae.",
  },
  {
    id: 61,
    name: "Mì Ý cua và xốt kem cà chua",
    price: "154,000 VND",
    image: "../assets/img/products/MC_miycua&xotkemcachua.webp",
    type: "MonChinh",
    decribe:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, commodi facere. Totam quod repellat molestiae in cum. Pariatur tenetur, odio ab accusamus sed impedit. Alias cum reiciendis distinctio eligendi recusandae.",
  },
  {
    id: 62,
    name: "Mì Ý nghêu và xốt quế tây",
    price: "165,000 VND",
    image: "../assets/img/products/MC_miyngheu&xotquetay.webp",
    type: "MonChinh",
    decribe:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, commodi facere. Totam quod repellat molestiae in cum. Pariatur tenetur, odio ab accusamus sed impedit. Alias cum reiciendis distinctio eligendi recusandae.",
  },
  {
    id: 63,
    name: "(Chỉ có ở Đà Nẵng) Mì Ý tôm tỏi cay",
    price: "188,000 VND",
    image: "../assets/img/products/MC_miytomtoicay.webp",
    type: "MonChinh",
    decribe:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, commodi facere. Totam quod repellat molestiae in cum. Pariatur tenetur, odio ab accusamus sed impedit. Alias cum reiciendis distinctio eligendi recusandae.",
  },
  {
    id: 64,
    name: "Mì Ý xốt cà chua và phô mai Mascarpone",
    price: "150,000 VND",
    image: "../assets/img/products/MC_miyxotcachua&mpMascarpone.webp",
    type: "MonChinh",
    decribe:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, commodi facere. Totam quod repellat molestiae in cum. Pariatur tenetur, odio ab accusamus sed impedit. Alias cum reiciendis distinctio eligendi recusandae.",
  },
  {
    id: 65,
    name: "Bánh phô mai 2 lớp",
    price: "75,000 VND",
    image: "../assets/img/products/TM_banhphomai2lop.webp",
    type: "TrangMieng",
    decribe:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, commodi facere. Totam quod repellat molestiae in cum. Pariatur tenetur, odio ab accusamus sed impedit. Alias cum reiciendis distinctio eligendi recusandae.",
  },
  {
    id: 66,
    name: "Pudding kem trứng (90g)",
    price: "37,000 VND",
    image: "../assets/img/products/TM_puddingkemtrung.webp",
    type: "TrangMieng",
    decribe:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, commodi facere. Totam quod repellat molestiae in cum. Pariatur tenetur, odio ab accusamus sed impedit. Alias cum reiciendis distinctio eligendi recusandae.",
  },
  {
    id: 67,
    name: "Pudding matcha (90g)",
    price: "37,000 VND",
    image: "../assets/img/products/TM_puddingmatcha.webp",
    type: "TrangMieng",
    decribe:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, commodi facere. Totam quod repellat molestiae in cum. Pariatur tenetur, odio ab accusamus sed impedit. Alias cum reiciendis distinctio eligendi recusandae.",
  },
  {
    id: 68,
    name: "Sữa chua kiểu Hy Lạp (90g)",
    price: "40,000 VND",
    image: "../assets/img/products/TM_suachuaHyLap.webp",
    type: "TrangMieng",
    decribe:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, commodi facere. Totam quod repellat molestiae in cum. Pariatur tenetur, odio ab accusamus sed impedit. Alias cum reiciendis distinctio eligendi recusandae.",
  },
  {
    id: 69,
    name: "Sữa chua ít đường (90g)",
    price: "27,000 VND",
    image: "../assets/img/products/TM_suachuaitduong.webp",
    type: "TrangMieng",
    decribe:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, commodi facere. Totam quod repellat molestiae in cum. Pariatur tenetur, odio ab accusamus sed impedit. Alias cum reiciendis distinctio eligendi recusandae.",
  },
  {
    id: 70,
    name: "Sữa chua không đường (90g)",
    price: "27,000 VND",
    image: "../assets/img/products/TM_suachuakhongduong.webp",
    type: "TrangMieng",
    decribe:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, commodi facere. Totam quod repellat molestiae in cum. Pariatur tenetur, odio ab accusamus sed impedit. Alias cum reiciendis distinctio eligendi recusandae.",
  },
  {
    id: 71,
    name: "Sữa chua xốt chanh dây (90g)",
    price: "30,000 VND",
    image: "../assets/img/products/TM_suachuaxotchanhday.webp",
    type: "TrangMieng",
    decribe:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, commodi facere. Totam quod repellat molestiae in cum. Pariatur tenetur, odio ab accusamus sed impedit. Alias cum reiciendis distinctio eligendi recusandae.",
  },
  {
    id: 72,
    name: "Sữa chua xốt dâu (90g)",
    price: "30,000 VND",
    image: "../assets/img/products/TM_suachuaxotdau.webp",
    type: "TrangMieng",
    decribe:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, commodi facere. Totam quod repellat molestiae in cum. Pariatur tenetur, odio ab accusamus sed impedit. Alias cum reiciendis distinctio eligendi recusandae.",
  },
  {
    id: 73,
    name: "Nước ép rau Rocket hữu cơ",
    price: "65,000 VND",
    image: "../assets/img/products/TU_rauRocket.webp",
    type: "Pizza",
    decribe:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, commodi facere. Totam quod repellat molestiae in cum. Pariatur tenetur, odio ab accusamus sed impedit. Alias cum reiciendis distinctio eligendi recusandae.",
  },
  {
    id: 74,
    name: "Nước ép dưa hấu",
    price: "57,000 VND",
    image: "../assets/img/products/TU_duahau.webp",
    type: "Pizza",
    decribe:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, commodi facere. Totam quod repellat molestiae in cum. Pariatur tenetur, odio ab accusamus sed impedit. Alias cum reiciendis distinctio eligendi recusandae.",
  },
  {
    id: 75,
    name: "Nước ép dứa",
    price: "57,000 VND",
    image: "../assets/img/products/TU_dua.webp",
    type: "Pizza",
    decribe:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, commodi facere. Totam quod repellat molestiae in cum. Pariatur tenetur, odio ab accusamus sed impedit. Alias cum reiciendis distinctio eligendi recusandae.",
  },
  {
    id: 76,
    name: "Nước ép cam",
    price: "59,000 VND",
    image: "../assets/img/products/TU_cam.webp",
    type: "Pizza",
    decribe:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, commodi facere. Totam quod repellat molestiae in cum. Pariatur tenetur, odio ab accusamus sed impedit. Alias cum reiciendis distinctio eligendi recusandae.",
  },
  {
    id: 77,
    name: "Nước chanh",
    price: "42,000 VND",
    image: "../assets/img/products/TU_chanh.webp",
    type: "Pizza",
    decribe:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, commodi facere. Totam quod repellat molestiae in cum. Pariatur tenetur, odio ab accusamus sed impedit. Alias cum reiciendis distinctio eligendi recusandae.",
  },
  {
    id: 78,
    name: "Coca Cola",
    price: "39,000 VND",
    image: "../assets/img/products/TU_coca.webp",
    type: "Pizza",
    decribe:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, commodi facere. Totam quod repellat molestiae in cum. Pariatur tenetur, odio ab accusamus sed impedit. Alias cum reiciendis distinctio eligendi recusandae.",
  },
  {
    id: 79,
    name: "Coca Cola không đường",
    price: "39,000 VND",
    image: "../assets/img/products/TU_cocazero.webp",
    type: "Pizza",
    decribe:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, commodi facere. Totam quod repellat molestiae in cum. Pariatur tenetur, odio ab accusamus sed impedit. Alias cum reiciendis distinctio eligendi recusandae.",
  },
  {
    id: 80,
    name: "Sprite",
    price: "39,000 VND",
    image: "../assets/img/products/TU_sprite.webp",
    type: "Pizza",
    decribe:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, commodi facere. Totam quod repellat molestiae in cum. Pariatur tenetur, odio ab accusamus sed impedit. Alias cum reiciendis distinctio eligendi recusandae.",
  },
  {
    id: 81,
    name: "Bia Heineken không cồn",
    price: "44,000 VND",
    image: "../assets/img/products/TU_Heinkenkhongcon.webp",
    type: "Pizza",
    decribe:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, commodi facere. Totam quod repellat molestiae in cum. Pariatur tenetur, odio ab accusamus sed impedit. Alias cum reiciendis distinctio eligendi recusandae.",
  },
  {
    id: 82,
    name: "Bộ 6 loại bia Original của 4P's",
    price: "440,000 VND",
    image: "../assets/img/products/TU_bo6loaibia.webp",
    type: "Pizza",
    decribe:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, commodi facere. Totam quod repellat molestiae in cum. Pariatur tenetur, odio ab accusamus sed impedit. Alias cum reiciendis distinctio eligendi recusandae.",
  },
  {
    id: 83,
    name: "Bia 4P's Mikan (5.0% ABV)",
    price: "79,000 VND",
    image: "../assets/img/products/TU_Mikan.webp",
    type: "Pizza",
    decribe:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, commodi facere. Totam quod repellat molestiae in cum. Pariatur tenetur, odio ab accusamus sed impedit. Alias cum reiciendis distinctio eligendi recusandae.",
  },
  {
    id: 84,
    name: "Bia KAGUA Roast (6.2% ABV)",
    price: "79,000 VND",
    image: "../assets/img/products/TU_KAGUARoast.webp",
    type: "Pizza",
    decribe:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, commodi facere. Totam quod repellat molestiae in cum. Pariatur tenetur, odio ab accusamus sed impedit. Alias cum reiciendis distinctio eligendi recusandae.",
  },
  {
    id: 85,
    name: "Bia Premium Lager(5.5% ABV)",
    price: "79,000 VND",
    image: "../assets/img/products/TU_PremiumLager.webp",
    type: "Pizza",
    decribe:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, commodi facere. Totam quod repellat molestiae in cum. Pariatur tenetur, odio ab accusamus sed impedit. Alias cum reiciendis distinctio eligendi recusandae.",
  },
  {
    id: 86,
    name: "Bia Sesion IPA (4.5% ABV)",
    price: "79,000 VND",
    image: "../assets/img/products/TU_SessionIPA.webp",
    type: "Pizza",
    decribe:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, commodi facere. Totam quod repellat molestiae in cum. Pariatur tenetur, odio ab accusamus sed impedit. Alias cum reiciendis distinctio eligendi recusandae.",
  },
  {
    id: 87,
    name: "Whey Cider (6.5% ABV)",
    price: "79,000 VND",
    image: "../assets/img/products/TU_Cider.webp",
    type: "Pizza",
    decribe:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, commodi facere. Totam quod repellat molestiae in cum. Pariatur tenetur, odio ab accusamus sed impedit. Alias cum reiciendis distinctio eligendi recusandae.",
  },
  {
    id: 88,
    name: "Bia 4P's Whey Stout (5.5% ABV)",
    price: "79,000 VND",
    image: "../assets/img/products/TU_Stout.webp",
    type: "Pizza",
    decribe:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, commodi facere. Totam quod repellat molestiae in cum. Pariatur tenetur, odio ab accusamus sed impedit. Alias cum reiciendis distinctio eligendi recusandae.",
  },
  {
    id: 89,
    name: "Nước táo lên men",
    price: "44,000 VND",
    image: "../assets/img/products/TU_nuoctaolenmen.webp",
    type: "Pizza",
    decribe:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, commodi facere. Totam quod repellat molestiae in cum. Pariatur tenetur, odio ab accusamus sed impedit. Alias cum reiciendis distinctio eligendi recusandae.",
  },
  {
    id: 90,
    name: "Nước táo lên men vị dâu đỏ",
    price: "44,000 VND",
    image: "../assets/img/products/TU_nuoctaolenmenvidau.webp",
    type: "Pizza",
    decribe:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, commodi facere. Totam quod repellat molestiae in cum. Pariatur tenetur, odio ab accusamus sed impedit. Alias cum reiciendis distinctio eligendi recusandae.",
  },
  {
    id: 91,
    name: "Rượu Sake tự nhiên Niida-honke",
    price: "610,000 VND",
    image: "../assets/img/products/TU_Niida-honke.webp",
    type: "Pizza",
    decribe:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, commodi facere. Totam quod repellat molestiae in cum. Pariatur tenetur, odio ab accusamus sed impedit. Alias cum reiciendis distinctio eligendi recusandae.",
  },
  {
    id: 92,
    name: "Rượu Sangria đỏ Vang đỏ & trái cây",
    price: "250,000 VND",
    image: "../assets/img/products/TU_Sangriado(250k).webp",
    type: "Pizza",
    decribe:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, commodi facere. Totam quod repellat molestiae in cum. Pariatur tenetur, odio ab accusamus sed impedit. Alias cum reiciendis distinctio eligendi recusandae.",
  },
  {
    id: 93,
    name: "Rượu Sangria đỏ Vang đỏ & trái cây",
    price: "99,000 VND",
    image: "../assets/img/products/TU_Sangriado(99k).webp",
    type: "Pizza",
    decribe:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, commodi facere. Totam quod repellat molestiae in cum. Pariatur tenetur, odio ab accusamus sed impedit. Alias cum reiciendis distinctio eligendi recusandae.",
  },
  {
    id: 94,
    name: "Rượu Sangria trắng Vang trắng & trái cây",
    price: "250,000 VND",
    image: "../assets/img/products/TU_SangriaTrang(250k).webp",
    type: "Pizza",
    decribe:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, commodi facere. Totam quod repellat molestiae in cum. Pariatur tenetur, odio ab accusamus sed impedit. Alias cum reiciendis distinctio eligendi recusandae.",
  },
  {
    id: 95,
    name: "Rượu Sangria trắng Vang trắng & trái cây",
    price: "99,000 VND",
    image: "../assets/img/products/TU_SangriaTrang(99k).webp",
    type: "Pizza",
    decribe:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, commodi facere. Totam quod repellat molestiae in cum. Pariatur tenetur, odio ab accusamus sed impedit. Alias cum reiciendis distinctio eligendi recusandae.",
  },
  {
    id: 96,
    name: "Rượu vang trắng Chapel",
    price: "590,000 VND",
    image: "../assets/img/products/TU_vangtrangChapel.webp",
    type: "Pizza",
    decribe:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, commodi facere. Totam quod repellat molestiae in cum. Pariatur tenetur, odio ab accusamus sed impedit. Alias cum reiciendis distinctio eligendi recusandae.",
  },
  {
    id: 97,
    name: "Rượu Robertson Brut",
    price: "600,000 VND",
    image: "../assets/img/products/TU_RobertsonBurt.webp",
    type: "Pizza",
    decribe:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, commodi facere. Totam quod repellat molestiae in cum. Pariatur tenetur, odio ab accusamus sed impedit. Alias cum reiciendis distinctio eligendi recusandae.",
  },
  {
    id: 98,
    name: "Il Vei Ortugo, Ý Vang trắng tự nhiên",
    price: "770,000 VND",
    image: "../assets/img/products/TU_ilVeiOrtrugo.webp",
    type: "Pizza",
    decribe:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, commodi facere. Totam quod repellat molestiae in cum. Pariatur tenetur, odio ab accusamus sed impedit. Alias cum reiciendis distinctio eligendi recusandae.",
  },
];

// Lưu trữ sản phẩm vào localStorage
localStorage.setItem("products", JSON.stringify(products));
