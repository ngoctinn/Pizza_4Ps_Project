// Tái sử dụng header footer trong trang
function load(selector, path) {
  const cached = localStorage.getItem(path);
  if (cached) {
    document.querySelector(selector).innerHTML = cached;
  }

  fetch(path)
    .then((res) => res.text())
    .then((html) => {
      if (html !== cached) {
        document.querySelector(selector).innerHTML = html;
        localStorage.setItem(path, html);
      }
    });
}
// HEADER
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
