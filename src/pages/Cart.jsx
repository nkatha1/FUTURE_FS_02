import React from "react";
import { Link } from "react-router-dom";
import useCartStore from "../context/cartStore";

export default function Cart() {
  const cart = useCartStore((state) => state.cart);
  const removeFromCart = useCartStore((state) => state.removeFromCart);

  const totalCost = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  if (cart.length === 0) {
    return (
      <div className="p-6">
        <p>Your cart is empty.</p>
        <Link to="/" className="text-blue-600 underline mt-4 inline-block">
          ← Back to Home
        </Link>
      </div>
    );
  }

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Your Cart</h1>
      <ul>
        {cart.map((item) => (
          <li key={item.id} className="mb-2 flex justify-between items-center">
            <span>
              {item.name} - ${item.price.toFixed(2)} x {item.quantity}
            </span>
            <button
              onClick={() => removeFromCart(item.id)}
              className="bg-red-600 text-white px-2 py-1 rounded hover:bg-red-700 transition"
            >
              Remove
            </button>
          </li>
        ))}
      </ul>

      <p className="font-semibold mt-4">Total: ${totalCost.toFixed(2)}</p>

      <Link to="/" className="text-blue-600 underline mt-6 inline-block">
        ← Back to Home
      </Link>
    </div>
  );
}