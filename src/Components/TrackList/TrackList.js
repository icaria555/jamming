import React, { useState, useEffect } from 'react';
import Track from '../Track/Track';
import './TrackList.css';

function TrackList() {
    const tracks = props.tracks.map((track) => {
        <Track track={track}/>
    });

    return (
        <div className="TrackList">
            {tracks}
        </div>
    )
}

export default TrackList;