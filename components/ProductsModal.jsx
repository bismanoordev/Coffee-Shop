"use client";

import { useState, useEffect } from "react";
import { X } from "lucide-react";
import { coffees } from "@/app/data/coffees";
import OrderModal from "@/components/OrderModal";

// Products list popup. Pass `open` to show it, `onClose` to hide it.
// Clicking a product closes the list and opens the shared order form.
export default function ProductsModal({ open, onClose }) {
  const [selectedCoffee, setSelectedCoffee] = useState(null);

  const orderCoffee = (coffee) => {
    setSelectedCoffee(coffee);
    onClose(); // close the products list; order form takes over
  };

  // Lock body scroll while the products list is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      {open && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
          onClick={onClose}
        >
          <div
            className="relative w-full max-w-3xl bg-[#F1F0EE] rounded-2xl shadow-xl max-h-[90vh] flex flex-col overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="flex items-center justify-between px-5 sm:px-6 py-4 border-b border-black/10">
              <h3 className="text-lg sm:text-xl font-extrabold text-[#2b2015]">
                Our Coffee Products
              </h3>
              <button
                onClick={onClose}
                aria-label="Close"
                className="text-[#2b2015] hover:bg-black/10 rounded-full p-1 transition"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Products grid */}
            <div className="p-5 sm:p-6 overflow-y-auto">
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                {coffees.map((coffee) => (
                  <button
                    key={coffee.title}
                    onClick={() => orderCoffee(coffee)}
                    className="text-left bg-white rounded-xl shadow-sm hover:shadow-md hover:ring-2 hover:ring-[#2A0000]/30 transition overflow-hidden flex flex-col"
                  >
                    <div className="w-full h-24 sm:h-28">
                      <img
                        src={coffee.img || "/placeholder.svg"}
                        alt={coffee.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="p-3 flex flex-col gap-1">
                      <h4 className="text-sm font-bold text-[#2b2015] leading-tight">
                        {coffee.title}
                      </h4>
                      <p className="text-sm font-semibold text-[#8f5235]">
                        {coffee.price}
                      </p>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Shared order form, opened when a product is clicked */}
      <OrderModal coffee={selectedCoffee} onClose={() => setSelectedCoffee(null)} />
    </>
  );
}
