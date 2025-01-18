import React, { useEffect, useState } from "react";
import "./EmergencyAssistance.css";

const EmergencyAssistance = () => {
  const [medicalSupplies, setMedicalSupplies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch medical supplies from Firebase REST API
    const fetchMedicalSupplies = async () => {
      try {
        const firebaseUrl = "https://your-firebase-database.firebaseio.com/medicalSupplies.json"; // Replace with your Firebase database URL
        const response = await fetch(firebaseUrl);
        const data = await response.json();

        if (data) {
          // Convert object to array
          const suppliesArray = Object.keys(data).map((key) => ({
            id: key,
            ...data[key],
          }));
          setMedicalSupplies(suppliesArray);
        } else {
          console.log("No data available");
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchMedicalSupplies();
  }, []);

  const handleMedicalHelp = () => {
    alert("Medical Help is on its way!");
  };

  const handleVehicleBreakdown = () => {
    alert("Vehicle Breakdown Support is on its way!");
  };

  return (
    <div className="emergency-container">
      <h1>Emergency Assistance</h1>
      <p>Select an emergency option below:</p>

      {/* Floating Buttons */}
      <button className="fab medical" onClick={handleMedicalHelp}>
        🚑 Medical Help
      </button>
      <button className="fab breakdown" onClick={handleVehicleBreakdown}>
        🚗 Vehicle Breakdown
      </button>

      {/* Medical Supplies Section */}
      <div className="medical-supplies">
        <h2>Medical Supplies</h2>
        {loading ? (
          <p>Loading...</p>
        ) : medicalSupplies.length > 0 ? (
          <div className="supplies-list">
            {medicalSupplies.map((supply) => (
              <div className="supply-card" key={supply.id}>
                <h3>{supply.name}</h3>
                <p>{supply.description}</p>
                <button className="request-button">Request</button>
              </div>
            ))}
          </div>
        ) : (
          <p>No supplies available.</p>
        )}
      </div>
    </div>
  );
};

export default EmergencyAssistance;
