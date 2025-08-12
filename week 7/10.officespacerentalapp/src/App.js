import React from 'react';
import './App.css';
import Office from './Office';

function App() {
  const offices = [
    {
      name: 'SpaceHub A',
      rent: 55000,
      address: 'No.1 Anna Nagar, Chennai',
      image: 'https://images.unsplash.com/photo-1593642634367-d91a135587b5?auto=format&fit=crop&w=800&q=80',
    },
    {
      name: 'EliteSpace B',
      rent: 75000,
      address: '5th Avenue, Bangalore',
      image: 'https://images.unsplash.com/photo-1562183241-b937e95585b1?auto=format&fit=crop&w=800&q=80',
    },
    {
      name: 'SmartDesk C',
      rent: 62000,
      address: 'Park Street, Hyderabad',
      image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=800&q=80',
    },
  ];

  return (
    <div className="App">
      <h1>Office Space Rental</h1>
      {offices.map((office, index) => (
        <Office key={index} office={office} />
      ))}
    </div>
  );
}

export default App;
