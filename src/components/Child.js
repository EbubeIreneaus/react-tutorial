import React, { Component } from 'react'

class Child extends Component {
   constructor(props) {
     super(props)
   
     this.state = {
        
     }

   }
  
  render() {
    let {clickHandler} = this.props
    return (
      <div>
        <button onClick={clickHandler}>Click me</button>
      </div>
    )
  }
}

export default Child
