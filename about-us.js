gsap.registerPlugin(ScrollTrigger);

// Hero section scroll animation
if (window.innerWidth > 800) {
  const heroImg = document.querySelector(".hero-section img");
  const heroContent = document.querySelector(".hero-section .content");

  gsap
    .timeline({
      scrollTrigger: {
        trigger: ".hero-section",
        start: "top top",
        end: "bottom top",
        scrub: true,
      },
    })
    .to(heroImg, {
      width: "95%",
      height: "70%",
      ease: "power1.out",
    })
    .to(
      heroContent,
      {
        opacity: 0,
        ease: "power1.out",
      },
      "<"
    );
}

// About us section scroll animation
if (window.innerWidth > 1000) {
  const aboutContent = document.querySelector(
    ".about-us-section .about-content"
  );

  gsap
    .timeline({
      scrollTrigger: {
        trigger: ".about-us-section",
        start: "top 90%",
        end: "bottom top",
        scrub: true,
      },
    })
    .to(".about-us-section .image-container img", {
      y: "-40%",
    })
    .to(
      aboutContent,
      {
        y: "-60px",
        ease: "power1.out",
      },
      "<"
    );
}

// Founder section slider
document.addEventListener("DOMContentLoaded", function () {
  const slider = document.querySelector(".card-slider");
  const slideRightBtn = document.getElementById("slideRightBtn");
  const slideLeftBtn = document.getElementById("slideLeftBtn");
  if (window.innerWidth > 900) {
    slideRightBtn.addEventListener("click", function () {
      slideLeftBtn.classList.remove("hidden");
      slider.scrollBy({
        left: 600,
        behavior: "smooth",
      });
    });

    slideLeftBtn.addEventListener("click", function () {
      slider.scrollBy({
        left: -600,
        behavior: "smooth",
      });
    });
  } else {
    slideRightBtn.addEventListener("click", function () {
      slideLeftBtn.classList.remove("hidden");
      slider.scrollBy({
        left: 300,
        behavior: "smooth",
      });
    });

    slideLeftBtn.addEventListener("click", function () {
      slider.scrollBy({
        left: -300,
        behavior: "smooth",
      });
    });
  }
});

// Timeline Section
document.addEventListener("DOMContentLoaded", () => {
  if (window.innerWidth > 992) {
    const section = document.querySelector(".scroll-section");
    const horizontalContent = document.querySelector(".horizontal-content");
    const progressBar = document.querySelector(".progress");
    const items = document.querySelectorAll(".item");
    const dots = document.querySelectorAll(".dots span");

    const scrollWidth = horizontalContent.scrollWidth - window.innerWidth;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: "top top",
        end: `+=${scrollWidth}`,
        scrub: true,
        pin: true,
      },
    });

    tl.to(horizontalContent, {
      x: () => -scrollWidth,
      ease: "none",
      onUpdate: function () {
        const progress =
          gsap.getProperty(horizontalContent, "x") / -scrollWidth;
        progressBar.style.width = `${progress * 100}%`;

        const progressPercent = progress * 100;

        items.forEach((item, index) => {
          const dot = dots[index];
          const startPercent = (index / items.length) * 100;
          const endPercent = ((index + 1) / items.length) * 100;

          if (progressPercent >= startPercent && progressPercent < endPercent) {
            item.classList.add("active");
            if (dot) dot.classList.add("active");
          } else {
            item.classList.remove("active");
            if (dot) dot.classList.remove("active");
          }
        });
      },
    });
  }
});

//// Teams Section

