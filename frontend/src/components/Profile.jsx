import React, { useState } from 'react';
import { Navbar } from './Navbar';
import { useNavigate } from 'react-router-dom';

export const Profile = () => {
  const [currentUser] = useState(
    JSON.parse(localStorage.getItem('user') || {})
  );

  const navigate = useNavigate();

  const LogOut = () => {
    localStorage.removeItem('user');
    navigate('/login');
  };

  return (
    <>
      <Navbar />
      <div className='hero-section'>
        <div className='auth-form-container profile-container'>
          <h2>Current User Detail</h2>
          <table>
            <tr>
              <td>Full Name:</td>
              <td>{currentUser.userName}</td>
            </tr>
            <tr>
              <td>Email:</td>
              <td>{currentUser.email}</td>
            </tr>
          </table>
          <button className='logout' onClick={LogOut}>
            Logout
          </button>
        </div>
      </div>
    </>
  );
};
