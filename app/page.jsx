"use client";
import React, { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import About from "@/app/about/page";
import Contact from "@/app/contact/page";
import CoffeeBanner from "./coffeebanner/page";
import Iconsbar from "./iconsbar/page";
import Join from "./join/page";
import ProductsModal from "@/components/ProductsModal";

const Page = () => {
  const [showProducts, setShowProducts] = useState(false);

  return (
    <>
      <div>
        {/* Hero Section */}
        <div
          id="home"
          className="min-h-screen bg-cover bg-center bg-no-repeat flex flex-col"
          style={{
            backgroundImage: "url('/img1.png')",
          }}
        >
          <Header />
          <div className="flex-1 flex items-center text-gray-200 px-6 sm:px-10 md:px-20 lg:px-28 py-20 md:py-32">
            <div className="max-w-2xl">
              <p className="text-xs sm:text-sm tracking-wide">WELCOME</p>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-extrabold leading-tight py-6 sm:py-8">
                We serve the <br /> richest coffee in <br /> the city!
              </h1>
              <p className="text-xs sm:text-sm md:text-base leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipisicing <br className="hidden sm:block" /> elit,
                sed do eiusmod tempor
              </p>
              <button
                onClick={() => setShowProducts(true)}
                className="bg-gray-200 text-[#493827] font-bold px-5 py-2 sm:px-6 sm:py-3 mt-8 sm:mt-10 rounded-full hover:bg-[#8f5235] hover:text-white transition-colors duration-300"
              >
                Order Now
              </button>
            </div>
          </div>
        </div>

        {/* Other Sections */}
        <Iconsbar />
        <About />
        <CoffeeBanner />
        <Join />
        <Contact />
        <Footer />
      </div>

      {/* Products list + order form (shared), opened by the hero "Order Now" */}
      <ProductsModal
        open={showProducts}
        onClose={() => setShowProducts(false)}
      />
    </>
  );
};

export default Page;

