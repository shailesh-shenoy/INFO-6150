"use strict";
(function () {
  //Get the form element
  const form = document.querySelector(".form");

  const validateForm = (event) => {
    if (event.type == "change") {
      const inputEl = event.target;

      if (inputEl.name == "name") {
        validateName(inputEl);
      } else if (inputEl.name == "email") {
        validateEmail(inputEl);
        validateConfirmEmail(document.querySelector("#form__confirm-email"));
      } else if (inputEl.name == "confirm-email") {
        validateConfirmEmail(inputEl);
      }
    } else {
      const validName = validateName(document.querySelector("#form__name"));
      const validEmail = validateEmail(document.querySelector("#form__email"));
      const validConfirmEmail = validateConfirmEmail(
        document.querySelector("#form__confirm-email")
      );
      if (validName && validEmail && validConfirmEmail) {
        console.log("valid form");
      } else {
        event.preventDefault();
        console.log("submit invalid");
      }
    }
  };

  form.addEventListener("change", validateForm);
  form.addEventListener("submit", validateForm);

  function validateName(inputEl) {
    if (inputEl.value.trim().length === 0) {
      document
        .querySelector(".form__error-name")
        .classList.remove("form__error-message--invisible");

      inputEl.classList.add("form__input--invalid");
      return false;
    } else {
      document
        .querySelector(".form__error-name")
        .classList.add("form__error-message--invisible");

      inputEl.classList.remove("form__input--invalid");
      return true;
    }
  }

  function validateEmail(inputEl) {
    if (inputEl.value.trim().length === 0) {
      document.querySelector(".form__error-email").innerText =
        "Email must not be empty!";

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
        "Email and confirm email must match!";
      inputEl.classList.add("form__input--invalid");
      return false;
    }
  }
})();
