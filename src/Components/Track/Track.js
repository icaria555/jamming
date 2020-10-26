import React, { useState, useEffect } from 'react';
import './Track.css';

function Track() {
    renderAction(() => {
        return (
            <button className={isRemoval ? '' : 'Track-action'}>{(isRemoval ? '+' : '-')}</button>
        );
    });

    return (
        <div className="Track" key={props.track.id}>
            <div className="Track-information">
                <h3>{props.track.name}</h3>
                <p>{props.track.artist + ' | ' + props.track.album}</p>
            </div>
            <button className={isRemoval ? '' : 'Track-action'}>{(isRemoval ? '+' : '-')}</button>
        </div>
    )
}

export default Track;