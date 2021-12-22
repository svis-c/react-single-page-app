import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../images/logo.jpg';

const Header = () => {
  return (
    <div>
      <nav>
        <img className='logoImg' src={logo} alt='logo' />
        <ul>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/about'>About</Link>
          </li>
          <li>
            <Link to='/news'>News</Link>
          </li>
          <li>
            <Link to='/services'>Services</Link>
          </li>
          <li>
            <Link to='/gallery'>Gallery</Link>
          </li>
          <li>
            <Link to='/contact'>Contact us</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
