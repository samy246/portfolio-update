import React from "react";
import ReactDOM from "react-dom";
import{
  BrowserRouter as Router,
  Route,
  Link,
  NavLink,
  Switch
} from "react-router-dom";
import "./index.css"
import Home from "./Home";
import Project from "./Project";
import Youtube from "./Youtube";
import Contact from "./Contact";

const routing =(
  <Router>
    <div>
      <Switch>
        <Route exact path="/" component={Home}></Route>
     <Route exact path="/project" component={Project}></Route>
     <Route exact path="/youtube" component={Youtube}></Route>
     <Route exact path="/contact" component={Contact}></Route>
     
      </Switch>
    </div>
  </Router>
);
 ReactDOM.render(routing,document.getElementById("root"));