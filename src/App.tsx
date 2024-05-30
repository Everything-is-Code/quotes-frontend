import React, { useEffect, useState } from 'react';
import './App.css'

function App() {
    const [quote, setQuote] = useState('');

    useEffect(() => {
        fetch('https://quotes-backend-quotes.apps.cluster-lz7k2.dynamic.redhatworkshops.io/hello/greeting/quote', {
            headers: {
            'Content-Type': 'application/json',
            },
            mode: 'cors',
        })
            .then(response => response.text())
            .then(data => setQuote(data))
            .catch(error => console.log(error));
    }, []);

    return (
        <div>
            <h1>Random Quote:</h1>
            <p>{quote}</p>
        </div>
    );
}

export default App;