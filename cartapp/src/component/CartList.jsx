import React from 'react'
import Cart from './Cart'

export default function CartList(props) {
    return (
        <div>
            <h1>cart</h1>
            {props.carts.map((val, index) => {
                return <Cart val={val} index={index} key={index} deleteFromCart={props.deleteFromCart} />
            })}
        </div>
    )
}
