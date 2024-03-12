import React from 'react'

function ErrorPlay({textt}) {
  
  if (textt === 'error') {
    throw new Error("props value has error")
  }

 return <h2>ErrorPlay</h2>
  
  
}

export default ErrorPlay
