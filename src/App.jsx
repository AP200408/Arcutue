import React from 'react';
import Carousel from './components/Carousel.jsx';
import Grid from './components/Grid.jsx';
import ScrollAnimations from './components/ScrollAnimations.jsx';
import HeartsParticles from './components/HeartsParticles.jsx';
import CuteFloatingHearts from './components/CuteFloatingHearts.jsx';
import LoveQuotes from './components/LoveQuotes.jsx';
import CupidArrow from './components/CupidArrow.jsx';
import SendLoveButton from './components/SendLoveButton.jsx';
import BackgroundLights from './components/BackgroundLights.jsx';
import './App.css';

function App() {
  return (
    <div className="App">
      <BackgroundLights />
      <HeartsParticles />
      <CuteFloatingHearts />
      <ScrollAnimations name="spinning-heart-transparent.gif"/>
      
      
      <header className="App-header">
        <h1>ARCHI</h1>
        <p>For my amazing girlfriend ❤️</p>
      </header>
      
      <section className="carousel-section">
        <h2>Memories Carousel</h2>
        <Carousel />
      </section>
      
      <section className="grid-section">
        <h2>Our Moments</h2>
        <Grid />
      </section>
 
      <ScrollAnimations name="spinning-heart-transparent.gif"/>
      <ScrollAnimations name="spinning-heart-transparent.gif"/>
      <ScrollAnimations name="spinning-heart-transparent.gif"/>


      <LoveQuotes />

      <footer className="App-footer">
        <p>Made with all my love and magic for you Archi ❤️</p>
      </footer>
      
      <SendLoveButton />
    </div>
  );
}

export default App;
