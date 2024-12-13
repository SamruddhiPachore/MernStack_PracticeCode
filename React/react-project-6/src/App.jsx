
import { useState } from 'react'
import './App.css'
import LogoutBtn from './components/LogoutBtn';
import LoginBtn from './components/LoginBtn';

function App() {
  const[isLoggedIn, setLoggedIn] = useState(false);
  
  if(!isLoggedIn) {
    return (
      <LoginBtn />
    )
  }
  
  return (
    <div>
      <h1> Welcome Everyone to Codehelp Web dev course</h1>
      <div>
        {isLoggedIn && <LogoutBtn />}
      </div> 
    </div>
  )



  z


}

export default App
