document.addEventListener("DOMContentLoaded", function () {
  const storedProducts = JSON.parse(localStorage.getItem("products")) || [];
  const storedCategories = JSON.parse(localStorage.getItem("categories"));
  const productList = document.querySelector(".product-list");
  let filteredProducts = storedProducts;
  let thisPage = 1;
  let limit = 8;

  function loadItem() {
    let beginGet = limit * (thisPage - 1);
    let endGet = limit * thisPage - 1;
    productList.innerHTML = "";
    filteredProducts.forEach((product, key) => {
      if (key >= beginGet && key <= endGet) {
        const productItem = `<div class="col-md-3 mt-5 product__list--item">
                    <section class="panel">
                        <div class="pro-img-box">
                            <img src="${product.image}" alt="" />
                              <a href="#" class="adtocart">
                                <i class="fa fa-shopping-cart"></i>
                            </a>
                        </div>
          
                        <div class="panel-body pb-2 text-center">
                            <h4>
                                <a href="../Templates/product-detail.html?id=${product.id}" class="pro-title">
                                    ${product.name}
                                </a>
                            </h4>
                            <p class="price">${product.price}</p>
                        </div>
                    </section>
                </div>`;
        productList.innerHTML += productItem;
      }
    });
    listPage();
  }

  function listPage() {
    let count = Math.ceil(filteredProducts.length / limit);
    document.querySelector(".listPage").innerHTML = "";

    if (thisPage != 1) {
      let prev = document.createElement("li");
      prev.innerText = "PREV";
      prev.setAttribute("onclick", "changePage(" + (thisPage - 1) + ")");
      document.querySelector(".listPage").appendChild(prev);
    }

    for (let i = 1; i <= count; i++) {
      let newPage = document.createElement("li");
      newPage.innerText = i;
      if (i == thisPage) {
        newPage.classList.add("active");
      }
      newPage.setAttribute("onclick", "changePage(" + i + ")");
      document.querySelector(".listPage").appendChild(newPage);
    }

    if (thisPage != count) {
      let next = document.createElement("li");
      next.innerText = "NEXT";
      next.setAttribute("onclick", "changePage(" + (thisPage + 1) + ")");
      document.querySelector(".listPage").appendChild(next);
    }
  }

  window.changePage = function (i) {
    thisPage = i;
    loadItem();
  };

  function filterProductsByCategory(category) {
    const categoryIds = storedCategories[category];
    filteredProducts = storedProducts.filter((product) =>
      categoryIds.includes(product.id)
    );
    thisPage = 1; // Reset to the first page
    loadItem();
  }
  function searchProducts(query) {
    filteredProducts = storedProducts.filter((product) =>
      product.name.toLowerCase().includes(query.toLowerCase())
    );
    console.log("Filtered products:", filteredProducts);
    thisPage = 1; // Reset to the first page
    document.getElementById("san-pham").scrollIntoView({
      behavior: "smooth",
    });
    if (filteredProducts.length === 0) {
      productList.innerHTML =
        "<img src='../assets/img/order/Undiscovered.avif' id='undiscovered' />";
    } else {
      loadItem();
    }
  }

  // Add event listeners to menu items

  document.getElementById("menu-all").addEventListener("click", function () {
    filterProductsByCategory("All");
  });
  document.getElementById("menu-pizza").addEventListener("click", function () {
    filterProductsByCategory("Pizza");
  });
  document.getElementById("menu-khaivi").addEventListener("click", function () {
    filterProductsByCategory("KhaiVi");
  });
  document.getElementById("menu-salad").addEventListener("click", function () {
    filterProductsByCategory("Salad");
  });
  document
    .getElementById("menu-monchinh")
    .addEventListener("click", function () {
      filterProductsByCategory("MonChinh");
    });
  document
    .getElementById("menu-trangmieng")
    .addEventListener("click", function () {
      filterProductsByCategory("TrangMieng");
    });

  document.addEventListener("DOMContentLoaded", function () {
    // Lắng nghe sự kiện click trên các thẻ a trong menu
    document.querySelectorAll(".menu-item").forEach(function (menuItem) {
      menuItem.addEventListener("click", function (event) {
        event.preventDefault(); // Ngăn chặn hành vi mặc định của thẻ a
        document.getElementById("san-pham").scrollIntoView({
          behavior: "smooth",
        });
      });
    });
  });
  document.addEventListener("DOMContentLoaded", function () {
    // Lắng nghe sự kiện click trên các thẻ a trong menu
    document.querySelectorAll(".menu-item").forEach(function (menuItem) {
      menuItem.addEventListener("click", function (event) {
        event.preventDefault(); // Ngăn chặn hành vi mặc định của thẻ a
        document.getElementById("san-pham").scrollIntoView({
          behavior: "smooth",
        });
      });
    });
  });

  // Search
  // Add event listener to search form
  document
    .getElementById("search-form")
    .addEventListener("submit", function (event) {
      event.preventDefault();
      const query = document.getElementById("search-input").value;
      searchProducts(query);
    });

  // Load all products initially
  loadItem();
});
// thay đổi thẻ h2 id="san-pham" thành tên menu
document.addEventListener("DOMContentLoaded", function () {
  // Lắng nghe sự kiện click trên các thẻ a trong menu
  document.querySelectorAll(".menu-item").forEach((item) => {
    item.addEventListener("click", function () {
      const menuItemText = item.querySelector("p").textContent;
      document.getElementById("san-pham").textContent = menuItemText;
    });
  });
});
