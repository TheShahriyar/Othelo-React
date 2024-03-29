import React, { Component } from "react";
import { Link } from "react-scroll";
import "bootstrap/dist/css/bootstrap.css";
import "./css/lineicon.css";
import "./css/animate.css";
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
import NewsSection from "./components/NewsSection";
import PricingSection from "./components/PricingSection";
import ClientSection from "./components/ClientSection";
import ContactSection from "./components/ContactSection";
import FooterSection from "./components/FooterSection";

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
          <NewsSection></NewsSection>
          <PricingSection />
          <ClientSection />
          <ContactSection />
          <FooterSection />
          <Link
            id="back-to-top"
            className="back-to-top reveal"
            to="hero-banner"
            smooth={true}
            duration={500}
          >
            <i className="fa fa-angle-up fa-2x"></i>
          </Link>
        </div>
      </React.Fragment>
    );
  }
}
