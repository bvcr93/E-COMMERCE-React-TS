import styled from "styled-components";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import { useContext } from "react";
import { CartContext, useShopingCart } from "../context/CartContext";
import { Link } from "react-router-dom";
type StoreItemProps = {
  id: number;
  item: any;
};
export const Product = ({ id, item }: StoreItemProps) => {
  const { increaseCartQty } = useShopingCart();

  return (
    <>
      <Container>
        <Image src={item.img} />
        <Info>
          <Icon>
            <ShoppingCartOutlinedIcon onClick={() => increaseCartQty(id)} />
          </Icon>
          <Icon>
            <Link to={`/product/${item.id}`}>
              <SearchOutlinedIcon />
            </Link>
          </Icon>
          <Icon>
            <FavoriteBorderOutlinedIcon />
          </Icon>
          <CartQty></CartQty>
        </Info>
      </Container>
    </>
  );
};
const Info = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.2);
  z-index: 3;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: all 0.5s ease;
  cursor: pointer;
`;

const Container = styled.div`
  flex: 1;
  margin: 5px;
  min-width: 300px;
  height: 350px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #ddf6fe;
  position: relative;
  &:hover ${Info} {
    opacity: 1;
  }
`;

const CartQty = styled.div`
  display: flex;
  position: absolute;
  bottom: 30%;
  left: 50;
  color: white;
  font-size: 18px;
`;
const Image = styled.img`
  height: 75%;
  z-index: 2;
`;

const Icon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px;
  transition: all 0.3s ease;

  &:hover {
    background-color: #d9e5f8;
    transform: scale(1.1);
  }
`;
