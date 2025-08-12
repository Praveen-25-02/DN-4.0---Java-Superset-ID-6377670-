import React from 'react';

const ListofPlayers = () => {
  const players = [
    { name: 'Virat Kohli', score: 95 },
    { name: 'Rohit Sharma', score: 68 },
    { name: 'KL Rahul', score: 74 },
    { name: 'Shubman Gill', score: 55 },
    { name: 'Rishabh Pant', score: 82 },
    { name: 'Hardik Pandya', score: 60 },
    { name: 'Jasprit Bumrah', score: 45 },
    { name: 'Mohammed Shami', score: 78 },
    { name: 'Ravindra Jadeja', score: 88 },
    { name: 'Kuldeep Yadav', score: 39 },
    { name: 'Suryakumar Yadav', score: 91 }
  ];

  const lowScorers = players.filter(player => player.score < 70);

  return (
    <div>
      <h2>All Players</h2>
      <ul>
        {players.map((player, index) => (
          <li key={index}>{player.name} - {player.score} runs</li>
        ))}
      </ul>

      <h3>Players with score below 70</h3>
      <ul>
        {lowScorers.map((player, index) => (
          <li key={index}>{player.name} - {player.score} runs</li>
        ))}
      </ul>
    </div>
  );
};

export default ListofPlayers;
