import React, { Component } from "react";
//import PropTypes from "prop-types";

import Browser from "./Browser";
import styled, { css, keyframes } from "styled-components";

const sizes = {
  desktop: 100000,
  tablet: 768,
  phone: 376
};

// Iterate through the sizes and create a media template
const media = Object.keys(sizes).reduce((acc, label) => {
  acc[label] = (...args) =>
    css`
      @media (max-width: ${sizes[label] / 16}em) {
        ${css(...args)};
      }
    `;
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

  position: relative;
  animation: ${fadeIn} 0.8s cubic-bezier(0.36, 0.07, 0.19, 0.97) both;
  max-width: 480px;

  ${props =>
    props.home &&
    css`
      margin-right: -15px;
      margin-left: -15px;
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
    `};

  ${props =>
    !props.home &&
    css`
      display: inline-block;
      margin: 1em;
    `};
`;

const StyledLink = styled.a`
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

const Shadow = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  box-shadow: inset 0 0 0 1px #dae4ed, 0 5px 15px -5px rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  top: 0;
  left: 0;
`;

class Project extends Component {
  render() {
    return (
      <Card home={this.props.home}>
        <Browser>{this.props.children}</Browser>
        <Shadow />
        <div style={{ padding: "30px", paddingTop: "10px" }}>
          <h2 style={{ marginTop: "1rem" }}>{this.props.title}</h2>
          <p>{this.props.description}</p>
          <StyledLink href={this.props.link}>Check it out</StyledLink>
        </div>
      </Card>
    );
  }
}

export default Project;

// Project.propTypes = {
//   description: React.PropTypes.string,
//   link: React.PropTypes.string
// };
