function Panel({ title, description, image, imageDescription }) {
  return (
    <section className="panel">
      <h2 className="panel__title">{title}</h2>
      <div className="panel__container">
        <img src={image} alt={imageDescription} className="panel__image" />
        <p className="panel__description">{description}</p>
      </div>
    </section>
  );
}

export default Panel;
