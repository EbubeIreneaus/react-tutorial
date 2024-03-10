// render without using jsx

import React from 'react'

const Hellojs = () =>{
    return React.createElement('div', {'id':'helloworld'}, React.createElement('h1', null, 'Okigwe Ebube ireneaus'))
}

export default Hellojs