import './SearchScreen.css';
import Title from '../Title.js';
import {useState} from 'react';
import SearchButton from './SearchButton.js'
import SearchBar from './SearchBar.js';

// Search Page
function SearchScreen() {
    const [errorMessage, setErrorMessage] = useState("");
     // Holds the location
    /* setPlace(place => ({
              ...place,
              ...updatedValue}))
     updatedValue = {"city":__, "state":__, "country":__}*/
     const [location, setLocation] = useState({});

    return (
        <div id="search-screen">
            <Title />
            <SearchBar location ={location} setLocation={setLocation}/>
            <SearchButton location={location} setErrorMessage={setErrorMessage}/>

            {errorMessage && <div id="error-message">{errorMessage}</div>}
        </div>
    );
}

export default SearchScreen;