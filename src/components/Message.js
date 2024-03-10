import React, {Component} from "react";

class Message extends Component{

    constructor(){
        super()
        this.state = {
            message :"welcome to my show"
        }
    }

    passButton = () =>{
        this.setState({
            message: 'you are now permitted to go inside'
        })
    }

    render(){
        return (
            <div>
                <h2> {this.state.message} </h2>
                <button onClick={()=>this.passButton()}>Click to Pass</button>
            </div>
        )
    }
}

export default Message