import React from 'react';
import Hero from './components/Hero/Hero'
import Header from './components/Header/Header'
import Panel from './components/Panel/Panel'
import './App.css';
import Portifolio from './components/Portifolio/Portifolio';
import Team from './components/Team/Team';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Panel />
      <Portifolio/>
      <Team/>
      <Footer/>
    </div>
  );
}

export default App;
