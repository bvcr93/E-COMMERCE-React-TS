
import styled from "styled-components";
import { useShopingCart } from "../context/CartContext";
import { popularProducts } from "../data";
import RemoveCircleOutlineOutlinedIcon from "@mui/icons-material/RemoveCircleOutlineOutlined";
import AddCircleOutlineOutlinedIcon from "@mui/icons-material/AddCircleOutlineOutlined";
import DeleteIcon from "@mui/icons-material/Delete";
type Props = {
  id: number;
  name: string
};

export const CartItemComponent = ({ id, name }: Props) => {
  const { decreaseCartQty, increaseCartQty, removeFromCart } = useShopingCart();
  const item = popularProducts.find((item) => item.id === id);

  return (
    <Container>
      <ItemInfo>
   
      <p>{item?.name}</p>
      </ItemInfo>
    
      <Image src={item?.img} alt="" />
      <ButtonContainer>
        <RemoveCircleOutlineOutlinedIcon
          onClick={() => decreaseCartQty(id)}
          sx={{ fontSize: "28px" }}
        />
        <AddCircleOutlineOutlinedIcon
          onClick={() => increaseCartQty(id,name)}
          sx={{ fontSize: "28px" }}
        />
      </ButtonContainer>
      <DeleteIcon
        sx={{ marginTop: "10px", fontSize: "30px", cursor: "pointer" }}
        onClick={() => removeFromCart(id)}
      >
        remove
      </DeleteIcon>
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

const ItemInfo = styled.div`
display: flex;
font-size: 20px;
align-items: center;
justify-content: center;

`
