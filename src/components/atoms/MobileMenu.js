import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import styled, { keyframes } from "styled-components";

const fadeFromBottom = keyframes`
0% {
   transform: translateY(-20%);
}
100% {
   opacity: 1;
   transform: translateY(-50%);
}
`;

const fadeIn = keyframes`
0% {
   opacity: 0;
}
100% {
   opacity: 1;
   
}
`;

class MobileMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      expanded: false
    };
  }

  expand = () => {
    if (this.state.expanded) {
      document.body.style.overflow = "visible";
    } else {
      document.body.style.overflow = "hidden";
    }
    this.setState({ expanded: !this.state.expanded });
  };

  resetOverflow = () => {
    document.body.style.overflow = "visible";
  };

  render() {
    return (
      <div>
        {!this.state.expanded && (
          <Hamburger onClick={this.expand}>
            <HamburgerLine />
            <HamburgerLine />
            <HamburgerLine />
          </Hamburger>
        )}
        {this.state.expanded && (
          <React.Fragment>
            <Overlay>
              <LinkContainer>
                <StyledLink
                  onClick={this.resetOverflow}
                  exact={true}
                  to="/"
                  activeClassName="activeLink"
                >
                  Home
                </StyledLink>
                <ExternalLink
                  onClick={this.resetOverflow}
                  href="https://medium.com/@liamkelly_46694"
                  activeClassName="activeLink"
                >
                  Blog
                </ExternalLink>
                <StyledLink
                  onClick={this.resetOverflow}
                  exact={true}
                  to="/about"
                  activeClassName="activeLink"
                >
                  About
                </StyledLink>
                <StyledLink
                  onClick={this.resetOverflow}
                  exact={true}
                  to="/projects"
                  activeClassName="activeLink"
                >
                  Projects
                </StyledLink>
              </LinkContainer>
            </Overlay>
            <Exit onClick={this.expand}>X</Exit>
          </React.Fragment>
        )}
      </div>
    );
  }
}

export default MobileMenu;

const Hamburger = styled.div`
  float: right;
`;

const HamburgerLine = styled.span`
  display: block;
  width: 33px;
  height: 4px;
  margin-bottom: 5px;
  position: relative;

  //background: #cdcdcd;
  background: #a4b9ce;
  border-radius: 3px;

  z-index: 1;

  transform-origin: 4px 0px;

  transition: transform 0.5s cubic-bezier(0.77, 0.2, 0.05, 1),
    background 0.5s cubic-bezier(0.77, 0.2, 0.05, 1), opacity 0.55s ease;
`;

const Overlay = styled.section`
  z-index: 1000;
  //background: #a4b9ce;
  background: #fafbfc;
  color: white;
  //position absolute;
  position: fixed;
  height: 100%;
  width: 100%;
  right: 0;
  top: 0;
  opacity: 0;
  animation: ${fadeIn} 0.3s cubic-bezier(0.36, 0.07, 0.19, 0.97) both;
`;

const Exit = styled.span`
  float: right;
  font-size: 1.8em;
  z-index: 1001;
  position: relative;
  color: #a4b9ce;
  font-family: "Varela Round", "sans-serif";
`;

const LinkContainer = styled.div`
  top: 50%;
  transform: translateY(-50%);
  position: absolute;
  left: 0;
  right: 0;
  margin: 0 auto;
  text-align: center;
  animation: ${fadeFromBottom} 0.6s cubic-bezier(0.36, 0.07, 0.19, 0.97) both;
`;

const StyledLink = styled(NavLink)`
    
    text-decoration: none;
    font-size: 2rem;
    font-family: 'Varela Round','sans-serif';
    display: block;
    color: #a4b9ce;
    position:relative;
    margin: 2rem 0;


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
