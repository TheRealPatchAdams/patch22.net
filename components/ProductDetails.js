"use client";

import Image from "next/image";
import { useCart } from "../context/CartContext";

export default function ProductDetails({ product }) {
  const { addToCart } = useCart();

  return (
    <div className="container mx-auto py-12 flex flex-col md:flex-row items-center gap-12">
      {/* Product Image */}
      <div className="relative w-full md:w-1/2 h-[400px] rounded-lg overflow-hidden shadow-lg">
        <Image
          src={product.image_url}
          alt={product.name}
          layout="fill"
          objectFit="contain"
          className="hover:scale-105 transition-transform duration-300"
          priority
        />
      </div>

      {/* Product Details */}
      <div className="flex-1 text-center md:text-left">
        <h1 className="text-4xl font-extrabold text-blue-600 mb-6">{product.name}</h1>
        <p className="text-lg text-gray-600 leading-relaxed mb-6">
          {product.description}
        </p>
        <p className="text-3xl font-semibold text-gray-900 mb-6">
          ${product.price.toFixed(2)}
        </p>

        {/* Add to Cart Button */}
        <button
          onClick={() => addToCart(product)}
          className="px-8 py-3 bg-blue-600 text-white font-bold text-lg rounded-lg hover:bg-blue-700 hover:shadow-md transition duration-300"
          aria-label={`Add ${product.name} to cart`}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}
