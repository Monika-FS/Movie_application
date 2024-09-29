import React from "react";
import { Link, useLocation } from "react-router-dom";

const Booking_Summery = () => {
  // Access the selectedSeats from the route state
  const location = useLocation();
  const { selectedSeats } = location.state || { selectedSeats: [] };

  const ticketPrice = 10; // Example ticket price per seat
  const totalAmount = selectedSeats.length * ticketPrice;

  return (
    <div className="h-screen p-6 md:mt-[65px] mt-[120px]">
      <h2 className="mb-4 text-2xl text-center">Booking Summary</h2>
      <div className="p-4 mb-4 bg-gray-100 rounded-lg shadow-md">
        <h3 className="text-lg font-bold">Selected Seats:</h3>
        <p>
          {selectedSeats.length > 0
            ? selectedSeats.join(", ")
            : "No seats selected"}
        </p>
      </div>
      <div className="p-4 mb-4 bg-gray-100 rounded-lg shadow-md">
        <h3 className="text-lg font-bold">Total Amount:</h3>
        <p>${totalAmount.toFixed(2)}</p>
      </div>
      <Link to="/checkout">
        <button className="w-full px-6 py-2 text-white bg-green-500">
          Confirm Booking
        </button>
      </Link>
    </div>
  );
};

export default Booking_Summery;
