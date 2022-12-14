function Card({ title, description, image, imageDescription, setPage }) {
  return (
    <article className="card">
      <img src={image} alt={imageDescription} className="card__image" />
      <h3 className="card__title">{title}</h3>
      <p className="card__description">{description}</p>
      <p className="card__description">
        This article is sponsored by the endless sleep of my cats.
        <br />
        <a
          href="#/about"
          className="card__link"
          onClick={(event) => {
            event.preventDefault();
            setPage("#/about");
          }}
        >
          Learn more about my two furry buddies!
        </a>
      </p>
    </article>
  );
}

export default Card;
