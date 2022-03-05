import styled from "styled-components";
import {FaTrash} from 'react-icons/fa'
export const SectionCart=styled.section`
overflow-x:hidden;
`
export const TrashICon=styled(FaTrash)`color:#ffa400;
cursor: pointer;
font-size: 1.5rem;
`
export const CartTitle=styled.h1`
 font-family: "Permanent Marker", cursive;
  letter-spacing: 0.3rem;
  text-transform: uppercase;
`
export const BtnBlack=styled.span`background: transparent;
text-transform: capitalize;
font-size: 0.8rem !important;
color: var(--mainBlack);
border-radius: 0 !important;
border: 0.1rem solid var(--mainDark) !important;
&:hover{
    background: var(--mainDark) !important;
  color: var(--mainWhite) !important;
}
`
export const TextCartTitle=styled.span`
 font-family: "Permanent Marker", cursive;
  letter-spacing: 0.3rem;
  text-transform: uppercase;
`
export const ColumnInfo=styled.div`
width: fit-content;
`