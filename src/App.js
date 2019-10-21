import React from 'react';
import logo from './logo.svg';
import './App.css';
import Contact from './components/Contact';

function App() {
  return (
    <div className="App">
      <Contact name='Anita Sutton' avatar="https://randomuser.me/api/portraits/women/57.jpg" online />
      <Contact name=' Jim George' avatar="https://randomuser.me/api/portraits/men/11.jpg" />
      <Contact name='Charlotte Ryan' avatar="https://randomuser.me/api/portraits/women/68.jpg" online />
    </div>
  );
}

export default App;
