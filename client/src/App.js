import logo from './logo.svg';
import { ReactDOM } from 'react';
import './App.css';
import Main from './components/main';
import Test from './components/test';
import Cards from './components/cards';
import Container from './components/container';

function App() {
  return (
    <div style={{margin: 10}} className="App">
      <div>
        <Container />
      </div>
    </div>
  );
}

export default App;