
import './App.css'
import Body from './components/Body'
import Header from './components/Header'
import { Outlet } from 'react-router-dom'
import UserContext from './utils/UserContext'
import { useEffect, useState } from 'react'
import { Provider } from 'react-redux'
import appStore from './utils/appStore'

function App() {
  const [userName, setUserName] = useState();

  useEffect(()=>{
    const data = {
      name: "Nithin"
    }
    setUserName(data.name)
  },[])
  return (
    <>
    <Provider store={appStore}>
    <UserContext.Provider value={{loggedInUser : userName}}>
      <Header/>
      <Outlet/>
    </UserContext.Provider>
    </Provider>

    </>
  )
}


export default App
