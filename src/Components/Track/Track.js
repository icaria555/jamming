import React, { useState, useEffect } from 'react';
import './Track.css';

function Track(props) {
    const addTrack = () => {
        props.onAdd(props.track);
    };

    const removeTrack = () => {
        props.onRemove(props.track);
    };

    return (
        <div className="Track" key={props.track.id}>
            <div className="Track-information">
                <h3>{props.track.name}</h3>
                <p>{props.track.artist + ' | ' + props.track.album}</p>
            </div>
            <button className={props.isRemoval ? '' : 'Track-action'} onClick={(props.isRemoval ? addTrack : removeTrack)}>
                {(props.isRemoval ? '+' : '-')}
            </button>
        </div>
    );
}

export default Track;