import './styles/RewardsPageStyles.css'
import React, { useState } from 'react'; 
import NavigationBar from './NavigationBar';

const Rewards = () => {

     // Example user points, this can be passed as props or managed by state
    const [userPoints, setUserPoints] = useState(750);
    const rewards = [
      { id: 1, title: 'Islandwide Discount', points:'25', description: '20% off at any vendor on Governor’s Island' },
      { id: 2, title: 'Priority Access', points:'50',description: 'Special seating and priority access to events' },
      { id: 3, title: 'QC NY Spa day pass', points:'75', description: 'Enjoy a day pass at the QC NY Spa' },
      { id: 4, title: 'Contributor Tree', points:'100', description: 'Get a tree planted in your honor for being a top contributor for the Island' },
    ];
  
    return (
      <div className='main-content'>
        <div className="rewards-container">
          <header className="user-points-header">
              <h2>Current Points: {userPoints}</h2>
          </header>
          {rewards.map((reward) => (
            <div key={reward.id} className="reward-card">
              <h3>{reward.title}</h3>
              <span className="reward-points">{reward.points} Points</span>
              <p>{reward.description}</p>
            </div>
          ))}
          <NavigationBar />
        </div>
      </div>
    );
  };
export default Rewards