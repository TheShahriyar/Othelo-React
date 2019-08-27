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
            <FeaturesItem1
              iconName="icon-mobile"
              title1="RESPONSIVE DESIGN"
              subtitle="Donec odio. Quisque volutpat mattis eros. Nullam malesuada"
              title2="Branding Strategies"
              title3="Creative Design"
            >
              <p>
                Phasellus ultrices nulla quis nibh. Quisque a lectus. Donec
                consectetuer ligula vulputate sem tristique cursus. Nam nulla
                quam, gravida non, commodo a, sodales sit amet, nisi. Donec nec
                justo eget felis facilisis fermentum. Aliquam porttitor mauris
                sit amet orci. Aenean dignissim pellentesque felis.
              </p>
            </FeaturesItem1>
            <FeaturesItem1
              iconName="icon-aperture"
              title1="GREAT SUPPORT"
              subtitle="Quisque volutpat mattis eros. Nullam malesuada erat ut turpis."
              title2="Events Planning"
              title3="Dedicated Support"
            >
              <p>
                Phasellus ultrices nulla quis nibh. Quisque a lectus. Donec
                consectetuer ligula vulputate sem tristique cursus. Nam nulla
                quam, gravida non, commodo a, sodales sit amet, nisi. Donec nec
                justo eget felis facilisis fermentum. Aliquam porttitor mauris
                sit amet orci. Aenean dignissim pellentesque felis.
              </p>
            </FeaturesItem1>
            <FeaturesItem1
              iconName="icon-camera"
              title1="RETINA READY"
              subtitle="Donec nec justo eget felis facilisis fermentum. sodales sit amet, nisi"
              title2="DISPLAY'S REVOLUTION"
              title3="100% RETINA READY"
            >
              <p>
                Phasellus ultrices nulla quis nibh. Quisque a lectus. Donec
                consectetuer ligula vulputate sem tristique cursus. Nam nulla
                quam, gravida non, commodo a, sodales sit amet, nisi. Donec nec
                justo eget felis facilisis fermentum. Aliquam porttitor mauris
                sit amet orci. Aenean dignissim pellentesque felis.
              </p>
            </FeaturesItem1>
            <FeaturesItem1
              iconName="icon-document"
              title1="WELL DOCUMENTED"
              subtitle="Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede."
              title2="Content Building"
              title3="Planning &amp; Strategy"
            >
              <p>
                Phasellus ultrices nulla quis nibh. Quisque a lectus. Donec
                consectetuer ligula vulputate sem tristique cursus. Nam nulla
                quam, gravida non, commodo a, sodales sit amet, nisi. Donec nec
                justo eget felis facilisis fermentum. Aliquam porttitor mauris
                sit amet orci. Aenean dignissim pellentesque felis.
              </p>
            </FeaturesItem1>
          </div>
        </div>
      </section>
    );
  }
}
