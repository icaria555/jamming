import React, {useState, useEffect} from 'react';
import logo from '../../logo.svg';
import './App.css';

function App() {
  const [count, setCount]  = useState(0);
  useEffect(() => {
    console.log(`You clicked ${count} times`);
  });

  return (
    <div>
      <h1>Ja<span className="highlight">mmm</span>ing</h1>
      <div className="App">
        {/*<!-- Add a SearchBar component -->*/}
        <div className="App-playlist">
          {/*<!-- Add a SearchResults component -->*/}
          {/*<!-- Add a Playlist component -->*/}
        </div>
      </div>
    </div>
  );
}

export default App;
