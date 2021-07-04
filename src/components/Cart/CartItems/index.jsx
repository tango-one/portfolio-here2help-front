import React, { useContext } from "react";

// context
import CartContext from "../../../context/Cart";

// styles
import "./style.css";

// data
import data from "../../../util/data";

// components
import CartItem from "../CartItem";

const CartItems = () => {
  const { cartList } = useContext(CartContext);

  return (
    <div className="cart-items">
      {cartList.map((course, index) => (
        <CartItem key={index} data={course} />
      ))}
    </div>
  );
};

export default CartItems;
