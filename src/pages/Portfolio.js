import React from "react";

class Portfolio extends React.Component {
  render() {
    return (
      <div className="products" id="work">
        <section className="card">
          <a
            href="https://enigmatic-beyond-88465.herokuapp.com"
            class="link"
            target="_blank"
          >
            <header className="project-title">Welp Reviews</header>
          </a>
          <img
            src="./images/welp_reviews.png"
            alt="Digital books display on the screen"
          />
          <p>
            Welp Reviews is a book reviews and personal digital library
            management application.
          </p>
          <p>
            Click
            <a href="https://github.com/yanghuixi1/WelpReviews" target="_blank">
              {" "}
              here{" "}
            </a>
            to check the git repository.
          </p>
        </section>

        <section className="card">
          <a
            href="https://yanghuixi1.github.io/work-day-scheduler/"
            className="link"
            target="_blank"
          >
            <header className="project-title">Work Day Scheduler</header>
          </a>
          <img
            src="./images/work-day-scheduler.png"
            alt="Two Javascript books on the shelf"
          />
          <p>
            This is a calendar application that allows a user to save event for
            each hour of the day.
          </p>
          <p>
            Click
            <a
              href="https://github.com/yanghuixi1/work-day-scheduler"
              target="_blank"
            >
              {" "}
              here{" "}
            </a>
            to check the git repository.
          </p>
        </section>

        <section className="card">
          <a
            href="https://yanghuixi1.github.io/coding-quiz/"
            className="link"
            target="_blank"
          >
            <header className="project-title">Coding Quiz</header>
          </a>
          <img
            src="./images/coding-quiz.png"
            alt="Computer screen with code on it"
          />
          <p>This is a timed coding quiz with multiple-choice questions!</p>
          <p>
            Click
            <a href="https://github.com/yanghuixi1/coding-quiz" target="_blank">
              {" "}
              here{" "}
            </a>{" "}
            to check the git repository.
          </p>
        </section>

        <section className="card">
          <a
            href="https://yanghuixi1.github.io/JOBS-4-MORE"
            className="link"
            target="_blank"
          >
            <header className="project-title">Jobs 4 More</header>
          </a>
          <img
            src="./images/Jobs-4-More.png"
            alt="I design and develop experiences that make people's lives better message"
          />
          <p>
            This is a job aggregator application that allows users to find jobs
            by selecting categories and experience level!
          </p>
          <p>
            Click
            <a href="https://github.com/yanghuixi1/JOBS-4-MORE" target="_blank">
              {" "}
              here{" "}
            </a>
            to check the git repository.
          </p>
        </section>
        <section className="card">
          <a
            href="https://yanghuixi1.github.io/weather-dashboard/"
            className="link"
            target="_blank"
          >
            <header className="project-title">Weather Dashboard</header>
          </a>
          <img
            src="./images/weather_dashboard.png"
            alt="5 days of weather information for the city the user searched"
          />
          <p>
            This is an application that allows users to search current and
            future conditions for that city and that city is added to the search
            history
          </p>
          <p>
            Click
            <a
              href="https://github.com/yanghuixi1/weather-dashboard"
              target="_blank"
            >
              {" "}
              here{" "}
            </a>
            to check the git repository.
          </p>
        </section>
        <section className="card">
          <a
            href="https://yanghuixi-note-taker.herokuapp.com/"
            className="link"
            target="_blank"
          >
            <header className="project-title">Note Taker</header>
          </a>
          <img
            src="./images/note_taker.png"
            alt="I design and develop experiences that make people's lives better message"
          />
          <p>
            This is an Express.js application that allows you to write, save and
            manage your notes.
          </p>
          <p>
            Click{" "}
            <a href="https://github.com/yanghuixi1/note-taker" target="_blank">
              {" "}
              here{" "}
            </a>
            to check the git repository.
          </p>
        </section>
      </div>
    );
  }
}

export default Portfolio;
