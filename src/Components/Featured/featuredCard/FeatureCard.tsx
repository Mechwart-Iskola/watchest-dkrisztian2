import { FeaturedType } from '../Featured'
import './featurecard.css'


const FeatureCard = (props:FeaturedType) => {
  return (
    <div className="featured__card">
        <span className="featured__tag">Sale</span>
    
        <img src={props.image} alt={props.title} className="featured__img"/>
    
        <div className="featured__data">
            <h3 className="featured__title">{props.title}</h3>
            <span className="featured__price">{props.price}</span>
        </div>
    
        <button className="button featured__button">ADD TO CART</button>
    </div>
  )
}

export default FeatureCard