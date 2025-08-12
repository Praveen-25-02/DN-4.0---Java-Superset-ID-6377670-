
import React, { useState } from 'react';

function CurrencyConverter() {
  const [rupees, setRupees] = useState('');
  const [euro, setEuro] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault(); // prevent default form submit
    const conversionRate = 0.011; // Example: 1 INR = 0.011 EUR
    const result = (parseFloat(rupees) * conversionRate).toFixed(2);
    setEuro(result);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Enter Amount in ₹:</label>
        <input
          type="number"
          value={rupees}
          onChange={(e) => setRupees(e.target.value)}
        />
        <button type="submit">Convert</button>
      </form>
      {euro && <p>Euro: €{euro}</p>}
    </div>
  );
}

export default CurrencyConverter;
