import React, { Component } from "react";
import { Link } from "react-scroll";

export default class Navbar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isNavbarOpen: false
    };
  }

  handleNavbar = () => {
    this.setState({
      isNavbarOpen: !this.state.isNavbarOpen
    });
  };

  render() {
    const { isNavbarOpen } = this.state;
    return (
      <nav id="navbar" className="navbar navbar-default navbar-fixed-top">
        <div className="container">
          <div className="navbar-header page-scroll">
            <button
              type="button"
              className="navbar-toggle"
              onClick={this.handleNavbar}
              data-target="bs-example-navbar-collapse-1"
            >
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <Link
              className="navbar-brand page-scroll"
              to="hero-banner"
              activeClass="active"
              smooth={true}
              duration={500}
            >
              Othelo
            </Link>
          </div>

          <div
            className={`collapse navbar-collapse ${
              isNavbarOpen ? "show" : "hide"
            }`}
            id="bs-example-navbar-collapse-1"
          >
            <ul className="nav navbar-nav navbar-right">
              <li>
                <Link
                  className="page-scroll"
                  to="hero-banner"
                  activeClass="active"
                  smooth={true}
                  offset={-80}
                  duration={500}
                >
                  Home
                </Link>
              </li>

              <li>
                <Link
                  className="page-scroll"
                  to="about-section"
                  activeClass="active"
                  smooth={true}
                  offset={-80}
                  duration={500}
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  className="page-scroll"
                  to="services"
                  activeClass="active"
                  smooth={true}
                  offset={-80}
                  duration={500}
                >
                  Service
                </Link>
              </li>
              <li>
                <Link
                  className="page-scroll"
                  to="portfolio"
                  activeClass="active"
                  smooth={true}
                  offset={-80}
                  duration={500}
                >
                  Portfolio
                </Link>
              </li>
              <li>
                <Link
                  className="page-scroll"
                  to="team"
                  activeClass="active"
                  smooth={true}
                  offset={-80}
                  duration={500}
                >
                  Team
                </Link>
              </li>
              <li>
                <Link
                  className="page-scroll"
                  to="blog"
                  activeClass="active"
                  smooth={true}
                  offset={-80}
                  duration={500}
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  className="page-scroll"
                  to="pricing"
                  activeClass="active"
                  smooth={true}
                  offset={-80}
                  duration={500}
                >
                  Pricing
                </Link>
              </li>
              <li>
                <Link
                  className="page-scroll"
                  to="client"
                  activeClass="active"
                  smooth={true}
                  offset={-80}
                  duration={500}
                >
                  Clients
                </Link>
              </li>
              <li>
                <Link
                  className="page-scroll"
                  to="contact"
                  activeClass="active"
                  smooth={true}
                  offset={-80}
                  duration={500}
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}
