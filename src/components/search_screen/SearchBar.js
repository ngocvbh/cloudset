// https://www.youtube.com/watch?v=irirN7c5CuU

import './SearchBar.css';
import SearchIcon from './Search.png';
import {useCallback} from "react";
import { GeoapifyGeocoderAutocomplete, GeoapifyContext } from '@geoapify/react-geocoder-autocomplete'

function SearchBar(props){

    const API_KEY = "e935fa91c96e45109782a8fd2ce7e353";
    
    // Callback function updates the city, state_code, and country_code for the user
    // Other properties you can add here are postcode (for zipcode), state, and country
    const onPlaceSelect = useCallback((place) => {
        let updatedValue = {"city": place.properties.city,  
                           "state": place.properties.state_code,
                           "country": place.properties.country_code}
        
        props.setLocation((location) => ({
            ...location,
            ...updatedValue,
        }));
    });

    // Can add more filters to the context here as well
    return (       
        <div id="search-bar">
            <img src={SearchIcon} alt="search icon"/>
            <GeoapifyContext apiKey={API_KEY}>
                <GeoapifyGeocoderAutocomplete 
                placeholder="Enter address here"
                limit={3}
                value={""}
                placeSelect={onPlaceSelect}
                />
            </GeoapifyContext>
        </div>
    );
}

export default SearchBar;