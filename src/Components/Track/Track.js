import React, { useState, useEffect } from 'react';

function Track() {
    return (
        <div class="Track">
            <div class="Track-information">
                <h3>{/*<!-- track name will go here -->*/}</h3>
                <p>{/*<!-- track artist will go here--> | <!-- track album will go here -->*/}</p>
            </div>
            <button class="Track-action">{/*<!-- + or - will go here -->*/}</button>
        </div>
    )
}

export default Track;