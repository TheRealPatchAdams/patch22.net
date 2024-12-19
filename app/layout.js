"use client";

import { useState } from "react";
import { CartProvider } from "../context/CartContext";
import CartIcon from "../components/CartIcon";
import { Bars3Icon, XMarkIcon, MoonIcon, SunIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import Image from "next/image";
import "./globals.css"; // Import Tailwind CSS

export default function RootLayout({ children }) {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [isDarkMode, setDarkMode] = useState(false);

  return (
    <html lang="en" className={isDarkMode ? "dark" : ""}>
      <body className="flex flex-col min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-all duration-300">
        <CartProvider>
          <header className="bg-blue-600 dark:bg-blue-800 text-white sticky top-0 shadow-md z-50">
            <div className="container mx-auto flex justify-between items-center py-4 px-6">
              <Link href="/" className="flex items-center space-x-2 group">
                <Image
                  src="/logo.png"
                  alt="Patch22 Store Logo"
                  width={180}
                  height={180}
                  className="object-contain transform group-hover:scale-110 transition-transform duration-300"
                  priority
                />
                <span className="hidden sm:inline text-white dark:text-gray-200 font-bold text-xl">
                  
                </span>
              </Link>
              <nav className="hidden md:flex space-x-6 items-center">
                <Link href="/products" className="hover:underline hover:text-gray-200 transition">Products</Link>
                <CartIcon />
                <button
                  onClick={() => setDarkMode(!isDarkMode)}
                  aria-label="Toggle Dark Mode"
                  className="p-2 rounded-full bg-white dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 transition"
                >
                  {isDarkMode ? <SunIcon className="h-6 w-6 text-yellow-400" /> : <MoonIcon className="h-6 w-6 text-blue-500" />}
                </button>
              </nav>
              <button onClick={() => setMenuOpen(!isMenuOpen)} className="md:hidden">
                <Bars3Icon className="h-8 w-8 text-white" />
              </button>
            </div>
            {isMenuOpen && (
              <nav className="md:hidden flex flex-col items-center bg-blue-600 dark:bg-blue-800 text-white py-4">
                <Link href="/" onClick={() => setMenuOpen(false)}>Home</Link>
                <Link href="/products" onClick={() => setMenuOpen(false)}>Products</Link>
                <Link href="/contact" onClick={() => setMenuOpen(false)}>Contact</Link>
                <CartIcon />
              </nav>
            )}
          </header>
          <main className="flex-grow container mx-auto px-6 py-8">{children}</main>
          <footer className="bg-gray-800 dark:bg-gray-700 text-white py-4">
            <div className="container mx-auto text-center">
              &copy; {new Date().getFullYear()} Patch22 Store. All rights reserved.
            </div>
          </footer>
        </CartProvider>
      </body>
    </html>
  );
}
