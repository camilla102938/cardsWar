import React from 'react'
import Product from './Product'

export default function ProductList(props) {


    return (
        <div>
            <h1>main page</h1>
            {props.products.map((val, index) => {
                return <Product product={val.product}
                    price={val.price}
                    index={index} key={index}
                    addToCart={props.addToCart} />
            })}
        </div>
    )
}
