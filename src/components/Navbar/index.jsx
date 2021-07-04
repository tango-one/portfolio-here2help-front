import React, { useState, useContext } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavbarText,
} from "reactstrap";
import { Popover } from "antd";

import { Link, useHistory } from "react-router-dom";

// context
import UserContext from "../../context/User";

// style
import "./style.css";

// assets
import Logo from "../../assets/logo.png";
import Person from "../../assets/person-circle.svg";
import Cart from "../../assets/cart.svg";

// firebase
import firebase from "../../lib/firebase";

const NavbarComponent = () => {
  const { user, signOut, setUser } = useContext(UserContext);
  const history = useHistory();

  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  const content = (
    <div>
      <p
        style={{ cursor: "pointer" }}
        onClick={() => {
          signOut()
            .then(() => {
              setUser(null);
              history.push("/login");
            })
            .catch((err) => console.error(err.message));
        }}
      >
        Logout
      </p>
    </div>
  );

  return (
    <Navbar light expand="lg">
      <div className="container">
        <Link to="/">
          <NavbarBrand>
            <img src={Logo} alt="here to help" />
          </NavbarBrand>
        </Link>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mx-auto navbar__wrapper" navbar>
            <NavItem>
              <Link className="nav-link" to="/">
                Home
              </Link>
            </NavItem>
            <NavItem>
              <Link className="nav-link" to="/courses">
                Courses
              </Link>
            </NavItem>
            <NavItem>
              <Link className="nav-link" to="/about">
                About
              </Link>
            </NavItem>
            <NavItem>
              <Link className="nav-link" to="/contact">
                Contact
              </Link>
            </NavItem>
            <NavItem>
              <Link className="nav-link" to="/search">
                Search
              </Link>
            </NavItem>
          </Nav>
          {user === null ? (
            <>
              <Link to="/login">
                <NavbarText className="navbar__btn first">Login</NavbarText>
              </Link>
              <Link to="/register">
                <NavbarText className="navbar__btn">Register</NavbarText>
              </Link>
            </>
          ) : (
            <>
              <Popover content={content}>
                <img className="navbar__icon" src={Person} alt="user logged" />
              </Popover>
              <Link to="/cart">
                <img className="navbar__icon" src={Cart} alt="user cart" />
              </Link>
            </>
          )}
        </Collapse>
      </div>
    </Navbar>
  );
};

export default NavbarComponent;
