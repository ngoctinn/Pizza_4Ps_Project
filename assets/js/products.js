// Tạo mảng các sản phẩm
const products = [
    {
        id: 1,
        name: "Leopard Shirt Dress",
        price: "$300.00",
        image: "../assets/img/menu/khaivi.webp"
    },
    {
        id: 2,
        name: "Red Casual Dress",
        price: "$250.00",
        image: "../assets/img/menu/salad.webp"
    },
    {
        id: 3,
        name: "Black Casual Dress",
        price: "$200.00",
        image: "../assets/img/menu/pizza.webp"
    },
    {
        id: 4,
        name: "White Casual Dress",
        price: "$150.00",
        image: "../assets/img/menu/salad.webp"
    },
    {
        id: 5,
        name: "Yellow Casual Dress",
        price: "$100.00",
        image: "../assets/img/menu/theomua.webp"
    },
    {
        id: 6,
        name: "Green Casual Dress",
        price: "$50.00",
        image: "../assets/img/menu/topping.webp"
    },
    {
        id: 7,
        name: "Blue Casual Dress",
        price: "$25.00",
        image: "../assets/img/menu/khaivi.webp"
    },
    {
        id: 8,
        name: "Pink Casual Dress",
        price: "$10.00",
        image: "../assets/img/menu/khaivi.webp"
    },
    {
        id: 9,
        name: "Purple Casual Dress",
        price: "$5.00",
        image: "../assets/img/menu/khaivi.webp"
    },
    {
        id: 10,
        name: "Orange Casual Dress",
        price: "$2.50",
        image: "../assets/img/menu/khaivi.webp"
    },
    {
        id: 11,
        name: "Brown Casual Dress",
        price: "$1.00",
        image: "../assets/img/menu/khaivi.webp"
    },
    {
        id: 12,
        name: "Grey Casual Dress",
        price: "$0.50",
        image: "../assets/img/menu/khaivi.webp"
    }
];

// Lưu trữ sản phẩm vào localStorage
localStorage.setItem('products', JSON.stringify(products));
