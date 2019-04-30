import React from 'react';

import './App.css';
// Import pages and components
import Navbar from '/components/Navbar/Nav';

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <div className="container">
        <CardRow />
      </div>
    </div>);
}


export default App;
