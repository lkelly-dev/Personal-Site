import React, { Component } from "react";
import styled, { css, keyframes } from "styled-components";
import logo from "./images/lklogo.png";
// import { rhythm } from "../../utils/typography";
import { SocialIcon } from "react-social-icons";

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

const fadeFromLeft = keyframes`
0% {
   transform: translateX(-40px);
}
100% {
   opacity: 1;
   transform: translateX(0);
}
`;

const fadeFromTop = keyframes`
0% {
   transform: translateY(-30px);
}
100% {
   opacity: 1;
   transform: translateY(0);
}
`;

const AboutSection = styled.div`
  position: fixed;
  min-height: 1px;
  padding-right: 15px;
  padding-left: 15px;
  text-align: center;
  margin-bottom: 1rem;
  max-width: 450px;
  opacity: 0;
  z-index: 100;
  ${media.desktop`
        width: 30%;
        float: left;
        margin-left: 25px;
        animation: ${fadeFromLeft} 1.3s cubic-bezier(.36,.07,.19,.97) both;
       
    `} ${media.tablet`
    width: 100%;
    position: relative;
    margin-left: 0px;
    animation: ${fadeFromTop} 1.22s cubic-bezier(.36,.07,.19,.97) both;
    animation-delay: .25s;
    margin: 0 auto;
    float: none;
      margin-bottom: 1rem;

    `};
`;

const Shake = keyframes`
10%, 90% {
transform: translate3d(-1px, 0, 0);
}

20%, 80% {
transform: translate3d(2px, 0, 0);
}

30%, 50%, 70% {
transform: translate3d(-4px, 0, 0);
}

40%, 60% {
transform: translate3d(4px, 0, 0);
}
`;

const Rotate = keyframes`
0% {
transform: rotate(0deg);
}

100%{
transform: rotate(360deg);
}

`;

const SocialDiv = styled.div`
  display: block;
  margin-top: 10px;
`;

const SocialIconStyled = styled(SocialIcon)`
  text-decoration: none;
  background-image: none;
  text-shadow: none;
  height: 2rem !important;
  width: 2rem !important;
  margin: 3px;
  &:hover {
    animation: ${Shake} 0.82s cubic-bezier(0.36, 0.07, 0.19, 0.97) both;
  }
`;

const ImageAnimate = styled.div`
  display: inline-block;
  width: 100%;
  &:hover {
    animation: ${Rotate} 0.82s cubic-bezier(0.36, 0.07, 0.19, 0.97) both;
    animation-delay: 0.5s;
  }
`;

const Logo = styled.img`
  width: 95%;
  max-width: 220px;
  display: block;
  margin-right: auto;
  margin-left: auto;
  margin-bottom: 0px;
  ${media.tablet`
    max-width: 210px;
    width: 85%;

    `};
`;

const Developer = styled.p`
  font-family: "Lato", sans-serif;
  color: #49b882;
  font-weight: 100;
  font-size: 1.1rem;
`;

const Liam = styled.h2`
  font-family: "Lato", sans-serif;
  color: #49b882;
  font-weight: 900;
  font-style: italic;
  font-size: 2rem;
  letter-spacing: 5px;
  margin-bottom: 0.67rem;
  margin-top: 0rem;
`;

class SideBar extends Component {
  render() {
    return (
      <AboutSection>
        <ImageAnimate>
          <Logo src={logo} alt={`Liam Kelly`} />
        </ImageAnimate>
        <Liam>LIAM KELLY</Liam>
        <Developer>WEB DEVELOPER</Developer>
        <SocialDiv>
          <SocialIconStyled color="#49b882" url="https://github.com/lkelly-dev" />
          <SocialIconStyled color="#49b882" url="https://www.linkedin.com/in/liamkelly3/" />
          <SocialIconStyled color="#49b882" url="mailto:me@liamckelly.com" network="email" />
        </SocialDiv>
      </AboutSection>
    );
  }
}

export default SideBar;
