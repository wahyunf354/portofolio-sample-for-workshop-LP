import React from "react";
import styled from "styled-components";
import Card from "./molekuls/Card.jsx";

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

const Content = styled.div`
  display: flex;
  justify-content: space-around;
`;

function Projects() {
  return (
    <Wrapper>
      <Title>Projects</Title>
      <Content>
        <Card />
        <Card />
        <Card />
      </Content>
    </Wrapper>
  );
}

export default Projects;
