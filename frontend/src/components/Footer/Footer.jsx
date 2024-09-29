import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { motion } from "framer-motion";
import { GiTicket } from "react-icons/gi";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <section className="py-10 mt-10 bg-primary/10">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="container flex items-center justify-between"
        >
          {/* LOGO Section  */}
          {/* <Link to='/' className="flex items-center gap-2 text-2xl font-bold uppercase">
          
          </Link> */}

          <Link
            to={"/"}
            className="flex items-center gap-2 text-2xl font-bold uppercase"
          >
            <h3 className="flex items-center text-red-900">MOVIECITY</h3>
            <img
              src="https://t4.ftcdn.net/jpg/09/34/04/61/360_F_934046157_OA0b7ULwT5KoMPDrHQIxPvqK0QhsHk8x.jpg"
              className="w-20 h-15 rounded-md"
            ></img>
          </Link>

          {/* Social-Icon-Section  */}
          <div className="flex items-center gap-4 mt-6 text-3xl text-gray-700 ">
            <FaInstagram />
            <FaTwitter />
            <FaFacebook />
            <FaWhatsapp />
          </div>
        </motion.div>
      </section>

      <div className="flex justify-around py-2 text-xs text-white bg-rose-900 font-extralight">
        <div>@2024 ALL RIGHTS RESERVED</div>
      </div>
    </>
  );
};

export default Footer;
