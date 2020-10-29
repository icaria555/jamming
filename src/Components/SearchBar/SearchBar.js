import React, { useState, useEffect } from 'react';
import './SearchBar.css';

function SearchBar(props) {
    const search = (event) => {
        const term = event.currentTarget.value;
        props.onSearch(term);
    };

    return (
        <div className="SearchBar">
            <input placeholder="Enter A Song, Album, or Artist" onChange={search} />
            <button className="SearchButton">SEARCH</button>
        </div>
    );
}

export default SearchBar;