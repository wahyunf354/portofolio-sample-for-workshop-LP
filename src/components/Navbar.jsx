import React, { useState } from "react";
import styled from "styled-components";
import Button from "./atoms/Button.jsx";
import Close from "../svg/svg/close.svg";

const Header = styled.header`
  display: flex;
  border-bottom: 2px solid #f4f4f4;
  box-sizing: border-box;
  align-items: center;

  @media screen and (max-width: 768px) {
    padding: 0 10px;
  }
`;

const NavLink = styled.a`
  margin-left: 15px;
  font-family: "Poppins", sans-serif;
  font-weight: 300;
  transition: all 300ms;
  text-decoration: none;
  color: #303030;

  &:hover {
    color: salmon;
    font-weight: bold;
  }
  @media screen and (max-width: 768px) {
    border-bottom: 1px solid #f18072;
    margin-bottom: 1em;
    margin-left: 0;
  }
`;

const NavWrapper = styled.ul`
  display: flex;
  list-style-type: none;
  justify-content: flex-end;
  cursor: pointer;

  @media screen and (max-width: 768px) {
    position: absolute;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    background: white;
    border-left: 1px solid #f4f4f4;
    right: 0;
    top: 0;
    z-index: 99;
    bottom: 0;
    margin: 0;
    width: 60%;
    display: ${(props) => props.display};
  }
`;

const Menu = styled.div`
  width: 30px;
  height: 30px;

  span {
    height: 5px;
    margin: 5px 0;
    width: 100%;
    background: #c4c4c4;
    display: block;
  }

  @media screen and (min-width: 768px) {
    display: none;
  }
`;

const Logo = styled.h1`
  color: #303030;
  font-family: "Poppins", sans-serif;
`;

function Navbar() {
  const [isShowMenu, setIsShowMenu] = useState(false);

  const showMenu = () => {
    setIsShowMenu(true);
  };

  const hideMenu = () => {
    setIsShowMenu(false);
  };

  return (
    <Header>
      <div style={{ flex: 1 }}>
        <Logo>
          <span style={{ color: "salmon" }}>Wah</span>yu
        </Logo>
      </div>
      <Menu onClick={showMenu}>
        <span></span>
        <span></span>
        <span></span>
      </Menu>
      <NavWrapper display={isShowMenu ? "visible" : "none"}>
        {isShowMenu && (
          <Button style={{ alignSelf: "flex-end" }} onClick={hideMenu}>
            <img
              style={{ width: "30px", height: "30px", margin: "1em" }}
              src={Close}
              alt="close"
            />
          </Button>
        )}
        <NavLink href="#about">About</NavLink>
        <NavLink href="#project">Projects</NavLink>
        <NavLink href="#contact">Contact</NavLink>
      </NavWrapper>
    </Header>
  );
}

export { Navbar };
