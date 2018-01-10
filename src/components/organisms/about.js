import React, { Component } from "react";
import styled, { keyframes } from "styled-components";
import Navigation from "../molecules/Navigation";
import { SocialIcon } from "react-social-icons";
import cartoonPic from "./images/liam_cartoon.png";
import liamPic from "./images/liam.png";

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

//animation: ${fadeInBottom} 0.3s cubic-bezier(0.39, 0.575, 0.565, 1) both;
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

const SocialDiv = styled.div`
  display: block;
  margin-top: 30px;
  margin-bottom: 10px;
`;

const SocialIconStyled = styled(SocialIcon)`
  text-decoration: none;
  background-image: none;
  text-shadow: none;
  height: 2rem !important;
  width: 2rem !important;
  margin: 7px;
  &:hover {
  }
`;

const Bio = styled.p`
  width: 80%;
  text-align: center;
  margin: 0 auto;
  min-width: 300px;
`;

//  width: 30%;
//min-width: 200px;

const ProfilePic = styled.div`
  width: 250px;
  height: 250px;
  background-image: url(${cartoonPic});
  background-size: contain;
  margin: 0 auto;

  -o-transition: 0.2s;
  -ms-transition: 0.2s;
  -moz-transition: 0.2s;
  -webkit-transition: 0.2s;
  transition: 0.2s;

  &:hover {
    background-image: url(${liamPic});
  }
`;

class About extends Component {
  render() {
    return (
      <PageContainer>
        <Navigation />
        <Content>
          <ProfilePic />
          <h2>Liam Kelly</h2>
          <Bio>
            I am a 20 year old Web Developer who is excited to enter the work force. I love
            everything that has to do with Web design & development and specialize in front end
            work. I am experienced in all stages of the development cycle for web applications and
            am constantly learning through my personal and freelance projects. <br /> <br />
            References and project demos available upon request.
          </Bio>
          <SocialDiv>
            <SocialIconStyled color="#e48146" url="https://github.com/lkelly-dev" />
            <SocialIconStyled color="#3586e1" url="https://www.linkedin.com/in/liamkelly3/" />
            <SocialIconStyled color="#e48146" url="mailto:me@liamckelly.com" network="email" />
          </SocialDiv>
        </Content>
      </PageContainer>
    );
  }
}

export default About;
