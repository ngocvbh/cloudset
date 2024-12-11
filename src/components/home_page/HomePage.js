import React, { useState } from 'react';
import './HomePage.css';
import Title from '../Title.js';
import Recommendation from './Recommendation.js';
import WeatherSection from './WeatherSection.js';

function HomePage(props) {
    const [temp, setTemp] = useState(null);

    return (
        <div id="home-page">
            <Title />
            <WeatherSection 
                location={props.location} 
                searchType={props.searchType} 
                onWeatherData={(temperature) => setTemp(temperature)} 
            />
            {temp !== null && <Recommendation temp={temp} />}
        </div>
    );
}

export default HomePage;
