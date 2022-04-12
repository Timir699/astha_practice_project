import React, { SyntheticEvent, useEffect, useRef, useState } from 'react';
import ReactDOM from "react-dom";
import styled from "styled-components";
type Props = {
  show: boolean;
  onClose: Function;
  children: any;
  title: string;
}
const Modal = ({ show, onClose, children, title } : Props) => {

  const [isBrowser, setIsBrowser] = useState<boolean>(false);
  
    useEffect(() => {
      setIsBrowser(true);
    }, []);

    const handleCloseClick = (e: SyntheticEvent ) => {
      e.preventDefault();
      onClose();
    };

    const modalContent = show ? (
      <StyledModalOverlay>
        <StyledModal>
          <StyledModalHeader>
            <a href="#" onClick={handleCloseClick}>
              x
            </a>
          </StyledModalHeader>
          {title && <h1 className="text-2xl text-center">{title}</h1>}
          <StyledModalBody className="text-2xl">{children}</StyledModalBody>
        </StyledModal>
      </StyledModalOverlay>
    ) : null;

    if (isBrowser) {
        return ReactDOM.createPortal(
            modalContent,
            document.getElementById("modal-root")!
        );
      } else {
        return null;
      }    
};
const StyledModalBody = styled.div`
  padding-top: 10px;
`;

const StyledModalHeader = styled.div`
  display: flex;
  justify-content: flex-end;
  font-size: 25px;
`;

const StyledModal = styled.div`
  background: white;
  width: 500px;
  height: 600px;
  border-radius: 15px;
  padding: 15px;
`;
const StyledModalOverlay = styled.div`
  position: fixed;
  inset: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.7);
  overflow: hidden;
  z-index: 999;
`;

export default Modal;