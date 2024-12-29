import React from "react";

const PreviewArticle_Card = ({ id, image, title, tempo, date, summary }) => {
  return (
    <>
      <div
        id={id}
        className="card ml-2 w-96 sm:w-60 md:w-80 lg:w-60 xl:w-72 2xl:w-1/4 bg-white transition-all duration-300"
        // data-aos="fade-up"
        // data-aos-duration="2000"
      >
        <div className="text-left bg-transparent mt-1">
          <h2 className="card-title font-bold text-sm sm:text-md md:text-lg lg:text-xl xl:text-2xl">
            {title}
          </h2>
          <p className="card-tempo text-xs sm:text-sm md:text-md lg:text-lg xl:text-xl">
            {tempo}
          </p>
          <p className="card-date text-xs sm:text-sm md:text-md lg:text-lg xl:text-xl">
            {date}
          </p>
        </div>
        <figure className="pr-16">
          <img
            src={image}
            alt={title}
            className="rounded-3xl sm:h-40 md:h-48 lg:h-56 xl:w-72 w-80 object-cover"
          />
        </figure>
        <div className="text-left bg-transparent p-1 ">
          <p className="card-summary text-xs sm:text-sm md:text-md lg:text-lg xl:text-xl">
            {summary}
          </p>
        </div>
      </div>
    </>
  );
};

export default PreviewArticle_Card;
