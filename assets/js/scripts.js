document.addEventListener("DOMContentLoaded", (event) => {
  const video = document.querySelector("video");
  video.play();

  const header = document.querySelector("nav");
  window.addEventListener("scroll", () => {
    if (window.scrollY > 500) {
      header.classList.add("header-scrolled");
    } else {
      header.classList.remove("header-scrolled");
    }
  });
});

// đóng mở menu tắt logo
document.addEventListener("DOMContentLoaded", function () {
  var offcanvasElement = document.getElementById("offcanvasNavbar");
  var logo = document.getElementById("logo");

  offcanvasElement.addEventListener("show.bs.offcanvas", function () {
    logo.classList.add("hidden");
  });

  offcanvasElement.addEventListener("hide.bs.offcanvas", function () {
    logo.classList.remove("hidden");
  });
});

const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

/**
 * Hàm tải template
 *
 * Cách dùng:
 * <div id="parent"></div>
 * <script>
 *  load("#parent", "./path-to-template.html");
 * </script>
 */
function load(selector, path) {
  const cached = localStorage.getItem(path);
  if (cached) {
    $(selector).innerHTML = cached;
  }

  fetch(path)
    .then((res) => res.text())
    .then((html) => {
      if (html !== cached) {
        $(selector).innerHTML = html;
        localStorage.setItem(path, html);
      }
    })
    .finally(() => {
      window.dispatchEvent(new Event("template-loaded"));
    });
}

/**
 * Hàm kiểm tra một phần tử
 * có bị ẩn bởi display: none không
 */
function isHidden(element) {
  if (!element) return true;

  if (window.getComputedStyle(element).display === "none") {
    return true;
  }

  let parent = element.parentElement;
  while (parent) {
    if (window.getComputedStyle(parent).display === "none") {
      return true;
    }
    parent = parent.parentElement;
  }

  return false;
}

/**
 * Hàm buộc một hành động phải đợi
 * sau một khoảng thời gian mới được thực thi
 */
function debounce(func, timeout = 300) {
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      func.apply(this, args);
    }, timeout);
  };
}

/**
 * Hàm tính toán vị trí arrow cho dropdown
 *
 * Cách dùng:
 * 1. Thêm class "js-dropdown-list" vào thẻ ul cấp 1
 * 2. CSS "left" cho arrow qua biến "--arrow-left-pos"
 */
const calArrowPos = debounce(() => {
  if (isHidden($(".js-dropdown-list"))) return;

  const items = $$(".js-dropdown-list > li");

  items.forEach((item) => {
    const arrowPos = item.offsetLeft + item.offsetWidth / 2;
    item.style.setProperty("--arrow-left-pos", `${arrowPos}px`);
  });
});

// Tính toán lại vị trí arrow khi resize trình duyệt
window.addEventListener("resize", calArrowPos);

// Tính toán lại vị trí arrow sau khi tải template
window.addEventListener("template-loaded", calArrowPos);

/**
 * Giữ active menu khi hover
 *
 * Cách dùng:
 * 1. Thêm class "js-menu-list" vào thẻ ul menu chính
 * 2. Thêm class "js-dropdown" vào class "dropdown" hiện tại
 *  nếu muốn reset lại item active khi ẩn menu
 */
window.addEventListener("template-loaded", handleActiveMenu);

function handleActiveMenu() {
  const dropdowns = $$(".js-dropdown");
  const menus = $$(".js-menu-list");
  const activeClass = "menu-column__item--active";

  const removeActive = (menu) => {
    menu.querySelector(`.${activeClass}`)?.classList.remove(activeClass);
  };

  const init = () => {
    menus.forEach((menu) => {
      const items = menu.children;
      if (!items.length) return;

      removeActive(menu);
      if (window.innerWidth > 991) items[0].classList.add(activeClass);

      Array.from(items).forEach((item) => {
        item.onmouseenter = () => {
          if (window.innerWidth <= 991) return;
          removeActive(menu);
          item.classList.add(activeClass);
        };
        item.onclick = () => {
          if (window.innerWidth > 991) return;
          removeActive(menu);
          item.classList.add(activeClass);
          item.scrollIntoView();
        };
      });
    });
  };

  init();

  dropdowns.forEach((dropdown) => {
    dropdown.onmouseleave = () => init();
  });
}

