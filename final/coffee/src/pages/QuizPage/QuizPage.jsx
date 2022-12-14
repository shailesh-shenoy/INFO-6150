import React, { useRef } from "react";
import { useId } from "react";
import { useState } from "react";
import Quiz from "./Quiz";

import "./QuizPage.css";

function QuizPage() {
  const modalRef = useRef(null);
  const [subscribed, setSubscribed] = useState(false);
  const [checked, setChecked] = useState(true);
  const [email, setEmail] = useState("");
  const [emailBlur, setEmailBlur] = useState(false);

  const invalidEmail =
    emailBlur && (email.trim() === "" || !email.includes("@"));

  const disableButton = () => {
    if (!checked) {
      return true;
    }
    if (!emailBlur) {
      return true;
    }
    if (email.trim() === "" || !email.includes("@")) {
      return true;
    }
    return false;
  };
  const id = useId();
  return (
    <div className="quiz-page">
      <h1 className="quiz-page__title">Love Trivia a Lotte ?</h1>
      <p className="quiz-page__description">
        If you can’t start your day without a cup of coffee and love everything
        that has coffee in it, this ultimate coffee quiz will be perfect for
        you! Who doesn’t like a good cup of coffee to start the day? So, let’s
        discover how much you really know about coffee.
      </p>
      {/* This forced modal subscription is kind of a dark-pattern professor talked about */}
      <dialog className="modal" ref={modalRef}>
        <h2 className="modal__title">Subscribe to our NewsLetter</h2>
        <form action="#/submit" className="modal__form form">
          <label htmlFor={`${id}-form__email`} className="form__label">
            Email:
            <span aria-label="required" className="form__label-required">
              *
            </span>
          </label>
          <input
            type="text"
            id={`${id}-form__email`}
            name="email"
            className={`form__input ${
              invalidEmail ? "form__input--invalid" : ""
            }`}
            value={email}
            onChange={(event) => {
              setEmail(event.target.value);
              if (!emailBlur) {
                setEmailBlur(true);
              }
            }}
          />
          {invalidEmail && (
            <span className="form__error-message form__error-email">
              Email Id is required and must include "@".
            </span>
          )}
          <label className="form__label">
            <input
              type="checkbox"
              className="form__checkbox"
              checked={checked}
              onChange={() => setChecked(!checked)}
            />{" "}
            <span className="form__checkbox-text">
              I have read and accepted the Privacy Policy.
            </span>
          </label>
          <div className="form__button-container">
            <button
              className="form__button form__button--subscribe"
              onClick={(event) => {
                event.preventDefault();
                setSubscribed(true);
                modalRef.current.close();
              }}
              disabled={disableButton()}
            >
              Submit
            </button>
            <button
              className="form__button form__button--cancel"
              onClick={(event) => {
                event.preventDefault();
                modalRef.current.close();
              }}
            >
              Cancel
            </button>
          </div>
        </form>
      </dialog>
      {!subscribed && (
        <p className="quiz-page__description">
          But before you take this free quiz, please{" "}
          <button
            className="quiz-page__subscribe-button"
            onClick={() => modalRef.current.showModal()}
          >
            subscribe
          </button>{" "}
          to our weekly newsletter!
        </p>
      )}
      {subscribed && <Quiz />}
    </div>
  );
}

export default QuizPage;
