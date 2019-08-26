import React, { Component } from "react";

export default class Navbar extends Component {
  render() {
    return (
      <nav id="navbar" className="navbar navbar-default navbar-fixed-top">
        <div className="container">
          <div className="navbar-header page-scroll">
            <button
              type="button"
              className="navbar-toggle"
              data-toggle="collapse"
              data-target="#bs-example-navbar-collapse-1"
            >
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <a className="navbar-brand page-scroll" href="body">
              Othelo
            </a>
          </div>

          <div
            className="collapse navbar-collapse"
            id="bs-example-navbar-collapse-1"
          >
            <ul className="nav navbar-nav navbar-right">
              <li>
                <a className="page-scroll" href="body">
                  Home
                </a>
              </li>

              <li>
                <a className="page-scroll" href="#about-section">
                  About
                </a>
              </li>
              <li>
                <a className="page-scroll" href="#services">
                  Service
                </a>
              </li>
              <li>
                <a className="page-scroll" href="#portfolio">
                  Portfolio
                </a>
              </li>
              <li>
                <a className="page-scroll" href="#team">
                  Team
                </a>
              </li>
              <li>
                <a className="page-scroll" href="#blog">
                  Blog
                </a>
              </li>
              <li>
                <a className="page-scroll" href="#pricing">
                  Pricing
                </a>
              </li>
              <li>
                <a className="page-scroll" href="#client">
                  Clients
                </a>
              </li>
              <li>
                <a className="page-scroll" href="#contact">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}
