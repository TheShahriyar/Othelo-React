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
import ServiceSection from "./components/ServiceSection";
import PortfolioSection from "./components/PortfolioSection";
import CallToAction2 from "./components/CallToAction2";
import TeamSection from "./components/TeamSection";

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
          <ServiceSection />
          <PortfolioSection />
          <CallToAction2 />
          <TeamSection />
        </div>
      </React.Fragment>
    );
  }
}
