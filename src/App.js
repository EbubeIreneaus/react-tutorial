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

function App() {
  return (
    <div className="App">
      <Error>
        <ErrorPlay textt="errordd" />
      </Error>
    </div>
  );
}

export default App;
