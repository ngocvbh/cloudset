import './HomePage.css'
import Title from '../Title.js'
import Recommendation from './Recommendation.js'

function WeatherSection(props) {
    return(
        <section id="weather-section">
            <div class="location">
                <h2>{props.location}</h2>
                <p id="temperature">{props.temp}</p>
                <p id="weather-condition">{props.condition}</p>
            </div>
            <div class="details">
                <p>Day {props.day}</p>
                <p>Night {props.night}</p>
            </div>
            <div id="weather-icon">
                <span>☀️</span>
            </div>
        </section>
    );
}

// Default values while we add functionality
// Wanted to make an icon prop, but the emoji wasn't working
WeatherSection.defaultProps = {
    location: "Irvine, CA",
    temp: "65°",
    condition: "Clear",
    day: "70°",
    night: "63°",
}

function Home_Page() {
    return(
        <div id="home-page">
            <Title/>
            <WeatherSection/>
            <Recommendation/>
        </div>
    );
}


export default Home_Page;