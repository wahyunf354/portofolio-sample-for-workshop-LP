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

const ButtonDisabled = styled(Link)`
  color: white;
  background: #c4c4c4;
  border: 2px solid #c4c4c4;
  font-weight: 300;
  transition: 300ms;
  text-align: center;
`;

const ButtonPrimary = styled(Link)`
  color: white;
  background-color: salmon;
  font-weight: 700;
  transition: 300ms;
  outline-line: none;
  border: 1px solid salmon;

  &:hover {
    opacity: 0.9;
    cursor: pointer;
  }
`;

const LinkExternal = styled(Link)`
  padding: 0.5em 0;
  color: white;

  &:hover {
    text-decoration: underline;
  }
`;

function Button({
  type,
  href,
  children,
  isBtnOutlineSecondary,
  style,
  isBtnPrimary,
  disabled,
  isLinkExternal,
}) {
  if (disabled) {
    return (
      <ButtonDisabled as="div" style={style}>
        {children}
      </ButtonDisabled>
    );
  }

  if (type === "link" && isBtnOutlineSecondary) {
    return (
      <ButtonOutlineSecondary as="a" href={href} style={style}>
        {children}
      </ButtonOutlineSecondary>
    );
  }

  if (type === "link" && isBtnPrimary) {
    return (
      <ButtonPrimary as="a" href={href} style={style}>
        {children}
      </ButtonPrimary>
    );
  }

  if (type === "link" && isLinkExternal) {
    return (
      <LinkExternal as="a" style={style} href={href} target="blank">
        {children}
      </LinkExternal>
    );
  }

  if (type === "submit") {
    <ButtonPrimary type="submit" style={style}>
      {children}
    </ButtonPrimary>;
  }

  return (
    <ButtonPrimary type={type} style={style}>
      {children}
    </ButtonPrimary>
  );
}

export default Button;
