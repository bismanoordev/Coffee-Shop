"use client";
import Image from "next/image";
import React from "react";
import { ArrowRight } from "lucide-react";

const CoffeeBanner = () => {
  return (
    <div
      id="banner"
      className="bg-[#E2D9C8] md:justify-center  flex items-center justify-between px-4 sm:px-10 py-10 overflow-hidden relative"
    >
      {/* Left Side - Text and Button */}
      <div className="max-w-full lg:ml-60 sm:max-w-md z-10 px-4 sm:px-6 md:px-10 lg:pl-20 text-center  md:text-left">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-[#2b1e18] leading-snug">
          Check Out Our Best <br /> Coffee Beans
        </h2>
        <button className="mt-5 bg-[#30261C] text-white px-4 sm:px-6 py-2 rounded-full flex items-center gap-2 hover:bg-[#3b2b23] transition-all mx-auto md:mx-0">
          Explore Our Products <ArrowRight size={18} />
        </button>
      </div>

      {/* Right Side - Coffee Beans Image */}
      <div className="absolute right-0 top-0 bottom-0 hidden md:flex items-center">
        <Image
          src="/coffee-right.png"
          alt="Coffee Beans"
          width={300}
          height={250}
          className="object-contain md:w-[300px] lg:w-[400px] xl:w-[450px]"
        />
      </div>

      {/* Left Side - Hand with Beans Image */}
      <div className="absolute left-0 top-0 bottom-0 hidden md:flex items-center">
        <Image
          src="/coffee-hand.png"
          alt="Hand Pouring Coffee Beans"
          width={335}
          height={335}
          className="object-contain md:w-[250px] lg:w-[300px] xl:w-[350px]"
        />
      </div>
    </div>
  );
};

export default CoffeeBanner;
