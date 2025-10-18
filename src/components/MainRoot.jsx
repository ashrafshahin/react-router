import React from 'react'
import Navbar from './Navbar'
import { Outlet } from 'react-router'

const MainRoot = () => {
  return (
      <div>
          <Navbar />
          <Outlet/>
    </div>
  )
}

export default MainRoot