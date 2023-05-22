import React from 'react'

export default function Product(props) {
    return (
        <div style={{ backgroundColor: 'lightblue' }}>
            <h2>{props.product}</h2>
            <h5>price {props.price} <button style={{ cursor: 'pointer' }} onClick={() => { props.addToCart(props.index) }}>+</button> </h5>

        </div>
    )
}
