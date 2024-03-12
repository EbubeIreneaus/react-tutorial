import React from 'react'

const withCounterWrapper = (ComponentToRender) => {
  
 class newWithCounterWrapper extends React.Component {
    constructor(props) {
      super(props)
    
      this.state = {
         count: 0
      }
    }

   increment = () =>{
        this.setState( prevState =>({
            count: prevState.count + 1
        }))
    }
    
    render() {
      return <ComponentToRender count={this.state.count} increment={this.increment} />
    }
  }
  
  return newWithCounterWrapper
}

export default withCounterWrapper
