import React from "react";
import "./welcome.css";
import { useNavigate } from 'react-router';
function Welcome() {
  const navi= useNavigate();
  return (
    <div className="home_main">
      <div className="logo_main">
        <img src="../logo.png" alt="logo" id="lg_main" />
      </div>
      <div>
        <h1 className="heading_main">To-Do-List</h1>
      </div>
      <div className="button_main">
        <button className="btn_main" onClick={()=>navi('/read')}>Read me</button>
      </div>
    </div>
  );
}

export default Welcome;
