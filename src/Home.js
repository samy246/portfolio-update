import React from "react";
import ReactDOM from "react-dom";
import{
  BrowserRouter as Router,
  Route,
  Link,
  NavLink,
  Switch
} from "react-router-dom";
import ig from "./myphoto.jpg"
import Blink from 'react-blink-text';
import "./index.css"
class Home extends React.Component{
    constructor(){
        super();
}
render(){
    return(
        <body>
            <div class="heading">
                <div class="jumbotron text-center" id="heading">
                    <h1 class="myname">DURAISAMY</h1>
                  <p class="mydesc">SOFTWARE DEVELOPER</p> 
<ul class="nav nav-pills nav-justified" id="heading">
    <li class="nav-item">
        <a class="nav-link active" href="/">
            HOME
        </a></li>

    <li class="nav-item">
        <a class="nav-link active" href="/project">
            PROJECT
        </a></li>

<li class="nav-item">
        <a class="nav-link active" href="/youtube">
            YOUTUBE
        </a> </li>

        <li class="nav-item">
        <a class="nav-link active" href="/contact">
            CONTACT
        </a></li>
</ul>
                </div>
    <div class="container">
        <div class="row">
            <div class="col-sm-4">
<div class="rounded-circle">
<img  src={ig} class="rounded-circle mx-auto d-block" alt="my photo" width="130px" height="150px"/>

</div>
<br/>
    </div>
   <div class="col-sm-8">
       <h2 class="myskills">Carrer Objective</h2>
    <br/>
    <p class="skills">
    To secure a challenging position in a reputable organization to expand my learnings, knowledge, and skills. Secure a responsible career opportunity to fully utilize my training and skills, while making a significant contribution to the success of the company.
    </p>
    </div>
    </div>
    <div class="container">
        <div class="row">
            <div class="col-sm-6">
            <h2 class="myskills">Technical Skills</h2>
               <br/> 
               <ul class="skills">
                   <li>
                      Front End languages - HTML,CSS,JAVASCRIPT,REACTJS 
                   </li>
<li>
    Backend languages-NODEJS
</li>
<li>
    Database - MYSQL
</li>

               </ul>
            </div>
            <div class="col-sm-6">
            <h2 class="myskills">Internship and Certification </h2><br/>
               <ul class="skills">
                   <li>
                       I done Web development in udemy. 
                   </li>
                   <li>
                       I done Web development in GreatLearning. 
                   </li>
       
                   </ul> 

            </div>
            <br/>

            <div class="col-sm-12">
                <h2 class="myskills">
                    MyProjects
                </h2>
                <br/>
                <table class="table table-dark table-striped">
            <thead>
            <tr>
                <th>Project Domain</th>
                <th>Programming languages</th>
                <th>Project Link</th>
            </tr>
            </thead>
            <tbody>
            <tr>
                <td>Full Stack Web development</td>
                <td>HTML,CSS,JAVASCRIPT</td>
                <td>
                    <a href={"https://veinier-washer.000webhostapp.com/"}>Entertaining Application</a>

                </td>
            </tr>
        
            <tr>
                <td>Android and ios  App development</td>
                <td>FLUTTER,DART</td>
                <td>
                    <a href={"https://github.com/samy246/sem8pro/"}>Instagram Clone</a>

                </td>
            </tr>
            </tbody>
            
            
                </table>
            </div>

            {/* Education */}
            <div class="col-sm-12">
                <h2 class="myskills">
                    Education Qualification
                </h2>
                <br/>
                <table class="table table-dark table-striped">
            <thead>
            <tr>
                <th>Degree</th>
                <th>School/College</th>
                <th>YOP</th>
                <th>Percentage</th>
            </tr>
            </thead>
            <tbody>
            <tr>
                <td>B.E (CSE)</td>
                <td>Chettinad College Of Engineering & Technology</td>
                <td>2021</td>
                <td>79%</td>
            </tr>
        
            <tr>
            <td>HSC(12th)</td>
                <td>Sathya Saai Institution</td>
                <td>2017</td>
                <td>84%</td>
  
            </tr>
            <tr>
            <td>SSLC(10th)</td>
                <td>Sri Krishna Matric Higher Secondary School</td>
                <td>2015</td>
                <td>80%</td>
  
 
            </tr>
            </tbody>
            
            
                </table>
            </div>
        </div>

    </div>
    </div>

    {/* footer */}
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

    </div>
     </div>
    </body>
    )
}
}

export default Home;