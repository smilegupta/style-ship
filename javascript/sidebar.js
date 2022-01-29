const sidebarEl = document.getElementById("sidebar-toggle");
const sidebarToggle = document.getElementById("sidebar-header-wrapper");
const sidebarOptions = document.querySelectorAll(".sidebar-item");

const sidebarCTAs = [sidebarToggle, ...sidebarOptions];

sidebarCTAs.forEach((node) => {
  node.addEventListener("click", () => {
    sidebarEl.classList.toggle("sidebar-active");
  });
});
