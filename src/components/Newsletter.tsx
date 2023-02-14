import styled from "styled-components";
import SendIcon from "@mui/icons-material/Send";

export const Newsletter = () => {
  return (
    <Container>
      <Title>Newsletter</Title>
      <Desc>Get timely udpates from your favourite products</Desc>
      <InputContainer>
        <Input placeholder="Your email"/>
        <Button>
          <SendIcon />
        </Button>
      </InputContainer>
    </Container>
  );
};
const Container = styled.div`
height: 30vw;
background-color: #fbecec;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
@media only screen and (max-width: 600px) {
height: 300px;
  }
`;
const Desc = styled.div`
font-size: 24px;
font-weight: 300;
margin-bottom: 20px;
@media only screen and (max-width: 600px) {
text-align: center;

  }
`;
const Title = styled.h1`
font-size: 70px;
margin-bottom: 20px;
`;
const InputContainer = styled.div`
width: 50%;
height: 40px;
background-color: white;
display: flex;
justify-content: space-between;
border: 1px solid lightgray;
@media only screen and (max-width: 600px) {
width: 80%;
  }
`;
const Button = styled.button`
flex: 1;
border: none;
background-color: teal;
color: white;
`;
const Input = styled.input`
border: none;
flex: 8;
outline: none;
padding-left:20px;

`;
