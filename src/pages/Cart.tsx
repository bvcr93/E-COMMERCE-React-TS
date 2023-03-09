import { Link } from "react-router-dom";
import styled from "styled-components";
import { useShopingCart } from "../context/CartContext";
import { popularProducts } from "../data";
import Modal from "../components/ModalCheckout";
import { useState } from "react";
import CheckoutDetails from "../components/CheckoutDetails";
import { CartItemComponent } from "../components/CartItem";



export const Cart = () => {
  const { cartItems, cartQty, handleBuy, isConfirmed } = useShopingCart();
  console.log(isConfirmed);

  const total = cartItems.reduce((total, cartItem) => {
    const item = popularProducts.find((i) => i.id === cartItem.id);

    return total + (item?.price || 0) * cartItem.quantity;
  }, 0);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleCheckout = () => {
    setIsModalOpen(true);
  };
  
  const handleClose = () => {
    setIsModalOpen(false);
  };
  return (
    <Container>
      <Wrapper>
        <Title>YOUR BAG</Title>
        <Top>
          <Link to="/products">
            <TopButton>CONTINUE SHOPPING</TopButton>
          </Link>
          <TopTexts>
            <TopText>Shopping Bag {cartQty}</TopText>
            <TopText>Your WishList(0)</TopText>
          </TopTexts>
          <TopButton>CHECKOUT NOW</TopButton>
        </Top>
        <Bottom>
          <Info>
            <Product>
              {cartItems.map((item, index) => (
                <CartItemComponent key={index} {...item} />
              ))}

              <PriceDetail>
                <ProductPrice>Total: ${total}</ProductPrice>
              </PriceDetail>
            </Product>
          </Info>
          <Summary>
            <SummaryTitle>ORDER SUMMARY</SummaryTitle>
            <SummaryItem>
              <SummaryItemText>Subtotal : </SummaryItemText>
              <SummaryItemPrice> ${total}</SummaryItemPrice>
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
              <SummaryItemPrice>$ -6</SummaryItemPrice>
            </SummaryItem>
            <Button onClick={handleCheckout}>CHECKOUT NOW</Button>
          </Summary>
        </Bottom>
      </Wrapper>
      <Modal isOpen={isModalOpen} onClose={handleClose} >


        <CheckoutItem>
          {isConfirmed ? (
            <ConfirmNotification>
              THANKS FOR BUYING FROM US!
            </ConfirmNotification>
          ) : (
            cartItems.map((item) => {
              const product = popularProducts.find((p) => p.id === item.id);
              return (
                <CheckoutDetails
                  key={item.id}
                  id={item.id}
                  quantity={item.quantity}
                  name={product?.name ?? ""}
                />
              );
            })
          )}

          <ConfirmContainer>
            {!isConfirmed && (
              <ConfirmPurchaseButton onClick={() => handleBuy()}>
                BUY
              </ConfirmPurchaseButton>
            )}
          </ConfirmContainer>
        </CheckoutItem>
      </Modal>
    </Container>
  );
};


const ConfirmNotification = styled.div`
  display: flex;
  justify-content: center;
  font-weight: 600;
  font-size: 20px;
`;

const ConfirmPurchaseButton = styled.button`
  width: 50%;
  margin: auto;
  padding: 15px;
  background-color: black;
  color: white;
  margin-bottom: 10px;
  outline: none;
  border: none;
  font-size: 18px;
`;
const ConfirmContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;
const CheckoutItem = styled.div``;
const Container = styled.div`
  padding: 0px 40px;
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
  color: teal;
  @media only screen and (max-width: 600px) {
    margin-bottom: 20px;
  }
`;
const ProductDetail = styled.div`
  flex: 2;
  display: flex;
  @media only screen and (max-width: 600px) {
    margin-top: 20px;
  }
`;
const ProductSize = styled.span``;
const ProductId = styled.span``;
const TopButton = styled.button`
  padding: 10px;
  font-weight: 600;
  cursor: pointer;
  background: black;
  color: white;
  border: none;
`;
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
`;
const Info = styled.div`
  flex: 3;
`;

const TopText = styled.span`
  text-decoration: underline;
  cursor: pointer;
  margin: 0px 10px;
`;
const Image = styled.img`
  width: 250px;
  height: 350px;
  object-fit: cover;
`;
const ProductAmountContainer = styled.div`
  display: flex;
  align-items: center;
  margin: 20px 0px;
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
`;

const SummaryItemText = styled.span``;

const SummaryItemPrice = styled.span``;

const Button = styled.button`
  width: 100%;
  padding: 10px;
  background-color: black;
  color: white;
  font-weight: 600;
  border: none;
`;
