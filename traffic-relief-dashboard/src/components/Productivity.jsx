import React, { useState } from 'react';
import './Productivity.css'

const Productivity = () => {
  const [selectedTool, setSelectedTool] = useState('');

  const handleToolSelection = (tool) => {
    setSelectedTool(tool);
  };

  return (
    <div className="productivity-section">
      <h2>Integrated Productivity Hub</h2>

      <div className="tool-selection">
        <h3>Select a Productivity Tool</h3>
        <div className="tools">
          <button onClick={() => handleToolSelection('meeting')} className="tool-button">
            Virtual Meeting
          </button>
          <button onClick={() => handleToolSelection('document')} className="tool-button">
            Read Document
          </button>
          <button onClick={() => handleToolSelection('entertainment')} className="tool-button">
            Entertainment
          </button>
        </div>
      </div>

      <div className="tool-content">
        {selectedTool === 'meeting' && (
          <div>
            <h4>Join a Virtual Meeting</h4>
            <p>Click the link below to join your scheduled meeting:</p>
            <a href="https://www.zoom.com" target="_blank" rel="noopener noreferrer">Join Meeting</a>
          </div>
        )}

        {selectedTool === 'document' && (
          <div>
            <h4>Read Document</h4>
            <p>Access your documents below:</p>
            <ul>
              <li><a href="https://www.example.com/doc1.pdf" target="_blank" rel="noopener noreferrer">Document 1</a></li>
              <li><a href="https://www.example.com/doc2.pdf" target="_blank" rel="noopener noreferrer">Document 2</a></li>
            </ul>
          </div>
        )}

        {selectedTool === 'entertainment' && (
          <div>
            <h4>Listen to Music/Podcast</h4>
            <p>Enjoy some entertainment while you wait:</p>
            <ul>
              <li><a href="https://www.spotify.com" target="_blank" rel="noopener noreferrer">Listen to Music on Spotify</a></li>
              <li><a href="https://www.podcast.com" target="_blank" rel="noopener noreferrer">Listen to Podcasts</a></li>
            </ul>
          </div>
        )}

        {selectedTool === '' && (
          <p>Select a tool to get started with your productivity tasks.</p>
        )}
      </div>
    </div>
  );
};

export default Productivity;
