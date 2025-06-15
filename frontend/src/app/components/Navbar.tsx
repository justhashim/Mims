"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Get the height of the hero section (convention center background)
      const heroSection = document.querySelector("section");
      if (heroSection) {
        const heroHeight = heroSection.offsetHeight;
        setScrolled(window.scrollY > heroHeight - 80); // 80px before the end of hero section
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-gray-900/90 backdrop-blur-md shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold text-white flex items-center">
            <span className="bg-blue-600 h-8 w-2 rounded-full mr-2"></span>
            Mims Convention Centre
          </Link>

          <div className="hidden md:flex items-center space-x-1">
            <Link
              href="/"
              className="px-4 py-2 text-white hover:text-blue-300 transition-colors rounded-full"
            >
              Home
            </Link>
            <Link
              href="/#about"
              className="px-4 py-2 text-white hover:text-blue-300 transition-colors rounded-full"
            >
              About
            </Link>
            <Link
              href="/#facilities"
              className="px-4 py-2 text-white hover:text-blue-300 transition-colors rounded-full"
            >
              Facilities
            </Link>
            <Link
              href="/gallery"
              className="px-4 py-2 text-white hover:text-blue-300 transition-colors rounded-full"
            >
              Gallery
            </Link>
            <Link
              href="/#contact"
              className="ml-2 px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-full transition-colors shadow-md hover:shadow-lg"
            >
              Contact
            </Link>
          </div>

          <div className="md:hidden">
            <button className="flex items-center p-2 text-white rounded-full hover:bg-gray-800/50">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;