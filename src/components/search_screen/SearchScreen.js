import './SearchScreen.css'
import Title from '../Title.js'
import SearchIcon from './Search.png'
import SearchButton from './SearchButton'

function SearchBar() {
    return (
        <div id="search-bar">
            <img src={SearchIcon} alt="search icon"/>
            <input type="text" id="search-query" placeholder="Enter a zip code or city"/>
        </div>
    );
}

function SearchScreen() {
    return(
        <div id="search-screen">
            <Title/>
            <SearchBar/>
            <SearchButton/>
        </div>
    );
}

export default SearchScreen;