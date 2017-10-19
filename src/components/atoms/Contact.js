import React, { Component } from "react";
import { Link } from "react-router-dom";
import styled, { css, keyframes } from "styled-components";

const sizes = {
  desktop: 100000,
  tablet: 768,
  phone: 376
};

// Iterate through the sizes and create a media template
const media = Object.keys(sizes).reduce((acc, label) => {
  acc[label] = (...args) => css`@media (max-width: ${sizes[label] / 16}em) {${css(...args)};}`;
  return acc;
}, {});

const fadeIn = keyframes`
0% {
   opacity: 0;
}
100% {
   opacity: 1;
}
`;

const Card = styled.div`
  background: white;
  border-radius: 5px;
  margin-right: -15px;
  margin-left: -15px;
  position: relative;
  animation: ${fadeIn} 0.8s cubic-bezier(0.36, 0.07, 0.19, 0.97) both;
  max-width: 480px;

  ${media.desktop`

      margin-left: 25%;
      width: 66.66666667%;
      float: left;
      margin-bottom: 80px;
    `} ${media.tablet`
    margin-left: 0%;
    float: none;
    width: 100%;
    max-width: 500px;
    margin: 0 auto;
    margin-bottom: 40px;

    `};
`;

const StyledLink = styled(Link)`
  color: #49b882;
  position: relative;
  text-decoration: none;
  font-size: 1rem;
  font-family: "Varela Round", "sans-serif";
  &:hover {
  }
  &:before {
    content: "";
    position: absolute;
    width: 100%;
    height: 2px;
    bottom: -3px;
    left: 0;
    background-color: #49b882;
    visibility: hidden;
    -webkit-transform: scaleX(0);
    transform: scaleX(0);
    -webkit-transition: all 0.3s ease-in-out 0s;
    transition: all 0.3s ease-in-out 0s;
  }
  &:hover:before {
    visibility: visible;
    -webkit-transform: scaleX(1);
    transform: scaleX(1);
  }
`;

const ExternalLink = StyledLink.withComponent("a");

const Shadow = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  box-shadow: inset 0 0 0 1px #dae4ed, 0 5px 15px -5px rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  top: 0;
  left: 0;
`;

class Contact extends Component {
  render() {
    return (
      <Card style={{ textAlign: "center" }}>
        <Shadow />
        <div style={{ padding: "30px", paddingTop: "10px" }}>
          <h2 style={{ marginTop: "1rem" }}>Get in Touch</h2>
          <span>
            Shoot me an email <ExternalLink href="mailto:me@liamckelly.com">Here</ExternalLink>
          </span>
          <p style={{ margin: "5px 0 5px 0" }}>or</p>
          <div>
            <span>Check out my </span>
            <StyledLink to={"/resume"}>Resume</StyledLink>
          </div>
        </div>
      </Card>
    );
  }
}

export default Contact;
