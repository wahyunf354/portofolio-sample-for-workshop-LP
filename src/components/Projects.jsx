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
  flex-wrap: wrap;
`;

const projects = [
  {
    title: "Mejeng App",
    description: "Sosial media app with Reactjs and Firebase",
    linkProject: "https://mejengapp-4d31f.web.app/",
    imageUrl: "./img/project1.png",
  },
  {
    title: "D'lern",
    description:
      "Game to Learn German Lenguage with Reactjs, Firebase, Rest API Codeigniter",
    linkProject: "https://dlern.vercel.app/",
    imageUrl: "./img/project2.png",
  },
  {
    title: "Rest API Cari Kerja",
    description: "Rest API with Fastify and Postgersql",
    linkProject: "https://carikerja-api.vercel.app/documentation",
    imageUrl: "./img/project3.png",
  },
];

function Projects() {
  return (
    <Wrapper id="project">
      <Title>Projects</Title>
      <Content>
        {projects.map((project, i) => (
          <Card
            key={i}
            title={project.title}
            description={project.description}
            linkProject={project.linkProject}
            imageUrl={project.imageUrl}
          />
        ))}
      </Content>
    </Wrapper>
  );
}

export default Projects;
