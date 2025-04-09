
import { useEffect, useState } from 'react'
import './featured.css'

import FeatureCard from './featuredCard/FeatureCard'


export type FeaturedType = {
  image : string,
  title : string,
  price : number
}

const Featured = () => {

  const [featured, setFeatured] = useState<FeaturedType[]>([])

  useEffect(() => {
    fetch("featured.json")
    .then(res => res.json())
    .then(data => setFeatured(data))
    console.log(featured)
  }, [])


  return (
    <section className="featured" id="featured">
    <h2 className="feature__title">Featured</h2>
    <div className="featured__container">
            {featured.map(x => (<FeatureCard {...x}/>))}
    </div>
</section>
  )
}

export default Featured