import logo from './logo.svg';
import './App.css';
import Register from './components/Register';
import Login from './components/Login';
import Routing from './Routes/Routing';
import Home from './components/Home';
import {Routes, Route} from "react-router-dom"
import Navbar from './components/Navbar';
import { cardback } from './colors/colors';
import { useSelector } from 'react-redux';


function App() {

  const {token} = useSelector(state => state.logState)
  return (
    <div className="App" style={{backgroundColor : cardback}}>
      {

      token[0]!==null && <Navbar />
      }
      <Routing />
    </div>
  );
}

export default App;
