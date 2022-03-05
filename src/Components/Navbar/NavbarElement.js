import { FaCartPlus } from "react-icons/fa";
import { Link } from "react-router-dom";
import styled, { css } from "styled-components";
import { ButtonContainer } from "../../GlobalStyle";

export const Nav=styled.nav`
  background: var(--mainBlue);
position: sticky;
top: 0;
width: 100%;
padding:1rem 0;
z-index:87878;


`
export const NavContainer=styled.div`
width: 80%;
margin: auto;
display: flex;
justify-content: space-between;

align-items: center;
`
export const NavLogo=styled.div`
display: flex;
align-items: center;
`
const nav_link=css`
font-size:1.3rem;
text-transform:capitalize;
color: var(--mainWhite) !important;
margin-left: 2rem;
`
export const Logo=styled(Link)`
text-align: center;
`
export const LinkItem=styled(Link)`
${nav_link}
`
export const NavCart=styled.div`
display: flex;
align-items: center;
justify-content: center;
`
export const CartLink=styled(Link)`
`
export const BtnCart=styled(ButtonContainer)`
${ButtonContainer}
display: flex;
align-items: center;
justify-content: center;
padding:0.5rem  0.75rem;

`
export const Icon=styled(FaCartPlus)`margin-right:1rem`