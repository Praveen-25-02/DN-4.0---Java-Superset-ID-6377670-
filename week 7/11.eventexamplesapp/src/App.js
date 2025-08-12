
import React from 'react';
import './App.css';
import Counter from './Components/Counter';
import SayWelcome from './Components/SayWelcome';
import SyntheticEvent from './Components/SyntheticEvent';
import CurrencyConverter from './Components/CurrencyConverter';

function App() {
  return (
    <div className="App">
      <h1>React Event Examples App</h1>
      <Counter />
      <SayWelcome />
      <SyntheticEvent />
      <CurrencyConverter />
    </div>
  );
}

export default App;
