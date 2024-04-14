import './App.css'
import React from 'react';
import AddAd from './AddAd';
import AdsList from './AdsList';

function App() {
  return (
    <div className="App">
      <h1>Interactive ad board &hearts;</h1>
      <AddAd />
      <AdsList />
    </div>
  );
}

export default App;
