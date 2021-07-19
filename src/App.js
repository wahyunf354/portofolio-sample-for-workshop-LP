import styled from "styled-components";

import Navbar from "./components/Navbar.jsx";
import { Hero } from "./components/Hero.jsx";
import About from "./components/About.jsx";
import Projects from "./components/Projects.jsx";

const Container = styled.div`
  width: 80%;
  margin: 0 auto;
`;

function App() {
  return (
    <Container>
      <Navbar />
      <Hero />
      <About />
      <Projects />
    </Container>
  );
}

export default App;
