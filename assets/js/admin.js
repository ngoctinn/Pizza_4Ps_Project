// Điều hướng
const navLinks = document.querySelectorAll(".nav-links a");
const sections = document.querySelectorAll(".section");

// Set the initial active section to "users"
document.getElementById("users").classList.add("active");
navLinks.forEach((link) => {
  if (link.getAttribute("data-section") === "users") {
    link.classList.add("active");
  }
});

navLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    navLinks.forEach((l) => l.classList.remove("active"));
    link.classList.add("active");
    const section = document.getElementById(link.getAttribute("data-section"));
    sections.forEach((s) => s.classList.remove("active"));
    section.classList.add("active");
  });
});

// Chức năng Modal
function openModal(id) {
  //focus vào modal
  const modal = document.getElementById(id);
  document.getElementById(id).classList.add("active");
  const firstInput = modal.querySelector("input, select, textarea");
  if (firstInput) {
    firstInput.focus();
  }
}
function closeModal(id) {
  document.getElementById(id).classList.remove("active");
}

// Dữ Liệu Người Dùng Giả
let users = [
  {
    id: 1,
    username: "NguyenVanA",
    email: "a@example.com",
    status: "Hoạt động",
    type: "Người quản trị",
  },
  {
    id: 2,
    username: "TranThiB",
    email: "b@example.com",
    status: "Khóa",
    type: "Khách hàng",
  },
  {
    id: 3,
    username: "LeVanC",
    email: "c@example.com",
    status: "Hoạt động",
    type: "Khách hàng",
  },
];

// Render Bảng Người Dùng
let currentPage = 1;
const usersPerPage = 4;

function renderUsers() {
  const tbody = document.querySelector("#users tbody");
  tbody.innerHTML = "";

  const startIndex = (currentPage - 1) * usersPerPage;
  const endIndex = startIndex + usersPerPage;
  const paginatedUsers = users.slice(startIndex, endIndex);

  paginatedUsers.forEach((user) => {
    const tr = document.createElement("tr");

    const tdId = document.createElement("td");
    tdId.textContent = user.id;
    tr.appendChild(tdId);

    const tdUsername = document.createElement("td");
    tdUsername.textContent = user.username;
    tr.appendChild(tdUsername);

    const tdEmail = document.createElement("td");
    tdEmail.textContent = user.email;
    tr.appendChild(tdEmail);

    const tdStatus = document.createElement("td");
    tdStatus.textContent = user.status;
    tr.appendChild(tdStatus);

    const tdType = document.createElement("td");
    tdType.textContent = user.type;
    tr.appendChild(tdType);

    const tdActions = document.createElement("td");

    // Edit Button
    const editBtn = document.createElement("button");
    editBtn.textContent = "Sửa";
    editBtn.classList.add("btn", "btn-secondary");
    editBtn.onclick = () => editUser(user.id);
    tdActions.appendChild(editBtn);

    // Lock/Unlock Button
    const lockBtn = document.createElement("button");
    lockBtn.className = "btn_lock-unlock";
    lockBtn.textContent = user.status === "Hoạt động" ? "Khóa" : "Mở";
    lockBtn.classList.add(
      "btn",
      user.status === "Hoạt động" ? "btn-success" : "btn-warning"
    );
    lockBtn.onclick = () => toggleLockUser(user.id);
    tdActions.appendChild(lockBtn);

    tr.appendChild(tdActions);
    tbody.appendChild(tr);
  });

  renderPagination(users, usersPerPage, "usersPagination", renderUsers);
}

function renderPagination(
  dataArray,
  itemsPerPage,
  paginationId,
  renderFunction
) {
  const paginationContainer = document.getElementById(paginationId);
  paginationContainer.innerHTML = "";

  const totalPages = Math.ceil(dataArray.length / itemsPerPage);

  // Previous Button (Optional)

  const prevBtn = document.createElement("button");
  prevBtn.innerHTML = "&larr;";
  prevBtn.classList.add("btn", "btn-pagination");
  prevBtn.disabled = currentPage === 1;
  prevBtn.onclick = () => {
    if (currentPage > 1) {
      currentPage--;
      renderFunction();
    }
  };
  paginationContainer.appendChild(prevBtn);

  // Page Numbers
  for (let i = 1; i <= totalPages; i++) {
    const pageBtn = document.createElement("button");
    pageBtn.textContent = i;
    pageBtn.classList.add("btn", "btn-pagination");
    if (i === currentPage) {
      pageBtn.classList.add("active");
    }
    pageBtn.onclick = () => {
      currentPage = i;
      renderFunction();
    };
    paginationContainer.appendChild(pageBtn);
  }

  // Next Button with Icon
  const nextBtn = document.createElement("button");
  nextBtn.innerHTML = "&#8594;"; // Right arrow icon
  nextBtn.classList.add("btn", "btn-pagination");
  nextBtn.disabled = currentPage === totalPages;
  nextBtn.onclick = () => {
    if (currentPage < totalPages) {
      currentPage++;
      renderFunction();
      console.log("currentPage", currentPage);
      console.log("đã click");
    }
  };
  paginationContainer.appendChild(nextBtn);
}

