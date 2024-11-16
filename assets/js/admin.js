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
function openEditDialog() {
  document.getElementById("editDialogOverlay").style.display = "flex";
}
function closeEditDialog() {
  document.getElementById("editDialogOverlay").style.display = "none";
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
        <button class="product_btn edit-btn">Edit</button>
        <button class="product_btn delete-btn">Delete</button>
      </div>
    `;

    productList.appendChild(productItem);
  });

  // Add event listeners for Edit and Delete buttons
  const editButtons = document.querySelectorAll(".edit-btn");
  const deleteButtons = document.querySelectorAll(".delete-btn");

  editButtons.forEach((button, index) => {
    button.addEventListener("click", () => {
      const productId = products[index].id;
      editProduct(productId);
    });
  });

  deleteButtons.forEach((button, index) => {
    button.addEventListener("click", () => {
      const productId = products[index].id;
      deleteProduct(productId);
    });
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

// Thêm sự kiện cho dropdown để lọc sản phẩm
const dropdown = document.getElementById("menu-dropdown");

dropdown.addEventListener("change", filterProducts);

function filterProducts() {
  const selectedValue = dropdown.value;
  const productList = document.querySelector(".product-list");
  const products = JSON.parse(localStorage.getItem("products")) || [];

  let filteredProducts = products;

  if (selectedValue !== "menu-all") {
    // Map giá trị dropdown với loại sản phẩm
    const typeMap = {
      "menu-pizza": "Pizza",
      "menu-khaivi": "KhaiVi",
      "menu-salad": "Salad",
      "menu-monchinh": "MonChinh",
      "menu-trangmieng": "TrangMieng",
      "menu-thucuong": "ThucUong",
      "menu-topping": "Topping",
    };
    const selectedType = typeMap[selectedValue] || "";

    if (selectedType) {
      filteredProducts = products.filter(
        (product) => product.type === selectedType
      );
    }
  }

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
// sửa xóa sản phẩm
// ================== Edit and Delete Functionality ==================
function editProduct(id) {
  const products = JSON.parse(localStorage.getItem("products")) || [];
  const product = products.find((p) => p.id === id);

  if (!product) return;

  // Populate the form with existing product data
  document.getElementById("editProductName").value = product.name;
  document.getElementById("editProductType").value = product.type;
  document.getElementById("editProductPrice").value = product.price;
  document.getElementById("editProductDescription").value = product.description;

  // Show the edit dialog
  openEditDialog();

  // Handle form submission for editing
  const form = document.getElementById("editProductForm");

  const handleEditSubmit = function (event) {
    event.preventDefault();

    const updatedName = document.getElementById("editProductName").value;
    const updatedType = document.getElementById("editProductType").value;
    const updatedPrice = document.getElementById("editProductPrice").value;
    const updatedDescription = document.getElementById(
      "editProductDescription"
    ).value;
    const updatedImageFile =
      document.getElementById("editProductImage").files[0];

    if (updatedImageFile) {
      const reader = new FileReader();
      reader.onload = function (e) {
        product.image = e.target.result;
        finalizeEdit();
      };
      reader.readAsDataURL(updatedImageFile);
    } else {
      finalizeEdit();
    }

    function finalizeEdit() {
      product.name = updatedName;
      product.type = updatedType;
      product.price = updatedPrice;
      product.description = updatedDescription;

      localStorage.setItem("products", JSON.stringify(products));
      closeEditDialog();
      showProducts();

      // Remove this event listener to prevent multiple bindings
      form.removeEventListener("submit", handleEditSubmit);
    }
  };

  form.addEventListener("submit", handleEditSubmit);
}

// Function to handle Delete button click
function deleteProduct(id) {
  let products = JSON.parse(localStorage.getItem("products")) || [];
  products = products.filter((p) => p.id !== id);
  localStorage.setItem("products", JSON.stringify(products));
  showProducts();
}
