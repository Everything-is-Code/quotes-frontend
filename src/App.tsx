import { useEffect, useState } from 'react';
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
    const [count, setCount] = useState(0)
    const [quote, setQuote] = useState('');

    useEffect(() => {
        fetch('https://quotes-backend-quotes.apps.cluster-lz7k2.dynamic.redhatworkshops.io/hello/greeting/quote', {
          mode: 'cors',    
          headers: {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE',
                'Access-Control-Allow-Headers': 'Content-Type',
                'Content-Type':'application/json',
            },
        })
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