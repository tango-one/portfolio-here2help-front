import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ReactPlayer from "react-player";
import { Form, FormGroup, Label, Input } from "reactstrap";

import firebase from "../../lib/firebase";

import "./style.css";

// courses collection
const CourseCollection = firebase.firestore().collection("courses");

const CourseContent = () => {
  const { id } = useParams();

  const [data, setData] = useState(null);

  useEffect(() => {
    CourseCollection.doc(id)
      .get()
      .then((doc) => {
        setData(doc.data());
      })
      .catch((err) => console.log(err.message));
  }, [id]);

  if (!data) return <h1>Loading...</h1>;

  return (
    <div>
      <ReactPlayer url={data.video} controls width="100%" height="450px" />
      <div className="detail__section">
        <div className="row w-100 section__one">
          <h5 className="col-4">
            Course: <span>{data.title}</span>
          </h5>
          <h5 className="col-4">
            Duration: <span>{data.duration}</span>
          </h5>
          <h5 className="col-4">
            release date: <span>{data.release_date}</span>
          </h5>
        </div>
        <div className="row w-100 py-4 section__two">
          <div className="col-4">
            <h5>This is what you will learn</h5>
            <p>{data.learn}</p>
          </div>
          <div className="col-4">
            <h5>This course is for</h5>
            <p>{data.course_for}</p>
          </div>
        </div>
        <div className="section__three">
          <h5>Let us notify you on new courses</h5>
          <Form className="newslater">
            <FormGroup>
              <Label for="email">E-mail</Label>
              <Input type="email" name="email" id="email" />
            </FormGroup>
            <button disabled>SUBMIT</button>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default CourseContent;
