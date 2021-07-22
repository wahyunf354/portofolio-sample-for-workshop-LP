import React from "react";
import styled from "styled-components";
import Button from "./atoms/Button.jsx";

const HeroWrapper = styled.div`
  display: flex;
  padding-top: 50px;
  width: 100%;
  margin: 0 auto;
`;

const Title = styled.h1`
  color: #303030;
  font-weight: 600;
  font-size: 64px;
  line-height: 48px;
  font-family: "Poppins", sans-serif;
`;

const Description = styled.p`
  color: #303030;
  font-weight: 300;
  font-family: "Poppins", sans-serif;
  margin-bottom: 5em;
`;

function Hero(props) {
  const showContact = () => {
    window.scrollTo({
      top: props.refContact.current.offsetTop - 30,
      behavior: "smooth",
    });
  };

  return (
    <HeroWrapper>
      <div>
        <Title>Hi, I'am</Title>
        <Title>
          <span style={{ color: "salmon" }}>Wahyu</span> Nur Fadillah
        </Title>

        <Description>
          Hard to find a good patner to you?
          <span style={{ display: "block" }}>
            {" "}
            Don't worry because I are here to help you
          </span>
        </Description>

        <Button onClick={showContact} isBtnPrimary>
          Contact me
        </Button>
        <Button type="link" href="#" isBtnOutlineSecondary>
          Download CV
        </Button>
      </div>
      <div>
        <img src="/img/profile.png" alt="profile" />
      </div>
    </HeroWrapper>
  );
}

export { Hero };
