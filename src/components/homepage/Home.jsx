import React from "react";
import "./Home.css";
import backgroundImage from "../../assets/bg-home.png";
import arrow from "../../assets/arrow.png";
import watch from "../../assets/watch.png";
import one from "../../assets/one.png";
import two from "../../assets/two.png";
import three from "../../assets/three.png";

const Home = () => {
  return (
    <div
      className="home"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        // backgroundAttachment: "fixed",
      }}
    >
      <div className="watch">
        <div className="watch-now">
          <p>Watch Now</p>
          <img src={arrow} alt="arrow" />
        </div>
        <div className="watch-later">
          <p>Watch Later</p>
          <img src={watch} alt="watch" />
        </div>
      </div>
      <div className="actions">
        <div>
          <h1>Avatar:The Way of Water</h1>
        </div>
        <div className="actions-2">
          <div className="action">Action</div>
          <div className="action">Adventure</div>
          <div className="action-1">Science Fiction</div>
          <div className="date">
          <img src={two} alt="one" />

            <p>2022</p>
          </div>
          <div className="date">
            <img src={one} alt="two" />
            <p>3:12:00</p>
          </div>
          <div className="date">
            <img src={three} alt="three" />
            <p>3:12:00</p>
          </div>
        </div>
        <div className="exp">
          Set more than a decade after the events of the first film, learn the
          story of the Sully family (Jake, Neytiri, and their kids), the trouble
          that follows them, the lengths they go to keep each other safe, the
          battles they fight to stay alive, and the tragedies they endure.
        </div>
        <div className="figure">
          <div className="line"></div>
          <div className="eclipse"></div>
          <div className="eclipse"></div>
          <div className="eclipse"></div>

        </div>
      </div>
    </div>
  );
};

export default Home;
