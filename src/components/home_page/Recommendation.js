import './Recommendation.css'
import ShortSleeve from '../clothing_images/short_sleeve.png'
import Shorts from '../clothing_images/shorts.png'

// Ngoc would add her code for determining how clothes are selected in this file
// Could use props/ternary logic, or might need to look into conditional displays
function Recommendation() {
    return(
        <section id="recommendations">
            <h3>Clothing Recommendations</h3>
            <div class="clothing-group">
                <div class="clothing-item">
                    <img src={ShortSleeve} alt="Shirt"/>
                    <p>Shirt</p>
                </div>
                <div class="clothing-item">
                    <img src={Shorts} alt="Shorts"/>
                    <p>Shorts</p>
                </div>
            </div>
        </section>
    );
}

export default Recommendation;