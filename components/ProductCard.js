import { FaStar, FaStarHalfAlt } from "react-icons/fa";

export default function ProductCard({ product }) {
  return (
    <div className="flex flex-col bg-white rounded-lg shadow-lg hover:shadow-2xl p-6 transition-transform transform hover:scale-105">
      {/* Product Image */}
      <div className="w-full h-48 mb-4 overflow-hidden rounded-lg">
        <img
          src={product.image_url}
          alt={product.name}
          className="object-cover w-full h-full transition-transform duration-300 transform hover:scale-110"
        />
      </div>

      {/* Product Details */}
      <h2 className="text-xl font-bold mb-2 line-clamp-1 text-gray-800">{product.name}</h2>

      {/* Ratings */}
      <div className="flex items-center text-yellow-400 mb-2">
        {[...Array(5)].map((_, i) => (
          <span key={i}>
            {i < Math.floor(product.rating) ? (
              <FaStar />
            ) : i < product.rating ? (
              <FaStarHalfAlt />
            ) : (
              <FaStar className="text-gray-300" />
            )}
          </span>
        ))}
        <span className="ml-2 text-gray-500 text-sm">{product.reviews} reviews</span>
      </div>

      {/* Price */}
      <p className="text-3xl font-extrabold text-blue-600 mb-1">${product.price.toFixed(2)}</p>

      {/* Delivery */}
      <p className="text-sm text-gray-600 mb-2">
        FREE delivery <span className="font-semibold text-black">Tue, Dec 24</span>
      </p>
      <p className="text-sm text-green-600 font-semibold">Arrives before Christmas</p>

      {/* Call to Action */}
      <a
        href={`/products/${product.id}`}
        className="inline-block mt-4 bg-blue-600 text-white text-center py-3 rounded-lg hover:bg-blue-700 transition duration-300 transform hover:scale-105"
      >
        View Details
      </a>
    </div>
  );
}