import './HomePage.css'
import Title from '../Title.js'
import Recommendation from './Recommendation.js'
import WeatherSection from './WeatherSection.js';

function HomePage(props) {
    return(
        <div id="home-page">
            <Title/>
            <WeatherSection city={props.city}/>
            <Recommendation/>
        </div>
    );
}


export default HomePage;