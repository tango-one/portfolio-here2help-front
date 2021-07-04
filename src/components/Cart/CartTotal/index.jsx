import React, { useContext } from "react";

// context
import CartContext from "../../../context/Cart";

// styles
import "./style.css";

const CartTotal = () => {
  const { cartTotal } = useContext(CartContext);

  return (
    <div className="cart-total">
      <h6>Total</h6>
      <h2>$ {cartTotal}</h2>
      <button>Accept</button>
    </div>
  );
};

export default CartTotal;
