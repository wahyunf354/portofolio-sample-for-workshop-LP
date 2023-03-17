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
          Hello, I am a Computer Science student from the State University of Medan. I am also a freelance worker who specializes in handling website projects using Javascript and PHP technologies. I am proficient in using Laravel and Express JS frameworks. Additionally, I am capable of utilizing Golang for REST API development and Python for Data Processing. Furthermore, I possess the ability to apply DevOps practices, perform automation with Jenkins, and deploy applications with Docker.
      </Description>
    </Wrapper>
  );
}

export default About;
