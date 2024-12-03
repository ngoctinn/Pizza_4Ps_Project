const inputs = document.querySelectorAll(".input-field");
const toggle_btn = document.querySelectorAll(".toggle");
const main = document.querySelector("main");
const bullets = document.querySelectorAll(".bullets span");
const images = document.querySelectorAll(".image");

inputs.forEach((inp) => {
  inp.addEventListener("focus", () => {
    inp.classList.add("active");
  });
  inp.addEventListener("blur", () => {
    if (inp.value != "") return;
    inp.classList.remove("active");
  });
});

toggle_btn.forEach((btn) => {
  btn.addEventListener("click", () => {
    main.classList.toggle("sign-up-mode");
  });
});

function moveSlider() {
  let index = this.dataset.value;

  let currentImage = document.querySelector(`.img-${index}`);
  images.forEach((img) => img.classList.remove("show"));
  currentImage.classList.add("show");

  const textSlider = document.querySelector(".text-group");
  textSlider.style.transform = `translateY(${-(index - 1) * 2.2}rem)`;

  bullets.forEach((bull) => bull.classList.remove("active"));
  this.classList.add("active");
}

bullets.forEach((bullet) => {
  bullet.addEventListener("click", moveSlider);
});
// ========================= Login =========================
document
  .getElementById("loginForm")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Ngăn chặn sự kiện submit mặc định
    login();
  });
function login() {
  // khai báo dữ liệu mặc định
  const defaultUsers = [
    {
      account: "admin@gmail.com",
      password: "admin123",
      role: "admin",
    },
    {
      account: "dhsg@gmail.com",
      password: "dhsg123",
      name: "Nguyễn Ngọc Tín",
      role: "user",
      cart: [],
    },
    // Thêm các người dùng khác ở đây
  ];
  if (!localStorage.getItem("users")) {
    localStorage.setItem("users", JSON.stringify(defaultUsers));
  }
  let users = JSON.parse(localStorage.getItem("users")) || defaultUsers;

  const account = document.getElementById("account").value;
  const password = document.getElementById("password").value;

  // Bỏ qua kiểm tra tài khoản và mật khẩu
  const user = users[1]; // Lấy người dùng đầu tiên trong danh sách

  // Lưu thông tin người dùng hiện tại vào localStorage
  localStorage.setItem("currentUser", JSON.stringify(user));
  if (user.role === "admin") {
    console.log("admin");
    window.location.href = "../admin.html";
  } else if (user.role === "user") {
    //giỏ hàng
    window.location.href = "./Index.html";
  }
}
// ========================= Sign Up =========================

// Add event listener to the sign-up form
document
  .getElementById("signUpForm")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent default form submission
    signUp();
  });
function signUp() {
  const name = document.getElementById("signUpName").value.trim();
  const email = document.getElementById("signUpEmail").value.trim();
  const password = document.getElementById("signUpPassword").value.trim();

  // Validate name
  if (!name) {
    toast({
      title: "Error",
      message: "Vui lòng nhập tên.",
      type: "error",
      duration: 3000,
    });
    return;
  }

  // Validate email format
  const emailPattern = /^[^\s@]+@[^\s@]+(\.[^\s@]+)*$/;

  if (!emailPattern.test(email)) {
    toast({
      title: "Error",
      message: "Vui lòng nhập email hợp lệ.",
      type: "error",
      duration: 3000,
    });
    return;
  }

  // Validate password strength (at least 6 characters)
  if (password.length < 4) {
    toast({
      title: "Error",
      message: "Mật khẩu phải có ít nhất 4 ký tự.",
      type: "error",
      duration: 3000,
    });
    return;
  }

  // Retrieve existing users from localStorage
  let users = JSON.parse(localStorage.getItem("users")) || [];

  // Check if the email already exists
  const userExists = users.some((user) => user.account === email);
  if (userExists) {
    toast({
      title: "Error",
      message: "Email đã được sử dụng. Vui lòng sử dụng email khác.",
      type: "error",
      duration: 3000,
    });
    return;
  }

  // Create a new user object
  const newUser = {
    account: email,
    password: password,
    role: "user", // Default role
    name: name,
    cart: [], // Empty cart
  };

  // Add the new user to the users array
  users.push(newUser);

  // Save the updated users array to localStorage
  localStorage.setItem("users", JSON.stringify(users));

  toast({
    title: "Success",
    message: "Đăng ký thành công! Bạn có thể đăng nhập ngay bây giờ.",
    type: "success",
    duration: 3000,
  });

  // Reset the sign-up form
  document.getElementById("signUpForm").reset();
  document.querySelector(".sign-up-mode") &&
    main.classList.remove("sign-up-mode");
}
