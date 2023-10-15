import React, { useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { UserContext } from './UserContext';
import axios from 'axios';

const LoginPage = () => {
  const navigate = useNavigate();
  const { setUser } = useContext(UserContext);
  const [loginData, setLoginData] = useState({
    username: '',
    password: '',
  });

  const handleLoginSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:8000/login', loginData);
      const { message } = response.data;

      if (message === 'Login successful') {
        // Set the user data in the context and navigate to the home page
        setUser({ username: loginData.username });
        navigate('/home');
      } else {
        alert('Login Failed');
      }
    } catch (error) {
      console.error('Login error', error);
    }

    setLoginData({
      username: '',
      password: '',
    });
  };

  const handleLoginChange = (e) => {
    const { name, value } = e.target;
    setLoginData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Inline CSS styles
  const containerStyle = {
    textAlign: 'center',
    padding: '20px',
  };

  const headingStyle = {
    fontSize: '24px',
    marginBottom: '20px',
  };

  const formStyle = {
    width: '300px',
    margin: '0 auto',
  };

  const inputStyle = {
    width: '100%',
    padding: '10px',
    margin: '10px 0',
    borderRadius: '5px',
  };

  const buttonStyle = {
    width: '100%',
    padding: '10px',
    backgroundColor: '#007bff',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  };

  const linkStyle = {
    marginTop: '10px',
  };

  return (
    <div style={containerStyle}>
      <h1 style={headingStyle}>Login Page</h1>
      <form onSubmit={handleLoginSubmit} style={formStyle}>
        <input
          type="text"
          name="username"
          placeholder="Username"
          value={loginData.username}
          onChange={handleLoginChange}
          required
          style={inputStyle}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={loginData.password}
          onChange={handleLoginChange}
          required
          style={inputStyle}
        />
        <button type="submit" style={buttonStyle}>
          Login
        </button>
        <p style={linkStyle}>
          Not registered yet? <Link to="/registration">Register Here</Link>
        </p>
      </form>
    </div>
  );
};

export default LoginPage;
