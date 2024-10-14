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
    price: "370,000 VND",
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
    price: "265,000 VND",
    image: "../assets/img/products/PZ_4LoaiPMNL.webp",
  },
  {
    id: 5,
    name: "Pizza 5 loại phô mai nhà làm",
    price: "292,000 VND",
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
    price: "313,000 VND",
    image: "../assets/img/products/PZ_MargheritaThitNguoi.webp",
  },
  {
    id: 8,
    name: "Pizza Margherita cà tím nướng",
    price: "290,000 VND",
    image: "../assets/img/products/PZ_MargheritaCaTimNuong copy.webp",
  },
  {
    id: 9,
    name: "Pizza cá hồi xốt kem miso",
    price: "278,000 VND",
    image: "../assets/img/products/PZ_CaHoiXotKemMiSo.webp",
  },
  {
    id: 10,
    name: "Pizza hải sản cay với phô mai hun khói",
    price: "274,000 VND",
    image: "../assets/img/products/PZ_haisancay&pmhunkhoi.webp",
  },
  {
    id: 11,
    name: "Pizza tôm 5 loại Margherita",
    price: "294,000 VND",
    image: "../assets/img/products/pizza_tom_5_loai_margherita.webp",
  },
  {
    id: 12,
    name: "Pizza gà xốt Teriyaki",
    price: "235,000 VND",
    image: "../assets/img/products/pizza_ga_xot_teriyaki.webp",
  },
  {
    id: 13,
    name: "Pizza Camembert và xốt kem nấm truffle",
    price: "343,000 VND",
    image: "../assets/img/products/pizza_camembert_truffle.webp",
  },
  {
    id: 14,
    name: "Pizza 2 loại nấm",
    price: "235,000 VND",
    image: "../assets/img/products/pizza_2_loai_nam.webp",
  },
  {
    id: 15,
    name: "Pizza tỏi tây nướng củ cải Nhật",
    price: "178,000 VND",
    image: "../assets/img/products/pizza_toi_tay_nuong_cu_cai_nhat.webp",
  },
];

// Lưu trữ sản phẩm vào localStorage
localStorage.setItem("products", JSON.stringify(products));
// Tạo mảng các danh mục
const categories = {
  Shirts: [1],
  "Casual Dresses": [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
};

// Lưu trữ danh mục vào localStorage
localStorage.setItem("categories", JSON.stringify(categories));