// Thêm Người Dùng
function addUser(event) {
  event.preventDefault();
  const username = document.getElementById("username").value;
  const email = document.getElementById("email").value;
  const status = document.getElementById("status").value;
  const type = document.getElementById("type").value;
  // kiểm tra dữ liệu nhập vào đủ chưa
  if (!username || !email) {
    toast({
      title: "Cảnh Báo",
      message: "Vui lòng nhập đủ thông tin.",
      type: "error",
      duration: 3000,
    });
    return;
  }
  const id = users.length ? users[users.length - 1].id + 1 : 1;
  users.push({ id, username, email, status, type });
  renderUsers();
  closeModal("addUserModal");
  event.target.reset();
  toast({
    title: "Thông Báo",
    message: "Thêm người dùng thành công.",
    type: "success",
    duration: 3000,
  });
}

// Sửa Người Dùng
function editUser(id) {
  const user = users.find((u) => u.id === id);
  if (!user) return;

  // Điền thông tin vào form sửa
  document.getElementById("editUsername").value = user.username;
  document.getElementById("editEmail").value = user.email;
  document.getElementById("editStatus").value = user.status;
  document.getElementById("editType").value = user.type;

  // Mở modal sửa
  openModal("editUserModal");

  // Xử lý gửi form
  const editForm = document.getElementById("editUserForm");
  editForm.onsubmit = function (event) {
    event.preventDefault();
    const updatedUsername = document.getElementById("editUsername").value;
    const updatedEmail = document.getElementById("editEmail").value;
    const updatedStatus = document.getElementById("editStatus").value;
    const updatedType = document.getElementById("editType").value;

    // Cập nhật dữ liệu người dùng
    user.username = updatedUsername;
    user.email = updatedEmail;
    user.status = updatedStatus;
    user.type = updatedType;

    // Render lại bảng và đóng modal
    renderUsers();
    closeModal("editUserModal");
    toast({
      title: "Thông Báo",
      message: "Cập nhật người dùng thành công.",
      type: "success",
      duration: 3000,
    });
  };
}

// Khóa/Mở Khóa Người Dùng
function toggleLockUser(id) {
  const user = users.find((u) => u.id === id);
  if (!user) return;
  user.status = user.status === "Hoạt động" ? "Khóa" : "Hoạt động";
  renderUsers();
}

// Dữ Liệu Sản Phẩm Giả
let products = [
  {
    id: 1,
    name: "Pizza Tôm Xốt Tỏi Cay",
    price: "245,000 VND",
    image: "./assets/img/products/PZ_TomXotToiCay.webp",
    type: "Pizza",
    describe: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  },
  {
    id: 2,
    name: "Pizza Margherita thịt nguội & Burrata",
    price: "398,000 VND",
    image: "./assets/img/products/PZ_MargheritaThitNguoi&Burrata.webp",
    type: "Pizza",
    describe: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  },
  {
    id: 3,
    name: "Pizza 3 loại phô mai nhà làm",
    price: "198,000 VND",
    image: "./assets/img/products/PZ_3LoaiPMNL.webp",
    type: "Pizza",
    describe: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  },
  {
    id: 4,
    name: "Pizza 4 loại phô mai nhà làm",
    price: "248,000 VND",
    image: "./assets/img/products/PZ_4LoaiPMNL.webp",
    type: "Pizza",
    describe: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  },
  {
    id: 5,
    name: "Pizza 4 loại phô mai nhà làm",
    price: "248,000 VND",
    image: "./assets/img/products/PZ_4LoaiPMNL.webp",
    type: "Pizza",
    describe: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  },
  {
    id: 6,
    name: "Pizza 4 loại phô mai nhà làm",
    price: "248,000 VND",
    image: "./assets/img/products/PZ_4LoaiPMNL.webp",
    type: "Pizza",
    describe: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  },
];

const productsPerPage = 4;
// Render Bảng Sản Phẩm
function renderProducts() {
  const tbody = document.querySelector("#productTableBody");
  tbody.innerHTML = "";

  const startIndex = (currentPage - 1) * productsPerPage;
  const endIndex = startIndex + productsPerPage;
  const paginatedProducts = products.slice(startIndex, endIndex);

  paginatedProducts.forEach((product) => {
    const tr = document.createElement("tr");

    const tdId = document.createElement("td");
    tdId.textContent = product.id;
    tr.appendChild(tdId);

    const tdName = document.createElement("td");
    tdName.textContent = product.name;
    tr.appendChild(tdName);

    const tdImage = document.createElement("td");
    const img = document.createElement("img");
    img.src = product.image;
    img.alt = product.name;
    img.width = 60;
    img.height = 60;
    tdImage.appendChild(img);
    tr.appendChild(tdImage);

    const tdPrice = document.createElement("td");
    tdPrice.textContent = product.price;
    tr.appendChild(tdPrice);

    const tdType = document.createElement("td");
    tdType.textContent = product.type;
    tr.appendChild(tdType);

    const tdDescribe = document.createElement("td");
    tdDescribe.textContent = product.describe;
    tr.appendChild(tdDescribe);

    const tdActions = document.createElement("td");

    // Nút Sửa
    const editBtn = document.createElement("button");
    editBtn.textContent = "Sửa";
    editBtn.classList.add("btn", "btn-secondary");
    editBtn.onclick = () => editProduct(product.id);
    tdActions.appendChild(editBtn);

    // Nút Xóa
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Xóa";
    deleteBtn.classList.add("btn", "btn-danger");
    deleteBtn.onclick = () => deleteProduct(product.id);
    tdActions.appendChild(deleteBtn);

    tr.appendChild(tdActions);
    tbody.appendChild(tr);
  });
  renderPagination(
    products,
    productsPerPage,
    "productPagination",
    renderProducts
  );
}

