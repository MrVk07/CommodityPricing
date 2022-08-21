import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Homescreen from "./components/HomeScreen.js";
import DataPulses from './components/DataPulses';
import NavBar from './components/NavBar';


function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path='/pulses' element={<DataPulses />} />
        <Route path='/' element={<Homescreen />} />
      </Routes>
    </Router>
  )
}

export default App
