import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import { createBrowserRouter, RouterProvider } from 'react-router'

import MainRoot from './components/MainRoot.jsx'

import Navbar from './components/Navbar.jsx'
import Home from './components/pages/home/Home.jsx'
import Registration from './components/pages/registration/Registration.jsx'
import LogIn from './components/pages/login/LogIn.jsx'

import About from './components/pages/About.jsx'
import Services from './components/pages/Services.jsx'

const routerS = createBrowserRouter([
  {
    path: "/",
    Component: MainRoot,
    children: [
      { index: true, Component: Home },
      { path: '/about', Component: About },
      { path: '/services', Component: Services },
      { path: '/registration', Component: Registration },
      { path: '/login', Component: LogIn },
      
      
      
    
    ]
  }

])
  //---- one way of doing this routing ---- ///
  //   {
//     path: "/",
//     element: <Home/>,
//   },
//   {
//     path: "/registration",
//     element: <Registration/>,
//   },
//   {
//     path: "/login",
//     element: <LogIn/>,
//   },
//   {
//     path: "/forgotpassword",
//     element: <div>Forgot Password Page</div>,
//   },
  // 



createRoot(document.getElementById('root')).render(
  <StrictMode>
    
      <RouterProvider router={routerS} />
    
    
  </StrictMode>,
)
