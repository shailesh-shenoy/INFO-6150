import "./Home.css";
import homeImage from "./images/cat-index-hero.jpeg";

import React from "react";

function Home() {
  return (
    <section className="home">
      <img
        src={homeImage}
        alt="A sleeping gray kitten."
        className="home__image"
      />
      <div className="home__container">
        <h2 className="home__title">Why cats sleep so much.</h2>
        <p className="home__description">
          Cat person? How many pictures of your cat sleeping have you got on
          your phone? A lot, right?{" "}
        </p>
        <p className="home__description">
          Cats exhibit plenty of weird behaviors, such as kneading, hiding in
          small places and hanging out in boxes, but
          <em> averaging about 12-15 hours of sleep every day</em> is perhaps
          the strangest thing domestic cats do.
        </p>
        <p className="home__description">
          Older cats may stretch this to 20 hours per day! Old age and the folly
          of youth, that’s understandable; they take their toll. What’s wearing
          out the rest of them?
        </p>
        <p className="home__description">
          Although no conclusive answers are found yet to solve the mystery of
          <strong> Cats and Sleep</strong>, there are three popular theories.
        </p>
      </div>
    </section>
  );
}

export default Home;
