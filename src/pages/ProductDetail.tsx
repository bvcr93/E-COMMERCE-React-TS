import styled from "styled-components";
import { useParams } from "react-router-dom";
import { popularProducts } from "../data";
import { useShopingCart } from "../context/CartContext";

type StoreItemProps = {
  itemId: number;
};

export const Product = ({ itemId }: StoreItemProps) => {
  const { id } = useParams();
  const items = popularProducts.find((item) => item.id.toString() === id);
  const { increaseCartQty } = useShopingCart();
  console.log("items in cart", items);

  return (
    <Container>
      <Wrapper>
        <ImgContainer>
          <Image src={items?.img} />
        </ImgContainer>
        <InfoContainer>
          <Title>{items?.name}</Title>
          <Desc>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
            venenatis, dolor in finibus malesuada, lectus ipsum porta nunc, at
            iaculis arcu nisi sed mauris. Nulla fermentum vestibulum ex, eget
            tristique tortor pretium ut. Curabitur elit justo, consequat id
            condimentum ac, volutpat ornare.
          </Desc>
          <Price>${items?.price}</Price>
          <FilterContainer>
            <Filter>
              <FilterTitle>Color</FilterTitle>
              <FilterColor color="black" />
              <FilterColor color="darkblue" />
              <FilterColor color="gray" />
            </Filter>
            <Filter>
              <FilterTitle>Size</FilterTitle>
              <FilterSize>
                <FilterSizeOption>XS</FilterSizeOption>
                <FilterSizeOption>S</FilterSizeOption>
                <FilterSizeOption>M</FilterSizeOption>
                <FilterSizeOption>L</FilterSizeOption>
                <FilterSizeOption>XL</FilterSizeOption>
              </FilterSize>
            </Filter>
          </FilterContainer>
          <AddContainer>
            <AmountContainer>
              <ButtonClick>-</ButtonClick>
              <Amount>1</Amount>
              <ButtonClick>+</ButtonClick>
            </AmountContainer>
            <Button onClick={() => increaseCartQty(itemId)}>ADD TO CART</Button>
          </AddContainer>
        </InfoContainer>
      </Wrapper>
    </Container>
  );
};
const Container = styled.div``;
const Image = styled.img`
  object-fit: cover;
  height: 70vh;
  @media only screen and (max-width: 600px) {
    height: 60vh;
  }
`;
const ImgContainer = styled.div`
  flex: 1;
  @media only screen and (max-width: 600px) {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
const Wrapper = styled.div`
  padding: 50px;
  display: flex;
  @media only screen and (max-width: 600px) {
    padding: 10px;
    flex-direction: column;
  }
`;
const InfoContainer = styled.div`
  flex: 1;
  padding: 0px 50px;
  margin-top: 100px;
  @media only screen and (max-width: 600px) {
    padding: 10px;
  }
`;
const Desc = styled.p`
  margin: 20px 0px;
  line-height: 1.2;
  font-size: 18px;
  font-weight: lighter;
  color: #656565;
  @media only screen and (max-width: 600px) {
    margin-bottom: 40px;
  }
`;
const Price = styled.span`
  font-size: 40px;
`;
const Title = styled.h1`
  font-weight: 200;
`;
const FilterContainer = styled.div`
  width: 50%;
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
  @media only screen and (max-width: 600px) {
    width: 100%;
  }
`;

const Filter = styled.div`
  display: flex;
  align-items: center;
`;

const FilterTitle = styled.span`
  font-size: 20px;
`;

const FilterColor = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
  margin: 0px 5px;
  cursor: pointer;
`;

const FilterSize = styled.select`
  margin-left: 10px;
  padding: 5px;
`;

const FilterSizeOption = styled.option``;
const AddContainer = styled.div`
  display: flex;
  align-items: center;
  width: 50%;
  justify-content: space-between;
  @media only screen and (max-width: 600px) {
    width: 100%;
  }
`;
const AmountContainer = styled.div`
  display: flex;
  align-items: center;
  font-weight: 600;
`;
const Amount = styled.span`
  width: 30px;
  height: 30px;
  border-radius: 10px;
  border: 1px solid teal;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0px 5px;
`;
const Button = styled.button`
  padding: 10px;
  border: 1px solid teal;
  background-color: white;
  cursor: pointer;
  font-weight: 500;

  &:hover {
    background-color: aliceblue;
  }
`;
const ButtonClick = styled.button`
  padding: 10px;

  border: none;
  border-radius: 10px;
`;
