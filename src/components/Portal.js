import React from 'react'
import ReactDom from 'react-dom'

function Portal() {
  return ReactDom.createPortal(
    <div>
      this is the forst portal
    </div>,
    document.getElementById('portal')
  )
}

export default Portal
