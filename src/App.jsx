import React, { useState } from 'react';
import Carousel from './components/Carousel.jsx';
import Grid from './components/Grid.jsx';
import ScrollAnimations from './components/ScrollAnimations.jsx';
import HeartsParticles from './components/HeartsParticles.jsx';
import CuteFloatingHearts from './components/CuteFloatingHearts.jsx';
import LoveQuotes from './components/LoveQuotes.jsx';
import SendLoveButton from './components/SendLoveButton.jsx';
import BackgroundLights from './components/BackgroundLights.jsx';
import './App.css';

function App() {
  const [showHearts, setShowHearts] = useState(false);

  return (
    <div className="App">
      <BackgroundLights />
      <HeartsParticles />

      <div className="vertical-toggle-switch">
        <label className="switch">
          <input
            type="checkbox"
            checked={showHearts}
            onChange={() => setShowHearts(!showHearts)}
          />
          <span className="slider"></span>
        </label>
        <span className="switch-label">{showHearts ? 'On' : 'Off'}</span>
      </div>

      {showHearts && <CuteFloatingHearts />}

      <section className="bodyGif">
        <a href="https://www.youtube.com/watch?v=J2TKTLOwjeg" target="_blank" rel="noopener noreferrer">
          <ScrollAnimations name="flash_hearts.gif" />
        </a>
      </section>

      <header className="App-header">
        <h1>
          <a
            href="https://www.youtube.com/watch?v=-d6Ln30tXN4"
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: 'none', color: 'inherit' }}
          >
            ARCHU
          </a>
        </h1>
        <p>
          For my amazing girlfriend{' '}
          <a
            href="https://www.youtube.com/watch?v=7Oa62sU4ONA"
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: 'none', color: 'inherit' }}
          >
            ❤️
          </a>
        </p>
      </header>

      <section className="carousel-section">
        <p
          style={{
            fontSize: '1.7em',
            paddingBottom: '50px',
            color: '#3a3052',
            textDecoration: 'underline overline',
            textUnderlineOffset: '20px',
          }}
        >
          Spiral of Sweet Memories 💫
        </p>
        <Carousel />
      </section>

      <section className="grid-section">
        <p
          className="stylish-underline"
          style={{
            fontSize: '1.7em',
            paddingBottom: '50px',
            color: '#3a3052',
            textDecoration: 'underline overline',
            textUnderlineOffset: '20px',
          }}
        >
          Serenade of Us 🎵❤️
        </p>
        <Grid />
      </section>

      <section className="cornerGif">
        <a href="https://www.youtube.com/watch?v=3xgEqZuyhjU" target="_blank" rel="noopener noreferrer">
          <ScrollAnimations name="spinning-heart-transparent.gif" />
        </a>
      </section>

      <section className="bodyGif">
        <a href="https://www.youtube.com/watch?v=aQh8Bi3aEm8" target="_blank" rel="noopener noreferrer">
          <ScrollAnimations name="spinning-heart-transparent.gif" />
        </a>
      </section>
      <section className="bodyGif">
        <a href="https://www.youtube.com/watch?v=DhMnhIY1pE0" target="_blank" rel="noopener noreferrer">
          <ScrollAnimations name="spinning-heart-transparent.gif" />
        </a>
      </section>
      <section className="bodyGif">
        <a href="https://www.youtube.com/watch?v=dJg4_rL9h7Q" target="_blank" rel="noopener noreferrer">
          <ScrollAnimations name="spinning-heart-transparent.gif" />
        </a>
      </section>

      <LoveQuotes />

      <section className="bodyGif">
        <a href="https://www.youtube.com/watch?v=fJsJU7E7X-M" target="_blank" rel="noopener noreferrer">
          <ScrollAnimations name="heartline.jpg" />
        </a>
      </section>

      <footer className="App-footer">
        <p>
          Made with all my{' '}
          <a
            href="https://www.youtube.com/watch?v=2Vv-BfVoq4g"
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: 'none', color: 'inherit' }}
          >
            love
          </a>{' '}
          and magic for you{' '}
          <a
            href="https://www.youtube.com/watch?v=zgaCZOQCpp8&pp=0gcJCU8JAYcqIYzv"
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: 'none', color: 'inherit' }}
          >
            Archi
          </a>{' '}
          ❤️
        </p>
      </footer>

      <SendLoveButton />
    </div>
  );
}

export default App;
