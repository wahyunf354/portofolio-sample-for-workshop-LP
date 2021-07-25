import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import Button from "../atoms/Button";

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  position: absolute;
  top: 0;
  left: 0;
  transition: 0.5s all;
`;

const Wrapper = styled.div`
  width: 280px;
  height: 360px;
  display: flex;
  position: relative;
  align-items: flex-end;
  transition: 0.5s ease-in-out;
  background: salmon;
  border-radius: 20px;
  overflow: hidden;
  font-family: "Poppins", sans-serif;
  cursor: pointer;
  margin-bottom: 2em;

  &:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    display: block;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      to bottom,
      rgba(48, 48, 48, 0),
      rgba(48, 48, 48, 0.5)
    );
    z-index: 2;
    transition: 0.5s all;
  }

  &:hover ${Image} {
    transform: scale(1.1);
  }
`;

const Title = styled.h4`
  color: white;
  font-size: 1.5em;
  font-weight: 600;
  line-height: 0;
`;

const Description = styled.p`
  color: white;
  font-weight: 300;
  font-size: 0.8em;
  margin: 0;
`;

const Body = styled.div`
  position: absolute;
  z-index: 3;
  padding: 1em;
  text-align: left;
`;

function Card({ title, imageUrl, description, linkProject }) {
  return (
    <Wrapper>
      <Image src={imageUrl} alt="any" />
      <Body>
        <Title>{title}</Title>
        <Description>{description}</Description>
        <Button type="link" href={linkProject} isLinkExternal>
          More >
        </Button>
      </Body>
    </Wrapper>
  );
}

Card.propTypes = {
  title: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
  description: PropTypes.string,
  linkProject: PropTypes.string.isRequired,
};

export default Card;
