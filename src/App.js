import logo from './logo.svg';
import './App.css';



function App() {
  return (
    <div className='body-container-background'>
      <div className='login-container'>
        <button className='close'>x</button>

        <div className='content'> 
          <h1 className='title-1'>Sign Up,</h1>
          <h1 className='title-2'>Get Rewards</h1>
          <h2 className='name'>Name</h2>
          <input className='enter-name' type="text" placeholder='Enter your name'/>
          <h2 className='contact'>Email/Phone Number</h2>
          <input className='enter-contact' type="text" placeholder='Enter your email/phone number'/>
          <button className='signup-button'>
            <h3 className='signup'>Sign Up</h3>
          </button>
          <h3 className='account'>Already have an account?</h3>
          <button className='login-button'>
            <h3 className='login'>Login</h3>
          </button>
        </div>
      </div>     
    </div>
  );
}

export default App;
