// components
import CartTotal from "../components/Cart/CartTotal";
import CartItems from "../components/Cart/CartItems";

const Cart = () => {
  return (
    <div className="container wrapper cart">
      <CartItems />
      <CartTotal />
    </div>
  );
};

export default Cart;
