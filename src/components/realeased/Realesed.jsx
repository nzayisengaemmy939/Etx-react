import React from "react";
import twelve from "../../assets/twelve.png";

import thirteen from "../../assets/thirteen.png";
import fouteen from "../../assets/fourteen.png";
import fifteen from "../../assets/fifteen.png";
import sixteen from "../../assets/sixteen.png";
import one from "../../assets/one.png";

import "./Realesed";
const Realesed = () => {
  return (
    <div className="realesed">
      <div className="realesed-head">
        <h1>New Realese-Movies</h1>
        <h1>
          View All{" "}
          <span className="twelve">
            <img src={twelve}></img>
          </span>
        </h1>
      </div>

      <div className="realesed-movies">
        <div className="realesed-movie">
          <img src={thirteen}></img>
          <div className="genres">
            <div className="genre">
              <p>Ghosted</p>
            </div>
            <div className="genre">
              <button>HD</button>
              <button className="time"><img src={one}></img>3:12:00</button>
            </div>
          </div>
        </div>
        <div className="realesed-movie">
          <img src={fouteen}></img>
          <div className="genres">
            <div className="genre">
              <p>John Wick: Ch...</p>
            </div>
            <div className="genre">
              <button>HD</button>
              <button className="time"><img src={one}></img>3:12:00</button>
            </div>
          </div>
        </div>
        <div className="realesed-movie">
          <img src={fifteen}></img>
          <div className="genres">
            <div className="genre">
              <p>Guardians of th..</p>
            </div>
            <div className="genre">
              <button>HD</button>
              <button className="time"><img src={one}></img>3:12:00</button>
            </div>
          </div>
        </div>
        <div className="realesed-movie">
          <img src={sixteen}></img>
          <div className="genres">
            <div className="genre">
              <p>The Conven...</p>
            </div>
            <div className="genre">
              <button>HD</button>
              <button className="time"><img src={one}></img>3:12:00</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Realesed;
