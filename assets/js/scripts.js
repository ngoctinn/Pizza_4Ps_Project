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

// Hiển thị sản phẩm
document.addEventListener("DOMContentLoaded", function () {
  const storedProducts = JSON.parse(localStorage.getItem("products"));
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
        
                      <div class="panel-body text-center pb-2">
                          <h4>
                              <a href="#" class="pro-title">
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
    loadItem();
  }

  // Add event listeners to menu items
  document.getElementById("menu-pizza").addEventListener("click", function () {
    filterProductsByCategory("Pizza");
  });

  document.getElementById("menu-khaivi").addEventListener("click", function () {
    filterProductsByCategory("KhaiVi");
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
