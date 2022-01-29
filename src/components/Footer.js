import React from "react";

class Footer extends React.Component {
  render() {
    return (
      <footer>
        <h2 id="contact-me">Contact me</h2>

        <nav>
          <ul>
            <li>
              <a href="mailto:yanghui.xi1@gmail.com?subject=Hi There!">Email</a>
            </li>
            <li>
              <a href="https://github.com/yanghuixi1" target="_blank">
                Github
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/yanghui-xi-75104a217/"
                target="_blank"
              >
                Linkedin
              </a>
            </li>
          </ul>
        </nav>
      </footer>
    );
  }
}

export default Footer;
