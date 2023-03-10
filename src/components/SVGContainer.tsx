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

                <CheckroomIcon sx={{ fontSize: "150px", color: "gray" }} />
                <Title>Try it on the first occasion</Title>
            </Card>
            <Card>
                <LocalPostOfficeIcon sx={{ fontSize: "150px", color: "gray" }} />
                <Title>Dont hesitate to email us!</Title>
            </Card>
            <Card>
                <LocalShippingIcon sx={{ fontSize: "150px", color: "gray" }} />
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
  @media only screen and (max-width: 900px) {
height: 100vh;
display: flex;
flex-direction: column;
  }
`
const Card = styled.div`
flex: 1;
margin: 10px;
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
background-color: #fdfdfd;
border-radius: 20px;
border: 1px solid lightgray;
&:hover {
background-color: #bfd6fb;
transition: ease-in 0.3s;

}
`

const Title = styled.h1`
font-size: 25px;
font-weight: 300;
margin-top: 10px;
color: #404040;
`