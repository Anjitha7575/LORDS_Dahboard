import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Header from './features/Header/component';
import Dashboard from './features/Dashboard/container';

function App() {
  return (
    <div className="App">
      <Header />
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Dashboard />
      </BrowserRouter>

    </div>
  );
}

export default App;
