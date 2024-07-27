import React, { Children } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {createBrowserRouter, RouterProvider} from "react-router-dom"
import Error from "./components/Error.jsx"
import About from "./components/About.jsx"
import Home from './components/Home.jsx'
import Contact from './components/Contact.jsx'
import RestaurantData from './components/RestaurantData.jsx'
// import Grocery from './Grocery.jsx'
import { lazy, Suspense } from 'react'
import Cart from './components/Cart.jsx'


const Grocery = lazy(()=> import('./components/Grocery.jsx'))


const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    errorElement : <Error/>,
    children : [
      {
        path: "",
        element: <Home/>
      },
      {
        path:"/about",
        element : <About/>
      },
      {
        path:"/contact",
        element : <Contact/>
      },
      {
        path:"/cart",
        element : <Cart/>
      },
      {
        path:"/grocery",
        element : <Suspense fallback={<h1>Hello</h1>}><Grocery/></Suspense>
      },
      {
        path:"/restaurant/:resId",
        element : <RestaurantData/>
      }

    ]
  }
  
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
