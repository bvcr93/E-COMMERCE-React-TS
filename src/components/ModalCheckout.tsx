
import { useState } from "react";
import styled from "styled-components";


const Modal = ({ isOpen, onClose, children }: any) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleClose = () => {
    onClose();
    setIsModalOpen(false);
  };

  if (!isOpen) return null;

  return (
    <ModalWrapper >
      <ModalContent >
        <BtnClose onClick={handleClose}>X</BtnClose>
        {children}
      </ModalContent>
    </ModalWrapper>
  );
};

export default Modal;
const BtnClose = styled.button`
position: absolute;
top: 10px;
right: 10px;
background: none;
border: none;
outline: none;
font-size: 20px;
cursor: pointer;
`
const ModalHeader = styled.div`
  border: 1px solid black;
  height: 20px;
  background-color: aliceblue;

`;
const ModalWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.6);
  display: flex;
  justify-content: center;
  align-items: center;
  
  /* Small screens */
  @media only screen and (max-width: 600px) {
    padding: 0 1rem;
  }
`;
const ModalContent = styled.div`
  background-color: #fff;
  width: 30%;
  height: 90%;
  display: grid;
  grid-template-columns: 1fr ;
  align-items: center;
  justify-content: center;
  overflow-y: scroll;
  position: relative;

  /* Small screens */
  @media only screen and (max-width: 600px) {
    width: 90%;
    height: 80%;
    padding: 1rem;
    overflow-y: auto;
  }
`;
