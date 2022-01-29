import React from "react";

class Home extends React.Component {
  render() {
    return (
      <main>
        <section className="info">
          <article id="about-me">
            <p>
              I am a highly motivated, dependable, and progress-focused Mandarin
              Chinese Teacher with a long-standing background in education.
            </p>
            <p>
              Throughout the course of my career, I have perfected integrating
              technology into my teaching. I have also helped many students with
              my standardized testing proficiency. I am a capable and consistent
              problem-solver, skilled at prioritizing and managing projects with
              proficiency.
            </p>
            <p>
              In my previous role, I contributed to student development that led
              to successful admittance to the Governor’s Honors Program. Now I
              am a web developer with a focus on education applications. Visit
              my portfolio to see previews of my projects. There, you can also
              find links to my contact information as well as my resume.
            </p>
          </article>
          <p>
            <img
              src="./images/self_headshot.jpg"
              alt="My profile picture"
              id="profilePicture"
            />
          </p>
        </section>
      </main>
    );
  }
}

export default Home;
