// Nav li active
document.addEventListener("DOMContentLoaded", () => {
  if (window.innerWidth > 500) {
    const navItems = document.querySelectorAll("nav .middle-nav li");

    navItems.forEach((item) => {
      item.addEventListener("click", () => {
        navItems.forEach((nav) => nav.classList.remove("active"));

        item.classList.add("active");
      });
    });
  }
});

// Header li active
document.addEventListener("DOMContentLoaded", () => {
  const navItems = document.querySelectorAll(".blogs-header li");

  navItems.forEach((item) => {
    item.addEventListener("click", () => {
      navItems.forEach((nav) => nav.classList.remove("active"));

      item.classList.add("active");
    });
  });
});

// Footer li active
document.addEventListener("DOMContentLoaded", () => {
  const navItems = document.querySelectorAll(".upper-footer li");

  navItems.forEach((item) => {
    item.addEventListener("click", () => {
      navItems.forEach((nav) => nav.classList.remove("active"));

      item.classList.add("active");
    });
  });
});

// Toggle Mobile navbar
document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.querySelector(".hamburger input");
  const nav = document.querySelector("nav");

  hamburger.addEventListener("click", function () {
    nav.classList.toggle("active");
  });
});

// Toggle Services in mobile navbar
document.addEventListener("DOMContentLoaded", () => {
  const servicesDropdownBtn = document.querySelector(".services-dropdown");
  const arrow = document.querySelector(".services-dropdown span img");

  servicesDropdownBtn.addEventListener("click", function () {
    servicesDropdownBtn.classList.toggle("active");
    arrow.classList.toggle("rotate");
  });
});

// Web view services toggle
document.addEventListener("DOMContentLoaded", () => {
  const btn = document.querySelector(".middle-nav li:first-child");
  const dropdown = document.querySelector(".services-dropdown-web-view");
  const arrow = document.querySelector(".middle-nav li:first-child img");

  btn.addEventListener("click", () => {
    dropdown.classList.toggle("active");
    arrow.classList.toggle("rotate");
  });
});

// Navbar
document.addEventListener("DOMContentLoaded", () => {
  const navbar = document.querySelector("header nav");

  const changeNavbarColorOnScroll = () => {
    if (window.scrollY > 10) {
      navbar.style.backgroundColor = "#ffffff";
    } else {
      navbar.style.backgroundColor = "";
    }
  };

  window.addEventListener("scroll", changeNavbarColorOnScroll);
});
