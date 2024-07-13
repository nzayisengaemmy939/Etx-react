import React from "react";
import nine from "../../assets/nine.png";
import ten from "../../assets/ten.png";
import eleven from "../../assets/eleven.png";
import twelve from "../../assets/twelve.png";
import twenty9 from "../../assets/twenty9.png";
import one from "../../assets/one.png";
import three from "../../assets/three.png";

import "./Trending.css";

const Trending = () => {
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
              <p>Medellin</p>
            </div>
            <div className="genre">
              <button>Action</button>
              <button>Comedy</button>
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
              <p>Fast X</p>
            </div>
            <div className="genre">
              <button>Action</button>
              <button>Crime</button>
              <button>Thriller</button>
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
              <p>The Black Dem...</p>
            </div>
            <div className="genre">
              <button>Horror</button>
              <button>Thriller</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Trending;
