"use client";

import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const coffees = [
  { img: "/coffee1.png", title: "Lungo Coffee", price: "Rs. 200" },
  { img: "/coffee2.png", title: "Espresso", price: "Rs. 250" },
  { img: "/coffee3.png", title: "Cappuccino", price: "Rs. 300" },
  { img: "/coffee4.png", title: "Latte", price: "Rs. 280" },
  { img: "/coffee5.png", title: "Mocha", price: "Rs. 350" },
  { img: "/coffee6.png", title: "Americano", price: "Rs. 220" },
  { img: "/coffee7.png", title: "Flat White", price: "Rs. 270" },
  { img: "/coffee8.png", title: "Macchiato", price: "Rs. 300" },
];

const Page = () => {
  const settings = {
    slidesToShow: 4,
    slidesToScroll: 1, 
    infinite: true,
    arrows: true,
    dots: false,
    autoplay: true, 
    autoplaySpeed: 2000, 
    speed: 800, 
    pauseOnHover: true, 
    responsive: [
      {
        breakpoint: 1280,
        settings: { slidesToShow: 3, slidesToScroll: 1 },
      },
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2, slidesToScroll: 1 },
      },
      {
        breakpoint: 640,
        settings: { slidesToShow: 1, slidesToScroll: 1 },
      },
    ],
  };

  return (
    <div id="about" className="bg-[#F1F0EE] h-auto overflow-hidden">
      <section className="py-16 sm:py-20 px-4 sm:px-6 md:px-10 lg:px-20">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-10 sm:mb-14 text-[#2b2015]">
          Our Special Coffee
        </h2>

        <div className="w-full max-w-[1500px] mx-auto overflow-hidden">
          <Slider {...settings} >
            {coffees.map((coffee, index) => (
              <div key={index} className="px-2 sm:px-3">
                <div className="bg-[#EEEBE6] rounded-2xl shadow-lg flex flex-col overflow-hidden">
                  {/* Coffee Image */}
                  <div className="relative w-full h-44 sm:h-48 md:h-56 lg:h-60">
                    <img
                      src={coffee.img}
                      alt={coffee.title}
                      className="w-full h-full object-cover rounded-t-2xl"
                    />
                  </div>

                  {/* Coffee Content */}
                  <div className="p-4 sm:p-5 flex flex-col gap-2">
                    <h3 className="text-base sm:text-lg md:text-xl font-extrabold text-[#2b2015]">
                      {coffee.title}
                    </h3>
                    <p className="text-[#3a2c1e] text-xs sm:text-sm md:text-base leading-snug">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    </p>

                    <div className="flex items-center justify-between mt-3">
                      <p className="font-bold text-[#2b2015] text-sm sm:text-base">
                        {coffee.price}
                      </p>
                      <button className="bg-[#2A0000] text-white text-xs sm:text-sm md:text-base px-3 sm:px-4 py-1.5 rounded-md hover:bg-[#4a2a1c] transition">
                        Order Now
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </section>
    </div>
  );
};

export default Page;
