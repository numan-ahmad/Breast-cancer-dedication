import React, { useEffect, useState } from "react";
import './App.css';
import { Login } from "./components/Login";
import { Register } from "./components/Register";
import { Home } from "./components/Home"
import { Error } from "./components/Error"
import { Routes, Route } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';


function App() {
  const navigate = useNavigate();

  useEffect(() => {
    const user = JSON.parse(
      localStorage.getItem("user") || "{}"
    );
    if(user.token == null) {
      navigate("/login");
    } else {
      navigate("/");
    }
  },[])

  return (
    <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
    </div>
  );
}

export default App;