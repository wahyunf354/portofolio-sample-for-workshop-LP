import React from "react";
import styled from "styled-components";
import Button from "./atoms/Button.jsx";
import Github from "../svg/Github.jsx";
import Address from "../svg/Address.jsx";
import Email from "../svg/Email.jsx";
import Instagram from "../svg/Instagram.jsx";
import Linkin from "../svg/Linkin.jsx";

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
`;

const ContactInfo = styled.ul`
  text-align: left;
  flex: 1;
  list-style-type: none;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`;

const Form = styled.form`
  flex: 1;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-row: auto;
  grid-gap: 1em;
  grid-template-areas:
    "firstname lastname"
    "email email"
    "message message"
    "button .";
`;

const Input = styled.input`
  padding: 1em;
  border: 1px solid #c4c4c4;
  border-radius: 5px;

  &:active {
    outline-style: none;
    border: 1px solid salmon;
  }

  &:focus {
    outline-style: none;
    border: 1px solid salmon;
  }
`;

const List = styled.li`
  display: flex;
  align-items: center;
  padding: 0.5em 0;
  font-weight: 300;
`;

function Contact() {
  return (
    <Wrapper>
      <Title>Contact</Title>
      <Content>
        <ContactInfo>
          <List>
            <Address />
            <span style={{ marginLeft: "1em" }}> Medan, Indonesia</span>
          </List>
          <List>
            <Email />
            <span style={{ marginLeft: "1em" }}>
              wahyunurfadillah313@gmail.com
            </span>
          </List>
          <List>
            <Github />
            <span style={{ marginLeft: "1em" }}>github.com/wahyunf354</span>
          </List>
          <List>
            <Instagram />
            <span style={{ marginLeft: "1em" }}>@wahyu.nf</span>
          </List>
          <List>
            <Linkin />
            <span style={{ marginLeft: "1em" }}>
              linkedin.com/in/wahyu-nur-fadillah-6b65601b9
            </span>
          </List>
        </ContactInfo>
        <Form>
          <Input
            style={{ gridArea: "firstname" }}
            name="fisrtname"
            type="text"
            placeholder="First Name"
          />
          <Input
            style={{ gridArea: "lastname" }}
            name="lastname"
            type="text"
            placeholder="Last Name"
          />
          <Input
            style={{ gridArea: "email" }}
            name="email"
            type="email"
            placeholder="Email"
          />
          <Input
            as="textarea"
            style={{ gridArea: "message" }}
            name="message"
            id="message"
            cols="30"
            rows="10"
            placeholder="Message"
          ></Input>
          <Button type="submit">Send</Button>
        </Form>
      </Content>
    </Wrapper>
  );
}

export default Contact;
