
import './SearchBar.css';
import SearchIcon from './Search.png';
import {useCallback, useEffect, useState} from "react";
import { GeoapifyGeocoderAutocomplete, GeoapifyContext } from '@geoapify/react-geocoder-autocomplete'

//Search Bar
function SearchBar(props){

    const API_KEY = "e935fa91c96e45109782a8fd2ce7e353";
    //Keeps track of when the user is typing
    const [closed, setClosed] = useState(false);
    
    //Adds location to local storage
    useEffect(() => {
        localStorage.setItem('location', JSON.stringify(props.location))
        console.log("Changed local storage")
    }, [props.location]);

    // Callback function updates the city, state_code, and country_code for the user
    // Other properties you can add here are postcode (for zipcode), state, and country
    // Using useState in case we ever want to pass values using props instead of localstorage
    const onPlaceSelect = useCallback((place) => {
        if (!closed){
            let updatedValue = {"city": place.properties.city,  
                            "state": place.properties.state_code,
                            "country": place.properties.country_code}
            props.setLocation((location) => ({
                ...location,
                ...updatedValue,
                })
        );}
    });

    const onClose = useCallback(()=>{
        setClosed(true);
    });

    const onOpen = useCallback(() => {
        setClosed(false);
    }

    );

    // Can add more filters to the context here as well
    // 1 is United States, 52 is Mexico
    return (     
        <div id="search-bar">  
            <img src={SearchIcon} alt="search icon"/>          
            <GeoapifyContext apiKey={API_KEY}>
                <GeoapifyGeocoderAutocomplete 
                placeholder="Enter address here"
                limit={3}
                value={""}
                placeSelect={onPlaceSelect}
                skipIcons={true}
                biasbyCountryCode={1}
                onClose={onClose}
                onOpen={onOpen}
                />
            </GeoapifyContext>
        </div>
    );
}

export default SearchBar;