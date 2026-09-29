const menuToggle = document.querySelector(".menu-toggle");
const siteNav = document.querySelector("#site-nav");

if (menuToggle && siteNav) {
  menuToggle.addEventListener("click", () => {
    siteNav.classList.toggle("open");
  });
}

document.querySelectorAll("#site-nav a").forEach((link) => {
  link.addEventListener("click", () => {
    siteNav?.classList.remove("open");
  });
});

document.querySelectorAll("#year").forEach((element) => {
  element.textContent = new Date().getFullYear();
});
