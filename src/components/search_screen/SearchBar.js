
import './SearchBar.css';
import SearchIcon from './Search.png';
import {useCallback, useEffect, useState} from "react";
import { GeoapifyGeocoderAutocomplete, GeoapifyContext } from '@geoapify/react-geocoder-autocomplete'

function SearchBar(){

    const API_KEY = "e935fa91c96e45109782a8fd2ce7e353";
    // Holds the location
    /* setPlace(place => ({
              ...place,
              ...updatedValue}))
     updatedValue = {"city":__, "state":__, "country":__}*/
    const [location, setLocation] = useState({});

    function isEmpty(val){
        return Object.keys(val).length === 0;
    }
    
    //Adds location to local storage
    useEffect(() => {
        localStorage.setItem('location', JSON.stringify(location))
        console.log("Changed")
    }, [location]);

    // Callback function updates the city, state_code, and country_code for the user
    // Other properties you can add here are postcode (for zipcode), state, and country
    // Using useState in case we ever want to pass values using props instead of localstorage
    const onPlaceSelect = useCallback((place) => {
        let updatedValue = {"city": place.properties.city,  
                           "state": place.properties.state_code,
                           "country": place.properties.country_code}
        setLocation((location) => ({
            ...location,
            ...updatedValue,
            })
        );

        
    });

    // Can add more filters to the context here as well
    //<img src={SearchIcon} alt="search icon"/>
    return (     
        <div id="search-bar">            
            <GeoapifyContext apiKey={API_KEY}>
                <GeoapifyGeocoderAutocomplete 
                placeholder="Enter address here"
                limit={3}
                value={""}
                placeSelect={onPlaceSelect}
                skipIcons={true}
                />
            </GeoapifyContext>
        </div>
    );
}

export default SearchBar;