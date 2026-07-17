"use client";

import { useEffect, useState } from "react";

// Simple localStorage-backed order store (no backend).
const KEY = "coffee_orders";
const EVENT = "coffee-orders-changed";

export function getOrders() {
  if (typeof window === "undefined") return [];
  try {
    return JSON.parse(localStorage.getItem(KEY)) || [];
  } catch {
    return [];
  }
}

function save(orders) {
  localStorage.setItem(KEY, JSON.stringify(orders));
  // notify all subscribers in this tab
  window.dispatchEvent(new Event(EVENT));
}

export function addOrder(order) {
  const orders = getOrders();
  const newOrder = {
    id: `${Date.now()}-${Math.random().toString(36).slice(2, 7)}`,
    createdAt: Date.now(),
    ...order,
  };
  orders.unshift(newOrder);
  save(orders);
  return newOrder;
}

export function cancelOrder(id) {
  save(getOrders().filter((o) => o.id !== id));
}

// React hook: live list of orders that updates on add/cancel (this tab or another).
export function useOrders() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const update = () => setOrders(getOrders());
    update();
    window.addEventListener(EVENT, update);
    window.addEventListener("storage", update); // other tabs
    return () => {
      window.removeEventListener(EVENT, update);
      window.removeEventListener("storage", update);
    };
  }, []);

  return orders;
}
