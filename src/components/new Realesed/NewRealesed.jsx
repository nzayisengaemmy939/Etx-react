import React from 'react'
// import Realesed from '../components/realeased/Realesed'
import './NewRealesed.css'
import seventeen from "../../assets/seventeen.png";
import eighteen from "../../assets/eighteen.png";
import nineteen from "../../assets/nineteen.png";
import twenty from "../../assets/twenty.png";
import twelve from "../../assets/twelve.png";

const NewRealesed = ({series}) => {
    return (
        <div className="realesed">
          <div className="realesed-head">
            <h1>New Realese-Series</h1>
            <h1>
              View All{" "}
              <span className="twelve">
                <img src={twelve}></img>
              </span>
            </h1>
          </div>
    
          <div className="realesed-movies">
            <div className="realesed-movie">
              <img src={seventeen}></img>
              <button className='epsode'>EP 6</button>

              <div className="genres">
                <div className="genre">
                  <p>{series[0].name}</p>
                </div>
                <div className="genre">
                  <button>HD</button>
                  <button className="time">Season1</button>
                </div>
              </div>
            </div>
            <div className="realesed-movie">
              <img src={eighteen}></img>
              <button className='epsode'>EP 6</button>

              <div className="genres">
                <div className="genre">
                <p>{series[1].name}</p>
                  
                </div>
                <div className="genre">
                  <button>HD</button>
                  <button className="time">Season1</button>
                </div>
              </div>
            </div>
            <div className="realesed-movie">
              <img src={nineteen}></img>
              <button className='epsode'>EP 6</button>

              <div className="genres">
                <div className="genre">
                <p>{series[2].name}</p>
                  
                </div>
                <div className="genre">
                  <button>HD</button>
                  <button className="time">Season1</button>
                </div>
              </div>
            </div>
            <div className="realesed-movie">
              <img src={twenty}></img>
              <button className='epsode'>EP 6</button>

              <div className="genres">
                <div className="genre">
                <p>{series[3].name}</p>
                  
                </div>
                <div className="genre">
                  <button>HD</button>
                  <button className="time">Season1</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
}

export default NewRealesed
