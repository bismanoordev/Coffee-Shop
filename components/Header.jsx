"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { ShoppingBag } from "lucide-react";
import { useOrders } from "@/app/data/ordersStore";
import OrdersModal from "@/components/OrdersModal";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showOrders, setShowOrders] = useState(false);
  const orders = useOrders();
  const toggleMenu = () => setIsOpen(!isOpen);

  const openOrders = () => {
    setShowOrders(true);
    setIsOpen(false);
  };

  // Switch to a solid background once scrolled past the top.
  // Navbar always stays visible (no hide-on-scroll).
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menu on link click (for small screens)
  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 inset-x-0 z-50 ${
        scrolled
          ? "bg-[#30261C] shadow-lg border-b border-black/20"
          : "bg-gradient-to-b from-black/70 via-black/40 to-transparent border-transparent"
      }`}
    >
      <div className="max-w-screen-xl mx-auto p-4 flex flex-wrap items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
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
              { name: "Home", href: "/" },
              // { name: "Icons", href: "/#iconsbar" },
              { name: "About", href: "/#about" },
              { name: "Banner", href: "/#banner" },
              { name: "Join", href: "/#join" },
              { name: "Contact", href: "/contact-us" },
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

            {/* My Orders */}
            <li>
              <button
                onClick={openOrders}
                className="flex items-center gap-2 py-2 px-3 text-gray-200 hover:text-gray-400"
              >
                <span className="relative inline-flex">
                  <ShoppingBag className="w-5 h-5" />
                  {orders.length > 0 && (
                    <span className="absolute -top-2 -right-2 bg-[#8f5235] text-white text-[10px] font-bold min-w-[16px] h-4 px-1 rounded-full flex items-center justify-center">
                      {orders.length}
                    </span>
                  )}
                </span>
                My Orders
              </button>
            </li>
          </ul>
        </div>
      </div>

      {/* Orders list + cancel (shared) */}
      <OrdersModal open={showOrders} onClose={() => setShowOrders(false)} />
    </nav>
  );
}
