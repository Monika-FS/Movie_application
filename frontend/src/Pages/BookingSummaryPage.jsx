import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import Footer from '../components/Footer/Footer'
import Booking_Summery from '../components/Booking_Summery/Booking_Summery'


const BookingSummaryPage = () => {
  return (
    <>
     <section>
     <Navbar/>
        <Booking_Summery/>
      <Footer/>
     </section> 
    </>
  )
}

export default BookingSummaryPage