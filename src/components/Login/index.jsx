import React, { useState, useContext } from "react";
import { message } from "antd";
import { notification } from "antd";

// libs
import { Form, FormGroup, Label, Input } from "reactstrap";
import { useHistory } from "react-router-dom";
import axios from "axios";

// context
import UserContext from "../../context/User";

// style
import "../Register/style.css";

// firebase
import firebase from "../../lib/firebase";
// user collection
const UserCollection = firebase.firestore().collection("user");

const LoginForm = () => {
  const { user, setUser, signIn } = useContext(UserContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (email !== "" && password !== "") {
      setLoading(true);
      signIn(email, password)
        .then((res) => {
          setLoading(false);
          console.log(res);
          history.push("/");
        })
        .catch((err) => {
          setLoading(false);
          openNotification(err.message);
        });
    } else {
      message.error("Fill all the fields");
    }
  };

  const openNotification = (_message) => {
    notification.open({
      message: "Credential Error",
      description: _message,
    });
  };

  return (
    <div className="register__wrapper">
      <div className="register__content">
        <h2>Login</h2>
        <Form className="register_form" onSubmit={handleSubmit}>
          <FormGroup>
            <Label for="email">E-mail</Label>
            <Input
              type="email"
              name="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </FormGroup>
          <FormGroup>
            <Label for="password">Password</Label>
            <Input
              type="password"
              name="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </FormGroup>
          <button type="submit">{!loading ? "Login" : "Logging...."}</button>
        </Form>
      </div>
    </div>
  );
};

export default LoginForm;
