import styled from "styled-components";

export const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.3);
  display: flex;
  align-items: center;
  z-index: 33;
  justify-content: center;
 
  #modal {
    background: var(--mainWhite);
    margin-top: 2.5rem;
  }
`;