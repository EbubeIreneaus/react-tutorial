import React, { Component } from 'react'
import Child from './Child'

export class Parent extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         message: 'hello world',
      }

      this.altMsg = this.altMsg.bind(this)
    }
    
    altMsg() {
        alert(this.state.message)
    }

  render() {
    return (
      <div>
        <Child clickHandler={this.altMsg} />
      </div>
    )
  }
}

export default Parent
