//Import Libraires
import React, { createContext, useState } from "react";

//Create Context
const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartList, setCartList] = useState([]);
  const [cartTotal, setCartTotal] = useState(0);

  const addToCart = (_item) => {
    setCartList([_item, ...cartList]);
    setCartTotal((prev) => prev + _item.price);
  };

  const removeFromCart = () => {};

  return (
    <CartContext.Provider
      value={{
        cartList,
        cartTotal,
        addToCart,
        removeFromCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartContext;
