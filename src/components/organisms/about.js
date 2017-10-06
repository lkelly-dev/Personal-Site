import React, { Component } from "react";
import styled, { keyframes } from "styled-components";
import Navigation from "../molecules/Navigation";

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
  width: 100vw;
  background-color: #fafbfc;
  height: 100%;
  animation: ${fadeInBottom} 0.8s cubic-bezier(0.36, 0.07, 0.19, 0.97) both;
`;

const Content = styled.div`
  margin: 0 auto;
  margin-top: 75px;
  text-align: center;
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
            Lorem ipsum dolor sit amet, his no velit fastidii oportere, cu ignota maluisset
            philosophia his, in ferri omnis usu. Id eum accumsan theophrastus. Pro ludus mediocrem
            tincidunt ne. Ad justo praesent definiebas vel, in nec summo salutandi, probo doctus ut
            eos. Pri in quando vocibus, volumus rationibus at his. Id vix error iriure detracto,
            tale honestatis referrentur no sea. Pri fastidii consequat adversarium ne, id vix
            mediocrem torquatos.
          </Bio>
        </Content>
      </PageContainer>
    );
  }
}

export default About;
