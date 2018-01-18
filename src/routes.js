import React, { Component } from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import App from "./App";
import Resume from "./components/organisms/resume";
import About from "./components/organisms/about";
import Projects from "./components/organisms/projects";
import Blog from "./components/Blog/Blog";
import BlogPost from "./components/Blog/BlogPost";

class Routes extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={App} />
          <Route path="/resume" component={Resume} />
          <Route path="/about" component={About} />
          <Route path="/projects" component={Projects} />
          <Route exact path="/blog" component={Blog} />
          <Route path="/blog/:postID" component={BlogPost} />
          <Redirect to="/" />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default Routes;

//<Redirect to="/" />
