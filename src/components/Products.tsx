import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { popularProducts } from '../data'
import { Product } from './SingleProduct'
export const Products = () => {
  return (
    <Container>
      {popularProducts.map((item) => (
<Link to ={`/product/${item.id}`}>
        <Product item = {item} key= {item.id}/>
        </Link>
    ))}</Container>
  )
}
const Container = styled.div`
padding: 20px;
display: flex;
flex-wrap: wrap;
justify-content: space-between;
@media only screen and (max-width: 600px) {
padding: 20px;
flex-direction: column;
  }
`