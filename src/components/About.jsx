import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  padding: 2em 0;
  text-align: center;
  font-family: "Poppins", sans-serif;
`;

const Title = styled.h3`
  color: #303030;
  display: inline-block;
  border-bottom: 5px solid salmon;
  font-size: 2.25rem;
  font-weight: 600;
`;

const Description = styled.p`
  color: #303030;
  font-weight: 300;
  font-family: "Poppins", sans-serif;
  margin-bottom: 5em;
  width: 50%;
  margin: 0 auto;
  @media screen and (max-width: 768px) {
    width: 100%;
    padding: 0 10px;
  }
`;

function About(props) {
  return (
    <Wrapper id="about" ref={props.refAbout}>
      <Title>About</Title>
      <Description>
        I am a back end programmer currently as a freelancer. I am working on a
        project using PHP and Java Script. Laravel, Express js and Fastify are
        the frameworks I usually use.
      </Description>
    </Wrapper>
  );
}

export default About;
