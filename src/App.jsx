import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from "./components/NavBar";
import CButton from './components/CashButton'
import Home from "./pages/home";
import Poetry from "./pages/poetry";
import Japan from "./pages/japan";


import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
    <Router>
        <NavBar sticky='left'/>
          <Routes>
                <Route exact path="/" element={<Home />} />
                <Route path="/poetry" element={<Poetry />} />
                <Route path="/japan_blog" element={<Japan />} /> 
          </Routes>
    </Router>
  );
}

export default App;
