import React, { Component } from 'react'
import CompC from './CompC'
import UserContext from './UserComp'

class CompB extends Component {
  render() {
    return (
    <div>
      hi  {this.context.name}
      <CompC />
    
    </div>
    )
  }
}

CompB.contextType = UserContext

export default CompB