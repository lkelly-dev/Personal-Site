import React, { Component } from "react";
import styled from "styled-components";

const Window = styled.div`
  text-align: left;
  width: 100%;
  height: auto;
  display: inline-block;
  border-radius: 5px 5px 0px 0px;
  background-color: rgba(158, 220, 242, 0.49);
`;

const TopBar = styled.div`
  height: 30px;
  border-radius: 5px 5px 0px 0px;
  border-top: thin solid #eaeae9;
  border-bottom: thin solid #dfdfde;
  background: linear-gradient(#e7e7e6, #e2e2e1);
  display: flex;
  align-items: center;
`;

const Circle = styled.div`
  height: 8px;
  width: 8px;
  display: inline-block;
  border-radius: 50%;
  background-color: white;
  margin: 0 3px;
`;

const Circles = styled.div`
  margin: 0;
  width: 100%;
  min-height: 50%;
  display: inline-block;
  border-radius: 0 0 5px 5px;
  margin: -5px 12px;
`;

const ImageContainer = styled.div`
  width: 100%;
  padding-bottom: 56.25%;
  background-color: #ffffff;
  height: 0;
  position: relative;
`;

class Browser extends Component {
  render() {
    return (
      <Window>
        <TopBar>
          <Circles>
            <Circle />
            <Circle />
            <Circle />
          </Circles>
        </TopBar>
        <ImageContainer>{this.props.children}</ImageContainer>
      </Window>
    );
  }
}

export default Browser;
