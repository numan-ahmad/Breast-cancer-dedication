import React, { useState, useRef, useEffect } from 'react';
import './home.css';
import { GiHamburgerMenu } from 'react-icons/gi';
import { useNavigate } from 'react-router-dom';

export const Home = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [showMediaIcons, setShowMediaIcons] = useState(false);
  const hiddenFileInput = useRef(null);

  const navigate = useNavigate();

  const LogOut = () => {
    localStorage.removeItem('user');
    navigate('/login');
  };

  const handleClick = (event) => {
    hiddenFileInput.current.click();
  };
  const handleChange = (event) => {
    const fileUploaded = event.target.files[0];
    setSelectedImage(event.target.files[0]);
    console.log(fileUploaded);
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
            <li>about</li>
            <li>
              {' '}
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
              <GiHamburgerMenu />
            </a>
          </div>
        </div>
      </nav>

      {/* hero section  */}
      <section className='hero-section'>
        <p>Welcome to </p>
        <h1>My Home Page</h1>
        <p>Upload Image</p>
        {selectedImage && (
          <div>
            <img
              alt='not fount'
              width={'250px'}
              src={URL.createObjectURL(selectedImage)}
            />
            <br />
            <button onClick={() => setSelectedImage(null)}>Remove</button>
          </div>
        )}
        <br />
        <br />
        <button onClick={handleClick}>Upload a file</button>
        <input
          type='file'
          accept='image/*'
          ref={hiddenFileInput}
          onChange={handleChange}
          style={{ display: 'none' }}
        />
      </section>
    </>
  );
};
