import React, { createContext, useContext, useReducer } from 'react';

// Initial state of the cart
const initialState = {
  items: [], // { id, name, price, quantity }
};

// Reducer function to handle cart actions
function cartReducer(state, action) {
  switch (action.type) {
    case 'ADD_TO_CART':
      const existingItem = state.items.find(item => item.id === action.payload.id);
      if (existingItem) {
        return {
          ...state,
          items: state.items.map(item =>
            item.id === action.payload.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          ),
        };
      } else {
        return {
          ...state,
          items: [...state.items, { ...action.payload, quantity: 1 }],
        };
      }
    default:
      return state;
  }
}

// Create the context
const CartContext = createContext();

// Create a provider component
export function CartProvider({ children }) {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  const addToCart = (product) => {
    dispatch({ type: 'ADD_TO_CART', payload: product });
  };

  return (
    <CartContext.Provider value={{ cart: state, addToCart }}>
      {children}
    </CartContext.Provider>
  );
}

// Custom hook for using the cart
export function useCart() {
  return useContext(CartContext);
}