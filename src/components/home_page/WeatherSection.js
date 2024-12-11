import React, { useState, useEffect } from "react";

const WeatherSection = (props) => {
    const [weatherData, setWeatherData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    //Gets data from local storage
    const saved = JSON.parse(localStorage.getItem('location'));
    const [CITY, setCity] = useState(saved.city);
    const [STATE, setState] = useState(saved.state);
    const [COUNTRY, setCountry] = useState(saved.country);

    const API_KEY = "b02d7e75fa43bb634077f033cf8d7de8";
    const UNITS = "imperial"; // Fahrenheit


    useEffect(() => {
        

        const fetchWeatherData = async () => {
            try {            
                let url;
                if (COUNTRY !== "usa") {
                    url = `https://api.openweathermap.org/data/2.5/weather?q=${CITY},${COUNTRY}us&units=${UNITS}&appid=${API_KEY}`; 
                }
                else {
                    url = `https://api.openweathermap.org/data/2.5/weather?q=${CITY},${STATE},${COUNTRY}us&units=${UNITS}&appid=${API_KEY}`; 
                }  
                const response = await fetch(url);
                if (!response.ok) {
                    throw new Error("Failed to fetch weather data");
                }
                const data = await response.json();
                setWeatherData(data);
                setLoading(false);

                // Pass the temperature to the parent component
                if (props.onWeatherData) {
                    props.onWeatherData(data.main.temp);
                }
            } catch (err) {
                setError(err.message);
                setLoading(false);
            }
        };
    
        fetchWeatherData();
    }, [props.city, props.searchType]);

    if (loading) {
        return <div className="loading">Loading...</div>;
    }

    if (error) {
        return <div className="error">Error: {error}</div>;
    }

    const { name } = weatherData;
    const { temp, temp_min, temp_max } = weatherData.main;
    const weatherCondition = weatherData.weather[0].description;

    return (
        <section id="weather-section">
            <div id="location">
                <h2>{name}</h2>
                <p id="temperature">{Math.round(temp)}°</p>
                <p id="weather-condition">{weatherCondition}</p>
            </div>

            <div id="details">
                <p>High: {Math.round(temp_max)}°</p>
                <p>Low: {Math.round(temp_min)}°</p>
            </div>
        </section>
    );
};

export default WeatherSection;
