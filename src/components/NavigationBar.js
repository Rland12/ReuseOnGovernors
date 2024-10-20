import './NavigationBarStyles.css'; 
import Home from './icons/home-icon.png';
import Vendors from './icons/vendors-icon.png';
import Scan from './icons/scan-icon.png';
import Events from './icons/events-icon.png';
import Rewards from './icons/reward-icon.png';



function NavigationBar() {

    return (
        <div className='navigation-bar'>
          <button className='home'>
            <img className='home-icon' src={Home} alt= 'HomeIcon'></img>
            <h3 className='title'>Home</h3>
          </button>
          <button className='vendors'>
          <img className='vendor-icon' src={Vendors} alt= 'VendorIcon'></img>
          <h3 className='title'>Vendors</h3>
            </button>
          <button className='scan'>
            <img className='scan-icon' src={Scan} alt= 'ScanIcon'></img>
            <h3 className='title'>Scan</h3>
          </button>
          <button className='events'>
            <img className='event-icon' src={Events} alt= 'EventIcon'></img>
            <h3 className='title'>Events</h3>
          </button>
          <button className='rewards'>
            <img className='reward-icon' src={Rewards} alt= 'RewardIcon'></img>
            <h3 className='title'>Rewards</h3>
          </button>
        </div>
    )
}

export default NavigationBar