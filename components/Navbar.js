"use client";

import { useState } from "react";
import {
  ShoppingCartIcon,
  MagnifyingGlassIcon,
  XMarkIcon,
  Bars3Icon,
} from "@heroicons/react/24/outline";
import Link from "next/link";
import { useCart } from "../context/CartContext";

export default function Navbar() {
  const { cart } = useCart(); // Access cart state
  const [isSearchOpen, setSearchOpen] = useState(false); // State for search overlay
  const [isMenuOpen, setMenuOpen] = useState(false); // State for mobile menu

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" aria-label="Patch22 Store" className="flex items-center space-x-2">
          <img
            src="/logo.png"
            alt="Patch22 Store Logo"
            className="h-8 w-auto object-contain"
          />
          <span className="text-2xl font-semibold text-gray-900 hover:text-gray-600 transition">
            Patch22
          </span>
        </Link>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex items-center space-x-8">
          {["Home", "Products", "About", "Contact"].map((item) => (
            <li key={item}>
              <Link
                href={`/${item.toLowerCase()}`}
                className="text-gray-700 hover:text-gray-900 transition font-medium"
              >
                {item}
              </Link>
            </li>
          ))}
          {/* Search Button */}
          <li>
            <button
              onClick={() => setSearchOpen(true)}
              className="hover:text-gray-900 transition"
              aria-label="Open search"
            >
              <MagnifyingGlassIcon className="h-6 w-6 text-gray-700" />
            </button>
          </li>

          {/* Cart Icon */}
          <li>
            <Link href="/cart" className="relative group" aria-label="View cart">
              <ShoppingCartIcon className="h-6 w-6 text-gray-700 group-hover:text-gray-900 transition" />
              {cart.length > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold rounded-full px-1">
                  {cart.length}
                </span>
              )}
            </Link>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!isMenuOpen)}
          className="md:hidden text-gray-700 hover:text-gray-900 transition"
          aria-label="Open menu"
        >
          <Bars3Icon className="h-8 w-8" />
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg fixed top-0 left-0 w-full h-screen z-40 flex flex-col items-center pt-16">
          <button
            onClick={() => setMenuOpen(false)}
            className="absolute top-4 right-4 text-gray-700 hover:text-gray-900 transition"
            aria-label="Close menu"
          >
            <XMarkIcon className="h-8 w-8" />
          </button>
          <ul className="space-y-6">
            {["Home", "Products", "About", "Contact"].map((item) => (
              <li key={item}>
                <Link
                  href={`/${item.toLowerCase()}`}
                  onClick={() => setMenuOpen(false)}
                  className="text-xl text-gray-700 hover:text-gray-900 transition font-semibold"
                >
                  {item}
                </Link>
              </li>
            ))}
            {/* Search Button in Mobile */}
            <li>
              <button
                onClick={() => {
                  setSearchOpen(true);
                  setMenuOpen(false);
                }}
                className="text-gray-700 hover:text-gray-900 transition"
                aria-label="Open search"
              >
                <MagnifyingGlassIcon className="h-6 w-6" />
              </button>
            </li>
            {/* Cart Link */}
            <li>
              <Link
                href="/cart"
                onClick={() => setMenuOpen(false)}
                className="relative text-gray-700 hover:text-gray-900 transition font-semibold"
                aria-label="View cart"
              >
                Cart
                {cart.length > 0 && (
                  <span className="ml-2 bg-red-500 text-white text-xs font-bold rounded-full px-2">
                    {cart.length}
                  </span>
                )}
              </Link>
            </li>
          </ul>
        </div>
      )}

      {/* Search Overlay */}
      {isSearchOpen && (
        <div className="fixed inset-0 bg-gray-900 bg-opacity-90 flex items-center justify-center z-50">
          <div className="relative w-3/4 max-w-xl">
            <input
              type="text"
              placeholder="Search products..."
              className="w-full py-4 px-6 text-2xl rounded-md text-gray-900 focus:outline-none shadow-lg"
              aria-label="Search products"
            />
            <button
              onClick={() => setSearchOpen(false)}
              className="absolute right-6 top-4 text-gray-700 hover:text-gray-900 transition"
              aria-label="Close search"
            >
              <XMarkIcon className="h-8 w-8" />
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
