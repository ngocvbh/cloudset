// https://www.youtube.com/watch?v=irirN7c5CuU

import './SearchBar.css';
import SearchIcon from './Search.png';
import {useNavigate} from 'react-router-dom';

function SearchBar(props){

    // useNavigate lets you navigate w/out the user interaction
    const navigate = useNavigate();

    // Changes the location based on what the user types
    const changeLocation = (evnt) => {
        const input = evnt.target.value.trim();
        const isZipCode = /^[0-9]{5}(?:-[0-9]{4})?$/.test(input); // Check if input matches ZIP code format
        if (isZipCode) {
            props.setSearchType('zip'); 
        } else {
            props.setSearchType('city');
        }
        props.setCity(input);
    };
    

    // When the user hits enter, they go to the next page as well
    const goHome = (evnt) =>{
        console.log("Trying to go home");
        // 13 means the enter key
        if (evnt.keyCode === 13){
            navigate('/home_page');
        }
    }

    return (
        <div id="search-bar">
            <img src={SearchIcon} alt="search icon"/>
            <input type="text" id="search-query" placeholder="Enter a zip code or city"
                   onChange={changeLocation} onKeyDown={goHome}/>
        </div>   
    );
}

export default SearchBar;