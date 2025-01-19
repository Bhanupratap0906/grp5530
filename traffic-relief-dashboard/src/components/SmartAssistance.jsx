import React, { useState, useEffect } from 'react';
import './SmartAssistance.css'

const SmartAssistance = () => {
  const [trafficReliefTime, setTrafficReliefTime] = useState('');
  const [optimizedRoute, setOptimizedRoute] = useState('');
  const [error, setError] = useState('');

  // Simulate fetching traffic data (in real-world scenarios, this could be from an API)
  useEffect(() => {
    try {
      // Simulating the AI logic for predicting traffic relief time
      const trafficTime = '30 minutes';  // This would be dynamically calculated in a real app
      setTrafficReliefTime(trafficTime);

      // Simulating the AI route optimization feature
      const route = 'Take the side road to avoid the main highway';
      setOptimizedRoute(route);
    } catch (err) {
      setError('Unable to fetch data. Please try again later.');
    }
  }, []);

  return (
    <div className="smart-assistance-section">
      <h2>AI-Powered Smart Assistance</h2>

      {error && <p className="error-message">{error}</p>}

      <div className="traffic-relief-time">
        <h3>Predicted Traffic Relief Time</h3>
        <p>{trafficReliefTime ? `The congestion will clear in approximately ${trafficReliefTime}.` : 'Loading... Please wait.'}</p>
      </div>

      <div className="route-optimization">
        <h3>Route Optimization Suggestions</h3>
        <p>{optimizedRoute ? `Suggested Route: ${optimizedRoute}` : 'Loading optimized route... Please wait.'}</p>
      </div>
    </div>
  );
};

export default SmartAssistance;
