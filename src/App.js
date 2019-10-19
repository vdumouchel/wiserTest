import React from 'react';
import { Link } from 'react-router-dom'

import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <nav>
          <li><Link to="home">Home</Link></li>
          <li><Link to="profile">Profile</Link></li>
        </nav>
      </header>
    </div>
  );
}

export default App;
