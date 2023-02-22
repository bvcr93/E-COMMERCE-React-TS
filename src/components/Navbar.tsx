import styled from "styled-components";
import SearchIcon from "@mui/icons-material/Search";
import { Badge } from "@mui/material";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { Link } from "react-router-dom";
import { useShopingCart } from "../context/CartContext";

const Navbar = () => {
  const { cartQty } = useShopingCart();

  return (
  
      <Wrapper>
        <Left>
          <Language>EN</Language>
          <SearchContainer>
            <Input placeholder="Search" />
            <SearchIcon style={{ color: "gray", fontSize: 20 }} />
          </SearchContainer>
        </Left>
        <Center>
          <Link to="/" style={{ textDecoration: 'none' }}>
            <Logo>BVCR</Logo>
          </Link>
        </Center>
        <Right>
          <Link to="/login" style={{ textDecoration: 'none' }}>
            <MenuItem>SIGN IN</MenuItem>
          </Link>
          <MenuItem>
            <Link to="/cart" style={{ textDecoration: 'none' }}>
              <Badge sx={{ color: "black" }}>
                <ShoppingCartOutlinedIcon />
                {cartQty}
              </Badge>
            </Link>
          </MenuItem>
        </Right>
      </Wrapper>

  );
};

export default Navbar;

const Input = styled.input`
  border: none;
  outline: none;
`;

const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;

`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

const Language = styled.span`
  font-size: 14px;
  cursor: pointer;
`;

const SearchContainer = styled.div`
  border: 1px solid lightgray;
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 5px;
`;

const Center = styled.div`
  text-align: center;
  flex: 1;

  @media only screen and (max-width: 600px) {
    display: none;
  }
`;
const Right = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;
const Logo = styled.h1`
  font-weight: bold;
  color: black;
  text-decoration: none;
`;

const MenuItem = styled.div`
  font-size: 16px;
  cursor: pointer;
  margin-left: 25px;
  color: black;
  text-decoration: none;
`;
