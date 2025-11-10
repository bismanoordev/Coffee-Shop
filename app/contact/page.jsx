import React from "react";

export default function Contact() {
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
        <form className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
          <input
            type="email"
            placeholder="Email address"
            className="w-64 sm:w-72 md:w-80 lg:w-96 px-4 py-2 text-sm sm:text-base rounded-full bg-[#F1F0EE] border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#3b2d1f]/40"
          />
          <button
            type="submit"
            className="bg-[#3b2d1f] text-white px-6 sm:px-8 py-2 rounded-full hover:bg-[#2b1f14] transition-all text-sm sm:text-base"
          >
            Subscribe
          </button>
        </form>
      </div>
    </section>
  );
}
