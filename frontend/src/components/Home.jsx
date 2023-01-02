import React, { useState, useRef, useEffect } from 'react';
import './home.css';
import { GiHamburgerMenu } from 'react-icons/gi';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { Navbar } from './Navbar';

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
      <Navbar />
      {/* hero section  */}
      <div className='hero-section'>
        <div className='auth-form-container section-1'>
          <p>Upload Image</p>
          {selectedImage && (
            <div>
              <img
                alt='uploaded photot'
                width={'250px'}
                src={URL.createObjectURL(selectedImage)}
              />
              <br />
              <button onClick={() => setSelectedImage(null)}>Remove</button>
            </div>
          )}
          <br />
          <br />
          <div className='upload-buttons'>
            <button onClick={handleClick}>Upload a file</button>
            <button className='hsdjfsdj'>Predict Result</button>
          </div>
          <input
            type='file'
            accept='image/*'
            ref={hiddenFileInput}
            onChange={handleChange}
            style={{ display: 'none' }}
          />
        </div>
      </div>
    </>
  );
};
