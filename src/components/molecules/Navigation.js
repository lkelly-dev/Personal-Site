import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import styled, { css } from "styled-components";
import MobileMenu from "../atoms/MobileMenu";
require("./Navigation.css");

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

const NavBar = styled.div`
  z-index: 4;
  left: 0;
  top: 0;
  width: 100%;
  padding: 20px;
  transition: padding 0.2s ease-in, opacity 0.2s ease-out;
  padding: 20px;
  ${media.tablet`


    `};
`;

const StyledLink = styled(NavLink)`
    margin-right: 1em;
    margin-left: 0px;
    text-decoration: none;
    font-size: 1rem;
    font-family: 'Varela Round','sans-serif';
    float: right;
    color: #a4b9ce;
    position:relative;

 &:before {
   position: absolute;
    width: 100%;
    height: 1px;
    background: #e6e6e6;
    content: "";
    opacity: 0;
    left: 0;
    transition: opacity .3s ease-out,transform .3s ease-out;
    transform: translateY(-10px);
    top: -2px;

}

  &:after {
    position: absolute;
    width: 100%;
    height: 1px;
    background: #e6e6e6;
    content: "";
    opacity: 0;
    left: 0;
    transition: opacity .3s ease-out,transform .3s ease-out;
    transform: translateY(10px);
    bottom: -2px;
}
&:hover{
    color: #8fa1b3;
}
&:hover:before {
  opacity: 1;
    transform: translateY(0);

}
&:hover:after {
  opacity: 1;
    transform: translateY(0);

}

  }
`;

const ExternalLink = StyledLink.withComponent("a");

class Navigation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      width: window.innerWidth,
      height: window.innerHeight
    };
  }

  updateDimensions = () => {
    var w = window,
      d = document,
      documentElement = d.documentElement,
      body = d.getElementsByTagName("body")[0],
      width = w.innerWidth || documentElement.clientWidth || body.clientWidth,
      height = w.innerHeight || documentElement.clientHeight || body.clientHeight;

    this.setState({ width, height });
  };

  componentWillMount() {
    this.updateDimensions();
  }
  componentWillUnmount() {
    window.removeEventListener("resize", this.updateDimensions);
  }

  componentDidMount() {
    window.addEventListener("resize", this.updateDimensions);
  }
  render() {
    if (this.state.width > 650) {
      return (
        <NavBar>
          <StyledLink
            exact={true}
            to="/"
            activeClassName="activeLink"
            style={{ marginRight: "0.7em" }}
          >
            Home
          </StyledLink>
          {/* <StyledLink to="/blog" activeClassName="activeLink">
          Blog
        </StyledLink> */}
          <ExternalLink href="https://medium.com/@liamkelly_46694" activeClassName="activeLink">
            Blog
          </ExternalLink>
          <StyledLink exact={true} to="/about" activeClassName="activeLink">
            About
          </StyledLink>
          <StyledLink exact={true} to="/projects" activeClassName="activeLink">
            Projects
          </StyledLink>
          {/* <StyledLink exact={true} to="/resume" activeClassName="activeLink">
          Resumé
        </StyledLink> */}
        </NavBar>
      );
    }
    return (
      <NavBar>
        <MobileMenu />
      </NavBar>
    );
  }
}

export default Navigation;
