import React from 'react';
import NavigationBar from './NavigationBar';
import './styles/VendorsPageStyles.css';
import Eva from './vendor-icons/little-evas-icon.png';
import Joe from './vendor-icons/joecoffee_icon.jpg';
import Taco from './vendor-icons/taco-vista-icon.jpg';

function VendorsPage() {
  return (
    <div>
      <div className='header'>
        <h1 className='heading'>VENDORS</h1>
      </div>

      <div className='vendor-container'>
        <img className='eva-icon' src={Eva} alt= 'EvaIcon'></img>
        <h2 className='name'>Little Eva's</h2>
        <h3 className='bio'>Gluten-Free</h3>

      </div>
      <NavigationBar />
    </div>
  );
}

export default VendorsPage;