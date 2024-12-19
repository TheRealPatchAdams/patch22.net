"use client";

import { useCart } from "../context/CartContext";

export default function CartIcon() {
  const { getCartTotal } = useCart();

  return (
    <a href="/cart" className="relative">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
        className="h-6 w-6 text-white hover:text-gray-200 transition"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3.75 3h16.5M7.5 3v3m9-3v3m-9 15h9m-9 0a2.25 2.25 0 01-2.25-2.25m11.25 2.25a2.25 2.25 0 002.25-2.25m-9 0h9m-9 0V9a3 3 0 013-3h3a3 3 0 013 3v9m-6-6h.008v.008H12V12z"
        />
      </svg>
      {getCartTotal() > 0 && (
        <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold rounded-full px-1">
          ${getCartTotal().toFixed(2)} {/* Ensure two decimal places */}
        </span>
      )}
    </a>
  );
}
