/* ================= SCROLL REVEAL ANIMATION ================= */

/*
  This script watches elements with the class "reveal"
  and adds the "active" class when they enter the viewport.
*/

const revealElements = document.querySelectorAll(".reveal");

const revealOnScroll = () => {
  const windowHeight = window.innerHeight;

  revealElements.forEach(el => {
    const elementTop = el.getBoundingClientRect().top;
    const revealPoint = 120;

    if (elementTop < windowHeight - revealPoint) {
      el.classList.add("active");
    }
  });
};

// Run on scroll
window.addEventListener("scroll", revealOnScroll);

// Run once on load
revealOnScroll();
