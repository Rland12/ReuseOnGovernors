import React from 'react';
import NavigationBar from './NavigationBar';
import './styles/HomePageStyles.css';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import MarkerIcon from 'leaflet/dist/images/marker-icon.png';


const customMarker = new L.Icon({
  iconUrl: MarkerIcon,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
});

function Home() {  
  return (
    <div className='main-content'>
      <header className='home-header'>
        <h1>Home</h1>
      </header>
      <div className='map-container'>
        <MapContainer
          center={[40.6886, -74.0189]}
          zoom={15}
          style={{ height: '300px', width: '100%' }}
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />
          <Marker position={[40.6886, -74.0189]} icon={customMarker}>
            <Popup>Governor's Island</Popup>
          </Marker>
        </MapContainer>
      </div>

      <NavigationBar />
    </div>
  );
}

export default Home;


