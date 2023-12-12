import React from 'react';
import UserContextProvider from './context/UserContextProvider'
import Login from './Components/Login';
import Profile from './Components/Profile';

const App = () => {
  return (
    <UserContextProvider> 
      <h1 className=' bg-gray-600 p-6 text-center text-5xl'>
          This is minicontext to understand context-api and redux for state management system
      </h1>
      <Login/>
      <Profile/>
    </UserContextProvider>
  )
}

export default App;