"use strict";
(function () {
  //Modal functionality
  const modalEl = document.querySelector(".modal");
  const closeButton = document.querySelector(".form__button--cancel");
  const openButtons = document.querySelectorAll(".card__link");

  openButtons.forEach((openButton) => {
    openButton.addEventListener("click", () => {
      modalEl.showModal();
    });
  });

  closeButton.addEventListener("click", () => {
    modalEl.close();
  });

  //Form validation
  const form = document.querySelector(".form");

  const validateForm = (event) => {
    if (event.type == "change") {
      const inputEl = event.target;

      if (inputEl.name == "email") {
        validateEmail(inputEl);
        validateConfirmEmail(document.querySelector("#form__confirm-email"));
      } else if (inputEl.name == "confirm-email") {
        validateConfirmEmail(inputEl);
      }
    } else {
      const validEmail = validateEmail(document.querySelector("#form__email"));
      const validConfirmEmail = validateConfirmEmail(
        document.querySelector("#form__confirm-email")
      );
      if (validEmail && validConfirmEmail) {
        modalEl.close();
      } else {
        event.preventDefault();
      }
    }
  };

  form.addEventListener("change", validateForm);
  form.addEventListener("submit", validateForm);

  function validateEmail(inputEl) {
    if (inputEl.value.trim().length === 0) {
      document.querySelector(".form__error-email").innerText =
        "This field is required";
      inputEl.classList.add("form__input--invalid");
      return false;
    } else if (!inputEl.value.includes("@")) {
      document.querySelector(".form__error-email").innerText =
        "This field must be a valid email address including a @";
      inputEl.classList.add("form__input--invalid");
      return false;
    } else {
      document.querySelector(".form__error-email").innerText = "";
      inputEl.classList.remove("form__input--invalid");
      return true;
    }
  }

  function validateConfirmEmail(inputEl) {
    const emailEl = document.querySelector("#form__email");

    if (inputEl.value === emailEl.value) {
      document.querySelector(".form__error-confirm-email").innerText = "";
      inputEl.classList.remove("form__input--invalid");
      return true;
    } else {
      document.querySelector(".form__error-confirm-email").innerText =
        "This field must match the provided email address";
      inputEl.classList.add("form__input--invalid");
      return false;
    }
  }
})();
