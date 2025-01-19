import React from 'react';
import { BrowserRouter as Router, Route, Routes, NavLink } from 'react-router-dom';
import './App.css';

import Delivery from './components/Delivery';
import Transport from './components/Transport';
import SmartAssistance from './components/SmartAssistance';
import Productivity from './components/Productivity';
import Emergency from './components/EmergencyAssistance';

function App() {
  return (
    <Router>
      <div className="App">
        <header>
          <h1>Traffic Relief Dashboard</h1>
          <nav>
            <ul>
              <li><NavLink to="/delivery" activeClassName="active">Delivery Services</NavLink></li>
              <li><NavLink to="/transport" activeClassName="active">On-Demand Transport</NavLink></li>
              <li><NavLink to="/smart-assistance" activeClassName="active">Smart Assistance</NavLink></li>
              <li><NavLink to="/productivity" activeClassName="active">Productivity Hub</NavLink></li>
              <li><NavLink to="/emergency" activeClassName="active">Emergency Support</NavLink></li>
            </ul>
          </nav>
        </header>

        <main>
          <Routes>
            <Route path="/delivery" element={<Delivery />} />
            <Route path="/transport" element={<Transport />} />
            <Route path="/smart-assistance" element={<SmartAssistance />} />
            <Route path="/" element={<Delivery />} />
            <Route path="/productivity" element={<Productivity />} />
            <Route path="/emergency" element={<Emergency />} />
            {/* Default route */}
            <Route path="/" element={<Delivery />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
