import { Add, Remove } from "@mui/icons-material";
import styled from "styled-components";

export const Cart = () => {
  return (
    <Container>
      <Wrapper>
        <Title>YOUR BAG</Title>
        <Top>
          <TopButton>CONTINUE SHOPPING</TopButton>
          <TopTexts>
            <TopText>Shopping Bag(2)</TopText>
            <TopText>Your WishList(0)</TopText>
          </TopTexts>
          <TopButton type="filled">CHECKOUT NOW</TopButton>
        </Top>
        <Bottom>
          <Info>
            <Product>
              <ProductDetail>
                <Image src = "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=736&q=80"/>
                <Details>
                  <ProductName>
                    <b>Product:</b> JESSIE THUNDER SHOES
                  </ProductName>
                  <ProductId>
                    <b>ID:</b> 93813718293
                  </ProductId>
                  <ProductColor color="black" />
                  <ProductSize>
                    <b>Size:</b> 37.5
                  </ProductSize>
                </Details>
              </ProductDetail>
              <PriceDetail>
                <ProductAmountContainer>
                <Add/> 
                <ProductAmount>2</ProductAmount>
                <Remove/>
                </ProductAmountContainer>
                <ProductPrice>$30</ProductPrice>
              </PriceDetail>
            </Product>
          </Info>
          <Summary>
            <SummaryTitle>ORDER SUMMARY</SummaryTitle>
            <SummaryItem>
              <SummaryItemText>Subtotal</SummaryItemText>
              <SummaryItemPrice>$80</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Estimated Shipping</SummaryItemText>
              <SummaryItemPrice>$ 6</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Shipping Discount</SummaryItemText>
              <SummaryItemPrice>$ -6</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText type = "total">Total</SummaryItemText>
              <SummaryItemPrice>$ -6</SummaryItemPrice>
            </SummaryItem>
            <Button>CHECKOUT NOW</Button>
          </Summary>
        </Bottom>
      </Wrapper>
    </Container>
  );
};
const Container = styled.div`
  padding: 20px;
`;
const ProductName = styled.span``;
const Wrapper = styled.div`
padding: 20px;
@media only screen and (max-width: 600px) {
padding: 10px;
  }
`;

const Title = styled.h1`
  font-weight: 300;
  text-align: center;
`;
const Details = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;
const Top = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
padding: 20px;
`;
const ProductPrice = styled.div`
  font-size: 30px;
  font-weight: 200;
  @media only screen and (max-width: 600px) {
margin-bottom: 20px;
  }
  
`;
const ProductDetail = styled.div`
  flex: 2;
  display: flex;
`;
const ProductSize = styled.span``;
const ProductId = styled.span``;
const TopButton = styled.button`
padding: 10px;
font-weight: 600;
cursor: pointer;
border: ${props => props.type === "filled" && "none"};
background-color: ${props => props.type === "filled" ? "black" : "transparent"};
color: ${props => props.type === "filled" && "white"};
`
const ProductAmount = styled.div`
  font-size: 24px;
  margin: 5px;
  @media only screen and (max-width: 600px) {
margin: 5px 15px;
  }

`;
const ProductColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
`;
const Product = styled.div`
  display: flex;
  justify-content: space-between;
  @media only screen and (max-width: 600px) {
flex-direction: column;
  }
`;

const Bottom = styled.div`
display: flex;
justify-content: space-between;
@media only screen and (max-width: 600px) {
flex-direction: column;
  }
`;

const TopTexts = styled.div`
  @media only screen and (max-width: 600px) {
display: none;
  }
`
const Info = styled.div`
flex: 3;

`

const TopText = styled.span`
text-decoration: underline;
cursor: pointer;
margin: 0px 10px;
`
const Image = styled.img`
  width: 200px;
`;
const ProductAmountContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

const PriceDetail = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Summary = styled.div`
  flex: 1;
  border: 0.5px solid lightgray;
  border-radius: 10px;
  padding: 20px;
  height: 50vh;
`;
const SummaryTitle = styled.h1`
  font-weight: 200;
`;

const SummaryItem = styled.div`
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
  font-weight: ${(props) => props.type === "total" && "500"};
  font-size: ${(props) => props.type === "total" && "24px"};
`;

const SummaryItemText = styled.span``;

const SummaryItemPrice = styled.span``;

const Button = styled.button`
  width: 100%;
  padding: 10px;
  background-color: black;
  color: white;
  font-weight: 600;

`;