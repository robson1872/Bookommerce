import React from 'react'
import Routes from './Routes/Routes'
import './Styles/Main.scss'
import { UserProvider } from './Context/UserContext';
function App() {
  return (
    <UserProvider>
      <Routes />
    </UserProvider>
    
  );
}

export default App;
