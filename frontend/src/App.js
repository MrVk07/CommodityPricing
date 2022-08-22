import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Homescreen from "./components/HomeScreen.js";
import DataPulses from './components/DataPulses';
import NavBar from './components/NavBar';
import DataSpices from './components/DataSpices';
import DataOilSeeds from './components/DataOilSeeds';
import DataCereals from './components/DataCereals';
import DataFruits from './components/DataFruits';


function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path='/' element={<Homescreen />} />
        <Route path='/pulses' element={<DataPulses />} />
        <Route path='/spices' element={<DataSpices />} />
        <Route path='/oilseeds' element={<DataOilSeeds />} />
        <Route path='/cereals' element={<DataCereals />} />
        <Route path='/fruits' element={<DataFruits />} />
      </Routes>
    </Router>
  )
}

export default App
