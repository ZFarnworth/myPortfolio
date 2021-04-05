import React from "react";
import portrait from "../../assets/images/zfPortrait.png";

function About() {
  return (
    <div className="text-center m-4">
      <div className="about-title">
        <h1>About Me</h1>
      </div>
      <div>
        <div>
          <img className="portrait" alt="Zac Farnworth" src={portrait} />
        </div>
        <div className="about-body">
          <p>Developer. Business Manager.</p>
          <p>Creating functional websites for you or your business</p>
        </div>
      </div>
    </div>
  );
}

export default About;
