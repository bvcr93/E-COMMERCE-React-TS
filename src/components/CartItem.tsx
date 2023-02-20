import React from "react";
import styled from "styled-components";
import { useShopingCart } from "../context/CartContext";
import { popularProducts } from "../data";
import RemoveCircleOutlineOutlinedIcon from "@mui/icons-material/RemoveCircleOutlineOutlined";
import AddCircleOutlineOutlinedIcon from "@mui/icons-material/AddCircleOutlineOutlined";
import DeleteIcon from '@mui/icons-material/Delete';
type Props = {
  id: number;
};

export const CartItem = ({ id }: Props) => {
  const { decreaseCartQty, increaseCartQty, cartItems, removeFromCart } = useShopingCart();
  const item = popularProducts.find((item) => item.id === id);

  return (
    <Container>
      <span>${item?.price}</span>
      <Image src={item?.img} alt="" />
      <ButtonContainer>
        <RemoveCircleOutlineOutlinedIcon
          onClick={() => decreaseCartQty(id)}
          sx={{ fontSize: "28px" }}
        />
        <AddCircleOutlineOutlinedIcon
          onClick={() => increaseCartQty(id)}
          sx={{ fontSize: "28px" }}
        />
      </ButtonContainer>
      <DeleteIcon sx = {{marginTop: "10px", fontSize:"30px", cursor:"pointer"}} onClick={() => removeFromCart(id)}>remove</DeleteIcon >
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
const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-around;
  width: 50%;
  margin-top: 10px;
  color: #434343;
`;
