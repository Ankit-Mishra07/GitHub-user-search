import logo from './logo.svg';
import './App.css';
import Register from './components/Register';
import Login from './components/Login';
import Routing from './Routes/Routing';
import Home from './components/Home';
import {Routes, Route} from "react-router-dom"
import Navbar from './components/Navbar';
import { cardback } from './colors/colors';


function App() {
  return (
    <div className="App" style={{backgroundColor : cardback}}>
      <Navbar />
      <Routing />
    </div>
  );
}

export default App;
