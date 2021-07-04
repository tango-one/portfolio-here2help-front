// libraries
import { useState, useEffect } from "react";
import { Input } from "reactstrap";
import { List, Card } from "antd";
import { useHistory } from "react-router-dom";

// firebase
import firebase from "../../lib/firebase";

// styles
import "./style.css";

// data
import data from "../../util/data";

// courses collection
const CourseCollection = firebase.firestore().collection("courses");

const Search = () => {
  // states
  const [searchTerm, setSearchTerm] = useState("");
  const [searchData, setSearchData] = useState([]);
  const [data, setData] = useState([]);

  const history = useHistory();

  useEffect(() => {
    CourseCollection.get()
      .then((sanpShot) => {
        let docs = sanpShot.docs.map((doc) => doc.data());
        setData(docs);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    if (searchTerm === "") {
      setSearchData([]);
    } else {
      const arr = data.filter((i) =>
        i.category.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setSearchData(arr);
    }
  }, [searchTerm]);

  return (
    <div className="search__wrapper">
      <h1>Search</h1>
      <div className="search-input-container">
        <Input
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search"
        />
      </div>
      <List
        grid={{ gutter: 8, sm: 1, md: 2, lg: 3 }}
        dataSource={searchData}
        renderItem={(item) => (
          <List.Item>
            <Card
              style={{ width: 350, cursor: "pointer" }}
              cover={<img loading="lazy" alt="example" src={item.image} />}
              onClick={() => history.push(`/course/${item.id}`)}
            >
              <div className="list__info">
                <h5>{item.title}</h5>
                <h3>${item.price}</h3>
              </div>
              <p className="list_desc">{item.description}</p>
              <button className="list__btn">Add To Cart</button>
            </Card>
          </List.Item>
        )}
      />
    </div>
  );
};

export default Search;
