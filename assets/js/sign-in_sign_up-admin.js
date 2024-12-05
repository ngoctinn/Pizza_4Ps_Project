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
  event.preventDefault();
  // khai báo dữ liệu mặc định
  const defaultUsers = [
    {
      account: "admin@gmail.com",
      password: "admin123",
      name: "Nguyễn Ngọc Tín",
      role: "admin",
      cart: [],
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

  localStorage.setItem("users", JSON.stringify(defaultUsers));
  let users = JSON.parse(localStorage.getItem("users")) || defaultUsers;

  const account = document.getElementById("account").value;
  const password = document.getElementById("password").value;

  //kiểm tra nhập đủ thông tin chưa
  if (!account || !password) {
    toast({
      title: "Cảnh báo",
      message: "Vui lòng nhập đủ thông tin.",
      type: "error",
      duration: 3000,
    });
    return;
  }

  // Bỏ qua kiểm tra tài khoản và mật khẩu
  // nếu role là admin thì lấy người dùng đầu tiên trong danh sách
  // nếu role là user thì lấy người dùng thứ 2 trong danh sách

  const user = users[0];

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
  const address = document.getElementById("signUpAddress").value.trim();

  // Validate the sign-up form
  if (!name || !email || !password || !address) {
    toast({
      title: "Cảnh báo",
      message: "Vui lòng nhập đủ thông tin.",
      type: "error",
      duration: 3000,
    });
    return;
  }

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
