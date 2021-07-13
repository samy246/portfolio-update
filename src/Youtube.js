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
class Youtube extends React.Component {
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
              <a class="nav-link" href="/project">
                Projects
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link active" href="/youtube">
                Youtube
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/contact">
                Contact
              </a>
            </li>
          </ul>
        </div>

        <div class="container">
          <div class="row">
            <div class="col-sm-4">
              <div class="embed-responsive embed-responsive-16by9">
                <br />
            
                <iframe width="560" height="315" src="https://www.youtube.com/embed/tNUBzUcxgjg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
              </div>
            </div>
            <div class="col-sm-4">
              <div class="embed-responsive embed-responsive-16by9">
                <br />
             
                <iframe width="560" height="315" src="https://www.youtube.com/embed/h9j1ITzNhBI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
              </div>
            </div>
            <div class="col-sm-4">
              <div class="embed-responsive embed-responsive-16by9">
                <br />
                <iframe width="560" height="315" src="https://www.youtube.com/embed/Hl7diL7SFw8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
              </div>
            </div>
          </div>
        </div>

        <div class="container">
          <div class="row">
            <div class="col-sm-4">
              <div class="embed-responsive embed-responsive-16by9">
                <br />
            
                <iframe width="560" height="315" src="https://www.youtube.com/embed/T8mqZZ0r-RA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
              </div>
            </div>
            <div class="col-sm-4">
              <div class="embed-responsive embed-responsive-16by9">
                <br />
               
                <iframe width="560" height="315" src="https://www.youtube.com/embed/gOo4XhgbP5o" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
              </div>
            </div>
            <div class="col-sm-4">
              <div class="embed-responsive embed-responsive-16by9">
                <br />
              
                <iframe width="560" height="315" src="https://www.youtube.com/embed/SXpg2zEOfjw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
              </div>
            </div>
          </div>
        </div>

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

export default Youtube;