import React from 'react'
import { Outlet } from 'react-router-dom'
import { Footer } from './Footer'
import Navbar from './Navbar'

export const SharedLayout = () => {
  return (
   <>
   <Navbar id={0}/>
   <Outlet/>
   <Footer/>
   </>
  )
}
