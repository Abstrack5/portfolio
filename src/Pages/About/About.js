import React from "react";
import "./About.css";
import HeadshotPic from "../../images/headshot.jpg";


import FormContainer from "../../Components/FormContainer";


function About() {
  return (
    <div className="AboutMainContainer">
      <h1 className="AboutMeHeader text-center">About Me</h1>
      <div className="AboutMeContainer row">
        <div className="row">
          <div className="ImgContainer col-sm-auto col-md col-lg">
            <img
              src={HeadshotPic}
              alt="headshot"
              className="ImgBox img-fluid"
            />
          </div>
          <div className="AboutMeBox col-sm-auto col-md-auto col-lg">
            <div className="AboutMeContentBox">
              <p className="AboutMeContent pt-4">
                Hello! My name is Armon Ahmadi and I am excited you are here!
              </p>
              <p className="AboutMeContent">
                lorem ipsum dolor lorem ipsum lorem lorem ipsum lorem ipsum
                lorem ipsum dolor lorem ipsum lorem lorem ipsum lorem ipsum
                lorem ipsum dolor lorem ipsum lorem lorem ipsum lorem ipsum
                lorem ipsum dolor lorem ipsum lorem lorem ipsum lorem ipsum
              </p>
              <p className="AboutMeContent">
                lorem ipsum dolor lorem ipsum lorem lorem ipsum lorem ipsum
                lorem ipsum dolor lorem ipsum lorem lorem ipsum lorem ipsum
                lorem ipsum
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
