import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoginPage from './LoginPage';
import Home from './Home';
import { UserProvider } from './UserContext';
import RegistrationPage from './RegistrationPage';

function App() {
  return (
    <UserProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/home" element={<Home />} />
          <Route path="/registration" element={<RegistrationPage />} />
        </Routes>
      </BrowserRouter>
    </UserProvider>
  );
}

export default App;
