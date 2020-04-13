import React, { Component } from "react";
import "./Nav.css";

export default class Nav extends Component {
  constructor() {
    super();
    this.state = {
      status: "drop-down",
    };
  }

  toggle = () => {
    if (this.state.status === "drop-down-open") {
      this.setState({
        status: "drop-down-closed",
      });
    } else if (
      this.state.status === "drop-down-closed" ||
      this.state.status === "drop-down"
    ) {
      this.setState({
        status: "drop-down-open",
      });
    }
  };

  render() {
    return (
      <>
        <div>
          <nav className="nav-main">
            <div className="container-1">
              <h1>Start Bootstrap</h1>
            </div>
            <div className="container-2">
              <ul>
                <li>Services</li>
                <li>Portfolio</li>
                <li>About</li>
                <li>Team</li>
                <li>Contact</li>
                <li id="hamburger">
                  <button onClick={this.toggle}>
                    <img
                      src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Hamburger_icon.svg/1200px-Hamburger_icon.svg.png"
                      alt="ham"
                    ></img>
                  </button>
                </li>
              </ul>
            </div>
          </nav>
          <div className={`${this.state.status}`}>
            <div className="menu-content">
              <h1>Services</h1>
              <h1>Portfolio</h1>
              <h1>About</h1>
              <h1>Team</h1>
              <h1>Contact</h1>
            </div>
          </div>
        </div>
      </>
    );
  }
}
