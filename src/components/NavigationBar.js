import './styles/NavigationBarStyles.css'; 
import Home from './icons/home-icon.png';
import Vendors from './icons/vendors-icon.png';
import Scan from './icons/scan-icon.png';
import Events from './icons/events-icon.png';
import Rewards from './icons/reward-icon.png';
import { Link } from 'react-router-dom';


function NavigationBar() {

    return (
      <div className='navigation-bar'>
        <Link to="/home">
          <button className='home'>
            <img className='home-icon' src={Home} alt= 'HomeIcon'></img>
            <h3 className='title'>Home</h3>
          </button>
        </Link>
        <Link to="/vendors">
          <button className='vendors'>
            <img className='vendor-icon' src={Vendors} alt= 'VendorIcon'></img>
            <h3 className='title'>Vendors</h3>
          </button>
        </Link>
        <Link to="/scan">
          <button className='scan'>
            <img className='scan-icon' src={Scan} alt= 'ScanIcon'></img>
            <h3 className='title'>Scan</h3>
          </button>
        </Link>
        <Link to="/events">
          <button className='events'>
            <img className='event-icon' src={Events} alt= 'EventIcon'></img>
            <h3 className='title'>Events</h3>
          </button>
        </Link>
        <Link to="/rewards">
          <button className='rewards'>
            <img className='reward-icon' src={Rewards} alt= 'RewardIcon'></img>
            <h3 className='title'>Rewards</h3>
          </button>
        </Link>
      </div>
    )
}

export default NavigationBar