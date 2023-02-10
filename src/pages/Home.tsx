import React from 'react'
import Navbar from '../components/Navbar'
import styled from "styled-components"
import Announcment from '../components/Announcment'
import { Slider } from '../components/Slider'



const Home = () => {
    return (
        <>
  <Announcment/>
            <Navbar />
            <Slider/>
            </>
   
    )
}

export default Home

