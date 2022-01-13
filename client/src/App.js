import logo from './logo.svg';
import './App.css';
import Register from './components/Register';
import Login from './components/Login';
import Routing from './Routes/Routing';
import Home from './components/Home';
import {Routes, Route} from "react-router-dom"


function App() {
  return (
    <div className="App">
      <Routing />
    </div>
  );
}

export default App;
