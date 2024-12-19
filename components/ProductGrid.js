"use client";
import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function ProductGrid({ products }) {
  useEffect(() => {
    // Staggered animation for cards
    gsap.fromTo(
      ".product-card",
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        stagger: 0.2, // Delay between animations
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".product-grid",
          start: "top 80%",
          end: "top 20%",
          toggleActions: "play none none reverse",
        },
      }
    );
  }, []);

  if (!products || products.length === 0) {
    return <p className="text-center py-12">No products available.</p>;
  }

  return (
    <section className="product-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4 py-12">
      {products.map((product) => (
        <div
          key={product.id}
          className="product-card bg-white rounded-lg shadow-lg overflow-hidden text-center transform transition-transform hover:scale-105"
        >
          <img
            src={product.image_url}
            alt={`Image of ${product.name}`}
            className="w-full h-48 object-cover"
          />
          <div className="p-4">
            <h2 className="text-xl font-semibold">{product.name}</h2>
            <p className="text-gray-600">${product.price.toFixed(2)}</p>
            <button
              className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
              aria-label={`Add ${product.name} to cart`}
            >
              Add to Cart
            </button>
          </div>
        </div>
      ))}
    </section>
  );
}