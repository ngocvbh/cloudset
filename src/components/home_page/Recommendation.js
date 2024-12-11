import './Recommendation.css'
import clothingImages from '../importImages';

const clothingRecommendation = (temp) => {
    if (temp > 80) {
        return [
            {labels: "Short Sleeve Shirt", imgKey: "short_sleeve"},
            {labels: "Shorts", imgKey: "shorts"},
            {labels: "Short Skirt", imgKey: "short_skirt"},
            {labels: "Sunglasses", imgKey: "sunglasses"},
            {labels: "Cap", imgKey: "cap"}
        ];
    } else if (temp > 60) {
        return [
            {labels: "Long Sleeve Shirt", imgKey: "long_sleeve"},
            {labels: "Jeans", imgKey: "jeans"},
            {labels: "Long Skirt", imgKey: "long_skirt"},
            {labels: "Jacket", imgKey: "jacket"},
            {labels: "Wind Breaker", imgKey: "windbreaker"}
        ]
    } else {
        return [
            {labels: "Long Sleeve Shirt", imgKey: "long_sleeve"},
            {labels: "Thick Jacket", imgKey: "thick_jacket"},
            {labels: "Beanie", imgKey: "beanie"},
            {labels: "Boots", imgKey: "boots"},
            {labels: "Gloves", imgKey: "gloves"},
        ]
    }
}

const Recommendation = ({temp}) => {
    const recommendations = clothingRecommendation(temp);
    return(
        <section id="recommendations">
            <h3>Clothing Recommendations</h3>
            <div className="clothing-group">
                {recommendations.map((item, index) => (
                    <div className="clothing-item" key={index}>
                        <img src={clothingImages[item.imgKey]} alt={item.label} />
                        <p>{item.labels}</p>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Recommendation;