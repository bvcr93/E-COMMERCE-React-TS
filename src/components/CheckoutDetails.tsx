import React, { useState } from "react";
import styled from "styled-components";
import { popularProducts } from "../data";

type Props = {
  name: string;
  id: number;
  quantity: number;
};

const CheckoutDetails = ({ name, quantity, id }: Props) => {
  const item = popularProducts.find((item) => item.id === id);
  return (
    <Wrapper>
      <>
        <ItemInfo>
          <ItemName>{name}</ItemName>
          <ItemQuantity>
            Qty: {quantity}
            <Image src={item?.img} alt="" />
          </ItemQuantity>
        </ItemInfo>
      </>
    </Wrapper>
  );
};

export default CheckoutDetails;

const Wrapper = styled.div`
  padding: 30px;
  margin-bottom: 10px;
`;

const ItemInfo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const ItemName = styled.span`
  font-weight: bold;
  font-size: 20px;
`;

const ItemQuantity = styled.span`
  font-size: 16px;
  color: #666;
`;

const Image = styled.img`
  width: 100px;
  height: 100px;
`;

const ConfirmButton = styled.button`
  width: 50%;

  background-color: black;
  color: white;
  padding: 5px;
  border: none;
  outline: none;
  font-size: 20px;
  cursor: pointer;
`;
