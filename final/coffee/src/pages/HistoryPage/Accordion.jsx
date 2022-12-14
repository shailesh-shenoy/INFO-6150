import { React, useState } from "react";

function Accordion({
  title,
  description1,
  description2,
  description3,
  image,
  imagDescription,
}) {
  const [active, setActive] = useState(false);
  return (
    <section className="accordion">
      <h2 className="accordion__title" onClick={() => setActive(!active)}>
        {title}{" "}
        <i
          className={`accordion__icon ${
            active ? "gg-math-minus" : "gg-chevron-down"
          }`}
        />
      </h2>
      {active && (
        <div className="accordion__content">
          <div className="accordion__image-container">
            <img
              src={image}
              alt={imagDescription}
              className="accordion__image"
            />
          </div>
          <div className="accordion__description">
            <p className="accordion__paragraph">{description1}</p>
            <p className="accordion__paragraph">{description2}</p>
            <p className="accordion__paragraph">{description3}</p>
          </div>
        </div>
      )}
    </section>
  );
}

export default Accordion;
