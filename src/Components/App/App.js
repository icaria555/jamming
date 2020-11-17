import React, { useState, useEffect } from 'react';
import logo from '../../logo.svg';
import './App.css';
import SearchBar from '../SearchBar/SearchBar';
import SearchResults from '../SearchResults/SearchResults';
import Playlist from '../Playlist/Playlist';
import Spotify from '../../util/Spotify';

function App() {
  const [count, setCount] = useState(0);
  const [searchResults, setSearchResults] = useState([]);
  const [playlistName, setPlaylistName] = useState('Playlist 01');
  const [playlistTracks, setPlaylistTracks] = useState([{ name: 'a01', artist: 'art01', album: "alb01", id: 1 },
  { name: 'a02', artist: 'art02', album: "alb02", id: 2 }]);
  const addTrack = (track) => {
    if (playlistTracks.findIndex(t => t.id === track.id) === -1) {
      setPlaylistTracks([playlistTracks, track]);
    }
  };

  const removeTrack = (track) => {
    let newPlaylistTrack = playlistTracks;
    const index = newPlaylistTrack.findIndex(t => t.id === track.id);
    newPlaylistTrack.splice(1, index);
    setPlaylistTracks(newPlaylistTrack);
  };

  const updatePlaylistName = (name) => {
    setPlaylistName(name)
  };

  const savePlaylist = () => {
    const trackURLs = playlistTracks;
  }

  const search = (term) => {
    Spotify.search(term);
  }

  const loginHandle = () => {
    Spotify.getAccessToken();
  };

  useEffect(() => {
    console.log("The URL of this page is: " + window.location.href);
  });

  return (
    <div>
      <h1>
        Ja<span className="highlight">mmm</span>ing
        <button className="login-header" onClick={loginHandle}>Login</button>
      </h1>
      <div className="App">
        <SearchBar onSearch={search}/>
        <div className="App-playlist">
          <SearchResults searchResults={searchResults} onAdd={addTrack} onSearch={search} />
          <Playlist playlistName={playlistName} tracks={playlistTracks}
            onRemove={removeTrack} onNameChange={updatePlaylistName}
            onSave={savePlaylist} />
        </div>
      </div>
    </div>
  );
}

export default App;
