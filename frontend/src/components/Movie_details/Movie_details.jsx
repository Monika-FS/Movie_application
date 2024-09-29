// src/components/MovieDetail.js
import React from "react";
import { Link, useParams } from "react-router-dom";
import { Movies } from "../../data/Data";

const Movie_details = () => {
  const { id } = useParams();
  const movie = Movies.find((m) => m.id === parseInt(id));
  //   const movie = Movies.find((m) => m.id === parseInt(id));

  return (
    <div className="flex flex-col items-center p-8 mt-[40px] bg-gray-100 w-full min-h-screen">
      <img
        src={movie.image}
        alt={movie.title}
        className="w-full max-w-4xl h-96 object-contain rounded-lg shadow-lg"
      />
      <div className="mt-4 max-w-4xl w-full bg-neutral-500 p-6 rounded-lg shadow-lg">
        <h1 className="text-4xl font-bold mb-4">{movie.title}</h1>
        <div className="flex gap-8">
          <p className="text-lg text-black-900 mb-2">{movie.genre}</p>
          <p className="text-lg text-black-900 mb-2 ">⭐ {movie.rating}</p>
        </div>
        <p className="text-lg text-black-900 mb-2">{movie.releaseYear}</p>
        <p className="text-lg text-black-900 mb-2">{movie.duration}</p>
        <p className="text-black-900 mt-4">{movie.description}</p>
      </div>

      {/* Button section */}
      <div className="mt-6 w-full max-w-4xl flex">
        <Link to="/ticket_plan" className="w-full ">
          <button className="primary-btn w-full  bg-red-950">
            Book Ticket
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Movie_details;
