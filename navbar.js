// Nav li active
document.addEventListener("DOMContentLoaded", () => {
  if (window.innerWidth > 500) {
    const navItems = document.querySelectorAll(
      "nav .middle-nav li:not(:first-child)"
    );

    navItems.forEach((item) => {
      item.addEventListener("click", () => {
        navItems.forEach((nav) => nav.classList.remove("active"));

        item.classList.add("active");
      });
    });
  }
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
  const servicesDropdownBtn = document.querySelector(
    ".mobile-nav li:first-child"
  );
  const mobileNav = document.querySelector(".mobile-nav > div:first-child");
  const serviceDropdown = document.querySelector(".mobile-service-dropdown");
  const backBtn = document.querySelector(".mobile-service-dropdown h6");

  servicesDropdownBtn.addEventListener("click", function () {
    mobileNav.classList.add("d-none");
    serviceDropdown.classList.remove("d-none");
  });

  backBtn.addEventListener("click", () => {
    mobileNav.classList.remove("d-none");
    serviceDropdown.classList.add("d-none");
  });
});

// Web view services toggle
document.addEventListener("DOMContentLoaded", () => {
  const togglebtn = document.querySelector(".middle-nav li:first-child");
  const activebtn = document.querySelector(".middle-nav li:first-child");
  const dropdown = document.querySelector(".services-dropdown-web-view");
  const arrow = document.querySelector(".middle-nav li:first-child img");

  togglebtn.addEventListener("mouseover", () => {
    dropdown.classList.add("active");
    arrow.classList.add("rotate");
    activebtn.classList.add("active");
  });

  togglebtn.addEventListener("mouseout", () => {
    dropdown.classList.remove("active");
    arrow.classList.remove("rotate");
    activebtn.classList.remove("active");
  });
});

// Navbar changing colour when scrolling down
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

// Toggling between Prime Shield Maintenance and Aesthetics
document.addEventListener("DOMContentLoaded", () => {
  const maintenance = document.querySelector(".maintenance");
  const aesthetic = document.querySelector(".aesthetic");
  const maintenanceServices = document.querySelector(".maintenance-services");
  const aestheticServices = document.querySelector(".aesthetic-services");

  maintenance.addEventListener("mouseover", () => {
    maintenance.classList.add("active");
    aesthetic.classList.remove("active");
    maintenanceServices.classList.add("active");
    aestheticServices.classList.remove("active");
  });

  aesthetic.addEventListener("mouseover", () => {
    aesthetic.classList.add("active");
    maintenance.classList.remove("active");
    maintenanceServices.classList.remove("active");
    aestheticServices.classList.add("active");
  });
});

// Open location dropdown (Web view)
document.addEventListener("DOMContentLoaded", () => {
  const locationBtn = document.querySelector(".right-nav .location");
  const locationList = document.querySelectorAll(".right-nav .location li");

  locationBtn.addEventListener("click", () => {
    locationBtn.classList.toggle("active");
  });

  locationList.forEach((location) => {
    location.addEventListener("click", () => {
      locationList.forEach((item) => {
        item.classList.remove("active");
      });
      location.classList.add("active");
    });
  });
});

// Open Location dropdown (Mobile view)
document.addEventListener("DOMContentLoaded", () => {
  const locationBtn = document.querySelector(
    ".mobile-nav div:first-child .location"
  );
  const mainNav = document.querySelector(".mobile-nav div:first-child");
  const locationDropdown = document.querySelector(
    ".mobile-nav .location-dropdown"
  );
  const locationList = document.querySelectorAll(
    ".mobile-nav .location-dropdown li"
  );
  const secondLocationDropdown = document.querySelector(
    ".mobile-nav .location-dropdown .location"
  );

  locationBtn.addEventListener("click", () => {
    locationDropdown.classList.remove("d-none");
    mainNav.classList.add("d-none");
  });

  locationList.forEach((location) => {
    location.addEventListener("click", () => {
      locationList.forEach((item) => {
        item.classList.remove("active");
      });
      location.classList.add("active");
      locationDropdown.classList.add("d-none");
      mainNav.classList.remove("d-none");
    });
  });

  secondLocationDropdown.addEventListener("click", () => {
    locationDropdown.classList.add("d-none");
    mainNav.classList.remove("d-none");
  });
});
