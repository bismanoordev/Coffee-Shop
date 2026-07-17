"use client";

import { useState, useEffect } from "react";
import { X } from "lucide-react";
import { addOrder } from "@/app/data/ordersStore";

// Reusable order form modal. Pass a `coffee` object to open it, `null` to keep it closed.
export default function OrderModal({ coffee, onClose }) {
  const [form, setForm] = useState({ name: "", phone: "", address: "", qty: 1 });
  const [submitted, setSubmitted] = useState(false);

  // Reset the form each time a new coffee is selected
  useEffect(() => {
    if (coffee) {
      setForm({ name: "", phone: "", address: "", qty: 1 });
      setSubmitted(false);
    }
  }, [coffee]);

  // Lock body scroll while the modal is open
  useEffect(() => {
    document.body.style.overflow = coffee ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [coffee]);

  if (!coffee) return null;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addOrder({
      title: coffee.title,
      price: coffee.price,
      img: coffee.img,
      name: form.name,
      phone: form.phone,
      address: form.address,
      qty: Number(form.qty) || 1,
    });
    setSubmitted(true);
  };

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-md bg-[#F1F0EE] rounded-2xl shadow-xl overflow-hidden max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          aria-label="Close"
          className="absolute top-3 right-3 text-[#2b2015] hover:bg-black/10 rounded-full p-1 transition"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          /* Success state */
          <div className="p-8 text-center flex flex-col items-center gap-3">
            <div className="w-14 h-14 rounded-full bg-green-600 text-white flex items-center justify-center text-3xl">
              ✓
            </div>
            <h3 className="text-xl font-extrabold text-[#2b2015]">
              Order Placed!
            </h3>
            <p className="text-sm text-[#3a2c1e]">
              Thank you {form.name || "customer"}, your order for{" "}
              <span className="font-semibold">
                {form.qty}× {coffee.title}
              </span>{" "}
              has been received.
            </p>
            <p className="text-xs text-[#3a2c1e]/80">
              You can cancel it anytime from <b>My Orders</b> in the menu.
            </p>
            <button
              onClick={onClose}
              className="mt-2 bg-[#2A0000] text-white px-6 py-2 rounded-md hover:bg-[#4a2a1c] transition"
            >
              Done
            </button>
          </div>
        ) : (
          <>
            {/* Header with coffee info */}
            <div className="flex items-center gap-4 p-5 border-b border-black/10">
              <img
                src={coffee.img || "/placeholder.svg"}
                alt={coffee.title}
                className="w-16 h-16 rounded-xl object-cover"
              />
              <div>
                <h3 className="text-lg font-extrabold text-[#2b2015]">
                  {coffee.title}
                </h3>
                <p className="font-bold text-[#2b2015]">{coffee.price}</p>
              </div>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="p-5 flex flex-col gap-4">
              <div className="flex flex-col gap-1">
                <label className="text-sm font-semibold text-[#2b2015]">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  required
                  placeholder="Your name"
                  className="px-4 py-2 rounded-lg bg-white border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#2A0000]/40 text-sm text-[#2b2015] placeholder:text-gray-400"
                />
              </div>

              <div className="flex flex-col gap-1">
                <label className="text-sm font-semibold text-[#2b2015]">
                  Phone
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  required
                  placeholder="03xx-xxxxxxx"
                  className="px-4 py-2 rounded-lg bg-white border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#2A0000]/40 text-sm text-[#2b2015] placeholder:text-gray-400"
                />
              </div>

              <div className="flex flex-col gap-1">
                <label className="text-sm font-semibold text-[#2b2015]">
                  Delivery Address
                </label>
                <textarea
                  name="address"
                  value={form.address}
                  onChange={handleChange}
                  required
                  rows={2}
                  placeholder="House #, street, city"
                  className="px-4 py-2 rounded-lg bg-white border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#2A0000]/40 text-sm text-[#2b2015] placeholder:text-gray-400 resize-none"
                />
              </div>

              <div className="flex flex-col gap-1 w-28">
                <label className="text-sm font-semibold text-[#2b2015]">
                  Quantity
                </label>
                <input
                  type="number"
                  name="qty"
                  min={1}
                  value={form.qty}
                  onChange={handleChange}
                  required
                  className="px-4 py-2 rounded-lg bg-white border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#2A0000]/40 text-sm text-[#2b2015] placeholder:text-gray-400"
                />
              </div>

              <button
                type="submit"
                className="mt-2 w-full bg-[#2A0000] text-white font-semibold py-2.5 rounded-lg hover:bg-[#4a2a1c] transition"
              >
                Place Order
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
}
