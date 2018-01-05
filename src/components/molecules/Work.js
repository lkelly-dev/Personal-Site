import React, { Component } from "react";
import styled, { css } from "styled-components";
import Project from "../atoms/Project";
import Contact from "../atoms/Contact";

import dwmc from "./images/dwmc.png";
import coursedistance from "./images/course-distance.png";
import exploreto from "./images/exploreto.png";
import kellydesign from "./images/kellydesign.png";

var projectList = [
  {
    title: "Explore.To",
    description: "A website for finding cool places and events in Toronto.",
    image: exploreto,
    link: "https://www.exploreapp.ca"
  },
  {
    title: "Dude, Where's My Car?",
    description:
      "An Android app that allows a user to locate their vehicle wherever they parked it.",
    image: dwmc,
    link: "https://play.google.com/store/apps/details?id=com.stratman.wheresmycar&hl=en"
  },
  {
    title: "Kelly Designs",
    description: "A Redesigned website for Kelly Designs with Kirby CMS",
    image: kellydesign,
    link: "http://janetkellydesigns.com/"
  },
  {
    title: "UofT Course Distances",
    description: "An app for UofT students to rate courses and find distances between classes.",
    image: coursedistance,
    link: "https://courserater.herokuapp.com/walk"
  }
];

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

const WorkSection = styled.div`
  position: relative;
  min-height: 1px;
  padding-right: 15px;
  padding-left: 15px;
  z-index: 50;

  ${media.desktop`
      margin-left: 25%;
      width: 75%;
      float: left;
    `} ${media.tablet`
    width: 100%;
    margin-left: 0%;

    `};
`;

class Work extends Component {
  render() {
    return (
      <WorkSection>
        {projectList.map(function(indv_proj, index) {
          return (
            <Project
              description={indv_proj.description}
              link={indv_proj.link}
              title={indv_proj.title}
              key={index}
            >
              <img
                src={indv_proj.image}
                alt={indv_proj.title}
                style={{
                  width: "100%",
                  maxWidth: "800px",
                  display: "block",
                  position: "absolute",
                  marginRight: "auto",
                  marginLeft: "auto",
                  marginBottom: "0px"
                }}
              />
            </Project>
          );
        }, this)}
        <Contact />
      </WorkSection>
    );
  }
}

export default Work;
