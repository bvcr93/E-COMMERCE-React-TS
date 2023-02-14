import React from "react";
import styled from "styled-components";
import SearchIcon from "@mui/icons-material/Search";
import { Badge } from "@mui/material";
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { Link } from "react-router-dom";

const Navbar = () => {


  return (
    <Container className="flex flex-col">
      <Wrapper  >
        <Left>
          <Language>EN</Language>
          <SearchContainer >
            <Input className="md:w-full w-[50px]  " placeholder="Search"/>
            <SearchIcon style={{ color: "gray", fontSize: 20 }} />
          </SearchContainer>
        </Left>
        <Center>
          <Link to="/">
          <Logo className="md:flex flex-col  md:w-full w-[40px] md:text-4xl text-xl ml-10  ">BVCR</Logo>
          </Link>
        </Center>
        <Right className=" justify-center text-sm flex-2 ">
         
          <Link to="/login">
          <MenuItem>SIGN IN</MenuItem>
          </Link>
          <MenuItem>
          <Link to = "/cart">
            <Badge   color="primary">
              <ShoppingCartOutlinedIcon />
            </Badge>
            </Link>
          </MenuItem>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;

const Input = styled.input`
  border: none;
  outline: none;

`;

const Container = styled.div`
  height: 60px;

`;

const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media only screen and (max-width: 600px) {

  }
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
`;
const Right = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end ;
  align-items: center;
  @media only screen and (max-width: 600px) {
display: none
  }
`;
const Logo = styled.h1`
  font-weight: bold;
  color: black;

`;

const MenuItem = styled.div`
  font-size: 16px;
  cursor: pointer;
  margin-left: 25px;
  color: black;
  text-decoration: none;
`;
