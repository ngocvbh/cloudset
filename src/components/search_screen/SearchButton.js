import './SearchButton.css'
import {Outlet, useNavigate} from "react-router-dom";

//Search Button
function SearchButton({ location, setErrorMessage }) {
    const navigate = useNavigate();

    /*Click on Search will direct to Home Page if the location is selected from the GeoAPIfy's Auto-Complete
    else, display an error message and prevent user from proceed to home page.
    */
    const handleSearchClick = () => {
        if (!location || Object.keys(location).length === 0) {
            setErrorMessage("Please select a valid location from the suggestion box before proceeding.");
        } else {
            setErrorMessage(""); // Clear any existing error messages
            navigate("/home_page");
        }
    };

    return (
        <div id="search">
            <button id="search-button" onClick={handleSearchClick}>Search</button>
            <Outlet />
        </div>
    );
}

export default SearchButton;