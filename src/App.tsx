import { useEffect, useState } from 'react';
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
    const [count, setCount] = useState(0)
    const [quote, setQuote] = useState('');
    
    useEffect(() => {
      fetch(import.meta.env.VITE_BACKEND_URL)
            .then(response => response.text())
            .then(data => setQuote(data))
            .catch(error => console.log(error));
    }, []);

    return (
    <>
      <div>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Random Quote:</h1>
        <p>{quote}</p>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
     </>
    );
}

export default App;
