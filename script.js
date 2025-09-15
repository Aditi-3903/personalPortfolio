   let menuToggle = document.querySelector(".menu-toggle");
   let navLinks = document.querySelector("nav ul");

    menuToggle.addEventListener("click", () => {
      navLinks.classList.toggle("active");
    });
  
