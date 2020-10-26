import React, { useState, useEffect } from 'react';
import './TrackList.css';

import Track from '../Track/Track';

function TrackList(props) {
    const tracks = props.tracks.map((track) => 
        <Track track={track}/>
    );

    return (
        <div className="TrackList">
            {tracks}
        </div>
    )
}

export default TrackList;