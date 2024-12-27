const Card = ({id,kategori, title, image, summary}) => {
  return (
    <>
      <div id={id} className="card bg-base-100 w-44 lg:w-96 shadow-xl rounded-2xl">
        <figure>
          <img
            src={image}
            alt="Shoes"
          />
        </figure>
        <div className="text-left mt-2">
          <h2 className="card-title text-sm lg:text-xl">{title}</h2>
          <p className="mt-4 text-xs lg:text-base">{summary}</p>
        </div>
      </div>
    </>
  );
};

export default Card;
