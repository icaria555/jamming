import React, {useState, useEffect} from 'react';
import logo from '../../logo.svg';
import './App.css';

import SearchResults from '../SearchResults/SearchResults';
import Playlist from '../Playlist/Playlist';

function App() {
  const [count, setCount]  = useState(0);
  const [searchResults, setSearchResults] = useState([]);
  const [playlistName, setPlaylistName]  = useState(['a', 'b', 'c']);
  const [playlistTracks, setPlaylistTracks] = useState([{name:'a01', artist:'art01', album:"alb01", id:01}, 
                                                        {name:'a02', artist:'art02', album:"alb02", id:02}]);
  addTrack((track) => {
    if(playlistTracks.findIndex(t => t.id == track.id) === -1) {
      setPlaylistTracks([playlistTracks, track]);
    }
  });

  useEffect(() => {
    console.log(`You clicked ${count} times`);
  });

  return (
    <div>
      <h1>Ja<span className="highlight">mmm</span>ing</h1>
      <div className="App">
        {/*<!-- Add a SearchBar component -->*/}
        <div className="App-playlist">
          <SearchResults searchResults={searchResults} />
          <Playlist playlistName={playlistName} playlistTracks={playlistTracks} />
        </div>
      </div>
    </div>
  );
}

export default App;
