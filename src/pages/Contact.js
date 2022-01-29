import React from "react";

class Contact extends React.Component {
  render() {
    return (
      <form className="sign-in-box">
        <h1 className="h3 mb-3 fw-normal">Contact</h1>

        <div className="form-floating">
          <input type="text" class="form-input" placeholder="Name" required />
        </div>
        <div className="form-floating">
          <input
            type="email"
            class="form-input"
            placeholder="Email Address"
            required
          />
        </div>
        <div className="form-floating">
          <textarea
            type="text"
            class="form-input"
            placeholder="How can I help you?"
            required
          ></textarea>
        </div>
        <button className="btn btn-dark" type="submit">
          Submit
        </button>
        <br />
      </form>
    );
  }
}

export default Contact;
