import React from "react";
import useCartStore from "../context/cartStore";

export default function CartDebug() {
  const cart = useCartStore((state) => state.cart);

  return (
    <div
      style={{
        position: "fixed",
        bottom: 10,
        right: 10,
        backgroundColor: "#f0f0f0",
        padding: 10,
        maxWidth: 300,
        border: "1px solid #ccc",
        borderRadius: 8,
        zIndex: 9999,
      }}
    >
      <h3 style={{ marginBottom: 6 }}>Cart Debug</h3>
      {cart.length === 0 ? (
        <p>Cart is empty</p>
      ) : (
        <ul style={{ listStyle: "none", paddingLeft: 0, margin: 0 }}>
          {cart.map((item) => (
            <li key={item.id}>
              {item.name} x {item.quantity}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}