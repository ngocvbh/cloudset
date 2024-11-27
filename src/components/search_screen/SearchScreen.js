import './SearchScreen.css';
import {useState} from 'react';
import Title from '../Title.js';
import SearchButton from './SearchButton.js'
import SearchBar from './SearchBar.js';


function SearchScreen(props) {
    return(
        <div id="search-screen">
            <Title/>
            <SearchBar setCity={props.setCity}/>
            <SearchButton/>
        </div>
    );
}

export default SearchScreen;