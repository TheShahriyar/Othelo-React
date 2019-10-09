import React, { Component } from "react";
import SectionTitle from "./SectionTitle";
import ProgressBar from "./ProgressBar";
import CountUp from "react-countup";

export default class MoreAboutSection extends Component {
  render() {
    return (
      <section className="pad-t80 pad-b50">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <SectionTitle
                title="More about us"
                style="left small"
              ></SectionTitle>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
              <div className="row" style={{ marginTop: 30 }}>
                <div className="col-md-6">
                  <div className="feature-3">
                    <a href="">
                      <i className="icon-clock"></i>
                    </a>
                    <h4>Professional</h4>
                    <span>We maintain schedule</span>
                  </div>
                  <div className="feature-3">
                    <a href="#">
                      <i className="icon-layers"></i>
                    </a>
                    <h4>Support</h4>
                    <span>We support client</span>
                  </div>
                  <div className="feature-3">
                    <a href="#">
                      <i className="icon-genius"></i>
                    </a>
                    <h4>Genius</h4>
                    <span>We have genious team</span>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="feature-3">
                    <a href="#">
                      <i className="icon-bargraph"></i>
                    </a>
                    <h4>Economy</h4>
                    <span>Fast Business Growth</span>
                  </div>
                  <div className="feature-3">
                    <a href="#">
                      <i className="icon-puzzle"></i>
                    </a>
                    <h4>Up to date</h4>
                    <span>Secure Upgrade</span>
                  </div>
                  <div className="feature-3">
                    <a href="#">
                      <i className="icon-trophy"></i>
                    </a>
                    <h4>Award</h4>
                    <span>We are Awarded</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="skill-section">
                <ProgressBar title={"Web Design"} width={80} />
                <ProgressBar title={"Web Developing"} width={95} />
                <ProgressBar title={"JavaScript"} width={70} />
              </div>
              <div
                className="row animated-counter-section"
                style={{ marginTop: 30 }}
              >
                <div className="col-md-3 col-sm-6">
                  <div className="animated-counter text-center">
                    <CountUp className="animated-number" end={125} />
                    <h4>Project</h4>
                  </div>
                </div>
                <div className="col-md-3 col-sm-6">
                  <div className="animated-counter text-center">
                    <CountUp className="animated-number" end={586} />
                    <h4>Coffee</h4>
                  </div>
                </div>
                <div className="col-md-3 col-sm-6">
                  <div className="animated-counter text-center">
                    <CountUp className="animated-number" end={355} />
                    <h4>Client</h4>
                  </div>
                </div>
                <div className="col-md-3 col-sm-6">
                  <div className="animated-counter text-center">
                    <CountUp className="animated-number" end={125} />
                    <h4>Award</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
