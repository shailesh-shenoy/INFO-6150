import React from "react";

import "./HistoryPage.css";
import imageHero from "images/flavor-history.jpg";

function HistoryPageHero({ title }) {
  return (
    <section className="history-page__hero">
      <img
        src={imageHero}
        alt="Coffee beans being dried in a rural African setting, with multiple people examining them."
        className="history-page__image"
      />
      <div className="history-page__text">
        <h1 className="history-page__title">
          The Caffeinated History of Coffee.
        </h1>
        <p className="history-page__description">
          No one knows exactly how or when coffee was discovered, though there
          are many legends about its origin.
        </p>
      </div>
    </section>
  );
}

export default HistoryPageHero;