// Thêm Sản Phẩm
function addProduct(event) {
  event.preventDefault();
  const name = document.getElementById("productName").value;
  const priceInput = document.getElementById("productPrice");
  const price = priceInput.value + " VND";
  const type = document.getElementById("productType").value;
  const describe = document.getElementById("productDescribe").value;
  const imageInput = document.getElementById("productImage");
  const file = imageInput.files[0];

  // kiểm tra dữ liệu nhập vào đủ chưa

  if (!name || !price || !type || !describe) {
    toast({
      title: "Cảnh Báo",
      message: "Vui lòng nhập đủ thông tin.",
      type: "error",
      duration: 3000,
    });
    return;
  }

  if (file) {
    const reader = new FileReader();
    reader.onload = function (e) {
      const imageDataUrl = e.target.result;
      const id = products.length ? products[products.length - 1].id + 1 : 1;
      products.push({
        id,
        name,
        price,
        image: imageDataUrl,
        type,
        describe,
      });
      renderProducts();
      closeModal("addProductModal");
      event.target.reset();
      document.getElementById("addImagePreview").style.display = "none";
    };
    reader.readAsDataURL(file);
  } else {
    toast({
      title: "Cảnh Báo",
      message: "Vui lòng chọn hình ảnh sản phẩm.",
      type: "error",
      duration: 3000,
    });
  }
}

// Xem trước hình ảnh khi chọn
document.getElementById("productImage").addEventListener("change", function () {
  const preview = document.getElementById("addImagePreview");
  const file = this.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = function (e) {
      preview.src = e.target.result;
      preview.style.display = "block";
    };
    reader.readAsDataURL(file);
  } else {
    preview.src = "#";
    preview.style.display = "none";
  }
});

// Sửa Sản Phẩm
let currentEditProductId = null;
function editProduct(id) {
  const product = products.find((p) => p.id === id);
  if (!product) return;

  currentEditProductId = id;
  document.getElementById("editProductName").value = product.name;
  document.getElementById("editProductPrice").value = parseInt(
    product.price.replace(/[^0-9]/g, "")
  );
  document.getElementById("editProductType").value = product.type;
  document.getElementById("editProductDescribe").value = product.describe;
  document.getElementById("editImagePreview").src = product.image;
  document.getElementById("editImagePreview").style.display = "block";
  document.getElementById("editProductImage").value = "";

  openModal("editProductModal");
}

// Xem trước hình ảnh khi chọn trong modal sửa
document
  .getElementById("editProductImage")
  .addEventListener("change", function () {
    const preview = document.getElementById("editImagePreview");
    const file = this.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = function (e) {
        preview.src = e.target.result;
        preview.style.display = "block";
      };
      reader.readAsDataURL(file);
    }
  });

// Bỏ hình ảnh trong modal sửa
function removeImage() {
  const imageInput = document.getElementById("editProductImage");
  imageInput.value = "";
  const preview = document.getElementById("editImagePreview");
  preview.src = "#";
  preview.style.display = "none";
}
function removeImageAdd() {
  const imageInput = document.getElementById("productImage");
  imageInput.value = "";
  const preview = document.getElementById("addImagePreview");
  preview.src = "#";
  preview.style.display = "none";
}

// Cập Nhật Sản Phẩm
function updateProduct(event) {
  event.preventDefault();
  const name = document.getElementById("editProductName").value;
  const priceInput = document.getElementById("editProductPrice");
  const price = priceInput.value + " VND";
  const type = document.getElementById("editProductType").value;
  const describe = document.getElementById("editProductDescribe").value;
  const imageInput = document.getElementById("editProductImage");
  const file = imageInput.files[0];

  const product = products.find((p) => p.id === currentEditProductId);
  if (!product) return;

  product.name = name;
  product.price = price;
  product.type = type;
  product.describe = describe;

  if (file) {
    const reader = new FileReader();
    reader.onload = function (e) {
      product.image = e.target.result;
      renderProducts();
      closeModal("editProductModal");
    };
    reader.readAsDataURL(file);
  } else {
    renderProducts();
    closeModal("editProductModal");
  }
  toast({
    title: "Thông Báo",
    message: "Cập nhật sản phẩm thành công.",
    type: "success",
    duration: 3000,
  });
}

// Xóa Sản Phẩm
function deleteProduct(id) {
  showConfirmPopup("Xóa sản phẩm", "Bạn có chắc xóa sản phẩm này không", () => {
    products = products.filter((p) => p.id !== id);
    renderProducts();
    toast({
      title: "Thông Báo",
      message: "Xóa sản phẩm thành công.",
      type: "success",
      duration: 3000,
    });
  });
}

// Dữ Liệu Đơn Hàng Giả
let orders = [
  {
    id: 1,
    customer: "Nguyen Van A",
    status: "chưa xử lý",
    date: "2023-10-01",
    address: "Quận 1, Hồ Chí Minh",
    products: [
      { name: "Pizza Margherita", quantity: 2, unitPrice: "120,000 VND" },
      { name: "Coca Cola", quantity: 3, unitPrice: "20,000 VND" },
    ],
  },
  {
    id: 2,
    customer: "Tran Thi B",
    status: "đã xác nhận",
    date: "2023-10-05",
    address: "Quận 3, Hồ Chí Minh",
    products: [
      { name: "Pizza Pepperoni", quantity: 1, unitPrice: "150,000 VND" },
      { name: "Pepsi", quantity: 2, unitPrice: "20,000 VND" },
    ],
  },
  {
    id: 3,
    customer: "Le Van C",
    status: "đã giao thành công",
    date: "2023-10-10",
    address: "Quận 5, Hồ Chí Minh",
    products: [
      { name: "Pizza 4 Phô Mai", quantity: 1, unitPrice: "200,000 VND" },
      { name: "Sprite", quantity: 1, unitPrice: "20,000 VND" },
    ],
  },
  {
    id: 4,
    customer: "Pham Thi D",
    status: "đã giao hàng",
    date: "2023-10-12",
    address: "Quận 7, Hồ Chí Minh",
    products: [
      { name: "Pizza Hải Sản", quantity: 2, unitPrice: "180,000 VND" },
      { name: "Fanta", quantity: 2, unitPrice: "20,000 VND" },
    ],
  },
];