// Card Shuffle
document.addEventListener("DOMContentLoaded", () => {
  if (window.innerWidth > 767) {
    const cards = document.querySelectorAll(".team-section .card");
    const section = document.querySelector(".team-section");

    function applyShuffle() {
      gsap.to(cards[0], {
        duration: 0.5,
        rotate: -15,
        top: "-10%",
        left: "145%",
        ease: "power2.out",
      });

      gsap.to(cards[1], {
        duration: 0.5,
        rotate: -10,
        top: "-10%",
        left: "44%",
        ease: "power2.out",
      });

      gsap.to(cards[2], {
        duration: 0.5,
        rotate: 10,
        top: "-10%",
        left: "-50%",
        ease: "power2.out",
      });

      gsap.to(cards[3], {
        duration: 0.5,
        rotate: 0,
        top: "-10%",
        left: "-160%",
        ease: "power2.out",
      });

      gsap.to(cards[4], {
        duration: 0.5,
        rotate: -5,
        top: "-115%",
        left: "160%",
        ease: "power2.out",
      });

      gsap.to(cards[5], {
        duration: 0.5,
        rotate: -5,
        top: "-115%",
        left: "50%",
        ease: "power2.out",
      });

      gsap.to(cards[6], {
        duration: 0.5,
        rotate: 10,
        top: "-115%",
        left: "-50%",
        ease: "power2.out",
      });

      gsap.to(cards[7], {
        duration: 0.5,
        rotate: 0,
        top: "-115%",
        left: "-160%",
        ease: "power2.out",
      });
    }

    function resetCards() {
      gsap.to(cards, {
        duration: 1,
        left: "0%",
        top: "0%",
        rotate: 0,
        ease: "power2.in",
      });
    }

    applyShuffle();

    gsap.to(section, {
      scrollTrigger: {
        trigger: section,
        start: "top 95%",
        end: "bottom 30%",
        onEnter: () => {
          resetCards();
        },
        once: true,
      },
    });
  }
});

// Founder section giving first card margin left
if (window.innerWidth > 992) {
  function adjustFounderSectionMargin() {
    const screenWidth = window.innerWidth;

    const bootstrapContainer = document.querySelector(
      ".team-section .container"
    );
    const containerWidth = bootstrapContainer
      ? bootstrapContainer.offsetWidth
      : 0;

    const marginLeftValue = (screenWidth - containerWidth) / 2 + 50;

    const card = document.querySelector(
      ".founders-section .card-slider .card:first-child"
    );
    if (card) {
      card.style.marginLeft = `${marginLeftValue}px`;
    }
  }

  adjustFounderSectionMargin();

  window.addEventListener("resize", adjustFounderSectionMargin);
}

// Timeline Mobile view section
document.addEventListener("DOMContentLoaded", () => {
  if (window.innerWidth < 992) {
    const container = document.querySelector(".timeline-section .container");
    const progressBar = document.querySelector(
      ".timeline-section .progress-bar .progress"
    );
    const dots = document.querySelectorAll(".timeline-section .dots .dot");

    const updateProgressBar = () => {
      const scrollLeft = container.scrollLeft;
      const scrollableWidth = container.scrollWidth - container.clientWidth;

      const progress = Math.min((scrollLeft / scrollableWidth) * 100, 100);
      progressBar.style.width = `${progress}%`;

      dots.forEach((dot, index) => {
        const dotPosition = (index / (dots.length - 1)) * 100;
        if (progress >= dotPosition) {
          dot.style.backgroundColor = "#ff7f00";
        } else {
          dot.style.backgroundColor = "#ffdbb8";
        }
      });
    };

    container.addEventListener("scroll", updateProgressBar);

    updateProgressBar();
  }
});

// Expanding about us section
document.addEventListener("DOMContentLoaded", () => {
  const readMoreBtn = document.querySelector(".about-content .read-more-btn");
  const content = document.querySelector(".about-content p.my-3");

  readMoreBtn.addEventListener("click", () => {
    // Toggle the "expanded" class on the content paragraph
    content.classList.toggle("expanded");

    // Change the text of the read-more button
    if (content.classList.contains("expanded")) {
      readMoreBtn.textContent = "Collapse";
    } else {
      readMoreBtn.textContent = "Read More";
    }
  });
});
