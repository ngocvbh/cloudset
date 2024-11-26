
import './SearchButton.css';
import {Outlet, Link} from "react-router-dom";

function SearchButton(){

    return(
        <div id="search">
            <Link id="search-button" to="/home_page">Search</Link>
            <Outlet />
        </div>
    );

}

export default SearchButton;