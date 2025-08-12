// src/App.js
import React from 'react';
import CohortDetails from './Components/CohortDetails';

function App() {
  const cohorts = [
    { name: 'React Training', status: 'ongoing', startDate: '2025-07-01', endDate: '2025-07-30' },
    { name: 'Java Bootcamp', status: 'completed', startDate: '2025-06-01', endDate: '2025-06-28' },
  ];

  return (
    <div>
      <h1>My Academy Cohorts</h1>
      {cohorts.map((cohort, index) => (
        <CohortDetails key={index} cohort={cohort} />
      ))}
    </div>
  );
}

export default App;
