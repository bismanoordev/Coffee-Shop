"use client";
import React from "react";
import Image from "next/image";

const Page = () => {
  const items = [
    { label: "Hot Coffee", image: "/hot-coffee.png" },
    { label: "Cold Coffee", image: "/cold-coffee.png" },
    { label: "Cup Coffee", image: "/cup-coffee.png" },
    { label: "Desserts", image: "/dessert.png" },
  ];

  return (
    <div
      id="iconsbar"
      className="bg-[#E2D9C8] py-8 sm:py-10 flex items-center justify-center border"
    >
      <div className="w-full max-w-4xl px-4 sm:px-8">
        {/* Progress Bar Container */}
        <div className="flex flex-col sm:flex-row items-center justify-between relative">
          {/* Connecting Lines */}
          <div className="absolute sm:top-6 top-20 sm:left-0 sm:right-0 h-0.5 sm:flex hidden items-center justify-between pointer-events-none">
            {items.slice(0, -1).map((_, index) => (
              <div key={index} className="flex-1 bg-[#544A3E]/40"></div>
            ))}
          </div>

          {/* Images and Labels */}
          <div className="flex flex-wrap sm:flex-nowrap w-full justify-center sm:justify-between relative px-4 sm:px-8 z-10 gap-y-6 sm:gap-y-0">
            {items.map((item, index) => (
              <div
                key={index}
                className="flex flex-col items-center gap-2 text-center w-1/2 sm:w-auto"
              >
                {/* Image */}
                <div className="w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center hover:scale-110 transition-transform duration-200 overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.label}
                    width={56}
                    height={56}
                    className="object-contain"
                  />
                </div>

                {/* Label */}
                <span className="text-xs sm:text-sm font-semibold text-[#544A3E]">
                  {item.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;

