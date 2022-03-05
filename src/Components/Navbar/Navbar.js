import React from "react";
import {
    BtnCart,
  CartLink,
  Icon,
  LinkItem,
  Logo,
  Nav,
  NavCart,
  NavContainer,
  NavLogo,
} from "./NavbarElement";
import logo from "../../img/logo.svg";
function Navbar() {
  return (
    <>
      <Nav>
        <NavContainer>
          <NavLogo>
            <Logo to="/">
              <img src={logo} alt="logo" />
            </Logo>
            <LinkItem to="/">Products</LinkItem>
          </NavLogo>
          <NavCart>
            <CartLink to="/cart">
              <BtnCart main>
                  <Icon />
                My Cart
              </BtnCart>
            </CartLink>
          </NavCart>
        </NavContainer>
      </Nav>
    </>
  );
}

export default Navbar;
