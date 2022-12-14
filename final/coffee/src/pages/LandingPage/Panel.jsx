import React from "react";

function Panel({
  title,
  description,
  image,
  imageDescription,
  linkUri,
  linkText,
  setPage,
}) {
  return (
    <section className="panel">
      <h3 className="panel__title">{title}</h3>
      <img className="panel__image" src={image} alt={imageDescription} />
      <p className="panel__description">{description}</p>
      <a
        href={linkUri}
        className="panel__link"
        onClick={(event) => {
          event.preventDefault();
          setPage(linkUri);
        }}
      >
        {linkText}
      </a>
    </section>
  );
}

export default Panel;
