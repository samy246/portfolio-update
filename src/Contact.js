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
class Contact extends React.Component {
  constructor() {
    super();
    this.state = { subject: "", body: "" };
    
  }
  validateForm = event => {
    var subject = document.getElementById("subject").value;
    var body = document.getElementById("body").value;
    window.location.href =
      "mailto:yourmailid@gmail.com?subject=" + subject + "&body=" + body;
    event.preventDefault();
    return false;
  };

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
              <a class="nav-link" href="/youtube">
                Youtube
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link active" href="/contact">
                Contact
              </a>
            </li>
          </ul>
        </div>

        <div class="container" id="mailme">
          <div class="row">
            <div class="col-sm-8">
              <form
                class="form-horizontal"
                onSubmit={this.validateForm}
                target="_blank"
                method="GET"
              >
                <div class="form-group form-group-lg">
                  <label class="skills" for="Subject">
                    Name
                  </label>
                  <input
                    type="text"
                    id="subject"
                    class="form-control"
                    required
                  />
                </div>
                <div class="form-group form-group-lg">
                  <label class="skills" for="Body">
                    Your Message
                  </label>
                  <textarea id="body" class="form-control" rows="5" required />
                </div>
                <input
                  type="submit"
                  value="Send"
                  id="navigation"
                  class="btn btn-primary"
                />
              </form>
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
        </ul> <br />
          <p>Copyright By DS</p>
        </div>
      </div>
    );
  }
}

export default Contact;