import React, { useState, useEffect } from 'react';
import '../styles/LoveQuotes.css';

const quotes = [
  "You are the love of my life.",
  "Every moment with you is a blessing.",
  "Your smile lights up my world.",
  "Together, we create our own fairytale.",
  "I love you more than words can say.",
  "Your love is my anchor in the storm.",
  "My heart beats only for you.",
  "You are the melody to my life’s song.",
  "Forever with you is my favorite place.",
  "Every day with you is a new adventure.",
  "You make every moment magical.",
  "In your eyes, I see my future.",
  "Your love is the light of my life.",
  "With you, I’ve found my happily ever after.",
  "My love for you grows stronger every day.",
  "You complete me in ways I never imagined.",
  "Loving you is a dream come true.",
  "Every kiss from you feels like a blessing.",
  "You are my forever and always.",
  "Our love story is my favorite.",
  "Your love fills every corner of my heart.",
  "I cherish every moment spent with you.",
  "You are my sun on the darkest days.",
  "Every heartbeat echoes your name.",
  "With you, I've discovered true happiness.",
  "Your embrace is my safe haven.",
  "I fall in love with you more every day.",
  "Together, we are unstoppable.",
  "Your laughter is my favorite sound.",
  "In your love, I find my true home.",
  "You are the spark that lights my soul.",
  "Our love is a beautiful journey.",
  "You are the reason I believe in miracles.",
  "Every moment without you feels incomplete.",
  "Your love is the sweetest gift.",
  "Being with you is my greatest adventure.",
  "You make my world infinitely brighter.",
  "My heart sings a love song just for you.",
  "With you, every day is Valentine's Day.",
  "I am forever grateful for your love.",
  "Your eyes capture the beauty of my soul.",
  "You make every heartbeat a celebration.",
  "Your love is a fire that warms my spirit.",
  "In your arms, I've found my forever.",
  "Every whisper of your love fills my heart.",
  "You are my guiding star in the night.",
  "Your touch sends shivers down my spine.",
  "I am complete because of you.",
  "Every day is brighter with you by my side.",
  "You are the dream I never want to wake from.",
  "Your presence is the best gift of all.",
  "My love for you runs deeper than the ocean.",
  "You are the reason I smile each day.",
  "Your love transforms my ordinary into extraordinary.",
  "Every moment with you is a treasured memory.",
  "You are the poem my heart has written.",
  "Your love is my greatest adventure.",
  "With you, life is a beautiful journey.",
  "Every breath I take is filled with your love.",
  "Your laughter is the music that lifts my soul.",
  "I am forever enchanted by your smile.",
  "Your love is the anchor that grounds me.",
  "You fill my heart with endless joy.",
  "Every day with you is pure magic.",
  "Your presence makes all the difference.",
  "I am lost in the beauty of your eyes.",
  "You make my world a better place.",
  "Every moment with you is a precious gift.",
  "Your love is the light that guides my way.",
  "With you, I have discovered true bliss.",
  "Your soul is the melody of my heart.",
  "I am forever captivated by your love.",
  "Every heartbeat whispers your name.",
  "Your love is my sanctuary.",
  "You are the spark that ignites my dreams.",
  "Every glance from you fills me with hope.",
  "Your love is the essence of my being.",
  "I find solace in the warmth of your embrace.",
  "Every moment apart makes me cherish you more.",
  "Your love completes me in every way.",
  "Every moment with you is a treasure beyond measure.",
  "Your love is the rhythm of my heart.",
  "In your smile, I find endless joy.",
  "You are the warmth that fills my soul.",
  "My world blossoms when I see you.",
  "Your touch whispers love into my heart.",
  "Every day with you is a dream realized.",
  "Your love transforms ordinary moments into magic.",
  "I am humbled by the beauty of your love.",
  "With you, every heartbeat is a celebration.",
  "You are the gentle whisper in the silence of my heart.",
  "Your love is the canvas of my dreams.",
  "Every glance from you paints a smile on my face.",
  "Your laughter is the sweetest melody to my ears.",
  "I lose myself in the wonder of your eyes.",
  "Your love lights up even the darkest days.",
  "Every day with you feels like a timeless love story.",
  "Your presence fills my heart with boundless grace.",
  "I cherish the love that grows stronger with every sunrise.",
  "Your love is the masterpiece I hold dear.",
  "I LOVE YOU MORE THAN MY LIFE ARCHI!"
];


const LoveQuotes = () => {
  const [quoteIndex, setQuoteIndex] = useState(0);
  const [fade, setFade] = useState(true);

  // Function to change to a random quote that is different from the current one
  const changeQuoteRandomly = () => {
    setFade(false);
    setTimeout(() => {
      let newIndex = Math.floor(Math.random() * quotes.length);
      // Ensure the new quote is different from the current one (if more than one quote exists)
      if (quotes.length > 1) {
        while (newIndex === quoteIndex) {
          newIndex = Math.floor(Math.random() * quotes.length);
        }
      }
      setQuoteIndex(newIndex);
      setFade(true);
    }, 500); // transition duration should match CSS timing
  };

  // Automatically change quote every 4 seconds
  useEffect(() => {
    const intervalId = setInterval(() => {
      changeQuoteRandomly();
    }, 4000);
    return () => clearInterval(intervalId);
  }, [quoteIndex]);

  return (
    <div className="interactive-love-quotes">
      <div className={`quote ${fade ? 'fade-in' : 'fade-out'}`}>
        {quotes[quoteIndex]}
      </div>
      <button onClick={changeQuoteRandomly} className="next-quote-button">
        <span className="heart-icon">❤️</span> Next Quote
      </button>
    </div>
  );
};

export default LoveQuotes;
