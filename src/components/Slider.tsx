// @ts-nocheck

import styled from "styled-components";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { useState } from "react";
import { sliderItems } from "../data";
import { Link } from "react-router-dom";

interface WrapperProps {
  slideIndex: number;
}


export const Slider = () => {
  const [slideIndex, setSlideIndex] = useState(0);
  const handleClick = (direction: string): void => {
    if (direction === "left") {
      setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2);
    } else {
      setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0);
    }
  };
  return (
    <Container>
      <Arrow dir="left" onClick={() => handleClick("left")}>
        <ArrowBackIcon />
      </Arrow>
      {/* @ts-ignore */}
      <Wrapper slideIndex={slideIndex}>
        {sliderItems.map((item) => (
         <Slide key={item.id}>
              {/* @ts-ignore */}
        <ImgContainer bg={item.img}>
   
  <Image>

    <img  src={item.img} alt="" /> 
  </Image>
</ImgContainer>
         <InfoContainer>
           <Title>{item.title}</Title>
           <Desc>{item.desc}</Desc>
           <Link to="/products">
             <Button>SHOP NOW</Button>
           </Link>
         </InfoContainer>
       </Slide>
       
        ))}
        <Slide>
          <ImgContainer>
            <Image>
              <img
                className="img"
                src="https://images.unsplash.com/photo-1492581654245-5a258fbbecce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=766&q=80"
                alt=""
              />
            </Image>
          </ImgContainer>

          <InfoContainer>
            <Title>WINTER SALE</Title>
            <Desc>
              {" "}
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis,
              magnam.
            </Desc>
            <Button>SHOP NOW</Button>
          </InfoContainer>
        </Slide>
      </Wrapper>
      <Arrow dir="right" onClick={() => handleClick("right")}>
        <ArrowForwardIcon />
      </Arrow>
    </Container>
  );
};
const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  position: relative;
  overflow: hidden;
  @media only screen and (max-width: 600px) {
    display: none;
  }
`;

const Arrow = styled.div`
  width: 50px;
  height: 50px;
  background-color: #f7d7d7;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  bottom: 0;
  margin: auto;
  left: ${(props) => props.dir === "left" && "10px"};
  right: ${(props) => props.dir === "right" && "10px"};
  cursor: pointer;
  opacity: 0.5;
  z-index: 2;
`;
const Wrapper = styled.div<WrapperProps>`
  height: 100%;
  display: flex;

  transform: translateX(${(props) => props.slideIndex * -100}vw);
  transition: all 1s ease;
`;

const Slide = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  width: 100vw;
  height: 100vh;
`;

const ImgContainer = styled.div`
  flex: 1;
  
  height: 100%;
  position: relative;
  overflow: hidden;
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: url(${(props) => props.bg});
    background-size: cover;
    object-fit: cover;
    filter: brightness(30%) blur(3px);
    z-index: -1;
  }
`;
 // @ts-ignore
const Image = styled.div`
  height: 100%;
  background: url(${(props) => props.src}); 
  object-fit: cover;

`;

const InfoContainer = styled.div`
 position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
`;

const Title = styled.h1`
  font-size: 70px;
  color: white;

`;

const Desc = styled.p`
  margin: 50px 0px;
  font-size: 20px;
  letter-spacing: 3px;
  text-transform: uppercase;
  color: white;
`;

const Button = styled.button`
  padding: 10px;
  font-size: 20px;
  background-color: transparent;
  cursor: pointer;
  border: 2px solid #fff;
  color: #fff;
  &:hover {
    background-color: black;
    border-color: black;
  }
`;