"use strict";
(function () {
  //Get the html elements using query selector
  const menuButton = document.querySelector(".header__nav-button");
  const navMenu = document.querySelector(".header__nav-menu");

  //Event Listener to toggle menu visibility when menuButton is clicked
  menuButton.addEventListener("click", toggleMenuVisibility);

  //Event Listener to remove menu visibiity when click happens outside button
  document.addEventListener("click", function (event) {
    console.log(event);
    if (
      !event.target.matches(
        ".header__nav-button, .gg-chevron-down, .header__nav-button-text"
      )
    ) {
      if (navMenu.classList.contains("header__nav-menu--visible")) {
        navMenu.classList.remove("header__nav-menu--visible");
      }
    }
  });

  function toggleMenuVisibility() {
    navMenu.classList.toggle("header__nav-menu--visible");
  }
})();
