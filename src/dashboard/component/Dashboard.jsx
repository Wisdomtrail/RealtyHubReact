import React from "react";
import '../../dashboard/style/Dashboard.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faFloppyDisk, faCloudArrowUp, faHeart, faHome, faUser, faCog } from '@fortawesome/free-solid-svg-icons';
// import defaultImage from '../assets/image/defaultImage.jpeg';

const DashBoard = () => {
    return (
      <div className="mainContainer">
        <div className="sideNav">
          <div className="imageContainer">
            <img src={""} alt="" /><br /><br />
            <button className="update">Update Profile</button>
          </div>
          <div className="options">          
            <FontAwesomeIcon icon={""}  className="white-icon" />
            <button className="home">Home</button><br /><br /><br />
            <FontAwesomeIcon id="upload" icon={""}  className="white-icon" />
            <button  >Upload Property</button><br /><br /><br />
            <FontAwesomeIcon id="profile" icon={""}  className="white-icon" />
            <button className="prop">Properties</button><br /><br /><br />
            <FontAwesomeIcon id="heart"  icon={""} className="white-icon" />
            <button>Saved properites</button><br /><br /><br />
            <FontAwesomeIcon id="profile" icon={""} className="white-icon" />
            <button className="user">Profile</button><br /><br /><br />
            <FontAwesomeIcon id="profile" icon={""} className="white-icon" />
            <button className="settings">Settings</button><br />
          </div>
        </div>
        <div className="rightNav">
          <div>
            <div><input type="text" placeholder="Enter address, postal code or Price" /></div>
          </div>
          <div className="properties">
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
      </div>
    );
  };
  
  export default DashBoard;