"use strict";
(function () {
  //JS code for header Dropdown

  //Get the html elements using query selector
  const menuButton = document.querySelector(".header__nav-button");
  const navMenu = document.querySelector(".header__nav-menu");
  const navLinks = document.querySelectorAll(".header__nav-link");

  //Event Listener to toggle menu visibility when menuButton is clicked
  menuButton.addEventListener("click", toggleMenuVisibility);

  //Event Listener to remove menu visibiity when click happens outside button
  document.addEventListener("click", function (event) {
    if (!event.target.matches(".header__nav-button, .gg-menu-left")) {
      if (navMenu.classList.contains("header__nav-menu--open")) {
        navMenu.classList.remove("header__nav-menu--open");
        navLinks.forEach((link) => {
          link.tabIndex = -1;
        });
      }
    }
  });

  function toggleMenuVisibility() {
    navLinks.forEach((link) => {
      if (link.tabIndex == -1) {
        link.tabIndex = 0;
      } else {
        link.tabIndex = -1;
      }
    });
    navMenu.classList.toggle("header__nav-menu--open");
  }

  //Fix tabIndexes when screen size changes
  //Desktop nav-links should always be tab-able
  const myMediaQuery = window.matchMedia("(min-width: 44rem)");

  function widthChangeCallback(myMediaQuery) {
    if (myMediaQuery.matches) {
      navLinks.forEach((link) => {
        link.tabIndex = 0;
      });
    } else {
      navLinks.forEach((link) => {
        link.tabIndex = -1;
      });
    }
  }

  widthChangeCallback(myMediaQuery);
  myMediaQuery.addEventListener("change", widthChangeCallback);
})();
