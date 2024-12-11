import React, { useState, useEffect } from "react";

const WeatherSection = (props) => {
    const [weatherData, setWeatherData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const API_KEY = "b02d7e75fa43bb634077f033cf8d7de8";
    const CITY = props.city;
    const UNITS = "imperial"; // Fahrenheit

    // FOR ZIP CODE 
    // const ZIP_CODE = "92618"; 
    // const COUNTRY_CODE = "us";

    // const response = await fetch(
    //     `https://api.openweathermap.org/data/2.5/weather?zip=${ZIP_CODE},${COUNTRY_CODE}&units=${UNITS}&appid=${API_KEY}`
    // );

    useEffect(() => {
        const fetchWeatherData = async () => {
            try {
                const response = await fetch(
                    `https://api.openweathermap.org/data/2.5/weather?q=${CITY}&units=${UNITS}&appid=${API_KEY}`
                );
                if (!response.ok) {
                    throw new Error("Failed to fetch weather data");
                }
                const data = await response.json();
                setWeatherData(data);
                setLoading(false);
            } catch (err) {
                setError(err.message);
                setLoading(false);
            }
        };

        fetchWeatherData();
    }, []);

    if (loading) {
        return <div className="loading">Loading...</div>;
    }

    if (error) {
        return <div className="error">Error: {error}</div>;
    }

    const { name } = weatherData;
    const { temp, temp_min, temp_max } = weatherData.main;
    const weatherCondition = weatherData.weather[0].description;

    return(
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
}

export default WeatherSection;
