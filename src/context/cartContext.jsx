import { createContext, useContext, useState } from "react";

const CartContext = createContext();

export function CartProvider({ children }) {
  const [showCart, setShowCart] = useState(false);
  const [addCart, setAddCart] = useState([]);

  return (
    <CartContext.Provider
      value={{ showCart, setShowCart, addCart, setAddCart }}
    >
      {children}
    </CartContext.Provider>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export function useCart() {
  return useContext(CartContext);
}
