import React, { Component } from "react";
import SectionTitle from "./SectionTitle";
import FeaturesItem1 from "./FeaturesItem-1";

export default class AboutSection extends Component {
  render() {
    return (
      <section id="about-section" className="pad-t80">
        <div className="container">
          <div className="row">
            <SectionTitle title="About us">
              <p>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec
                odio. Quisque volutpat mattis eros. Nullam malesuada erat ut
                turpis. Suspendisse urna nibh, viverra non, semper suscipit,
                posuere a, pede. Donec nec justo
              </p>
            </SectionTitle>
          </div>
        </div>
        <div className="feature-box">
          <div className="inner-feature-box">
            <FeaturesItem1></FeaturesItem1>
            <FeaturesItem1></FeaturesItem1>
            <FeaturesItem1></FeaturesItem1>
            <FeaturesItem1></FeaturesItem1>
          </div>
        </div>
      </section>
    );
  }
}
