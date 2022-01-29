import React from "react";

class Resume extends React.Component {
  render() {
    return (
      <div id="resume-container">
        <h3>
          Download my&nbsp;
          <a
            href="https://drive.google.com/file/d/1FHwptk3K6igvHaAvRlM-0z0XQpA399_W/view?usp=sharing"
            target="_blank"
            id="resume-link"
          >
            resume
          </a>
        </h3>
        <br />
        <h2 className="resume-list-title">Front-end Proficiencies</h2>

        <ul className="resume-list">
          <li>HTML</li>
          <li>CSS</li>
          <li>JavaScript</li>
          <li>jQuery</li>
          <li>responsive design</li>
          <li>React</li>
          <li>Bootstrap</li>
        </ul>
        <br />
        <h2 className="resume-list-title">Back-end Proficiencies</h2>

        <ul className="resume-list">
          <li>APIs</li>
          <li>Node</li>
          <li>Express</li>
          <li>MySQL, Sequelize</li>
          <li>MongoDB, Mongoose</li>
          <li>Rest</li>
          <li>GraphQL</li>
        </ul>
      </div>
    );
  }
}

export default Resume;
