import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import { createBrowserRouter, RouterProvider } from 'react-router'

import Navbar from './components/Navbar.jsx'
import Home from './components/pages/home/Home.jsx'
import Registration from './components/pages/registration/Registration.jsx'
import LogIn from './components/pages/login/LogIn.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
  },
  {
    path: "/registration",
    element: <Registration/>,
  },
  {
    path: "/login",
    element: <LogIn/>,
  },
  {
    path: "/forgotpassword",
    element: <div>Forgot Password Page</div>,
  },
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    
      <RouterProvider router={router} />
    
    
  </StrictMode>,
)
