// Hero Section Animation
if (window.innerWidth > 1000) {
  gsap.registerPlugin(ScrollTrigger);

  gsap
    .timeline({
      scrollTrigger: {
        trigger: ".hero-section",
        start: "top top",
        end: "+=400%",
        scrub: true,
        pin: true,
        markers: false,
      },
    })

    .to(
      [
        ".img-1",
        ".img-2",
        ".img-3",
        ".img-4",
        ".img-5",
        ".img-6",
        ".img-7",
        ".img-8",
        ".img-9",
        ".img-10",
        ".img-11",
        ".img-12",
        ".img-13",
        ".img-14",
        ".img-15",
      ],
      {
        y: 0,
        duration: 1.5,
        ease: "power1.out",
      }
    )

    // Phase 1: Make the `<h1>` disappear
    .to(
      ".hero-section h1",
      {
        opacity: 0,
        duration: 0.5,
        ease: "power1.out",
      },
      "-=1"
    )

    // Phase 2: Slide specific images down and out of the screen
    .to([".img-2", ".img-7", ".img-12", ".img-4", ".img-9", ".img-14"], {
      y: 1000, // Slide down and out of the screen
      duration: 1,
      ease: "power1.out",
    })
    // Phase 3: Slide remaining images upward by 150px
    .to(
      [
        ".img-1",
        ".img-3",
        ".img-5",
        ".img-6",
        ".img-8",
        ".img-10",
        ".img-11",
        ".img-13",
        ".img-15",
      ],
      {
        y: -550, // Slide upward by 350px
        duration: 1,
        ease: "power1.out",
      }
    );
}

if (window.innerWidth <= 1000 && window.innerWidth > 850) {
  gsap.registerPlugin(ScrollTrigger);

  gsap
    .timeline({
      scrollTrigger: {
        trigger: ".hero-section",
        start: "top top",
        end: "+=100%", // Shorter scroll duration
        scrub: true,
        pin: false, // Pin the section
        markers: false, // Set to true for debugging
      },
    })
    // Animate each image with individual bottom values
    .fromTo(
      ".img-1",
      { bottom: 20 }, // Start from CSS-defined bottom value
      {
        bottom: 200, // Animate to this value
        duration: 1,
        ease: "power1.out",
      }
    )
    .fromTo(
      ".img-7",
      { bottom: -350 }, // Start from CSS-defined bottom value
      {
        bottom: -250, // Animate to this value
        duration: 1,
        ease: "power1.out",
      },
      "<"
    )
    .fromTo(
      ".img-9",
      { bottom: 700 }, // Start from CSS-defined bottom value
      {
        bottom: 900, // Animate to this value
        duration: 1,
        ease: "power1.out",
      },
      "<"
    )
    .fromTo(
      ".img-12",
      { bottom: 770 }, // Start from CSS-defined bottom value
      {
        bottom: 850, // Animate to this value
        duration: 1,
        ease: "power1.out",
      },
      "<"
    )
    .fromTo(
      ".img-15",
      { bottom: 400 }, // Start from CSS-defined bottom value
      {
        bottom: 600, // Animate to this value
        duration: 1,
        ease: "power1.out",
      },
      "<"
    );
}

if (window.innerWidth <= 850) {
  gsap.registerPlugin(ScrollTrigger);

  gsap
    .timeline({
      scrollTrigger: {
        trigger: ".hero-section",
        start: "top top",
        end: "+=100%", // Shorter scroll duration
        scrub: true,
        pin: false, // Pin the section
        markers: false, // Set to true for debugging
      },
    })
    // Animate each image with individual bottom values
    .fromTo(
      ".img-1",
      { bottom: 700 }, // Start from CSS-defined bottom value
      {
        bottom: 850, // Animate to this value
        duration: 1,
        ease: "power1.out",
      }
    )
    .fromTo(
      ".img-7",
      { bottom: -450 }, // Start from CSS-defined bottom value
      {
        bottom: -350, // Animate to this value
        duration: 1,
        ease: "power1.out",
      },
      "<"
    )
    .fromTo(
      ".img-9",
      { bottom: 600 }, // Start from CSS-defined bottom value
      {
        bottom: 750, // Animate to this value
        duration: 1,
        ease: "power1.out",
      },
      "<"
    )
    .fromTo(
      ".img-12",
      { bottom: 770 }, // Start from CSS-defined bottom value
      {
        bottom: 850, // Animate to this value
        duration: 1,
        ease: "power1.out",
      },
      "<"
    )
    .fromTo(
      ".img-15",
      { bottom: 400 }, // Start from CSS-defined bottom value
      {
        bottom: 600, // Animate to this value
        duration: 1,
        ease: "power1.out",
      },
      "<"
    );
}

// Animate Paragraph
document.querySelectorAll(".animated-paragraph").forEach((paragraph) => {
  const words = paragraph.textContent.trim().split(/\s+/);
  paragraph.innerHTML = words
    .map((word, index) => {
      return `<span class="word">${word}</span>${
        index < words.length - 1 ? "&nbsp;" : ""
      }`;
    })
    .join("");
});

gsap.registerPlugin(ScrollTrigger);

gsap.fromTo(
  ".word",
  { opacity: 0.3 },
  {
    opacity: 1,
    duration: 0.1,
    stagger: 0.01,
    scrollTrigger: {
      trigger: ".paragraph-highlight-section",
      start: "top 75%",
      end: "bottom 25%",
      scrub: true,
    },
  }
);

// Listing section animation
if (window.innerWidth > 800) {
  gsap.registerPlugin(ScrollTrigger);

  const jobListingSection = document.querySelector(
    ".job-listing-section .container"
  );
  const listingSlider = document.querySelector(".listing-slider");

  const totalSliderScroll =
    listingSlider.scrollHeight - jobListingSection.offsetHeight;

  gsap
    .timeline({
      scrollTrigger: {
        trigger: jobListingSection,
        start: "top top",
        end: () => `+=${totalSliderScroll + window.innerHeight}`,
        pin: true,
        scrub: true,
      },
    })

    .to(listingSlider, {
      y: () => -totalSliderScroll,
      duration: 0.3,
    });
}
