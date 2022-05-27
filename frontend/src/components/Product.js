import React from 'react'
import Rating from './Rating'

function Product(props) {
    const {product} =props
  return (
         <div className="col-md-3 p-3 col-xm-6">
                <div  className="card" style={{width: "15rem"}}>
                    <img src={product.images} className="card-img-top" alt={product.name}></img>
                    <div className="card-body">
                      <h5 className="product-name">{product.name}</h5>
                      <p className="price">{product.price}</p>
                      <Rating rating={product.rating} numRiviews={product.numRiviews} ></Rating>        
                    </div>
                  </div>
            </div>
  )
}

export default Product