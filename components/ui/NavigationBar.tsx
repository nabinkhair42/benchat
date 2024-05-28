"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Logo from "@/public/logo/logo.png";
import { AlignRight, X } from "lucide-react";
import clsx from "clsx";
import { motion } from "framer-motion";

const NavigationBar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false); // Add this line

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const NavLinks = [
    { name: "Home", href: "#" },
    { name: "About", href: "#" },
    { name: "Contact", href: "#" },
  ];

  return (
    <>
      <div
        className={clsx(
          "w-full px-6 py-4 md:px-8 lg:px-16 flex justify-between items-center text-black fixed top-0 right-0 z-40",
          {
            "bg-transparent": !isScrolled,
            "bg-white backdrop-filter backdrop-blur-3xl bg-opacity-30":
              isScrolled,
          }
        )}
      >
        <div
          id="logo"
          className="text-3xl md:text-4xl lg:text-5xl font-bold flex items-center"
        >
          <Image
            src={Logo}
            alt="Logo"
            className="w-12 h-12 md:w-16 md:h-16 bg-contain drop-shadow-xl hidden md:block"
            draggable="false"
          />
          {/* If Text is required with Logo */}
          <p className="ml-2">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 via-pink-500 to-orange-500">
              Ben
            </span>
            Chat
          </p>
        </div>
        <div id="links" className="hidden md:block">
          <ul className="flex gap-4 md:gap-6 lg:gap-16">
            {NavLinks.map((link, index) => (
              <li key={index}>
                <a
                  href={link.href}
                  className="hover:text-transparent bg-clip-text hover:bg-clip-text bg-gradient-to-r hover:bg-gradient-to-r from-blue-700 hover:from-blue-700 via-pink-500 hover:via-pink-500 to-orange-500 hover:to-orange-500"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div id="buttons" className="gap-4 md:gap-6 hidden md:flex">
          <motion.div
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <div className="hover:bg-gradient-to-r from-blue-500 via-pink-500 to-orange-500 rounded-xl p-[1px] w-32 lg:w-36 hover:shadow-md">
              <button className=" p-3 w-full rounded-xl text-nowrap text-black font-medium bg-white ">
                Sign In
              </button>
            </div>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <div className="hover:bg-gradient-to-r from-blue-500 via-pink-500 to-orange-500 rounded-xl p-[1px] w-32 lg:w-36 hover:shadow-md">
              <button className=" p-3 w-full rounded-xl text-nowrap text-black font-medium bg-white ">
                Sign In
              </button>
            </div>
          </motion.div>
        </div>
        <div id="hamburger" className="md:hidden">
          <button onClick={toggleMobileMenu}>
            <AlignRight />
          </button>
        </div>
      </div>

      <div
        className={clsx(
          "fixed top-0 right-0 w-3/4 h-full backdrop-filter backdrop-blur-3xl bg-opacity-80 md:hidden z-50 transition-transform duration-300 shadow-md",
          {
            "translate-x-0": isMobileMenuOpen,
            "translate-x-full": !isMobileMenuOpen,
          }
        )}
      >
        <div className="flex flex-col gap-4 p-6 justify-center items-center h-full">
          {/* Menu  */}
          <div className="flex items-center justify-between w-full ">
            <h1 className="text-4xl text-center font-medium flex-1">Menu</h1>
            <button onClick={toggleMobileMenu}>
              <X />
            </button>
          </div>

          <div className="w-full bg-gradient-to-r from-blue-500 via-pink-500 to-orange-500 h-[2px] rounded-md opacity-20"></div>
          <ul className="flex flex-col gap-4 text-xl text-center flex-1">
            {NavLinks.map((link, index) => (
              <li key={index}>
                <a
                  href={link.href}
                  className="hover:text-transparent bg-clip-text hover:bg-clip-text bg-gradient-to-r hover:bg-gradient-to-r from-blue-700 hover:from-blue-700 via-pink-500 hover:via-pink-500 to-orange-500 hover:to-orange-500"
                  onClick={toggleMobileMenu}
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
          <div id="buttons" className="flex flex-col gap-4">
            <motion.div
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <div className="hover:bg-gradient-to-r from-blue-500 via-pink-500 to-orange-500 rounded-xl p-[1px] w-32 lg:w-36 hover:shadow-md">
                <button className=" p-3 w-full rounded-xl text-nowrap text-black font-medium bg-white ">
                  Sign In
                </button>
              </div>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <div className="hover:bg-gradient-to-r from-blue-500 via-pink-500 to-orange-500 rounded-xl p-[1px] w-32 lg:w-36 hover:shadow-md">
                <button className=" p-3 w-full rounded-xl text-nowrap text-black font-medium bg-white ">
                  Sign In
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NavigationBar;
