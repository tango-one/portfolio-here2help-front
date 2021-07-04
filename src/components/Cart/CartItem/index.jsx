import { useHistory } from "react-router-dom";

// styles
import "./style.css";

const CartItem = ({ data }) => {
  const history = useHistory();

  const handleClick = () => {
    history.push(`/course/${data.id}`);
  };

  return (
    <div className="cart-item" onClick={handleClick}>
      <img src={data.image} alt={data.title} />
      <p>{data.title}</p>
    </div>
  );
};

export default CartItem;
