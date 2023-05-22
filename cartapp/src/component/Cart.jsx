import React from 'react'

export default function Cart(props) {
    return (
        <div>
            <h4>{props.val.product} - {props.val.price} <button onClick={() => { props.deleteFromCart(props.index) }}>X</button></h4>

        </div>
    )
}
