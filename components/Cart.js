"use client";

import { useCart } from "../context/CartContext";

export default function Cart() {
  const { cart, removeItem, updateQuantity, clearCart } = useCart();

  const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div className="rounded-lg border p-6 shadow-sm bg-white">
      <h2 className="text-2xl font-bold mb-4">Your Cart</h2>

      {cart.length === 0 ? (
        <p className="text-gray-500">Your cart is empty.</p>
      ) : (
        <>
          {/* Cart Items */}
          <ul className="space-y-4">
            {cart.map((item) => (
              <li
                key={item.id}
                className="flex justify-between items-center border-b pb-4"
              >
                <div>
                  <h3 className="font-semibold">{item.name}</h3>
                  <p className="text-sm text-gray-500">
                    Price: ${item.price.toFixed(2)}
                  </p>
                  <p className="text-sm text-gray-500">
                    Quantity:{" "}
                    <input
                      type="number"
                      value={item.quantity}
                      min="1"
                      onChange={(e) =>
                        updateQuantity(item.id, parseInt(e.target.value, 10))
                      }
                      className="w-16 rounded border text-center"
                    />
                  </p>
                </div>
                <button
                  onClick={() => removeItem(item.id)}
                  className="text-red-500 hover:text-red-700"
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>

          {/* Total and Clear Cart */}
          <div className="mt-6 flex justify-between items-center">
            <button
              onClick={clearCart}
              className="text-red-500 hover:text-red-700 transition"
            >
              Clear Cart
            </button>
            <span className="text-lg font-bold">
              Total: ${total.toFixed(2)}
            </span>
          </div>

          {/* Checkout Button */}
          <div className="mt-4 flex justify-end">
            <a
              href="/checkout"
              className="rounded bg-green-600 px-5 py-2 text-white hover:bg-green-700 transition"
            >
              Checkout
            </a>
          </div>
        </>
      )}
    </div>
  );
}
