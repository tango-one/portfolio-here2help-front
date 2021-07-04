import React, { useState, useContext } from "react";
import { message } from "antd";
import { notification } from "antd";

// libs
import { Form, FormGroup, Label, Input } from "reactstrap";
import { useHistory } from "react-router-dom";
import axios from "axios";

// firebase
import firebase from "../../lib/firebase";

// context
import UserContext from "../../context/User";

// style
import "./style.css";

// user collection
const UserCollection = firebase.firestore().collection("user");

const RegisterForm = () => {
  const { setUser, signUp } = useContext(UserContext);
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (fullname !== "" && email !== "" && password !== "") {
      setLoading(true);
      signUp(email, password)
        .then((res) => {
          console.log(res);

          let user = {
            id: res.user.uid,
            name: fullname,
            email: email,
          };

          UserCollection.doc(user.id)
            .set(user)
            .then(() => {
              setLoading(false);
              setUser(user);
              history.push("/");
            })
            .catch((err) => {
              setLoading(false);
              openNotification(err.message);
            });
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
        <h2>Register</h2>
        <Form className="register_form" onSubmit={handleSubmit}>
          <FormGroup>
            <Label for="name">Full Name</Label>
            <Input
              type="text"
              name="name"
              id="name"
              value={fullname}
              onChange={(e) => setFullname(e.target.value)}
            />
          </FormGroup>
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
          <button type="submit">
            {!loading ? "Register" : "Registering...."}
          </button>
        </Form>
      </div>
    </div>
  );
};

export default RegisterForm;
