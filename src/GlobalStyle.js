import styled, { createGlobalStyle } from "styled-components";

const  GlobalStyle=createGlobalStyle`
:root {
  --mainBlue: #2a2a72;
  --lightBlue: #009ffd;
  --mainWhite: #f3f3f3;
  --mainDark: #232528;
  --mainYellow: #ffa400;
}
*,
::after,
::before {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body {
  font-family: "Oswald", sans-serif !important;
  background: var(--mainWhite) !important;
  color: var(--mainDark) !important;
}

a {
  text-decoration: none;
}
ul{
  list-style: none;
}

`
export const ButtonContainer = styled.button`
  text-transform: capitalize;
  font-size: 1.4rem;
  background: transparent;
  border: 0.05rem solid var(--lightBlue);
  color: ${({primary})=>(primary?'var(--mainYellow)':'var(--lightBlue)')};

  border-color: ${({primary})=>(primary?'var(--mainYellow)':'var(--lightBlue)')};
  border-radius: 0.5rem;
  padding: 0.2rem 0.5rem;
  outline-color: red;
  cursor: pointer;
  display: inline-block;
  margin: 0.2rem 0.5rem 0.2rem 0;
  transition: all 0.5s ease-in-out;
  &:hover {
    
    background: ${({primary})=>(primary?'var(--mainYellow)':'var(--lightBlue)')};

    color: var(--mainBlue);
  }
  &:focus {
    outline: none;
  }
`;

export default GlobalStyle