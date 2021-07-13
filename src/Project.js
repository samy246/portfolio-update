import React from "react";
import ReactDOM from "react-dom";
import {
  BrowserRouter as Router,
  Route,
  Link,
  NavLink,
  Switch
} from "react-router-dom";
import "./index.css";
class Project extends React.Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div class="heading">
        <div class="jumbotron text-center" id="heading">
          <h1 class="myname">DURAISAMY</h1>
          <p class="myoccupation">SOFTWARE DEVELOPER</p>
          <ul class="nav nav-pills nav-justified" id="navigation">
            <li class="nav-item">
              <a class="nav-link " href="/">
                Home
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link active" href="/about">
                Projects
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/youtube">
                Youtube
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link " href="/contact">
                Contact
              </a>
            </li>
          </ul>
        </div>

        <div class="container">
          <div class="row">
            <div class="col-sm-12">
              <h2 class="myskills" style={{ textAlign: "justify" }}>
                Web application Projects & Android,ios App Projects
              </h2>
              <div>
                                <p class="skills" style={{ textAlign: "justify" }}>
                  Recruiters will be able to shortlist the candidate based on
                  there technical , aptitude and communication skills once the
                  candidate completed the test. In this application , Candidate
                  also booking the slot for there exam and they also see there
                  performance when the result published.
                </p>
                </div>
                </div>
            <div class="col-sm-12">
              <h2 class="myskills" style={{ textAlign: "justify" }}>
                Online Entertaining Application
              </h2>
              <div>
                <div class="embed-responsive embed-responsive-16by9">
               
                <iframe width="560" height="315" src="https://www.youtube.com/embed/MaVh5R-Dg3g" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
               
                </div>
                <p class="skills" style={{ textAlign: "justify" }}>
                  Online Entertaining Apllication has an ,play game and some animations.
                </p>
                <h2 class="myskills">Project Domain and Tools</h2>
                <p class="skills">
                  This application developed by using the following programming
                  languages and tools
                </p>
                <ul>
                  <li>Frontend - HTML, CSS, Javascript</li>
                  <li>Backend - PHP</li>
                  <li>Database - MySQL</li>
                </ul>
                <div>
                  <ul class="nav nav-pills justify-content-center">
                    <li class="nav-item">
                      <a
                        class="nav-link active"
                        href={
                          "https://github.com/samy246/sce"
                        }
                      >
                        Github Link For Project Source Code
                      </a>
                    </li>
                  </ul>
                  <br />
                </div>
              </div>
            </div>
            <br />
            <div class="col-sm-12">
              <h2 class="myskills" style={{ textAlign: "justify" }}>
               Send Mail Apllication 
              </h2>
              <div>
                <div class="embed-responsive embed-responsive-16by9">
                <iframe width="560" height="315" src="https://www.youtube.com/embed/KzAZJV12kHo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
                <p class="skills" style={{ textAlign: "justify" }}>
                  I created this  website for myself. Hereby I
                  embedded how to send mail using php mailer and some animations.
                </p>
                <h2 class="myskills">Project Domain and Tools</h2>
                <p class="skills">
                  This application developed by using the following programming
                  languages and tools
                </p>
                <ul>
                  <li>Frontend -  HTML, CSS, Javascript</li>
                  <li>Backend -  PHP</li>
                </ul>
                <div>
                  <ul class="nav nav-pills justify-content-center">
                    <li class="nav-item">
                      <a
                        class="nav-link active"
                        href={
                          "https://github.com/samy246/mail"
                        }
                      >
                        Github Link For Project Source Code
                      </a>
                    </li>
                  </ul>
                  <br />
                </div>
              </div>
            </div>
            <br />
             {/* <div class="col-sm-12">
              <h2 class="myskills" style={{ textAlign: "justify" }}>
                To Do List App Using React JS
              </h2>
              <div>
                <div class="embed-responsive embed-responsive-16by9">
                  <iframe
                    class="embed-responsive-item"
                    src="https://www.youtube.com/embed/j28RMsRpD2o"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                  />
                </div>
                <p class="skills" style={{ textAlign: "justify" }}>
                  To Do List App helpful for user to plan their task and track
                  their task. User can also strikeout or delete their task once
                  they completed their task
                </p>
                <h2 class="myskills">Project Domain and Tools</h2>
                <p class="skills">
                  This application developed by using the following programming
                  languages and tools
                </p>
                <ul>
                  <li>Frontend - React JS, HTML, CSS, Javascript</li>
                </ul>
                <div>
                  <ul class="nav nav-pills justify-content-center">
                    <li class="nav-item">
                      <a
                        class="nav-link active"
                        href={
                          "https://github.com/"
                        }
                      >
                        Github Link For Project Source Code
                      </a>
                    </li>
                  </ul>
                  <br />
                </div>
              </div> 
                      </div>*/}
                      </div>
        </div> 
        <br />
        <div class="jumbotron text-center" id="footer">
        <ul class="nav justify-content-center">
            <li class="nav-item">
                <a href="https://www.linkedin.com/in/durai-samy-45a9941b1/"
                class="fa fa-linkedin nav-link"
                style={{color:"blue"}}/>
            </li>
            <li class="nav-item">
                <a href="https://www.instagram.com/_____juz_____sprint_____/"
                class="fa fa-instagram nav-link"
                style={{color:"violet"}}/>
            </li>
            <li class="nav-item">
                <a href="https://github.com/samy246"
                class="fa fa-github nav-link"
                style={{color:"black"}}/>
            </li>
            <li class="nav-item">
              <a
                href="https://www.youtube.com/watch?v=MaVh5R-Dg3g&list=PLP7VmNDlluWqgZ11bFTxLO06tx6TObaNg"
                class="fa fa-youtube nav-link"
                style={{ color: "red" }}
              />
            </li>
        </ul>
          <br />
          <p>Copyright By DS</p>
        </div>
      </div>
    );
  }
}

export default Project;