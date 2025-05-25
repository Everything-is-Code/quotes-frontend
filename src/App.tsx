import { useEffect, useState } from 'react';
import reactLogo from './assets/react.svg';
import './App.css';

function App() {
  const [quote, setQuote] = useState('');

  const fetchQuote = () => {
    fetch(import.meta.env.VITE_BACKEND_URL)
      .then((response) => response.text())
      .then((data) => setQuote(data))
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    fetchQuote();
  }, []);

  return (
    <div className="app-container dark-mode">
      <header className="header">
        <a href="https://react.dev" target="_blank" rel="noopener noreferrer">
          <img src={reactLogo} className="logo" alt="React logo" />
        </a>
        <h1>Random Quote</h1>
      </header>

      <main className="quote-container">
        {quote ? (
          <blockquote className="quote-text">"{quote}"</blockquote>
        ) : (
          <p className="loading-text">Loading...</p>
        )}
      </main>

      <footer>
        <button className="btn" onClick={fetchQuote} aria-label="Fetch new quote">
          🔄 New Quote
        </button>
      </footer>
    </div>
  );
}

export default App;
