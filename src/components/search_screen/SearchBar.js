// https://www.youtube.com/watch?v=irirN7c5CuU

import './SearchBar.css';
import SearchIcon from './Search.png';

function SearchBar(props){

    // Changes the location based on what the user types
    const changeLocation = (evnt) =>{
        const newCity = evnt.target.value;
        props.setCity(newCity);
    }

    return (
        <div id="search-bar">
            <img src={SearchIcon} alt="search icon"/>
            <input type="text" id="search-query" placeholder="Enter a zip code or city"
                    onChange={changeLocation}/>
        </div>   
    );
}

export default SearchBar;