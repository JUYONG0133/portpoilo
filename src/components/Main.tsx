import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import '../assets/styles/Main.scss';
import mainImage from '../assets/images/main.png';

function Main() {

  return (
    <div className="container">
      <div className="about-section">
        <div className="image-wrapper">
          <img src={mainImage} alt="Avatar"/>
        </div>
        <div className="content">
          <div className="social_icons">
            <a href="https://github.com/JUYONG0133" target="_blank" rel="noreferrer"><GitHubIcon/></a>
          </div>
          <h1>박주용</h1>
          <p>Back-end engineer</p>

          <div className="mobile_social_icons">
            <a href="https://github.com/JUYONG0133" target="_blank" rel="noreferrer"><GitHubIcon/></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;