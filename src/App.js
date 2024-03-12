import React from 'react';
import Message from './components/Message'
import Counter from './components/Counter'
import './App.css';
import Parent from './components/Parent';
import ListDisplay from './components/ListDisplay';
import ObjectList from './components/ObjectList';
import LoginForm from './components/LoginForm';
import Portal from './components/Portal';
import ErrorPlay from './components/ErrorPlay';
import Error from './components/Error';
import ClickCount from './components/ClickCount';
import CompA from './components/CompA';
import { UserProvider } from './components/UserComp';
import CompC from './components/CompC';



class App extends React.Component {
  render() {
    const obj = {
      name: 'All Typescript object'
    }
    return (
      <div className='app'>
        {/* <UserProvider value={obj}> */}
          <CompA />
        {/* </UserProvider> */}
      </div>
    )
  }
}

export default App
