import React from "react";
import { Route, Routes } from "react-router-dom";
import SignInPage from "./pages/SignInPage";
import SignUpPage from "./pages/SignUpPage";
import HomePage from "./pages/HomePage";
import MovieDetailsPage from "./pages/MovieDetailsPage";
import SeatSelectionPage from "./pages/SeatSelectionPage";
import BookingSummaryPage from "./Pages/BookingSummaryPage";
import Ticket_Plan_Page from "./Pages/Ticket_plan_Page";
import Checkout from "./components/Checkout/Checkout";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/signin" element={<SignInPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/movie/:id" element={<MovieDetailsPage />} />
        {/* <Route path="/seats/:id" element={<SeatSelectionPage />} /> */}
        <Route path="/seats" element={<SeatSelectionPage />} />
        <Route path="/booking_summary" element={<BookingSummaryPage />} />
        <Route path="/ticket_plan" element={<Ticket_Plan_Page />} />
        <Route path="/checkout" element={<Checkout />} />
      </Routes>
    </>
  );
};

export default App;
