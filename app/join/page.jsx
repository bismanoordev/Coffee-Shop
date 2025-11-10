"use client";

import { useState, useCallback } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import Image from "next/image";

const testimonials = [
  {
    id: 1,
    name: "James Smith",
    title: "Entrepreneur",
    rating: 5,
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing lorem. Lorem ipsum dolor sit amet, consectetur adipiscing. Dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut.",
    image: "/card1.png",
  },
  {
    id: 2,
    name: "James Smith",
    title: "Entrepreneur",
    rating: 5,
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing lorem. Lorem ipsum dolor sit amet, consectetur adipiscing. Dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut.",
    image: "/card1.png",
  },
  {
    id: 3,
    name: "James Smith",
    title: "Entrepreneur",
    rating: 3,
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing lorem. Lorem ipsum dolor sit amet, consectetur adipiscing. Dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut.",
    image: "/card1.png",
  },
  {
    id: 4,
    name: "Sarah Johnson",
    title: "Business Owner",
    rating: 5,
    text: "Exceptional service and support. The team went above and beyond to ensure our success. Highly recommended for anyone looking for excellence.",
    image: "/card1.png",
  },
  {
    id: 5,
    name: "Michael Chen",
    title: "Product Manager",
    rating: 5,
    text: "Outstanding quality and reliability. This has transformed how we operate. Best decision we made for our business this year.",
    image: "/card1.png",
  },
];

export default function Join() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = useCallback(() => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 3 : prevIndex - 1
    );
  }, []);

  const goToNext = useCallback(() => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 3 ? 0 : prevIndex + 1
    );
  }, []);

  const handleDotClick = (index) => {
    setCurrentIndex(index);
  };

  const visibleTestimonials = testimonials.slice(
    currentIndex,
    currentIndex + 3
  );
  const maxDots = Math.max(1, testimonials.length - 2);

  return (
    <section className="bg-[#F1F0EE]">
      <div
        className="bg-[#F1F0EE] py-16 px-4 sm:px-6 md:px-8 w-[95%] md:w-[90%] mx-auto"
        id="join"
      >
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold tracking-wide text-[#2B2015] mb-2">
              Come and Join
            </h2>
            <p className="text-sm md:text-base font-bold tracking-widest text-[#2B2015]">
              OUR HAPPY CUSTOMERS
            </p>
          </div>

          {/* Carousel Container */}
          <div className="relative flex items-center">
            {/* Left Arrow */}
            <button
              onClick={goToPrevious}
              className="absolute left-1 sm:left-2 md:left-3 top-1/2 -translate-y-1/2 z-10 p-2 bg-white/70 hover:bg-gray-300 rounded-full transition-colors shadow"
              aria-label="Previous testimonials"
            >
              <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 text-gray-700" />
            </button>

            {/* Cards Grid */}
            <div
              className="
                flex justify-center overflow-hidden gap-4 sm:gap-6 md:gap-8 w-full
                flex-wrap sm:flex-nowrap
              "
            >
              {visibleTestimonials.map((testimonial) => (
                <div
                  key={testimonial.id}
                  className="
                    bg-white rounded-lg p-5 sm:p-6 shadow-sm hover:shadow-md 
                    transition-shadow flex-1 min-w-[260px] sm:min-w-[280px] md:min-w-[300px] 
                    max-w-[340px]
                  "
                >
                  {/* Avatar + Info */}
                  <div className="flex items-start gap-4 mb-4">
                    <div className="relative w-14 h-14 rounded-full overflow-hidden flex-shrink-0">
                      <Image
                        src={testimonial.image || "/placeholder.svg"}
                        alt={testimonial.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-gray-800 text-sm sm:text-base">
                        {testimonial.name}
                      </h3>
                      <p className="text-xs sm:text-sm text-gray-600">
                        {testimonial.title}
                      </p>
                    </div>
                  </div>

                  {/* Stars */}
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 ${
                          i < testimonial.rating
                            ? "fill-amber-400 text-amber-400"
                            : "text-gray-300"
                        }`}
                      />
                    ))}
                  </div>

                  {/* Text */}
                  <p className="text-sm text-gray-700 leading-relaxed line-clamp-4">
                    {testimonial.text}
                  </p>
                </div>
              ))}
            </div>

            {/* Right Arrow */}
            <button
              onClick={goToNext}
              className="absolute right-1 sm:right-2 md:right-3 top-1/2 -translate-y-1/2 z-10 p-2 bg-white/70 hover:bg-gray-300 rounded-full transition-colors shadow"
              aria-label="Next testimonials"
            >
              <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 text-gray-700" />
            </button>
          </div>

          {/* Pagination Dots */}
          <div className="flex justify-center gap-2 mt-10 sm:mt-12">
            {[...Array(maxDots)].map((_, i) => (
              <button
                key={i}
                onClick={() => handleDotClick(i)}
                className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-colors ${
                  i === currentIndex
                    ? "bg-gray-800"
                    : "bg-gray-400 hover:bg-gray-600"
                }`}
                aria-label={`Go to testimonial set ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

