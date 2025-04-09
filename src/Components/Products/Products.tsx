
import { useEffect, useState } from 'react'
import './products.css'

import ProductsCard from './ProductsCard/ProductsCard'

export type ProductType = {
  title : string,
  price : number,
  image : string
}

const Products = () => {

  const [products, setProducts] = useState<ProductType[]>([])

  useEffect(() => {
    fetch("products.json")
    .then(res => res.json())
    .then(data => setProducts(data))
  }, [])


  return (
    <section className="products container" id="products">
    <h2 className="section__title">
        Products
    </h2>

    <div className="products__container">
      {products.map(x => (<ProductsCard {...x}/>))}
    </div>
</section>
  )
}

export default Products