import React, { Component } from "react";
import styled, { css } from "styled-components";
import SideBar from "./components/molecules/SideBar";
import Work from "./components/molecules/Work";
import Navigation from "./components/molecules/Navigation";

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

const Home = styled.div`
  margin-top: 75px;
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
  background-color: #fafbfc;
  height: 100%;
  width: 100vw;
  display: table;
  ${media.desktop`
			max-width: 1070px;
		`} ${media.tablet`
			min-width: 320px;
		`};
`;

const SiteContainer = styled.div`
  background-color: #fafbfc;
  height: 100%;
  width: 100vw;
  display: table;
`;

export default class App extends Component {
  render() {
    return (
      <SiteContainer>
        <Navigation />
        <Home>
          <SideBar />
          <Work />
        </Home>
      </SiteContainer>
    );
  }
}
