import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      <main className="content">
        <h1>Welcome to the Traffic Relief Dashboard</h1>
        <p>Get real-time traffic relief, deliveries, and more.</p>
      </main>
      <Footer />
    </div>
  );
}

export default App;
