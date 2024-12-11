import './SearchScreen.css';
import Title from '../Title.js';
import SearchButton from './SearchButton.js'
import SearchBar from './SearchBar.js';


function SearchScreen() {

    return (
        <div id="search-screen">
            <Title />
            <SearchBar />
            <SearchButton />
        </div>
    );
}

export default SearchScreen;