/**
 * JS toggle
 *
 * Cách dùng:
 * <button class="js-toggle" toggle-target="#box">Click</button>
 * <div id="box">Content show/hide</div>
 */
window.addEventListener("DOMContentLoaded", initJsToggle);

function initJsToggle() {
  $$(".js-toggle").forEach((button) => {
    const target = button.getAttribute("toggle-target");
    if (!target) {
      document.body.innerText = `Cần thêm toggle-target cho: ${button.outerHTML}`;
    }
    button.onclick = (e) => {
      e.preventDefault();

      if (!$(target)) {
        return (document.body.innerText = `Không tìm thấy phần tử "${target}"`);
      }
      const isHidden = $(target).classList.contains("hide");

      requestAnimationFrame(() => {
        $(target).classList.toggle("hide", !isHidden);
        $(target).classList.toggle("show", isHidden);
      });
    };
    document.onclick = function (e) {
      if (!e.target.closest(target)) {
        const isHidden = $(target).classList.contains("hide");
        if (!isHidden) {
          button.click();
        }
      }
    };
  });
}

window.addEventListener("template-loaded", () => {
  const links = $$(".js-dropdown-list > li > a");

  links.forEach((link) => {
    link.onclick = () => {
      if (window.innerWidth > 991) return;
      const item = link.closest("li");
      item.classList.toggle("navbar__item--active");
    };
  });
});

window.addEventListener("template-loaded", () => {
  const tabsSelector = "prod-tab__item";
  const contentsSelector = "prod-tab__content";

  const tabActive = `${tabsSelector}--current`;
  const contentActive = `${contentsSelector}--current`;

  const tabContainers = $$(".js-tabs");
  tabContainers.forEach((tabContainer) => {
    const tabs = tabContainer.querySelectorAll(`.${tabsSelector}`);
    const contents = tabContainer.querySelectorAll(`.${contentsSelector}`);
    tabs.forEach((tab, index) => {
      tab.onclick = () => {
        tabContainer
          .querySelector(`.${tabActive}`)
          ?.classList.remove(tabActive);
        tabContainer
          .querySelector(`.${contentActive}`)
          ?.classList.remove(contentActive);
        tab.classList.add(tabActive);
        contents[index].classList.add(contentActive);
      };
    });
  });
});

window.addEventListener("template-loaded", () => {
  const switchBtn = document.querySelector("#switch-theme-btn");
  if (switchBtn) {
    switchBtn.onclick = function () {
      const isDark = localStorage.dark === "true";
      document.querySelector("html").classList.toggle("dark", !isDark);
      localStorage.setItem("dark", !isDark);
      switchBtn.querySelector("span").textContent = isDark
        ? "Dark mode"
        : "Light mode";
    };
    const isDark = localStorage.dark === "true";
    switchBtn.querySelector("span").textContent = isDark
      ? "Light mode"
      : "Dark mode";
  }
});

const isDark = localStorage.dark === "true";
document.querySelector("html").classList.toggle("dark", isDark);

