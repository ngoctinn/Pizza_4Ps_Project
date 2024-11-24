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
      account: "user@gmail.com",
      password: "user123",
      role: "user",
    },
    // Thêm các người dùng khác ở đây
  ];
  if (!localStorage.getItem("users")) {
    localStorage.setItem("users", JSON.stringify(defaultUsers));
  }
  let users = JSON.parse(localStorage.getItem("users")) || defaultUsers;

  const account = document.getElementById("account").value;
  const password = document.getElementById("password").value;

  if (account && password) {
    const user = users.find(
      (user) => user.account === account && user.password === password
    );

    if (user) {
      alert("Login success");
      localStorage.setItem("currentUser", JSON.stringify(user));
      if (user.role === "admin") {
        console.log("admin");
        window.location.href = "../admin.html";
      } else if (user.role === "user") {
        // thêm trạng thái đăng nhập vào localStorage có key là isLoggedIn và giá trị là tên người dùng
        localStorage.setItem("isLoggedIn", user.name);
        window.location.href = "./deliver.html";
      }
    } else {
      alert("Login failed");
    }
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
    alert("Vui lòng nhập tên.");
    return;
  }

  // Validate email format
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email)) {
    alert("Vui lòng nhập email hợp lệ.");
    return;
  }

  // Validate password strength (at least 6 characters)
  if (password.length < 6) {
    alert("Mật khẩu phải có ít nhất 6 ký tự.");
    return;
  }

  // Retrieve existing users from localStorage
  let users = JSON.parse(localStorage.getItem("users")) || [];

  // Check if the email already exists
  const userExists = users.some((user) => user.account === email);
  if (userExists) {
    alert("Email đã được sử dụng. Vui lòng sử dụng email khác.");
    return;
  }

  // Create a new user object
  const newUser = {
    account: email,
    password: password,
    role: "user", // Default role
    name: name,
  };

  // Add the new user to the users array
  users.push(newUser);

  // Save the updated users array to localStorage
  localStorage.setItem("users", JSON.stringify(users));

  alert("Đăng ký thành công! Bạn có thể đăng nhập ngay bây giờ.");

  // Reset the sign-up form
  document.getElementById("signUpForm").reset();
  document.querySelector(".sign-up-mode") &&
    main.classList.remove("sign-up-mode");
}
