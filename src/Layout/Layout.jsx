import React from 'react'
import Navpar from '../components/Navepar/Navpar'
import { Outlet } from 'react-router-dom'
import Footre from '../components/Footer/Footre'

export default function Layout() {
  return (
    <>
        <Navpar/>
        <Outlet/>
        <Footre/>
    </>
  )
}
