import React, {useState, useEffect} from 'react';
import './SearchBar.css';

function SearchBar() {
    return (
        <div className="SearchBar">
            <input placeholder="Enter A Song, Album, or Artist" />
            <button className="SearchButton">SEARCH</button>
        </div>
    )
}

export default SearchBar;