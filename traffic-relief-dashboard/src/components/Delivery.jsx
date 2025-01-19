import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Delivery.css'

const DeliveryService = () => {
  const [orderType, setOrderType] = useState('');
  const [deliveryStatus, setDeliveryStatus] = useState('');
  const [location, setLocation] = useState('Your current location is being tracked...');
  const [orderConfirmed, setOrderConfirmed] = useState(false);

  const handleOrder = (type) => {
    setOrderType(type);
    setDeliveryStatus('Order is being prepared...');
    setOrderConfirmed(true);
  };

  const handleTrackDelivery = () => {
    setDeliveryStatus('Delivery is on the way!');
  };

  return (
    <div className="delivery-service-section">
      <h2>Real-Time Delivery Services</h2>

      <div className="order-section">
        <h3>Order Food and Essentials</h3>
        <div className="order-buttons">
          <button onClick={() => handleOrder('food')} className="order-button">
            Order Food
          </button>
          <button onClick={() => handleOrder('essentials')} className="order-button">
            Order Essentials
          </button>
        </div>
      </div>

      {orderConfirmed && (
        <div className="order-status">
          <p>Your order for {orderType} has been confirmed.</p>
          <p>{deliveryStatus}</p>
          <button onClick={handleTrackDelivery} className="track-button">
            Track Delivery
          </button>
        </div>
      )}

      <div className="location-status">
        <h3>Real-Time Location Tracking</h3>
        <p>{location}</p>
      </div>
    </div>
  );
};

export default DeliveryService;
