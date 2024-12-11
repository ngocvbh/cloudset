import './SearchScreen.css';
import {useState} from 'react';
import Title from '../Title.js';
import SearchButton from './SearchButton.js'
import SearchBar from './SearchBar.js';

// Search Page
function SearchScreen(props) {
    const [errorMessage, setErrorMessage] = useState("");

    return (
        <div id="search-screen">
            <Title />
            <SearchBar setLocation={props.setLocation} />
            <SearchButton location={props.location} setErrorMessage={setErrorMessage}/>

            {errorMessage && <div id="error-message">{errorMessage}</div>}
        </div>
    );
}

export default SearchScreen;