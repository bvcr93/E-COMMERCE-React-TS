import styled from "styled-components";
import { categories } from "../data";
import { CategoryItem } from "./CategoryItem";

const Categories = () => {
  return (
    <Container>
      {categories.map((item) => (
        <CategoryItem key={item.id} item={item} />
      ))}
    </Container>
  );
};

export default Categories;

const Container = styled.div`
  display: flex;
  padding: 20px;
  justify-content: space-between;
  @media only screen and (max-width: 600px) {
    padding: 0px;
    flex-direction: column;
  }
`;
