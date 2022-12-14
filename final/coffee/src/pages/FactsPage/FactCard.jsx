import { React, useState } from "react";

function FactCard({ fact, image, imageDescription }) {
  const [factVisible, setFactVisible] = useState(false);
  return (
    <div className="fact-card">
      <img src={image} alt={imageDescription} className="fact-card__image" />
      <div
        className={`fact-card__container ${
          factVisible ? "fact-card__container--visible" : ""
        }`}
        onClick={() => setFactVisible(!factVisible)}
        tabIndex={1}
      >
        <p className="fact-card__fact">{fact}</p>
      </div>
    </div>
  );
}

export default FactCard;
