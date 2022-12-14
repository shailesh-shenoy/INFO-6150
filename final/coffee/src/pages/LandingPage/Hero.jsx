import React from "react";

import "./LandingPage.css";
import heroImage from "images/hero-coffee.jpg";

function Hero() {
  return (
    <section className="hero">
      <div className="hero__image-container">
        <img
          src={heroImage}
          alt="Cup of coffee in the middle of roasted coffee beans."
          className="hero__image"
        />
        <h1 className="hero__text">C0FFEE, the programmer's rocket fuel.</h1>
      </div>
      <div className="hero__description-container">
        <h2 className="hero__title">
          A programmer's blood is at least 13% C0FFEE.
        </h2>
        <p className="hero__description">
          Okay, not really. But developers really like their caffeine! Sure,
          there’s a segment of developers that won’t ever touch a drop of
          caffeine-laden beverages, but the average developer consumes the
          equivalent of anywhere from one to five cups of coffee a day. There’s
          even a small, yet dedicated group of addicts enthusiasts that drink in
          excess of 10 espressos a day! Programmers make up a significant
          portion of the Two Billion Cups of coffee consumed daily.
        </p>
        <p className="hero__description">
          Coffee is a big part of modern tech culture. Visit the office of any
          tech company and you’ll see there are coffee machines everywhere.
          Programmers like to drink coffee because for them it's a symbol of
          concentration. And developers definitely need to concentrate on
          converting some non-trivial idea, logic, plans and all of the possible
          things needed into working code. In a way, Programmers are machines
          that turn caffeine into code!
        </p>
      </div>
    </section>
  );
}

export default Hero;
