// src/Login.js
import React, { useState } from 'react';
import axios from "axios"
const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async(e) => {
    e.preventDefault();
    // const res=await fetch("https://tokma.onrender.com/api/admin/login",{
    // method:"POST"  ,
    // headers: {
    //     'Accept': 'application/json',
    //     'Content-Type': 'application/json'
    //   },
  
    // body: JSON.stringify({        email:"prayash@gmail.com",
    // password:"password"})  },
    // )
    const res=await axios.post("https://tokma.onrender.com/api/admin/login",{
             email:"prayash@gmail.com",
    password:"password"
    })
    console.log(res.data);
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      {error && <p className="error">{error}</p>}
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            // required
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            // required
          />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;

