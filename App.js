import logo from './logo.svg';
import './App.css';
import { Route, Link, NavLink, Redirect, Switch, Router } from 'react-router-dom'
import Header from './components/Header/Header'
import Main from './components/Main/MainComponent'




function App() {
  return (
    <div className="App">
      <Header />
      <Main />

    </div>
  );
}

export default App;
