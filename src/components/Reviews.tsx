import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { reviews } from '../data';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const Reviews = () => {
  const [index, setIndex] = useState(0);
  const { name, job, image, text } = reviews[index];

  
useEffect(() => {

},[index])
const handlePrevClick = () => {
  setIndex((index - 1 + reviews.length) % reviews.length);
};

const handleNextClick = () => {
  setIndex((index + 1) % reviews.length);
};
  

  return (
    <Container >
      <Title>What Our Customers Are Saying</Title>
      <Slider >
        <ArrowBackIcon onClick={handlePrevClick} sx = {{cursor: "pointer"}} />
        <ReviewWrapper>
          <Image src={image} />
          <Content>
            <Name>{name}</Name>
            <Job>{job}</Job>
            <Text>{text}</Text>
          </Content>
        </ReviewWrapper>
        <ArrowForwardIcon onClick={handleNextClick} sx = {{cursor: "pointer"}} />
      </Slider>
    </Container>
  );
};

const Container = styled.div`
  height: 60vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #d0e1ff ;
  padding: 30px;
 
`;

const Title = styled.h2`
  font-size: 32px;
  margin-bottom: 30px;
  color: #333;
  @media only screen and (max-width: 600px) {
font-size: 25px;
font-weight: 100;
  }
`;

const Slider = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  max-width: 900px;

`;

const ReviewWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-grow: 1;
  margin: 0 50px;
  padding: 20px;
  background-color: #fff;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  border-radius: 10px;

`;

const Image = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  object-fit: cover;
  margin-right: 20px;
`;

const Content = styled.div`
  flex-grow: 1;

`;

const Name = styled.p`
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 5px;
`;

const Job = styled.p`
  font-size: 14px;
  color: #999;
  margin-bottom: 10px;
`;

const Text = styled.p`
  font-size: 20px;
  line-height: 1.5;
  padding: 10px;
  color: #4e4e4e;
`;

export default Reviews;
