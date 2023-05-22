import React from 'react'
import { Consumer } from '../contextApi'

export default function MyComp() {
    return (
        <div>

            <Consumer>
                {(val) => { return val }}
            </Consumer>
        </div>
    )
}