const ordersPerPage = 5;
// Render Bảng Đơn Hàng
function renderOrders() {
  const tbody = document.getElementById("orderTableBody");
  tbody.innerHTML = "";

  const startIndex = (currentPage - 1) * ordersPerPage;
  const endIndex = startIndex + ordersPerPage;
  const paginatedOrders = orders.slice(startIndex, endIndex);

  paginatedOrders.forEach((order) => {
    const tr = document.createElement("tr");
    tr.id = `order-${order.id}`;

    const tdId = document.createElement("td");
    tdId.textContent = order.id;
    tr.appendChild(tdId);

    const tdCustomer = document.createElement("td");
    tdCustomer.textContent = order.customer;
    tr.appendChild(tdCustomer);

    const tdStatus = document.createElement("td");
    // Dropdown để thay đổi trạng thái
    const statusSelect = document.createElement("select");
    statusSelect.innerHTML = `
      <option value="chưa xử lý" ${
        order.status === "chưa xử lý" ? "selected" : ""
      }>Chưa xử lý</option>
      <option value="đã xác nhận" ${
        order.status === "đã xác nhận" ? "selected" : ""
      }>Đã xác nhận</option>
      <option value="đã giao thành công" ${
        order.status === "đã giao thành công" ? "selected" : ""
      }>Đã giao thành công</option>
      <option value="đã hủy" ${
        order.status === "đã hủy" ? "selected" : ""
      }>Đã hủy</option>
    `;
    // Biến tạm để lưu trạng thái mới
    let newStatus = order.status;
    statusSelect.onchange = () => {
      newStatus = statusSelect.value;
    };
    tdStatus.appendChild(statusSelect);

    // Nút Lưu thay đổi trạng thái
    const saveButton = document.createElement("button");
    saveButton.textContent = "Lưu";
    saveButton.classList.add("btn-luu");
    saveButton.onclick = () => {
      updateOrderStatus(order.id, newStatus);
    };
    tdStatus.appendChild(saveButton);

    tr.appendChild(tdStatus);

    const tdDate = document.createElement("td");
    tdDate.textContent = order.date;
    tr.appendChild(tdDate);

    const tdAddress = document.createElement("td");
    tdAddress.textContent = order.address;
    tr.appendChild(tdAddress);

    const tdActions = document.createElement("td");
    // Link xem chi tiết đơn hàng
    const viewLink = document.createElement("a");
    viewLink.cursor = "pointer";
    viewLink.textContent = "Xem";
    viewLink.href = "#";
    viewLink.onclick = (e) => {
      e.preventDefault();
      viewOrderDetails(order.id);
    };
    tdActions.appendChild(viewLink);
    tr.appendChild(tdActions);

    tbody.appendChild(tr);

    // Hàng chi tiết đơn hàng (ẩn mặc định)
    const detailTr = document.createElement("tr");
    detailTr.id = `order-detail-${order.id}`;
    detailTr.style.display = "none";

    const detailTd = document.createElement("td");
    detailTd.colSpan = 6;

    // Tính tổng tiền
    let total = 0;
    order.products.forEach((product) => {
      const unitPriceNumber = parseInt(
        product.unitPrice.replace(/[^0-9]/g, "")
      );
      total += product.quantity * unitPriceNumber;
    });
    // Format total to VND
    const totalFormatted = new Intl.NumberFormat("vi-VN", {
      style: "currency",
      currency: "VND",
    }).format(total);

    // Nội dung chi tiết
    let detailContent = `
      <strong>Địa Chỉ Giao Hàng:</strong> ${order.address}<br/>
      <strong>Trạng Thái:</strong> ${order.status}<br/>
      <strong>Sản Phẩm:</strong>
      <table style="width: 100%; border-collapse: collapse; margin-top: 10px;">
        <thead>
          <tr>
            <th style="border: 1px solid #ddd; padding: 8px;">Tên Sản Phẩm</th>
            <th style="border: 1px solid #ddd; padding: 8px;">Số Lượng</th>
            <th style="border: 1px solid #ddd; padding: 8px;">Đơn Giá</th>
          </tr>
        </thead>
        <tbody>
    `;
    order.products.forEach((product) => {
      detailContent += `
          <tr>
            <td style="border: 1px solid #ddd; padding: 8px;">${product.name}</td>
            <td style="border: 1px solid #ddd; padding: 8px;">${product.quantity}</td>
            <td style="border: 1px solid #ddd; padding: 8px;">${product.unitPrice}</td>
          </tr>
        `;
    });
    detailContent += `
        </tbody>
      </table>
      <strong class="str-tongtien">Tổng Tiền:</strong> ${totalFormatted}
    `;

    detailTd.innerHTML = detailContent;
    detailTr.appendChild(detailTd);
    tbody.appendChild(detailTr);
  });

  renderPagination(orders, ordersPerPage, "ordersPagination", renderOrders);
}

