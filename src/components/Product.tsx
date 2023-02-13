import React from 'react'
import styled from 'styled-components'
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
export const Product = ({item}:any) => {
  return (
    <Container>

        <Circle/>
        <Image src =  {item.img}/> 
        <Info>
<Icon>
    <ShoppingCartOutlinedIcon/>
</Icon>
<Icon>
<SearchOutlinedIcon/>
</Icon>
<Icon>
<FavoriteBorderOutlinedIcon/>
</Icon>
        </Info>
    </Container>
  )
}
const Container = styled.div`
flex: 1;
margin: 5px;
min-width: 280px;
height: 350px;

`
const Image = styled.img`
height: 75%;
`
    
const Info = styled.div``

const Circle = styled.div``
const Icon = styled.div``