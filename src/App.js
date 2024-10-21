import React, { useState } from 'react'; 
import 'leaflet/dist/leaflet.css';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import VendorsPage from './components/VendorsPage';
import Login from './components/Login';
import Home from './components/HomePage';
import RewardsPage from './components/RewardsPage';
import ScanPage from './components/ScanPage';
import EventsPage from './components/EventsPage';


function App() {
  const [isLoginVisible, setLoginVisible] = useState(true);

  const handleClose = () => {
    setLoginVisible(false);
  };

  return (
    <div className='body-container-background'>
      <Router>

        <Routes>
          <Route path="/" element={<Login />}/>
          <Route path="/home" element={<Home />}/>
          <Route path="/vendors" element={<VendorsPage />} />
          <Route path="/rewards" element={<RewardsPage />} />
          <Route path="/scan" element={<ScanPage />} />
          <Route path="/events" element={<EventsPage />} />
        </Routes>
        
      </Router>
    </div>

    
  );
}

export default App;
