import React, { Component } from 'react'
import withCounterWrapper from './withCounterWrapper'

export class ClickCount extends Component {
  render() {
    const {count, increment} = this.props
    return (
      <button onClick={increment}>You Click {count} times </button>
    )
  }
}

export default withCounterWrapper(ClickCount)