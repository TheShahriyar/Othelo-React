import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./css/lineicon.css";
import "./css/animate.css";
// import "./css/owl.carousel.css";
// import "./css/owl.theme.css";
// import "./css/owl.transitions.css";
import "./scss/style.scss";
import "./scss/responsive.scss";

import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import CallToAction from "./components/CallToAction";
import AboutSection from "./components/AboutSection";
import MoreAboutSection from "./components/MoreAboutSection";

export default class App extends Component {
  render() {
    return (
      <React.Fragment>
        <div id="container">
          <Navbar />
          <Banner />
          <CallToAction />
          <AboutSection />
          <MoreAboutSection />
        </div>
      </React.Fragment>
    );
  }
}
