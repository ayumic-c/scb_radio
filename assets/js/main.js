{
  // mobile menu window
  document.addEventListener("DOMContentLoaded", () => {
    const body = document.querySelector("body");
    const hbgMenu = document.querySelector(".hbg-menu");
    const hbgBtn = document.querySelector(".hbg-btn");
    const hbgMenuItems = document.querySelectorAll(".hbg-menu-btn a");

    hbgBtn.addEventListener("click", () => {
      toggleMenu();
    });

    hbgMenuItems.forEach((item) => {
      item.addEventListener("click", () => {
        closeMenu();
      });
    });

    function toggleMenu() {
      body.classList.toggle("is-active");
      hbgMenu.classList.toggle("is-active");
      hbgBtn.classList.toggle("is-active");
    }

    function closeMenu() {
      body.classList.remove("is-active");
      hbgMenu.classList.remove("is-active");
      hbgBtn.classList.remove("is-active");
    }
  });





  // animation
  const animations = document.querySelectorAll('.animation');

  const cb = (entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('ani-inview');
        observer.unobserve(entry.target);
      }
    });
  }

  const io = new IntersectionObserver(cb);
  animations.forEach(animation => {
    io.observe(animation);
  });
}