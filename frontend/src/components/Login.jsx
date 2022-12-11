import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../logo.png';
import axios from 'axios';

export const Login = () => {
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const authentication = {
      email: email,
      password: pass,
    };
    try {
      const response = await axios.post(
        'http://localhost:8000/user/login',
        authentication
      );
      const user = {
        userName: response.data.userName,
        email: response.data.email,
        token: response.data.token,
      };
      localStorage.setItem('user', JSON.stringify(user));
      if (response) {
        return (window.location.href = '/home');
      }
    } catch (err) {
      alert(err);
    }
  };

  return (
    <div className='autn-conatiner'>
      <div className='auth-form-container'>
        <div>
          <h2>Breast Cancer Dedication</h2>
          <img className='ribben-logo' src={Logo} alt='logo' />
        </div>
        <h2>Login</h2>
        <form className='login-form' onSubmit={handleSubmit}>
          <label htmlFor='Email'>Email</label>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type='email'
            placeholder='youremail@gmail.com'
            id='email'
            name='email'
            required
          />
          <label htmlFor='Password'>Password</label>
          <input
            value={pass}
            onChange={(e) => setPass(e.target.value)}
            type='password'
            placeholder='********'
            id='password'
            name='password'
            required
          />
          <button type='submit'>Log In</button>
        </form>
        <Link to='/register'>
          <button className='link-btn'>
            Don't have an account? Register here.
          </button>
        </Link>
      </div>
    </div>
  );
};
