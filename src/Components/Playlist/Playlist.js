import React, { useState, useEffect } from 'react';
import './Playlist.css';

import TrackList from '../TrackList/TrackList';

function Playlist() {
    return (
        <div className="Playlist">
            <input defaultValue={"New Playlist"} />
            <TrackList playlistTracks={props.playlistTracks} />
            <button className="Playlist-save">SAVE TO SPOTIFY</button>
        </div>
    )
}

export default Playlist;