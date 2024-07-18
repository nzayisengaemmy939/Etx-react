import React from "react";
import twelve from "../../assets/twelve.png";

import twenty1 from "../../assets/twenty1.png";
import twenty2 from "../../assets/twenty2.png";
import twenty3 from "../../assets/twenty3.png";
import twenty4 from "../../assets/twenty4.png";
import twenty5 from "../../assets/twenty5.png";
import twenty6 from "../../assets/twenty6.png";
import twenty7 from "../../assets/twenty7.png";
import twenty8 from "../../assets/twenty8.png";
import one from "../../assets/one.png";
import "./Recommended.css";

const Recommended = ({recommend}) => {
  return (
    <div className="realesed">
      <div className="recommend-head">
        <div>
          <h1>Recommended</h1>
        </div>
        <div className="recommends-btn">
          <div className="recommend-btn">
            <button className="button">Movies</button>
            <button className="transparent">Series</button>
            <button className="transparent1">Animation</button>
          </div>
          <div>
            <h1 className="view">
              View All{" "}
              <span className="twelve">
                <img src={twelve}></img>
              </span>
            </h1>
          </div>
        </div>
      </div>

      <div className="realesed-movies">
        <div className="realesed-movie">
          <img src={twenty1}></img>
          <div className="genres">
            <div className="genre">
              <p>{recommend[0].name}</p>
            </div>
            <div className="genre">
              <button>CAM</button>
              <button className="time">
                <img src={one}></img>3:12:00
              </button>
            </div>
          </div>
        </div>
        <div className="realesed-movie">
          <img src={twenty2}></img>
          <div className="genres">
            <div className="genre">
            <p>{recommend[1].name}</p>
              
            </div>
            <div className="genre">
              <button>CAM</button>
              <button className="time">
                <img src={one}></img>3:12:00
              </button>
            </div>
          </div>
        </div>
        <div className="realesed-movie">
          <img src={twenty3}></img>
          <div className="genres">
            <div className="genre">
            <p>{recommend[2].name}</p>
              
            </div>
            <div className="genre">
              <button>CAM</button>
              <button className="time">
                <img src={one}></img>3:12:00
              </button>
            </div>
          </div>
        </div>
        <div className="realesed-movie">
          <img src={twenty4}></img>
          <div className="genres">
            <div className="genre">
            <p>{recommend[3].name}</p>
              
            </div>
            <div className="genre">
              <button>HD</button>
              <button className="time">
                <img src={one}></img>3:12:00
              </button>
            </div>
          </div>
        </div>
        <div className="realesed-movie">
          <img src={twenty5}></img>
          <div className="genres">
            <div className="genre">
            <p>{recommend[4].name}</p>
              
            </div>
            <div className="genre">
              <button>CAM</button>
              <button className="time">
                <img src={one}></img>3:12:00
              </button>
            </div>
          </div>
        </div>
        <div className="realesed-movie">
          <img src={twenty6}></img>
          <div className="genres">
            <div className="genre">
            <p>{recommend[5].name}</p>
              
            </div>
            <div className="genre">
              <button>HD</button>
              <button className="time">
                <img src={one}></img>3:12:00
              </button>
            </div>
          </div>
        </div>
        <div className="realesed-movie">
          <img src={twenty7}></img>
          <div className="genres">
            <div className="genre">
            <p>{recommend[6].name}</p>
              
            </div>
            <div className="genre">
              <button>HD</button>
              <button className="time">
                <img src={one}></img>3:12:00
              </button>
            </div>
          </div>
        </div>
        <div className="realesed-movie">
          <img src={twenty8}></img>
          <div className="genres">
            <div className="genre">
            <p>{recommend[7].name}</p>
              
            </div>
            <div className="genre">
              <button>HD</button>
              <button className="time">
                <img src={one}></img>3:12:00
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Recommended;
