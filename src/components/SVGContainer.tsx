import React from 'react'
import styled from 'styled-components'
import CheckroomIcon from '@mui/icons-material/Checkroom';
import LocalPostOfficeIcon from '@mui/icons-material/LocalPostOffice';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
type Props = {}

const SVGContainer = (props: Props) => {
  return (
    <Container>
        <Card>

            <CheckroomIcon sx = {{fontSize:"150px", color:"gray"}}/>
            <Title>Try it on the first occasion</Title>
        </Card>
        <Card>
        <LocalPostOfficeIcon sx = {{fontSize:"150px", color:"gray"}}/>
        <Title>Dont hesitate to email us!</Title>
        </Card>
        <Card>
        <LocalShippingIcon sx = {{fontSize:"150px", color:"gray"}}/>
        <Title>Fast delivery!</Title>
        </Card>
    </Container>
  )
}

export default SVGContainer

const Container = styled.div`
height: 20vw;
display: flex;
  padding: 20px;
  justify-content: space-between;
`
const Card = styled.div`
flex: 1;
margin: 10px;
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
background-color: #c9e0f9;
border-radius: 20px;
&:hover {
background-color: #a8c8fb;
transition: ease-in 0.3s;
}
`

const Title = styled.h1`
font-size: 25px;
font-weight: 300;
margin-top: 10px;
color: #404040;
`