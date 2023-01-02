import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../logo.png';
import axios from 'axios';
import { Navbar } from './Navbar';

export const Contact = () => {
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
  };

  return (
    <>
      <Navbar />
      <div className='hero-section'>
        <div className='auth-form-container'>
          <h2>Conatct Our Team</h2>
          <form className='conatctus-form' onSubmit={handleSubmit}>
            <label htmlFor='Email'>Email</label>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type='email'
              placeholder='Enter email address'
              required
            />
            <label htmlFor='Password'>Notes</label>
            <textarea
              className='text-area'
              value={pass}
              onChange={(e) => setPass(e.target.value)}
              placeholder='Please wirte your query here ....'
              required
            />
            <button type='submit'>Submit</button>
          </form>
        </div>
      </div>
    </>
  );
};
