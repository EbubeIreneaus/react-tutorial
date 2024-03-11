import React, { Component } from 'react'
import './style.css'

class LoginForm extends Component {

    constructor(props) {
        super(props)

        this.state = {
            user: '',
            password: ''
        }
        this.userInput = this.userInput.bind(this)
        this.passwordInput = this.passwordInput.bind(this)
    }

    userInput(event) {
        this.setState({
            user: event.target.value
        })
    }

    passwordInput(event) {
        this.setState({
            password: event.target.value
        })
    }


    render() {
        const button = {
            width: '100%',
            padding: "12px 0",
            textAlign: 'center',
            borderRadius: '50px',
            margin: '12px 0'

        }

        const { user, password } = this.state
        return (
            <form>
                <div className='form_content'>
                    <h2>Log In</h2>
                    <small style={{ 'opacity': 0.5, 'margin': '20px 0', 'display': 'block' }}><b>Login with your data that you have entered during registeration</b></small>

                    <div className='formDiv'>
                        <label>username or email:</label>
                        <input type="text" placeholder='enter username or email' value={user} onChange={this.userInput} />
                    </div>

                    <div className='formDiv'>
                        <label>password:</label>
                        <input type="password" placeholder='password' value={password} onChange={this.passwordInput} />
                    </div>

                    <p style={{ 'float': 'right' }} className='text-purple'><b>Forget password?</b></p>

                    <button style={button} className='purpleBg'>Login</button>

                    <br />

                    <button style={button} className=''>sign in with google</button>

                    <p style={{ 'textAlign': 'center' }}><small>Don't have an account? <b className='text-purple'>Register</b></small></p>
                </div>

                <div className='other' style={{ 'textAlign': 'center' }}>

                    <h3>Nice to see you again</h3>

                    <h1 className='text-purple' style={{ 'margin': '40px 0' }}>Weclcome Back</h1>

                    <div>
                        <img src='/loginview.png' alt="alternate text" style={{ 'width': '100%', 'height': '300px', 'objectFit': 'cover' }} />
                    </div>
                    
                </div>
            </form>
        )
    }
}

export default LoginForm
