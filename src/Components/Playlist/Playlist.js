import React, { useState, useEffect } from 'react';
import './Playlist.css';

import TrackList from '../TrackList/TrackList';

function Playlist(props) {
    const handelNameChange = (event) => {
        props.onNameChange(event.currenttarget.value);
    };

    return (
        <div className="Playlist">
            <input defaultValue={"New Playlist"} onChange={handelNameChange} />
            <TrackList playlistTracks={props.playlistTracks} onRemove={props.removeTrack} isRemoval={true} />
            <button className="Playlist-save" onClick={props.onSave}>SAVE TO SPOTIFY</button>
        </div>
    );
}

export default Playlist;