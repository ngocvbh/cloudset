import './HomePage.css'
import Title from '../Title.js'
import Recommendation from './Recommendation.js'
import WeatherSection from './WeatherSection.js';

function HomePage(city) {
    return(
        <div id="home-page">
            <Title/>
            <WeatherSection city={city}/>
            <Recommendation/>
        </div>
    );
}


export default HomePage;