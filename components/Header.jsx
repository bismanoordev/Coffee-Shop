"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  // Close menu on link click (for small screens)
  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <nav className="sticky top-0 z-50 bg-transparent transition-all duration-300">
      <div className="max-w-screen-xl mx-auto p-4 flex flex-wrap items-center justify-between">
        {/* Logo */}
        <Link href="#home" className="flex items-center space-x-3 rtl:space-x-reverse">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1ILZitvczdZjXZnQX03L6WlsJJiWR4b0GAA&s"
            className="h-10 rounded-2xl"
            alt="Coffee Logo"
          />
          <span className="self-center text-2xl font-semibold whitespace-nowrap text-gray-200 hover:text-gray-300">
            Coffee
          </span>
        </Link>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          type="button"
          className="inline-flex items-center justify-center p-2 w-10 h-10 text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
          aria-controls="navbar-default"
          aria-expanded={isOpen}
        >
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>

        {/* Menu Items */}
        <div
          className={`w-full md:block md:w-auto ${
            isOpen ? "block" : "hidden"
          } bg-[#30261C] md:bg-transparent`}
          id="navbar-default"
        >
          <ul className="flex flex-col md:flex-row md:space-x-8 mt-4 md:mt-0 p-4 md:p-0 font-medium border md:border-0 rounded-lg border-gray-100">
            {[
              { name: "Home", href: "#home" },
              { name: "Icons", href: "#iconsbar" },
              { name: "About", href: "#about" },
              { name: "Banner", href: "#banner" },
              { name: "Join", href: "#join" },
              { name: "Contact", href: "#contact" },
            ].map((item) => (
              <li key={item.name}>
                <Link
                  href={item.href}
                  onClick={handleLinkClick} // 👈 close on click
                  className="block py-2 px-3 text-gray-200 hover:text-gray-400"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}
