window.onscroll = function () {
    const navbar = document.getElementById("nav-toggle");
    if (window.pageYOffset > 50) {
      navbar.classList.add("fixed");
    } else {
      navbar.classList.remove("fixed");
    }
  };

