document.addEventListener("DOMContentLoaded", () => {
  const sidebar = document.getElementById("toggle-sidebar");

  function openNav() {
    sidebar.style.width = "250px";
  }

  function closeNav() {
    sidebar.style.width = "0";
  }
});
