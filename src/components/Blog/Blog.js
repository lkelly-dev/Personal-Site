import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import styled, { keyframes } from "styled-components";
import Navigation from "../molecules/Navigation";
var moment = require("moment");

class Blog extends Component {
  constructor(props) {
    super(props);
    this.state = {
      blogData: []
    };
  }
  componentDidMount() {
    axios.get("http://172.93.49.234:1337/blog?_sort=date:desc").then(res => {
      const blogData = res.data;
      this.setState({ blogData });
    });
  }
  render() {
    return (
      <div>
        <Navigation />
        <Container>
          <StyledHeader> Writings and Ramblings</StyledHeader>
          {this.state.blogData.map(function(post, index) {
            return (
              <BlogPost key={post.id}>
                <StyledLink to={`/blog/${post.id}`}>{post.title}</StyledLink>
                <SubInfo>{moment(post.date).format("MMM D, YYYY")}</SubInfo>
                <SubInfo> - {post.readtime} minute read</SubInfo>
              </BlogPost>
            );
          }, this)}
        </Container>
      </div>
    );
  }
}

//new Date(post.date).toDateString()
export default Blog;

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

const Container = styled.section`
  max-width: 42rem;
  margin-left: auto;
  margin-right: auto;
  padding: 2.625rem 1.3125rem;
  width: 100vw;
  animation: ${fadeInBottom} 0.8s cubic-bezier(0.36, 0.07, 0.19, 0.97) both;
`;

const BlogPost = styled.div`
  box-shadow: inset 0 -1px #dae4ed;
  margin-top: 2rem;
  padding-bottom: 2rem;
`;

const StyledHeader = styled.h2`
  color: #49b882;
  margin-bottom: 2rem;
  font-weight: 800;
  font-size: 1.9rem;
  position: relative;
  &:after {
    position: absolute;
    content: "";
    top: 120%;
    height: 1px;
    width: 400px;
    max-width: 80%;
    left: 0;
    margin: 0 auto;
    background: #e4f7ed;
  }
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  background-image: none;
  text-shadow: none;
  font-size: 1.5rem;
  display: block;
  margin-bottom: 1rem;
  color: #193652;
`;

const SubInfo = styled.span`
  color: #8fa1b3;
  font-size: 18px;
  font-weight: 400;
`;
