import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Logo from '../logo.png';

export const Register = () => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [name, setName] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        e.preventDefault();

      const authentication = {
        userName: name,
        email: email,
        password: pass,
      };
      try {
        const response = await axios.post(
          "http://localhost:8000/user/signup",
          authentication
        );
        if(response) {
            return window.location.href = '/login'
        }
        } catch (err) {
          alert(err);
        }
    }

    return (
        <div className="autn-conatiner">
            <div className="auth-form-container">
              <div>
                <h2>Breast Cancer Dedication</h2>
                <img className="ribben-logo" src={Logo} alt="logo"/> 
              </div>
                <h2>Register</h2>
                <form className="register-form" onSubmit={handleSubmit}>
                    <label htmlFor="name">Full name</label>
                    <input value={name} name="name" id="name" onChange={(e) => setName(e.target.value)} placeholder="full Name" required/>
                    <label htmlFor="email">Email</label>
                    <input value={email} onChange={(e) => setEmail(e.target.value)}type="email" placeholder="youremail@gmail.com" id="email" name="email" required/>
                    <label htmlFor="password">Password</label>
                    <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="********" id="password" name="password" required/>
                    <button type="submit" className="register-btn">Regitser</button>
                </form>
                <Link to="/login">
                    <button className="link-btn">Already have an account? Login here.</button>
                </Link>
            </div>
        </div>
    )
}