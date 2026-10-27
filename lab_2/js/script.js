// Lab 2 - vanilla JavaScript for the hamburger menu (no Bootstrap JS used)
(function () {
  "use strict";

  var toggler = document.querySelector(".navbar-toggler");
  var menu = document.getElementById("mainNav");
  var desktopQuery = window.matchMedia("(min-width: 768px)");

  if (!toggler || !menu) {
    return;
  }

  // Open or close the menu. Bootstrap's CSS hides ".collapse" unless it also has ".show".
  function setMenu(open) {
    menu.classList.toggle("show", open);
    toggler.setAttribute("aria-expanded", String(open));
  }

  // Hamburger button toggles the menu
  toggler.addEventListener("click", function () {
    setMenu(!menu.classList.contains("show"));
  });

  // Close the menu after choosing a link (phone layout)
  menu.addEventListener("click", function (event) {
    if (event.target.closest("a")) {
      setMenu(false);
    }
  });

  // Escape closes the menu and returns focus to the button
  document.addEventListener("keydown", function (event) {
    if (event.key === "Escape" && menu.classList.contains("show")) {
      setMenu(false);
      toggler.focus();
    }
  });

  // Reset when the layout switches to the full desktop/tablet navbar
  desktopQuery.addEventListener("change", function (event) {
    if (event.matches) {
      setMenu(false);
    }
  });
})();
