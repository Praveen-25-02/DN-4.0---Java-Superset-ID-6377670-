import React from 'react';

const IndianPlayers = () => {
  const allPlayers = [
    'Virat Kohli', 'Rohit Sharma', 'KL Rahul', 'Shubman Gill',
    'Rishabh Pant', 'Hardik Pandya', 'Jasprit Bumrah',
    'Mohammed Shami', 'Ravindra Jadeja', 'Kuldeep Yadav', 'Suryakumar Yadav'
  ];

  // 🔹 Destructuring Odd and Even Team Players
  const oddPlayers = allPlayers.filter((_, index) => index % 2 !== 0);
  const evenPlayers = allPlayers.filter((_, index) => index % 2 === 0);

  // 🔹 Merge Arrays using Spread Operator
  const T20players = ['Virat Kohli', 'Rohit Sharma', 'Surya Kumar Yadav'];
  const RanjiTrophyPlayers = ['Cheteshwar Pujara', 'Mayank Agarwal'];
  const mergedPlayers = [...T20players, ...RanjiTrophyPlayers];

  return (
    <div>
      <h2>Odd Team Players</h2>
      <ul>
        {oddPlayers.map((player, index) => (
          <li key={index}>{player}</li>
        ))}
      </ul>

      <h2>Even Team Players</h2>
      <ul>
        {evenPlayers.map((player, index) => (
          <li key={index}>{player}</li>
        ))}
      </ul>

      <h2>Merged Players (T20 + Ranji Trophy)</h2>
      <ul>
        {mergedPlayers.map((player, index) => (
          <li key={index}>{player}</li>
        ))}
      </ul>
    </div>
  );
};

export default IndianPlayers;
