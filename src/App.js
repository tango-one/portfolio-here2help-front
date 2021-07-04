import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// styles
import "bootstrap/dist/css/bootstrap.min.css";
import "antd/dist/antd.css";
import "./App.css";

// components
import NavbarComponent from "./components/Navbar";

// pages
import Home from "./pages/Home";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Courses from "./pages/Courses";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Search from "./pages/Search";
import Cart from "./pages/Cart";
import SingleCourse from "./pages/SingleCourse";

function App() {
  return (
    <div>
      <Router>
        <NavbarComponent />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/register">
            <Register />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/courses">
            <Courses />
          </Route>
          <Route path="/course/:id">
            <SingleCourse />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/search">
            <Search />
          </Route>
          <Route path="/cart">
            <Cart />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
