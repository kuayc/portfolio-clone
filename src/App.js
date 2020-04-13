import React, { Component } from "react";
import "./App.css";

class App extends Component {
  setScrollHeight = (value) => {
    window.scrollTo(+value, +value);
    console.log(value);
  };
  render() {
    return (
      <div className="App">
        <div className="nav-container">
          <nav className="nav">
            <span className="title">Bootcamp</span>
            <p class="nav-link js-scroll-trigger" className="nav-links">
              SERVICES
            </p>
            <p className="nav-links">PORTFOLIO</p>
            <p className="nav-links">ABOUT</p>
            <p className="nav-links">TEAM</p>
            <p className="nav-links">CONTACT</p>
            <button className="menu-bars">menu</button>
          </nav>

          <div className="welcome-container">
            <p className="welcome1">Welcome to DFW!</p>
            <button
              value="800"
              onClick={() => this.setScrollHeight()}
              className="tell-more"
            >
              Tell Me More
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
