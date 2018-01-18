import React, { Component } from "react";
import axios from "axios";
import styled, { keyframes } from "styled-components";
import Navigation from "../molecules/Navigation";
const ReactMarkdown = require("react-markdown");
var moment = require("moment");

class BlogPost extends Component {
  constructor(props) {
    super(props);
    this.state = {
      blogData: [],
      loaded: false,
      error: false
    };
  }

  componentDidMount() {
    const postID = this.props.match.params.postID;
    console.log(postID);
    axios
      .get(`http://172.93.49.234:1337/blog/${postID}`)
      .then(res => {
        const blogData = res.data;
        this.setState({ blogData, loaded: true });
      })
      .catch(error => {
        console.log(error);
        this.setState({ error: true });
      });
  }

  render() {
    const postDate = this.state.blogData.date;
    if (this.state.error) {
      return (
        <div>
          <Navigation />
          <h3 style={{ textAlign: "center" }}>Sorry that post can't be found</h3>
        </div>
      );
    } else if (this.state.loaded) {
      return (
        <div>
          <Navigation />
          <Container>
            <Title>{this.state.blogData.title}</Title>
            <Date>{moment(postDate).format("MMM D, YYYY")}</Date>
            <Markdown>
              <ReactMarkdown source={this.state.blogData.post} />
            </Markdown>
          </Container>
        </div>
      );
    }
    return (
      <div>
        <Navigation />
      </div>
    );
  }
}

export default BlogPost;

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

const Title = styled.h1`
  margin-bottom: 0.5rem;
  margin-top: 1 rem;
  text-align: center;
  color: #49b882;
`;

const Markdown = styled.div`
  //font-size: 19px;
  line-height: 32px;
  font-weight: 300;
  margin: 0 0 40px;
  padding-left: 0;
  text-transform: none;
  color: #4d6471;
  font-family: "Open Sans", sans-serif;
`;

const Date = styled.p`
  font-size: 0.87055rem;
  line-height: 1.58rem;
  display: block;
  margin-bottom: 1.58rem;
  text-align: center;
  color: rgb(143, 161, 179);
`;
