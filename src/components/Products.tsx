import styled from "styled-components";
import { popularProducts } from "../data";
import { Product } from "./HoverIcons";

export const Products = () => {
  return (
    <Container>
      {popularProducts.map((item) => (
        <Product item={item} key={item.id} id={0} />
      ))}
    </Container>
  );
};
const Container = styled.div`
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  @media only screen and (max-width: 600px) {
    padding: 20px;
  }
`;
