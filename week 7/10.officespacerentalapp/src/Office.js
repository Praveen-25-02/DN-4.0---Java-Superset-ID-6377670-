// Office.js
const Office = ({ office }) => {
  const rentStyle = {
    color: office.rent < 60000 ? 'red' : 'green',
  };

  return (
    <div className="office-card">
      <h2>{office.name}</h2>
      <img src={office.image} alt={office.name} width="300" />
      <p style={rentStyle}>Rent: ₹{office.rent}</p>
      <p>Address: {office.address}</p>
    </div>
  );
};

export default Office;
