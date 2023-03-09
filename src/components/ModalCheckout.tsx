import React from "react";
import styled from "styled-components";

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
`;

const ModalContent = styled.div`
  background-color: #fff;
  width: 30%;
  height: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Modal = ({ isOpen, onClose, children }: any) => {
  if (!isOpen) return null;
  return (
    <ModalWrapper  onClick={onClose}>
       
      <ModalContent>
        {children}
   
       <CheckoutItem>

       </CheckoutItem>
      </ModalContent>
    </ModalWrapper>
  );
};

export default Modal;


const CheckoutItem = styled.div`

`