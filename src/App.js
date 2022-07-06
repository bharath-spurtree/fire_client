import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { getTokenFunc } from './firebase';

function App() {

  const [isTokenFound, setTokenFound] = useState(false);
  console.log(isTokenFound)
  
  getTokenFunc(setTokenFound);

  return (
    <div className="App">
      <header className="App-header">
      {isTokenFound && 
        <span>Notification permission enabled 👍🏻 </span>
      }
      {!isTokenFound && 
        <span>Need notification permission ❗️</span>
      }
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
