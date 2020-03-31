import React from 'react';
import './App.css';
import './style.css';
import './login.js';
import './dashboard.js'
import Dashboard from './dashboard.js';
import Login from './login.js';
import {BrowserRouter as Router ,Switch,Route} from 'react-router-dom';
import{link} from 'react-router-dom';




function App() {
  return (
    <div className="App">
      <Router>
      <Login />
      <Dashboard />
      </Router>
    </div>
  );
}

export default App;
