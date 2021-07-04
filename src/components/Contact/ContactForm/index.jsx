// libraries
import { useState } from "react";
import { Form, FormGroup, Input } from "reactstrap";

// styles
import "./style.css";

// components
import ContactMessage from "../ContactMessage";

const ContactForm = () => {
  // states
  const [flag, setFlag] = useState(false);

  // submit handler
  const handleSubmit = (e) => {
    e.preventDefault();
    setFlag(!flag);
  };

  return (
    <div className="contact__wrapper">
      <h1>Contact Us</h1>
      {flag ? (
        <ContactMessage />
      ) : (
        <Form className="contact__form">
          <FormGroup>
            <Input type="text" name="name" id="name" placeholder="Your Name" />
          </FormGroup>
          <FormGroup>
            <Input
              type="email"
              name="email"
              id="email"
              placeholder="Email Address"
            />
          </FormGroup>
          <FormGroup>
            <Input
              type="textarea"
              name="comment"
              id="comment"
              placeholder="Comment"
            />
          </FormGroup>
          <button
            onClick={(e) => {
              handleSubmit(e);
            }}
          >
            Submit
          </button>
        </Form>
      )}
    </div>
  );
};

export default ContactForm;
