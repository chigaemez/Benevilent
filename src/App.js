
import './App.css';
import Header from './component/Header'
import Body from './component/Body';
import Profile from './component/Profile';
import Images from './component/Images';
import ProfilePic from './component/ProfilePic';

import {GlobalProvider} from './context/GlobalState'

function App() {

  return (
    <GlobalProvider>
    <div className="container">
      <Header />
      <Profile />
      <ProfilePic/>
      <hr />
      <div className="body-container">
        <Images />
        <Body />
      
      </div>


    </div>
    </GlobalProvider>
  );
}

export default App;
