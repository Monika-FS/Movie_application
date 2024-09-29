import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Movie_details from "../components/Movie_details/Movie_details";

const MovieDetailsPage = () => {
  return (
    <>
      <div className="">
      <Navbar/>
        <Movie_details/>
      </div>
    </>
  );
};

export default MovieDetailsPage;