import './SearchScreen.css';
import {useState} from 'react';
import Title from '../Title.js';
import SearchButton from './SearchButton.js'
import SearchBar from './SearchBar.js';


function SearchScreen(props) {
    const [searchType, setSearchType] = useState('city'); // Default to 'city'

    return (
        <div id="search-screen">
            <Title />
            <SearchBar setCity={props.setCity} setSearchType={setSearchType} />
            <SearchButton />
        </div>
    );
}

export default SearchScreen;