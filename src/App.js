import React from "react";
import styled from "styled-components";

import { Navbar } from "./components/Navbar.jsx";
import { Hero } from "./components/Hero.jsx";
import About from "./components/About.jsx";
import Projects from "./components/Projects.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";

const Container = styled.div`
  width: 80%;
  margin: 0 auto;

  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;

class App extends React.Component {
  constructor(props) {
    super(props);
    this.refContact = React.createRef();
    this.refAbout = React.createRef();
  }

  render() {
    return (
      <Container>
        <Navbar />
        <Hero refContact={this.refContact} />
        <About />
        <Projects />
        <Contact refContact={this.refContact} />
        <Footer />
      </Container>
    );
  }
}

export default App;
