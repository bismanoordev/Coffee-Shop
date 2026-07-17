"use client";

import { useState, useEffect } from "react";
import { X } from "lucide-react";

export default function Contact() {
  const [email, setEmail] = useState("");
  const [showSuccess, setShowSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowSuccess(true);
  };

  const closePopup = () => {
    setShowSuccess(false);
    setEmail("");
  };

  // Lock body scroll while popup is open
  useEffect(() => {
    document.body.style.overflow = showSuccess ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [showSuccess]);

  return (
    <section
      className="relative flex flex-col items-center justify-center bg-[#E2D9C8] py-16 md:py-20 text-center px-4 sm:px-6 lg:px-8 overflow-hidden"
      id="contact"
    >
      {/* Left Coffee Beans */}
      <div className="absolute hidden md:block left-0 top-0 h-full w-20 sm:w-28 md:w-36 lg:w-40 bg-[url('/left-coffee-beans.png')] bg-cover bg-left bg-no-repeat opacity-80"></div>

      {/* Right Coffee Beans */}
      <div className="absolute hidden md:block right-0 top-0 h-full w-20 sm:w-28 md:w-36 lg:w-40 bg-[url('/right-coffee-beans.png')] bg-cover bg-right bg-no-repeat opacity-80"></div>

      <div className="relative z-10 max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl px-2 sm:px-4">
        {/* Heading */}
        <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-[#3b2d1f] leading-snug">
          Join in and get 15% off!
        </h2>

        {/* Subtext */}
        <p className="text-xs sm:text-sm md:text-base text-[#3b2d1f] mt-3 sm:mt-2">
          Subscribe to our newsletter & get 15% off discount code.
        </p>

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4"
        >
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email address"
            className="w-64 sm:w-72 md:w-80 lg:w-96 px-4 py-2 text-sm sm:text-base rounded-full bg-[#F1F0EE] border border-gray-300 text-[#2b2015] placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#3b2d1f]/40"
          />
          <button
            type="submit"
            className="bg-[#3b2d1f] text-white px-6 sm:px-8 py-2 rounded-full hover:bg-[#2b1f14] transition-all text-sm sm:text-base"
          >
            Subscribe
          </button>
        </form>
      </div>

      {/* Success Popup */}
      {showSuccess && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
          onClick={closePopup}
        >
          <div
            className="relative w-full max-w-sm bg-[#F1F0EE] rounded-2xl shadow-xl p-8 text-center flex flex-col items-center gap-3"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              onClick={closePopup}
              aria-label="Close"
              className="absolute top-3 right-3 text-[#2b2015] hover:bg-black/10 rounded-full p-1 transition"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Success icon */}
            <div className="w-16 h-16 rounded-full bg-green-600 text-white flex items-center justify-center text-4xl">
              ✓
            </div>

            <h3 className="text-xl font-extrabold text-[#2b2015]">
              Subscribed Successfully!
            </h3>
            <p className="text-sm text-[#3a2c1e]">
              Thank you for subscribing. Your <b>15% off</b> discount code has
              been sent to{" "}
              <span className="font-semibold break-all">
                {email || "your email"}
              </span>
              .
            </p>

            <button
              onClick={closePopup}
              className="mt-2 bg-[#3b2d1f] text-white px-6 py-2.5 rounded-full hover:bg-[#2b1f14] transition"
            >
              Done
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
