import React from "react";
import styled from "styled-components";
import { useShopingCart } from "../context/CartContext";
import { popularProducts } from "../data";
type Props = {
  id: number;
  
};

export const CartItem = ({ id }: Props) => {
  const { decreaseCartQty, cartItems } = useShopingCart();
  const item = popularProducts.find((item) => item.id === id);

  return (
    <Container>
      <span>{item?.price}</span>
      <Image src={item?.img} alt="" />

      <button onClick={() => decreaseCartQty(id)}>REMOVE</button>
    </Container>
  );
};
const Container = styled.div`

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const Image = styled.img`
  width: 200px;
  height: 200px;
`;

const Details = styled.div``;
