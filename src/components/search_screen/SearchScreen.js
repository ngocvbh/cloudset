import './SearchScreen.css';
import {useState} from 'react';
import Title from '../Title.js';
import SearchButton from './SearchButton.js'
import SearchBar from './SearchBar.js';


function SearchScreen(props) {

    return (
        <div id="search-screen">
            <Title />
            <SearchBar setLocation={props.setLocation} />
            <SearchButton />
        </div>
    );
}

export default SearchScreen;