// Cập Nhật Trạng Thái Đơn Hàng
function updateOrderStatus(id, newStatus) {
  const order = orders.find((o) => o.id === id);
  if (order) {
    order.status = newStatus;
    renderOrders();
  }
  toast({
    title: "Thông Báo",
    message: "Cập nhật trạng thái đơn hàng thành công.",
    type: "success",
    duration: 3000,
  });
}

// Xem Chi Tiết Đơn Hàng
function viewOrderDetails(id) {
  const detailTr = document.getElementById(`order-detail-${id}`);
  if (detailTr.style.display === "none") {
    detailTr.style.display = "table-row";
  } else {
    detailTr.style.display = "none";
  }
}

// Lọc Đơn Hàng
document
  .getElementById("filterOrderStatus")
  .addEventListener("change", function () {
    toast({
      title: "Thông Báo",
      message: "Thay đổi trạng thái đơn hàng thành công.",
      type: "success",
      duration: 3000,
    });
  });

document
  .getElementById("sortOrderAddress")
  .addEventListener("change", function () {
    toast({
      title: "Thông Báo",
      message: "Thay đổi địa chỉ sắp xếp thành công.",
      type: "success",
      duration: 3000,
    });
  });

function filterOrders() {
  const startDate = document.getElementById("startDate").value;
  const endDate = document.getElementById("endDate").value;
  const orderStatus = document.getElementById("filterOrderStatus").value;
  const sortOrderAddress = document.getElementById("sortOrderAddress").value;

  // Kiểm tra ngày đã nhập chưa
  if (!startDate || !endDate) {
    toast({
      title: "Thông Báo",
      message: "Vui lòng nhập ngày bắt đầu và ngày kết thúc.",
      type: "warning",
      duration: 3000,
    });
    return;
  }

  // Load lại dữ liệu đơn hàng
  // Giả bộ dữ liệu
  orders_filter = [
    {
      id: 1,
      customer: "Nguyen Van A",
      status: "chưa xử lý",
      date: "2023-10-01",
      address: "Quận 1, Hồ Chí Minh",
      products: [
        { name: "Pizza Margherita", quantity: 2, unitPrice: "120,000 VND" },
        { name: "Coca Cola", quantity: 3, unitPrice: "20,000 VND" },
      ],
    },
    {
      id: 2,
      customer: "Tran Thi B",
      status: "đã xác nhận",
      date: "2023-10-05",
      address: "Quận 3, Hồ Chí Minh",
      products: [
        { name: "Pizza Pepperoni", quantity: 1, unitPrice: "150,000 VND" },
        { name: "Pepsi", quantity: 2, unitPrice: "20,000 VND" },
      ],
    },
  ];

  // Lọc dữ liệu giả bộ cứ show hết ra
  orders = orders_filter;

  renderOrders();
  // Chỉ hiện thông báo mà không thực hiện lọc
  toast({
    title: "Thông Báo",
    message: "Lọc đơn hàng thành công.",
    type: "success",
    duration: 3000,
  });
}

function refresh() {
  orders = originalOrders;
  // clear input
  document.getElementById("startDate").value = "";
  document.getElementById("endDate").value = "";
  document.getElementById("filterOrderStatus").value = "";
  document.getElementById("sortOrderAddress").value = "";
  renderOrders();
}
// Mock Data for Users
users.push(
  {
    id: 4,
    username: "Pham Van G",
    email: "g@example.com",
    status: "Hoạt động",
    type: "Khách hàng",
  },
  {
    id: 5,
    username: "Hoang Thi H",
    email: "h@example.com",
    status: "Hoạt động",
    type: "Khách hàng",
  },
  {
    id: 6,
    username: "Le Van I",
    email: "i@example.com",
    status: "Khóa",
    type: "Khách hàng",
  },
  {
    id: 7,
    username: "Tran Van J",
    email: "j@example.com",
    status: "Hoạt động",
    type: "Người quản trị",
  }
);

