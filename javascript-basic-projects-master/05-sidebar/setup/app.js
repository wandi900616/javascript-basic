const sidebarTgl = document.querySelector(".sidebar-toggle");
const closeBtn = document.querySelector(".close-btn");
const sidebar = document.querySelector(".sidebar");

const toggleSidebar = () => {
  sidebar.classList.toggle("show-sidebar");
};

const closeSidebar = () => {
  console.log("close");
  sidebar.classList.remove("show-sidebar");
};
sidebarTgl.addEventListener("click", toggleSidebar);
closeBtn.addEventListener("click", closeSidebar);
