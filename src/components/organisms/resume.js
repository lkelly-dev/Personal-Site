import React from "react";
import styled from "styled-components";
import Navigation from "../molecules/Navigation";
import lkResume from "./LiamKellyResume2017.pdf";

// const sizes = {
//   desktop: 100000,
//   tablet: 768,
//   phone: 376
// };

// const media = Object.keys(sizes).reduce((acc, label) => {
//   acc[label] = (...args) => css`@media (max-width: ${sizes[label] / 16}em) {${css(...args)};}`;

//   return acc;
// }, {});

const ResumeFrame = styled.iframe`
  width: 100%;
  height: 100%;
  padding-left: 5%;
  padding-right: 5%;
  padding-bottom: 0px;
  margin-bottom: 0px;
  border: none;
`;

const PageContainer = styled.div`
  width: 100vw;
  background-color: #fafbfc;
  display: table;
  height: 95vh;
`;

const ResumeContainer = styled.div`
  width: 100vw;
  background-color: #fafbfc;
  display: table;
  height: 100%;
  margin-top: 90px;
`;

class Resume extends React.Component {
  render() {
    return (
      <PageContainer>
        <Navigation />
        <ResumeContainer>
          {/* <ResumeFrame src="https://liam.netlify.com/LiamKellyResume2017.pdf" /> */}
          <ResumeFrame src={lkResume} />
        </ResumeContainer>
      </PageContainer>
    );
  }
}

Resume.propTypes = {};

export default Resume;
