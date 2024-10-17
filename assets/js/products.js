// Tạo mảng các sản phẩm
const products = [
  {
    id: 1,
    name: "Pizza Tôm Xốt Tỏi Cay",
    price: "245,000 VND",
    image: "../assets/img/products/PZ_TomXotToiCay.webp",
  },
  {
    id: 2,
    name: "Pizza Margherita thịt nguội & Burrata",
    price: "398,000 VND",
    image: "../assets/img/products/PZ_MargheritaThitNguoi&Burrata.webp",
  },
  {
    id: 3,
    name: "Pizza 3 loại phô mai nhà làm",
    price: "198,000 VND",
    image: "../assets/img/products/PZ_3LoaiPMNL.webp",
  },
  {
    id: 4,
    name: "Pizza 4 loại phô mai nhà làm",
    price: "248,000 VND",
    image: "../assets/img/products/PZ_4LoaiPMNL.webp",
  },
  {
    id: 5,
    name: "Pizza 5 loại phô mai nhà làm",
    price: "298,000 VND",
    image: "../assets/img/products/PZ_5LoaiPMNL.webp",
  },
  {
    id: 6,
    name: "Pizza Margherita",
    price: "160,000 VND",
    image: "../assets/img/products/PZ_Margherita.webp",
  },
  {
    id: 7,
    name: "Pizza Margherita thịt nguội",
    price: "331,000 VND",
    image: "../assets/img/products/PZ_MargheritaThitNguoi.webp",
  },
  {
    id: 8,
    name: "Pizza Margherita & 2 loại xúc xích Ý",
    price: "238,000 VND",
    image: "../assets/img/products/PZ_Margherita&2LoaiXXY.webp",
  },
  {
    id: 9,
    name: "Pizza Margherita cà tím nướng",
    price: "198,000 VND",
    image: "../assets/img/products/PZ_MargheritaCaTimNuong.webp",
  },
  {
    id: 10,
    name: "Pizza cá hồi xốt kem Miso",
    price: "278,000 VND",
    image: "../assets/img/products/PZ_CaHoiXotKemMiSo.webp",
  },
  {
    id: 11,
    name: "Pizza hải sản cay với phô mai hun khói",
    price: "274,000 VND",
    image: "../assets/img/products/PZ_haisancay&pmhunkhoi.webp",
  },
  {
    id: 12,
    name: "Pizza tôm và xốt Mayonnaise",
    price: "254,000 VND",
    image: "../assets/img/products/PZ_Tom&XotMayonnaise.webp",
  },
  {
    id: 13,
    name: "Pizza gà xốt Teriyaki",
    price: "218,000 VND",
    image: "../assets/img/products/PZ_GaXotTeriyaki.webp",
  },
  {
    id: 14,
    name: "Pizza Camembert và xốt nấm thịt nguội",
    price: "208,000 VND",
    image: "../assets/img/products/PZ_Camembert&XotNamThitNguoi.webp",
  },
  {
    id: 15,
    name: "Pizza 4 loại nấm",
    price: "198,000 VND",
    image: "../assets/img/products/PZ_4LoaiNam1.webp",
  },
  {
    id: 16,
    name: "Pizza 4 loại nấm",
    price: "198,000 VND",
    image: "../assets/img/products/PZ_4LoaiNam2.webp",
  },
  {
    id: 17,
    name: "Pizza xốt bí ngòi quế tây và hoa",
    price: "178,000 VND",
    image: "../assets/img/products/PZ_XotBiNgoiQueTay&Hoa.webp",
  },
  {
    id: 18,
    name: "Xốt bí ngòi quế tây với phô mai Latic nhà làm",
    price: "178,000 VND",
    image: "../assets/img/products/PZ_XotBiNgoiQueTay&PMNL.webp",
  },
  {
    id: 19,
    name: "Xốt bí ngòi quế tây với phô mai Mozzarella nhà làm",
    price: "178,000 VND",
    image: "../assets/img/products/PZ_XotBiNgoiQueTay&PMMozzarella.webp",
  },
  {
    id: 20,
    name: "Pizza gà Tandoori",
    price: "218,000 VND",
    image: "../assets/img/products/PZ_GaTandoori.webp",
  },
  {
    id: 21,
    name: "Pizza cải xoăn với Ricotta chanh",
    price: "188,000 VND",
    image: "../assets/img/products/PZ_CaiXoan&RicottaChanh.webp",
  },
  {
    id: 22,
    name: "Pizza sò điệp với xốt Miso ngọt",
    price: "420,000 VND",
    image: "../assets/img/products/PZ_SoDiep&XotMisoNgot.webp",
  },
  {
    id: 23,
    name: "Pizza thịt bò cay kiểu Kebab",
    price: "294,000 VND",
    image: "../assets/img/products/PZ_ThitBoCayKieuKebab.webp",
  },
  {
    id: 24,
    name: "Pizza bò kho",
    price: "248,000 VND",
    image: "../assets/img/products/PZ_BoKho.webp",
  },
  {
    id: 25,
    name: "(Chỉ có ở Đà Nẵng) Pizza xúc xích cay",
    price: "170,000 VND",
    image: "../assets/img/products/PZ_XucXichCay.webp",
  },
  {
    id: 26,
    name: "(Chỉ có ở Đà Nẵng) Pizza trứng, cải bos xôi",
    price: "160,000 VND",
    image: "../assets/img/products/PZ_Trung&CaiBosXoi.webp",
  },
  {
    id: 27,
    name: "(Chỉ có ở Đà Nẵng) Pizza Hawaiian 4P's",
    price: "160,000 VND",
    image: "../assets/img/products/PZ_Hawaiian4Ps.webp",
  },
  {
    id: 28,
    name: "Các loại phô mai nhà làm (S)",
    price: "109,000 VND",
    image: "../assets/img/products/KV_cacloaiPMNL(S).webp",
  },
  {
    id: 29,
    name: "Các loại phô mai nhà làm (L)",
    price: "198,000 VND",
    image: "../assets/img/products/KV_cacloaiPMNL(L).webp",
  },
  {
    id: 30,
    name: "Thịt nguội cuộn xoài kèm xốt chanh dây",
    price: "144,000 VND",
    image: "../assets/img/products/KV_thitnguoicuonxoai&xotchanhday.webp",
  },
  {
    id: 31,
    name: "(1pc) Camembert kẹp Mascarpone Truffle",
    price: "47,000 VND",
    image: "../assets/img/products/KV_(1pc)Camembert&MascarponeTruffle.webp",
  },
  {
    id: 32,
    name: "(2pc) Camembert kẹp Mascarpone Truffle",
    price: "94,000 VND",
    image: "../assets/img/products/KV_(2pc)Camembert&MascarponeTruffle.webp",
  },
  {
    id: 33,
    name: "Khoai tây Đức bỏ lò",
    price: "72,000 VND",
    image: "../assets/img/products/KV_khoaitayDucbolo.webp",
  },
];

// Lưu trữ sản phẩm vào localStorage
localStorage.setItem("products", JSON.stringify(products));
// Tạo mảng các danh mục
const categories = {
  Pizza: [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
    22, 23, 24, 25, 26, 27,
  ],
  KhaiVi: [28, 29, 30, 31, 32, 33],
};

// Lưu trữ danh mục vào localStorage
localStorage.setItem("categories", JSON.stringify(categories));
