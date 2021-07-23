import React from "react";
import { useForm } from "react-hook-form";
import emailjs from "emailjs-com";

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
  text-align: left;
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
  box-sizing: border-box;
  border: 1px solid #c4c4c4;
  border-radius: 5px;
  width: 100%;
  font-family: "Poppins", sans serif;

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

const Error = styled.span`
  color: red;
  font-size: 0.7em;
`;

function Contact(props) {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm();

  const sendEmail = (variables) => {
    const templateId = "template_xeverlk";
    const serviceId = "service_qjfs1s1";
    const userId = "user_x63ucbcCdDmltqAGrpMGX";
    return new Promise(function (resolve, reject) {
      emailjs
        .send(serviceId, templateId, variables, userId)
        .then((res) => {
          return resolve(res);
        })
        .catch((error) => reject(error));
    });
  };

  const onSubmit = async (data) => {
    try {
      const variables = {
        message: data.message,
        from_name: data.firstname + " " + data.lastname,
        to_name: "Wahyu Nur Fadillah",
        from_email: data.email,
      };
      await sendEmail(variables);
      alert("Email terkirim");
      reset();
    } catch (error) {
      alert("Mohon maaf email tidak terkirim");
    }
  };

  return (
    <Wrapper ref={props.refContact} id="contact">
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
        <Form onSubmit={handleSubmit(onSubmit)}>
          <div style={{ gridArea: "firstname" }}>
            <Input
              name="firstname"
              type="text"
              placeholder="First Name"
              {...register("firstname", { required: true })}
            />
            {errors.firstname && <Error>First Name Required</Error>}
          </div>
          <div style={{ gridArea: "lastname" }}>
            <Input
              name="lastname"
              type="text"
              placeholder="Last Name"
              {...register("lastname", { required: true })}
            />
            {errors.lastname && <Error>Last Name Required</Error>}
          </div>
          <div style={{ gridArea: "email" }}>
            <Input
              name="email"
              type="email"
              placeholder="Email"
              {...register("email", {
                required: true,
                pattern:
                  '/^(([^<>()[]\\.,;:s@"]+(.[^<>()[]\\.,;:s@"]+)*)|(".+"))@(([[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}])|(([a-zA-Z-0-9]+.)+[a-zA-Z]{2,}))$/',
              })}
            />
            {errors.email && errors.email.type === "required" && (
              <Error>Email Required</Error>
            )}
            {errors.email && errors.email.type === "pattern" && (
              <Error>Invalid Email</Error>
            )}
          </div>
          <div style={{ gridArea: "message" }}>
            <Input
              as="textarea"
              name="message"
              id="message"
              cols="30"
              rows="10"
              placeholder="Message"
              {...register("message", { required: true })}
            ></Input>
            {errors.message && <Error>Message Required</Error>}
          </div>
          <Button
            style={{ gridArea: "button" }}
            type="submit"
            disabled={isSubmitting}
          >
            Send
          </Button>
        </Form>
      </Content>
    </Wrapper>
  );
}

export default Contact;
