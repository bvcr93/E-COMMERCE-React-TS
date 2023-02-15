import React from 'react'
import styled from 'styled-components'

const Announcment = () => {
  return (
    <Container>
Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, sunt.
    </Container>
  )
}

export default Announcment

const Container = styled.div`
height: 30px;
background-color: teal;
color: white;
display: flex;
align-items: center;
justify-content: center;
font-size: 16px;
font-weight: 500;
@media only screen and (max-width: 600px) {
padding: 20px 30px;
text-align: center;
}

`