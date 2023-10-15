import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const RegistrationPage = () => {
  const [registrationData, setRegistrationData] = useState({
    username: '',
    password: '',
  });

  const handleRegistrationChange = (e) => {
    const { name, value } = e.target;

    setRegistrationData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleRegistrationSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8000/register', registrationData);
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
    setRegistrationData({
      username: '',
      password: '',
    });
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
      <h1 style={headingStyle}>Registration Form</h1>
      <form onSubmit={handleRegistrationSubmit} style={formStyle}>
        <input
          type="text"
          name="username"
          placeholder="Username"
          value={registrationData.username}
          onChange={handleRegistrationChange}
          required
          style={inputStyle}
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          value={registrationData.password}
          onChange={handleRegistrationChange}
          required
          style={inputStyle}
        />
        <button type="submit" style={buttonStyle}>
          Register
          
        </button>
        <p style={linkStyle}>
          Already registered? <Link to="/login">Login Here</Link>
        </p>
      </form>
    </div>
  );
};

export default RegistrationPage;
