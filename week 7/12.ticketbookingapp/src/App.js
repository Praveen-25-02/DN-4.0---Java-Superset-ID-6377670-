// src/App.js
import React, { useState } from 'react';
import Guest from './Components/Guest';
import User from './Components/User';
import FlightDetails from './Components/FlightDetails';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => setIsLoggedIn(true);
  const handleLogout = () => setIsLoggedIn(false);

  return (
    <div className="App">
      <h1>Ticket Booking App</h1>

      <button onClick={isLoggedIn ? handleLogout : handleLogin}>
        {isLoggedIn ? 'Logout' : 'Login'}
      </button>

      <FlightDetails />

      {isLoggedIn ? <User /> : <Guest />}
    </div>
  );
}

export default App;
