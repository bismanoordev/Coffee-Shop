"use client";

import { useEffect, useState } from "react";
import { X, Trash2, ShoppingBag } from "lucide-react";
import { useOrders, cancelOrder } from "@/app/data/ordersStore";

export default function OrdersModal({ open, onClose }) {
  const orders = useOrders();
  const [confirmId, setConfirmId] = useState(null);

  // Lock body scroll while open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  if (!open) return null;

  const handleCancel = (id) => {
    cancelOrder(id);
    setConfirmId(null);
  };

  return (
    <div
      className="fixed inset-0 z-[110] flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-lg bg-[#F1F0EE] rounded-2xl shadow-xl max-h-[90vh] flex flex-col overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-5 sm:px-6 py-4 border-b border-black/10">
          <h3 className="text-lg sm:text-xl font-extrabold text-[#2b2015]">
            My Orders
          </h3>
          <button
            onClick={onClose}
            aria-label="Close"
            className="text-[#2b2015] hover:bg-black/10 rounded-full p-1 transition"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Body */}
        <div className="p-5 sm:p-6 overflow-y-auto">
          {orders.length === 0 ? (
            <div className="flex flex-col items-center text-center gap-3 py-10 text-[#3a2c1e]">
              <ShoppingBag className="w-12 h-12 opacity-40" />
              <p className="font-semibold text-[#2b2015]">No orders yet</p>
              <p className="text-sm">
                Place an order and it will show up here so you can track or
                cancel it.
              </p>
            </div>
          ) : (
            <ul className="flex flex-col gap-3">
              {orders.map((order) => (
                <li
                  key={order.id}
                  className="bg-white rounded-xl shadow-sm p-3 flex items-center gap-3"
                >
                  <img
                    src={order.img || "/placeholder.svg"}
                    alt={order.title}
                    className="w-14 h-14 rounded-lg object-cover flex-shrink-0"
                  />
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between gap-2">
                      <h4 className="font-bold text-[#2b2015] truncate">
                        {order.title}
                      </h4>
                      <span className="text-sm font-semibold text-[#8f5235] whitespace-nowrap">
                        {order.price}
                      </span>
                    </div>
                    <p className="text-xs text-[#3a2c1e] mt-0.5">
                      Qty: {order.qty} · For {order.name || "—"}
                    </p>
                    <p className="text-xs text-[#3a2c1e]/70 truncate">
                      {order.address}
                    </p>
                  </div>

                  {/* Cancel action */}
                  {confirmId === order.id ? (
                    <div className="flex flex-col gap-1 flex-shrink-0">
                      <button
                        onClick={() => handleCancel(order.id)}
                        className="bg-red-600 text-white text-xs font-semibold px-3 py-1.5 rounded-md hover:bg-red-700 transition"
                      >
                        Confirm
                      </button>
                      <button
                        onClick={() => setConfirmId(null)}
                        className="text-[#3a2c1e] text-xs px-3 py-1 rounded-md hover:bg-black/10 transition"
                      >
                        Keep
                      </button>
                    </div>
                  ) : (
                    <button
                      onClick={() => setConfirmId(order.id)}
                      aria-label="Cancel order"
                      title="Cancel order"
                      className="flex-shrink-0 flex items-center gap-1 text-red-600 border border-red-300 hover:bg-red-50 text-xs font-semibold px-3 py-1.5 rounded-md transition"
                    >
                      <Trash2 className="w-4 h-4" />
                      Cancel
                    </button>
                  )}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}
