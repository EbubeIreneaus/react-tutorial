import React, {Component} from 'react'

class HelloClass extends Component{
    render(){
        return <h2>Hello world Class method {this.props.date}</h2>
    }
}

export default HelloClass