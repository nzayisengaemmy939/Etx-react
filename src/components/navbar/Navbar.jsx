import React from 'react';
import './Navbar.css';
import vector from '../../assets/Vector.png';
import notify from '../../assets/not.png'

const Navbar = () => {
  return (
    <div className='navbar'>
      <nav>
        <ul>
          <div>
          <li>Home</li>
          <li>Genre</li>
          <li>Country</li>
          </div>
        
          <div  className='search'>
            <input type="search" placeholder="Search Movies...."/>
            <img src={vector} alt="search icon" className='search-icon'/>
          </div>
          <div>
          <li>Movies</li>
          <li>Series</li>
          <li>Animation</li>
          <li>Login/Signup</li>
          <li><img src={notify}  alt="notify-icon"/></li>
          </div>
         
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