// Mock Data for Orders
let originalOrders = [
  {
    id: 5,
    customer: "Pham Van G",
    status: "đã giao thành công",
    date: "2023-10-14",
    address: "Quận Bình Thạnh, Hồ Chí Minh",
    products: [
      {
        name: "Pizza BBQ Chicken",
        quantity: 1,
        unitPrice: "250,000 VND",
      },
      { name: "Sprite", quantity: 2, unitPrice: "20,000 VND" },
    ],
  },
  {
    id: 6,
    customer: "Hoang Thi H",
    status: "chưa xử lý",
    date: "2023-10-16",
    address: "Quận Gò Vấp, Hồ Chí Minh",
    products: [
      {
        name: "Pizza Meat Lovers",
        quantity: 2,
        unitPrice: "300,000 VND",
      },
      { name: "Pepsi", quantity: 1, unitPrice: "20,000 VND" },
    ],
  },
  {
    id: 7,
    customer: "Le Van I",
    status: "đã giao hàng",
    date: "2023-10-17",
    address: "Quận Tân Bình, Hồ Chí Minh",
    products: [
      {
        name: "Pizza Veggie Delight",
        quantity: 1,
        unitPrice: "220,000 VND",
      },
      { name: "Fanta", quantity: 1, unitPrice: "20,000 VND" },
    ],
  },
  {
    id: 8,
    customer: "Nguyen Van A",
    status: "đã xác nhận",
    date: "2023-10-19",
    address: "Quận 1, Hồ Chí Minh",
    products: [
      {
        name: "Pizza BBQ Chicken",
        quantity: 1,
        unitPrice: "250,000 VND",
      },
      { name: "Coca Cola", quantity: 1, unitPrice: "20,000 VND" },
    ],
  },
  {
    id: 9,
    customer: "Hoang Thi H",
    status: "đã giao thành công",
    date: "2023-10-20",
    address: "Quận 3, Hồ Chí Minh",
    products: [
      {
        name: "Pizza Meat Lovers",
        quantity: 1,
        unitPrice: "300,000 VND",
      },
      { name: "Pepsi", quantity: 2, unitPrice: "20,000 VND" },
    ],
  },
  {
    id: 10,
    customer: "Tran Van J",
    status: "đã xác nhận",
    date: "2023-10-21",
    address: "Quận 5, Hồ Chí Minh",
    products: [
      {
        name: "Pizza Veggie Delight",
        quantity: 2,
        unitPrice: "220,000 VND",
      },
      { name: "Sprite", quantity: 1, unitPrice: "20,000 VND" },
    ],
  },
  {
    id: 11,
    customer: "Le Van C",
    status: "đã giao thành công",
    date: "2023-10-22",
    address: "Quận 7, Hồ Chí Minh",
    products: [
      {
        name: "Pizza BBQ Chicken",
        quantity: 3,
        unitPrice: "250,000 VND",
      },
      { name: "Fanta", quantity: 2, unitPrice: "20,000 VND" },
    ],
  },
  {
    id: 12,
    customer: "Tran Thi B",
    status: "đã xác nhận",
    date: "2023-10-23",
    address: "Quận 9, Hồ Chí Minh",
    products: [
      {
        name: "Pizza Meat Lovers",
        quantity: 2,
        unitPrice: "300,000 VND",
      },
      { name: "Coca Cola", quantity: 3, unitPrice: "20,000 VND" },
    ],
  },
  {
    id: 13,
    customer: "Hoang Thi H",
    status: "đã giao thành công",
    date: "2023-10-24",
    address: "Quận Phú Nhuận, Hồ Chí Minh",
    products: [
      {
        name: "Pizza Veggie Delight",
        quantity: 1,
        unitPrice: "220,000 VND",
      },
      { name: "Sprite", quantity: 2, unitPrice: "20,000 VND" },
    ],
  },
  {
    id: 14,
    customer: "Pham Van G",
    status: "đã xác nhận",
    date: "2023-10-25",
    address: "Quận Tân Phú, Hồ Chí Minh",
    products: [
      {
        name: "Pizza BBQ Chicken",
        quantity: 2,
        unitPrice: "250,000 VND",
      },
      { name: "Pepsi", quantity: 1, unitPrice: "20,000 VND" },
    ],
  },
  // Add more orders as needed
];

originalOrders.forEach((order) => {
  orders.push(order);
});

