import React from 'react'
import styled from 'styled-components'
import { popularProducts } from '../data'
import { Produkt } from './Produkt'

export const LandingProducts = () => {
  return (
    <Container>
        {popularProducts.map(item =>(
            <Produkt {...item}/>
        ))}
    </Container>
  )
}
const Container = styled.div`
 padding: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`