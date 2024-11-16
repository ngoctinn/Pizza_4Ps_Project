const sidebarLinks = document.querySelectorAll(".admin__sidebar-nav-link");
const tabs = document.querySelectorAll(".admin__tab");

sidebarLinks.forEach((link, index) => {
  link.addEventListener("click", () => {
    // Remove active class from all links and tabs
    sidebarLinks.forEach((l) =>
      l.classList.remove("admin__sidebar-nav-link--active")
    );
    tabs.forEach((t) => t.classList.remove("admin__tab--active"));

    // Add active class to the clicked link and corresponding tab
    link.classList.add("admin__sidebar-nav-link--active");
    tabs[index].classList.add("admin__tab--active");
  });
});

function openDialog() {
  document.getElementById("dialogOverlay").style.display = "flex";
}

function closeDialog() {
  document.getElementById("dialogOverlay").style.display = "none";
}

// ================== Product Management ==================
function showProducts() {
  const productList = document.querySelector(".product-list");
  const products = JSON.parse(localStorage.getItem("products")) || [];

  // Sort products by id in descending order
  products.sort((a, b) => b.id - a.id);

  productList.innerHTML = ""; // Clear existing products

  products.forEach((product) => {
    const productItem = document.createElement("li");
    productItem.classList.add("product-item");

    productItem.innerHTML = `
      <img src="${product.image}" alt="${product.name}" class="admin__product-image" />
      <div class="product-info">
        <h3 class="product-name">${product.name}</h3>
        <p class="product-price">${product.price}</p>
        <p class="product-description">${product.description}</p>
      </div>
      <div class="product-actions">
        <button class="product_btn">Edit</button>
        <button class="product_btn">Delete</button>
      </div>
    `;

    productList.appendChild(productItem);
  });
}

document.addEventListener("DOMContentLoaded", showProducts);

function handleSubmit(event) {
  event.preventDefault();

  const productImage = document.getElementById("productImage").files[0];
  const productName = document.getElementById("productName").value;
  const productType = document.getElementById("productType").value;
  const productPrice = document.getElementById("productPrice").value;
  const productDescription =
    document.getElementById("productDescription").value;

  const reader = new FileReader();
  reader.onload = function (e) {
    const newProduct = {
      id: Date.now(),
      name: productName,
      type: productType,
      price: productPrice,
      description: productDescription,
      image: e.target.result,
    };

    const products = localStorage.getItem("products")
      ? JSON.parse(localStorage.getItem("products"))
      : [];
    products.push(newProduct);
    localStorage.setItem("products", JSON.stringify(products));

    closeDialog();
    showProducts();
  };

  reader.readAsDataURL(productImage);
}
function searchProducts() {
  const query = document.getElementById("search-input").value.toLowerCase();
  const productList = document.querySelector(".product-list");
  const products = JSON.parse(localStorage.getItem("products")) || [];

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(query)
  );

  productList.innerHTML = "";

  filteredProducts.forEach((product) => {
    const productItem = document.createElement("li");
    productItem.classList.add("product-item");

    productItem.innerHTML = `
      <img src="${product.image}" alt="${product.name}" class="admin__product-image" />
      <div class="product-info">
        <h3 class="product-name">${product.name}</h3>
        <p class="product-price">${product.price}</p>
        <p class="product-description">${product.description}</p>
      </div>
      <div class="product-actions">
        <button class="product_btn">Edit</button>
        <button class="product_btn">Delete</button>
      </div>
    `;

    productList.appendChild(productItem);
  });
}
// Thêm sự kiện nghe cho ô nhập liệu tìm kiếm
document
  .getElementById("search-input")
  .addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
      event.preventDefault(); // Ngăn chặn hành vi mặc định của phím Enter
      searchProducts();
    }
  });
