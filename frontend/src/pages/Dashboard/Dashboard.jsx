import React from 'react'
import LandingPage from '../LandingPage/LandingPage'
import { Outlet } from 'react-router-dom'

function Dashboard() {
  return (
    <>
    {/* <LandingPage/> */}
    <Outlet/>
    </>
  )
}

export default Dashboard