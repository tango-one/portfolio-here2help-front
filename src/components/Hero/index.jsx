import { useHistory } from "react-router-dom";

// style
import "./style.css";

// mock up data
import data from "../../util/data";

const Hero = () => {
  const history = useHistory();

  return (
    <div className="hero__wrapper">
      <section className="detail__section">
        <h1>{data.hero.title}</h1>
        <p>{data.hero.info}</p>
        <button onClick={() => history.push("/courses")}>
          {data.hero.btnText}
        </button>
      </section>
      <img
        className="image__section"
        src={data.hero.bgImag}
        alt="perons workspace"
      />
    </div>
  );
};

export default Hero;
