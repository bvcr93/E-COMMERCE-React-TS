import styled from "styled-components";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

export const Slider = () => {
  return (
    <Container>
      <Arrow dir="left">
        <ArrowBackIcon />
      </Arrow>
      <Wrapper>
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
            <Title>SUMMER SALE</Title>
            <Desc>
              {" "}
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis,
              magnam.
            </Desc>
            <Button>SHOP NOW</Button>
          </InfoContainer>
        </Slide>
      </Wrapper>
      <Arrow dir="right">
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
`;

const Arrow = styled.div`
  width: 50px;
  height: 50px;
  background-color: #fff7f7;
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
`;
const Wrapper = styled.div`
  height: 100%;
`;

const Slide = styled.div`
  display: flex;
  align-items: center;
  width: 100vw;
  height: 100vh;
`;
const ImgContainer = styled.div`
  flex: 1;
  height: 100%;
`;
const InfoContainer = styled.div`
  flex: 1;
  padding: 50px;
`;
const Title = styled.h1`
  font-size: 70px;
`;
const Desc = styled.p``;
const Button = styled.button``;

const Image = styled.image`
  height: 80%;
`;