function generateStatistics() {
  event.preventDefault();
  const startDate = "2023-01-01";
  const endDate = "2024-12-31";
  console.log(startDate, endDate);

  if (!startDate || !endDate) {
    toast({
      title: "Thông Báo",
      message: "Vui lòng chọn ngày bắt đầu và kết thúc.",
      type: "error",
      duration: 3000,
    });
  } else {
    // Filter orders within the date range
    const filteredOrders = orders.filter((order) => {
      const orderDate = new Date(order.date);
      return orderDate >= new Date(startDate) && orderDate <= new Date(endDate);
    });

    // Item Sales Statistics
    const itemSalesMap = {};
    let totalRevenue = 0;

    filteredOrders.forEach((order) => {
      order.products.forEach((product) => {
        const { name, quantity, unitPrice } = product;
        const priceNumber = parseInt(unitPrice.replace(/[^0-9]/g, ""));
        if (itemSalesMap[name]) {
          itemSalesMap[name].quantity += quantity;
          itemSalesMap[name].revenue += quantity * priceNumber;
        } else {
          itemSalesMap[name] = {
            quantity: quantity,
            revenue: quantity * priceNumber,
          };
        }
        totalRevenue += quantity * priceNumber;
      });
    });

    // Convert itemSalesMap to array for sorting
    const itemSalesArray = Object.keys(itemSalesMap).map((key) => ({
      name: key,
      quantity: itemSalesMap[key].quantity,
      revenue: itemSalesMap[key].revenue,
    }));

    // Determine best-selling and least-selling items
    const sortedByQuantity = [...itemSalesArray].sort(
      (a, b) => b.quantity - a.quantity
    );
    const bestSelling = sortedByQuantity[0];
    const leastSelling = sortedByQuantity[sortedByQuantity.length - 1];

    // Render Item Sales Table
    const itemSalesTbody = document
      .getElementById("itemSalesTable")
      .querySelector("tbody");
    itemSalesTbody.innerHTML = "";
    itemSalesArray.forEach((item) => {
      const tr = document.createElement("tr");

      const tdName = document.createElement("td");
      tdName.textContent = item.name;
      tr.appendChild(tdName);

      const tdQuantity = document.createElement("td");
      tdQuantity.textContent = item.quantity;
      tr.appendChild(tdQuantity);

      const tdRevenue = document.createElement("td");
      tdRevenue.textContent = new Intl.NumberFormat("vi-VN", {
        style: "currency",
        currency: "VND",
      }).format(item.revenue);
      tr.appendChild(tdRevenue);

      const tdAction = document.createElement("td");
      const viewBtn = document.createElement("a");
      viewBtn.textContent = "Xem Hóa Đơn";
      viewBtn.href = "#";
      viewBtn.classList.add("view-invoices-btn");
      viewBtn.onclick = () => viewInvoicesByItem(item.name, startDate, endDate);
      tdAction.appendChild(viewBtn);
      tr.appendChild(tdAction);

      // Highlight best and least selling items
      if (item.name === bestSelling.name) {
        tr.classList.add("highlight-best");
      }
      if (item.name === leastSelling.name) {
        tr.classList.add("highlight-worst");
      }

      itemSalesTbody.appendChild(tr);
    });

    // Update Total Revenue
    document.getElementById("totalRevenue").textContent = new Intl.NumberFormat(
      "vi-VN",
      {
        style: "currency",
        currency: "VND",
      }
    ).format(totalRevenue);

    // Update Best-Selling and Least-Selling Items
    document.getElementById("bestSellingItem").textContent = bestSelling.name;
    document.getElementById("leastSellingItem").textContent = leastSelling.name;

    // Customer Revenue Statistics
    const customerRevenueMap = {};

    filteredOrders.forEach((order) => {
      const { customer, products } = order;
      let orderTotal = 0;
      products.forEach((product) => {
        const priceNumber = parseInt(product.unitPrice.replace(/[^0-9]/g, ""));
        orderTotal += product.quantity * priceNumber;
      });
      if (customerRevenueMap[customer]) {
        customerRevenueMap[customer] += orderTotal;
      } else {
        customerRevenueMap[customer] = orderTotal;
      }
    });

    // Convert customerRevenueMap to array and sort
    const customerRevenueArray = Object.keys(customerRevenueMap).map((key) => ({
      name: key,
      revenue: customerRevenueMap[key],
    }));
    customerRevenueArray.sort((a, b) => b.revenue - a.revenue);
    const topCustomers = customerRevenueArray.slice(0, 5);

    // Render Top Customers Table
    const topCustomersTbody = document
      .getElementById("topCustomersTable")
      .querySelector("tbody");
    topCustomersTbody.innerHTML = "";
    topCustomers.forEach((customer) => {
      const tr = document.createElement("tr");

      const tdName = document.createElement("td");
      tdName.textContent = customer.name;
      tr.appendChild(tdName);

      const tdRevenue = document.createElement("td");
      tdRevenue.textContent = new Intl.NumberFormat("vi-VN", {
        style: "currency",
        currency: "VND",
      }).format(customer.revenue);
      tr.appendChild(tdRevenue);

      const tdAction = document.createElement("td");
      const viewBtn = document.createElement("a");
      viewBtn.textContent = "Xem Hóa Đơn";
      viewBtn.href = "#";
      viewBtn.classList.add("view-invoices-btn");
      viewBtn.onclick = () =>
        viewInvoicesByCustomer(customer.name, startDate, endDate);
      tdAction.appendChild(viewBtn);
      tr.appendChild(tdAction);

      topCustomersTbody.appendChild(tr);
    });
  }
}
function refresh_tk() {
  // Clear input fields
  document.getElementById("statStartDate").value = "";
  document.getElementById("statEndDate").value = "";

  // Clear Item Sales Table
  const itemSalesTbody = document
    .getElementById("itemSalesTable")
    .querySelector("tbody");
  itemSalesTbody.innerHTML = "";

  // Clear Top Customers Table
  const topCustomersTbody = document
    .getElementById("topCustomersTable")
    .querySelector("tbody");
  topCustomersTbody.innerHTML = "";

  // Clear Total Revenue
  document.getElementById("totalRevenue").textContent = "";

  // Optionally, you can also clear any other data or reset any other UI elements if needed
}

// View Invoices by Item
function toggleDetails(event) {
  event.preventDefault();
  const details = event.target
    .closest(".order-card")
    .querySelector(".order-expanded-details");
  const computedStyle = window.getComputedStyle(details);
  if (computedStyle.display === "none") {
    details.style.display = "block";
  } else {
    details.style.display = "none";
  }
}

function openDialog() {
  document.getElementById("orderDialog").classList.add("active");
}

function closeDialog() {
  document.getElementById("orderDialog").classList.remove("active");
}

function viewInvoicesByItem(itemName, startDate, endDate) {
  const orders = getOrdersByItem(itemName, startDate, endDate); // Replace with actual data fetching logic
  displayOrderCards(orders);
  openDialog();
}

function viewInvoicesByCustomer(customerName, startDate, endDate) {
  const orders = getOrdersByCustomer(customerName, startDate, endDate); // Replace with actual data fetching logic
  displayOrderCards(orders);
  openDialog();
}

function displayOrderCards(orders) {
  const container = document.getElementById("orderCardsContainer");
  container.innerHTML = "";
  orders.forEach((order) => {
    const card = document.createElement("div");
    card.classList.add("order-card");
    let statusClass = "";
    if (order.status === "Đã giao") {
      statusClass = "status-completed";
    } else if (order.status === "Đang xử lý") {
      statusClass = "status-pending";
    } else if (order.status === "Đã hủy") {
      statusClass = "status-cancelled";
    }
    card.innerHTML = `
    <div class="order-header">
      <div class="order-info">
        <span class="order-label">Ngày mua:</span>
        <span class="order-value">${order.date}</span>
      </div>
      <div class="order-info">
        <span class="order-label">Mã đơn hàng:</span>
        <span class="order-value">#${order.id}</span>
      </div>
      <div class="order-info">
        <span class="order-label">Trạng thái:</span>
        <span class="order-value ${statusClass}">${order.status}</span>
      </div>
      <div class="order-info">
        <span class="order-label">Khách hàng:</span>
        <span class="order-value">${order.customerName}</span>
      </div>
    </div>
    <div class="order-details-section">
      <div class="order-info" style="flex-grow: 1">
        <span class="order-label">Thành tiền:</span>
        <span class="order-value" style="color: #4caf50; font-weight: bold">${
          order.total
        }</span>
      </div>
      <a class="view-details-link" onclick="toggleDetails(event)">Xem chi tiết &#9660</a>
    </div>
    <div class="order-expanded-details">
      ${order.products
        .map(
          (product) => `
        <div class="order-product">
          <span>${product.name}</span>
          <span>Số lượng: ${product.quantity}</span>
          <span>${product.price}</span>
        </div>
      `
        )
        .join("")}
      <div class="order-details-address">
        <div class="order-info">
          <span class="order-label">Địa chỉ nhận hàng:</span>
          <span class="order-value">${order.address}</span>
        </div>
      </div>
      <div class="total-payment">Tổng thanh toán: ${order.total}</div>
    </div>
  `;
    container.appendChild(card);
  });
}

