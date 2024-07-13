import React from "react";
import "./Recently.css";
import four from "../../assets/four.png";
import five from "../../assets/five.png";
import six from "../../assets/six.png";
import seven from "../../assets/seven.png";
import eight from "../../assets/eight.png";

const Recently = () => {
  return (
    <div className="recently">
      <h1>Recently Updated</h1>
      <div className="recently-movies">
        <div className="recently-realesed">
          <img src={four}></img>
          <div className="time-realesed">
            The Flash Series/S 2/EP 9 11/05/23
          </div>
        </div>
        <div className="recently-realesed">
          <img src={five}></img>
          <div className="time-realesed">
            The Flash Series/S 2/EP 9 11/05/23
          </div>
        </div>
        <div className="recently-realesed">
          <img src={six}></img>
          <div className="time-realesed">
            The Flash Series/S 2/EP 9 11/05/23
          </div>
        </div>
        <div className="recently-realesed">
          <img src={seven}></img>
          <div className="time-realesed">
            The Flash Series/S 2/EP 9 11/05/23
          </div>
        </div>
        <div className="eight">
          <img src={eight}></img>
        </div>
      </div>
    </div>
  );
};

export default Recently;
