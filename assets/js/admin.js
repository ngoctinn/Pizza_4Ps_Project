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
