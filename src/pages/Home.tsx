import { Slider } from "../components/Slider";
import Categories from "../components/Categories";
import { Products } from "../components/Products";
import { Newsletter } from "../components/Newsletter";
import styled from "styled-components";
import { useState } from "react";
import { popularProducts } from "../data";

const Home = () => {
  const [showProducts, setShowProducts] = useState(false);
  const [text, setText] = useState(false);

  const handleClick = () => {
    setShowProducts(!showProducts);
    setText(!text);
  };
  return (
    <>
      <Slider />
      <Categories />
      <Products />
      <Newsletter />
    </>
  );
};

export default Home;
const Button = styled.button`
  padding: 15px;
  margin-bottom: 20px;
  border-radius: 2px;
  border: none;
  outline: none;

  color: #000000;
  font-size: 18px;
`;
const Wrapper = styled.div`
  display: flex;
  justify-content: center;
`;
