import React, { useState, useEffect } from 'react';
import './Playlist.css';

import TrackList from '../TrackList/TrackList';

function Playlist(props) {
    return (
        <div className="Playlist">
            <input defaultValue={"New Playlist"} />
            <TrackList playlistTracks={props.playlistTracks} onRemove={props.removeTrack} isRemoval={true} />
            <button className="Playlist-save">SAVE TO SPOTIFY</button>
        </div>
    )
}

export default Playlist;