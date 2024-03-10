import React from 'react'

const Hello = props =>{
    return (
        <div>
            <h2>Hello World {props.name}</h2>
            {props.children}
        </div>
    )
}

export default Hello