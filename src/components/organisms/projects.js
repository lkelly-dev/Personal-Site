import React, { Component } from "react";
import styled, { keyframes } from "styled-components";
import Navigation from "../molecules/Navigation";
import Project from "../atoms/Project";

import coursedistance from "../molecules/images/course-distance.png";
import exploreto from "../molecules/images/exploreto.png";
import kellydesign from "../molecules/images/kellydesign.png";
import markdown from "../molecules/images/markdownNotes.png";
import sushi from "../molecules/images/sushiFinder.png";
import linden from "../molecules/images/linden.png";

var projectList = [
  {
    title: "Explore.To",
    description: "A website for finding cool places and events in Toronto.",
    image: exploreto,
    link: "https://www.exploreapp.ca"
  },
  {
    title: "Markdown Notes",
    description: "A cross-platform markdown note taking app. Built using React and Electron",
    image: markdown,
    link: "https://github.com/lkelly-dev/MarkdownNotes"
  },
  {
    title: "SushiFinder",
    description: "A Website for finding the closest and best sushi restaurants near you.",
    image: sushi,
    link: "https://lkelly-dev.github.io/Sushi-Finder/"
  },

  {
    title: "Kelly Designs",
    description: "A Redesigned website for Kelly Designs with Kirby CMS",
    image: kellydesign,
    link: "http://janetkellydesigns.com/"
  },
  {
    title: "Linden Photonics",
    description: "A redesign of the Linden Photonics website that adds sleekness and modern UX.",
    image: linden,
    link: "http://lindenphotonics.com"
  },
  {
    title: "UofT Course Distances",
    description: "An app for UofT students to rate courses and find distances between classes.",
    image: coursedistance,
    link: "https://courserater.herokuapp.com/walk"
  }
];

const fadeInBottom = keyframes`
0% {
   opacity: 0;
   transform: translateY(-500);
}
100% {
   opacity: 1;
   transform: translateY(0);
}
`;

class Projects extends Component {
  render() {
    return (
      <PageContainer>
        <Navigation />
        <Content>
          <PageTitle>Recent Work</PageTitle>
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
          </WorkSection>
        </Content>
      </PageContainer>
    );
  }
}

export default Projects;

const PageContainer = styled.div`
  width: 100%;
  background-color: #fafbfc;
  height: 100%;
`;

const Content = styled.div`
  margin: 0 auto;
  margin-top: 75px;
  text-align: center;
  animation: ${fadeInBottom} 0.8s cubic-bezier(0.36, 0.07, 0.19, 0.97) both;
`;

const WorkSection = styled.div`
  max-width: 1600px;
  margin: 0 auto;
`;

const PageTitle = styled.h2`
  font-family: "Lato", sans-serif;
  color: #49b882;
  font-weight: 900;
  font-style: italic;
  font-size: 2rem;
  letter-spacing: 2px;
  margin-bottom: 0.67rem;
  margin-top: 0rem;
`;
