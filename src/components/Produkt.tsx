import styled from "styled-components";
import { useShopingCart } from "../context/CartContext";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";


type Props = {
  id: number;
  name: string;
  price: number;
  img: string;
};

export const Produkt = ({ id, name, price, img }: Props) => {
  const { increaseCartQty, cartQty, cartItems,getItemQty } = useShopingCart();
  const itemQty = getItemQty(id);
  return (
    <Container>
      <Image className="w-[200px] h-[200px]" src={img} alt="" />
      <Title>
        {name} (${price})
      </Title>
<ProductAmount>
      <ShoppingCartOutlinedIcon
        onClick={() => increaseCartQty(id)}
        sx={{ marginTop: "20px", fontSize: "30px", cursor: "pointer" }}
      />
      <Amount>{itemQty > 0 && <p>({itemQty})</p>}</Amount>
      </ProductAmount>
    </Container>
  );
};

const Image = styled.img`
  width: 200px;
  height: 200px;
  object-fit: cover;
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
  flex-direction: column;
`;
const Title = styled.h1`
  font-size: 20px;
  margin-top: 10px;
`;
const ProductQty = styled.div``;
const Amount = styled.span`
margin-top: 20px;
font-size: 20px;

`;

const ProductAmount = styled.div`
display: flex;
`