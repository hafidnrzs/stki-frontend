const Card = ({ id, title, image, summary }) => {
  return (
    <>
      <div
        id={id}
        className="card w-44 sm:w-60 md:w-80 lg:w-60 xl:w-72 2xl:w-1/4 rounded-2xl bg-white  transition-all duration-300"
        // data-aos="fade-up"
        // data-aos-duration="2000"
      >
        <figure>
          <img
            src={image}
            alt={title}
            className="h-32 sm:h-40 md:h-48 lg:h-56 xl:w-72 w-full object-cover rounded-2xl"
          />
        </figure>
        <div className="text-left bg-transparent p-1">
          <h2 className="card-title font-medium text-sm sm:text-md md:text-lg lg:text-xl xl:text-2xl">
            {title}
          </h2>
          <p className="mt-2 text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl text-gray-700 lg:text-gray-200">
            {summary}
          </p>
        </div>
      </div>
    </>
  );
};

export default Card;
