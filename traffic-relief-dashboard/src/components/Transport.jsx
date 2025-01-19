import React from 'react';

const Transport = () => {
  const bookTransport = () => {
    alert('Transport option booked!');
  };

  return (
    <div>
      <h2>On-Demand Transport Assistance</h2>
      <button onClick={bookTransport}>Book Transport</button>
    </div>
  );
};

export default Transport;
