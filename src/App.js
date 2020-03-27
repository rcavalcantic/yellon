import React from 'react';
import Hero from './components/Hero/Hero'
import Header from './components/Header/Header'
import Panel from './components/Panel/Panel'
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Panel />
    </div>
  );
}

export default App;
