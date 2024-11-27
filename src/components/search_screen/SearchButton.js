// Might need to change later for efficiency
// https://stackoverflow.com/questions/42800815/how-to-use-onclick-event-on-react-link-component

import './SearchButton.css'
import {Outlet, Link} from "react-router-dom";

function SearchButton() {
    return(
        <div id="search">
                <Link id="search-button" to="/home_page">Search</Link>
                <Outlet />
            </div>
    );
}

export default SearchButton;