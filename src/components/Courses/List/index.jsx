import React, { useContext } from "react";
import { List, Card } from "antd";
import { useHistory } from "react-router-dom";
import { notification, message } from "antd";

// context
import CartContext from "../../../context/Cart";
import UserContext from "../../../context/User";

// style
import "./style.css";

const CourseList = ({ data }) => {
  const { addToCart } = useContext(CartContext);
  const { user } = useContext(UserContext);

  const history = useHistory();

  const openNotification = () => {
    notification.open({
      message: "User Not Logged In",
      description: "Logged in or Create an Account to add course to cart",
    });
  };

  return (
    <List
      grid={{ gutter: 8, sm: 1, md: 2, lg: 3 }}
      dataSource={data}
      renderItem={(item) => (
        <List.Item>
          <Card
            style={{ width: 350, cursor: "pointer" }}
            cover={<img loading="lazy" alt="example" src={item.image} />}
            onClick={() => history.push(`/course/${item.id}`)}
          >
            <div className="list__info">
              <h5>{item.title}</h5>
              <span className="price">${item.price}</span>
            </div>
            <p className="list_desc">{item.description}</p>
            <button
              className="list__btn"
              onClick={(e) => {
                e.stopPropagation();
                if (user !== null) {
                  addToCart(item);
                  message.success("Course Added to Cart", 0.5);
                } else {
                  openNotification();
                }
              }}
            >
              Add To Cart
            </button>
          </Card>
        </List.Item>
      )}
    />
  );
};

export default CourseList;
