import React, { useState, useEffect } from "react";
import { Tabs } from "antd";

// components
import List from "../List";

import "./style.css";

// firebase
import firebase from "../../../lib/firebase";

// data
import data from "../../../util/data";

const { TabPane } = Tabs;

// courses collection
const CourseCollection = firebase.firestore().collection("courses");

const CustomTabs = () => {
  const [coursesList, setCoursesList] = useState();
  const [tempList, setTempList] = useState([]);

  useEffect(() => {
    CourseCollection.get()
      .then((sanpShot) => {
        let docs = sanpShot.docs.map((doc) => doc.data());
        setCoursesList(docs);
        setTempList(docs);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const filter = (_category) => {
    let list = tempList.filter((item) => item.category === _category);
    return list;
  };

  const callback = (key) => {
    switch (key) {
      case "1":
        setCoursesList(tempList);
        break;
      case "2":
        setCoursesList(filter("pc"));
        break;
      case "3":
        setCoursesList(filter("mobile"));
        break;
      case "4":
        setCoursesList(filter("tablet"));
        break;

      default:
        break;
    }
  };

  return (
    <div className="tabs__wrapper">
      <h1>Courses</h1>
      <Tabs defaultActiveKey="1" onChange={callback}>
        <TabPane tab="All" key="1">
          <List data={coursesList} />
        </TabPane>
        <TabPane tab="PC" key="2">
          <List data={coursesList} />
        </TabPane>
        <TabPane tab="MOBILE" key="3">
          <List data={coursesList} />
        </TabPane>
        <TabPane tab="TABLET" key="4">
          <List data={coursesList} />
        </TabPane>
      </Tabs>
    </div>
  );
};

export default CustomTabs;
