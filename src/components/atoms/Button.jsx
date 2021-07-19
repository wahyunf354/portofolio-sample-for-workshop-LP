import React from "react";
import styled from "styled-components";

const Link = styled.button`
  font-family: "Poppins", sans-serif;
  display: inline-block;
  padding: 0.5em 2em;
  text-decoration: none;
  font-size: 18px;
  border-radius: 30px;
  margin-right: 1em;
`;

const ButtonOutlineSecondary = styled(Link)`
  color: #c4c4c4;
  border: 2px solid #c4c4c4;
  font-weight: 300;
  transition: 300ms;

  &:hover {
    color: salmon;
    border: 2px solid salmon;
  }
`;

const ButtonPrimary = styled(Link)`
  color: white;
  background-color: salmon;
  font-weight: 700;
  transition: 300ms;

  &:hover {
    opacity: 0.9;
  }
`;

function Button({ type, href, children, isBtnOutlineSecondary, isBtnPrimary }) {
  if (type === "link" && isBtnOutlineSecondary) {
    return (
      <ButtonOutlineSecondary as="a" href={href}>
        {children}
      </ButtonOutlineSecondary>
    );
  }

  if (type === "link" && isBtnPrimary) {
    return (
      <ButtonPrimary as="a" href={href}>
        {children}
      </ButtonPrimary>
    );
  }

  return <button>{children}</button>;
}

export default Button;
