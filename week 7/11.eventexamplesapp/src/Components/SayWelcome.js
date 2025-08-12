
import React from 'react';

function SayWelcome() {
  const greet = (message) => {
    alert(`Message: ${message}`);
  };

  return (
    <button onClick={() => greet("Welcome")}>Say Welcome</button>
  );
}

export default SayWelcome;
