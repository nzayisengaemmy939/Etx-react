import React from "react";
import nine from "../../assets/nine.png";
import ten from "../../assets/ten.png";
import eleven from "../../assets/eleven.png";
import twelve from "../../assets/twelve.png";
import twenty9 from "../../assets/twenty9.png";
import one from "../../assets/one.png";
import three from "../../assets/three.png";

import "./Trending.css";

const Trending = ({film}) => {
  
  return (
    <div className="trending">
      <div className="trending-head">
        <h1>Trending</h1>
        <h1>
          View All{" "}
          <span className="twelve">
            <img src={twelve}></img>
          </span>
        </h1>
      </div>

      <div className="trending-movies">
        <div className="trending-movie">
          <img src={nine}></img>
          <div className="movies-time">
            <p className="time">
              <img src={one}></img>3:12:00
            </p>
            <p className="time">
              <img src={three}></img>8.5
            </p>
          </div>
          <img className="play-pause" src={twenty9}></img>

          <div className="genres">
            <div className="genre">
              <p>{film[0].name}</p>
            </div>
            <div className="genre">
              <button>{film[0].action}</button>
              <button>{film[0].style}</button>
            </div>
          </div>
        </div>
        <div className="trending-movie">
          <img src={ten}></img>
          <div className="movies-time">
            <p className="time">
              <img src={one}></img>3:12:00
            </p>
            <p className="time">
              <img src={three}></img>8.5
            </p>
          </div>
          <img className="play-pause" src={twenty9}></img>
          <div className="genres">
            <div className="genre">
              <p>{film[1].name}</p>
            </div>
            <div className="genre">
              <button>{film[1].action}</button>
              <button>{film[1].type}</button>
              <button>{film[1].style}</button>
            </div>
          </div>
        </div>
        <div className="trending-movie">
          <img src={eleven}></img>
          <div className="movies-time">
            <p className="time">
              <img src={one}></img>3:12:00
            </p>
            <p className="time">
              <img src={three}></img>8.5
            </p>
          </div>
          <img className="play-pause" src={twenty9}></img>

          <div className="genres">
            <div className="genre">
              <p>{film[2].name}.</p>
            </div>
            <div className="genre">
              <button>{film[2].action}</button>
              <button>{film[2].style}</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Trending;
