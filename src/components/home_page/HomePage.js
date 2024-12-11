import React, { useState } from 'react';
import './HomePage.css';
import Title from '../Title.js';
import Recommendation from './Recommendation.js';
import WeatherSection from './WeatherSection.js';
import { useNavigate } from 'react-router-dom';

function HomePage(props) {
    const [temp, setTemp] = useState(null);
    const navigate = useNavigate();

    return (
        <div id="home-page">
            <Title />
            <WeatherSection 
                location={props.location} 
                searchType={props.searchType} 
                onWeatherData={(temperature) => setTemp(temperature)} 
            />
            {temp !== null && <Recommendation temp={temp} />}

            <button 
                id="back-to-search-button" 
                onClick={() => navigate('/')} // Navigate to search page
            >
                Back to Search
            </button>
        </div>
    );
}

export default HomePage;
