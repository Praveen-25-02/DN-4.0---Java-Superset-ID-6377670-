import React from 'react';
import { CalculateScore } from './Components/Calculatescore';

function App() {
  return (
    <div className="App">
      <CalculateScore
        Name="Jegan Bala"
        School="Cognizant Academy"
        total={450}
        goal={500}
      />
    </div>
  );
}

export default App;
