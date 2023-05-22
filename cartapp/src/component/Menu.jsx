import React from 'react'
import { Link } from 'react-router-dom'

export default function Menu() {
    return (
        <div>
            <Link to={'/'}><button style={{ backgroundColor: 'lightcyan', cursor: 'pointer' }}>products</button></Link>
            <Link to={'/cartPage'}><button style={{ backgroundColor: 'lightpink', cursor: 'pointer' }}>cart</button></Link>
        </div>
    )
}
