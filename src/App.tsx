import { useEffect, useState } from 'react';
import reactLogo from './assets/react.svg';
import './App.css';

function App() {
  const [count, setCount] = useState(0)
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
        New Quote
        </button>
      </footer>

      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>    
      </div>

    </div>
  );
}

export default App;