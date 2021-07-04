// styles
import "./style.css";

// mock up data
import data from "../../util/data";

const index = () => {
  return (
    <div className="about__wrapper">
      <h1>Who we are</h1>
      <h2>Our Mission</h2>
      <div className="about__inner">
        <div>
          <span>
            <img src={data.hero.bgImag} alt="perons workspace" />
          </span>
          <h3>To guide you so you will learn</h3>
        </div>
        <div>
          <h3>through online learning</h3>
          <span>
            <img src={data.hero.bgImag} alt="perons workspace" />
          </span>
        </div>
        <div>
          <span>
            <img src={data.hero.bgImag} alt="perons workspace" />
          </span>
          <h3>on all screens, we are there for you.</h3>
        </div>
      </div>
    </div>
  );
};

export default index;