document.addEventListener("DOMContentLoaded", function () {
  // kiểm tra xem có đang đăng nhập không
  const currentUser = localStorage.getItem("currentUser");
  const toastShown = localStorage.getItem("toastShown");

  if (currentUser) {
    if (!toastShown) {
      toast({
        title: "Thành công",
        message: "Đăng nhập thành công",
        type: "success",
        duration: 3000,
      });
      localStorage.setItem("toastShown", "true");
    }
    document.querySelectorAll(".user-name").forEach((el) => {
      el.textContent = JSON.parse(currentUser).name;
    });
    document.querySelector(".btn__login").style.display = "none";
    document.querySelector(".cart-wrapper").style.display = "block";
    document.querySelector(".nav-profile").style.display = "block";
  } else {
    document.querySelector(".btn__login").style.display = "block";
    document.querySelector(".cart-wrapper").style.display = "none";
    document.querySelector(".nav-profile").style.display = "none";
    localStorage.removeItem("toastShown"); // Reset toastShown khi đăng xuất
  }
});

// Đăng xuất
function logout() {
  const currentUser = JSON.parse(localStorage.getItem("currentUser"));
  if (currentUser) {
    const users = JSON.parse(localStorage.getItem("users")) || [];
    const userIndex = users.findIndex(
      (user) => user.account === currentUser.account
    );
    if (userIndex !== -1) {
      users[userIndex].cart = currentUser.cart;
      localStorage.setItem("users", JSON.stringify(users));
    }
  }
  localStorage.removeItem("currentUser");
  location.reload();
}
// SHOW TOAST

function showToast(type, message) {
  const toast = document.createElement("div");
  toast.className = `toast-nof ${type}`;

  const icons = {
    success: "✓",
    error: "✕",
    warning: "⚠",
    info: "ℹ",
  };

  toast.innerHTML = `
        <div class="icon">${icons[type]}</div>
        <div class="message">${message}</div>
        <div class="close" onclick="this.parentElement.remove()">✕</div>
    `;

  document.getElementById("toast").appendChild(toast);

  // Tự động xóa toast sau 3 giây
  setTimeout(() => {
    if (toast.parentElement) {
      toast.remove();
    }
  }, 3000);

  // Xóa toast khi click vào
  toast.addEventListener("click", () => toast.remove());
}

