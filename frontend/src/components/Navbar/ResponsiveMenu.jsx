import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";

const ResponsiveMenu = ({ open }) => {
  return (
    <>
      <AnimatePresence mode="wait">
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 100 }}
            transition={{ duration: 0.3 }}
            className="fixed left-0 z-20 w-full h-screen top-24 md:top-20"
          >
            <div className="py-10 m-6 text-xl font-semibold text-white uppercase menu-container  bg-rose-900 rounded-3xl">
              <ul className="flex flex-col items-center gap-10">
                <li>Your Orders</li>
                <li>Help & Support</li>
                <li>Contact us</li>
                <Link to="/signin" className="hidden md:block">
                  <button className="px-3 py-1 text-white rounded-md bg-red-400 hover:cursor-pointer whitespace-nowrap">
                    Sign in{" "}
                  </button>
                </Link>
              </ul>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ResponsiveMenu;
