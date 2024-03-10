import React, {Component} from 'react'

class Counter extends Component{

    constructor(){
        super()
        this.state = {
            count: 0,
        }
    }

    incrementCount = () =>{
        this.setState({
            count: this.state.count + 1
        })
    }

    decrementCount = () => {
        this.setState({
            count: this.state.count - 1
        })
    }
    render(){
        return (
            <div>
                <p>You clicked: {this.state.count} times</p>
                <button onClick={()=>this.decrementCount()}>Minus</button> &nbsp;
                <button onClick={()=>this.incrementCount()}>Plus</button>
            </div>
        )
    }
}


export default Counter