function getOrdersByItem(itemName, startDate, endDate) {
  // Mock data, replace with actual data fetching logic
  return [
    {
      customerName: "Nguyen Van A",
      id: 12345,
      date: "15/11/2023",
      status: "Đã giao",
      total: "1.250.000đ",
      address: "123 Đường ABC, Phường XYZ, Quận 1, TP.HCM",
      products: [
        {
          name: "Pizza Tôm Xốt Tỏi Cay",
          quantity: 2,
          price: "250.000đ",
        },
        {
          name: "Pizza 3 loại phô mai nhà làm",
          quantity: 1,
          price: "750.000đ",
        },
      ],
    },
    {
      customerName: "Tran Thi B",
      id: 12346,
      date: "16/11/2023",
      status: "Đã giao",
      total: "1.500.000đ",
      address: "456 Đường XYZ, Phường ABC, Quận 2, TP.HCM",
      products: [
        {
          name: "Pizza 3 loại phô mai nhà làm",
          quantity: 1,
          price: "500.000đ",
        },
        {
          name: "Pizza 3 loại phô mai nhà làm",
          quantity: 2,
          price: "500.000đ",
        },
      ],
    },
    // Additional orders
    {
      customerName: "Le Van C",
      id: 12347,
      date: "17/11/2023",
      status: "Đang xử lý",
      total: "800.000đ",
      address: "789 Đường DEF, Phường GHI, Quận 3, TP.HCM",
      products: [
        {
          name: "Pizza Hải Sản",
          quantity: 1,
          price: "800.000đ",
        },
      ],
    },
    {
      customerName: "Pham Van D",
      id: 12348,
      date: "18/11/2023",
      status: "Đã giao",
      total: "1.100.000đ",
      address: "101 Đường JKL, Phường MNO, Quận 4, TP.HCM",
      products: [
        {
          name: "Pizza Bò Nướng Tiêu Đen",
          quantity: 2,
          price: "550.000đ",
        },
      ],
    },
    {
      customerName: "Nguyen Van E",
      id: 12349,
      date: "19/11/2023",
      status: "Đã giao",
      total: "600.000đ",
      address: "202 Đường PQR, Phường STU, Quận 5, TP.HCM",
      products: [
        {
          name: "Pizza Gà Teriyaki",
          quantity: 1,
          price: "600.000đ",
        },
      ],
    },
  ];
}

function getOrdersByCustomer(customerName, startDate, endDate) {
  // Mock data, replace with actual data fetching logic
  return [
    {
      customerName: "Nguyen Van A",
      id: 12345,
      date: "15/11/2023",
      status: "Đã giao",
      total: "1.250.000đ",
      address: "123 Đường ABC, Phường XYZ, Quận 1, TP.HCM",
      products: [
        {
          name: "Pizza 4 loại phô mai nhà làm",
          quantity: 2,
          price: "550.000đ",
        },
        { name: "Pepsi", quantity: 1, price: "50.000đ" },
      ],
    },
    // Additional orders
    {
      customerName: "Nguyen Van A",
      id: 12346,
      date: "16/11/2023",
      status: "Đã giao",
      total: "900.000đ",
      address: "456 Đường UVW, Phường XYZ, Quận 2, TP.HCM",
      products: [
        {
          name: "Pizza Xúc Xích Ý",
          quantity: 1,
          price: "900.000đ",
        },
      ],
    },
    {
      customerName: "Nguyen Van A",
      id: 12347,
      date: "17/11/2023",
      status: "Đang xử lý",
      total: "750.000đ",
      address: "789 Đường ABC, Phường DEF, Quận 3, TP.HCM",
      products: [
        {
          name: "Pizza Gà Nướng BBQ",
          quantity: 1,
          price: "750.000đ",
        },
      ],
    },
    {
      customerName: "Nguyen Van A",
      id: 12348,
      date: "18/11/2023",
      status: "Đã giao",
      total: "1.200.000đ",
      address: "101 Đường GHI, Phường JKL, Quận 4, TP.HCM",
      products: [
        {
          name: "Pizza Rau Củ Chay",
          quantity: 2,
          price: "600.000đ",
        },
      ],
    },
  ];
}
function logout_admin() {
  localStorage.removeItem("currentUser");
  window.location.href = "./Templates/sign-in_sign-up.html";
}

// Render Ban Đầu
document.addEventListener("DOMContentLoaded", () => {
  // Kiểm tra trong localStorage xem có dữ liệu CurrentUser không
  const currentUser = JSON.parse(localStorage.getItem("currentUser"));
  if (currentUser.role === "admin") {
    kiemtraDangnhapModal = document.getElementById("kiemtraDangnhapModal");
    kiemtraDangnhapModal.style.display = "none";
    renderUsers();
    renderProducts();
    renderOrders();
  }
});
