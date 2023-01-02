import React, { useState, useRef, useEffect } from 'react';
import './home.css';
import { GiHamburgerMenu } from 'react-icons/gi';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

export const Navbar = () => {
  const [showMediaIcons, setShowMediaIcons] = useState(false);

  const navigate = useNavigate();

  const LogOut = () => {
    localStorage.removeItem('user');
    navigate('/login');
  };

  return (
    <>
      <nav className='main-nav'>
        {/* 1st logo part  */}
        <div className='nav-name'>
          <h2>
            <span>B</span>reast
            <span> C</span>ancer
            <span> D</span>edication
          </h2>
        </div>

        {/* 2nd menu part  */}
        <div
          className={
            showMediaIcons ? 'menu-link mobile-menu-link' : 'menu-link'
          }
        >
          <ul>
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='/profile'>Profile</Link>
            </li>
            <li>
              <Link to='/contact'>Contact</Link>
            </li>
            <li>
              <button className='logout' onClick={LogOut}>
                Logout
              </button>
            </li>
          </ul>
        </div>

        {/* 3rd social media links */}
        <div className='side-bar'>
          {/* hamburget menu start  */}
          <div className='hamburger-menu'>
            <a href='#' onClick={() => setShowMediaIcons(!showMediaIcons)}>
              <GiHamburgerMenu
                style={{
                  color: 'pink',
                }}
              />
            </a>
          </div>
        </div>
      </nav>
    </>
  );
};