// Hiển thị sản phẩm
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
                        <a href="../Templates/product-detail.html?id=${product.id}">
                                    <img src="${product.image}" alt="" />
                                </a>
                            
                              <a onclick= "addToCart(${product.id})" class="adtocart">
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

  function filterProductsByType(type) {
    currentType = type;
    filteredProducts = storedProducts.filter((product) =>
      product.type.toLowerCase().includes(type.toLowerCase())
    );
    thisPage = 1; // Reset to the first page
    document.getElementById("san-pham").scrollIntoView({
      behavior: "smooth",
    });
    loadItem();
  }

  function searchProducts(query) {
    const sanPham = document.getElementById("san-pham");
    sanPham.textContent = "Kết quả tìm kiếm cho: " + query;
    filteredProducts = storedProducts.filter((product) =>
      product.name.toLowerCase().includes(query.toLowerCase())
    );
    toast({
      title: "success",
      message: "Tìm kiếm thành công",
      type: "success",
      duration: 3000,
    });
    console.log("Filtered products:", filteredProducts);
    thisPage = 1; // Reset to the first page
    document.getElementById("san-pham").scrollIntoView({
      block: "start",
      behavior: "smooth",
    });
    if (filteredProducts.length === 0) {
      productList.innerHTML =
        "<img src='../assets/img/order/Undiscovered.avif' id='undiscovered' />";
    } else {
      loadItem();
    }
  }

  function getQueryParam(name) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(name);
  }

  // Get the search query from the URL parameter
  const searchQuery = getQueryParam("search");
  if (searchQuery) {
    // Perform the search
    searchProducts(searchQuery);
  }
  // Add event listener to the sorting dropdown
  document
    .getElementById("menu-dropdown")
    .addEventListener("change", function () {
      const sortBy = this.value;

      const parsePrice = (priceStr) => {
        return parseInt(priceStr.replace(/[^0-9]/g, ""), 10);
      };

      switch (sortBy) {
        case "newest":
          filteredProducts.sort((a, b) => b.id - a.id);
          break;
        case "price-desc":
          filteredProducts.sort(
            (a, b) => parsePrice(b.price) - parsePrice(a.price)
          );
          break;
        case "price-asc":
          filteredProducts.sort(
            (a, b) => parsePrice(a.price) - parsePrice(b.price)
          );
          break;
        case "best-seller":
          filteredProducts.sort((a, b) => (b.sold || 0) - (a.sold || 0));
          return;
        default:
          break;
      }

      thisPage = 1;
      loadItem();
    });
  // Add event listeners to menu items
  document.querySelectorAll(".menu-item").forEach((menuItem) => {
    menuItem.addEventListener("click", function (event) {
      event.preventDefault();
      const type = menuItem.id.replace("menu-", "");
      console.log("Type:", type);
      filterProductsByType(type);
    });
  });
  document.getElementById("menu-all").addEventListener("click", function () {
    filteredProducts = storedProducts;
    thisPage = 1;
    loadItem();
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

  // Add event listener to search advanced form
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
//Animation to cart
function animationToCart(productId) {
  const productElement =
    document
      .querySelector(`.adtocart[onclick="addToCart(${productId})"]`)
      ?.closest(".product__list--item") ||
    document.querySelector(".product-detail-container");

  if (!productElement) {
    console.error("Product element not found");
    return;
  }

  const cartIcon = document.querySelector(".cart-icon");
  if (!cartIcon) {
    console.error("Cart icon not found");
    return;
  }

  const productImage = productElement.querySelector("img");
  if (!productImage) {
    console.error("Product image not found");
    return;
  }

  const imageClone = productImage.cloneNode(true);
  const imageRect = productImage.getBoundingClientRect();
  const cartRect = cartIcon.getBoundingClientRect();

  imageClone.style.position = "fixed";
  imageClone.style.top = `${imageRect.top}px`;
  imageClone.style.left = `${imageRect.left}px`;
  imageClone.style.width = `${imageRect.width}px`;
  imageClone.style.height = `${imageRect.height}px`;
  imageClone.style.borderRadius = "50%";
  imageClone.style.transition = "all 0.8s ease-in-out";
  imageClone.style.zIndex = "1000";
  document.body.appendChild(imageClone);

  setTimeout(() => {
    imageClone.style.top = `${cartRect.top}px`;
    imageClone.style.left = `${cartRect.left}px`;
    imageClone.style.width = "20px";
    imageClone.style.height = "20px";
    imageClone.style.opacity = "0";
  }, 100);

  setTimeout(() => {
    document.body.removeChild(imageClone);
  }, 1200);
}
// Thêm sản phẩm vào giỏ hàng
function addToCart(productId) {
  console.log("đã bấm ");

  const currentUser = JSON.parse(localStorage.getItem("currentUser"));

  // Lấy số lượng từ quantity-display nếu có
  let quantity = 1;
  const quantityDisplay = document.querySelector(".quantity-display");
  if (quantityDisplay) {
    quantity = parseInt(quantityDisplay.textContent) || 1;
  }

  const productCart = {
    id: productId,
    quantity: quantity,
  };
  if (!currentUser) {
    toast({
      title: "error",
      message: "Bạn cần đăng nhập để thêm sản phẩm vào giỏ hàng",
      type: "error",
      duration: 3000,
    });
    return;
  }
  animationToCart(productId);
  const cart = currentUser.cart || [];
  const productIndex = cart.findIndex((item) => item.id === productId);
  if (productIndex === -1) {
    cart.push(productCart);
  } else {
    cart[productIndex].quantity += quantity;
  }
  currentUser.cart = cart;
  localStorage.setItem("currentUser", JSON.stringify(currentUser));
  showCart();
}
// Hiển thị sản phẩm trong giỏ hàng
function showCart() {
  const currentUser = localStorage.getItem("currentUser");
  const products = JSON.parse(localStorage.getItem("products"));
  const cartList = document.querySelector(".cart-items");
  const cart = JSON.parse(currentUser).cart;
  let totalQuantity = 0;
  let totalPrice = 0;

  cartList.innerHTML = ""; // Clear the current cart items

  cart.forEach((cartItem) => {
    const product = products.find((p) => p.id === cartItem.id);
    if (product) {
      totalQuantity += cartItem.quantity;
      totalPrice +=
        parseInt(product.price.replace(/[^0-9]/g, "")) * cartItem.quantity;

      const cartItemElement = document.createElement("div");
      cartItemElement.classList.add("cart-item");

      cartItemElement.innerHTML = `
        <img src="${product.image}" alt="${product.name}" class="cart-item-image" />
        <div class="cart-item-details">
          <div class="cart-item-name">${product.name}</div>
          <div class="cart-item-price">${product.price} x ${cartItem.quantity}</div>
          <a href="#" class="add-note">Thêm ghi chú</a>
          <div class="cart-item-controls">
        <button class="decrease-quantity">-</button>
        <span class="cart_quantity">${cartItem.quantity}</span>
        <button class="increase-quantity">+</button>
        <button class="remove-item">Xóa</button>
        
          </div>
        </div>
      `;
      cartList.appendChild(cartItemElement);

      // Add event listeners for the buttons
      cartItemElement
        .querySelector(".decrease-quantity")
        .addEventListener("click", () => {
          const quantityElement =
            cartItemElement.querySelector(".cart_quantity");
          let quantity = parseInt(quantityElement.textContent);
          if (quantity > 1) {
            quantity--;
            quantityElement.textContent = quantity;

            // Update quantity in local storage
            const currentUser = JSON.parse(localStorage.getItem("currentUser"));
            const cart = currentUser.cart;
            const productIndex = cart.findIndex(
              (item) => item.id === cartItem.id
            );
            if (productIndex !== -1) {
              cart[productIndex].quantity = quantity;
              currentUser.cart = cart;
              localStorage.setItem("currentUser", JSON.stringify(currentUser));
              showCart();
            }
          } else {
            if (confirm("Bạn có muốn xóa sản phẩm này khỏi giỏ hàng không?")) {
              const newCart = cart.filter((item) => item.id !== cartItem.id);
              const currentUser = JSON.parse(
                localStorage.getItem("currentUser")
              );
              currentUser.cart = newCart;
              localStorage.setItem("currentUser", JSON.stringify(currentUser));
              showCart();
            }
          }
        });

      cartItemElement
        .querySelector(".increase-quantity")
        .addEventListener("click", () => {
          const quantityElement =
            cartItemElement.querySelector(".cart_quantity");
          let quantity = parseInt(quantityElement.textContent);
          quantity++;
          quantityElement.textContent = quantity;

          // Update quantity in local storage
          const currentUser = JSON.parse(localStorage.getItem("currentUser"));
          const cart = currentUser.cart;
          const productIndex = cart.findIndex(
            (item) => item.id === cartItem.id
          );
          if (productIndex !== -1) {
            cart[productIndex].quantity = quantity;
            currentUser.cart = cart;
            localStorage.setItem("currentUser", JSON.stringify(currentUser));
            showCart();
          }
        });

      cartItemElement
        .querySelector(".remove-item")
        .addEventListener("click", () => {
          const newCart = cart.filter((item) => item.id !== cartItem.id);
          const currentUser = JSON.parse(localStorage.getItem("currentUser"));
          currentUser.cart = newCart;
          localStorage.setItem("currentUser", JSON.stringify(currentUser));
          showCart();
        });
    }
  });

  document.querySelector(".cart-count").textContent = totalQuantity;
  document.querySelector(
    ".cart-total span:last-child"
  ).textContent = `${totalPrice.toLocaleString()} VND`;
}
document.addEventListener("DOMContentLoaded", function () {
  showCart();
});
