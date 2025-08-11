import React from "react";
import ProductList from "../components/ProductList";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-4">Welcome to Future Store</h1>
      <p className="text-gray-600 mb-8">
        Discover the latest futuristic gadgets and fashion.
      </p>

      <ProductList />

      <div className="mt-8">
        <Link
          to="/cart"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
        >
          Go to Cart
        </Link>
      </div>

      <div className="bg-red-500 text-white p-4 text-center mt-10 rounded">
        If this box is red — Tailwind is working 🎉
      </div>
    </div>
  );
}