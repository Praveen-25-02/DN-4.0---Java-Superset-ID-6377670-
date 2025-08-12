
import React from 'react';

function SyntheticEvent() {
  const handleClick = (e) => {
    e.preventDefault(); // using synthetic event
    alert("I was clicked");
  };

  return (
    <button onClick={handleClick}>OnPress</button>
  );
}

export default SyntheticEvent;
