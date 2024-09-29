import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Banner from "../components/Banners/Banner";
import AllMovies from "../components/AllMovies/AllMovies";
import Footer from "../components/Footer/Footer";

const HomePage = () => {
  return (
    <>
      <main className="overflow-x-hidden">
        <Navbar />
        <Banner />
        <AllMovies />
        <Footer />
      </main>
    </>
  );
};

export default HomePage;
